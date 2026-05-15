import { getSanityReadClient } from "./lib/client";
import {
  qAllCountrySlugs,
  qAllCourseSlugs,
  qAllTravelPackageSlugs,
  qAllUniversitySlugs,
  qCountryBySlug,
  qCourseBySlug,
  qCmsSearch,
  qFaqsByCategory,
  qHomepageTestimonials,
  qIntakeAlerts,
  qTravelPackageBySlug,
  qUniversityBySlug,
} from "./lib/queries";

/** Blog document routes — split out so RSC pages do not bundle `@sanity/image-url` via this barrel. */
export { fetchAllBlogSlugs, fetchBlogPostBySlug } from "./lib/fetch-blog-document";
export { fetchPublishedBlogPostsForInsights } from "./lib/fetch-blog-listing";

export async function fetchUniversityBySlug(slug: string) {
  const c = getSanityReadClient();
  if (!c) return null;
  return c.fetch(qUniversityBySlug, { slug });
}

export async function fetchAllUniversitySlugs(): Promise<string[]> {
  const c = getSanityReadClient();
  if (!c) return [];
  return c.fetch<string[]>(qAllUniversitySlugs);
}

export async function fetchCourseBySlug(slug: string) {
  const c = getSanityReadClient();
  if (!c) return null;
  return c.fetch(qCourseBySlug, { slug });
}

export async function fetchAllCourseSlugs(): Promise<string[]> {
  const c = getSanityReadClient();
  if (!c) return [];
  return c.fetch<string[]>(qAllCourseSlugs);
}

export async function fetchCountryBySlug(slug: string) {
  const c = getSanityReadClient();
  if (!c) return null;
  return c.fetch(qCountryBySlug, { slug });
}

export async function fetchAllCountrySlugs(): Promise<string[]> {
  const c = getSanityReadClient();
  if (!c) return [];
  return c.fetch<string[]>(qAllCountrySlugs);
}

export async function fetchTravelPackageBySlug(slug: string) {
  const c = getSanityReadClient();
  if (!c) return null;
  return c.fetch(qTravelPackageBySlug, { slug });
}

export async function fetchAllTravelPackageSlugs(): Promise<string[]> {
  const c = getSanityReadClient();
  if (!c) return [];
  return c.fetch<string[]>(qAllTravelPackageSlugs);
}

export async function fetchHomepageTestimonials() {
  const c = getSanityReadClient();
  if (!c) return [];
  return c.fetch<
    { quote: string; name: string; meta?: string | null; photo?: unknown }[]
  >(qHomepageTestimonials);
}

export async function fetchIntakeAlerts() {
  const c = getSanityReadClient();
  if (!c) return [];
  return c.fetch(qIntakeAlerts);
}

export async function fetchFaqs(category?: string) {
  const c = getSanityReadClient();
  if (!c) return [];
  return c.fetch(qFaqsByCategory, { category: category ?? "" });
}

export async function searchCms(q: string) {
  const c = getSanityReadClient();
  if (!c || !q.trim()) return [];
  const pattern = `*${q.trim().replace(/\s+/g, "*")}*`;
  return c.fetch(qCmsSearch, { q: pattern });
}
