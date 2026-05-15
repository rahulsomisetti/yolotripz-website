/**
 * Optional origin lock for public lead POSTs.
 * Set `LEAD_FORM_ALLOWED_ORIGINS` to a comma-separated list of base URLs, e.g.
 * `http://localhost:3000,https://www.example.com`
 */
export function isLeadFormOriginAllowed(request: Request): boolean {
  const bases =
    process.env.LEAD_FORM_ALLOWED_ORIGINS?.split(",").map((s) => s.trim()).filter(Boolean) ?? [];
  if (bases.length === 0) return true;

  const origin = request.headers.get("origin") ?? "";
  const referer = request.headers.get("referer") ?? "";

  return bases.some((base) => {
    if (!base) return false;
    return origin.startsWith(base) || referer.startsWith(base);
  });
}
