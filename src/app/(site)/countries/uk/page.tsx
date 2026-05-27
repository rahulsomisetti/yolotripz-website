import type { Metadata } from "next";
import { CountryLanding } from "@/components/countries/CountryLanding";
import { ukPage } from "@/content/countries/uk";
import { SITE } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { Award, Compass, HelpCircle, Briefcase, GraduationCap, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Study in the United Kingdom | UG & PG guide",
  description: `Decide if the UK fits your UG & PG goals — intakes, tuition & living bands, Graduate Route orientation, course fit, and settlement realism. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "UK masters counselling Karnataka",
    "UK UG admissions consultants",
    "Graduate Route India students",
    "UK tuition living costs PG",
    "Russell Group PG counselling",
  ],
  openGraph: {
    title: `UG & PG study in the United Kingdom | ${SITE.name}`,
    description:
      "A consulting-style UK guide: fit check, costs, work routes, and honest long-term framing — then book counselling when you are ready.",
  },
};


function UKPromos() {
  return (
    <Section
      id="uk-promos"
      variant="muted"
      eyebrow="Admissions Spotlights"
      title="Intakes & Career Guarantees"
      description="Exclusive UK admissions highlights, from cost-effective July intakes to legal sector employment promises that back your career outcomes."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Coventry July Intake Promo */}
        <Reveal delay={0.05}>
          <Card className="relative overflow-hidden h-full border border-navy/[0.06] bg-card p-8 shadow-ring transition-all hover:border-gold/30 hover:shadow-soft">
            <div className="absolute top-4 right-4 rounded-full bg-gold/10 border border-gold/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
              July 2026 Intake
            </div>
            
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Featured University</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
              Coventry University, UK
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Top 15 UK University (Guardian 2024) · No.1 for Student Experience (Times Good University Guide 2024)
            </p>

            <div className="mt-6 border-t border-navy/[0.06] pt-5 space-y-4">
              <p className="text-sm font-semibold text-navy">Why Choose the July Intake?</p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <Building2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-navy">Cheaper Accommodation</h4>
                    <p className="text-[11px] leading-relaxed text-muted-foreground mt-0.5">
                      Substantially lower rent and wider options compared to the September rush.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <GraduationCap className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-navy">Coventry Scholarships</h4>
                    <p className="text-[11px] leading-relaxed text-muted-foreground mt-0.5">
                      £2,500 for eligible Masters/MBA students & up to £6,000 for UG candidates.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Briefcase className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-navy">Earlier Job Hiring</h4>
                    <p className="text-[11px] leading-relaxed text-muted-foreground mt-0.5">
                      Secure part-time roles early as local businesses begin recruiting before Autumn.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Compass className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-navy">100+ Nationalities</h4>
                    <p className="text-[11px] leading-relaxed text-muted-foreground mt-0.5">
                      A genuinely diverse international student body with excellent employability support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* University of Law Promo */}
        <Reveal delay={0.1}>
          <Card className="relative overflow-hidden h-full border border-navy/[0.06] bg-card p-8 shadow-ring transition-all hover:border-gold/30 hover:shadow-soft">
            <div className="absolute top-4 right-4 rounded-full bg-gold/10 border border-gold/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
              Employability Spotlight
            </div>

            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Specialist Institution</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
              The University of Law, UK
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Preparing Students for Real Career Outcomes with Unmatched Legal Network Proximity
            </p>

            <div className="mt-6 border-t border-navy/[0.06] pt-5 space-y-4">
              <p className="text-sm font-semibold text-navy">Highlights & Employment Promise</p>

              <div className="space-y-3.5">
                <div className="flex gap-3 bg-primary/[0.03] border border-primary/10 p-3 rounded-xl">
                  <Award className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">The Employment Promise</h4>
                    <p className="text-sm font-semibold text-navy mt-1">
                      Get a Job in 9 Months or 100% Fees Back*
                    </p>
                    <p className="text-[10px] text-muted-foreground/80 mt-0.5">
                      Our ultimate commitment to your career readiness.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex gap-2">
                    <Building2 className="h-4.5 w-4.5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-navy">91/100 Top Law Firms</h4>
                      <p className="text-[11px] leading-relaxed text-muted-foreground mt-0.5">
                        Direct hiring partnerships and networking with 91 of the UK&apos;s top 100 law firms.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <HelpCircle className="h-4.5 w-4.5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-navy">Pro Bono Clinics</h4>
                      <p className="text-[11px] leading-relaxed text-muted-foreground mt-0.5">
                        Gain actual caseload exposure at legal aid centres to strengthen your CV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        * Terms and conditions apply for the Employment Promise. Placements and scholarships are subject to profile evaluation. Talk to our UK counsellors to verify eligibility.
      </p>
    </Section>
  );
}

export default function UKCountryPage() {
  return <CountryLanding content={ukPage} afterCosts={<UKPromos />} />;
}
