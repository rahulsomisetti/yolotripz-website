import type { CountryLandingContent } from "./types";
import { SITE } from "@/lib/constants";

export const australiaPage = {
  slug: "australia",
  bookCounsellingLabel: "Book Australia counselling",
  whatsappPreset: "Hi, I'd like to discuss PG study in Australia.",
  hero: {
    eyebrow: "Country guide · Australia",
    headline: "Is Australia the right PG fit for your profile and timeline?",
    subheadline:
      "Strong coursework-led masters, clear intake rhythms, and post-study work options when your course and duration align with policy. The trade-off is honest budgeting in AUD and a visa story that must stay coherent from day one — especially around Genuine Temporary Entrant (GTE) expectations.",
    footnote: `${SITE.name} · Overseas education counselling · ${SITE.city}, ${SITE.state}`,
  },
  whoItsFor: {
    title: "Who tends to do well on an Australian PG pathway",
    intro:
      "Australia rewards students who can explain their plan clearly — academically, financially, and in career terms — without treating the visa stage as an afterthought.",
    profiles: [
      {
        title: "You want structured PG coursework",
        body: "Many programmes emphasise applied skills, projects, and employability signals. That suits students who like visible milestones and clear assessment patterns.",
      },
      {
        title: "You can model living costs in AUD early",
        body: "Sydney and Melbourne are materially different from regional cities on rent and daily spend. Families who choose city before budget often feel pressure mid-course.",
      },
      {
        title: "You are comfortable with policy-linked work rights",
        body: "Post-study work duration and eligibility depend on qualification level, CRICOS registration, study location rules in force, and other conditions — not marketing headlines.",
      },
      {
        title: "You want a transparent intake calendar",
        body: "February and July are the major PG rhythms for many universities. Early counselling helps preserve choice on competitive courses and scholarship windows.",
      },
    ],
  },
  intakes: {
    title: "Intake rhythm (typical PG)",
    rows: [
      {
        label: "February intake",
        window: "Major intake for many coursework masters.",
        plan: "Scholarship and competitive programme windows often close months earlier — we map document readiness so you are not chasing IELTS and transcripts in parallel with deadlines.",
      },
      {
        label: "July intake",
        window: "Second major cohort — strong for students finishing Indian UG cycles on a different calendar.",
        plan: "Visa appointment sequencing and financial evidence timing matter — especially when families need structured fund flows for documentation.",
      },
    ],
  },
  costs: {
    title: "Tuition & living costs — bands, not promises",
    disclaimer:
      "AUD exchange rates, city, housing type, and lifestyle move totals quickly. Treat the bands below as orientation for family discussion — final numbers belong to your offer, city choice, and contingency planning.",
    cards: [
      {
        label: "PG tuition (illustrative band)",
        value: "Roughly AUD 30k–55k+ per year",
        detail: "STEM and lab-heavy courses often sit higher; some programmes publish clear fee tables — we anchor budgets to the offer letter, not brochures.",
      },
      {
        label: "Living costs (monthly feel)",
        value: "City choice dominates the story",
        detail: "Inner-city Sydney is not comparable to Adelaide or Perth on rent. We encourage two-scenario modelling before emotional commitment to a city.",
      },
      {
        label: "All-in mindset",
        value: "OSHC + travel + setup costs",
        detail: "Overseas Student Health Cover, initial rent bond, flights, and laptop/setup costs are real first-semester items — not ‘later problems’.",
      },
    ],
  },
  workVisa: {
    title: "Work visa opportunities (high level)",
    intro:
      "Immigration settings change. What follows is simplified orientation — not legal advice. Eligibility belongs to the Department of Home Affairs and your specific course, duration, and compliance history.",
    points: [
      {
        title: "Temporary Graduate visa (subclass 485) — orientation",
        body: "A common post-study pathway for eligible graduates who meet qualification, study, English, and timing rules in force at application. Duration can vary by qualification level and policy settings.",
      },
      {
        title: "Work rights while studying",
        body: "Student visa work conditions exist and can change. We help families understand what is allowed in principle — without confusing part-time work with long-term migration planning.",
      },
      {
        title: "Skilled migration is a separate conversation",
        body: "PR pathways involve points tests, occupation lists, skilled employment, and state nominations where relevant. A PG degree can help — but it is not a guaranteed PR ticket.",
      },
    ],
  },
  longTerm: {
    title: "PR & long-term settlement — honest framing",
    intro:
      "Australia has structured skilled migration routes — and they are competitive. Long-term outcomes depend on occupation demand, points, policy in force at the time you apply, and your employment record — not a university brochure promise.",
    bullets: [
      "We encourage treating post-study work as a time-bounded window to build skills and clarity — while keeping financial contingency realistic if plans shift.",
      "If your primary goal is a very specific PR timeline, we compare transparently across destinations during counselling rather than optimising only for ‘rankings’.",
      "Course selection that ignores occupation realities can leave you educated but misaligned with skilled lists — we slow down where that risk shows up early.",
    ],
  },
  courses: {
    title: "PG categories Australia often does well for",
    items: [
      { title: "IT, data, and cybersecurity", blurb: "Strong industry adjacency in major cities — portfolio and internship narratives matter in statements." },
      { title: "Engineering and built environment", blurb: "Accreditation and pathway awareness matter — we check prerequisites against your undergraduate mapping." },
      { title: "Business and analytics", blurb: "Clear ROI conversations — especially when experience and cohort quality matter more than brand alone." },
      { title: "Health-aligned coursework (where eligible)", blurb: "Clinical access and professional registration rules vary — we flag what needs expert verification beyond general counselling." },
      { title: "Environmental and sustainability-focused PG", blurb: "Growing programme depth — fit depends on faculty alignment and project opportunities." },
    ],
  },
  universities: {
    title: "University landscape — beyond the Group of Eight label",
    intro:
      "Go8 institutions are well known — but departmental strength, placement support, and city cost curves should drive shortlisting as much as brand recognition.",
    highlights: [
      {
        name: "Group of Eight vs strong non-Go8",
        detail:
          "Some non-Go8 universities deliver excellent niche masters with better cost curves for certain profiles. We rank course modules and outcomes signals — not logos alone.",
      },
      {
        name: "Regional study considerations",
        detail:
          "Policy settings have historically created incentives for regional study in some cases. We treat this as a living policy area — not a permanent marketing fact.",
      },
      {
        name: "CRICOS and compliance hygiene",
        detail:
          "Post-study work discussions are irrelevant if the course is not aligned with eligible study definitions. We verify fundamentals before you pay deposits.",
      },
    ],
  },
  faqs: [
    {
      q: "What is GTE and why does it matter?",
      a: "GTE is about whether your student visa application reads as a genuine study plan — consistent with your academic history, finances, and career logic. Weak coherence is a common risk when students apply without structured counselling.",
    },
    {
      q: "Is Australia cheaper than the UK for PG?",
      a: "Sometimes total cost is higher because many Australian masters are two years — but not always. We model tuition + city + duration side by side for your actual shortlist.",
    },
    {
      q: "Can I work enough to fund tuition?",
      a: "Part-time work can help with living expenses for some students — but it is risky to budget it as guaranteed income. We discourage plans that depend on maximum work hours.",
    },
    {
      q: "When should I start for July intake?",
      a: "If you want IELTS/PTE headroom, transcript readiness, and competitive programme choice, earlier is better. Late starts are possible — with honest narrowing of options.",
    },
    {
      q: "Do I need PTE/IELTS for every university?",
      a: "English tests are common. Some institutions offer waivers under specific conditions. We confirm what your shortlist accepts and what the visa stage still requires.",
    },
  ],
  cta: {
    title: "Still unsure if Australia fits your budget and goals?",
    body: "Bring your transcripts, preferred field, and a rough family budget band. We will map February vs July feasibility — and what should wait for a cleaner profile year.",
  },
} satisfies CountryLandingContent;
