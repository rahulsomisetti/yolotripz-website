import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { isSanityConfigured } from "./client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

const builder = createImageUrlBuilder({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
});

export function imageBuilder(source: SanityImageSource | undefined) {
  if (!isSanityConfigured() || !source) return null;
  return builder.image(source).auto("format").fit("max");
}

export function sanityImageUrl(source: SanityImageSource | undefined, width = 1200) {
  const b = imageBuilder(source);
  return b ? b.width(width).url() : null;
}
