import type { CountryLandingContent } from "./types";
import { SITE } from "@/lib/constants";

export const irelandPage: CountryLandingContent = {
  slug: "ireland",
  bookCounsellingLabel: "Book Ireland counselling",
  whatsappPreset: "Hi, I'd like to discuss UG/PG study in Ireland.",
  hero: {
    eyebrow: "Country guide · Ireland",
    headline: "Is Ireland the right UG or PG fit for your career goals?",
    subheadline:
      "An English-speaking European tech and pharma powerhouse. With high-ranking universities, a 2-year post-study work visa (Third Level Graduate Scheme), and dynamic global corporate presence, Ireland offers massive ROI.",
    footnote: `${SITE.name} · Overseas education counselling · ${SITE.city}, ${SITE.state}`,
  },
  whoItsFor: {
    title: "Who tends to thrive on an Irish higher education pathway",
    intro:
      "Ireland is a highly focused, modern destination. It is particularly strong for students aiming for careers in tech, pharmaceuticals, and finance.",
    profiles: [
      {
        title: "You target the global tech or pharma industry",
        body: "Dublin is the European headquarters for Google, Meta, Pfizer, and Stryker. The direct industry-to-classroom linkages are exceptionally tight.",
      },
      {
        title: "You want a cost-effective European degree",
        body: "Highly ranked Irish universities offer PG degrees that are typically 1 year and UG degrees that are highly recognized globally at competitive cost structures.",
      },
      {
        title: "You value an English-speaking EU hub",
        body: "Following Brexit, Ireland is the largest English-speaking country in the European Union, offering an easy cultural and professional transition.",
      },
      {
        title: "You want a clear post-study work bridge",
        body: "The Third Level Graduate Scheme offers up to 2 years of post-study work authorization for PG graduates to launch their European careers.",
      },
    ],
  },
  intakes: {
    title: "Intake rhythm (typical UG & PG)",
    rows: [
      {
        label: "September Intake (Autumn)",
        window: "The primary and most comprehensive intake for all Irish universities.",
        plan: "Applications typically open in October/November of the prior year. Early shortlisting is highly recommended for popular STEM fields.",
      },
      {
        label: "January Intake (Spring)",
        window: "Very limited options, available only at specific institutions or specialized courses.",
        plan: "Requires targeted counselling early in the summer to verify active course options.",
      },
    ],
  },
  costs: {
    title: "Tuition & living costs — transparent bands",
    disclaimer:
      "Costs vary depending on whether you choose a university in Dublin or in regional cities like Cork, Galway, or Limerick.",
    cards: [
      {
        label: "UG & PG Tuition (average)",
        value: "Roughly €10,000 – €25,000",
        detail: "Varies by course and university. Business and humanity courses lie on the lower end, while laboratory and engineering streams sit higher.",
      },
      {
        label: "Living costs (annual band)",
        value: "€10,000 – €15,000",
        detail: "Dublin is experiencing high accommodation demand, making regional university cities (Galway, Cork) highly attractive cost alternatives.",
      },
      {
        label: "All-in Financial Planning",
        value: "Tuition + living + insurance",
        detail: "Visa guidelines require evidence of immediate funds and medical insurance — we help you compile these files carefully.",
      },
    ],
  },
  workVisa: {
    title: "Third Level Graduate Scheme (Stamp 1G)",
    intro:
      "Irish post-study work rights are clean and highly attractive for international graduates. What follows is a simplified orientation.",
    points: [
      {
        title: "Up to 2 Years for PG Graduates",
        body: "Masters (Level 9) and Doctoral (Level 10) graduates from recognized Irish institutions are eligible for a 24-month work bridge (Stamp 1G).",
      },
      {
        title: "1 Year for UG Graduates",
        body: "Honours Bachelor Degree (Level 8) graduates are eligible for a 12-month Stamp 1G post-study work authorization.",
      },
      {
        title: "Clear path to Critical Skills",
        body: "Securing a qualifying job offer during OPT/Stamp 1G allows you to apply for the Critical Skills Employment Permit, leading to residency.",
      },
    ],
  },
  longTerm: {
    title: "Critical Skills & settlement — honest framing",
    intro:
      "Ireland actively seeks skilled professionals in tech, engineering, healthcare, and finance through a structured work-permit system.",
    bullets: [
      "The Critical Skills Employment Permit targets specific occupations with acute shortages, offering a fast-track to long-term residence.",
      "Graduates who land roles in software engineering, pharmaceutical sciences, or quantitative finance are highly competitive for immediate sponsorship.",
      "We encourage realistic budgeting and early career networking during semesters to make the most of the Irish employment landscape.",
    ],
  },
  courses: {
    title: "Highly respected degree pathways in Ireland",
    items: [
      { title: "MSc in Computer Science & Data", blurb: "Directly aligned to Dublin's massive Silicon Docks tech cluster." },
      { title: "Pharmaceutical & Chemical Sciences", blurb: "Ireland is a top global exporter of pharmaceuticals, offering excellent lab careers." },
      { title: "Fintech & Quantitative Finance", blurb: "Great combination of Irish software depth and Dublin's international financial services center." },
      { title: "Business Analytics & Digital Marketing", blurb: "High placement rates across MNCs and digital agencies in Ireland." },
      { title: "Nursing & Health Sciences", blurb: "Low-cost and highly sought after with excellent clinical placement networks." },
    ],
  },
  universities: {
    title: "Irish higher education institutions",
    intro:
      "Ireland's university sector is completely state-funded, ensuring highly uniform academic quality and global degree recognition.",
    highlights: [
      {
        name: "World-Class Traditional Universities",
        detail:
          "High-ranking universities (like Trinity College Dublin, UCD, UCC, and University of Galway) offer rich history and globally renowned faculty.",
      },
      {
        name: "Technological Universities (TUs)",
        detail:
          "TUs (like TU Dublin, MTU, or TUS) focus heavily on applied learning, hands-on projects, and direct industry collaboration.",
      },
      {
        name: "Regional cost advantages",
        detail:
          "Studying outside Dublin corks rental expenses significantly while maintaining outstanding placement records with local multinationals.",
      },
    ],
  },
  faqs: [
    {
      q: "Is an IELTS score required for the Irish visa?",
      a: "Yes. Irish immigration has strict English language requirements. We help you map what scores your target university and visa guidelines demand.",
    },
    {
      q: "How does the visa fund proof work for Ireland?",
      a: "Students must show access to immediate liquid funds to cover tuition and a set living expense band. We assist families in structuring clear financial files.",
    },
    {
      q: "What is Stamp 2 visa status?",
      a: "As an international student, you are granted a Stamp 2 visa, which permits part-time work of up to 20 hours per week during semesters and 40 hours during holidays.",
    },
    {
      q: "Can I bring my family on a dependent visa?",
      a: "Generally, students on undergraduate or standard taught PG programmes cannot bring dependents. Ph.D. students or highly specialized routes may have options — we clarify this early.",
    },
    {
      q: "When is the best time to apply for Ireland?",
      a: "Ideally by November/December for the following September intake, as highly sought-after tech and data courses fill seats very quickly.",
    },
  ],
  cta: {
    title: "Ready to explore the Irish tech and pharma route?",
    body: "Bring your academic transcripts and career goals. We will build a realistic shortlist of traditional and technological universities.",
  },
};
