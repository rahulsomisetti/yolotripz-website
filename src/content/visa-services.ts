import { SITE } from "@/lib/constants";

export const visaServicesHero = {
  eyebrow: "Visa services",
  headline: "Visa preparation that stays calm, clear, and on schedule.",
  subheadline:
    "Student visas and tourist visas are different journeys — but the same principle applies: a coherent file, honest timelines, and no last-minute panic. We help you organise documentation and milestones; embassies and consulates make the final decision.",
  reassurance:
    "We are not lawyers and we do not guarantee outcomes — we help families present a file that reads consistently and respectfully.",
  footnote: `${SITE.name} · ${SITE.city}, ${SITE.state} · Since ${SITE.foundedYear}`,
} as const;

export const visaServicesWhatsAppPresets = {
  hero: `Hi ${SITE.name}, I have a question about visa documentation.`,
  cta: `Hi ${SITE.name}, I would like help with student or tourist visa preparation.`,
  sticky: `Hi ${SITE.name}, I would like to speak about visa timelines and documentation.`,
} as const;

export const visaServicesMistakes = [
  {
    title: "Treating funds proof as a last-week task",
    body: "Bank statements, sponsor letters, and flows need time to look intentional — not improvised. When proof is rushed, anxiety shows up in the file itself.",
  },
  {
    title: "Mixing study intent with holiday language",
    body: "Student visas need a study story that matches your offer, academics, and finances. Tourist visas need a different, credible travel plan. Blurring the two creates unnecessary risk.",
  },
  {
    title: "Uploading documents without a master checklist",
    body: "Duplicates, wrong PDF order, and missing translations are common — and fixable — when you work from one checklist instead of memory.",
  },
  {
    title: "Ignoring appointment reality",
    body: "Slots move with demand. A good file still needs a booked appointment in the right window for your travel or enrolment date.",
  },
] as const;

export const visaServicesProcess = [
  {
    step: "01",
    title: "Understand your visa type",
    body: "Student vs visitor — we confirm the route that matches your purpose, destination, and timeline so effort goes into the right checklist.",
  },
  {
    step: "02",
    title: "Build a document pack",
    body: "We map what you need, what parents must provide, and what should be certified or translated — before you start uploading randomly.",
  },
  {
    step: "03",
    title: "Review for consistency",
    body: "Dates, names, amounts, and intent should read as one story. We flag gaps early — when they are still cheap to fix.",
  },
  {
    step: "04",
    title: "Appointment & submission support",
    body: "We help you sequence biometrics, interviews (if any), and submissions so the week before travel is not the first time you think about visas.",
  },
  {
    step: "05",
    title: "After submission — stay organised",
    body: "Trackers, passport return, and next steps — especially if you are also managing admissions or travel in parallel.",
  },
] as const;

export const visaServicesTimeline = [
  {
    phase: "8–12 weeks before travel / enrolment",
    label: "Early structure",
    detail:
      "Collect baseline documents, confirm sponsor narrative (if applicable), and list translations or attestations you cannot rush at the end.",
  },
  {
    phase: "4–8 weeks before",
    label: "File hardening",
    detail:
      "Freeze the financial story, reconcile small mismatches across forms, and rehearse clear answers for interviews only where they apply.",
  },
  {
    phase: "2–4 weeks before",
    label: "Submission window",
    detail:
      "Appointment booking, biometrics, and final uploads — timed so a small delay does not collide with flights or orientation week.",
  },
  {
    phase: "Decision to departure",
    label: "Calm handover",
    detail:
      "Passport tracking, visa vignette checks where relevant, and alignment with your study-abroad or travel team so nothing contradicts itself.",
  },
] as const;

export const visaServicesChecklists = {
  student: {
    title: "Student visa — what we typically assemble with you",
    intro:
      "Exact lists vary by country and case type. This is an orientation checklist — your final pack is always tailored to embassy guidance in force.",
    items: [
      "Valid passport with sensible validity beyond course end",
      "Admission / CAS or equivalent enrolment evidence",
      "Financial evidence aligned to the country’s format (self or sponsor)",
      "Academic transcripts and certificates as required",
      "English test or waiver proof where applicable",
      "Medical tests or insurance only if your route requires them",
      "Statement of purpose / study intent where the file calls for it",
      "Appointment confirmation, receipts, and copy sets for travel day",
    ],
  },
  tourist: {
    title: "Tourist visa — what we typically assemble with you",
    intro:
      "Visitor routes reward a simple, credible travel plan — employment or study ties at home, sensible itinerary, and finances that match the trip you describe.",
    items: [
      "Passport and prior travel history where relevant",
      "Employment / education tie-back evidence (calm, factual)",
      "Bank statements that match the trip budget you declare",
      "Itinerary and bookings proportionate to the plan — not theatre",
      "Sponsor letter only when the story genuinely needs one",
      "Cover letter that is short, consistent, and readable",
      "Appointment and fee documentation for your specific consulate",
    ],
  },
} as const;

export const visaServicesFaqs = [
  {
    q: "Do you guarantee a visa approval?",
    a: "No. Decisions rest with embassies and consulates. What we control is clarity: documentation that is easier to read, consistent, and submitted on a sensible timeline.",
  },
  {
    q: "Do you handle only student visas?",
    a: "We support both student visas and tourist visas — with different checklists and different intent narratives. We keep the two paths separate so your file stays coherent.",
  },
  {
    q: "Can parents sponsor my student visa funds?",
    a: "Often yes — but sponsor rules vary by destination and change with policy. We help families structure sponsor letters and evidence in the format consulates expect for your route.",
  },
  {
    q: "How early should we start?",
    a: "Earlier is almost always calmer — especially when attestations, translations, or appointment slots are involved. If you are late, we still help — with honest narrowing of what is still realistic.",
  },
  {
    q: "Is this legal advice?",
    a: "No. We provide practical documentation guidance and process support. If you need licensed legal representation for a complex case, we will say so plainly.",
  },
] as const;

export const visaServicesTrust = {
  title: "Why families work with us on visas",
  intro:
    "Visa stress is rarely about intelligence — it is about ambiguity. We reduce ambiguity with checklists, sequencing, and calm language.",
  items: [
    {
      title: "Since 2017 in Coastal Karnataka",
      detail: "We have walked hundreds of families through documentation seasons — September intakes, holiday travel, and last-minute corrections.",
    },
    {
      title: "No fear-based selling",
      detail: "If your timeline is tight, we tell you early. If a route is unrealistic, we say that too — before you pay fees you cannot get back.",
    },
    {
      title: "Aligned with study abroad when it matters",
      detail: "If you are already counselling with us for PG admissions, your visa story can stay aligned with your offer and intake — instead of contradicting it.",
    },
  ],
} as const;

export const visaServicesWhatsappCta = {
  title: "Prefer to start on WhatsApp?",
  body: "Send your destination, visa type (student or tourist), and rough travel or enrolment month. We will reply with what to prepare first — no pressure to commit before you are ready.",
  primaryLabel: "Book a visa discussion",
  secondaryLabel: "Message on WhatsApp",
} as const;

export const visaServicesSticky = {
  line: "Visa timelines slip faster than people expect — book a short call or WhatsApp your month of travel.",
} as const;
