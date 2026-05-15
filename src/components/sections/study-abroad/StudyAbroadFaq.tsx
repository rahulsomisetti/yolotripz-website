"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { studyAbroadFaqs } from "@/content/study-abroad";

export function StudyAbroadFaq() {
  return (
    <Section
      id="faq"
      variant="default"
      eyebrow="FAQ"
      title="Questions families ask before the first call."
      description="Straight answers — the same tone we use in counselling."
      edge
    >
      <Reveal>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {studyAbroadFaqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
