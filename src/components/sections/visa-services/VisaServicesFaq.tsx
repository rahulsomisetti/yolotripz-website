"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { visaServicesFaqs } from "@/content/visa-services";

export function VisaServicesFaq() {
  return (
    <Section
      id="faq"
      variant="default"
      eyebrow="FAQ"
      title="Straight answers — before you overthink the file."
      description="If your question is case-specific, that is exactly what a short call or WhatsApp thread is for."
      edge
    >
      <Reveal>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {visaServicesFaqs.map((item, i) => (
            <AccordionItem key={item.q} value={`visa-faq-${i}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
