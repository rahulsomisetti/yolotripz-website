import type { CountryLandingContent } from "./types";
import { SITE } from "@/lib/constants";

export const emergingEuropeAsiaPage = {
  slug: "emerging-europe-asia",
  bookCounsellingLabel: "Book regional counselling",
  whatsappPreset: "Hi, I'd like to discuss PG options in Europe / Asia (emerging destinations).",
  hero: {
    eyebrow: "Regional guide · Europe & Asia",
    headline: "Are emerging European and Asian destinations right for your PG goals?",
    subheadline:
      "Beyond the traditional big four, many families now consider high-quality PG options in Western Europe, selective Asian hubs, and emerging European markets — often for niche courses, stronger ROI curves, or specific industry adjacency. The counselling task is tighter due diligence: accreditation, visa stability, employability realism, and exit options if plans change.",
    footnote: `${SITE.name} · Overseas education counselling · ${SITE.city}, ${SITE.state}`,
  },
  whoItsFor: {
    title: "Who tends to benefit from this regional lens",
    intro:
      "This page is intentionally not one country — it is a decision lens we use when your profile does not need ‘default’ destinations or when a niche programme genuinely wins.",
    profiles: [
      {
        title: "You have a niche academic goal that fits a specific hub",
        body: "Some fields have standout masters in Ireland, the Netherlands, Singapore, UAE, or selective Eastern European universities — when prerequisites and outcomes signals align.",
      },
      {
        title: "You can tolerate smaller Indian cohort familiarity",
        body: "Emerging choices can be excellent — but support systems and community familiarity differ from hyper-popular destinations. We discuss what that means for your adaptability.",
      },
      {
        title: "You want ROI conversations with harder numbers",
        body: "When tuition is competitive, families still need living costs, internship access, and salary realism — we avoid replacing one myth with another.",
      },
      {
        title: "You are willing to slow down for accreditation checks",
        body: "Not every shiny brochure is equivalent. We emphasise institutional credibility, credential recognition, and visa route stability before deposits.",
      },
    ],
  },
  intakes: {
    title: "Intake rhythm (varies by country)",
    rows: [
      {
        label: "September / Autumn cohort (common)",
        window: "Typical across much of continental Europe and several Asian hubs.",
        plan: "Application windows often begin early in the calendar year — especially where visa appointments and financial proofs require long lead times.",
      },
      {
        label: "January / Spring cohort (select markets)",
        window: "Available for some universities and PG diplomas — not universal.",
        plan: "Best when your documentation arc (transcripts, English tests, any APS-like steps) is already clean — spring starts punish late discovery problems.",
      },
    ],
  },
  costs: {
    title: "Tuition & living costs — compare on a per-country basis",
    disclaimer:
      "This regional page cannot quote one ‘correct’ band. Costs swing by city (Singapore vs Eastern Europe), programme type, and currency. Counselling is where we build a defendable budget table for your actual shortlist.",
    cards: [
      {
        label: "Tuition range mindset",
        value: "From competitive EU fees to premium Asian hubs",
        detail: "Some EU public routes keep tuition disciplined; global-city hubs may charge more but offer internship density — we compare apples to apples for your course list.",
      },
      {
        label: "Living costs are city-first",
        value: "Rent drives everything",
        detail: "Two students studying ‘abroad’ can have wildly different monthly burn based on city alone — we force city-level modelling early.",
      },
      {
        label: "Hidden setup costs",
        value: "Travel, insurance, deposits, proof funds",
        detail: "Embassies care about credible funds and coherent timelines — not vibes. We sequence deposits, visa proof, and travel as one project plan.",
      },
    ],
  },
  workVisa: {
    title: "Work visa opportunities (regional orientation)",
    intro:
      "Each country sets its own post-study rules — and many change. We do not merge them into one story. What follows is how we counsel the category responsibly.",
    points: [
      {
        title: "Post-study work varies by country — full stop",
        body: "Ireland, the Netherlands, France, Singapore, UAE, and others each have different post-study permissions, job search windows, and employer sponsorship realities. We verify the country rules in force for your intake year.",
      },
      {
        title: "Internship access is not automatic",
        body: "Some programmes advertise strong industry ties — we still check what visa conditions mean for internships, thesis work, and paid placements.",
      },
      {
        title: "Do not confuse ‘emerging’ with ‘easy PR’",
        body: "Some routes are excellent for education quality and employability — without being a settlement shortcut. We separate those goals early so families do not feel misled later.",
      },
    ],
  },
  longTerm: {
    title: "PR & long-term settlement — compare honestly, country by country",
    intro:
      "Regional pages attract myth-making. Our rule is simple: long-term settlement claims must be verified against current immigration law for that specific country — not forum optimism.",
    bullets: [
      "If settlement is a primary goal, we name the exact country route and its conditions — rather than treating ‘Europe’ as one visa story.",
      "If your goal is education quality plus a work bridge, we choose destinations where that bridge is structurally real for your field — not generic.",
      "We keep exit options open: a PG choice should still make sense if you return to India earlier than planned.",
    ],
  },
  courses: {
    title: "Where this regional lens often wins",
    items: [
      { title: "Supply chain, logistics, and trade-adjacent masters", blurb: "Select hubs reward proximity to ports, multinationals, and regional headquarters — programme choice becomes geography-sensitive." },
      { title: "Hospitality and aviation management (where credible)", blurb: "Some markets offer strong training ecosystems — accreditation and internship realism matter enormously." },
      { title: "Computer science in selective global hubs", blurb: "Can be excellent — competition and cost curves are intense; early applications matter." },
      { title: "Finance, risk, and analytics programmes", blurb: "Brand and location can matter for internships — we avoid overselling ‘cheap tuition’ without internship access reality." },
      { title: "Design, media, and creative industries", blurb: "Portfolio-first fields — destination choice follows faculty, cohort, and industry access more than generic rankings." },
    ],
  },
  universities: {
    title: "How we shortlist in this category",
    intro:
      "When countries multiply, discipline matters more. We use a smaller set of stronger checks — so you do not drown in options or apply randomly for ‘backup’.",
    highlights: [
      {
        name: "Institutional credibility checks",
        detail:
          "We prioritise accreditation signals, degree recognition, and transparent graduate outcomes — especially when a destination is newer to your family’s network.",
      },
      {
        name: "Visa stability as a first-class variable",
        detail:
          "Some markets shift rules quickly. We counsel with conservative assumptions and encourage contingency planning for appointment delays and policy updates.",
      },
      {
        name: "Field-specific hubs vs generic study abroad",
        detail:
          "The ‘best’ destination is often the one that matches your niche — we build shortlists around your career arc, not around what neighbours chose last year.",
      },
      {
        name: "Featured: Catholic Kwandong University (CKU), South Korea",
        detail:
          "Located in Gangneung, CKU offers 100% English-taught UG programs (Business, Computer Software, AI Healthcare, and Culinary). Features a $1,000 international freshman scholarship (reducing net tuition to $1,900/semester), free Korean classes, and structured visa pathways for the Fall 2026 intake cycle.",
      },
    ],
  },
  faqs: [
    {
      q: "Which countries do you include under this guide?",
      a: "It depends on your profile — common comparisons include Ireland, the Netherlands, France, Italy (select), Singapore, UAE, and credible Eastern European universities. We do not treat the list as fixed marketing geography.",
    },
    {
      q: "Is Singapore ‘better’ than Europe?",
      a: "It depends on your course, budget, internship goals, and tolerance for cost of living. We compare on a table — not a slogan.",
    },
    {
      q: "Are these destinations safe for students?",
      a: "Safety is a real concern for families. We discuss practical city realities and support systems — while avoiding fear-mongering or empty guarantees.",
    },
    {
      q: "Can I use this route mainly for PR?",
      a: "Some countries offer clearer post-study bridges than others — but nothing is guaranteed. If PR is the primary goal, we force a country-specific immigration review rather than a regional fantasy.",
    },
    {
      q: "When should we start planning?",
      a: "If you are comparing across regions, start early — because documentation norms differ (WES-like evaluations, English tests, programme-specific prerequisites). Late starts force artificial narrowing.",
    },
  ],
  cta: {
    title: "Want a clean comparison table for your actual shortlist?",
    body: "Bring your field, budget band, and whether internship or settlement matters more. We will map 2–4 credible country options with pros, risks, and a timeline — without pushing a default destination.",
  },
} satisfies CountryLandingContent;
