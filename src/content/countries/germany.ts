import type { CountryLandingContent } from "./types";
import { SITE } from "@/lib/constants";

export const germanyPage = {
  slug: "germany",
  bookCounsellingLabel: "Book Germany counselling",
  whatsappPreset: "Hi, I'd like to discuss PG study in Germany.",
  hero: {
    eyebrow: "Country guide · Germany",
    headline: "Is Germany the right PG fit for your academics, language readiness, and documentation discipline?",
    subheadline:
      "Germany offers strong public universities, often low or no tuition fees for many programmes, and serious employability pathways in Europe — especially when your profile matches course expectations and you understand blocked-account finances and visa sequencing. The trade-off is preparation: APS steps for Indian students, language realities for many courses, and a process that punishes sloppy timelines.",
    footnote: `${SITE.name} · Overseas education counselling · ${SITE.city}, ${SITE.state}`,
  },
  whoItsFor: {
    title: "Who tends to thrive on a German PG pathway",
    intro:
      "Germany suits students who like structured processes and can follow a checklist-heavy arc — without treating ‘low tuition’ as the same thing as ‘low total cost’.",
    profiles: [
      {
        title: "You have strong academic fundamentals",
        body: "Competitive programmes care about coursework depth, prerequisites, and sometimes GRE/GMAT expectations depending on the university and field.",
      },
      {
        title: "You are realistic about language",
        body: "Many international-taught masters exist — but daily life, internships, and some employers still reward German learning. We discuss what your specific field typically expects.",
      },
      {
        title: "You can manage blocked account planning calmly",
        body: "Financial proof is a core part of the study visa story. Families who plan fund flows early avoid last-minute stress that shows up in interviews and documentation.",
      },
      {
        title: "You want EU exposure with engineering/STEM depth",
        body: "Germany remains a serious destination for many STEM pathways — when course selection matches your UG mapping and career intent.",
      },
    ],
  },
  intakes: {
    title: "Intake rhythm (typical PG)",
    rows: [
      {
        label: "Winter semester (often Oct)",
        window: "Common start for many masters — exact dates vary by university.",
        plan: "Application windows can close early in the year — especially for uni-assist routes and APS sequencing from India. Late awareness shrinks options fast.",
      },
      {
        label: "Summer semester (often Apr)",
        window: "Available for select programmes — not universal.",
        plan: "Useful when your documentation arc aligns better with a spring start — still requires early APS/test planning and consistent motivation narrative for visa stages.",
      },
    ],
  },
  costs: {
    title: "Tuition & living costs — bands, not promises",
    disclaimer:
      "Many public universities charge low or no tuition for some programmes — but you still fund living, insurance, travel, and blocked account requirements. Treat the bands below as realistic living orientation in EUR.",
    cards: [
      {
        label: "Tuition orientation",
        value: "Often low/no tuition at public unis (not universal)",
        detail: "Baden-Württemberg and some programmes may charge fees — private universities are different. We read the offer letter fee table carefully.",
      },
      {
        label: "Living costs (monthly feel)",
        value: "Roughly €900–1,400+ per month (city dependent)",
        detail: "Munich and Frankfurt are not comparable to smaller cities on rent. We model two cities before you commit emotionally.",
      },
      {
        label: "Blocked account mindset",
        value: "Plan the requirement, not the rumour",
        detail: "Regulatory amounts change. We orient families to the requirement in force for your intake year and help you sequence timing with visa appointments.",
      },
    ],
  },
  workVisa: {
    title: "Work visa opportunities (high level)",
    intro:
      "German residence and work rules evolve. This section is orientation — not legal advice. Eligibility depends on embassy/consulate guidance in force and your specific study pathway.",
    points: [
      {
        title: "Student work rights (orientation)",
        body: "Students typically have defined work hour limits during term vs breaks — details depend on visa conditions in force. We discourage budgeting survival on maximum work hours.",
      },
      {
        title: "Post-study job seeker / residence pathways",
        body: "Germany has structured routes that can help graduates transition into skilled employment — timelines and eligibility depend on qualification, language, and policy settings.",
      },
      {
        title: "Blue Card and skilled employment (high level)",
        body: "Longer-term EU Blue Card conversations belong to employment offers and salary thresholds — not to first-semester marketing. We keep the stages separate.",
      },
    ],
  },
  longTerm: {
    title: "PR & long-term settlement — honest framing",
    intro:
      "Germany can be strong for skilled employment pathways — but settlement outcomes depend on language, employer demand, compliance history, and rules in force when you apply.",
    bullets: [
      "We encourage students to plan German learning as employability insurance — even for English-taught masters — unless your field clearly does not need it.",
      "If your primary goal is fastest PR comparisons across countries, we map trade-offs transparently rather than selling Germany on tuition alone.",
      "A masters is not a guarantee of a specific job timeline — we keep internship and thesis realities in the conversation early.",
    ],
  },
  courses: {
    title: "PG strengths Germany is known for",
    items: [
      { title: "Mechanical, automotive, and manufacturing-aligned engineering", blurb: "Depth is real — prerequisites and programme language need early verification." },
      { title: "Computer science and embedded systems", blurb: "Strong departmental programmes — competition can be high; profile coherence matters." },
      { title: "Renewable energy and sustainability-focused masters", blurb: "Growing programme map — fit depends on faculty and project work." },
      { title: "Management and analytics (where English-taught exists)", blurb: "ROI conversations should include internship language realities and city choice." },
      { title: "Public policy and international studies (select programmes)", blurb: "Statement quality and academic writing expectations are high — we allocate time accordingly." },
    ],
  },
  universities: {
    title: "University landscape — TU9, public research, and private options",
    intro:
      "Families sometimes hear ‘TU9’ as a magic list. We translate branding into course outcomes, language needs, and realistic living costs for your target cities.",
    highlights: [
      {
        name: "Public research universities",
        detail:
          "Often the core of German PG counselling — strong labs, thesis culture, and employer networks in specific regions when your field aligns.",
      },
      {
        name: "Uni-assist and application logistics",
        detail:
          "Some applications route through uni-assist; timelines and document certification matter. We build a calendar so you are not surprised by processing delays.",
      },
      {
        name: "APS (India) sequencing",
        detail:
          "For many Indian students, APS is part of the arc. Starting late can compress your entire year — we flag this early in counselling.",
      },
    ],
  },
  faqs: [
    {
      q: "Is Germany ‘free’ for masters?",
      a: "Many public programmes have low or no tuition — but you still fund living, insurance, blocked account requirements, and sometimes semester contributions. Total cost is not zero.",
    },
    {
      q: "Do I need German for an English-taught masters?",
      a: "For admission, sometimes no — for internships and many employers, often yes. We discuss what your target field typically expects so you do not get surprised in year two.",
    },
    {
      q: "What is APS and when should I start?",
      a: "APS is a verification step for many Indian students applying to Germany. Timelines vary; starting early prevents it from becoming the bottleneck that collapses your intake plan.",
    },
    {
      q: "Is a blocked account mandatory?",
      a: "For many study visa cases, proving financial means is mandatory and commonly done via blocked account routes — amounts and processes change. We orient you to the requirement in force for your intake.",
    },
    {
      q: "How does Germany compare to Canada for PR thinking?",
      a: "They are different systems with different language and employment realities. If PR speed is your primary driver, we compare transparently rather than ranking countries on vibes.",
    },
  ],
  cta: {
    title: "Still unsure if Germany matches your field and preparation appetite?",
    body: "Bring your transcripts, target degree type, and whether you are open to learning German alongside PG. We will map APS/test timelines and a realistic winter vs summer pathway.",
  },
} satisfies CountryLandingContent;
