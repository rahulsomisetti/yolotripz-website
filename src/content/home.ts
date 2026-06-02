import { getBlogPostsForHomePreview } from "@/content/insights";

export const hero = {
  headline: "Make your study abroad decision with absolute clarity and zero guesswork.",
  subheadline:
    "Your education is the most important journey you'll ever take. We handle the complex university admissions and visa logistics so your transition abroad is seamless, secure, and stress-free.",
};

export const trustItems = [
  { label: "Since 2017", detail: "Moodbidri, Karnataka" },
  { label: "UG & PG Focus", detail: "Bachelors, Masters, Diplomas" },
  { label: "Visa & travel", detail: "Under one coordinated plan" },
  { label: "Personalised", detail: "Family-first counselling" },
] as const;

export const trustBarIntro =
  "What families look for first: longevity, focus on UG & PG outcomes, and one team guiding the arc from shortlist to departure.";

export const problemCards = [
  {
    title: "The cost of a wrong fit",
    body: "A course or country that doesn’t match your goals can mean ₹30–50 lakhs spent without the outcome you expected — plus lost time in preparing and rebuilding your plan.",
  },
  {
    title: "Deadlines compound",
    body: "September and January intakes have early cut-offs for deposits, CAS/COE steps, and visa appointments. A late start shrinks your best options.",
  },
  {
    title: "Stress shows up at home",
    body: "Parents carry the financial weight; students carry the career anxiety. What helps is a predictable process — timelines you can see, no guesswork, no panic.",
  },
] as const;

export const countries = [
  {
    slug: "uk",
    name: "United Kingdom",
    intakes: "Sep / Jan (select courses)",
    work: "Graduate Route (eligibility applies)",
    profile: "Strong for dynamic UG degrees and intensive 1-year PG programmes.",
    href: "/countries/uk",
  },
  {
    slug: "usa",
    name: "United States",
    intakes: "Aug / Jan (Fall & Spring)",
    work: "OPT / STEM OPT extension (up to 3 years)",
    profile: "Ideal for high-tier STEM/MBA courses, extensive research networks, and global career opportunities.",
    href: "/countries/usa",
  },
  {
    slug: "australia",
    name: "Australia",
    intakes: "Feb / Jul (major intakes)",
    work: "Post-study work pathway (course & duration dependent)",
    profile: "Ideal for top-tier UG and structured PG coursework with a global employability focus.",
    href: "/countries/australia",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    intakes: "Feb / Jul",
    work: "Post-study work visa (policy conditions apply)",
    profile: "Smaller cohorts, high quality of life — great for focused learners.",
    href: "/countries/new-zealand",
  },
  {
    slug: "canada",
    name: "Canada",
    intakes: "Sep / Jan (varies by institution)",
    work: "PGWP linked to eligible programmes",
    profile: "Strong co-op options; best when planning is done early for competitive intakes.",
    href: "/countries/canada",
  },
  {
    slug: "ireland",
    name: "Ireland",
    intakes: "Sep / Jan",
    work: "Third Level Graduate Scheme (up to 2 years)",
    profile: "Vibrant English-speaking tech and pharma hub with great post-study work routes and strong ROI.",
    href: "/countries/ireland",
  },
  {
    slug: "germany",
    name: "Germany",
    intakes: "Winter / Summer (varies by programme)",
    work: "Post-study job search / employment routes (conditions apply)",
    profile: "Strong STEM and public-university value — with APS, blocked account, and language planning done early.",
    href: "/countries/germany",
  },
  {
    slug: "emerging-europe-asia",
    name: "Emerging Europe & Asia",
    intakes: "Sep / Jan (market dependent)",
    work: "Varies by country — verified per destination",
    profile: "Selective hubs for niche masters, low-cost MBBS/Nursing, ROI, and industry adjacency — diligence-heavy shortlisting.",
    href: "/countries/emerging-europe-asia",
  },
] as const;

export const whyPoints = [
  {
    title: "Honest shortlisting",
    body: "We start with your academics, budget band, and career intent — then narrow countries and courses that are genuinely realistic.",
  },
  {
    title: "Calm, step-by-step execution",
    body: "Applications, statements, financial documentation, and visa prep are sequenced so you’re never guessing what comes next.",
  },
  {
    title: "Local trust, global standards",
    body: "Families across Dakshina Kannada and the wider Mangalore belt work with us because we’re accessible — without compromising on thoroughness.",
  },
  {
    title: "Travel as support, not the headline",
    body: "Flights, forex, and holiday planning sit alongside your study timeline — coordinated so logistics don’t distract from admissions.",
  },
] as const;

export const processSteps = [
  { step: "01", title: "Counselling", body: "Goals, budget, timeline, and country fit — aligned with intake reality." },
  { step: "02", title: "Shortlisting", body: "Course comparisons, offer types, and risk checks before you apply." },
  { step: "03", title: "Applications", body: "Documents, SOP/LOR guidance, submissions, and offer evaluation." },
  { step: "04", title: "Visa", body: "Funds structure, appointment planning, and mock interviews where useful." },
  { step: "05", title: "Travel", body: "Ticketing, forex, pre-departure checklist — timed to your programme start." },
] as const;

export const testimonials = [
  {
    quote:
      "What we appreciated most was the straight conversation on budget and ROI. No inflated promises — just a clear plan for the UK intake.",
    name: "Parent of MSc applicant",
    meta: "Coastal Karnataka · 2024",
  },
  {
    quote:
      "The team broke down each stage so I wasn’t overwhelmed. From shortlisting Australia to my visa appointment, I always knew the next step.",
    name: "PG student · Data-focused masters",
    meta: "January intake",
  },
  {
    quote:
      "We started late for September. Yolotripz helped us prioritise what still mattered and where we could still be competitive.",
    name: "Family · Canada PG pathway",
    meta: "September intake",
  },
] as const;

/** Homepage preview cards — sourced from the insights CMS-ready repository. */
export const blogPosts = getBlogPostsForHomePreview();

export const intakeCampaign = {
  title: "Don’t lose this September intake",
  body: "If you are targeting September, the next few weeks decide how many strong options remain — especially for competitive UG/PG courses and visa appointment slots. The previous priority window has already closed; starting today ensures you avoid late-stage consulate backlogs.",
  cta: "Check September feasibility",
  href: "/contact#book",
} as const;
