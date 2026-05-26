import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { NZDiplomaGuide } from "@/components/countries/NZDiplomaGuide";
import { newZealandPage } from "@/content/countries/new-zealand";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Study in New Zealand | PG guide",
  description: `New Zealand PG counselling: intakes, tuition & living bands, post-study work orientation, and honest settlement framing. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "New Zealand masters counselling Karnataka",
    "NZ PG intake February July",
    "New Zealand post study work visa",
    "NZ tuition living costs PG",
  ],
  openGraph: {
    title: `PG study in New Zealand | ${SITE.name}`,
    description:
      "A consulting-style New Zealand guide: fit check, costs, work routes, and realism — then book counselling when you are ready.",
  },
};

export default function NewZealandCountryPage() {
  return <CountryLanding content={newZealandPage} afterCosts={<NZDiplomaGuide />} />;
}
