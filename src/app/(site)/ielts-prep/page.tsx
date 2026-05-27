"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  BookOpen,
  Award,
  CheckCircle2,
  HelpCircle,
  Globe,
  Star
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function IeltsPrepPage() {
  const [ieltsBand, setIeltsBand] = useState<number>(6.5);

  // Score equivalence converter calculations
  const pteScore = useMemo(() => {
    if (ieltsBand === 5.0) return "36 - 42";
    if (ieltsBand === 5.5) return "43 - 50";
    if (ieltsBand === 6.0) return "51 - 58";
    if (ieltsBand === 6.5) return "59 - 64";
    if (ieltsBand === 7.0) return "65 - 72";
    if (ieltsBand === 7.5) return "73 - 78";
    if (ieltsBand === 8.0) return "79 - 85";
    if (ieltsBand === 8.5) return "86 - 88";
    return "89 - 90";
  }, [ieltsBand]);

  const toeflScore = useMemo(() => {
    if (ieltsBand === 5.0) return "35 - 45";
    if (ieltsBand === 5.5) return "46 - 59";
    if (ieltsBand === 6.0) return "60 - 78";
    if (ieltsBand === 6.5) return "79 - 93";
    if (ieltsBand === 7.0) return "94 - 101";
    if (ieltsBand === 7.5) return "102 - 109";
    if (ieltsBand === 8.0) return "110 - 114";
    if (ieltsBand === 8.5) return "115 - 117";
    return "118 - 120";
  }, [ieltsBand]);

  return (
    <div className="min-h-screen bg-mesh-gradient bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.02),transparent_45%)] bg-background pb-24 pt-16 sm:pb-32 sm:pt-20">
      <Container>
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <BookOpen className="h-3.5 w-3.5 text-gold shrink-0 animate-spin-slow" />
            Language Preparation Hub
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            IELTS, PTE & TOEFL Orientation
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Master the gates of international admissions. Compare popular English proficiency tests, evaluate score equivalency, and find out if you qualify for Medium of Instruction (MOI) waivers.
          </p>
        </div>

        {/* ======================================================== */}
        {/* SECTION 1: INTERACTIVE EQUIVALENCE CONVERTER */}
        {/* ======================================================== */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border border-navy/[0.06] bg-card p-6 md:p-8 shadow-soft rounded-3xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[9px] font-bold uppercase text-primary">
                Equivalency tool
              </span>
              <h2 className="font-display font-semibold text-navy text-xl mt-2">Dynamic Score Equivalence</h2>
              <p className="text-xs text-muted-foreground mt-1">Slide your target IELTS Band to instantly view the equivalent scores for PTE and TOEFL iBT exams.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              
              {/* Sliders Area (8 cols) */}
              <div className="md:col-span-8 space-y-6 bg-muted/20 border border-navy/[0.04] p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1">
                    <Award className="h-4.5 w-4.5 text-primary shrink-0" />
                    Target IELTS Band
                  </span>
                  <span className="font-display font-bold text-primary text-2xl">{ieltsBand.toFixed(1)}</span>
                </div>
                
                <input
                  type="range"
                  min="5.0"
                  max="9.0"
                  step="0.5"
                  value={ieltsBand}
                  onChange={(e) => setIeltsBand(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-semibold">
                  <span>5.0 (Moderate)</span>
                  <span>6.5 (Standard Min)</span>
                  <span>7.5+ (High Rank average)</span>
                  <span>9.0 (Expert)</span>
                </div>
              </div>

              {/* Equivalence Output (4 cols) */}
              <div className="md:col-span-4 grid gap-4 grid-cols-2 md:grid-cols-1">
                <div className="bg-navy p-4 rounded-2xl text-center text-white relative overflow-hidden shadow-soft">
                  <div className="absolute right-0 top-0 h-10 w-10 translate-x-2 -translate-y-2 rounded-full bg-white/[0.03] blur-lg" />
                  <span className="text-[9px] text-white/60 font-bold uppercase block tracking-wider">Equivalent PTE</span>
                  <span className="font-display font-bold text-gold text-2xl mt-1 block">{pteScore}</span>
                  <span className="text-[8px] text-white/50 block mt-0.5">Pearson Test Score</span>
                </div>
                <div className="bg-navy p-4 rounded-2xl text-center text-white relative overflow-hidden shadow-soft">
                  <div className="absolute right-0 top-0 h-10 w-10 translate-x-2 -translate-y-2 rounded-full bg-white/[0.03] blur-lg" />
                  <span className="text-[9px] text-white/60 font-bold uppercase block tracking-wider">Equivalent TOEFL</span>
                  <span className="font-display font-bold text-gold text-2xl mt-1 block">{toeflScore}</span>
                  <span className="text-[8px] text-white/50 block mt-0.5">Internet-Based iBT</span>
                </div>
              </div>

            </div>
          </Card>
        </div>

        {/* ======================================================== */}
        {/* SECTION 2: TEST COMPARISON MATRIX */}
        {/* ======================================================== */}
        <div className="mt-20 space-y-6 max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy uppercase tracking-wider text-center">Exam Comparison Matrix</h2>
          
          <div className="overflow-x-auto rounded-2xl border border-navy/[0.06] bg-card shadow-soft">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy text-white text-[10px] font-bold uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5">IELTS Academic</th>
                  <th className="p-4 sm:p-5">PTE Academic</th>
                  <th className="p-4 sm:p-5">TOEFL iBT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/[0.05] text-muted-foreground font-medium">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy bg-muted/10">Exam Format</td>
                  <td className="p-4 sm:p-5">Paper or Computer-delivered</td>
                  <td className="p-4 sm:p-5">100% Computer-delivered</td>
                  <td className="p-4 sm:p-5">Computer-delivered</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy bg-muted/10">Total Duration</td>
                  <td className="p-4 sm:p-5">2 Hours 45 Minutes</td>
                  <td className="p-4 sm:p-5">2 Hours</td>
                  <td className="p-4 sm:p-5">2 Hours</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy bg-muted/10">Score Range</td>
                  <td className="p-4 sm:p-5 text-primary font-bold">Band 0 - 9.0</td>
                  <td className="p-4 sm:p-5 text-primary font-bold">10 - 90 Points</td>
                  <td className="p-4 sm:p-5 text-primary font-bold">0 - 120 Points</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy bg-muted/10">Result Turnaround</td>
                  <td className="p-4 sm:p-5">3 - 5 days (Computer) / 13 days (Paper)</td>
                  <td className="p-4 sm:p-5 font-semibold text-navy">24 - 48 Hours (Fastest)</td>
                  <td className="p-4 sm:p-5">4 - 8 Days</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy bg-muted/10">Acceptances</td>
                  <td className="p-4 sm:p-5">100% in UK, Australia, Ireland, Canada & USA</td>
                  <td className="p-4 sm:p-5">Widely accepted (Preferred in Australia/NZ)</td>
                  <td className="p-4 sm:p-5">Widely accepted (Preferred in USA)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 3: WAIVER ADVISORY & FAQS */}
        {/* ======================================================== */}
        <div className="mt-24 grid gap-10 lg:grid-cols-12 lg:items-start max-w-5xl mx-auto">
          
          {/* MOI Waiver guidelines (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-lg font-bold text-navy uppercase tracking-wider flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary shrink-0" />
              Medium of Instruction (MOI) Waiver
            </h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              Did you know that many universities globally do not require IELTS or PTE if your high school or college studies were conducted entirely in English? This is known as a **Medium of Instruction (MOI)** waiver.
            </p>

            <div className="space-y-4">
              {[
                { title: "Georgia MBBS & Nursing (100% Waiver)", desc: "All programs at SEU Georgia accept a certified English MOI letter from your school, completely bypassing IELTS/PTE testing." },
                { title: "UK Universities (Select Waiver)", desc: "Select UK universities accept 70%+ in CBSE/ICSE High School English or an MOI letter from certified Karnataka colleges." },
                { title: "Germany Public Hubs (Course specific)", desc: "Many English-taught STEM postgraduate degrees accept proof of English MOI from prior Bachelors, requiring zero language tests." },
              ].map((w, idx) => (
                <div key={idx} className="flex gap-3.5 items-start p-4 rounded-xl border border-navy/[0.05] bg-card shadow-soft">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider">{w.title}</h4>
                    <p className="text-[11px] leading-relaxed text-muted-foreground mt-1">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <h3 className="font-display text-lg font-bold text-navy uppercase tracking-wider flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-gold shrink-0" />
              Common Orientation FAQs
            </h3>

            <Accordion type="single" collapsible className="w-full bg-card border border-navy/[0.06] rounded-2xl p-4 shadow-soft">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-xs text-left text-navy font-semibold">How long are scores valid?</AccordionTrigger>
                <AccordionContent className="text-[11px] leading-relaxed text-muted-foreground">
                  IELTS, PTE, and TOEFL scores are legally valid for **2 years** from the date of the exam, and must be valid at the time of visa application.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-xs text-left text-navy font-semibold">Is PTE easier than IELTS?</AccordionTrigger>
                <AccordionContent className="text-[11px] leading-relaxed text-muted-foreground">
                  Many students find PTE easier because it is graded 100% by algorithms (computer based) which are more predictable, whereas IELTS speaking and writing are evaluated by human examiners.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-xs text-left text-navy font-semibold">Can I apply with pending scores?</AccordionTrigger>
                <AccordionContent className="text-[11px] leading-relaxed text-muted-foreground">
                  Yes. Many universities in the UK, Australia, and Canada permit you to submit applications and issue a **Conditional Offer**. You can submit your IELTS scores later to clear conditions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>

        {/* Local coaching callback trigger */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto border border-gold/15 bg-gradient-to-r from-gold/5 via-gold/10 to-transparent p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left shadow-soft">
            <div className="flex gap-3 items-start">
              <Star className="h-5 w-5 text-gold shrink-0 mt-0.5 animate-pulse" />
              <div>
                <p className="text-sm font-semibold text-navy">Join Our IELTS & Language Prep Coaching</p>
                <p className="text-xs text-muted-foreground mt-0.5">Need coaching or test registration assistance? Speak to our local Moodbidri desk team for structured mock materials.</p>
              </div>
            </div>
            <ButtonLink
              href={getWhatsAppLink(`Hi Yolotripz, I'm interested in language test prep support (IELTS/PTE). I would like to check coaching slots and materials.`)}
              variant="primary"
              className="text-xs font-semibold shrink-0 text-center"
            >
              Consult Coaching Desk
            </ButtonLink>
          </Card>
        </div>

      </Container>
    </div>
  );
}
