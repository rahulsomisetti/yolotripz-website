import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";
import { STUDIO_GATE_JWT_AUD, STUDIO_GATE_JWT_ISS } from "@/lib/studio-gate/constants";

export type StudioGateJwtPayload = { email: string };

export async function signStudioGateSession(
  secret: Uint8Array,
  email: string,
  maxAgeSeconds: number,
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  return new SignJWT({ email } satisfies StudioGateJwtPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(now)
    .setIssuer(STUDIO_GATE_JWT_ISS)
    .setAudience(STUDIO_GATE_JWT_AUD)
    .setExpirationTime(now + maxAgeSeconds)
    .sign(secret);
}

export async function verifyStudioGateSession(
  secret: Uint8Array,
  token: string,
): Promise<StudioGateJwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"],
      issuer: STUDIO_GATE_JWT_ISS,
      audience: STUDIO_GATE_JWT_AUD,
    });
    const email =
      typeof payload.email === "string" ? payload.email.toLowerCase() : null;
    if (!email) return null;
    return { email };
  } catch {
    return null;
  }
}
