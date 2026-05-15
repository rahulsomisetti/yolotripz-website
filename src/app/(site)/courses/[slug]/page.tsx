import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { SanityPortableText } from "@/components/sanity/SanityPortableText";
import { ButtonLink } from "@/components/ui/button";
import { fetchAllCourseSlugs, fetchCourseBySlug } from "@/sanity/fetchers";
import { metadataFromSanity } from "@/sanity/lib/metadata";
import { SITE } from "@/lib/constants";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await fetchAllCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await fetchCourseBySlug(slug);
  if (!doc) return { title: "Course" };
  return metadataFromSanity({
    fallbackTitle: `${doc.title} | Courses`,
    fallbackDescription: doc.feesSummary,
    seo: doc.seo,
  });
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const doc = await fetchCourseBySlug(slug);
  if (!doc) notFound();

  return (
    <div className="bg-surface pb-20 pt-12 md:pb-28 md:pt-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Course</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">{doc.title}</h1>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {doc.level ? (
            <div>
              <dt className="font-medium text-navy">Level</dt>
              <dd className="mt-1">{doc.level}</dd>
            </div>
          ) : null}
          {doc.duration ? (
            <div>
              <dt className="font-medium text-navy">Duration</dt>
              <dd className="mt-1">{doc.duration}</dd>
            </div>
          ) : null}
          {doc.university?.name ? (
            <div>
              <dt className="font-medium text-navy">University</dt>
              <dd className="mt-1">
                {doc.university.slug ? (
                  <Link href={`/universities/${doc.university.slug}`} className="text-primary hover:underline">
                    {doc.university.name}
                  </Link>
                ) : (
                  doc.university.name
                )}
              </dd>
            </div>
          ) : null}
        </dl>
        {doc.intakes?.length ? (
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium text-navy">Intakes:</span> {doc.intakes.join(", ")}
          </p>
        ) : null}
        {doc.feesSummary ? (
          <p className="mt-6 max-w-prose text-sm leading-relaxed text-muted-foreground">{doc.feesSummary}</p>
        ) : null}
        <div className="mt-10">
          <SanityPortableText value={doc.body} />
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/contact#book" variant="primary">
            Discuss this course
          </ButtonLink>
          <ButtonLink href="/study-abroad" variant="secondary">
            Study abroad
          </ButtonLink>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">Sanity CMS · {SITE.name}</p>
      </Container>
    </div>
  );
}
