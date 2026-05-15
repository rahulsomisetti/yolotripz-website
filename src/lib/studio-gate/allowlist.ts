export function parseStudioGateAllowlist(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  return raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

export function normalizeStudioGateEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isStudioGateEmailAllowed(
  email: string,
  allowlist: string[],
): boolean {
  return allowlist.includes(normalizeStudioGateEmail(email));
}
