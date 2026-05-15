import { NextResponse } from "next/server";
import { searchCms } from "@/sanity/fetchers";

export const revalidate = 30;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const type = searchParams.get("type") ?? "";

  const results = await searchCms(q);
  const filtered =
    type && type !== "all" ? results.filter((r: { _type?: string }) => r._type === type) : results;

  return NextResponse.json({ query: q, type: type || "all", results: filtered });
}
