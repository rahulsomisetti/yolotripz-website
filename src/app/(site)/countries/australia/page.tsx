import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { australiaPage } from "@/content/countries/australia";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Study in Australia | PG guide",
  description: `Australia PG counselling: intakes, tuition & living bands, post-study work orientation, course fit, and honest PR framing. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "Australia masters counselling Karnataka",
    "Australia PG intake February July",
    "GTE student visa Australia",
    "Australia tuition living costs PG",
    "Subclass 485 orientation",
  ],
  openGraph: {
    title: `PG study in Australia | ${SITE.name}`,
    description:
      "A consulting-style Australia guide: fit check, costs, work routes, and settlement realism — then book counselling when you are ready.",
  },
};

export default function AustraliaCountryPage() {
  return <CountryLanding content={australiaPage} />;
}
