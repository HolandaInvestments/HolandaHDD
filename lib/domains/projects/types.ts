import type { EstimationInput } from "@/lib/domains/estimation/types";
import type { ProjectStatus } from "@/lib/domains/projects/status";

export type Project = {
  id: string;
  organizationId: string;
  name: string;
  clientName?: string;
  clientVertical: EstimationInput["clientType"];
  status: ProjectStatus;
  currentVersion: number;
  createdAt: string;
  updatedAt: string;
};

export type ProjectVersionSnapshot = {
  version: number;
  input: EstimationInput;
  scaleData: Record<string, unknown>;
  zones: Array<Record<string, unknown>>;
  assumptions: string[];
};

