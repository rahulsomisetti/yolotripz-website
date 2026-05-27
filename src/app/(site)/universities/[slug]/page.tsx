import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { SanityPortableText } from "@/components/sanity/SanityPortableText";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fetchAllUniversitySlugs, fetchUniversityBySlug } from "@/sanity/fetchers";
import { metadataFromSanity } from "@/sanity/lib/metadata";
import { sanityImageUrl } from "@/sanity/lib/image";
import { SITE } from "@/lib/constants";
import { 
  universitiesDb, 
  coursesDb, 
  countriesDb 
} from "@/content/database/studyData";
import { 
  Award, 
  MapPin, 
  DollarSign, 
  Building, 
  Compass, 
  ArrowRight,
  Sparkles,
  BookOpen
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  // Combine CMS slugs and local database slugs
  const slugs = await fetchAllUniversitySlugs().catch(() => [] as string[]);
  const localSlugs = universitiesDb.map((u) => u.slug);
  const allSlugs = Array.from(new Set([...slugs, ...localSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await fetchUniversityBySlug(slug).catch(() => null);
  
  if (!doc) {
    const local = universitiesDb.find((u) => u.slug === slug);
    if (!local) return { title: "University" };
    return {
      title: `${local.name} | Ranks & Fees | Study Abroad`,
      description: local.overview,
    };
  }
  
  return metadataFromSanity({
    fallbackTitle: `${doc.name} | Universities`,
    fallbackDescription: doc.shortDescription,
    seo: doc.seo,
  });
}

export default async function UniversityPage({ params }: Props) {
  const { slug } = await params;
  const doc = await fetchUniversityBySlug(slug).catch(() => null);

  // If university doc is missing in Sanity CMS, fallback to our rich local database
  if (!doc) {
    const local = universitiesDb.find((u) => u.slug === slug);
    if (!local) notFound();

    const country = countriesDb.find((c) => c.slug === local.countrySlug)!;
    const courses = coursesDb.filter((c) => c.universitySlug === local.slug);

    return (
      <div className="bg-mesh-gradient bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.01),transparent_40%)] bg-background pb-24 pt-16 sm:pb-32 sm:pt-20">
        <Container>
          {/* Breadcrumb eyebrow */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>·</span>
            <Link href="/study-abroad" className="hover:text-navy transition-colors">Universities</Link>
            <span>·</span>
            <span className="text-gold">{local.name}</span>
          </div>

          {/* Premium University Header Grid */}
          <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold mb-3">
                <Award className="h-3.5 w-3.5 text-gold shrink-0" />
                QS Global Rank #{local.rank}
              </span>
              <h1 className="font-display text-3xl font-semibold text-navy leading-tight sm:text-4xl md:text-5xl">
                {local.name}
              </h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                {country.flag} {country.name} · {local.rankingsDetail}
              </p>
            </div>
            
            <div className="flex shrink-0 gap-3">
              <ButtonLink
                href={getWhatsAppLink(`Hi Yolotripz, I'm interested in applying to ${local.name}.`)}
                variant="primary"
                className="px-6 py-3 text-xs font-semibold uppercase"
              >
                Apply to {local.name}
              </ButtonLink>
            </div>
          </div>

          {/* Immersive Cover Visual */}
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-3xl border border-navy/[0.08] shadow-soft">
            <Image
              src={local.coverImage}
              alt={`${local.name} campus cover`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {/* Ambient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
          </div>

          {/* Two Column Visual Layout */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
            
            {/* Left Side: Overview, Campus and Courses offered */}
            <div className="lg:col-span-8 space-y-10">
              {/* Overview Section */}
              <div className="space-y-4">
                <h2 className="font-display text-xl font-bold text-navy uppercase tracking-wider">Institution Overview</h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {local.overview}
                </p>
              </div>

              {/* Campus Life and Visual Accreditations */}
              <div className="border-t border-navy/[0.05] pt-8 space-y-4">
                <h3 className="font-display text-lg font-semibold text-navy flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary shrink-0" />
                  Campus Infrastructure & Student Vibe
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {local.campusInfo}
                </p>
              </div>

              {/* Courses/Degrees Offered List */}
              {courses.length > 0 && (
                <div className="border-t border-navy/[0.05] pt-8 space-y-6">
                  <h3 className="font-display text-lg font-bold text-navy uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary shrink-0" />
                    Offered Degree Programs ({courses.length})
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {courses.map((course) => (
                      <Link 
                        key={course.slug} 
                        href={`/courses/${course.slug}`}
                        className="group relative flex flex-col justify-between border border-navy/[0.06] bg-card p-5 rounded-2xl shadow-soft hover:shadow-soft-hover hover:border-gold/30 transition-all duration-300"
                      >
                        <div>
                          <span className="inline-flex rounded-full bg-navy/[0.04] px-2.5 py-0.5 text-[9px] font-bold text-navy border border-navy/[0.04] uppercase">
                            {course.level} · {course.field}
                          </span>
                          <h4 className="font-display font-semibold text-navy text-sm mt-3 leading-snug group-hover:text-primary transition-colors">
                            {course.title}
                          </h4>
                          <div className="mt-3 flex items-center gap-4 text-[10px] text-muted-foreground">
                            <span>⏱️ {course.duration}</span>
                            <span>💰 ${course.tuitionExact.toLocaleString()} / Yr</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Syllabus Details <ArrowRight className="h-3 w-3 shrink-0" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Quick Specs Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Cost card */}
              <Card className="border border-navy/[0.06] bg-card p-6 shadow-soft md:p-8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block">Tuition & Boarding Estimates</span>
                
                <div className="mt-5 space-y-4">
                  <div className="flex justify-between items-end border-b border-navy/[0.04] pb-3">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-primary shrink-0" />
                      Yearly Tuition (Est.)
                    </span>
                    <span className="font-display font-semibold text-navy text-sm">${local.tuitionYearly.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-navy/[0.04] pb-3">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Building className="h-4 w-4 text-primary shrink-0" />
                      Rent & Housing (Est.)
                    </span>
                    <span className="font-display font-semibold text-navy text-sm">${local.accommodationYearly.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-navy/[0.04] pb-3 font-semibold">
                    <span className="text-xs text-navy flex items-center gap-1">
                      <Compass className="h-4 w-4 text-primary shrink-0" />
                      Estimated Total Outlay
                    </span>
                    <span className="font-display font-bold text-primary text-base">${(local.tuitionYearly + local.accommodationYearly).toLocaleString()} / Yr</span>
                  </div>
                </div>
              </Card>

              {/* Eligibility card */}
              <Card className="border border-gold/15 bg-gradient-to-b from-gold/5 via-card to-card p-6 shadow-soft">
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-gold shrink-0 animate-pulse" />
                  Admission Entry Criteria
                </span>
                
                <div className="mt-4 rounded-xl bg-card p-4 border border-navy/[0.04] text-xs text-navy">
                  <p className="font-semibold leading-relaxed mb-2">Required Background:</p>
                  <p className="leading-relaxed text-muted-foreground">{local.eligibility}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                  <span className="rounded bg-muted/70 px-2 py-1 border border-navy/[0.04]">Intake: {country.intakeDeadlines.split(" | ")[0].split(":")[1]}</span>
                  <span className="rounded bg-muted/70 px-2 py-1 border border-navy/[0.04]">IELTS Min: {country.ieltsRequirement.split(" ")[0]}</span>
                </div>
              </Card>

              {/* Advisory conversion trigger */}
              <Card className="border border-navy/[0.06] bg-navy p-6 shadow-soft text-white text-center rounded-2xl">
                <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-wider">Coastal Karnataka Advisory</h4>
                <p className="text-[11px] leading-relaxed text-white/70 mt-2">
                  Get a personalized, documented entry evaluation straight from our certified Moodbidri counselling desk.
                </p>
                <div className="mt-5">
                  <ButtonLink
                    href={getWhatsAppLink(`Hi Yolotripz, I'm reviewing the dynamic profile details of ${local.name}. I would like to schedule a free eligibility assessment.`)}
                    variant="primary"
                    className="w-full text-center text-xs font-semibold py-2.5"
                  >
                    Request Free Assessment
                  </ButtonLink>
                </div>
              </Card>
            </div>

          </div>
        </Container>
      </div>
    );
  }

  // Original CMS template loading if document is loaded in Sanity
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
