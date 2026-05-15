"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import type { InsightCategoryId, InsightCategoryMeta, InsightPost } from "@/content/insights";
import {
  categoryLabel,
  filterInsightPosts,
  insightHref,
} from "@/content/insights";
import { SITE } from "@/lib/constants";
import { postLead } from "@/lib/leads/client";

type Props = {
  allPostsSorted: readonly InsightPost[];
  featured: InsightPost;
  categories: readonly InsightCategoryMeta[];
  popularTopics: readonly string[];
};

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function InsightsIndex({ allPostsSorted, featured, categories, popularTopics }: Props) {
  const reduce = useReducedMotion() === true;
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [category, setCategory] = useState<InsightCategoryId | "all">("all");

  const filtered = useMemo(
    () =>
      filterInsightPosts({
        posts: allPostsSorted,
        query: deferredQuery,
        category,
      }),
    [allPostsSorted, deferredQuery, category],
  );

  const hasActiveFilter = query.trim().length > 0 || category !== "all";

  const gridPosts = useMemo(() => {
    if (hasActiveFilter) return filtered;
    return allPostsSorted.filter((p) => p.slug !== featured.slug);
  }, [allPostsSorted, featured.slug, filtered, hasActiveFilter]);

  const gridTitle = hasActiveFilter ? "Matching insights" : "Recent insights";
  const gridDescription = hasActiveFilter
    ? "Articles that match your search and category — refine anytime."
    : "Short reads for parents and PG students — newest first, beyond the featured guide.";

  return (
    <div className="bg-surface">
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/50 via-surface to-surface pb-16 pt-20 md:pb-20 md:pt-24 lg:pb-24 lg:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_90%_-10%,hsl(var(--navy)/0.05),transparent)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
              Insights
            </p>
            <h1 className="mt-4 font-display text-[1.85rem] font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl sm:leading-[1.06]">
              Calmer decisions for study abroad families.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.65] text-muted-foreground sm:text-lg">
              Practical framing on intakes, visas, scholarships, PG courses, and country trade-offs
              — written for SEO and for parents who want authority without noise.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-14 md:py-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Featured
          </p>
          <Link href={insightHref(featured.slug)} className="group mt-4 block">
            <Card className="overflow-hidden border-navy/[0.08] bg-card shadow-soft transition-all duration-300 ease-out hover:border-navy/12 hover:shadow-soft-hover md:flex md:min-h-[17rem]">
              <div className="relative flex flex-1 flex-col justify-center p-8 md:w-[58%] md:p-10 lg:p-12">
                <span className="inline-flex w-fit rounded-full border border-navy/10 bg-muted/60 px-3 py-1 text-xs font-semibold text-navy">
                  {categoryLabel(featured.category)}
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-[1.15] text-navy group-hover:text-primary sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-[1.65] text-muted-foreground sm:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground sm:text-sm">
                  <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt)}</time>
                  <span aria-hidden className="text-border">
                    ·
                  </span>
                  <span>{featured.read}</span>
                </div>
                <span className="mt-8 inline-flex text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                  Read featured article →
                </span>
              </div>
              <div className="relative min-h-[11rem] border-t border-border md:min-h-0 md:w-[42%] md:border-l md:border-t-0">
                {featured.imageUrl ? (
                  <Image
                    src={featured.imageUrl}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 38vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy/[0.04] via-muted/30 to-muted/60 p-8">
                    <p className="max-w-[14rem] text-center text-sm leading-relaxed text-muted-foreground">
                      For parents: start here if September intake is on your radar this year.
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </Link>
        </motion.div>
      </Container>

      <Section
        id="browse"
        variant="muted"
        eyebrow="Browse"
        title="Categories"
        description="Filter articles by theme. Same taxonomy you can map 1:1 from a headless CMS collection."
        className="!py-16 md:!py-20"
      >
        <div className="flex flex-wrap gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              category === "all"
                ? "border-navy bg-navy text-white"
                : "border-navy/15 bg-card text-navy hover:border-navy/25"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              aria-pressed={category === c.id}
              title={c.description}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === c.id
                  ? "border-navy bg-navy text-white"
                  : "border-navy/15 bg-card text-navy hover:border-navy/25"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <label htmlFor="insights-search" className="sr-only">
            Search insights
          </label>
          <div className="relative mx-auto max-w-xl">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              id="insights-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search titles, topics, or excerpts…"
              className="w-full rounded-2xl border border-navy/10 bg-card py-3.5 pl-11 pr-4 text-sm text-navy shadow-sm outline-none ring-offset-background transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              aria-busy={query !== deferredQuery}
            />
          </div>
        </div>
      </Section>

      <Section
        variant="default"
        eyebrow="Library"
        title={gridTitle}
        description={gridDescription}
        className="!py-16 md:!py-20"
      >
        {gridPosts.length === 0 ? (
          <Card className="border-navy/[0.08] bg-card p-10 text-center shadow-soft">
            <p className="text-muted-foreground">No articles match — try clearing search or picking “All”.</p>
            <button
              type="button"
              className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              Reset filters
            </button>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {gridPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.04}>
                <Card className="flex h-full flex-col overflow-hidden border-navy/[0.08] bg-card shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-navy/12 hover:shadow-soft-hover">
                  {post.imageUrl ? (
                    <div className="relative aspect-[16/9] w-full shrink-0 bg-muted">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full border border-navy/10 bg-muted/50 px-2.5 py-0.5 font-medium text-navy">
                        {categoryLabel(post.category)}
                      </span>
                      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-navy">
                      <Link href={insightHref(post.slug)} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-[1.65] text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-5 text-xs font-medium text-muted-foreground">{post.read}</p>
                    <Link
                      href={insightHref(post.slug)}
                      className="mt-6 inline-flex min-h-10 items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Read article
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <Section
        variant="muted"
        eyebrow="Topics"
        title="Popular topics"
        description="Quick entry points — each chip fills search so you see related articles together."
        className="!py-16 md:!py-20"
      >
        <div className="flex flex-wrap gap-2 md:gap-3">
          {popularTopics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => setQuery(topic)}
              className="rounded-full border border-navy/10 bg-card px-4 py-2 text-sm text-navy transition-colors hover:border-primary/30 hover:bg-muted/40"
            >
              {topic}
            </button>
          ))}
        </div>
      </Section>

      <InsightsNewsletter />

      <div className="border-t border-border bg-muted/30 py-10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-center gap-4 px-4 text-center sm:flex-row sm:gap-8 sm:px-6 lg:px-10">
          <ButtonLink href="/study-abroad" variant="secondary" size="sm">
            Study abroad
          </ButtonLink>
          <Link href="/" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function InsightsNewsletter() {
  const formLoadedAtRef = useRef<number | null>(null);
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (formLoadedAtRef.current == null) {
      formLoadedAtRef.current = Date.now();
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!email.trim()) {
      setError("Please add your email.");
      return;
    }
    const formLoadedAt = formLoadedAtRef.current;
    if (formLoadedAt == null) {
      setError("Please wait a moment and try again.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await postLead({
        source: "insights-newsletter",
        email: email.trim(),
        formLoadedAt,
        _hp: hp || undefined,
      });
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setSuccess(true);
      setEmail("");
      setHp("");
      formLoadedAtRef.current = Date.now();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section
      id="newsletter"
      variant="default"
      eyebrow="Stay informed"
      title="Newsletter — low volume, high clarity."
      description="We will not flood your inbox. Expect occasional notes when a new guide is published or when intake windows shift materially."
      className="!py-16 md:!py-20"
    >
      <Reveal>
        <Card className="mx-auto max-w-2xl border border-navy/[0.07] bg-gradient-to-br from-card to-muted/30 p-8 shadow-ring md:p-10">
          <form onSubmit={handleSubmit} className="relative flex flex-col gap-4 sm:flex-row sm:items-end">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
            />
            <div className="min-w-0 flex-1">
              <label htmlFor="newsletter-email" className="text-sm font-medium text-navy">
                Email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-navy/[0.1] bg-background px-4 py-3 text-sm text-navy outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95 disabled:pointer-events-none disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request to subscribe"}
            </button>
          </form>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            We store your request as a lead in our private CRM so the team can add you to the right
            list. You can also email us directly at {SITE.email}.
          </p>
          {error ? (
            <p className="mt-3 text-sm text-destructive" role="alert">
              {error}
            </p>
          ) : null}
          {success ? (
            <p className="mt-3 text-sm font-medium text-navy" role="status">
              Thank you — we received your request. Our team will confirm your subscription from our
              side when the list is active.
            </p>
          ) : null}
        </Card>
      </Reveal>
    </Section>
  );
}
