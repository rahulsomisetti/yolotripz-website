import { NextResponse } from "next/server";
import { z } from "zod";
import {
  isStudioGateEmailAllowed,
  normalizeStudioGateEmail,
  parseStudioGateAllowlist,
} from "@/lib/studio-gate/allowlist";
import { STUDIO_GATE_COOKIE_NAME } from "@/lib/studio-gate/constants";
import { readStudioGateSecretBytes } from "@/lib/studio-gate/env";
import { signStudioGateSession } from "@/lib/studio-gate/jwt";
import { verifyStudioGatePassword } from "@/lib/studio-gate/password";

const bodySchema = z.object({
  email: z.string().email().max(320),
  password: z.string().min(1).max(512),
  remember: z.boolean().optional(),
});

const SESSION_SHORT_SEC = 60 * 60 * 12; // 12 hours
const SESSION_LONG_SEC = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: Request) {
  const secret = readStudioGateSecretBytes();
  const allowlist = parseStudioGateAllowlist(
    process.env.STUDIO_GATE_ALLOWED_EMAILS,
  );
  const gatePassword = process.env.STUDIO_GATE_PASSWORD ?? "";

  if (!secret || allowlist.length === 0 || !gatePassword) {
    return NextResponse.json(
      { error: "Studio gate is not configured on the server." },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, password, remember } = parsed.data;
  const normalized = normalizeStudioGateEmail(email);

  if (!isStudioGateEmailAllowed(normalized, allowlist)) {
    return NextResponse.json(
      { error: "Sign-in was not successful." },
      { status: 401 },
    );
  }

  if (!verifyStudioGatePassword(password, gatePassword)) {
    return NextResponse.json(
      { error: "Sign-in was not successful." },
      { status: 401 },
    );
  }

  const maxAge = remember ? SESSION_LONG_SEC : SESSION_SHORT_SEC;
  const token = await signStudioGateSession(secret, normalized, maxAge);

  const res = NextResponse.json({ ok: true });
  res.cookies.set(STUDIO_GATE_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  });

  return res;
}
