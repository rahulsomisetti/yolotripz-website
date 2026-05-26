import type { CountryLandingContent } from "./types";
import { SITE } from "@/lib/constants";

export const usaPage: CountryLandingContent = {
  slug: "usa",
  bookCounsellingLabel: "Book USA counselling",
  whatsappPreset: "Hi, I'd like to discuss UG/PG study in the United States.",
  hero: {
    eyebrow: "Country guide · United States",
    headline: "Is the United States the right UG or PG fit for your family?",
    subheadline:
      "World-class universities, unparalleled STEM opportunities, and up to 3 years of post-study work via STEM OPT. We help you evaluate the USA honestly, align your family budget, and plan F-1 visa preparation carefully.",
    footnote: `${SITE.name} · Overseas education counselling · ${SITE.city}, ${SITE.state}`,
  },
  whoItsFor: {
    title: "Who tends to thrive on a US higher education pathway",
    intro:
      "The US offers immense scale and quality, but it rewards structured, early preparation and high adaptability.",
    profiles: [
      {
        title: "You target cutting-edge research or tech",
        body: "US universities lead global research funding, offering incomparable labs, faculty depth, and corporate networking for both Bachelors and Masters students.",
      },
      {
        title: "You want a flexible, modular curriculum",
        body: "Unlike systems with rigid schedules, the US allows credit transfers, double majors, and elective freedom that matches your evolving career interests.",
      },
      {
        title: "Your budget supports long-term planning",
        body: "US degrees are typically 4 years for UG and 2 years for PG. We map out of pocket expenses early, including assistantships and scholarship feasibility.",
      },
      {
        title: "You plan to leverage STEM OPT extensions",
        body: "For eligible STEM courses, the F-1 visa offers a 12-month base OPT plus a 24-month extension, giving you up to 3 years to gain professional experience in the US.",
      },
    ],
  },
  intakes: {
    title: "Intake rhythm (typical UG & PG)",
    rows: [
      {
        label: "Fall Intake (August/September)",
        window: "Primary and largest intake for almost all universities.",
        plan: "Counselling and profile building should ideally begin 10–12 months prior to handle standardized tests, essays, and early deadlines.",
      },
      {
        label: "Spring Intake (January)",
        window: "Secondary intake with good course options.",
        plan: "Fewer scholarship windows but tighter timeline — best when starting planning by April or May.",
      },
    ],
  },
  costs: {
    title: "Tuition & living costs — realistic budgeting",
    disclaimer:
      "Costs vary dramatically between public state universities and private Ivy League institutions. These are orientation bands for initial discussion.",
    cards: [
      {
        label: "Annual tuition (average)",
        value: "Roughly $20,000 – $60,000+",
        detail: "State universities generally offer more accessible rates for international students, while private universities sit on the higher end.",
      },
      {
        label: "Living costs (annual band)",
        value: "$10,000 – $20,000",
        detail: "Highly dependent on location. Mid-western and regional campuses cost significantly less than coastal cities like New York or San Francisco.",
      },
      {
        label: "Assistantships & Scholarships",
        value: "UG merit awards & PG TA/RA roles",
        detail: "Strong profiles can target tuition waivers or on-campus employment to offset expenses — we guide on application timing.",
      },
    ],
  },
  workVisa: {
    title: "Optional Practical Training (OPT)",
    intro:
      "F-1 student visa work rights are highly structured. What follows is a simplified orientation — not legal advice.",
    points: [
      {
        title: "12-Month standard OPT",
        body: "Available to all F-1 students successfully graduating from an eligible degree programme to gain practical training in their field.",
      },
      {
        title: "24-Month STEM extension",
        body: "Graduates with qualifying STEM degrees working for E-Verify employers can extend their OPT by 24 months, providing 3 full years of work authorization.",
      },
      {
        title: "Strict compliance focus",
        body: "US immigration requires meticulous tracking of employment dates, hours, and addresses — our travel orientation maps these rules clearly.",
      },
    ],
  },
  longTerm: {
    title: "Employment & H-1B transition — honest framing",
    intro:
      "The US does not have a direct point-based PR system. Transitioning to long-term residency is typically linked to employer-sponsored visa routes.",
    bullets: [
      "Most international graduates leverage their 1 to 3 years of OPT to secure employment, with the goal of transition to an H-1B temporary worker visa.",
      "The H-1B involves an annual cap lottery system; we advise students to build a realistic career map that values the immediate global work experience.",
      "We encourage robust, diversified backup plans — valuing US education for its global return on investment, not purely as a immigration shortcut.",
    ],
  },
  courses: {
    title: "Degrees the United States is globally famous for",
    items: [
      { title: "Computer Science & AI", blurb: "Sits at the heart of Silicon Valley and global tech research hubs." },
      { title: "STEM Business Analytics", blurb: "Combines data science with core business modules, offering full STEM OPT eligibility." },
      { title: "Engineering (All specializations)", blurb: "Incredible lab funding, high industry collaboration, and coop pathways." },
      { title: "MBA & Finance", blurb: "Ivy League and high-tier business schools with strong alumni networks and recruitment history." },
      { title: "Undergraduate Liberal Arts", blurb: "Ideal for students who want a broad foundation before committing to a major." },
    ],
  },
  universities: {
    title: "The US higher education landscape",
    intro:
      "With over 4,000 accredited colleges, the US offers a university for almost every profile and budget when researched correctly.",
    highlights: [
      {
        name: "National Universities vs Liberal Arts Colleges",
        detail:
          "National universities focus on research and offer UG/PG degrees, while Liberal Arts Colleges focus exclusively on high-contact undergraduate teaching.",
      },
      {
        name: "Public vs Private institutions",
        detail:
          "Public state systems (like UC, SUNY, or UT) offer massive campuses and excellent public funding. Private universities offer tighter cohorts and extensive endowment aid.",
      },
      {
        name: "Fit-first shortlisting",
        detail:
          "We balance academic selectivity, location, budget, and OPT employment history to find universities where you will actually thrive.",
      },
    ],
  },
  faqs: [
    {
      q: "Is the GRE or SAT required for all applications?",
      a: "No. Many universities offer test-optional or test-waived pathways for both UG and PG. We shortlist based on your profile to maximize your chances.",
    },
    {
      q: "When should F-1 visa preparation begin?",
      a: "Immediately upon receiving your I-20 document. F-1 appointments require fee payment, SEVIS registration, and a strict document review of financial capability.",
    },
    {
      q: "Are F-1 visa interviews difficult?",
      a: "The F-1 interview is a live conversation with a consular officer in English. We run mock sessions focusing on your study intent, financial stability, and ties to India.",
    },
    {
      q: "Can I work off-campus on an F-1 visa?",
      a: "Off-campus employment is prohibited during your studies unless authorized under Curricular Practical Training (CPT) or economic hardship. On-campus work is allowed up to 20 hours per week.",
    },
    {
      q: "How early should we start counselling for the USA?",
      a: "Ideally 10–12 months prior to your target Fall intake to ensure ample time for profile curation, essay writing, and letter of recommendation guidance.",
    },
  ],
  cta: {
    title: "Curious if your profile matches US admissions?",
    body: "Bring your transcripts, target majors, and standardized test scores. We will map a realistic shortlist of public and private options.",
  },
};
