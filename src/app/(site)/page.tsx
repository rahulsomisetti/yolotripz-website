import type { Metadata } from "next";
import Script from "next/script";
import {
  BlogPreviewSection,
  CoreProblemSection,
  CountryComparisonSection,
  FinalCtaSection,
  HeroSection,
  ProcessSection,
  SeptemberIntakeSection,
  TestimonialsSection,
  TrustBarSection,
  WhyYolotripzSection,
} from "@/components/sections/home";
import { SITE } from "@/lib/constants";
import { defaultMetadata, organizationJsonLd } from "@/lib/seo";
import { fetchHomepageTestimonials } from "@/sanity/fetchers";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    absolute: `${SITE.name} | Overseas education consultants, Karnataka`,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    url: "/",
    title: `${SITE.name} | Overseas education consultants`,
  },
};

export default async function HomePage() {
  const jsonLd = organizationJsonLd();
  const cmsTestimonials = await fetchHomepageTestimonials().catch(() => [] as { quote: string; name: string; meta?: string | null }[]);
  const testimonialItems =
    cmsTestimonials.length > 0
      ? cmsTestimonials.map((t) => ({ quote: t.quote, name: t.name, meta: t.meta ?? undefined }))
      : undefined;

  return (
    <>
      <Script
        id="yolotripz-org-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>
      <HeroSection />
      <TrustBarSection />
      <CoreProblemSection />
      <CountryComparisonSection />
      <WhyYolotripzSection />
      <ProcessSection />
      <TestimonialsSection items={testimonialItems} />
      <SeptemberIntakeSection />
      <BlogPreviewSection />
      <FinalCtaSection />
    </>
  );
}
