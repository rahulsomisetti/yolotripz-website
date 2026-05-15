import { NextResponse } from "next/server";
import { isLeadFormOriginAllowed } from "@/lib/leads/origin";
import { rateLimitSlidingWindow } from "@/lib/leads/rateLimit";
import {
  contactBodyToLeadFields,
  newsletterBodyToLeadFields,
  parseAndValidateLeadJson,
} from "@/lib/leads/validation";
import { getSanityWriteClient } from "@/sanity/lib/writeClient";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 48_000;

function clientIp(request: Request): string {
  const xf = request.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return "unknown";
}

export async function POST(request: Request) {
  if (!isLeadFormOriginAllowed(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = clientIp(request);
  const rl = rateLimitSlidingWindow(`lead:${ip}`, 10, 60_000);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a moment and try again." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.max(1, Math.ceil(rl.retryAfterMs / 1000))) },
      },
    );
  }

  const len = Number(request.headers.get("content-length") ?? "0");
  if (len > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validated = parseAndValidateLeadJson(json, Date.now());
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error, code: validated.code }, { status: validated.status });
  }

  const write = getSanityWriteClient();
  if (!write) {
    return NextResponse.json(
      { error: "Lead capture is not configured on this deployment." },
      { status: 503 },
    );
  }

  const doc =
    validated.data.source === "contact"
      ? contactBodyToLeadFields(validated.data)
      : newsletterBodyToLeadFields(validated.data);

  try {
    const cleaned = JSON.parse(JSON.stringify(doc)) as { _type: "lead" } & Record<string, unknown>;
    await write.create(cleaned);
  } catch (e) {
    console.error("[api/leads] Sanity create failed", e);
    return NextResponse.json({ error: "Could not save your submission. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
