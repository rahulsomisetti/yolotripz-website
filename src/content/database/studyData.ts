export type CountryData = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  tuitionBand: string;
  livingCosts: string;
  prPathway: string;
  workRights: string;
  salaryExpectation: string;
  climate: string;
  topCities: string[];
  visaSuccessRate: string;
  ieltsRequirement: string;
  intakeDeadlines: string;
  whyStudyHere: string;
  popularFields: string[];
};

export type UniversityData = {
  slug: string;
  name: string;
  countrySlug: string;
  rank: number;
  rankingsDetail: string;
  tuitionYearly: number; // in USD
  accommodationYearly: number; // in USD
  overview: string;
  campusInfo: string;
  eligibility: string;
  brochureUrl: string;
  logo: string;
  coverImage: string;
  coursesSlugs: string[];
};

export type CourseData = {
  slug: string;
  title: string;
  universitySlug: string;
  level: "UG" | "PG";
  duration: string;
  intakes: string[];
  tuitionExact: number; // in USD
  eligibilityDetail: string;
  field: "STEM" | "Business" | "Healthcare" | "Law" | "Arts";
  careerProspects: string;
};

export type ScholarshipData = {
  slug: string;
  name: string;
  value: string;
  eligibleCountries: string[];
  criteria: string;
  type: "Government" | "University" | "Private";
  deadline: string;
};

export const countriesDb: CountryData[] = [
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    region: "North America",
    tuitionBand: "$25,000 – $55,000 / Year",
    livingCosts: "$12,000 – $18,000 / Year",
    prPathway: "Highly competitive (H-1B to Green Card pathways via STEM OPT)",
    workRights: "20 hrs/week on-campus. STEM OPT allows up to 3 years post-grad work.",
    salaryExpectation: "$75,000 – $110,000 / Year (Starting average)",
    climate: "Diverse (Sub-tropical in South, temperate/snow in North)",
    topCities: ["New York", "Boston", "San Francisco", "Chicago", "Seattle"],
    visaSuccessRate: "85%",
    ieltsRequirement: "6.5+ (minimum 6.0 in all bands) / TOEFL 80+",
    intakeDeadlines: "Fall: Jan-March | Spring: Oct-Nov",
    whyStudyHere: "World-leading academic research, massive global corporate networks, and unmatched post-study STEM OPT career acceleration.",
    popularFields: ["Computer Science", "Business Analytics", "Data Science", "Biomedical Engineering", "Finance"],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tuitionBand: "£16,000 – £28,000 / Year",
    livingCosts: "£12,000 – £15,000 / Year",
    prPathway: "Graduate Route (2-year work visa) leading to Skilled Worker sponsorship",
    workRights: "20 hrs/week term-time, full-time during holidays. 2-year post-study Graduate Route.",
    salaryExpectation: "£32,000 – £45,000 / Year (Starting average)",
    climate: "Temperate maritime (mild winters, cool summers, frequent rain)",
    topCities: ["London", "Manchester", "Edinburgh", "Birmingham", "Leeds"],
    visaSuccessRate: "97%",
    ieltsRequirement: "6.0 - 6.5 (minimum 5.5 in all bands) / MOI accepted at select schools",
    intakeDeadlines: "September: May-July | January: Sep-Nov",
    whyStudyHere: "Highly concentrated world-class universities, intensive 1-year Masters saving tuition & living costs, and rich historical academic prestige.",
    popularFields: ["Business Administration", "Law", "Finance", "Mechanical Engineering", "Computer Science"],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tuitionBand: "A$25,000 – A$45,000 / Year",
    livingCosts: "A$24,000 – A$28,000 / Year",
    prPathway: "Subclass 189/190/491 Point-based GSM system (highly structured)",
    workRights: "48 hours per fortnight. Post-Study Work stream (Subclass 485) for 2 to 4 years.",
    salaryExpectation: "A$65,000 – A$85,000 / Year (Starting average)",
    climate: "Mainly temperate in south, tropical in north (sunny and warm)",
    topCities: ["Melbourne", "Sydney", "Brisbane", "Perth", "Adelaide"],
    visaSuccessRate: "90%",
    ieltsRequirement: "6.5+ (minimum 6.0 in all bands) / PTE 58+",
    intakeDeadlines: "Feb Intake: Oct-Dec | July Intake: March-May",
    whyStudyHere: "Top-tier Group of Eight universities, highly structured regional migration advantages, high minimum wage, and incredible quality of life.",
    popularFields: ["Nursing & Healthcare", "Civil Engineering", "Information Technology", "Business Management", "Hospitality Management"],
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    region: "Europe",
    tuitionBand: "€10,000 – €22,000 / Year",
    livingCosts: "€10,000 – €14,000 / Year",
    prPathway: "Stamp 1G (2 years) leading to Critical Skills Employment Permit (highly structured)",
    workRights: "20 hrs/week term-time, 40 hrs/week holidays. 2-year Stamp 1G PG work route.",
    salaryExpectation: "€38,000 – €48,000 / Year (Starting average)",
    climate: "Mild maritime climate (temperate with abundant rainfall)",
    topCities: ["Dublin", "Cork", "Galway", "Limerick"],
    visaSuccessRate: "96%",
    ieltsRequirement: "6.0 - 6.5 (minimum 5.5 in all bands)",
    intakeDeadlines: "September: March-May | January: July-September",
    whyStudyHere: "The only English-speaking tech and pharma hub in the EU, home to European headquarters of Apple, Google, and Pfizer.",
    popularFields: ["Software Engineering", "Pharmacology", "Data Science", "Digital Marketing", "Finance"],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tuitionBand: "C$20,000 – C$40,000 / Year",
    livingCosts: "C$15,000 – C$20,000 / Year",
    prPathway: "Express Entry (CEC/FSWP) and Provincial Nominee Programs (PNP)",
    workRights: "20 hrs/week on/off-campus. PGWP (Post-Graduation Work Permit) up to 3 years.",
    salaryExpectation: "C$55,000 – C$75,000 / Year (Starting average)",
    climate: "Cold winters with heavy snow, warm pleasant summers",
    topCities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    visaSuccessRate: "78%",
    ieltsRequirement: "6.5+ (minimum 6.0 in all bands) / SDS pathway",
    intakeDeadlines: "Fall: Jan-March | Winter: July-September",
    whyStudyHere: "Incredibly welcoming cultural environment, robust co-op internship networks, and highly reliable PR opportunities for PGWP holders.",
    popularFields: ["Supply Chain Management", "Cloud Computing", "AI & Robotics", "Business Administration", "Engineering"],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    tuitionBand: "€0 – €3,000 / Year (Public Universities)",
    livingCosts: "€11,200 / Year (Blocked Account requirement)",
    prPathway: "Highly reliable Blue Card EU and fast-track residency for German degree holders",
    workRights: "120 full days or 240 half days per year. 18-month job seeker visa post-graduation.",
    salaryExpectation: "€45,000 – €58,000 / Year (Starting average)",
    climate: "Temperate seasonal climate (cold winters, warm summers)",
    topCities: ["Munich", "Berlin", "Frankfurt", "Hamburg", "Stuttgart"],
    visaSuccessRate: "92%",
    ieltsRequirement: "6.5+ (some programs allow English MOI; German A2/B1 recommended)",
    intakeDeadlines: "Winter Intake: May-July | Summer Intake: Nov-Jan",
    whyStudyHere: "Zero tuition fees in public universities, world-leading heavy machinery and automotive industries, and high post-study job seeker security.",
    popularFields: ["Automotive Engineering", "Data Analytics", "Power Engineering", "Mechatronics", "Logistics"],
  },
];

export const universitiesDb: UniversityData[] = [
  {
    slug: "uq",
    name: "The University of Queensland",
    countrySlug: "australia",
    rank: 42,
    rankingsDetail: "QS World University Rankings #42 (2026)",
    tuitionYearly: 32000,
    accommodationYearly: 14000,
    overview: "A prestigious member of Australia’s Group of Eight, UQ ranks consistently among the top 50 in the world, renowned for research innovation and visual campus life.",
    campusInfo: "Located in beautiful, sunny Brisbane, featuring stunning sandstone architecture, advanced research labs, and exceptional student sports facilities.",
    eligibility: "75%+ in high school / 6.5 GPA in Bachelors. IELTS 6.5 overall (no band less than 6.0).",
    brochureUrl: "/downloads/uq-brochure.pdf",
    logo: "/images/universities/uq-logo.jpg",
    coverImage: "/images/countries/australia-card.jpg",
    coursesSlugs: ["uq-software", "uq-mba"],
  },
  {
    slug: "uwa",
    name: "University of Western Australia",
    countrySlug: "australia",
    rank: 77,
    rankingsDetail: "QS World University Rankings #77 (2026)",
    tuitionYearly: 30000,
    accommodationYearly: 12000,
    overview: "UWA is Western Australia’s leading university and a Group of Eight member. It offers regional study advantages in Perth, including an extra year of post-study work rights.",
    campusInfo: "Situated on the banks of the Swan River in Perth, combining heritage sandstone architecture with state-of-the-art innovation labs.",
    eligibility: "70%+ in high school. IELTS 6.5 overall.",
    brochureUrl: "/downloads/uwa-brochure.pdf",
    logo: "/images/universities/uwa-logo.jpg",
    coverImage: "/images/countries/australia-card.jpg",
    coursesSlugs: ["uwa-cs", "uwa-data-science"],
  },
  {
    slug: "coventry",
    name: "Coventry University",
    countrySlug: "uk",
    rank: 550,
    rankingsDetail: "Top 15 UK University (Guardian 2024)",
    tuitionYearly: 22000,
    accommodationYearly: 9000,
    overview: "Highly progressive and forward-looking, Coventry University is ranked #1 for Student Experience in the UK, focusing heavily on professional networking and placement support.",
    campusInfo: "A modern city-centre campus in Coventry and a secondary specialist campus in London's financial district.",
    eligibility: "60%+ in Grade 12 / 55%+ in Bachelors. IELTS 6.0 overall.",
    brochureUrl: "/downloads/coventry-brochure.pdf",
    logo: "/images/universities/coventry-logo.jpg",
    coverImage: "/images/countries/uk-card.jpg",
    coursesSlugs: ["coventry-ug-business", "coventry-pg-mba"],
  },
  {
    slug: "law-uk",
    name: "The University of Law",
    countrySlug: "uk",
    rank: 900,
    rankingsDetail: "91/100 Top UK Law Firms Partnership Placement",
    tuitionYearly: 19500,
    accommodationYearly: 11000,
    overview: "The UK's largest and most established specialist provider of legal education, renowned for its 'Employment Promise' where students get 100% fees back if they don't find a job in 9 months.",
    campusInfo: "Multiple professional branches located in London, Birmingham, Manchester, Leeds, and Bristol.",
    eligibility: "55%+ in LLB / Bachelors. IELTS 6.5 overall.",
    brochureUrl: "/downloads/ulaw-brochure.pdf",
    logo: "/images/universities/ulaw-logo.jpg",
    coverImage: "/images/countries/uk-card.jpg",
    coursesSlugs: ["law-uk-llb", "law-uk-lpc"],
  },
  {
    slug: "cku",
    name: "Catholic Kwandong University (CKU)",
    countrySlug: "emerging-europe-asia",
    rank: 800,
    rankingsDetail: "Ranked among South Korea's premier technological and regional universities",
    tuitionYearly: 5800, // $2900 per semester
    accommodationYearly: 3000,
    overview: "Located in Gangneung, South Korea, CKU offers high-quality English-taught courses in Software, AI, Business, and Culinary Arts, with massive financial scholarships for freshman cohorts.",
    campusInfo: "A state-of-the-art technological campus situated in the coastal olympic city of Gangneung, featuring advanced culinary kitchens and AI robotics labs.",
    eligibility: "Minimum 70% in High School (Grade 12). IELTS 6.0 or TOEFL 71+.",
    brochureUrl: "/downloads/cku-brochure.pdf",
    logo: "/images/universities/cku-logo.jpg",
    coverImage: "/images/countries/emerging-europe-asia-card.jpg",
    coursesSlugs: ["cku-software", "cku-culinary"],
  },
  {
    slug: "seu-georgia",
    name: "Georgian National University (SEU)",
    countrySlug: "emerging-europe-asia",
    rank: 950,
    rankingsDetail: "Leading Medical and Healthcare Academy in Georgia",
    tuitionYearly: 3500,
    accommodationYearly: 2500,
    overview: "SEU is a state-of-the-art university in Tbilisi, Georgia, popular for English-taught BSN Nursing and MBBS degrees, approved globally by WHO, NMC (India), and EU regulators.",
    campusInfo: "Modern visual medical campus located in Tbilisi, featuring high-fidelity simulation labs and affiliated multi-speciality state hospitals.",
    eligibility: "Minimum 55-60% in Grade 12 (PCB stream). Medium of Instruction (MOI) accepted without IELTS.",
    brochureUrl: "/downloads/seu-brochure.pdf",
    logo: "/images/universities/seu-logo.jpg",
    coverImage: "/images/countries/emerging-europe-asia-card.jpg",
    coursesSlugs: ["seu-nursing", "seu-mbbs"],
  },
];

export const coursesDb: CourseData[] = [
  {
    slug: "uq-software",
    title: "Bachelor of Software Engineering (Honours)",
    universitySlug: "uq",
    level: "UG",
    duration: "4 Years",
    intakes: ["February", "July"],
    tuitionExact: 34500,
    eligibilityDetail: "Grade 12 PCB/PCM minimum 78% average. IELTS 6.5.",
    field: "STEM",
    careerProspects: "Lead Developer, Cloud Architect, Systems Analyst at top global tech firms.",
  },
  {
    slug: "uq-mba",
    title: "Master of Business Administration (MBA)",
    universitySlug: "uq",
    level: "PG",
    duration: "1.5 Years",
    intakes: ["February", "July"],
    tuitionExact: 39800,
    eligibilityDetail: "Minimum 3 years post-grad work experience, GMAT 550, or equivalent GPA. IELTS 6.5.",
    field: "Business",
    careerProspects: "Management Consultant, Investment Banker, Strategy Director.",
  },
  {
    slug: "uwa-cs",
    title: "Master of Computer Science",
    universitySlug: "uwa",
    level: "PG",
    duration: "2 Years",
    intakes: ["February", "July"],
    tuitionExact: 31000,
    eligibilityDetail: "Bachelors in STEM field with 65%+ average. IELTS 6.5.",
    field: "STEM",
    careerProspects: "Data Engineer, Cybersecurity Specialist, Software Architect.",
  },
  {
    slug: "coventry-ug-business",
    title: "BSc Business Administration & Marketing",
    universitySlug: "coventry",
    level: "UG",
    duration: "3 Years",
    intakes: ["September", "January", "July"],
    tuitionExact: 19800,
    eligibilityDetail: "65%+ in High School. IELTS 6.0 overall.",
    field: "Business",
    careerProspects: "Marketing Specialist, Business Developer, Project Manager.",
  },
  {
    slug: "coventry-pg-mba",
    title: "Master of Business Administration (Global MBA)",
    universitySlug: "coventry",
    level: "PG",
    duration: "1 Year",
    intakes: ["September", "January", "July"],
    tuitionExact: 22500,
    eligibilityDetail: "55%+ in Bachelors. No work experience required. IELTS 6.5.",
    field: "Business",
    careerProspects: "Global Account Manager, Operations Lead, Venture Analyst.",
  },
  {
    slug: "law-uk-llb",
    title: "Bachelor of Laws (LLB Honours)",
    universitySlug: "law-uk",
    level: "UG",
    duration: "3 Years",
    intakes: ["September", "January"],
    tuitionExact: 18900,
    eligibilityDetail: "70%+ in High School. IELTS 6.5.",
    field: "Law",
    careerProspects: "Solicitor, Barrister, Legal Adviser, Corporate Compliance officer.",
  },
  {
    slug: "cku-software",
    title: "BSc Computer Software (100% English-Taught)",
    universitySlug: "cku",
    level: "UG",
    duration: "4 Years",
    intakes: ["September"],
    tuitionExact: 5800,
    eligibilityDetail: "70%+ in High School (12th Grade). IELTS 6.0.",
    field: "STEM",
    careerProspects: "Full Stack Engineer, Game Developer, AI Specialist in Seoul/Global.",
  },
  {
    slug: "seu-nursing",
    title: "Bachelor of Nursing (BSN - Taught in English)",
    universitySlug: "seu-georgia",
    level: "UG",
    duration: "4 Years",
    intakes: ["March", "September"],
    tuitionExact: 3500,
    eligibilityDetail: "55%+ in Grade 12 (PCB). IELTS not required (MOI accepted).",
    field: "Healthcare",
    careerProspects: "Registered Nurse in European Clinics, US NCLEX-RN Pathways.",
  },
];

export const scholarshipsDb: ScholarshipData[] = [
  {
    slug: "seu-freshman",
    name: "SEU Nursing Merit Scholarship",
    value: "USD 1,000 Freshman Award",
    eligibleCountries: ["India", "Pakistan", "Nepal", "Sri Lanka"],
    criteria: "Minimum 80% in Grade 12 PCB stream.",
    type: "University",
    deadline: "30th June 2026",
  },
  {
    slug: "coventry-intl",
    name: "Coventry July Intake Scholarship",
    value: "£2,500 PG / up to £6,000 UG Award",
    eligibleCountries: ["All International Countries"],
    criteria: "Requires an active offer for the July 2026 intake cycle.",
    type: "University",
    deadline: "5th June 2026",
  },
  {
    slug: "chevening-uk",
    name: "Chevening Scholarship (UK Government)",
    value: "100% Fees + Monthly Allowance + Flights",
    eligibleCountries: ["India", "Malaysia", "Brazil", "South Africa", "Others"],
    criteria: "Requires outstanding leadership potential and 2+ years of work experience.",
    type: "Government",
    deadline: "November Annually",
  },
  {
    slug: "dest-australia",
    name: "Destination Australia Scholarship",
    value: "A$15,000 / Year Funding Support",
    eligibleCountries: ["All Domestic & International Students"],
    criteria: "Must study at a regional Australian campus (e.g. UWA regional Perth).",
    type: "Government",
    deadline: "Varies by University",
  },
  {
    slug: "uq-excellence",
    name: "UQ Academic Excellence Award",
    value: "A$5,000 – A$10,000 Tuition Waiver",
    eligibleCountries: ["All International Students"],
    criteria: "Achieve top GPA in secondary school or prior undergraduate studies.",
    type: "University",
    deadline: "Varies by Intake",
  },
];
