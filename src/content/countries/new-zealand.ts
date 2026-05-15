import type { CountryLandingContent } from "./types";
import { SITE } from "@/lib/constants";

export const newZealandPage = {
  slug: "new-zealand",
  bookCounsellingLabel: "Book New Zealand counselling",
  whatsappPreset: "Hi, I'd like to discuss PG study in New Zealand.",
  hero: {
    eyebrow: "Country guide · New Zealand",
    headline: "Is New Zealand the right PG fit for a focused, smaller-cohort experience?",
    subheadline:
      "New Zealand offers high-quality universities, strong safety and lifestyle signals, and postgraduate pathways where policy settings align with your course and outcomes plan. The honest trade-off is scale: fewer institutions and intakes than larger destinations — so early clarity and realistic shortlisting matter more, not less.",
    footnote: `${SITE.name} · Overseas education counselling · ${SITE.city}, ${SITE.state}`,
  },
  whoItsFor: {
    title: "Who tends to thrive on a New Zealand PG pathway",
    intro:
      "New Zealand suits students who value depth over infinite choice — and families who want a calmer environment without pretending the visa stage is casual.",
    profiles: [
      {
        title: "You want smaller cohorts and direct access",
        body: "Class sizes and campus cultures can feel more personal. That helps some students — especially those who prefer structured support and visible academic expectations.",
      },
      {
        title: "You are comfortable with fewer university brands than AU/UK",
        body: "Shortlists get tighter quickly. That is a feature if you want decisive counselling — a constraint if you want endless backup options.",
      },
      {
        title: "You can plan finances with conservative buffers",
        body: "NZD costs are real and exchange-sensitive. Families who model rent, travel, and contingency early avoid mid-course panic.",
      },
      {
        title: "You want lifestyle and safety as serious inputs",
        body: "For many Karnataka families, wellbeing and environment matter alongside employability. We treat that as a valid decision factor — alongside career mechanics.",
      },
    ],
  },
  intakes: {
    title: "Intake rhythm (typical PG)",
    rows: [
      {
        label: "February intake",
        window: "Major intake for many PG programmes.",
        plan: "Scholarship and competitive programme timing can close earlier than families assume — we align IELTS/PTE and transcripts to those windows.",
      },
      {
        label: "July intake",
        window: "Second major cohort for many courses.",
        plan: "Useful for students whose Indian academic calendar aligns better with a mid-year start — still requires early visa sequencing and housing planning.",
      },
    ],
  },
  costs: {
    title: "Tuition & living costs — bands, not promises",
    disclaimer:
      "NZD rates, city (Auckland vs elsewhere), housing type, and lifestyle choices move totals. Treat these as orientation bands — then anchor to your offer and accommodation research.",
    cards: [
      {
        label: "PG tuition (illustrative band)",
        value: "Roughly NZD 35k–50k+ per year",
        detail: "STEM and professional programmes can sit higher; we always anchor to the fee stated in your offer and any annual uplift clauses.",
      },
      {
        label: "Living costs (monthly feel)",
        value: "Auckland premium is real",
        detail: "Auckland often dominates rent conversations. Other cities can change the curve — if your course and employability goals still fit.",
      },
      {
        label: "All-in mindset",
        value: "Insurance, travel, bond, setup",
        detail: "International student insurance, initial accommodation bond, flights, and winter clothing/setup are first-semester realities — we budget them explicitly.",
      },
    ],
  },
  workVisa: {
    title: "Work visa opportunities (high level)",
    intro:
      "Immigration settings change. What follows is simplified orientation — not legal advice. Eligibility belongs to Immigration New Zealand and your specific qualification, institution, and compliance history.",
    points: [
      {
        title: "Post-study work orientation",
        body: "New Zealand has structured post-study pathways for eligible graduates depending on qualification level, study duration, and policy settings in force at the time you apply.",
      },
      {
        title: "Work rights while studying",
        body: "Student visa work conditions exist and can change. We help families understand what is allowed in principle — without confusing part-time work with settlement planning.",
      },
      {
        title: "Skilled residence is a separate ladder",
        body: "Long-term residence depends on skilled employment, points systems where relevant, and policy cycles — not a university brochure promise.",
      },
    ],
  },
  longTerm: {
    title: "PR & long-term settlement — honest framing",
    intro:
      "New Zealand skilled migration settings have shifted historically. If your primary goal is a specific PR timeline, we treat policy sensitivity as a first-class risk — not a footnote.",
    bullets: [
      "We encourage students to choose a PG programme they would still value if policy tightens — that preserves dignity and optionality.",
      "Employability conversations must be field-specific: some sectors have clearer graduate demand signals than others.",
      "We compare NZ transparently against AU/Canada/UK when your goal is work rights clarity — not vibes alone.",
    ],
  },
  courses: {
    title: "PG categories New Zealand often suits well",
    items: [
      { title: "Environmental science and sustainability", blurb: "Strong thematic fit with NZ strengths — still check faculty alignment and project work." },
      { title: "Agriculture, food systems, and related engineering", blurb: "Where UG mapping fits, pathways can be distinctive — prerequisites matter." },
      { title: "IT and data-focused coursework", blurb: "Growing depth — internship narratives and portfolio discipline still matter for employability." },
      { title: "Business and management", blurb: "ROI depends on experience, cohort, and whether you are targeting NZ employment or a broader arc." },
      { title: "Education and policy-aligned PG (where eligible)", blurb: "Registration and eligibility rules vary — we flag what needs specialist verification beyond general counselling." },
    ],
  },
  universities: {
    title: "University landscape — compact but serious",
    intro:
      "You will recognise major NZ universities quickly. The counselling task is not brand collection — it is course fit, city cost realism, and visa-stage coherence.",
    highlights: [
      {
        name: "Course-first shortlisting",
        detail:
          "With fewer institutions, we go deeper on modules, supervision, and outcomes signals — rather than stacking ten ‘backup’ applications without strategy.",
      },
      {
        name: "Auckland vs other cities",
        detail:
          "Auckland can offer more internship density for some fields — with higher rent. We model both lifestyle and money early.",
      },
      {
        name: "Green List and skilled pathways (orientation only)",
        detail:
          "Policy tools like skilled occupation lists can matter for some families. We treat lists as living documents — verified at counselling time, not memorised from blogs.",
      },
    ],
  },
  faqs: [
    {
      q: "Is New Zealand ‘cheaper than Australia’?",
      a: "Sometimes, sometimes not — it depends on city, course duration, and rent luck. We model side by side for your actual shortlist rather than comparing country myths.",
    },
    {
      q: "Is NZ PR easy after a masters?",
      a: "No skilled migration route should be called ‘easy’. Outcomes depend on employment, policy settings, and field demand. We discuss this bluntly before deposits.",
    },
    {
      q: "Do I need IELTS/PTE?",
      a: "English proficiency is standard for most international PG applicants. Waiver rules vary — we confirm what your institutions accept and what visa documentation still expects.",
    },
    {
      q: "How many universities should I apply to?",
      a: "NZ shortlists are usually tighter than larger countries. We prefer a small set of strong, coherent applications over scatter-shot volume.",
    },
    {
      q: "When should we start for February?",
      a: "If you want scholarship consideration and calm visa timing, start as early as practical. Late starts are possible — with honest narrowing.",
    },
  ],
  cta: {
    title: "Still unsure if New Zealand matches your field and budget?",
    body: "Bring your transcripts and a rough monthly budget band. We will map February vs July feasibility — and whether AU or Canada might be a better parallel comparison.",
  },
} satisfies CountryLandingContent;
