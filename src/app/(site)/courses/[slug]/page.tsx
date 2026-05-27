import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { SanityPortableText } from "@/components/sanity/SanityPortableText";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fetchAllCourseSlugs, fetchCourseBySlug } from "@/sanity/fetchers";
import { metadataFromSanity } from "@/sanity/lib/metadata";
import { SITE } from "@/lib/constants";
import { 
  coursesDb, 
  universitiesDb, 
  countriesDb 
} from "@/content/database/studyData";
import { 
  Clock, 
  Calendar, 
  DollarSign, 
  Award, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  ArrowLeft
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await fetchAllCourseSlugs().catch(() => [] as string[]);
  const localSlugs = coursesDb.map((c) => c.slug);
  const allSlugs = Array.from(new Set([...slugs, ...localSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await fetchCourseBySlug(slug).catch(() => null);
  
  if (!doc) {
    const local = coursesDb.find((c) => c.slug === slug);
    if (!local) return { title: "Course" };
    return {
      title: `${local.title} | Duration & Fees | Study Abroad`,
      description: local.eligibilityDetail,
    };
  }
  
  return metadataFromSanity({
    fallbackTitle: `${doc.title} | Courses`,
    fallbackDescription: doc.feesSummary,
    seo: doc.seo,
  });
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const doc = await fetchCourseBySlug(slug).catch(() => null);

  // Dynamic database fallback if document is missing from Sanity
  if (!doc) {
    const local = coursesDb.find((c) => c.slug === slug);
    if (!local) notFound();

    const univ = universitiesDb.find((u) => u.slug === local.universitySlug)!;
    const country = countriesDb.find((c) => c.slug === univ.countrySlug)!;

    // Currency selector
    const currencySymbol = 
      country.slug === "uk" ? "£" :
      (country.slug === "germany" || country.slug === "ireland" ? "€" : 
      (country.slug === "australia" ? "A$" : 
      (country.slug === "canada" ? "C$" : "$")));

    return (
      <div className="bg-mesh-gradient bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.01),transparent_40%)] bg-background pb-24 pt-16 sm:pb-32 sm:pt-20">
        <Container>
          {/* Breadcrumb eyebrow */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>·</span>
            <Link href="/discover" className="hover:text-navy transition-colors">Course Finder</Link>
            <span>·</span>
            <span className="text-gold">{local.title}</span>
          </div>

          {/* Sibling Page Return Cues */}
          <Link 
            href={`/universities/${univ.slug}`}
            className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Return to {univ.name}
          </Link>

          {/* Header section */}
          <div className="mt-4 space-y-3">
            <span className="inline-flex rounded-full bg-navy/[0.04] px-2.5 py-0.5 text-[10px] font-bold uppercase text-navy border border-navy/[0.04]">
              {local.level} · {local.field} Syllabus Focus
            </span>
            <h1 className="font-display text-3xl font-semibold text-navy leading-tight sm:text-4xl md:text-5xl">
              {local.title}
            </h1>
            <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground flex items-center gap-1.5 pt-1">
              <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
              {univ.name} · {country.flag} {country.name}
            </p>
          </div>

          {/* Premium Spec Matrix Grid */}
          <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
            <Card className="border border-navy/[0.05] bg-card p-5 shadow-soft">
              <span className="text-[9px] text-muted-foreground uppercase block font-bold tracking-wider">Duration</span>
              <span className="font-display font-semibold text-navy text-sm mt-1.5 block flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                {local.duration}
              </span>
            </Card>
            <Card className="border border-navy/[0.05] bg-card p-5 shadow-soft">
              <span className="text-[9px] text-muted-foreground uppercase block font-bold tracking-wider">Intakes</span>
              <span className="font-display font-semibold text-navy text-sm mt-1.5 block flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary shrink-0" />
                {local.intakes.join(", ")}
              </span>
            </Card>
            <Card className="border border-navy/[0.05] bg-card p-5 shadow-soft">
              <span className="text-[9px] text-muted-foreground uppercase block font-bold tracking-wider">Exact Tuition</span>
              <span className="font-display font-bold text-primary text-sm mt-1.5 block flex items-center gap-1">
                <DollarSign className="h-4 w-4 text-primary shrink-0" />
                {currencySymbol}{local.tuitionExact.toLocaleString()} <span className="text-[10px] text-muted-foreground font-normal">/ Yr</span>
              </span>
            </Card>
            <Card className="border border-navy/[0.05] bg-card p-5 shadow-soft">
              <span className="text-[9px] text-muted-foreground uppercase block font-bold tracking-wider">Academic Level</span>
              <span className="font-display font-semibold text-navy text-sm mt-1.5 block flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary shrink-0" />
                {local.level === "UG" ? "Undergraduate" : "Postgraduate"}
              </span>
            </Card>
          </div>

          {/* Main Content Splits */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            
            {/* Left Side: Requirements & Sibling Info */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Eligibility card */}
              <div className="space-y-4">
                <h2 className="font-display text-xl font-bold text-navy uppercase tracking-wider">Admission Eligibility</h2>
                <Card className="border border-gold/15 bg-gradient-to-b from-gold/5 via-card to-card p-6 md:p-8 rounded-2xl shadow-soft">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Academics & Score Thresholds</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                        {local.eligibilityDetail}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Career Outcomes */}
              <div className="border-t border-navy/[0.05] pt-8 space-y-4">
                <h3 className="font-display text-lg font-bold text-navy uppercase tracking-wider flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary shrink-0" />
                  Career Outcomes & Placements
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Graduates of this program enjoy strong employment outcomes across global industries. Potential career roles include:
                </p>
                <div className="bg-muted/40 p-4 rounded-xl border border-navy/[0.04] text-xs font-semibold text-navy">
                  🚀 {local.careerProspects}
                </div>
              </div>

            </div>

            {/* Right Side: University Linkage Card */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              {/* Sibling University Specs */}
              <Card className="border border-navy/[0.06] bg-card p-6 shadow-soft md:p-8">
                <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground block">Offering Institution</span>
                
                <div className="mt-5 space-y-4">
                  <h4 className="font-display font-semibold text-navy text-base leading-snug">
                    <Link href={`/universities/${univ.slug}`} className="hover:text-primary hover:underline">
                      {univ.name}
                    </Link>
                  </h4>
                  
                  <div className="border-t border-navy/[0.04] pt-4 space-y-3.5 text-xs text-muted-foreground">
                    <div className="flex justify-between items-center">
                      <span>QS Global Rank</span>
                      <span className="font-bold text-navy">#{univ.rank}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Country Host</span>
                      <span className="font-medium text-navy">{country.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Work Rights</span>
                      <span className="font-medium text-gold">{country.workRights.split(".")[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-navy/[0.04] pt-5">
                  <ButtonLink
                    href={`/universities/${univ.slug}`}
                    variant="secondary"
                    className="w-full text-center text-xs font-semibold py-2"
                  >
                    View University Profile
                  </ButtonLink>
                </div>
              </Card>

              {/* Dynamic conversion callback */}
              <Card className="border border-navy/[0.06] bg-navy p-6 shadow-soft text-white text-center rounded-2xl">
                <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-wider">Discuss this Syllabus</h4>
                <p className="text-[11px] leading-relaxed text-white/70 mt-2">
                  Request detailed course modules, intake fee waivers, and blocked account guidance from our regional consultants.
                </p>
                <div className="mt-5">
                  <ButtonLink
                    href={getWhatsAppLink(`Hi Yolotripz, I'm reviewing the dynamic syllabus details of ${local.title} at ${univ.name}. I would like to schedule a free eligibility assessment.`)}
                    variant="primary"
                    className="w-full text-center text-xs font-semibold py-2.5"
                  >
                    Discuss Program in WhatsApp
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
