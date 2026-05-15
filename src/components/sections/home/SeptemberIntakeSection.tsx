"use client";

import { SiteFigureImage } from "@/components/images/SiteFigureImage";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { getWhatsAppLink } from "@/lib/constants";
import { intakeCampaign } from "@/content/home";
import { siteImages } from "@/lib/site-images";

export function SeptemberIntakeSection() {
  return (
    <section className="border-y border-navy/[0.06] bg-muted/35 py-24 md:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <header className="mb-10 max-w-2xl md:mb-12">
              <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.2em]">
                September intake
              </p>
              <h2 className="max-w-xl text-balance font-display text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.02em] text-navy sm:max-w-2xl sm:text-[2.25rem] sm:leading-[1.12] lg:text-[2.5rem]">
                {intakeCampaign.title}
              </h2>
              <p className="mt-7 max-w-2xl text-pretty text-base leading-[1.7] text-muted-foreground sm:text-lg sm:leading-[1.62]">
                {intakeCampaign.body}
              </p>
            </header>
            <Reveal>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <ButtonLink href={intakeCampaign.href} variant="primary" className="w-full sm:w-auto">
                  {intakeCampaign.cta}
                </ButtonLink>
                <ButtonLink href={getWhatsAppLink()} variant="secondary" className="w-full sm:w-auto">
                  Message on WhatsApp
                </ButtonLink>
              </div>
              <p className="mt-10 max-w-2xl text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
                If your documents or test plan still needs structure, it is not too late to ask what is
                realistic — it is only too late once the intake window you want has closed.
              </p>
            </Reveal>
          </div>
          <SiteFigureImage
            src={siteImages.hero.septemberIntake}
            alt="Planning for September intake"
            aspectClassName="aspect-[4/3]"
            objectClassName="object-cover object-[center_35%] sm:object-center"
            sizes="(max-width: 1024px) 100vw, 36rem"
          />
        </div>
      </Container>
    </section>
  );
}
