import { SITE } from "@/lib/constants";

export const studyAbroadHero = {
  eyebrow: "PG study abroad",
  headline: "Helping families avoid expensive study abroad mistakes.",
  subheadline:
    "If you are targeting a PG degree in the UK, Australia, New Zealand, or Canada — we help you shortlist honestly, apply carefully, and plan visas and travel so surprises do not arrive at the worst moment.",
  reassurance:
    "Free first counselling · Same team from shortlist to departure · Coastal Karnataka families since 2017",
} as const;

export const studyAbroadDecision = {
  title: "Why this is a major decision — not a brochure moment",
  intro:
    "Studying abroad is sold as a dream. In practice, it is a sequence of expensive commitments: tests, application fees, deposits, visa proof, flights, and living costs — all before your first class.",
  points: [
    {
      title: "A wrong shortlist is costly early",
      body: "Applications scatter money and attention. We narrow countries and courses to what fits your academics, budget band, and career intent — before you pay ten different application fees.",
    },
    {
      title: "Intakes punish late planning",
      body: "September and January windows have quiet early cut-offs: transcripts, references, CAS/COE steps, and visa appointment availability. Starting late often means weaker choices — not because you are not capable.",
    },
    {
      title: "Parents carry the risk — students carry the stress",
      body: "We explain trade-offs in plain language so both generations can discuss the same facts: timelines, funds structure, and what “backup” realistically means for your family.",
    },
  ],
} as const;

/** Intake overview — illustrative; final dates vary by university. */
export const intakeTimelines = [
  {
    country: "United Kingdom",
    primary: "September (main) · January (select PG)",
    window: "Typical planning start: 9–12 months before intake for competitive courses.",
    notes: "CAS and deposit sequencing matters for visa timing.",
  },
  {
    country: "Australia",
    primary: "February · July",
    window: "Typical planning start: 10–12 months for scholarships and competitive programmes.",
    notes: "GTE documentation quality affects outcomes — rushed files show.",
  },
  {
    country: "New Zealand",
    primary: "February · July",
    window: "Typical planning start: 8–12 months depending on course demand.",
    notes: "Smaller system — early clarity helps seat-sensitive programmes.",
  },
  {
    country: "Canada",
    primary: "September · January (varies)",
    window: "Typical planning start: 12+ months when PGWP-linked pathways matter.",
    notes: "Popular PG courses can fill early; visa capacity can fluctuate by season.",
  },
] as const;

export const studyAbroadScholarships = {
  title: "Scholarships: hope — with realistic framing",
  intro:
    "Scholarships exist, but they are competitive and time-sensitive. We help you identify what you can genuinely target, what paperwork repeats across applications, and what should not be promised to parents as “likely”.",
  bullets: [
    "Merit and early-bird awards at university level (varies by institution and intake).",
    "External schemes with eligibility windows — often missed when applications start late.",
    "Country-specific nuances: some awards require separate essays, interviews, or financial disclosures.",
    "We do not sell “guaranteed funding”. We help you build a clean profile and calendar so you do not self-disqualify on technicalities.",
  ],
} as const;

export const studyAbroadCourses = [
  {
    title: "MS / MSc — STEM & analytics",
    blurb: "Data, computing, engineering pathways where portfolio and prerequisite mapping matter.",
    markets: ["UK", "Australia", "Canada"],
  },
  {
    title: "MBA / MiM",
    blurb: "Experience narrative, career gaps, and realistic ROI conversations — especially for parents.",
    markets: ["UK", "Australia", "Canada"],
  },
  {
    title: "Public health & life sciences",
    blurb: "Course research, prerequisites, and visa-sensitive documentation handled early.",
    markets: ["UK", "Australia", "New Zealand"],
  },
  {
    title: "Finance, economics & policy",
    blurb: "Quant expectations and programme rigour vary — we match you to what your transcript supports.",
    markets: ["UK", "Australia", "Canada"],
  },
  {
    title: "CS / AI & conversion programmes",
    blurb: "Bridge routes exist — we separate genuine conversion MSc options from marketing noise.",
    markets: ["UK", "Australia"],
  },
  {
    title: "Design, media & architecture",
    blurb: "Portfolio timing and critique cycles — sequenced so applications stay coherent.",
    markets: ["UK", "Australia", "New Zealand"],
  },
] as const;

export const studyAbroadFaqs = [
  {
    q: "Do you only work with high CGPAs?",
    a: "No. We work with the profile you have — and tell you what is realistic for course tier, country, and intake. Some pathways need a gap year or pre-masters strategy; if so, we say it early.",
  },
  {
    q: "Can parents join counselling?",
    a: "Yes — and we encourage it for PG decisions involving family finance. The goal is one shared understanding of timelines, costs, and risk — not parallel stories.",
  },
  {
    q: "Which countries do you counsel for most often?",
    a: "Most commonly the UK, Australia, New Zealand, and Canada. If another destination is a better fit, we will say so — we are not incentivised to force a “popular” country.",
  },
  {
    q: "How early should we start for September?",
    a: "If you want choice (and calmer visa planning), starting 9–12 months ahead is sensible for many PG courses. If you are already late, we still help — but we will be honest about what is still achievable.",
  },
  {
    q: "Do you write SOPs for students?",
    a: "We guide structure, honesty, and fit — and we push back on generic templates. The voice remains yours; the admissions committee should recognise a real person.",
  },
  {
    q: "Are visas included in your counselling?",
    a: "Yes — as coordinated support after admissions milestones. Visa outcomes are determined by consulates; we focus on documentation quality, sequencing, and appointment planning.",
  },
  {
    q: "What does the first counselling call cost?",
    a: "The first conversation is free. It is meant to understand goals and feasibility — not to pressure an immediate commitment.",
  },
  {
    q: "We are based outside Mudbidri — can we still work with you?",
    a: `Yes. Many families across the Mangalore belt and Coastal Karnataka work with ${SITE.name} remotely, with scheduled calls and clear document checklists.`,
  },
] as const;
