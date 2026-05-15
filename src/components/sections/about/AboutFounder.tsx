"use client";

import { SiteFigureImage } from "@/components/images/SiteFigureImage";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { aboutFounder } from "@/content/about";
import { siteImages } from "@/lib/site-images";

export function AboutFounder() {
  return (
    <Section
      id="founder"
      variant="muted"
      eyebrow="The person behind the desk"
      title={`Meet ${aboutFounder.name}`}
      description={`${aboutFounder.role} — counselling that stays human when the stakes are high.`}
    >
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5" delay={0.05}>
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div
              className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-gold/15 via-transparent to-primary/10 blur-2xl"
              aria-hidden
            />
            <SiteFigureImage
              src={siteImages.testimonials.founder}
              alt={aboutFounder.imageAlt}
              aspectClassName="aspect-[4/5]"
              objectClassName="object-cover object-[50%_18%] sm:object-[50%_20%]"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
        </Reveal>
        <div className="space-y-6 lg:col-span-7">
          <Reveal delay={0.08}>
            <blockquote className="border-l-2 border-gold/50 pl-6 font-display text-xl font-medium leading-snug text-navy sm:text-2xl sm:leading-snug">
              We hold the seriousness of this decision — without making your home feel like a sales
              floor.
            </blockquote>
            <p className="mt-3 pl-6 text-sm text-muted-foreground">— {aboutFounder.name}</p>
          </Reveal>
          {aboutFounder.bio.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06}>
              <p className="text-base leading-[1.7] text-muted-foreground sm:text-[1.0625rem]">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
