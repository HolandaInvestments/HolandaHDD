import {
  clientTypes,
  redundancyLevels,
  type ClientType,
  type EstimationInput,
  type RedundancyLevel
} from "@/lib/domains/estimation/types";

function isClientType(value: unknown): value is ClientType {
  return clientTypes.includes(value as ClientType);
}

function isRedundancyLevel(value: unknown): value is RedundancyLevel {
  return redundancyLevels.includes(value as RedundancyLevel);
}

export function parseEstimationInput(payload: unknown): EstimationInput {
  const data = (payload || {}) as Partial<EstimationInput>;
  const clientType = data.clientType;
  const redundancyLevel = data.redundancyLevel;

  if (!data.projectName || typeof data.projectName !== "string") {
    throw new Error("Project name is required.");
  }

  if (!isClientType(clientType)) {
    throw new Error("Client type must be office, clinic, or coworking.");
  }

  if (!isRedundancyLevel(redundancyLevel)) {
    throw new Error("Redundancy level must be basic, standard, or high.");
  }

  return {
    projectName: data.projectName,
    clientType,
    officeSizeSqFt: Number(data.officeSizeSqFt || 0),
    numberOfFloors: Number(data.numberOfFloors || 1),
    usersCount: Number(data.usersCount || 0),
    meetingRooms: Number(data.meetingRooms || 0),
    phones: Number(data.phones || 0),
    cameras: Number(data.cameras || 0),
    printers: Number(data.printers || 0),
    guestWifiRequired: Boolean(data.guestWifiRequired),
    preferredVendor: String(data.preferredVendor || "Vendor neutral"),
    redundancyLevel
  };
}
