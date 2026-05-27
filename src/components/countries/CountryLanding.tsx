"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CountryLandingContent } from "@/content/countries/types";
import { getWhatsAppLink } from "@/lib/constants";
import { SiteFigureImage } from "@/components/images/SiteFigureImage";

function CountryHero({ content }: { content: CountryLandingContent }) {
  const reduce = useReducedMotion() === true;
  const w = getWhatsAppLink(content.whatsappPreset);
  const countryImageUrl = `/images/countries/${content.slug}-card.jpg`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-background pb-20 pt-28 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_75%_0%,hsl(var(--primary)/0.07),transparent_60%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
        {/* Glow Spot - Primary Green */}
        <div className="absolute top-[10%] -left-[10%] w-[35rem] h-[35rem] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.06)_0%,transparent_70%)] blur-[90px]" />
        {/* Glow Spot - Accent Burgundy */}
        <div className="absolute bottom-[10%] -right-[5%] w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.04)_0%,transparent_70%)] blur-[90px]" />
      </div>
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] xl:gap-x-16">
          <div className="min-w-0 lg:max-w-[40rem]">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 0.08, 0.24, 1] }}
              className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs"
            >
              {content.hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.08, 0.24, 1] }}
              className="mt-5 text-balance font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-navy sm:text-4xl lg:text-[2.75rem]"
            >
              {content.hero.headline}
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 0.08, 0.24, 1] }}
              className="mt-6 text-pretty text-base leading-[1.65] text-muted-foreground"
            >
              {content.hero.subheadline}
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 0.08, 0.24, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto text-center">
                {content.bookCounsellingLabel}
              </ButtonLink>
              <ButtonLink href={w} variant="secondary" className="w-full sm:w-auto text-center">
                WhatsApp us
              </ButtonLink>
            </motion.div>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="mt-8 text-xs leading-relaxed text-muted-foreground"
            >
              {content.hero.footnote}
            </motion.p>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 0.08, 0.24, 1] }}
            className="relative"
          >
            <SiteFigureImage
              src={countryImageUrl}
              alt={`Study in ${content.hero.eyebrow.split(" ").pop()}`}
              priority
              aspectClassName="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
              figureClassName="overflow-hidden rounded-2xl border border-navy/[0.08] shadow-soft"
              sizes="(max-width: 1024px) 100vw, 28rem"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function CountryWho({ content }: { content: CountryLandingContent }) {
  return (
    <Section
      id="who-its-for"
      variant="default"
      edge
      eyebrow="Fit check"
      title={content.whoItsFor.title}
      description={content.whoItsFor.intro}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {content.whoItsFor.profiles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <Card className="relative h-full overflow-hidden border border-navy/[0.05] bg-card p-7 shadow-soft transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 hover:border-navy/[0.09] md:p-8">
              <div
                className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-gold via-gold/50 to-transparent"
                aria-hidden
              />
              <div className="pl-4">
                <h3 className="font-display text-lg font-semibold leading-snug text-navy">{p.title}</h3>
                <p className="mt-4 text-sm leading-[1.65] text-muted-foreground md:text-[0.9375rem]">
                  {p.body}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CountryIntakes({ content }: { content: CountryLandingContent }) {
  return (
    <Section
      id="intakes"
      variant="muted"
      eyebrow="Calendar"
      title={content.intakes.title}
      description="Dates shift by course and university. The pattern below is what we plan around in counselling — so families stop discovering deadlines accidentally."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {content.intakes.rows.map((row, i) => (
          <Reveal key={row.label} delay={i * 0.08}>
            <Card className="relative overflow-hidden border border-navy/[0.07] bg-card p-0 shadow-ring md:min-h-[14rem]">
              <div className="flex items-stretch">
                <div className="flex w-14 shrink-0 flex-col items-center justify-center bg-navy py-6 text-center sm:w-16">
                  <span className="text-[0.65rem] font-bold uppercase leading-tight tracking-wider text-gold">
                    Intake
                  </span>
                </div>
                <div className="min-w-0 flex-1 p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold text-navy">{row.label}</h3>
                  <p className="mt-2 text-sm font-medium text-primary">{row.window}</p>
                  <p className="mt-4 text-sm leading-[1.65] text-muted-foreground">{row.plan}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CountryCosts({ content }: { content: CountryLandingContent }) {
  return (
    <Section
      id="costs"
      variant="default"
      eyebrow="Financial clarity"
      title={content.costs.title}
      description={content.costs.disclaimer}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {content.costs.cards.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.07}>
            <Card className="flex h-full flex-col border border-navy/[0.07] bg-gradient-to-b from-card to-muted/25 p-7 shadow-ring md:p-8">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {c.label}
              </p>
              <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy sm:text-[1.65rem]">
                {c.value}
              </p>
              <p className="mt-4 text-sm leading-[1.65] text-muted-foreground">{c.detail}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CountryWorkVisa({ content }: { content: CountryLandingContent }) {
  return (
    <Section
      id="work-visas"
      variant="muted"
      eyebrow="Post-study work"
      title={content.workVisa.title}
      description={content.workVisa.intro}
    >
      <div className="space-y-4">
        {content.workVisa.points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <Card className="border border-navy/[0.07] bg-card p-6 shadow-ring sm:p-7 lg:grid lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-4">
                <div className="inline-flex rounded-full border border-navy/[0.1] bg-muted/50 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-navy">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{p.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-[1.65] text-muted-foreground lg:col-span-8 lg:mt-0 lg:self-center lg:text-[0.9375rem]">
                {p.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CountryLongTerm({ content }: { content: CountryLandingContent }) {
  return (
    <Section
      id="long-term"
      variant="default"
      eyebrow="Settlement reality"
      title={content.longTerm.title}
      description={content.longTerm.intro}
    >
      <Reveal>
        <Card className="border border-navy/[0.07] bg-card p-7 shadow-ring md:p-9">
          <ul className="space-y-5">
            {content.longTerm.bullets.map((line, idx) => (
              <li
                key={idx}
                className="flex gap-4 text-sm leading-[1.65] text-muted-foreground md:text-[0.9375rem]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/40" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}

function CountryCourses({ content }: { content: CountryLandingContent }) {
  return (
    <Section
      id="courses"
      variant="muted"
      eyebrow="PG strengths"
      title={content.courses.title}
      description="Shortlist discipline matters more than chasing famous names — these are categories where this destination often deserves a serious look."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.courses.items.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <Card className="h-full border border-navy/[0.07] bg-card p-6 shadow-ring transition-colors duration-300 hover:border-gold/35 md:p-7">
              <h3 className="font-display text-base font-semibold text-navy">{c.title}</h3>
              <p className="mt-3 text-sm leading-[1.65] text-muted-foreground">{c.blurb}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CountryUniversities({ content }: { content: CountryLandingContent }) {
  return (
    <Section
      id="universities"
      variant="default"
      eyebrow="Landscape"
      title={content.universities.title}
      description={content.universities.intro}
    >
      <div className="space-y-4">
        {content.universities.highlights.map((h, i) => (
          <Reveal key={h.name} delay={i * 0.06}>
            <Card className="border border-navy/[0.07] bg-card p-6 shadow-ring sm:flex sm:gap-8 sm:p-8">
              <div className="shrink-0 sm:w-48">
                <p className="font-display text-lg font-semibold text-navy">{h.name}</p>
              </div>
              <p className="mt-4 text-sm leading-[1.65] text-muted-foreground sm:mt-0 sm:text-[0.9375rem]">
                {h.detail}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CountryFaq({ content }: { content: CountryLandingContent }) {
  const prefix = content.slug;
  return (
    <Section
      id="faq"
      variant="muted"
      eyebrow="FAQ"
      title="Questions families ask early."
      description="Concise answers for orientation. Your file and intake year still deserve personalised review in counselling."
    >
      <Reveal>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {content.faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`${prefix}-faq-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

function CountryCta({ content }: { content: CountryLandingContent }) {
  const w = getWhatsAppLink(content.whatsappPreset);
  return (
    <section className="border-t border-navy/[0.06] bg-background py-24 md:py-32 lg:py-36">
      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden border border-navy/[0.08] bg-gradient-to-b from-muted/40 via-card to-card px-8 py-14 shadow-ring sm:px-12 md:px-14 md:py-16 lg:px-16 lg:py-20 xl:px-20">
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/70 via-gold/40 to-transparent"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                Counselling
              </p>
              <h2 className="mt-6 text-balance font-display text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy sm:text-3xl sm:leading-[1.14]">
                {content.cta.title}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-[1.7] text-muted-foreground sm:text-[1.0625rem]">
                {content.cta.body}
              </p>
              <div className="mt-11 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
                  Book free counselling
                </ButtonLink>
                <ButtonLink href={w} variant="secondary" className="w-full sm:w-auto">
                  WhatsApp us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function CountryLandingFooterLinks() {
  return (
    <div className="border-t border-navy/[0.06] bg-muted/35 py-12 md:py-14">
      <div className="mx-auto flex max-w-content flex-col items-center justify-center gap-5 px-4 text-center sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-2 sm:px-6 lg:px-10">
        <Link
          href="/study-abroad"
          className="text-sm font-semibold text-navy underline-offset-[5px] transition-colors hover:text-primary hover:underline"
        >
          UG & PG study abroad overview
        </Link>
        <span className="hidden text-muted-foreground/70 sm:inline" aria-hidden>
          ·
        </span>
        <Link
          href="/#countries"
          className="text-sm font-semibold text-navy underline-offset-[5px] transition-colors hover:text-primary hover:underline"
        >
          All destinations
        </Link>
      </div>
    </div>
  );
}

export function CountryLanding({
  content,
  afterCosts,
}: {
  content: CountryLandingContent;
  afterCosts?: React.ReactNode;
}) {
  return (
    <>
      <CountryHero content={content} />
      <CountryWho content={content} />
      <CountryIntakes content={content} />
      <CountryCosts content={content} />
      {afterCosts}
      <CountryWorkVisa content={content} />
      <CountryLongTerm content={content} />
      <CountryCourses content={content} />
      <CountryUniversities content={content} />
      <CountryFaq content={content} />
      <CountryCta content={content} />
      <CountryLandingFooterLinks />
    </>
  );
}
