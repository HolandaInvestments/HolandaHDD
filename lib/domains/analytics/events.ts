export const analyticsEvents = {
  projectCreated: "project_created",
  floorPlanUploaded: "floor_plan_uploaded",
  intakeSubmitted: "intake_submitted",
  estimationRunCreated: "estimation_run_created",
  bomCsvExported: "bom_csv_exported",
  proposalGenerated: "proposal_generated",
  checkoutStarted: "checkout_started"
} as const;

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export function trackServerEvent(event: AnalyticsEventName, properties: Record<string, unknown>) {
  if (!process.env.POSTHOG_KEY) {
    return;
  }

  console.info("[analytics]", event, properties);
}

