import { SITE } from "@/lib/constants";

export const travelServicesHero = {
  eyebrow: "Travel services",
  headline: "Travel that fits your life — not the other way around.",
  subheadline:
    "Flights, holiday plans, and student travel are coordinated with the same calm discipline we bring to admissions and visas. No loud deals — just sensible routing, clear options, and timing that respects your milestones.",
  reassurance:
    "We are not a discount portal. We help you book and plan with context — so travel supports your study timeline, family budget, and peace of mind.",
  footnote: `${SITE.name} · ${SITE.city}, ${SITE.state} · Since ${SITE.foundedYear}`,
} as const;

export const travelServicesWhatsAppPresets = {
  hero: `Hi ${SITE.name}, I would like to discuss travel or holiday planning.`,
  cta: `Hi ${SITE.name}, I would like help with flights, a holiday, or student travel coordination.`,
} as const;

export const travelServicesStudentSupport = {
  title: "Student travel support",
  intro:
    "Departure week is already emotional. We help students and parents move from visa approval to seat assignment without chaos — dates aligned to orientation, baggage that matches airline rules, and a single thread for changes if plans shift.",
  points: [
    {
      title: "Aligned with your intake, not generic dates",
      body: "We book and adjust around enrolment reporting, accommodation check-in, and visa validity windows — so you are not racing the wrong clock.",
    },
    {
      title: "One coordinated conversation",
      body: "When we already know your study-abroad arc, flight choices stay consistent with your city, airport, and family budget — instead of starting from zero each time.",
    },
    {
      title: "Sensible defaults for first-time flyers",
      body: "Meals, connections, layover time, and arrival time-of-day matter more than chasing the absolute cheapest fare that breaks the journey.",
    },
  ],
} as const;

export const travelServicesFlights = {
  title: "Flight booking guidance",
  intro:
    "We shortlist routes that are realistic for your profile and dates — then help you confirm with clarity on baggage, fare rules, and change penalties before you pay.",
  bullets: [
    "Route options explained in plain language — direct vs one-stop, and why it matters for jet lag and connection risk.",
    "Fare families and change rules surfaced before checkout, not after a surprise fee.",
    "Student baggage allowances where applicable — weighed against what you actually need to carry.",
    "Family bookings kept legible — one itinerary story, fewer duplicated mistakes across passengers.",
  ],
} as const;

export const travelServicesHoliday = {
  title: "Holiday planning",
  intro:
    "When the goal is rest — not another spreadsheet — we help you shape a holiday that feels intentional: pace, season, and budget band — without the loud package-tour tone.",
  highlights: [
    {
      title: "Curated pacing",
      body: "Fewer stops, more room to breathe — especially when parents want recovery time, not a checklist holiday.",
    },
    {
      title: "Transparent inclusions",
      body: "We prefer clarity on what is included, what is optional, and what you should book yourself — so the trip does not unravel on arrival day.",
    },
    {
      title: "Respect for budget bands",
      body: "Holidays should feel like a reward, not a debt trap. We work within the band you name — and say early if expectations need adjusting.",
    },
  ],
} as const;

export const travelServicesVisaCoord = {
  title: "Visa + travel coordination",
  intro:
    "The expensive mistake is a beautiful ticket on the wrong date relative to visa validity or orientation. When you work with us across visas and travel, we keep one timeline — so nobody is solving problems in isolation.",
  body: "If you are only here for travel, that is welcome too — but if study or visitor visas are in play, we encourage one coordinated plan.",
  visaLinkLabel: "Visa services overview",
} as const;

export const travelServicesProcess = [
  {
    step: "01",
    title: "Understand the trip",
    body: "Purpose, dates, travellers, budget band, and non-negotiables — city, carrier preference, or pace for holidays.",
  },
  {
    step: "02",
    title: "Cross-check constraints",
    body: "Visa validity, exam calendars, orientation week, or school reopening — whatever should not be ignored.",
  },
  {
    step: "03",
    title: "Shortlist options",
    body: "Two or three strong choices — not twenty tabs — with trade-offs explained so decisions feel obvious.",
  },
  {
    step: "04",
    title: "Book & confirm",
    body: "We walk through confirmation, seats where it matters, and insurance or add-ons only when they genuinely fit.",
  },
  {
    step: "05",
    title: "Pre-departure calm",
    body: "Checklist for documents, forex timing, airport arrival, and who to message if something shifts last minute.",
  },
] as const;

export const travelServicesTestimonials = [
  {
    quote:
      "We did not want a ‘tour package voice’ — just someone to lock flights after the visa came through. Yolotripz kept everything unhurried and readable for my parents.",
    name: "PG student · UK intake",
    meta: "Student travel · 2024",
  },
  {
    quote:
      "Holiday planning usually exhausts me. This time the pacing was sensible — fewer cities, better hotels, and no hidden surprises at check-in.",
    name: "Parent traveller",
    meta: "Family holiday · UAE",
  },
  {
    quote:
      "They caught a date mismatch between my visa vignette and the ticket I almost bought. That alone saved us a week of stress.",
    name: "Family · Canada pathway",
    meta: "Visa + flights coordination",
  },
] as const;

export const travelServicesCta = {
  title: "Ready to plan travel without the noise?",
  body: "Tell us whether this is student travel, a family holiday, or flights after a visa milestone — we will reply with the next sensible step.",
  primaryLabel: "Book a travel discussion",
  secondaryLabel: "WhatsApp your dates",
} as const;
