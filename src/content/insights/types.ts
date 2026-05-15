/** Category slugs — stable IDs for filters, CMS mapping, and URLs. */
export type InsightCategoryId =
  | "study-abroad-decisions"
  | "visa-updates"
  | "scholarships"
  | "pg-courses"
  | "country-comparisons";

/**
 * Canonical insight article shape.
 * Swap the repository implementation to hydrate from a CMS while keeping this contract.
 */
export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Display string e.g. "6 min read" */
  read: string;
  /** ISO 8601 date — used for sorting and schema.org */
  publishedAt: string;
  category: InsightCategoryId;
  /** Free-form tags for search + “popular topics” chips */
  tags: string[];
  /** At most one post should be featured at a time */
  featured?: boolean;
  /** Sanity CDN URL for listing cards / hero when `mainImage` or OG image is set in CMS */
  imageUrl?: string | null;
};

export type InsightCategoryMeta = {
  id: InsightCategoryId;
  label: string;
  description: string;
};
