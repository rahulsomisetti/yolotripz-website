import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  ContactCounsellingBooking,
  ContactEnquiryForm,
  ContactFaq,
  ContactHero,
  ContactMapOffice,
  ContactWhatsAppCta,
} from "@/components/sections/contact";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book Counselling",
  description: `Book a free counselling session with ${SITE.name} in ${SITE.city}, ${SITE.state}. Enquiry form, WhatsApp, email, office map, and FAQs — mobile-friendly.`,
  keywords: [
    "study abroad consultants Mudbidri",
    "free PG counselling Karnataka",
    "Yolotripz contact",
    "overseas education WhatsApp",
    "student visa counselling Mangalore",
  ],
  openGraph: {
    title: `Contact ${SITE.name}`,
    description:
      "Maximise clarity before you spend — enquiry form, WhatsApp, map, and free counselling booking.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <ContactHero />
      <ContactEnquiryForm />
      <ContactWhatsAppCta />
      <ContactMapOffice />
      <ContactCounsellingBooking />
      <ContactFaq />
      <div className="border-t border-navy/[0.06] bg-muted/35 py-12 md:py-14">
        <Container>
          <div className="flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-2">
            <Link
              href="/study-abroad"
              className="text-sm font-semibold text-navy underline-offset-[5px] transition-colors hover:text-primary hover:underline"
            >
              Study abroad overview
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
        </Container>
      </div>
    </div>
  );
}
