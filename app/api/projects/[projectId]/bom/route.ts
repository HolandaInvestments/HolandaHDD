import { NextResponse } from "next/server";
import { bomToCsv, buildBom } from "@/lib/domains/estimation/bom";
import { runEstimation } from "@/lib/domains/estimation/engine";
import { parseEstimationInput } from "@/lib/domains/estimation/validation";
import { analyticsEvents, trackServerEvent } from "@/lib/domains/analytics/events";

export async function POST(request: Request, context: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await context.params;
  const input = parseEstimationInput(await request.json());
  const estimation = runEstimation(input);
  const csv = bomToCsv(buildBom(input, estimation.output));

  trackServerEvent(analyticsEvents.bomCsvExported, { projectId });

  return new NextResponse(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="${projectId}-bom.csv"`
    }
  });
}

