import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { germanyPage } from "@/content/countries/germany";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Study in Germany | PG guide",
  description: `Germany PG counselling: intakes, blocked account orientation, APS sequencing, English vs German-taught routes, and employability realism. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "Germany masters counselling Karnataka",
    "APS certificate Germany India",
    "Blocked account study Germany",
    "TU9 PG counselling",
    "English taught masters Germany",
  ],
  openGraph: {
    title: `PG study in Germany | ${SITE.name}`,
    description:
      "A consulting-style Germany guide: preparation, costs, work routes, and realism — then book counselling when you are ready.",
  },
};

export default function GermanyCountryPage() {
  return <CountryLanding content={germanyPage} />;
}
