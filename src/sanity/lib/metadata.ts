import type { Metadata } from "next";

export type SanitySeo = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: { asset?: { _ref?: string } };
  noIndex?: boolean;
};

export function metadataFromSanity(params: {
  fallbackTitle: string;
  fallbackDescription?: string;
  seo?: SanitySeo | null;
  /** Resolved absolute or site-relative OG image URL */
  openGraphImageUrl?: string | null;
}): Pick<Metadata, "title" | "description" | "robots" | "openGraph"> {
  const title = params.seo?.metaTitle?.trim() || params.fallbackTitle;
  const description =
    params.seo?.metaDescription?.trim() || params.fallbackDescription || undefined;
  const noIndex = params.seo?.noIndex === true;
  const og = params.openGraphImageUrl?.trim();

  return {
    title,
    description,
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      ...(og
        ? {
            images: [
              {
                url: og,
                width: 1200,
                height: 630,
                alt: title,
              },
            ],
          }
        : {}),
    },
  };
}
