import type { Metadata } from "next";
import Script from "next/script";
import {
  BlogPreviewSection,
  CoreProblemSection,
  CountryComparisonSection,
  HeroSection,
  ProcessSection,
  SeptemberIntakeSection,
  TrustBarSection,
  WhyYolotripzSection,
} from "@/components/sections/home";
import { SITE } from "@/lib/constants";
import { defaultMetadata, organizationJsonLd } from "@/lib/seo";

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
      <CoreProblemSection />
      <TrustBarSection />
      <SeptemberIntakeSection />
      <CountryComparisonSection />
      <ProcessSection />
      <WhyYolotripzSection />
      <BlogPreviewSection />
    </>
  );
}
