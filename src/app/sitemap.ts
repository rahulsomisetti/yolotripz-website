import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import {
  fetchAllCountrySlugs,
  fetchAllCourseSlugs,
  fetchAllUniversitySlugs,
} from "@/sanity/fetchers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Pages
  const staticRoutes = [
    "",
    "/study-abroad",
    "/visa-services",
    "/travel-services",
    "/about",
    "/insights",
    "/intakes",
    "/faq",
    "/contact",
    "/medical-studies",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Fetch CMS-driven slugs
  const [countries, courses, universities] = await Promise.all([
    fetchAllCountrySlugs().catch(() => []),
    fetchAllCourseSlugs().catch(() => []),
    fetchAllUniversitySlugs().catch(() => []),
  ]);

  const countryRoutes = countries.map((slug) => ({
    url: `${siteUrl}/destinations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const courseRoutes = courses.map((slug) => ({
    url: `${siteUrl}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const universityRoutes = universities.map((slug) => ({
    url: `${siteUrl}/universities/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...countryRoutes, ...courseRoutes, ...universityRoutes];
}
