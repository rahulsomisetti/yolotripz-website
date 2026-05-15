"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";

export default function StudioPage() {
  return (
    <div className="relative h-[100dvh] w-full min-w-0 overflow-hidden bg-[hsl(210_14%_98%)] supports-[height:100dvh]:min-h-[100dvh]">
      <NextStudio config={config} />
    </div>
  );
}
