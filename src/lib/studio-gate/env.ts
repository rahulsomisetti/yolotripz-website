export function readStudioGateSecretBytes(): Uint8Array | null {
  const secret = process.env.STUDIO_GATE_SECRET;
  if (!secret || secret.length < 32) return null;
  return new TextEncoder().encode(secret);
}
