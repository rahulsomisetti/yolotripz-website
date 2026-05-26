"use client";

import Link from "next/link";
import { SiteFigureImage } from "@/components/images/SiteFigureImage";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { countries } from "@/content/home";
import { siteImages } from "@/lib/site-images";

const countryFlags: Record<string, string> = {
  usa: "🇺🇸",
  canada: "🇨🇦",
  uk: "🇬🇧",
  ireland: "🇮🇪",
  germany: "🇩🇪",
  "emerging-europe-asia": "🇪🇺",
  australia: "🇦🇺",
  "new-zealand": "🇳🇿",
};

const countryStats: Record<string, { tuition: string; intakes: string; stayback: string }> = {
  uk: { tuition: "₹18–35 Lakhs/yr", intakes: "Sep / Jan / May", stayback: "2 Years Graduate Route" },
  usa: { tuition: "₹25–45 Lakhs/yr", intakes: "Aug / Jan (Fall & Spring)", stayback: "Up to 3 Years STEM OPT" },
  australia: { tuition: "₹22–38 Lakhs/yr", intakes: "Feb / July (Major)", stayback: "2–4 Years PSW Pathway" },
  "new-zealand": { tuition: "₹15–28 Lakhs/yr", intakes: "Feb / July", stayback: "1–3 Years PSW Visa" },
  canada: { tuition: "₹15–30 Lakhs/yr", intakes: "Sep / Jan / May", stayback: "PGWP Co-op Linked" },
  ireland: { tuition: "₹12–25 Lakhs/yr", intakes: "Sep / Jan", stayback: "2 Years Third Level Scheme" },
  germany: { tuition: "Free to ₹6 Lakhs/yr", intakes: "Winter / Summer", stayback: "18 Months Job Search" },
  "emerging-europe-asia": { tuition: "₹3–15 Lakhs/yr", intakes: "Sep / Jan / Paced", stayback: "Varies by Country Hub" },
};

export function CountryComparisonSection() {
  return (
    <Section
      id="countries"
      variant="muted"
      eyebrow="Compare with clarity"
      title="Destinations we plan most often — with different strengths."
      description="This is not a ranking. It is a quick orientation so you know what typically matters for PG students in each market — before we go deeper in counselling."
    >
      <div className="grid gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-7">
        {countries.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.05}>
            <Link href={c.href} className="group block h-full">
              <Card className="flex h-full flex-col overflow-hidden border-navy/[0.07] bg-card shadow-ring transition-colors duration-300 ease-premium hover:border-gold/35 hover:shadow-soft md:rounded-2xl">
                <SiteFigureImage
                  src={siteImages.countries.card(c.slug)}
                  alt={`Visual mood — ${c.name}`}
                  aspectClassName="aspect-[16/10]"
                  figureClassName="rounded-none rounded-t-2xl border-0 border-b border-navy/[0.06] shadow-none"
                  imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Destination
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy group-hover:text-primary md:text-xl flex items-center gap-2">
                        <span className="text-xl select-none" aria-hidden="true">
                          {countryFlags[c.slug as keyof typeof countryFlags]}
                        </span>
                        <span>{c.name}</span>
                      </h3>
                    </div>
                    <span
                      className="mt-1 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                  <div className="mt-6 flex flex-col gap-3.5 border-t border-navy/[0.04] pt-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Est. Tuition:</span>
                      <span className="font-semibold text-navy">{countryStats[c.slug]?.tuition || "Varies"}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Key Intakes:</span>
                      <span className="font-semibold text-navy">{countryStats[c.slug]?.intakes || "Varies"}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Stay-Back PSW:</span>
                      <span className="font-semibold text-primary">{countryStats[c.slug]?.stayback || "Varies"}</span>
                    </div>
                  </div>
                  <div className="mt-5 rounded-xl bg-muted/50 p-3.5 text-xs text-muted-foreground leading-normal border border-navy/[0.02]">
                    <span className="font-semibold text-navy block mb-1">Target Profile:</span>
                    {c.profile}
                  </div>
                  <span className="mt-auto pt-7 text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-primary">
                    View country guide
                  </span>
                </div>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-14 md:mt-16" delay={0.12}>
        <div className="flex flex-col gap-6 border border-navy/[0.08] bg-card px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10 sm:py-9">
          <p className="max-w-xl text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
            Unsure which destination matches your profile, budget, and intake? We narrow this in
            counselling — before you pay application fees scattered across too many destinations.
          </p>
          <ButtonLink href="/contact#book" variant="primary" className="w-full shrink-0 sm:w-auto">
            Shortlist with us
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
