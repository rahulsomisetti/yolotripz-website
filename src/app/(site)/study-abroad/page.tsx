import type { Metadata } from "next";
import Link from "next/link";
import {
  StudyAbroadCountries,
  StudyAbroadCourses,
  StudyAbroadDecision,
  StudyAbroadFaq,
  StudyAbroadHero,
  StudyAbroadIntakes,
  StudyAbroadProcess,
  StudyAbroadScholarships,
  StudyAbroadStickyCta,
  StudyAbroadTestimonials,
} from "@/components/sections/study-abroad";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Study Abroad Counselling for PG Students",
  description: `${SITE.name} — PG study abroad counselling in ${SITE.city}, ${SITE.state}. Avoid expensive mistakes with honest shortlisting, intake planning, scholarships guidance, and visa-ready support for the UK, Australia, New Zealand, and Canada.`,
  keywords: [
    "PG study abroad Karnataka",
    "Masters abroad counselling Mangalore",
    "UK PG admissions consultants",
    "Australia masters counselling",
    "Canada PGWP planning",
    "study abroad intake timeline",
  ],
  openGraph: {
    title: `PG study abroad counselling | ${SITE.name}`,
    description:
      "Helping families avoid expensive study abroad mistakes — honest PG counselling for Coastal Karnataka.",
  },
};

export default function StudyAbroadPage() {
  return (
    <div className="bg-background pb-36 sm:pb-40 md:pb-44">
      <StudyAbroadHero />
      <StudyAbroadDecision />
      <StudyAbroadCountries />
      <StudyAbroadIntakes />
      <StudyAbroadScholarships />
      <StudyAbroadCourses />
      <StudyAbroadProcess />
      <StudyAbroadFaq />
      <StudyAbroadTestimonials />
      <div className="border-t border-navy/[0.06] bg-muted/35 py-12 md:py-14">
        <div className="mx-auto max-w-content px-4 text-center sm:px-6 lg:px-10">
          <Link
            href="/"
            className="text-sm font-semibold text-navy underline-offset-[5px] transition-colors hover:text-primary hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
      <StudyAbroadStickyCta />
    </div>
  );
}
