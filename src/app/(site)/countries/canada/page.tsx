import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { canadaPage } from "@/content/countries/canada";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Study in Canada | PG guide",
  description: `Canada PG counselling: intakes, tuition & living bands, PGWP orientation, DLI literacy, and honest PR framing. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "Canada masters counselling Karnataka",
    "Canada PGWP counselling",
    "Canada study permit documentation",
    "Canada PG tuition living costs",
    "SDS stream study Canada",
  ],
  openGraph: {
    title: `PG study in Canada | ${SITE.name}`,
    description:
      "A consulting-style Canada guide: fit check, costs, co-op/PGWP routes, and settlement realism — then book counselling when you are ready.",
  },
};

export default function CanadaCountryPage() {
  return <CountryLanding content={canadaPage} />;
}
