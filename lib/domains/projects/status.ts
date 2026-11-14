export const projectStatuses = ["draft", "processing", "ready", "exported"] as const;

export type ProjectStatus = (typeof projectStatuses)[number];

export const projectStatusLabels: Record<ProjectStatus, string> = {
  draft: "Draft",
  processing: "Processing",
  ready: "Ready",
  exported: "Exported"
};

