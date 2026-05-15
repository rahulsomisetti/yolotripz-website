import type { Metadata } from "next";
import { InsightsIndex } from "@/components/sections/insights";
import {
  getMergedInsightPostsForListing,
  insightCategories,
  insightHref,
  pickFeaturedInsightPost,
  popularInsightTopics,
  type InsightPost,
} from "@/content/insights";
import { SITE } from "@/lib/constants";
import { siteUrl } from "@/lib/seo";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights & Guides | Study Abroad, Visas & PG",
  description: `${SITE.name} insights for parents and PG students in ${SITE.city}, ${SITE.state} — study abroad decisions, visa documentation, scholarships, PG courses, and country comparisons. Search, browse by category, and subscribe for updates.`,
  keywords: [
    "study abroad blog Karnataka",
    "PG intake timeline India",
    "student visa documentation parents",
    "scholarships PG masters",
    "UK vs Australia masters",
    "Yolotripz insights",
  ],
  openGraph: {
    title: `Insights | ${SITE.name}`,
    description:
      "Authority-building guides for overseas education — categories, search, and a calm newsletter path.",
    type: "website",
  },
};

function insightsListingJsonLd(posts: readonly InsightPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE.name} Insights`,
    description:
      "Practical articles on study abroad timing, visas, scholarships, PG courses, and country comparisons.",
    url: `${siteUrl}/insights`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.publishedAt,
      url: `${siteUrl}${insightHref(p.slug)}`,
      ...(p.imageUrl ? { image: p.imageUrl } : {}),
    })),
  };
}

export default async function InsightsPage() {
  const allPostsSorted = await getMergedInsightPostsForListing();

  if (allPostsSorted.length === 0) {
    return (
      <div className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h1 className="font-display text-2xl font-semibold text-navy">Insights coming soon</h1>
          <p className="mt-4 text-muted-foreground">
            No published articles are available yet. Check back shortly, or open Sanity Studio to
            publish your first post.
          </p>
        </div>
      </div>
    );
  }

  const featured = pickFeaturedInsightPost(allPostsSorted);
  const jsonLd = insightsListingJsonLd(allPostsSorted);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsIndex
        allPostsSorted={allPostsSorted}
        featured={featured}
        categories={insightCategories}
        popularTopics={popularInsightTopics}
      />
    </>
  );
}
