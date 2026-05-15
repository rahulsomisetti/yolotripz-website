import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { parseStudioGateAllowlist } from "@/lib/studio-gate/allowlist";
import { STUDIO_GATE_COOKIE_NAME } from "@/lib/studio-gate/constants";
import { readStudioGateSecretBytes } from "@/lib/studio-gate/env";
import { verifyStudioGateSession } from "@/lib/studio-gate/jwt";

export async function GET() {
  const secret = readStudioGateSecretBytes();
  const allowlist = parseStudioGateAllowlist(
    process.env.STUDIO_GATE_ALLOWED_EMAILS,
  );

  if (!secret || allowlist.length === 0) {
    return NextResponse.json({ ok: false, misconfigured: true });
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(STUDIO_GATE_COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.json({ ok: false });
  }

  const session = await verifyStudioGateSession(secret, token);
  const ok =
    session !== null && allowlist.includes(session.email.toLowerCase());

  if (!ok) {
    return NextResponse.json({ ok: false });
  }

  return NextResponse.json({ ok: true, email: session.email });
}
