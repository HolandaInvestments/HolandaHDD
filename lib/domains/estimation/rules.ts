import type { EstimationRules } from "@/lib/domains/estimation/types";

export const defaultEstimationRules: EstimationRules = {
  version: "2026.06.mvp.1",
  verticals: {
    office: {
      apCoverageSqFt: 2500,
      usersPerAp: 28,
      portsPerUser: 1.2,
      sparePortRatio: 0.2,
      poeWattsPerAp: 22,
      poeWattsPerPhone: 7,
      poeWattsPerCamera: 13,
      printerPortsEach: 1,
      meetingRoomPortsEach: 3,
      cableFeetPerDrop: 140,
      idfSqFtThreshold: 18000,
      rackPortsPerRack: 192
    },
    clinic: {
      apCoverageSqFt: 1800,
      usersPerAp: 22,
      portsPerUser: 1.35,
      sparePortRatio: 0.25,
      poeWattsPerAp: 24,
      poeWattsPerPhone: 7,
      poeWattsPerCamera: 15,
      printerPortsEach: 1,
      meetingRoomPortsEach: 4,
      cableFeetPerDrop: 155,
      idfSqFtThreshold: 14000,
      rackPortsPerRack: 192
    },
    coworking: {
      apCoverageSqFt: 1600,
      usersPerAp: 20,
      portsPerUser: 0.75,
      sparePortRatio: 0.3,
      poeWattsPerAp: 24,
      poeWattsPerPhone: 7,
      poeWattsPerCamera: 13,
      printerPortsEach: 1,
      meetingRoomPortsEach: 5,
      cableFeetPerDrop: 135,
      idfSqFtThreshold: 12000,
      rackPortsPerRack: 192
    }
  },
  switching: {
    accessPortsPerSwitch: 48,
    uplinkPortsReservedPerSwitch: 4
  },
  redundancyMultipliers: {
    basic: 1,
    standard: 1.1,
    high: 1.25
  }
};

