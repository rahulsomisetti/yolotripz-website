import { getSanityReadClient } from "./client";
import { qAllBlogSlugs, qBlogBySlug } from "./queries";

/**
 * Slug-level blog fetches only — keep this module free of `@sanity/image-url` so
 * RSC routes (e.g. `/insights/[slug]`) do not pull a broken webpack vendor chunk.
 */
export async function fetchAllBlogSlugs(): Promise<string[]> {
  const c = getSanityReadClient();
  if (!c) return [];
  return c.fetch<string[]>(qAllBlogSlugs);
}

export async function fetchBlogPostBySlug(slug: string) {
  const c = getSanityReadClient();
  if (!c) return null;
  return c.fetch(qBlogBySlug, { slug });
}
