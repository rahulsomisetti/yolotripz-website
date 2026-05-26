import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { irelandPage } from "@/content/countries/ireland";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Study in Ireland | UG & PG guide",
  description: `Decide if Ireland fits your career goals — intakes, tuition & living bands, Stamp 1G post-study work visa, Dublin tech hub proximity, and Critical Skills permit. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "Ireland university counselling Karnataka",
    "Dublin tech jobs study abroad",
    "Stamp 1G post study work permit",
    "Ireland tuition living costs UG PG",
    "Irish student visa guidance Mangalore",
  ],
  openGraph: {
    title: `UG & PG study in Ireland | ${SITE.name}`,
    description:
      "A comprehensive guide to Irish higher education: cost structures, Stamp 1G work rights, technological universities, and critical skills permits.",
  },
};

export default function IrelandCountryPage() {
  return <CountryLanding content={irelandPage} />;
}
