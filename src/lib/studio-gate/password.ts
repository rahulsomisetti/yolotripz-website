import { createHash, timingSafeEqual } from "node:crypto";

/** Compare gate password using SHA-256 digests so lengths are fixed for timingSafeEqual. */
export function verifyStudioGatePassword(
  input: string,
  expectedFromEnv: string,
): boolean {
  const hash = (value: string) =>
    createHash("sha256").update(value, "utf8").digest();
  try {
    return timingSafeEqual(hash(input), hash(expectedFromEnv));
  } catch {
    return false;
  }
}
