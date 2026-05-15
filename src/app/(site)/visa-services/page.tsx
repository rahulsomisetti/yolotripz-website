import type { Metadata } from "next";
import Link from "next/link";
import {
  VisaServicesChecklists,
  VisaServicesFaq,
  VisaServicesHero,
  VisaServicesMistakes,
  VisaServicesProcess,
  VisaServicesStickyCta,
  VisaServicesTimeline,
  VisaServicesTrust,
  VisaServicesWhatsAppCta,
} from "@/components/sections/visa-services";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Visa Services — Student & Tourist Visas",
  description: `${SITE.name} helps families in ${SITE.city}, ${SITE.state} prepare student visas and tourist visas with calm checklists, clear timelines, and documentation support. No outcome guarantees — structured process and honest guidance.`,
  keywords: [
    "student visa documentation Karnataka",
    "tourist visa help Mangalore",
    "study visa checklist India",
    "visa appointment planning",
    "Yolotripz visa services",
  ],
  openGraph: {
    title: `Visa services | ${SITE.name}`,
    description:
      "Calm, process-driven visa support for student and tourist routes — documentation, timelines, and WhatsApp-first enquiries.",
  },
};

export default function VisaServicesPage() {
  return (
    <div className="bg-background pb-36 sm:pb-40 md:pb-44">
      <VisaServicesHero />
      <VisaServicesMistakes />
      <VisaServicesProcess />
      <VisaServicesTimeline />
      <VisaServicesChecklists />
      <VisaServicesFaq />
      <VisaServicesTrust />
      <VisaServicesWhatsAppCta />
      <div className="border-t border-navy/[0.06] bg-muted/35 py-12 md:py-14">
        <div className="mx-auto flex max-w-content flex-col items-center justify-center gap-5 px-4 text-center sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-2 sm:px-6 lg:px-10">
          <Link
            href="/study-abroad"
            className="text-sm font-semibold text-navy underline-offset-[5px] transition-colors hover:text-primary hover:underline"
          >
            PG study abroad overview
          </Link>
          <span className="hidden text-muted-foreground/70 sm:inline" aria-hidden>
            ·
          </span>
          <Link
            href="/"
            className="text-sm font-semibold text-navy underline-offset-[5px] transition-colors hover:text-primary hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
      <VisaServicesStickyCta />
    </div>
  );
}
