import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { emergingEuropeAsiaPage } from "@/content/countries/emerging-europe-asia";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emerging European & Asian destinations | PG guide",
  description: `Compare credible PG options across selective European and Asian hubs — accreditation, costs, work bridges, and visa realism. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "Ireland masters counselling Karnataka",
    "Singapore PG counselling",
    "Netherlands masters India students",
    "UAE PG universities counselling",
    "Europe study abroad PG",
  ],
  openGraph: {
    title: `Emerging Europe & Asia PG options | ${SITE.name}`,
    description:
      "A regional consulting guide: how we shortlist credible hubs, compare costs, and keep immigration stories honest — book counselling to map your table.",
  },
};

export default function EmergingEuropeAsiaCountryPage() {
  return <CountryLanding content={emergingEuropeAsiaPage} />;
}
