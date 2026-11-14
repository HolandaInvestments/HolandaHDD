import { defaultEstimationRules } from "@/lib/domains/estimation/rules";
import type { EstimationInput, EstimationRules, EstimationRun } from "@/lib/domains/estimation/types";

function positiveNumber(value: number, fallback = 0) {
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

export function runEstimation(
  input: EstimationInput,
  rules: EstimationRules = defaultEstimationRules
): EstimationRun {
  const verticalRules = rules.verticals[input.clientType];
  const floors = Math.max(1, Math.ceil(positiveNumber(input.numberOfFloors, 1)));
  const size = positiveNumber(input.officeSizeSqFt);
  const users = positiveNumber(input.usersCount);
  const meetingRooms = positiveNumber(input.meetingRooms);
  const phones = positiveNumber(input.phones);
  const cameras = positiveNumber(input.cameras);
  const printers = positiveNumber(input.printers);
  const redundancyMultiplier = rules.redundancyMultipliers[input.redundancyLevel];

  const apsByCoverage = Math.ceil(size / verticalRules.apCoverageSqFt);
  const apsByUsers = Math.ceil(users / verticalRules.usersPerAp);
  const guestWifiApBuffer = input.guestWifiRequired ? Math.ceil(floors * 1) : 0;
  const estimatedApCount = Math.max(floors, apsByCoverage, apsByUsers) + guestWifiApBuffer;

  const userPorts = Math.ceil(users * verticalRules.portsPerUser);
  const meetingRoomPorts = meetingRooms * verticalRules.meetingRoomPortsEach;
  const endpointPorts = phones + cameras + printers * verticalRules.printerPortsEach;
  const rawAccessPorts = userPorts + meetingRoomPorts + endpointPorts + estimatedApCount;
  const estimatedAccessPorts = Math.ceil(rawAccessPorts * (1 + verticalRules.sparePortRatio));

  const usablePortsPerSwitch =
    rules.switching.accessPortsPerSwitch - rules.switching.uplinkPortsReservedPerSwitch;
  const estimatedSwitchCount = Math.max(1, Math.ceil(estimatedAccessPorts / usablePortsPerSwitch));

  const poeBudgetBase =
    estimatedApCount * verticalRules.poeWattsPerAp +
    phones * verticalRules.poeWattsPerPhone +
    cameras * verticalRules.poeWattsPerCamera;
  const estimatedPoeBudgetWatts = Math.ceil(poeBudgetBase * redundancyMultiplier);

  const estimatedMdfCount = 1;
  const idfsByArea = Math.max(0, Math.ceil(size / verticalRules.idfSqFtThreshold) - 1);
  const estimatedIdfCount = Math.max(0, idfsByArea + Math.max(0, floors - 1));
  const estimatedRackCount = Math.max(
    1,
    Math.ceil(estimatedAccessPorts / verticalRules.rackPortsPerRack) + estimatedIdfCount
  );
  const estimatedHorizontalCablingFeet = Math.ceil(estimatedAccessPorts * verticalRules.cableFeetPerDrop);

  return {
    rulesetVersion: rules.version,
    input,
    output: {
      estimatedApCount,
      estimatedSwitchCount,
      estimatedAccessPorts,
      estimatedPoeBudgetWatts,
      estimatedMdfCount,
      estimatedIdfCount,
      estimatedRackCount,
      estimatedHorizontalCablingFeet
    },
    assumptions: [
      "Preliminary design only; final device placement requires a site survey.",
      "No full RF simulation or CAD/BIM parsing is included in this MVP estimate.",
      "Switch counts assume 48-port access switches with reserved uplinks.",
      "Cabling estimate uses average horizontal cable length by vertical."
    ],
    auditLog: [
      `Ruleset ${rules.version}`,
      `Vertical profile: ${input.clientType}`,
      `AP count derived from coverage, user density, floors, and guest Wi-Fi buffer.`,
      `BOM must be generated from deterministic outputs only.`
    ]
  };
}

