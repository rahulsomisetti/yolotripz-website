"use client";

import { useState } from "react";
import { 
  Info, 
  BookOpen, 
  Award, 
  Scroll, 
  AlertCircle
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";

type LevelKey = "all" | "l56" | "l7" | "l8";

interface InstituteFee {
  name: string;
  sub: string;
  badgeColor: string;
  logoLetter: string;
  l56: string;
  l7: string;
  l8: string;
}

const institutes: InstituteFee[] = [
  { 
    name: "Unitec New Zealand", 
    sub: "Te Pūkenga · Auckland",
    badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    logoLetter: "U",
    l56: "NZD 26,000 - 27,000", 
    l7: "NZD 26,000 - 27,000", 
    l8: "NZD 30,000 - 31,000" 
  },
  { 
    name: "SIT New Zealand", 
    sub: "Southern Institute of Technology",
    badgeColor: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20",
    logoLetter: "S",
    l56: "NZD 19,000 - 24,000", 
    l7: "NZD 22,000 - 25,000", 
    l8: "NZD 24,000 - 26,000" 
  },
  { 
    name: "NMIT", 
    sub: "Nelson Marlborough Institute",
    badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20",
    logoLetter: "N",
    l56: "NZD 23,000 - 27,000", 
    l7: "NZD 24,000 - 27,000", 
    l8: "NZD 24,000 - 28,000" 
  },
  { 
    name: "Wintec", 
    sub: "Waikato Institute of Technology",
    badgeColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    logoLetter: "W",
    l56: "NZD 22,000 - 28,000", 
    l7: "NZD 24,000 - 29,000", 
    l8: "NZD 25,000 - 32,000" 
  },
  { 
    name: "WelTec", 
    sub: "Wellington Institute of Technology",
    badgeColor: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    logoLetter: "W",
    l56: "NZD 25,000 - 30,000", 
    l7: "NZD 24,000 - 28,000", 
    l8: "NZD 27,000 - 30,000" 
  },
  { 
    name: "Whitireia", 
    sub: "Whitireia New Zealand",
    badgeColor: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20",
    logoLetter: "W",
    l56: "NZD 25,000 - 30,000", 
    l7: "NZD 24,000 - 28,000", 
    l8: "NZD 27,000 - 30,000" 
  },
  { 
    name: "TOI-OHOMAI Institute", 
    sub: "Toi Ohomai Institute of Technology",
    badgeColor: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20",
    logoLetter: "T",
    l56: "NZD 25,000 - 28,000", 
    l7: "NA", 
    l8: "NZD 26,000 - 31,000" 
  },
  { 
    name: "NorthTec", 
    sub: "Northland Polytechnic",
    badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    logoLetter: "N",
    l56: "NZD 25,000 - 28,000", 
    l7: "NA", 
    l8: "NA" 
  }
];

export function NZDiplomaGuide() {
  const [activeLevel, setActiveLevel] = useState<LevelKey>("all");

  const handleLevelSelect = (level: LevelKey) => {
    if (activeLevel === level) {
      setActiveLevel("all"); // Toggle back to all if clicked again
    } else {
      setActiveLevel(level);
    }
  };

  return (
    <Section
      id="diploma-pathways"
      variant="default"
      edge
      eyebrow="Pathway Matrix"
      title="Diploma & PG Diploma Pathways"
      description="Explore entry requirements, academic levels, post-study work (PSW) visa rules, and annual tuition fee ranges across 8 premium New Zealand institutes."
    >
      {/* 1. ENTRY REQUIREMENTS & INTERACTIVE LEVEL SELECTOR */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            1. Select Academic Level to filter Tuition Fee columns
          </p>
          {activeLevel !== "all" && (
            <button
              onClick={() => setActiveLevel("all")}
              className="text-xs font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Reset Filter
            </button>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {/* Level 5/6 Card */}
          <Reveal delay={0.02}>
            <Card
              onClick={() => handleLevelSelect("l56")}
              className={`group relative h-full cursor-pointer overflow-hidden border p-7 transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 ${
                activeLevel === "l56"
                  ? "border-gold bg-gold/5 shadow-premium ring-2 ring-gold/30"
                  : activeLevel !== "all"
                  ? "border-navy/5 bg-card/60 opacity-60"
                  : "border-navy/[0.06] bg-card hover:border-gold/30"
              }`}
            >
              <div
                className={`absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b transition-colors duration-300 ${
                  activeLevel === "l56" ? "from-gold to-gold/75" : "from-navy/20 to-transparent group-hover:from-gold/50"
                }`}
                aria-hidden
              />
              <div className="pl-2">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-navy/5 p-2 text-navy dark:bg-white/5 dark:text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-navy/10 bg-muted px-2 py-0.5 text-[0.65rem] font-bold uppercase text-navy">
                    Level 5/6
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">Diploma</h3>
                
                <div className="mt-6 space-y-4 border-t border-navy/[0.05] pt-4 text-sm">
                  <div>
                    <span className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      Academic Target
                    </span>
                    <span className="font-semibold text-navy">60% & above in Grade 12th</span>
                  </div>
                  <div>
                    <span className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      IELTS Equivalent
                    </span>
                    <span className="font-semibold text-navy">IELTS 6.0 <span className="text-xs font-normal text-muted-foreground">(min 5.5)</span></span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Level 7 Card */}
          <Reveal delay={0.06}>
            <Card
              onClick={() => handleLevelSelect("l7")}
              className={`group relative h-full cursor-pointer overflow-hidden border p-7 transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 ${
                activeLevel === "l7"
                  ? "border-gold bg-gold/5 shadow-premium ring-2 ring-gold/30"
                  : activeLevel !== "all"
                  ? "border-navy/5 bg-card/60 opacity-60"
                  : "border-navy/[0.06] bg-card hover:border-gold/30"
              }`}
            >
              <div
                className={`absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b transition-colors duration-300 ${
                  activeLevel === "l7" ? "from-gold to-gold/75" : "from-navy/20 to-transparent group-hover:from-gold/50"
                }`}
                aria-hidden
              />
              <div className="pl-2">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-navy/5 p-2 text-navy dark:bg-white/5 dark:text-white">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-navy/10 bg-muted px-2 py-0.5 text-[0.65rem] font-bold uppercase text-navy">
                    Level 7
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">Graduate Diploma</h3>

                <div className="mt-6 space-y-4 border-t border-navy/[0.05] pt-4 text-sm">
                  <div>
                    <span className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      Academic Target
                    </span>
                    <span className="font-semibold text-navy">55% & above in Bachelor&apos;s</span>
                  </div>
                  <div>
                    <span className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      IELTS Equivalent
                    </span>
                    <span className="font-semibold text-navy">IELTS 6.0 <span className="text-xs font-normal text-muted-foreground">(min 5.5)</span></span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Level 8 Card */}
          <Reveal delay={0.1}>
            <Card
              onClick={() => handleLevelSelect("l8")}
              className={`group relative h-full cursor-pointer overflow-hidden border p-7 transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 ${
                activeLevel === "l8"
                  ? "border-gold bg-gold/5 shadow-premium ring-2 ring-gold/30"
                  : activeLevel !== "all"
                  ? "border-navy/5 bg-card/60 opacity-60"
                  : "border-navy/[0.06] bg-card hover:border-gold/30"
              }`}
            >
              <div
                className={`absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b transition-colors duration-300 ${
                  activeLevel === "l8" ? "from-gold to-gold/75" : "from-navy/20 to-transparent group-hover:from-gold/50"
                }`}
                aria-hidden
              />
              <div className="pl-2">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-navy/5 p-2 text-navy dark:bg-white/5 dark:text-white">
                    <Scroll className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-navy/10 bg-muted px-2 py-0.5 text-[0.65rem] font-bold uppercase text-navy">
                    Level 8
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">PG Diploma</h3>

                <div className="mt-6 space-y-4 border-t border-navy/[0.05] pt-4 text-sm">
                  <div>
                    <span className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      Academic Target
                    </span>
                    <span className="font-semibold text-navy">60% & above in Bachelor&apos;s</span>
                  </div>
                  <div>
                    <span className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      IELTS Equivalent
                    </span>
                    <span className="font-semibold text-navy">IELTS 6.5 <span className="text-xs font-normal text-muted-foreground">(min 6.0)</span></span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-gold/15 bg-gold/5 px-4 py-3 text-xs text-muted-foreground md:max-w-2xl">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <p className="leading-[1.5]">
              <strong>Important Requirement Exception:</strong> Prerequisites and entry cut-offs will sit significantly higher for highly regulated professions, including <strong>Nursing, Allied Health, and Teaching courses</strong>. Always cross-reference with active institutional standards.
            </p>
          </div>
        </Reveal>
      </div>

      {/* 2. TUITION FEE RANGE COMPARISON MATRIX */}
      <div className="mt-16 md:mt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          2. Tuition Fee comparison matrix (NZD per Annum)
        </p>

        <Reveal>
          {/* Desktop Table View */}
          <div className="hidden overflow-hidden rounded-2xl border border-navy/[0.08] bg-card shadow-premium lg:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-navy/[0.08] bg-navy/5">
                  <th className="px-6 py-5 text-sm font-semibold text-navy">Institute</th>
                  <th 
                    onClick={() => handleLevelSelect("l56")}
                    className={`cursor-pointer px-6 py-5 text-sm font-semibold text-center transition-all duration-300 ${
                      activeLevel === "l56" ? "bg-gold/10 text-navy font-bold border-x border-gold/20" : "text-navy/70 hover:text-navy"
                    }`}
                  >
                    Diploma (Level 5/6)
                  </th>
                  <th 
                    onClick={() => handleLevelSelect("l7")}
                    className={`cursor-pointer px-6 py-5 text-sm font-semibold text-center transition-all duration-300 ${
                      activeLevel === "l7" ? "bg-gold/10 text-navy font-bold border-x border-gold/20" : "text-navy/70 hover:text-navy"
                    }`}
                  >
                    Graduate Diploma (Level 7)
                  </th>
                  <th 
                    onClick={() => handleLevelSelect("l8")}
                    className={`cursor-pointer px-6 py-5 text-sm font-semibold text-center transition-all duration-300 ${
                      activeLevel === "l8" ? "bg-gold/10 text-navy font-bold border-x border-gold/20" : "text-navy/70 hover:text-navy"
                    }`}
                  >
                    PG Diploma (Level 8)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/[0.04]">
                {institutes.map((inst) => (
                  <tr 
                    key={inst.name} 
                    className="transition-colors hover:bg-navy/[0.01]"
                  >
                    {/* Institute Title Column */}
                    <td className="px-6 py-4.5 max-w-sm">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border font-display text-sm font-bold ${inst.badgeColor}`}>
                          {inst.logoLetter}
                        </div>
                        <div>
                          <p className="font-display font-semibold text-navy leading-none">{inst.name}</p>
                          <p className="mt-1 text-xs text-muted-foreground leading-none">{inst.sub}</p>
                        </div>
                      </div>
                    </td>

                    {/* Level 5/6 Fee */}
                    <td 
                      className={`px-6 py-4.5 text-center text-sm font-medium transition-all duration-300 ${
                        activeLevel === "l56" 
                          ? "bg-gold/[0.04] text-navy font-semibold border-x border-gold/15" 
                          : activeLevel !== "all" 
                          ? "text-muted-foreground/45" 
                          : "text-navy"
                      }`}
                    >
                      {inst.l56}
                    </td>

                    {/* Level 7 Fee */}
                    <td 
                      className={`px-6 py-4.5 text-center text-sm font-medium transition-all duration-300 ${
                        activeLevel === "l7" 
                          ? "bg-gold/[0.04] text-navy font-semibold border-x border-gold/15" 
                          : activeLevel !== "all" 
                          ? "text-muted-foreground/45" 
                          : "text-navy"
                      }`}
                    >
                      {inst.l7 === "NA" ? (
                        <span className="rounded bg-muted px-2 py-0.5 text-[0.6875rem] font-medium text-muted-foreground">NA</span>
                      ) : (
                        inst.l7
                      )}
                    </td>

                    {/* Level 8 Fee */}
                    <td 
                      className={`px-6 py-4.5 text-center text-sm font-medium transition-all duration-300 ${
                        activeLevel === "l8" 
                          ? "bg-gold/[0.04] text-navy font-semibold border-x border-gold/15" 
                          : activeLevel !== "all" 
                          ? "text-muted-foreground/45" 
                          : "text-navy"
                      }`}
                    >
                      {inst.l8 === "NA" ? (
                        <span className="rounded bg-muted px-2 py-0.5 text-[0.6875rem] font-medium text-muted-foreground">NA</span>
                      ) : (
                        inst.l8
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion/Card View */}
          <div className="space-y-4 lg:hidden">
            {institutes.map((inst) => (
              <Card key={inst.name} className="border border-navy/[0.06] bg-card p-5 shadow-ring">
                <div className="flex items-center gap-3 border-b border-navy/[0.05] pb-4">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border font-display text-sm font-bold ${inst.badgeColor}`}>
                    {inst.logoLetter}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy leading-none">{inst.name}</h4>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-none">{inst.sub}</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2.5 text-center">
                  {/* L5/6 Box */}
                  <div 
                    className={`rounded-xl border p-2 transition-all duration-200 ${
                      activeLevel === "l56" 
                        ? "border-gold bg-gold/5 shadow-soft" 
                        : "border-navy/[0.04] bg-muted/20"
                    }`}
                  >
                    <span className="block text-[0.55rem] font-bold uppercase tracking-wider text-muted-foreground">L5/6 Dip</span>
                    <span className="mt-1 block text-xs font-semibold text-navy leading-tight">{inst.l56}</span>
                  </div>

                  {/* L7 Box */}
                  <div 
                    className={`rounded-xl border p-2 transition-all duration-200 ${
                      activeLevel === "l7" 
                        ? "border-gold bg-gold/5 shadow-soft" 
                        : "border-navy/[0.04] bg-muted/20"
                    }`}
                  >
                    <span className="block text-[0.55rem] font-bold uppercase tracking-wider text-muted-foreground">L7 Grad Dip</span>
                    <span className="mt-1 block text-xs font-semibold text-navy leading-tight">
                      {inst.l7 === "NA" ? (
                        <span className="text-[0.65rem] font-medium text-muted-foreground/60">NA</span>
                      ) : (
                        inst.l7
                      )}
                    </span>
                  </div>

                  {/* L8 Box */}
                  <div 
                    className={`rounded-xl border p-2 transition-all duration-200 ${
                      activeLevel === "l8" 
                        ? "border-gold bg-gold/5 shadow-soft" 
                        : "border-navy/[0.04] bg-muted/20"
                    }`}
                  >
                    <span className="block text-[0.55rem] font-bold uppercase tracking-wider text-muted-foreground">L8 PG Dip</span>
                    <span className="mt-1 block text-xs font-semibold text-navy leading-tight">
                      {inst.l8 === "NA" ? (
                        <span className="text-[0.65rem] font-medium text-muted-foreground/60">NA</span>
                      ) : (
                        inst.l8
                      )}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>

      {/* 3. PSW VISA DURATION COMPARISON */}
      <div className="mt-16 md:mt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          3. Post-Study Work (PSW) Visa Duration Policy Matrix
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Level 5/6 PSW details */}
          <Reveal delay={0.02}>
            <Card className="border border-navy/[0.06] bg-card p-6 shadow-ring h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-navy/[0.05] pb-4">
                  <span className="font-display font-bold text-navy">Level 5/6 Diploma</span>
                  <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[0.65rem] font-bold text-navy">L5 & L6</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.6875rem] font-semibold text-emerald-700 dark:text-emerald-400">
                      Current PSW Policy
                    </span>
                    <p className="mt-2 text-sm leading-relaxed font-semibold text-navy">
                      Same as the duration of the program.
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal">
                      Only applicable if your specific course/qualification links directly to a recognized occupation in the NZ Green List.
                    </p>
                  </div>

                  <div className="border-t border-navy/[0.04] pt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6875rem] font-semibold text-amber-700 dark:text-amber-400">
                      New Policy (Late 2026+)
                    </span>
                    <p className="mt-2 text-sm leading-relaxed font-semibold text-navy">
                      Up to 6 months short-term visa.
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal">
                      Policy evolution introduces shorter visa duration for non-degree paths, designed to streamline general temporary migration.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Level 7 PSW details */}
          <Reveal delay={0.06}>
            <Card className="border border-navy/[0.06] bg-card p-6 shadow-ring h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-navy/[0.05] pb-4">
                  <span className="font-display font-bold text-navy">Level 7 Grad Diploma</span>
                  <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[0.65rem] font-bold text-navy">L7 GD</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.6875rem] font-semibold text-emerald-700 dark:text-emerald-400">
                      Current PSW Policy
                    </span>
                    <p className="mt-2 text-sm leading-relaxed font-semibold text-navy">
                      Same as the duration of the program.
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal">
                      Strictly tied to qualifying courses mapping explicitly to designated high-demand Green List skills.
                    </p>
                  </div>

                  <div className="border-t border-navy/[0.04] pt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6875rem] font-semibold text-amber-700 dark:text-amber-400">
                      New Policy (Late 2026+)
                    </span>
                    <p className="mt-2 text-sm leading-relaxed font-semibold text-navy">
                      1 Year post-study work visa.
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal">
                      A structured work right window to transition graduates into critical industries with clear employment pathways.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Level 8 PSW details */}
          <Reveal delay={0.1}>
            <Card className="border border-navy/[0.06] bg-card p-6 shadow-ring h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-navy/[0.05] pb-4">
                  <span className="font-display font-bold text-navy">Level 8 PG Diploma</span>
                  <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[0.65rem] font-bold text-navy">L8 PGDip</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.6875rem] font-semibold text-emerald-700 dark:text-emerald-400">
                      Current PSW Policy
                    </span>
                    <p className="mt-2 text-sm leading-relaxed font-semibold text-navy">
                      1 Full Year of Work Rights.
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal">
                      Independent of course list bindings. Higher academic value secures standardized work options.
                    </p>
                  </div>

                  <div className="border-t border-navy/[0.04] pt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-500/10 px-2 py-0.5 text-[0.6875rem] font-semibold text-slate-700 dark:text-slate-400">
                      New Policy (Late 2026+)
                    </span>
                    <p className="mt-2 text-sm leading-relaxed font-semibold text-navy">
                      Unchanged / Stable.
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal">
                      No reductions have been introduced for Level 8 Postgraduate Diploma routes, maintaining standard duration integrity.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-navy/10 bg-muted/40 p-5 text-xs text-muted-foreground lg:max-w-3xl">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-navy/40" />
            <div>
              <p className="font-semibold text-navy">Disclaimer on Immigration Settings</p>
              <p className="mt-1 leading-[1.6]">
                *Post-Study Work visa duration is subject to current and changing Immigration New Zealand policies and qualification rules. All orientations provided above represent policy drafts scheduled for late 2026 implementation. These updates do not constitute formal legal immigration consulting advice.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
