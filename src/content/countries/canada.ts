import type { CountryLandingContent } from "./types";
import { SITE } from "@/lib/constants";

export const canadaPage = {
  slug: "canada",
  bookCounsellingLabel: "Book Canada counselling",
  whatsappPreset: "Hi, I'd like to discuss PG study in Canada.",
  hero: {
    eyebrow: "Country guide · Canada",
    headline: "Is Canada the right PG choice for your timeline and documentation readiness?",
    subheadline:
      "Canada combines strong PG diplomas and degrees with co-op pathways at many institutions — and post-graduation work opportunities when your programme and institution eligibility align. The catch is honest planning: competitive intakes, careful financial documentation, and immigration settings that change with policy cycles.",
    footnote: `${SITE.name} · Overseas education counselling · ${SITE.city}, ${SITE.state}`,
  },
  whoItsFor: {
    title: "Who tends to thrive in Canadian PG planning",
    intro:
      "Canada rewards early sequencing — especially when PGWP eligibility, DLI status, and study permit documentation need to stay perfectly aligned.",
    profiles: [
      {
        title: "You want co-op or internship-integrated learning",
        body: "Many colleges and universities embed work terms. That can strengthen employability — when your study permit and programme rules are understood before you accept an offer.",
      },
      {
        title: "You can handle strict financial evidence discipline",
        body: "Study permit outcomes depend on credible funds, intent clarity, and file coherence. Families who treat documentation as a project — not a last-minute scramble — tend to stay calmer.",
      },
      {
        title: "You are realistic about intake competition",
        body: "Popular PG programmes fill early. A September plan made in March is different from the same plan made in July — we say that plainly in counselling.",
      },
      {
        title: "You want a bridge between study and skilled routes",
        body: "PGWP can be an important bridge — but long-term PR depends on skilled work, language scores, policy settings, and sometimes provincial pathways — not a single offer letter.",
      },
    ],
  },
  intakes: {
    title: "Intake rhythm (typical PG)",
    rows: [
      {
        label: "September intake",
        window: "Primary intake for many universities and popular PG programmes.",
        plan: "For competitive files, we often want IELTS clarity, transcript authentication, and shortlist discipline months earlier — especially if you are targeting SDS stream documentation discipline.",
      },
      {
        label: "January intake",
        window: "Available for select universities and many college PG diplomas.",
        plan: "Smaller cohorts can mean faster decisions — but visa appointment timing and winter arrival logistics need explicit planning for Indian families.",
      },
    ],
  },
  costs: {
    title: "Tuition & living costs — bands, not promises",
    disclaimer:
      "CAD rates, province, housing, and programme type move totals. Use the bands below for family orientation — then anchor to your offer letter and realistic city rent research.",
    cards: [
      {
        label: "PG tuition (illustrative band)",
        value: "Roughly CAD 18k–40k+ per year",
        detail: "Universities and provinces vary widely; MBA and specialist programmes can exceed this band — we budget from the offer, not averages online.",
      },
      {
        label: "Living costs (monthly feel)",
        value: "Toronto/Vancouver vs regional gap",
        detail: "Major metros are expensive on rent. Some students improve the cost curve with smaller cities — if course quality still matches the goal.",
      },
      {
        label: "GIC and funds planning (where applicable)",
        value: "Front-load the financial story",
        detail: "For many Indian students, SDS-related planning is part of the conversation — we help families understand what must be demonstrated and when.",
      },
    ],
  },
  workVisa: {
    title: "Work visa opportunities (high level)",
    intro:
      "Canadian immigration rules change. This section is orientation — not legal advice. Eligibility depends on IRCC rules in force, your institution, programme length, and compliance.",
    points: [
      {
        title: "Post-Graduation Work Permit (PGWP) — orientation",
        body: "PGWP can follow eligible programmes at designated learning institutions, subject to length-of-programme rules and other conditions. Not every credential yields the same open work window.",
      },
      {
        title: "Co-op work permits (when applicable)",
        body: "Co-op terms can require the right work authorisation aligned to your programme. We flag where offer letters must be read carefully before you commit.",
      },
      {
        title: "PR pathways are separate from study permits",
        body: "Express Entry, PNPs, and Canadian work experience can matter — but they are competitive and policy-sensitive. We avoid turning PG selection into a lottery-ticket mindset.",
      },
    ],
  },
  longTerm: {
    title: "PR & long-term settlement — honest framing",
    intro:
      "Canada is attractive because skilled routes exist — but outcomes are not guaranteed by admission. PR depends on language ability, skilled employment, policy settings, and sometimes luck with draws — all of which can shift while you study.",
    bullets: [
      "We encourage students to choose PG programmes they would still value even if immigration settings tighten — that keeps options open at home too.",
      "If your family’s primary goal is PR speed, we compare provinces and pathways transparently — without pretending an offer letter equals settlement certainty.",
      "Work experience quality matters more than ‘any job’ for some routes — we discuss what that means for your field realistically.",
    ],
  },
  courses: {
    title: "PG strengths Canada is known for",
    items: [
      { title: "PG diplomas and graduate certificates", blurb: "Strong applied pathways — especially when co-op is real and aligned to employability goals." },
      { title: "Computer science, analytics, and IT", blurb: "Competitive intakes — early applications and clear academic mapping matter." },
      { title: "Engineering and project management", blurb: "Accreditation and pathway awareness vary — we check prerequisites and outcomes signals." },
      { title: "Business and supply chain", blurb: "Good internship ecosystems in some cities — city choice becomes part of ROI counselling." },
      { title: "Public health and policy-aligned coursework", blurb: "Fit depends on programme depth and whether your UG mapping satisfies admissions expectations." },
    ],
  },
  universities: {
    title: "DLIs, colleges, and universities — choosing with visa literacy",
    intro:
      "Canada’s strength is diversity of institution types — but PGWP and study permit outcomes depend on details families sometimes miss until late.",
    highlights: [
      {
        name: "Designated Learning Institution (DLI) fundamentals",
        detail:
          "We verify basics early: whether your intended credential aligns with PGWP rules you care about — before deposits and emotional commitment.",
      },
      {
        name: "University vs college PG pathways",
        detail:
          "Colleges can be excellent for applied PG diplomas; universities may suit research or thesis-heavy goals. The ‘best’ choice is the one that matches outcomes and documentation reality.",
      },
      {
        name: "Province as part of strategy — carefully",
        detail:
          "PNP landscapes differ. We discuss province trade-offs without selling certainty — policy can change while you are still in coursework.",
      },
    ],
  },
  faqs: [
    {
      q: "Is SDS mandatory for Indian students?",
      a: "Not always — it depends on your profile and the stream you qualify under. We map documentation paths based on your file, not forum rumours.",
    },
    {
      q: "Does a one-year programme give PGWP?",
      a: "PGWP length rules depend on programme duration and eligibility criteria in force. We interpret your offer in plain language before you accept.",
    },
    {
      q: "Can parents sponsor funds for study permits?",
      a: "Sponsor narratives need coherence and evidence. We guide families on structuring documentation — without promising outcomes IRCC has not decided.",
    },
    {
      q: "Is January intake ‘easier’?",
      a: "Sometimes competition differs — but January has its own visa timing and winter logistics. ‘Easier’ is rarely universal; we compare based on your course list.",
    },
    {
      q: "When should we start for September?",
      a: "If you want competitive choice, start early enough for English tests, transcript flows, and a calm study permit file. Late starts are possible — with narrowing.",
    },
  ],
  cta: {
    title: "Still unsure if Canada matches your goals and timeline?",
    body: "Bring your marksheets, target field, and whether co-op matters to you. We will map September vs January realistically — including PGWP-sensitive programme checks.",
  },
} satisfies CountryLandingContent;
