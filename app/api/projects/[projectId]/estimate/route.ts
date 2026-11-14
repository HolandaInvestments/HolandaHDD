import { NextResponse } from "next/server";
import { parseEstimationInput } from "@/lib/domains/estimation/validation";
import { runEstimation } from "@/lib/domains/estimation/engine";
import { buildBom } from "@/lib/domains/estimation/bom";
import { analyticsEvents, trackServerEvent } from "@/lib/domains/analytics/events";

export async function POST(request: Request, context: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await context.params;
  const input = parseEstimationInput(await request.json());
  const estimation = runEstimation(input);
  const bom = buildBom(input, estimation.output);

  trackServerEvent(analyticsEvents.estimationRunCreated, {
    projectId,
    rulesetVersion: estimation.rulesetVersion
  });

  return NextResponse.json({ projectId, estimation, bom });
}

