import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { normalizeInsightCategory } from "@/content/insights/category";
import type { InsightPost } from "@/content/insights/types";
import { getSanityReadClient } from "./client";
import { sanityImageUrl } from "./image";
import { qBlogPostsForInsights } from "./queries";

type SanityBlogListRow = {
  slug: string;
  title: string;
  excerpt?: string | null;
  readTime?: string | null;
  publishedAt: string;
  category?: string | null;
  tags?: string[] | null;
  featured?: boolean | null;
  mainImage?: SanityImageSource | null;
  seo?: { ogImage?: SanityImageSource | null } | null;
};

function mapSanityBlogListRow(row: SanityBlogListRow): InsightPost {
  const publishedAt =
    typeof row.publishedAt === "string"
      ? row.publishedAt
      : new Date(row.publishedAt).toISOString();
  const imageUrl =
    sanityImageUrl(row.mainImage ?? undefined, 900) ??
    sanityImageUrl(row.seo?.ogImage ?? undefined, 900);

  return {
    slug: row.slug,
    title: row.title,
    excerpt: (row.excerpt ?? "").trim() || "",
    read: row.readTime?.trim() || "5 min read",
    publishedAt,
    category: normalizeInsightCategory(row.category),
    tags: Array.isArray(row.tags) ? row.tags.filter(Boolean) : [],
    featured: row.featured === true,
    imageUrl,
  };
}

/** Published `blogPost` documents for `/insights` hub (drafts excluded in GROQ + published API). */
export async function fetchPublishedBlogPostsForInsights(): Promise<InsightPost[]> {
  const c = getSanityReadClient();
  if (!c) return [];
  const rows = await c.fetch<SanityBlogListRow[]>(qBlogPostsForInsights).catch(() => []);
  return rows.map(mapSanityBlogListRow);
}
