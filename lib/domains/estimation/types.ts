export const clientTypes = ["office", "clinic", "coworking"] as const;
export const redundancyLevels = ["basic", "standard", "high"] as const;

export type ClientType = (typeof clientTypes)[number];
export type RedundancyLevel = (typeof redundancyLevels)[number];

export type EstimationInput = {
  projectName: string;
  clientType: ClientType;
  officeSizeSqFt: number;
  numberOfFloors: number;
  usersCount: number;
  meetingRooms: number;
  phones: number;
  cameras: number;
  printers: number;
  guestWifiRequired: boolean;
  preferredVendor: string;
  redundancyLevel: RedundancyLevel;
};

export type EstimationRules = {
  version: string;
  verticals: Record<
    ClientType,
    {
      apCoverageSqFt: number;
      usersPerAp: number;
      portsPerUser: number;
      sparePortRatio: number;
      poeWattsPerAp: number;
      poeWattsPerPhone: number;
      poeWattsPerCamera: number;
      printerPortsEach: number;
      meetingRoomPortsEach: number;
      cableFeetPerDrop: number;
      idfSqFtThreshold: number;
      rackPortsPerRack: number;
    }
  >;
  switching: {
    accessPortsPerSwitch: number;
    uplinkPortsReservedPerSwitch: number;
  };
  redundancyMultipliers: Record<RedundancyLevel, number>;
};

export type EstimationOutput = {
  estimatedApCount: number;
  estimatedSwitchCount: number;
  estimatedAccessPorts: number;
  estimatedPoeBudgetWatts: number;
  estimatedMdfCount: number;
  estimatedIdfCount: number;
  estimatedRackCount: number;
  estimatedHorizontalCablingFeet: number;
};

export type EstimationRun = {
  rulesetVersion: string;
  input: EstimationInput;
  output: EstimationOutput;
  assumptions: string[];
  auditLog: string[];
};

export type BomItem = {
  category: string;
  vendor?: string;
  sku?: string;
  description: string;
  quantity: number;
  unit: "each" | "feet" | "hours";
  source: "deterministic_estimation";
};

