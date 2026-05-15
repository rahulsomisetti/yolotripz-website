import type { Metadata } from "next";
import { brandAssets } from "@/lib/brand/assets";
import { SITE } from "./constants";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yolotripz.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: brandAssets.favicon, sizes: "32x32", type: "image/png" }],
    apple: [{ url: brandAssets.favicon, sizes: "180x180", type: "image/png" }],
  },
  title: {
    default: `${SITE.name} | Overseas Education Consultants, ${SITE.state}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Trusted overseas education counselling for PG admissions in the UK, Australia, New Zealand, and Canada. Based in Mudbidri, Karnataka — serving students and families across Coastal Karnataka since 2017.",
  keywords: [
    "study abroad consultants Karnataka",
    "overseas education Mangalore",
    "UK study abroad consultants",
    "Australia PG abroad consultants",
    "student visa guidance India",
    "Yolotripz",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: `${SITE.name} | Overseas Education Consultants`,
    description:
      "Calm, experienced guidance for PG study abroad — shortlisting, applications, visas, and travel support.",
    images: [
      {
        url: brandAssets.ogShare,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — overseas education consultants`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Overseas Education Consultants`,
    description:
      "Trusted study abroad counselling for Coastal Karnataka families. Book a free counselling session.",
    images: [brandAssets.ogShare],
  },
  robots: { index: true, follow: true },
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    description:
      "International education consultancy offering PG admissions guidance, student visa support, and travel assistance.",
    url: siteUrl,
    foundingDate: String(SITE.foundedYear),
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 13.0681,
        longitude: 74.9942,
      },
      geoRadius: "150000",
      description: "Coastal Karnataka including Mangalore and surrounding districts",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: "IN",
    },
    sameAs: [] as string[],
  };
}
