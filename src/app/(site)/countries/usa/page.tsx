import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { usaPage } from "@/content/countries/usa";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Study in the United States | UG & PG guide",
  description: `Decide if the USA fits your study goals — intakes, tuition & living bands, STEM OPT work route orientation, public vs private universities, and visa readiness. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "US university counselling Karnataka",
    "USA UG admissions consultants",
    "STEM OPT extension India students",
    "USA tuition living costs UG PG",
    "US student visa F1 counselling",
  ],
  openGraph: {
    title: `UG & PG study in the United States | ${SITE.name}`,
    description:
      "An advisory-first USA guide: cost modeling, OPT guidelines, university systems, and honest profile analysis — book a free session when ready.",
  },
};

export default function USACountryPage() {
  return <CountryLanding content={usaPage} />;
}
