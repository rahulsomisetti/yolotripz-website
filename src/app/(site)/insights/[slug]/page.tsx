import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryLabel,
  getAllInsightPosts,
  getInsightPostBySlug,
  insightHref,
  type InsightCategoryId,
} from "@/content/insights";
import { SanityPortableText } from "@/components/sanity/SanityPortableText";
import { ButtonLink } from "@/components/ui/button";
import { getWhatsAppLink, SITE } from "@/lib/constants";
import { siteUrl } from "@/lib/seo";
import { fetchAllBlogSlugs, fetchBlogPostBySlug } from "@/sanity/lib/fetch-blog-document";
import { metadataFromSanity } from "@/sanity/lib/metadata";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

const insightCategoryIds: readonly InsightCategoryId[] = [
  "study-abroad-decisions",
  "visa-updates",
  "scholarships",
  "pg-courses",
  "country-comparisons",
] as const;

function blogCategoryLabel(cat?: string | null) {
  if (!cat) return "Insights";
  if ((insightCategoryIds as readonly string[]).includes(cat)) {
    return categoryLabel(cat as InsightCategoryId);
  }
  return cat.replace(/-/g, " ");
}

type CmsBlog = NonNullable<Awaited<ReturnType<typeof fetchBlogPostBySlug>>>;

function blogHeroImageUrl(cms: CmsBlog): string | null {
  const u = (cms as { heroImageUrl?: unknown }).heroImageUrl;
  return typeof u === "string" && u.length > 0 ? u : null;
}

export async function generateStaticParams() {
  const [cmsSlugs, local] = await Promise.all([
    fetchAllBlogSlugs().catch(() => [] as string[]),
    Promise.resolve(getAllInsightPosts().map((p) => p.slug)),
  ]);
  const slugs = [...new Set([...cmsSlugs, ...local])];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cms = await fetchBlogPostBySlug(slug);
  if (cms) {
    const base = metadataFromSanity({
      fallbackTitle: cms.title as string,
      fallbackDescription: cms.excerpt as string,
      seo: cms.seo,
      openGraphImageUrl: blogHeroImageUrl(cms),
    });
    return {
      ...base,
      openGraph: {
        ...base.openGraph,
        type: "article",
        publishedTime: cms.publishedAt as string | undefined,
        url: `${siteUrl}${insightHref(slug)}`,
      },
    };
  }

  const post = getInsightPostBySlug(slug);
  if (!post) return { title: "Article" };
  const url = `${siteUrl}${insightHref(post.slug)}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url,
    },
  };
}

function jsonLdForSlug(slug: string, cms: Awaited<ReturnType<typeof fetchBlogPostBySlug>>) {
  if (cms) {
    const hero = blogHeroImageUrl(cms);
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: cms.title,
      description: cms.excerpt,
      datePublished: cms.publishedAt,
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name },
      url: `${siteUrl}${insightHref(slug)}`,
      keywords: Array.isArray(cms.tags) ? (cms.tags as string[]).join(", ") : undefined,
      articleSection: blogCategoryLabel(cms.category as string | undefined),
      ...(hero ? { image: hero } : {}),
    };
  }

  const post = getInsightPostBySlug(slug);
  if (!post) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    url: `${siteUrl}${insightHref(post.slug)}`,
    keywords: post.tags.join(", "),
    articleSection: categoryLabel(post.category),
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const cms = await fetchBlogPostBySlug(slug);
  const local = getInsightPostBySlug(slug);

  if (!cms && !local) notFound();

  const jsonLd = jsonLdForSlug(slug, cms);

  if (cms) {
    const tags = (cms.tags as string[] | undefined) ?? [];
    const heroUrl = blogHeroImageUrl(cms);
    const author = typeof cms.authorName === "string" ? cms.authorName.trim() : "";
    return (
      <div className="bg-surface py-16 md:py-24">
        {jsonLd ? (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        ) : null}
        <article className="mx-auto max-w-content px-5 sm:px-6 lg:px-8">
          {heroUrl ? (
            <figure className="relative mb-10 aspect-[2/1] w-full max-h-[min(28rem,55vh)] overflow-hidden rounded-2xl border border-border bg-muted shadow-soft">
              <Image
                src={heroUrl}
                alt={cms.title as string}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, min(72rem, 100vw)"
              />
            </figure>
          ) : null}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="rounded-full border border-navy/10 bg-muted/50 px-2.5 py-0.5 text-navy">
              {blogCategoryLabel(cms.category as string | undefined)}
            </span>
            <time dateTime={cms.publishedAt as string}>
              {new Intl.DateTimeFormat("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(cms.publishedAt as string))}
            </time>
            <span aria-hidden>·</span>
            <span>{(cms.readTime as string) ?? "Read"}</span>
            {author ? (
              <>
                <span aria-hidden>·</span>
                <span className="text-muted-foreground">{author}</span>
              </>
            ) : null}
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.12] text-navy sm:text-4xl sm:leading-[1.1]">
            {cms.title as string}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">{cms.excerpt as string}</p>
          {tags.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Topics">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-12">
            <SanityPortableText value={cms.body} />
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href={getWhatsAppLink(`Hi, I read: ${cms.title}`)} variant="primary">
              Discuss with a counsellor
            </ButtonLink>
            <ButtonLink href="/insights" variant="secondary">
              All insights
            </ButtonLink>
          </div>
          <p className="mt-12 text-xs text-muted-foreground">Published from Sanity CMS</p>
          <p className="mt-8">
            <Link href="/" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
              ← Home
            </Link>
          </p>
        </article>
      </div>
    );
  }

  const post = local!;

  return (
    <div className="bg-surface py-16 md:py-24">
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}
      <article className="mx-auto max-w-content px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="rounded-full border border-navy/10 bg-muted/50 px-2.5 py-0.5 text-navy">
            {categoryLabel(post.category)}
          </span>
          <time dateTime={post.publishedAt}>
            {new Intl.DateTimeFormat("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.publishedAt))}
          </time>
          <span aria-hidden>·</span>
          <span>{post.read}</span>
        </div>
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.12] text-navy sm:text-4xl sm:leading-[1.1]">
          {post.title}
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        {post.tags.length > 0 ? (
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Topics">
            {post.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-12 max-w-prose space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Full article body can be connected here via MDX or your CMS rich text field. The listing page already
            exposes structured metadata for SEO; swap this paragraph for portable content when ready.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href={getWhatsAppLink(`Hi, I read: ${post.title}`)} variant="primary">
            Discuss with a counsellor
          </ButtonLink>
          <ButtonLink href="/insights" variant="secondary">
            All insights
          </ButtonLink>
        </div>
        <p className="mt-12">
          <Link href="/" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            ← Home
          </Link>
        </p>
      </article>
    </div>
  );
}
