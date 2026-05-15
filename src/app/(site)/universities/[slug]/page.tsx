import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { SanityPortableText } from "@/components/sanity/SanityPortableText";
import { ButtonLink } from "@/components/ui/button";
import { fetchAllUniversitySlugs, fetchUniversityBySlug } from "@/sanity/fetchers";
import { metadataFromSanity } from "@/sanity/lib/metadata";
import { sanityImageUrl } from "@/sanity/lib/image";
import { SITE } from "@/lib/constants";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await fetchAllUniversitySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await fetchUniversityBySlug(slug);
  if (!doc) return { title: "University" };
  return metadataFromSanity({
    fallbackTitle: `${doc.name} | Universities`,
    fallbackDescription: doc.shortDescription,
    seo: doc.seo,
  });
}

export default async function UniversityPage({ params }: Props) {
  const { slug } = await params;
  const doc = await fetchUniversityBySlug(slug);
  if (!doc) notFound();

  const cover = sanityImageUrl(doc.coverImage, 1600);
  const logo = sanityImageUrl(doc.logo, 400);

  return (
    <div className="bg-surface pb-20 pt-12 md:pb-28 md:pt-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">University</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {logo ? (
            <Image src={logo} alt={`${doc.name} logo`} width={80} height={80} className="h-16 w-16 rounded-xl object-contain" />
          ) : null}
          <h1 className="font-display text-3xl font-semibold text-navy sm:text-4xl">{doc.name}</h1>
        </div>
        {doc.country?.name ? (
          <p className="mt-3 text-sm text-muted-foreground">
            {doc.country.name}
            {doc.country.region ? ` · ${doc.country.region}` : ""}
          </p>
        ) : null}
        {doc.rankingNote ? <p className="mt-4 max-w-prose text-sm text-muted-foreground">{doc.rankingNote}</p> : null}
        <p className="mt-6 max-w-prose text-lg text-muted-foreground">{doc.shortDescription}</p>
        {doc.website ? (
          <p className="mt-4 text-sm">
            <a href={doc.website} className="font-semibold text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
              Official website
            </a>
          </p>
        ) : null}
        {cover ? (
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl border border-navy/10">
            <Image
              src={cover}
              alt={`${doc.name} cover`}
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
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href={"/contact#book"} variant="primary">
            Ask about {doc.name}
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Home
          </ButtonLink>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          Content managed in Sanity · {SITE.name}
        </p>
      </Container>
    </div>
  );
}
