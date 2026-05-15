/** Contact page copy — swap for CMS later if needed. */

export const contactHero = {
  eyebrow: "Contact",
  headline: "Tell us where you are in the journey — we will take it from here.",
  subheadline:
    "Whether you are early in shortlisting or already juggling offers, visas, and flights, one clear message is enough to start. We reply on WhatsApp during working hours and by email within one business day.",
} as const;

export const contactFormIntro = {
  title: "Send an enquiry",
  description:
    "Share a few details so we can respond with substance — not a generic brochure. Submissions are saved to our CRM (Sanity) for follow-up; no account required.",
} as const;

export const contactFormTopics = [
  { value: "study-abroad", label: "Study abroad / PG counselling" },
  { value: "visa", label: "Visa documentation" },
  { value: "travel", label: "Flights / travel" },
  { value: "other", label: "Something else" },
] as const;

export const contactWhatsAppBand = {
  title: "Prefer WhatsApp?",
  body: "Fastest for quick questions, document photos, and booking a call slot. Tell us your intake month and target country to skip back-and-forth.",
  primaryLabel: "Open WhatsApp",
  secondaryLabel: "Call isn’t listed? Email works too.",
} as const;

export const contactBooking = {
  eyebrow: "Counselling",
  title: "Book a free counselling session",
  description:
    "Bring marksheets (or a quick summary), target field, and a rough budget band. If September is on the table, say so — we will be honest about what is still realistic.",
  card1Title: "WhatsApp first",
  card1Body: "Best for sharing photos of transcripts, offer letters, or a voice note from parents who prefer Kannada or English.",
  card2Title: "Email for longer context",
  card2Body: "Useful when multiple family members are in the thread or you want to attach PDFs in one place.",
} as const;

export const contactFaqs = [
  {
    q: "How quickly do you respond?",
    a: "WhatsApp is typically same day during working hours. Email is usually within one business day — longer if your question needs a careful written answer.",
  },
  {
    q: "Is the counselling session really free?",
    a: "Yes — the first counselling conversation is free. It helps us understand fit and helps you understand how we work before you commit time or money to a plan.",
  },
  {
    q: "What should I prepare before we talk?",
    a: "Academic summary (marks or transcripts), target intake, preferred countries if any, and a rough budget band. If you already have test scores or an offer, bring those too.",
  },
  {
    q: "Do you handle visas and travel as well?",
    a: "Yes — documentation guidance for student and tourist visas, plus flight and holiday support that stays aligned with your study timeline. See our dedicated service pages for scope.",
  },
  {
    q: "Can parents join the discussion?",
    a: "Absolutely. Many families prefer a joint call so financial and career questions are answered in one sitting — calmly and in plain language.",
  },
] as const;
