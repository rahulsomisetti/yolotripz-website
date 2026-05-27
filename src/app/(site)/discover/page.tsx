"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { 
  countriesDb, 
  universitiesDb, 
  coursesDb, 
  scholarshipsDb,
  UniversityData,
  ScholarshipData
} from "@/content/database/studyData";
import { 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  Briefcase,
  Award
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function DiscoverPage() {
  const [step, setStep] = useState<number>(1);
  
  // Questionnaire States
  const [level, setLevel] = useState<"UG" | "PG">("PG");
  const [field, setField] = useState<"STEM" | "Business" | "Healthcare" | "Law" | "Arts">("STEM");
  const [budgetCeiling, setBudgetCeiling] = useState<number>(30000); // in USD
  const [careerGoal, setCareerGoal] = useState<string>("salary"); // 'pr' | 'salary' | 'research' | 'roi'
  const [testStream, setTestStream] = useState<string>("ielts"); // 'ielts' | 'neet' | 'none'

  // Restart Handler
  const handleRestart = () => {
    setStep(1);
  };

  // Recommendations Logic
  const results = useMemo(() => {
    // 1. Filter Courses
    const filteredCourses = coursesDb.filter(course => {
      if (course.level !== level) return false;
      if (course.field !== field) return false;
      if (course.tuitionExact > budgetCeiling) return false;
      return true;
    });

    // 2. Fetch Matching Universities
    const recommendedUnivs: UniversityData[] = [];
    filteredCourses.forEach(course => {
      const univ = universitiesDb.find(u => u.slug === course.universitySlug);
      if (univ && !recommendedUnivs.some(u => u.slug === univ.slug)) {
        recommendedUnivs.push(univ);
      }
    });

    // 3. Fetch Applicable Scholarships
    const applicableScholarships: ScholarshipData[] = [];
    recommendedUnivs.forEach(univ => {
      // Find scholarships that explicitly mention the university or eligible country
      const matches = scholarshipsDb.filter(sch => {
        const country = countriesDb.find(c => c.slug === univ.countrySlug);
        return sch.slug.includes(univ.slug) || (country && sch.eligibleCountries.includes("All International Countries"));
      });
      matches.forEach(m => {
        if (!applicableScholarships.some(s => s.slug === m.slug)) {
          applicableScholarships.push(m);
        }
      });
    });

    return {
      courses: filteredCourses,
      universities: recommendedUnivs,
      scholarships: applicableScholarships
    };
  }, [level, field, budgetCeiling]);

  // Fallback Recommendations (In case budget is too tight for premium STEM/Business courses)
  const fallbacks = useMemo(() => {
    // Recommending Georgia SEU or South Korea CKU which are high-value low-cost visual hubs
    const highlyAccredited = universitiesDb.filter(u => u.tuitionYearly <= 8000);
    const relatedCourses = coursesDb.filter(c => highlyAccredited.some(u => u.slug === c.universitySlug));
    return {
      universities: highlyAccredited,
      courses: relatedCourses
    };
  }, []);

  return (
    <div className="min-h-screen bg-mesh-gradient bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.02),transparent_45%)] bg-background pb-24 pt-16 sm:pb-32 sm:pt-20">
      <Container>
        
        {/* Step progress bar */}
        {step <= 5 && (
          <div className="mx-auto max-w-xl mb-12">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
              <span>Finder Progress</span>
              <span>Step {step} of 5</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div 
                style={{ width: `${(step / 5) * 100}%` }} 
                className="h-full bg-gold transition-all duration-500 ease-out" 
              />
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* QUESTION 1: ACADEMIC LEVEL */}
        {/* ======================================================== */}
        {step === 1 && (
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              Degree Level
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              What is your target academic level?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Select whether you are looking for undergraduate or postgraduate studies.</p>
            
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 ${
                  level === "UG" 
                    ? "border-gold bg-gold/5 shadow-soft" 
                    : "border-navy/[0.06] bg-card hover:border-navy/[0.12] hover:bg-muted/30"
                }`}
                onClick={() => setLevel("UG")}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted group-hover:bg-card text-lg">🎓</span>
                  <div>
                    <h3 className="font-display font-semibold text-navy text-base">Undergraduate (UG)</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Bachelors degrees, diplomas, and entry-level pathways direct from high school.</p>
                  </div>
                </div>
              </button>

              <button
                type="button"
                className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 ${
                  level === "PG" 
                    ? "border-gold bg-gold/5 shadow-soft" 
                    : "border-navy/[0.06] bg-card hover:border-navy/[0.12] hover:bg-muted/30"
                }`}
                onClick={() => setLevel("PG")}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted group-hover:bg-card text-lg">💼</span>
                  <div>
                    <h3 className="font-display font-semibold text-navy text-base">Postgraduate (PG)</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Masters degrees, MBA, and PG diplomas for graduates seeking specialization.</p>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-10 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-navy/90 hover:scale-103 transition-transform"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* QUESTION 2: DOMAIN / FIELD */}
        {/* ======================================================== */}
        {step === 2 && (
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              Study Domain
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Select your preferred field of study
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">This helps narrow down specific course databases and professional work rules.</p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                { key: "STEM", label: "STEM & Technology", desc: "Software, Data Science, AI, Engineering", icon: "💻" },
                { key: "Business", label: "Business & Finance", desc: "MBA, Finance, Supply Chain, Analytics", icon: "📈" },
                { key: "Healthcare", label: "Medical & Healthcare", desc: "MBBS, Nursing BSN, AI Healthcare", icon: "🩺" },
                { key: "Law", label: "Law & Legal Studies", desc: "LLB, LLM, LPC professional legal practice", icon: "⚖️" },
              ].map((domain) => (
                <button
                  key={domain.key}
                  type="button"
                  className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 ${
                    field === domain.key 
                      ? "border-gold bg-gold/5 shadow-soft" 
                      : "border-navy/[0.06] bg-card hover:border-navy/[0.12] hover:bg-muted/30"
                  }`}
                  onClick={() => setField(domain.key as "STEM" | "Business" | "Healthcare" | "Law" | "Arts")}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted group-hover:bg-card text-lg">{domain.icon}</span>
                    <div>
                      <h3 className="font-display font-semibold text-navy text-sm">{domain.label}</h3>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{domain.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-navy hover:bg-muted/50"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-navy/90 hover:scale-103 transition-transform"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* QUESTION 3: BUDGET CEILING */}
        {/* ======================================================== */}
        {step === 3 && (
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              Tuition Budget
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              What is your yearly tuition fee ceiling?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Select the maximum amount you&apos;d like to pay for university tuition per year.</p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                { value: 8000, label: "Under $8,000 / Year", desc: "Low-cost/highly accredited regional European hubs like Georgia/CKU." },
                { value: 22000, label: "Under $22,000 / Year", desc: "Affordable UK/Canada, German block account, regional Australia." },
                { value: 35000, label: "Under $35,000 / Year", desc: "Mid-tier US State universities, standard UK Russell Group, major Australian Go8." },
                { value: 999999, label: "No Tuition Ceiling", desc: "Highest ranked global private institutions and premium Ivy League pathways." },
              ].map((b) => (
                <button
                  key={b.value}
                  type="button"
                  className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 ${
                    budgetCeiling === b.value 
                      ? "border-gold bg-gold/5 shadow-soft" 
                      : "border-navy/[0.06] bg-card hover:border-navy/[0.12] hover:bg-muted/30"
                  }`}
                  onClick={() => setBudgetCeiling(b.value)}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted group-hover:bg-card text-lg">💰</span>
                    <div>
                      <h3 className="font-display font-semibold text-navy text-sm">{b.label}</h3>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-navy hover:bg-muted/50"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-navy/90 hover:scale-103 transition-transform"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* QUESTION 4: CAREER GOAL */}
        {/* ======================================================== */}
        {step === 4 && (
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              Career Goal
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              What is your primary post-graduation goal?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Different countries offer drastically different legal visa and settlement timelines.</p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                { key: "pr", label: "Structured Migration (PR)", desc: "Clear points-based immigration (e.g. Australia GSM, Canada Express Entry)", icon: "🎯" },
                { key: "salary", label: "High Starting Salary", desc: "Top tech hubs, large multinational corporations (e.g. US Silicon Valley)", icon: "🚀" },
                { key: "research", label: "Research & PhD Pathways", desc: "Leading laboratory infrastructure, academic credentials (e.g. US/UK Go8)", icon: "🧪" },
                { key: "roi", label: "High ROI / Lowest Tuition", desc: "Zero tuition public hubs or highly affordable medical routes (e.g. Germany/Georgia)", icon: "📈" },
              ].map((goal) => (
                <button
                  key={goal.key}
                  type="button"
                  className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 ${
                    careerGoal === goal.key 
                      ? "border-gold bg-gold/5 shadow-soft" 
                      : "border-navy/[0.06] bg-card hover:border-navy/[0.12] hover:bg-muted/30"
                  }`}
                  onClick={() => setCareerGoal(goal.key)}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted group-hover:bg-card text-lg">{goal.icon}</span>
                    <div>
                      <h3 className="font-display font-semibold text-navy text-sm">{goal.label}</h3>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{goal.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-navy hover:bg-muted/50"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(5)}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-navy/90 hover:scale-103 transition-transform"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* QUESTION 5: TESTING */}
        {/* ======================================================== */}
        {step === 5 && (
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              Testing Stream
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              What standard tests are you planning to take?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Helps determine if we require English proof or specific medical PCB scores.</p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { key: "ielts", label: "IELTS / PTE / TOEFL", desc: "English language proficiency", icon: "🇬🇧" },
                { key: "neet", label: "NEET Qualified (PCB)", desc: "Mandatory for Indian medical practice", icon: "🩺" },
                { key: "none", label: "None / MOI Accepted", desc: "No IELTS (Medium of Instruction)", icon: "📄" },
              ].map((test) => (
                <button
                  key={test.key}
                  type="button"
                  className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 ${
                    testStream === test.key 
                      ? "border-gold bg-gold/5 shadow-soft" 
                      : "border-navy/[0.06] bg-card hover:border-navy/[0.12] hover:bg-muted/30"
                  }`}
                  onClick={() => setTestStream(test.key)}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted group-hover:bg-card text-xl">{test.icon}</span>
                    <div>
                      <h3 className="font-display font-semibold text-navy text-xs">{test.label}</h3>
                      <p className="text-[10px] text-muted-foreground mt-1 leading-normal">{test.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(4)}
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-navy hover:bg-muted/50"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(6)}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-navy/90 hover:scale-103 transition-transform animate-pulse"
              >
                Generate Shortlist ✨
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* FINDER RESULTS DASHBOARD */}
        {/* ======================================================== */}
        {step === 6 && (
          <div className="space-y-10 animate-in fade-in duration-500">
            {/* Header / Summary Card */}
            <Card className="max-w-4xl mx-auto border border-gold/15 bg-gradient-to-b from-gold/5 via-card to-card p-8 rounded-3xl shadow-soft text-center">
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse shrink-0" />
                Your Recommended Shortlist
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Personalized Study Matches
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-xs sm:text-sm text-muted-foreground">
                Based on your preferences: <strong className="text-navy">{level}</strong> level · <strong className="text-navy">{field}</strong> field · Budget under <strong className="text-navy">${budgetCeiling.toLocaleString()}</strong> · Career: <strong className="text-navy">{careerGoal.toUpperCase()}</strong>.
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="rounded-full border border-navy/15 px-5 py-2 text-xs font-semibold text-navy hover:bg-muted/65 transition-colors"
                >
                  🔄 Restart Finder
                </button>
                <ButtonLink
                  href={getWhatsAppLink(`Hi Yolotripz, I generated a recommended study shortlist for a ${level} program in ${field} with budget under $${budgetCeiling.toLocaleString()} on your course finder. I would like to review detailed syllabus options.`)}
                  variant="primary"
                  className="text-xs font-semibold text-center"
                >
                  Book Free Syllabus Advisory Call
                </ButtonLink>
              </div>
            </Card>

            {/* Recommendations Grid */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start max-w-6xl mx-auto">
              
              {/* Left Side: Matching Courses & Universities */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Standard Results found */}
                {results.courses.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="font-display text-lg font-bold text-navy uppercase tracking-wider flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                      Matching Degree Programs ({results.courses.length})
                    </h3>
                    
                    {results.courses.map((course) => {
                      const univ = universitiesDb.find(u => u.slug === course.universitySlug)!;
                      return (
                        <Card key={course.slug} className="group relative overflow-hidden border border-navy/[0.06] bg-card p-6 shadow-soft transition-all duration-300 hover:border-gold/30 hover:shadow-soft-hover">
                          <div className="absolute left-0 top-0 h-full w-[4px] bg-primary" aria-hidden />
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-gold">{univ.name} · QS #{univ.rank}</span>
                              <h4 className="font-display font-semibold text-navy text-base mt-1 group-hover:text-primary transition-colors">{course.title}</h4>
                              
                              <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                                <div>
                                  <span className="block text-[9px] uppercase font-bold tracking-wide">Duration</span>
                                  <span className="font-medium text-navy block mt-0.5">{course.duration}</span>
                                </div>
                                <div>
                                  <span className="block text-[9px] uppercase font-bold tracking-wide">Exact Tuition</span>
                                  <span className="font-semibold text-primary block mt-0.5">${course.tuitionExact.toLocaleString()} / Yr</span>
                                </div>
                                <div>
                                  <span className="block text-[9px] uppercase font-bold tracking-wide">Intakes</span>
                                  <span className="font-medium text-navy block mt-0.5">{course.intakes.join(", ")}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-5 border-t border-navy/[0.04] pt-4">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-navy block">Eligibility Detail</span>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{course.eligibilityDetail}</p>
                          </div>

                          <div className="mt-4 bg-muted/30 rounded-xl p-3 border border-navy/[0.04] flex gap-2.5 items-start">
                            <Briefcase className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[9px] font-bold uppercase tracking-wider text-navy block">Career Prospects</span>
                              <span className="text-xs text-muted-foreground mt-0.5 block leading-normal">{course.careerProspects}</span>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                )}

                {/* NO RESULTS FOUND (Adaptive Low-cost fallback recommendation) */}
                {results.courses.length === 0 && (
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6 text-gold flex gap-3.5 items-start shadow-soft">
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-gold" />
                      <div>
                        <h4 className="text-sm font-bold">No exact match within budget</h4>
                        <p className="text-xs leading-relaxed mt-1 opacity-90">Your preferred programs typically exceed the selected budget threshold. To ensure your study abroad goals are completely viable, we highly recommend evaluating these **highly accredited, low-cost global pathways** that fit your criteria perfectly!</p>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-navy uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-gold shrink-0" />
                      Highly Recommended Low-Cost Alternatives
                    </h3>

                    {fallbacks.courses.map((course) => {
                      const univ = universitiesDb.find(u => u.slug === course.universitySlug)!;
                      return (
                        <Card key={course.slug} className="group relative overflow-hidden border border-navy/[0.06] bg-card p-6 shadow-soft transition-all duration-300 hover:border-gold/30 hover:shadow-soft-hover">
                          <div className="absolute left-0 top-0 h-full w-[4px] bg-accent" aria-hidden />
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-gold">{univ.name} · QS #{univ.rank}</span>
                              <h4 className="font-display font-semibold text-navy text-base mt-1 group-hover:text-accent transition-colors">{course.title}</h4>
                              
                              <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                                <div>
                                  <span className="block text-[9px] uppercase font-bold tracking-wide">Duration</span>
                                  <span className="font-medium text-navy block mt-0.5">{course.duration}</span>
                                </div>
                                <div>
                                  <span className="block text-[9px] uppercase font-bold tracking-wide">Exact Tuition</span>
                                  <span className="font-semibold text-accent block mt-0.5">${course.tuitionExact.toLocaleString()} / Yr</span>
                                </div>
                                <div>
                                  <span className="block text-[9px] uppercase font-bold tracking-wide">Intakes</span>
                                  <span className="font-medium text-navy block mt-0.5">{course.intakes.join(", ")}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 border-t border-navy/[0.04] pt-4">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-navy block">Eligibility Detail</span>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{course.eligibilityDetail}</p>
                          </div>

                          <div className="mt-4 bg-muted/30 rounded-xl p-3 border border-navy/[0.04] flex gap-2.5 items-start">
                            <Briefcase className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[9px] font-bold uppercase tracking-wider text-navy block">Career Prospects</span>
                              <span className="text-xs text-muted-foreground mt-0.5 block leading-normal">{course.careerProspects}</span>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Side: Scholarships & Advisories */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Scholarship spotlight */}
                {results.scholarships.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-xs font-bold text-navy uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="h-4.5 w-4.5 text-gold shrink-0" />
                      Eligible Scholarships
                    </h3>
                    
                    {results.scholarships.map((sch) => (
                      <Card key={sch.slug} className="border border-gold/15 bg-gradient-to-b from-gold/5 via-card to-card p-5 rounded-2xl shadow-soft">
                        <div className="inline-flex rounded-full bg-gold/10 border border-gold/20 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-gold">
                          {sch.type}
                        </div>
                        <h4 className="font-display font-semibold text-navy text-sm mt-2">{sch.name}</h4>
                        <p className="text-xs font-bold text-primary mt-1.5">{sch.value}</p>
                        <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">{sch.criteria}</p>
                        <div className="mt-3 border-t border-navy/[0.04] pt-3 flex justify-between text-[9px] text-muted-foreground font-medium">
                          <span>Deadline</span>
                          <span className="text-navy">{sch.deadline}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Local counseling widget */}
                <Card className="border border-navy/[0.06] bg-card p-6 rounded-2xl shadow-soft">
                  <h3 className="font-display text-sm font-bold text-navy uppercase tracking-wider mb-3">Advisory Checklist</h3>
                  <ul className="space-y-3">
                    {[
                      "Unbiased, commission-free counselling Desk",
                      "Exhaustive course syllabi comparisons available",
                      "Coordinated H-1B, OPT & Stamp 1G guidance",
                      "Moodbidri local desk appointments prioritised",
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex gap-2 text-[11px] leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-navy/[0.05] pt-4">
                    <ButtonLink
                      href={getWhatsAppLink(`Hi Yolotripz, I finished your Course Finder journey. Let's arrange a scheduled consultation.`)}
                      variant="primary"
                      className="w-full text-center text-xs font-semibold py-2.5"
                    >
                      Book scheduled Consultation
                    </ButtonLink>
                  </div>
                </Card>
              </div>

            </div>
          </div>
        )}

      </Container>
    </div>
  );
}
