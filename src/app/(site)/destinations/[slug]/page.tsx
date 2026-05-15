import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SanityPortableText } from "@/components/sanity/SanityPortableText";
import { ButtonLink } from "@/components/ui/button";
import { fetchAllCountrySlugs, fetchCountryBySlug } from "@/sanity/fetchers";
import { metadataFromSanity } from "@/sanity/lib/metadata";
import { sanityImageUrl } from "@/sanity/lib/image";
import { SITE } from "@/lib/constants";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await fetchAllCountrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await fetchCountryBySlug(slug);
  if (!doc) return { title: "Destination" };
  return metadataFromSanity({
    fallbackTitle: `${doc.name} | Destinations`,
    fallbackDescription: doc.summary,
    seo: doc.seo,
  });
}

export default async function DestinationCountryPage({ params }: Props) {
  const { slug } = await params;
  const doc = await fetchCountryBySlug(slug);
  if (!doc) notFound();

  const hero = sanityImageUrl(doc.heroImage, 1600);

  return (
    <div className="bg-surface pb-20 pt-12 md:pb-28 md:pt-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Destination (CMS)</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">{doc.name}</h1>
        {doc.region ? <p className="mt-2 text-sm text-muted-foreground">{doc.region}</p> : null}
        <p className="mt-6 max-w-prose text-lg text-muted-foreground">{doc.summary}</p>
        {hero ? (
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl border border-navy/10">
            <Image
              src={hero}
              alt={doc.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        ) : null}
        <div className="mt-12">
          <SanityPortableText value={doc.body} />
        </div>
        <p className="mt-8 max-w-prose text-sm text-muted-foreground">
          For curated country guides (UK, Australia, etc.) see the static{" "}
          <Link href="/#countries" className="font-semibold text-primary underline-offset-4 hover:underline">
            destinations on the homepage
          </Link>
          — this page is CMS-driven for additional markets.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact#book" variant="primary">
            Talk to a counsellor
          </ButtonLink>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">Sanity CMS · {SITE.name}</p>
      </Container>
    </div>
  );
}
