import type { Metadata } from "next";
import Link from "next/link";
import {
  AboutCta,
  AboutCulture,
  AboutFounder,
  AboutHero,
  AboutPhilosophy,
  AboutStory,
  AboutTimeline,
  AboutTrust,
} from "@/components/sections/about";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `${SITE.name} — overseas education consultants in ${SITE.city}, ${SITE.state} since ${SITE.foundedYear}. Meet Veronica, our founder, and learn how we counsel with honesty and calm.`,
  openGraph: {
    title: `About ${SITE.name}`,
    description:
      "A small practice built on patience and clarity — PG study abroad counselling for Coastal Karnataka families since 2017.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutFounder />
      <AboutPhilosophy />
      <AboutTrust />
      <AboutTimeline />
      <AboutCulture />
      <AboutCta />
      <div className="border-t border-border bg-muted/30 py-10">
        <div className="mx-auto max-w-content px-4 text-center sm:px-6 lg:px-10">
          <Link
            href="/"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
