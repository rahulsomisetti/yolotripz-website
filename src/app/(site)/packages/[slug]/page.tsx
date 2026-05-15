import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { SanityPortableText } from "@/components/sanity/SanityPortableText";
import { ButtonLink } from "@/components/ui/button";
import { fetchAllTravelPackageSlugs, fetchTravelPackageBySlug } from "@/sanity/fetchers";
import { metadataFromSanity } from "@/sanity/lib/metadata";
import { sanityImageUrl } from "@/sanity/lib/image";
import { SITE } from "@/lib/constants";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await fetchAllTravelPackageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await fetchTravelPackageBySlug(slug);
  if (!doc) return { title: "Travel package" };
  return metadataFromSanity({
    fallbackTitle: `${doc.title} | Travel`,
    fallbackDescription: doc.subtitle,
    seo: doc.seo,
  });
}

export default async function TravelPackagePage({ params }: Props) {
  const { slug } = await params;
  const doc = await fetchTravelPackageBySlug(slug);
  if (!doc) notFound();

  const hero = sanityImageUrl(doc.heroImage, 1600);

  return (
    <div className="bg-surface pb-20 pt-12 md:pb-28 md:pt-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Travel package</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">{doc.title}</h1>
        {doc.subtitle ? <p className="mt-3 text-lg text-muted-foreground">{doc.subtitle}</p> : null}
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {doc.duration ? (
            <div>
              <dt className="font-medium text-navy">Duration</dt>
              <dd className="mt-1">{doc.duration}</dd>
            </div>
          ) : null}
          {doc.priceBand ? (
            <div>
              <dt className="font-medium text-navy">Price band</dt>
              <dd className="mt-1">{doc.priceBand}</dd>
            </div>
          ) : null}
        </dl>
        {hero ? (
          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-navy/10">
            <Image src={hero} alt={doc.title as string} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
          </div>
        ) : null}
        {doc.highlights?.length ? (
          <ul className="mt-10 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
            {doc.highlights.map((h: string) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}
        <div className="mt-10">
          <SanityPortableText value={doc.body} />
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/contact#book" variant="primary">
            Enquire about this package
          </ButtonLink>
          <ButtonLink href="/travel-services" variant="secondary">
            Travel services
          </ButtonLink>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">Sanity CMS · {SITE.name}</p>
      </Container>
    </div>
  );
}
