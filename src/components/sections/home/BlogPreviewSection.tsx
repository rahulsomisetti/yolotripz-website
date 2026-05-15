"use client";

import Link from "next/link";
import { SiteFigureImage } from "@/components/images/SiteFigureImage";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/content/home";
import { siteImages } from "@/lib/site-images";

function slugFromInsightsHref(href: string): string {
  return href.replace(/^\/insights\//, "");
}

export function BlogPreviewSection() {
  return (
    <Section
      id="insights"
      variant="muted"
      eyebrow="Insights"
      title="Short reads for calmer decisions."
      description="No hype — just framing that helps you discuss budget, timing, and risk as a family, with better questions in the room."
      edge
    >
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {blogPosts.map((post, i) => {
          const slug = slugFromInsightsHref(post.href);
          const src = siteImages.blog.previewCard(slug);
          return (
            <Reveal key={post.href} delay={i * 0.06}>
              <Card className="group flex h-full flex-col overflow-hidden border-navy/[0.07] bg-card shadow-ring transition-colors duration-300 ease-premium hover:border-navy/12 hover:bg-background md:rounded-2xl">
                <SiteFigureImage
                  src={src}
                  alt={post.title}
                  aspectClassName="aspect-[16/10]"
                  figureClassName="rounded-none rounded-t-2xl border-0 border-b border-navy/[0.06] shadow-none"
                  imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="flex flex-1 flex-col p-8 md:p-9">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {post.read}
                  </p>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-navy md:text-xl">
                    <Link
                      href={post.href}
                      className="transition-colors duration-200 hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 flex-1 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-primary underline-offset-[5px] hover:underline"
                  >
                    Read article
                  </Link>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-16 text-center md:mt-20" delay={0.12}>
        <Link
          href="/insights"
          className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-navy underline-offset-[5px] transition-colors hover:text-primary hover:underline"
        >
          View all insights
        </Link>
      </Reveal>
    </Section>
  );
}
