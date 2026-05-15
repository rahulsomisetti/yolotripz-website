/**
 * Simple sliding-window rate limiter (per-process).
 * For multi-instance production, prefer Redis / Upstash — this stays correct per instance.
 */
const buckets = new Map<string, number[]>();

export function rateLimitSlidingWindow(
  key: string,
  max: number,
  windowMs: number,
): { ok: true } | { ok: false; retryAfterMs: number } {
  const now = Date.now();
  const windowStart = now - windowMs;
  const prev = buckets.get(key) ?? [];
  const kept = prev.filter((t) => t > windowStart);
  if (kept.length >= max) {
    const oldest = kept[0] ?? now;
    return { ok: false, retryAfterMs: Math.max(0, windowMs - (now - oldest)) };
  }
  kept.push(now);
  buckets.set(key, kept);
  return { ok: true };
}
