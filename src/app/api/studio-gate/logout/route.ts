import { NextResponse } from "next/server";
import { STUDIO_GATE_COOKIE_NAME } from "@/lib/studio-gate/constants";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(STUDIO_GATE_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return res;
}
