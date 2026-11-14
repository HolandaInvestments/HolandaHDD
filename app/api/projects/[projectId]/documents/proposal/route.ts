import { NextResponse } from "next/server";
import { buildBom } from "@/lib/domains/estimation/bom";
import { generateProposalPdf } from "@/lib/domains/documents/pdf";
import { runEstimation } from "@/lib/domains/estimation/engine";
import { parseEstimationInput } from "@/lib/domains/estimation/validation";
import { analyticsEvents, trackServerEvent } from "@/lib/domains/analytics/events";

export async function POST(request: Request, context: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await context.params;
  const input = parseEstimationInput(await request.json());
  const estimation = runEstimation(input);
  const result = await generateProposalPdf({
    project: input,
    estimation: estimation.output,
    assumptions: estimation.assumptions,
    bomItems: buildBom(input, estimation.output)
  });

  trackServerEvent(analyticsEvents.proposalGenerated, { projectId });

  return NextResponse.json({ projectId, document: result });
}

