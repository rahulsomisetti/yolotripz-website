import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { ukPage } from "@/content/countries/uk";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Study in the United Kingdom | PG guide",
  description: `Decide if the UK fits your PG goals — intakes, tuition & living bands, Graduate Route orientation, course fit, and settlement realism. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "UK masters counselling Karnataka",
    "UK PG intake timeline",
    "Graduate Route India students",
    "UK tuition living costs PG",
    "Russell Group PG counselling",
  ],
  openGraph: {
    title: `PG study in the United Kingdom | ${SITE.name}`,
    description:
      "A consulting-style UK guide: fit check, costs, work routes, and honest long-term framing — then book counselling when you are ready.",
  },
};

export default function UKCountryPage() {
  return <CountryLanding content={ukPage} />;
}
