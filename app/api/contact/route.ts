import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";
import { validateContactPayload } from "@/lib/validation";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (!current || current.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  try {
    const body = await request.json();
    const result = validateContactPayload(body);

    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    await sendContactEmails(result.data);

    return NextResponse.json({ message: "Your request was sent successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "We could not send your request. Please try again." }, { status: 500 });
  }
}
