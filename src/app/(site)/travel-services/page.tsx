import type { Metadata } from "next";
import Link from "next/link";
import {
  TravelServicesCta,
  TravelServicesFlights,
  TravelServicesHero,
  TravelServicesHoliday,
  TravelServicesProcess,
  TravelServicesStudentSupport,
  TravelServicesTestimonials,
  TravelServicesVisaCoord,
} from "@/components/sections/travel-services";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Travel Services — Flights, Holidays & Student Travel",
  description: `${SITE.name} in ${SITE.city}, ${SITE.state}: elegant travel support — flight booking guidance, curated holiday planning, and student travel aligned to study and visa timelines. Premium tone, no discount-agency noise.`,
  keywords: [
    "student travel flights Karnataka",
    "holiday planning Mangalore",
    "international flight booking guidance",
    "study abroad travel coordination",
    "Yolotripz travel services",
  ],
  openGraph: {
    title: `Travel services | ${SITE.name}`,
    description:
      "Flights, holidays, and student travel — coordinated with your milestones. Restrained, premium travel guidance for families.",
  },
};

export default function TravelServicesPage() {
  return (
    <div>
      <TravelServicesHero />
      <TravelServicesStudentSupport />
      <TravelServicesFlights />
      <TravelServicesHoliday />
      <TravelServicesVisaCoord />
      <TravelServicesProcess />
      <TravelServicesTestimonials />
      <TravelServicesCta />
      <div className="border-t border-border bg-muted/30 py-10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-center gap-4 px-4 text-center sm:flex-row sm:gap-8 sm:px-6 lg:px-10">
          <Link
            href="/visa-services"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Visa services
          </Link>
          <span className="hidden text-muted-foreground sm:inline" aria-hidden>
            ·
          </span>
          <Link
            href="/study-abroad"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Study abroad
          </Link>
          <span className="hidden text-muted-foreground sm:inline" aria-hidden>
            ·
          </span>
          <Link href="/" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
