import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parseStudioGateAllowlist } from "@/lib/studio-gate/allowlist";
import { STUDIO_GATE_COOKIE_NAME } from "@/lib/studio-gate/constants";
import { readStudioGateSecretBytes } from "@/lib/studio-gate/env";
import { verifyStudioGateSession } from "@/lib/studio-gate/jwt";

function isStudioGatePath(pathname: string): boolean {
  return pathname === "/studio" || pathname.startsWith("/studio/");
}

function isStudioGateLoginPath(pathname: string): boolean {
  return pathname === "/studio/gate" || pathname.startsWith("/studio/gate/");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isStudioGatePath(pathname)) {
    return NextResponse.next();
  }

  if (isStudioGateLoginPath(pathname)) {
    return NextResponse.next();
  }

  const secret = readStudioGateSecretBytes();
  const allowlist = parseStudioGateAllowlist(
    process.env.STUDIO_GATE_ALLOWED_EMAILS,
  );

  if (!secret || allowlist.length === 0) {
    const gate = new URL("/studio/gate", request.url);
    gate.searchParams.set("reason", "misconfigured");
    return NextResponse.redirect(gate);
  }

  const token = request.cookies.get(STUDIO_GATE_COOKIE_NAME)?.value;
  const session = token ? await verifyStudioGateSession(secret, token) : null;
  const ok =
    session !== null && allowlist.includes(session.email.toLowerCase());

  if (ok) {
    return NextResponse.next();
  }

  const login = new URL("/studio/gate", request.url);
  const nextPath = `${pathname}${request.nextUrl.search}`;
  login.searchParams.set("next", nextPath);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ["/studio", "/studio/:path*"],
};
