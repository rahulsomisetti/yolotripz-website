/** HttpOnly cookie holding a short-lived HS256 JWT (email claim). */
export const STUDIO_GATE_COOKIE_NAME = "studio_gate";

/** Issuer / audience for gate tokens (defense in depth). */
export const STUDIO_GATE_JWT_ISS = "yolotripz-studio-gate";
export const STUDIO_GATE_JWT_AUD = "next-studio";
