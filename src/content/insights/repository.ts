/**
 * Insights data access layer — CMS-ready
 * --------------------------------------
 * Local `insightPosts` remain as fallback when a slug is not in Sanity.
 * Listing merges published Sanity `blogPost` documents (see `getMergedInsightPostsForListing`).
 */
import type { InsightCategoryId, InsightPost } from "./types";
import { insightCategories } from "./categories";
import { insightPosts } from "./posts";
import { fetchPublishedBlogPostsForInsights } from "@/sanity/lib/fetch-blog-listing";

/** Homepage preview strip — keep filenames in `public/images/blog/` aligned (`preview-<slug>.jpg`). */
export const HOME_PREVIEW_SLUGS = [
  "september-intake-timeline",
  "how-to-read-an-overseas-offer",
  "parent-checklist-study-abroad",
] as const;

/** Legacy shape still used by `BlogPreviewSection` and `blogPosts` re-export. */
export type BlogPostPreview = {
  href: string;
  title: string;
  excerpt: string;
  read: string;
};

export function getAllInsightPosts(): readonly InsightPost[] {
  return [...insightPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getInsightPostBySlug(slug: string): InsightPost | undefined {
  return insightPosts.find((p) => p.slug === slug);
}

export function getFeaturedInsightPost(): InsightPost {
  const featured = insightPosts.find((p) => p.featured);
  if (featured) return featured;
  const sorted = getAllInsightPosts();
  return sorted[0]!;
}

/**
 * Published Sanity posts plus local articles whose slugs are not in CMS — sorted newest first.
 */
export async function getMergedInsightPostsForListing(): Promise<readonly InsightPost[]> {
  const [cms, local] = await Promise.all([
    fetchPublishedBlogPostsForInsights().catch(() => [] as InsightPost[]),
    Promise.resolve(insightPosts),
  ]);
  const cmsSlugs = new Set(cms.map((p) => p.slug));
  const extras = local.filter((p) => !cmsSlugs.has(p.slug));
  const combined = [...cms, ...extras];
  return combined.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

/** Featured hub pick: explicit `featured` flag, else newest in the merged list. */
export function pickFeaturedInsightPost(posts: readonly InsightPost[]): InsightPost {
  const flagged = posts.find((p) => p.featured === true);
  if (flagged) return flagged;
  return posts[0]!;
}

export function getBlogPostsForHomePreview(): readonly BlogPostPreview[] {
  return HOME_PREVIEW_SLUGS.map((slug) => {
    const p = getInsightPostBySlug(slug);
    if (!p) throw new Error(`Missing insight post for homepage preview: ${slug}`);
    return {
      href: `/insights/${p.slug}`,
      title: p.title,
      excerpt: p.excerpt,
      read: p.read,
    };
  });
}

export function insightHref(slug: string): string {
  return `/insights/${slug}`;
}

/** Static chips — can later be driven by CMS taxonomy or search analytics */
export const popularInsightTopics: readonly string[] = [
  "September intake",
  "Finance proof",
  "PGWP",
  "Scholarships",
  "Offer letter",
  "UK vs Australia",
  "Blocked account",
  "IELTS timing",
] as const;

export function filterInsightPosts(params: {
  posts: readonly InsightPost[];
  query: string;
  category: InsightCategoryId | "all";
}): InsightPost[] {
  const q = params.query.trim().toLowerCase();
  return params.posts.filter((p) => {
    if (params.category !== "all" && p.category !== params.category) return false;
    if (!q) return true;
    const hay = `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase();
    return hay.includes(q);
  });
}

export function categoryLabel(id: InsightCategoryId): string {
  return insightCategories.find((c) => c.id === id)?.label ?? id;
}
