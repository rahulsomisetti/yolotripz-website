import type { CountryLandingContent } from "./types";
import { SITE } from "@/lib/constants";

export const ukPage = {
  slug: "uk",
  bookCounsellingLabel: "Book UK counselling",
  whatsappPreset: "Hi, I'd like to discuss PG study in the UK.",
  hero: {
    eyebrow: "Country guide · United Kingdom",
    headline: "Is the United Kingdom the right PG fit for you?",
    subheadline:
      "One-year masters, dense university ecosystems, and a clear post-study work route — when it fits your budget and career arc, the UK can be an excellent PG choice. When it does not, we will say so early.",
    footnote: `${SITE.name} · Overseas education counselling · ${SITE.city}, ${SITE.state}`,
  },
  whoItsFor: {
    title: "Who tends to thrive on a UK PG pathway",
    intro:
      "This is not a personality test — it is a practical fit check we use in counselling before you pay application fees.",
    profiles: [
      {
        title: "You want time efficiency",
        body: "Many strong PG programmes are one year. That can reduce total tuition and living cost versus longer degrees — if the programme quality still matches your goals.",
      },
      {
        title: "You can handle upfront concentration",
        body: "UK PG terms are intense. Students who plan weekly workload and stay close to academic expectations tend to adjust faster.",
      },
      {
        title: "Your budget aligns with realistic bands",
        body: "London and a few hotspots are materially more expensive than regional cities. We map city choice early so the financial story stays honest at home.",
      },
      {
        title: "You want a defined post-study work step",
        body: "The Graduate Route is a structured bridge for many — but eligibility, course level, and compliance still matter. We plan documentation with visa timelines in mind.",
      },
    ],
  },
  intakes: {
    title: "Intake rhythm (typical PG)",
    rows: [
      {
        label: "September intake",
        window: "Primary intake for most PG courses.",
        plan: "Many competitive applications begin 9–12 months earlier — especially where scholarships or early deposits apply.",
      },
      {
        label: "January intake",
        window: "Available for select universities and programmes.",
        plan: "Smaller cohorts and tighter visa sequencing — best when counselling starts early enough to avoid rushed financial proofs.",
      },
    ],
  },
  costs: {
    title: "Tuition & living costs — bands, not promises",
    disclaimer:
      "Figures move with exchange rates, city, lifestyle, and course. Treat these as orientation bands for family discussion — final budgeting belongs to your offer, city choice, and contingency planning.",
    cards: [
      {
        label: "PG tuition (illustrative band)",
        value: "Roughly £18k–£35k+",
        detail: "Varies widely by university, course, and duration. Lab-heavy and specialist programmes can sit higher.",
      },
      {
        label: "Living costs (monthly feel)",
        value: "London vs regional gap is real",
        detail: "London monthly living is typically materially higher than cities like Manchester, Leeds, or Scotland — we help you model both scenarios.",
      },
      {
        label: "All-in mindset",
        value: "Plan deposits + visa proof + travel",
        detail: "Families do best when CAS/deposit timing, visa financial evidence, and first-term rent are sequenced — not discovered in the same week.",
      },
    ],
  },
  workVisa: {
    title: "Work visa opportunities (high level)",
    intro:
      "Immigration rules change. What follows is a simplified orientation — not legal advice. Final eligibility belongs to UKVI and your specific course/award.",
    points: [
      {
        title: "Graduate Route (post-study work)",
        body: "A common next step after successfully completing an eligible qualification at a compliant institution, subject to validity and conditions at the time of application.",
      },
      {
        title: "Skilled Worker route",
        body: "Longer-term employment sponsorship pathway — depends on employer, role, salary thresholds, and policy in force when you apply.",
      },
      {
        title: "Documentation discipline",
        body: "Work rights conversations are only useful if your student visa file is clean and coherent — we emphasise consistency across finances, intent, and timelines.",
      },
    ],
  },
  longTerm: {
    title: "PR & long-term settlement — honest framing",
    intro:
      "The UK is not a ‘points PR’ market like some other destinations. Long-term settlement is tied to eligible visa routes, lawful residence periods, and rules in force at the time you apply — not a university brochure promise.",
    bullets: [
      "Many families plan the UK as a high-quality PG step with a defined work bridge — then reassess based on opportunities and policy reality at graduation.",
      "If your primary goal is a very specific long-term migration outcome, we compare routes transparently across countries during counselling.",
      "We encourage conservative financial planning: treat post-study work as a bonus window, not a guaranteed multi-year outcome.",
    ],
  },
  courses: {
    title: "PG courses the UK does especially well",
    items: [
      { title: "One-year MSc programmes", blurb: "STEM, analytics, finance — where calendar compression matters." },
      { title: "MBA & management", blurb: "Clear ROI conversations — especially when experience and cohort fit matter." },
      { title: "Law (LLM pathways)", blurb: "Bar conversion routes are sensitive — we map what is realistic for international students." },
      { title: "Engineering & built environment", blurb: "Strong departmental depth; prerequisites must match your undergraduate mapping." },
      { title: "Public health & social sciences", blurb: "Course research and statement coherence matter — we slow down where needed." },
    ],
  },
  universities: {
    title: "University landscape — what “Russell Group” actually signals",
    intro:
      "Families often recognise names before they recognise course fit. We use selectivity and departmental strength as tools — not as status theatre.",
    highlights: [
      {
        name: "Research-intensive cluster",
        detail:
          "Russell Group institutions are often research-strong — useful when you want labs, supervision depth, or academic networks. Not every PG goal requires Russell Group branding.",
      },
      {
        name: "London vs non-London trade-offs",
        detail:
          "London offers density of internships and industry proximity for some fields — with higher living costs. Regional cities can offer strong departments with a different cost curve.",
      },
      {
        name: "Course-first shortlisting",
        detail:
          "We rank modules, faculty alignment, cohort outcomes where available, and visa-sensitive course attributes — before ranking ‘prestige’ alone.",
      },
    ],
  },
  faqs: [
    {
      q: "Is the UK cheaper than a two-year masters elsewhere?",
      a: "Sometimes all-in costs are lower because many PG programmes are one year — but London can invert that story. We model both tuition and city before you commit emotionally to a destination.",
    },
    {
      q: "Can parents show funds for my visa documentation?",
      a: "Financial evidence rules are strict and personal to your case type. We guide families on structuring documentation and timelines — without promising outcomes UKVI has not decided.",
    },
    {
      q: "Do I need IELTS for every UK university?",
      a: "Most PG applicants present English proficiency in a prescribed format. Some institutions offer alternatives or waivers under specific conditions. We confirm what your shortlist actually accepts.",
    },
    {
      q: "Is the Graduate Route guaranteed after my degree?",
      a: "No visa outcome is guaranteed. The Graduate Route has eligibility requirements and can change. We plan for the rules in force and help you avoid sloppy assumptions in your student visa stage.",
    },
    {
      q: "When should we start for September intake?",
      a: "If you want choice on cities and courses, starting early is an advantage — especially for deposits, CAS timing, and appointment planning. If you are late, we still help — with honest narrowing.",
    },
  ],
  cta: {
    title: "Still unsure if the UK fits your profile?",
    body: "Bring your transcripts, target field, and a rough budget band. We will map what is realistic for September or January — and what should wait.",
  },
} satisfies CountryLandingContent;
