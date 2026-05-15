"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactFaqs } from "@/content/contact";

export function ContactFaq() {
  return (
    <Section
      id="faq"
      variant="muted"
      eyebrow="FAQ"
      title="Before you message — quick answers."
      description="Still unsure? Send a short WhatsApp anyway; we would rather steer you early than leave you guessing."
      edge
      className="!py-16 md:!py-20"
    >
      <Reveal>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {contactFaqs.map((item, i) => (
            <AccordionItem key={item.q} value={`contact-faq-${i}`}>
              <AccordionTrigger className="text-left text-[0.9375rem] sm:text-base">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed sm:text-[0.9375rem]">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
