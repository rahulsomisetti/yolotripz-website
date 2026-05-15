"use client";

import { SiteFigureImage } from "@/components/images/SiteFigureImage";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { testimonials as defaultTestimonials } from "@/content/home";
import { siteImages } from "@/lib/site-images";

export type TestimonialItem = { quote: string; name: string; meta?: string | null };

type Props = {
  /** When provided (e.g. from Sanity), replaces default homepage testimonials. */
  items?: TestimonialItem[];
};

export function TestimonialsSection({ items }: Props) {
  const list = items && items.length > 0 ? items : defaultTestimonials;

  return (
    <Section
      id="stories"
      edge
      eyebrow="What families say"
      title="Students want clarity. Parents want peace of mind."
      description="We are grateful for the trust placed in us — especially when timelines are tight and decisions carry real financial weight."
    >
      <SiteFigureImage
        src={siteImages.testimonials.sectionAmbient}
        alt="Calm counselling environment"
        aspectClassName="aspect-[21/8] md:aspect-[21/7]"
        figureClassName="mb-14 max-w-5xl md:mb-16"
        sizes="(max-width: 1024px) 100vw, 64rem"
      />
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {list.map((t, i) => (
          <Reveal key={`${t.name}-${i}`} delay={i * 0.07}>
            <Card className="flex h-full flex-col border-navy/[0.07] bg-card p-0 shadow-ring">
              <figure className="flex h-full flex-col p-8 md:p-9">
                <blockquote className="relative flex-1 pl-5 text-[0.9375rem] font-normal leading-[1.7] text-navy/95 before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.25rem)] before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-gold/70 before:to-gold/25 md:text-base md:leading-[1.65]">
                  <span className="text-pretty">“{t.quote}”</span>
                </blockquote>
                <figcaption className="mt-10 border-t border-border/80 pt-8">
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">{t.meta ?? ""}</p>
                </figcaption>
              </figure>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
