export type PostLeadResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

export async function postLead(payload: unknown): Promise<PostLeadResult> {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let body: unknown = null;
  try {
    body = await res.json();
  } catch {
    body = null;
  }

  const err =
    typeof body === "object" &&
    body !== null &&
    "error" in body &&
    typeof (body as { error: unknown }).error === "string"
      ? (body as { error: string }).error
      : "Something went wrong. Please try again.";

  if (!res.ok) {
    return { ok: false, status: res.status, error: err };
  }

  return { ok: true };
}
