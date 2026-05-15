/**
 * Prevent open redirects: only same-origin relative paths under /studio,
 * excluding the login gate.
 */
export function safeStudioGateNextPath(
  raw: string | null,
  fallback = "/studio",
): string {
  if (!raw || !raw.startsWith("/")) return fallback;
  try {
    const u = new URL(raw, "http://studio-gate.invalid");
    const path = u.pathname.replace(/\/+/g, "/");
    if (!path.startsWith("/studio")) return fallback;
    if (path === "/studio/gate" || path.startsWith("/studio/gate/")) {
      return fallback;
    }
    return `${path}${u.search}`;
  } catch {
    return fallback;
  }
}
