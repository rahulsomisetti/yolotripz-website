import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { getWhatsAppLink, SITE } from "@/lib/constants";
import { medicalStudiesContent } from "@/content/medical-studies";
import { CheckCircle2, DollarSign, Award, GraduationCap, MapPin, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "MBBS & Medical Studies Abroad | 2026 Admissions",
  description: `Start your medical journey in 2026 with globally recognized medical degrees in Georgia, Hungary, Russia, Lithuania, and Malaysia. Complete NMC, WHO, and GMC approved medical pathways. ${SITE.name}, ${SITE.city}.`,
  keywords: [
    "MBBS abroad Georgia Hungary",
    "NMC approved medical colleges abroad",
    "study medicine Europe Malaysia",
    "cheap tuition MBBS abroad",
    "medical studies admissions 2026",
  ],
};

export default function MedicalStudiesPage() {
  const { hero, whyChooseUs, destinations, faq, featuredNursing } = medicalStudiesContent;

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden border-b border-navy/[0.06] bg-gradient-to-b from-primary/10 via-background to-background py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gold/5 to-transparent blur-3xl" />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              {hero.eyebrow}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact#book" variant="primary" className="px-6 py-3 text-base">
                Apply for 2026 Intake
              </ButtonLink>
              <ButtonLink href={getWhatsAppLink()} variant="secondary" className="px-6 py-3 text-base">
                WhatsApp Medical Expert
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{hero.footnote}</p>
          </div>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 lg:py-24 bg-muted/20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              {whyChooseUs.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{whyChooseUs.intro}</p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.points.map((pt, idx) => {
              const icons = [Award, GraduationCap, DollarSign, CheckCircle2];
              const IconComponent = icons[idx] || CheckCircle2;

              return (
                <Card key={pt.title} className="relative overflow-hidden border border-navy/[0.06] bg-card p-6 shadow-soft hover:shadow-soft-hover transition-shadow duration-300">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                    {pt.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pt.body}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Destination Grid Section */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">Represented Universities</span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">
              Global Medical Universities
            </h2>
            <p className="mt-4 text-muted-foreground">
              Direct and trusted admissions in highly ranked state & private medical institutions across the globe.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <Card key={dest.country} className="flex flex-col overflow-hidden border border-navy/[0.08] bg-card shadow-ring hover:border-gold/30 hover:shadow-soft transition-all duration-300">
                <div className="relative bg-gradient-to-br from-navy/95 to-navy/80 p-6 text-white">
                  <span className="absolute top-4 right-4 rounded-full bg-gold/20 border border-gold/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
                    {dest.badge}
                  </span>
                  <p className="text-xs uppercase tracking-wider text-gold/80">Medical Studies</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{dest.country}</h3>
                  <p className="mt-1 text-xs text-white/70 italic">{dest.tagline}</p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-6 flex items-center justify-between border-b border-navy/[0.06] pb-4">
                    <span className="text-xs font-medium text-muted-foreground">Tuition Fee Range</span>
                    <span className="font-display text-lg font-semibold text-primary">
                      {dest.tuition} <span className="text-xs text-muted-foreground">/ {dest.period}</span>
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy mb-3">Key Universities</p>
                    <ul className="space-y-2">
                      {dest.universities.map((uni) => (
                        <li key={uni} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                          <span>{uni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-navy/[0.06]">
                    <ButtonLink
                      href={getWhatsAppLink(`Hi Yolotripz, I'm interested in medical studies in ${dest.country}.`)}
                      variant="secondary"
                      className="w-full"
                    >
                      Inquire for {dest.country}
                    </ButtonLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Georgia Nursing Featured Program Section */}
      <section className="py-20 lg:py-24 border-t border-navy/[0.06]">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-navy/[0.08] bg-gradient-to-b from-muted/40 via-card to-card px-8 py-10 shadow-ring sm:px-10 md:px-12 md:py-12">
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/70 via-gold/40 to-transparent"
              aria-hidden
            />
            
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
                  Nursing Spotlight
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy">
                  {featuredNursing.title}
                </h2>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Featured University: {featuredNursing.university}
                </p>

                <div className="mt-6 space-y-4">
                  <div className="border-b border-navy/[0.06] pb-3">
                    <span className="text-xs text-muted-foreground block">Degree Details</span>
                    <span className="font-display font-medium text-navy text-sm">{featuredNursing.duration}</span>
                  </div>
                  <div className="border-b border-navy/[0.06] pb-3">
                    <span className="text-xs text-muted-foreground block">Yearly Tuition</span>
                    <span className="font-display font-semibold text-primary text-xl">
                      {featuredNursing.tuition} <span className="text-xs text-muted-foreground">/ {featuredNursing.period}</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Admissions Timeline</span>
                    <span className="font-display font-medium text-navy text-sm">{featuredNursing.intake}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-muted/20 border border-navy/[0.06] p-6 sm:p-8 rounded-2xl">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-navy mb-4">Program Advantages</h3>
                <ul className="space-y-3.5">
                  {featuredNursing.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-primary mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-3 bg-card border border-navy/[0.06] rounded-xl flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold bg-gold/10 px-2 py-0.5 rounded-full shrink-0">Requirements</span>
                  <span className="text-xs text-navy font-medium">{featuredNursing.requirements}</span>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <ButtonLink
                    href={getWhatsAppLink(`Hi Yolotripz, I'm interested in the Nursing BSN program at SEU in Georgia.`)}
                    variant="primary"
                    className="flex-1 text-center"
                  >
                    Apply for BSN Program
                  </ButtonLink>
                  <ButtonLink
                    href="/contact#book"
                    variant="secondary"
                    className="flex-1 text-center"
                  >
                    Request Free Assessment
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Entry Pathways FAQ Section */}
      <section className="py-20 lg:py-24 bg-muted/20">
        <Container className="max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              Medical Studies Admission FAQs
            </h2>
            <p className="mt-4 text-muted-foreground">
              Essential answers on NEET qualifications, medium of instruction, and degree approvals.
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item) => (
              <Card key={item.q} className="border border-navy/[0.06] bg-card p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Campaign CTA Strip */}
      <section className="border-t border-navy/[0.06] bg-muted/35 py-12 md:py-14">
        <Container>
          <div className="flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-2">
            <Link
              href="/study-abroad"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-[5px] transition-colors hover:text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Study abroad overview
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
      </section>
    </div>
  );
}
