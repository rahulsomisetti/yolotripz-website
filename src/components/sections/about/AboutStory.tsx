"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { aboutStory } from "@/content/about";
import { SITE } from "@/lib/constants";

export function AboutStory() {
  return (
    <Section
      id="story"
      variant="default"
      eyebrow={`Since ${SITE.foundedYear}`}
      title={aboutStory.title}
      description="What follows is not marketing language — it is the arc of how families started trusting us with one of the biggest decisions they will make together."
    >
      <div className="mx-auto max-w-measure space-y-8">
        {aboutStory.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-base leading-[1.7] text-muted-foreground sm:text-[1.0625rem]">{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
