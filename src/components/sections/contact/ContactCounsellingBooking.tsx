"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { contactBooking } from "@/content/contact";
import { getWhatsAppLink, SITE } from "@/lib/constants";

export function ContactCounsellingBooking() {
  const waBook = getWhatsAppLink(
    `Hi ${SITE.name}, I would like to book a free counselling session. My target intake is: `,
  );

  return (
    <Section
      id="book"
      variant="muted"
      className="scroll-mt-24 border-t border-navy/[0.06] !py-16 md:scroll-mt-28 md:!py-24"
      eyebrow={contactBooking.eyebrow}
      title={contactBooking.title}
      description={contactBooking.description}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <Card className="h-full border border-navy/[0.07] border-l-[3px] border-l-gold/60 bg-card p-8 shadow-ring md:p-10">
            <h3 className="font-display text-lg font-semibold text-navy">{contactBooking.card1Title}</h3>
            <p className="mt-4 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
              {contactBooking.card1Body}
            </p>
            <ButtonLink href={waBook} variant="primary" className="mt-8 w-full sm:w-auto">
              Book via WhatsApp
            </ButtonLink>
          </Card>
        </Reveal>
        <Reveal delay={0.06}>
          <Card className="h-full border border-navy/[0.07] bg-card p-8 shadow-ring md:p-10">
            <h3 className="font-display text-lg font-semibold text-navy">{contactBooking.card2Title}</h3>
            <p className="mt-4 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
              {contactBooking.card2Body}
            </p>
            <ButtonLink
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Free counselling request")}`}
              variant="secondary"
              className="mt-8 w-full sm:w-auto"
            >
              Email to book
            </ButtonLink>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
