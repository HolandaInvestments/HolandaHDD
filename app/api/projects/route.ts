import { NextResponse } from "next/server";
import { requireAppSession } from "@/lib/domains/auth/session";
import { analyticsEvents, trackServerEvent } from "@/lib/domains/analytics/events";

export async function POST(request: Request) {
  const session = await requireAppSession();
  const payload = await request.json();

  trackServerEvent(analyticsEvents.projectCreated, {
    organizationId: session.organizationId,
    projectName: payload.projectName
  });

  return NextResponse.json(
    {
      id: "demo-project-id",
      organizationId: session.organizationId,
      status: "draft",
      received: payload
    },
    { status: 201 }
  );
}

