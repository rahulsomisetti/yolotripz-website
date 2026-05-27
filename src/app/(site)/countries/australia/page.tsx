import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { australiaPage } from "@/content/countries/australia";
import { SITE } from "@/lib/constants";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { Sparkles, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Study in Australia | UG & PG guide",
  description: `Australia UG & PG counselling: intakes, tuition & living bands, post-study work orientation, course fit, and honest PR framing. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "Australia masters counselling Karnataka",
    "Australia PG intake February July",
    "GTE student visa Australia",
    "Australia tuition living costs PG",
    "Subclass 485 orientation",
  ],
  openGraph: {
    title: `UG & PG study in Australia | ${SITE.name}`,
    description:
      "A consulting-style Australia guide: fit check, costs, work routes, and settlement realism — then book counselling when you are ready.",
  },
};

function AustraliaFeeWaivers() {
  const waivers = [
    {
      name: "The University of Queensland",
      meta: "Group of Eight · Rank 42 globally",
      value: "A$150 Waiver Codes",
      expiry: "Expires 30.06.2026",
      condition: "Must be 1st or 2nd university preference on profile",
      badge: "Limited Codes",
    },
    {
      name: "University of Western Australia",
      meta: "Group of Eight · Rank 77 globally",
      value: "A$150 Uncapped Waivers",
      expiry: "Limited-Time Opportunity",
      condition: "Regional study advantages in Perth",
      badge: "Uncapped",
    },
    {
      name: "RMIT University",
      meta: "Employability Leader · Rank 125 globally",
      value: "A$100 Waiver Codes",
      expiry: "Highly Time-Sensitive",
      condition: "Top preference required; must meet academic & GS criteria",
      badge: "Highly Limited",
    },
    {
      name: "Griffith University",
      meta: "Nursing & Hospitality · Rank 268 globally",
      value: "A$50 Uncapped Waivers",
      expiry: "Limited-Time Opportunity",
      condition: "Brisbane / Gold Coast regional benefits apply",
      badge: "Uncapped",
    },
  ];

  return (
    <Section
      id="fee-waivers"
      variant="muted"
      eyebrow="Special Offer"
      title="Save on University Application Fees"
      description="Apply to premier Australian institutions through us and unlock exclusive, limited-time application fee waivers. Save up to A$150 per submission."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {waivers.map((w, idx) => (
          <Reveal key={w.name} delay={idx * 0.05}>
            <Card className="flex h-full flex-col border border-navy/[0.06] bg-card p-6 shadow-ring transition-all hover:border-gold/30 hover:shadow-soft">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
                  {w.badge}
                </span>
                <Sparkles className="h-3.5 w-3.5 text-gold/70" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-navy">
                {w.name}
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                {w.meta}
              </p>
              
              <div className="mt-5 border-t border-navy/[0.06] pt-4 flex-1">
                <p className="text-xs font-semibold text-primary">{w.value}</p>
                <p className="text-[10px] text-muted-foreground/80 mt-0.5">{w.expiry}</p>
              </div>

              <div className="mt-4 flex items-start gap-2 bg-muted/40 p-2.5 rounded-lg">
                <CheckCircle className="h-3 w-3 shrink-0 text-primary mt-0.5" />
                <p className="text-[10px] leading-relaxed text-muted-foreground">
                  {w.condition}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground leading-relaxed">
        * Application waivers are subject to profile approval from the university. Apply early to preserve available slots.
      </p>
    </Section>
  );
}

export default function AustraliaCountryPage() {
  return <CountryLanding content={australiaPage} afterCosts={<AustraliaFeeWaivers />} />;
}
