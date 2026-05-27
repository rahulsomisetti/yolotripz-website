"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { 
  countriesDb, 
  universitiesDb
} from "@/content/database/studyData";
import { 
  RefreshCw, 
  DollarSign, 
  Clock, 
  Compass, 
  Award, 
  Download, 
  MapPin, 
  Sparkles,
  AlertCircle
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function ComparePage() {
  const [activeTab, setActiveTab] = useState<"countries" | "universities">("countries");
  
  // Country comparison states (Default: USA vs UK)
  const [countryASlug, setCountryASlug] = useState<string>("usa");
  const [countryBSlug, setCountryBSlug] = useState<string>("uk");

  // University comparison states (Default: UQ vs Coventry)
  const [univASlug, setUnivASlug] = useState<string>("uq");
  const [univBSlug, setUnivBSlug] = useState<string>("coventry");

  // Find active items
  const countryA = useMemo(() => countriesDb.find(c => c.slug === countryASlug)!, [countryASlug]);
  const countryB = useMemo(() => countriesDb.find(c => c.slug === countryBSlug)!, [countryBSlug]);

  const univA = useMemo(() => universitiesDb.find(u => u.slug === univASlug)!, [univASlug]);
  const univB = useMemo(() => universitiesDb.find(u => u.slug === univBSlug)!, [univBSlug]);

  // Swap handler
  const handleSwapCountries = () => {
    setCountryASlug(countryBSlug);
    setCountryBSlug(countryASlug);
  };

  const handleSwapUnivs = () => {
    setUnivASlug(univBSlug);
    setUnivBSlug(univASlug);
  };

  return (
    <div className="min-h-screen bg-mesh-gradient bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.02),transparent_45%)] bg-background pb-24 pt-16 sm:pb-32 sm:pt-20">
      <Container>
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <RefreshCw className="h-3 w-3 animate-spin-slow text-gold" />
            Interactive Comparison Hub
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Compare Destinations & Universities
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Make fully informed, budget-conscious decisions. Choose any two global destinations or top universities side-by-side to review exact tuition ranges, PR realities, and post-study opportunities.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full bg-muted/70 p-1 border border-navy/[0.04] backdrop-blur-md">
            <button
              type="button"
              className={`rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "countries"
                  ? "bg-card text-navy shadow-sm border border-navy/[0.04]"
                  : "text-muted-foreground hover:text-navy"
              }`}
              onClick={() => setActiveTab("countries")}
            >
              🔄 Compare Countries
            </button>
            <button
              type="button"
              className={`rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "universities"
                  ? "bg-card text-navy shadow-sm border border-navy/[0.04]"
                  : "text-muted-foreground hover:text-navy"
              }`}
              onClick={() => setActiveTab("universities")}
            >
              🎓 Compare Universities
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: COMPARE COUNTRIES */}
        {/* ======================================================== */}
        {activeTab === "countries" && (
          <div className="mt-12 space-y-8">
            {/* Selectors and Swap Banner */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-navy/[0.06] bg-card p-6 shadow-soft sm:flex-row md:p-8">
              {/* Country A Select */}
              <div className="w-full sm:w-[42%]">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">First Destination</label>
                <select
                  value={countryASlug}
                  onChange={(e) => setCountryASlug(e.target.value)}
                  className="w-full rounded-xl border border-navy/[0.08] bg-background px-4 py-3 text-sm font-semibold text-navy focus:border-gold focus:outline-none transition-all"
                >
                  {countriesDb.map(c => (
                    <option key={c.slug} value={c.slug}>{c.flag} {c.name}</option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <button
                type="button"
                onClick={handleSwapCountries}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/[0.08] bg-background hover:bg-muted/80 text-navy shadow-ring hover:scale-105 transition-all duration-300"
                title="Swap selections"
              >
                <RefreshCw className="h-4 w-4 text-gold" />
              </button>

              {/* Country B Select */}
              <div className="w-full sm:w-[42%]">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Second Destination</label>
                <select
                  value={countryBSlug}
                  onChange={(e) => setCountryBSlug(e.target.value)}
                  className="w-full rounded-xl border border-navy/[0.08] bg-background px-4 py-3 text-sm font-semibold text-navy focus:border-gold focus:outline-none transition-all"
                >
                  {countriesDb.map(c => (
                    <option key={c.slug} value={c.slug}>{c.flag} {c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Same Country Alert */}
            {countryASlug === countryBSlug && (
              <div className="flex items-center gap-3 rounded-xl bg-gold/10 border border-gold/20 p-4 text-gold">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <p className="text-xs font-semibold">Please select two different destinations to view an informative comparison comparison.</p>
              </div>
            )}

            {countryASlug !== countryBSlug && (
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Destination A Card */}
                <Card className="relative overflow-hidden border border-navy/[0.06] bg-card p-8 shadow-soft transition-all hover:border-gold/30 md:p-10">
                  <div className="absolute left-0 top-0 h-full w-[4px] bg-primary" aria-hidden />
                  <div className="flex items-center gap-3">
                    <span className="text-4xl select-none">{countryA.flag}</span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold">{countryA.region}</span>
                      <h2 className="font-display text-2xl font-semibold text-navy mt-0.5">{countryA.name}</h2>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-[1.6] text-muted-foreground italic border-l-2 border-navy/10 pl-3">
                    &ldquo;{countryA.whyStudyHere}&rdquo;
                  </p>

                  <div className="mt-8 space-y-6">
                    {/* Tuition & Costs */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                        <DollarSign className="h-4 w-4 text-primary" />
                        Cost Breakdown
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-4">
                        <div className="bg-muted/40 p-3.5 rounded-xl border border-navy/[0.04]">
                          <span className="text-[10px] text-muted-foreground block">Tuition Fees</span>
                          <span className="font-display font-semibold text-navy text-sm mt-1 block">{countryA.tuitionBand}</span>
                        </div>
                        <div className="bg-muted/40 p-3.5 rounded-xl border border-navy/[0.04]">
                          <span className="text-[10px] text-muted-foreground block">Living Expenses</span>
                          <span className="font-display font-semibold text-navy text-sm mt-1 block">{countryA.livingCosts}</span>
                        </div>
                      </div>
                    </div>

                    {/* Work Rights */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                        <Clock className="h-4 w-4 text-primary" />
                        Part-Time & Post-Study Work
                      </div>
                      <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                        {countryA.workRights}
                      </p>
                    </div>

                    {/* PR Pathway */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                        <Compass className="h-4 w-4 text-primary" />
                        PR & Settlement Outlook
                      </div>
                      <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed font-medium">
                        {countryA.prPathway}
                      </p>
                    </div>

                    {/* Statistics */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                        <Award className="h-4 w-4 text-primary" />
                        Visa & Entry Thresholds
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2.5 text-center">
                        <div className="bg-muted/30 p-2.5 rounded-lg border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">Success Rate</span>
                          <span className="font-display font-bold text-primary text-base mt-0.5 block">{countryA.visaSuccessRate}</span>
                        </div>
                        <div className="bg-muted/30 p-2.5 rounded-lg border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">IELTS Min</span>
                          <span className="font-display font-bold text-navy text-base mt-0.5 block">{countryA.ieltsRequirement.split(" ")[0]}</span>
                        </div>
                        <div className="bg-muted/30 p-2.5 rounded-lg border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">Deadlines</span>
                          <span className="font-display font-semibold text-gold text-[10px] mt-1.5 block leading-tight">{countryA.intakeDeadlines.split(" | ")[0]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Popular Domains */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-2.5">High Demand Fields</span>
                      <div className="flex flex-wrap gap-1.5">
                        {countryA.popularFields.map((f, i) => (
                          <span key={i} className="rounded-full bg-navy/[0.04] px-2.5 py-1 text-[10px] font-medium text-navy border border-navy/[0.04]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Geography & Lifestyle */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Climate & Vibe</span>
                          <span className="text-xs text-navy font-medium mt-1.5 block leading-relaxed">{countryA.climate}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Top Student Cities</span>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {countryA.topCities.map((city, idx) => (
                              <span key={idx} className="inline-flex items-center gap-0.5 rounded bg-muted/60 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground border border-navy/[0.04]">
                                <MapPin className="h-2 w-2 text-muted-foreground/75" />
                                {city}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </Card>

                {/* Destination B Card */}
                <Card className="relative overflow-hidden border border-navy/[0.06] bg-card p-8 shadow-soft transition-all hover:border-gold/30 md:p-10">
                  <div className="absolute left-0 top-0 h-full w-[4px] bg-accent" aria-hidden />
                  <div className="flex items-center gap-3">
                    <span className="text-4xl select-none">{countryB.flag}</span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold">{countryB.region}</span>
                      <h2 className="font-display text-2xl font-semibold text-navy mt-0.5">{countryB.name}</h2>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-[1.6] text-muted-foreground italic border-l-2 border-accent/20 pl-3">
                    &ldquo;{countryB.whyStudyHere}&rdquo;
                  </p>

                  <div className="mt-8 space-y-6">
                    {/* Tuition & Costs */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                        <DollarSign className="h-4 w-4 text-primary" />
                        Cost Breakdown
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-4">
                        <div className="bg-muted/40 p-3.5 rounded-xl border border-navy/[0.04]">
                          <span className="text-[10px] text-muted-foreground block">Tuition Fees</span>
                          <span className="font-display font-semibold text-navy text-sm mt-1 block">{countryB.tuitionBand}</span>
                        </div>
                        <div className="bg-muted/40 p-3.5 rounded-xl border border-navy/[0.04]">
                          <span className="text-[10px] text-muted-foreground block">Living Expenses</span>
                          <span className="font-display font-semibold text-navy text-sm mt-1 block">{countryB.livingCosts}</span>
                        </div>
                      </div>
                    </div>

                    {/* Work Rights */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                        <Clock className="h-4 w-4 text-primary" />
                        Part-Time & Post-Study Work
                      </div>
                      <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                        {countryB.workRights}
                      </p>
                    </div>

                    {/* PR Pathway */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                        <Compass className="h-4 w-4 text-primary" />
                        PR & Settlement Outlook
                      </div>
                      <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed font-medium">
                        {countryB.prPathway}
                      </p>
                    </div>

                    {/* Statistics */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                        <Award className="h-4 w-4 text-primary" />
                        Visa & Entry Thresholds
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2.5 text-center">
                        <div className="bg-muted/30 p-2.5 rounded-lg border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">Success Rate</span>
                          <span className="font-display font-bold text-accent text-base mt-0.5 block">{countryB.visaSuccessRate}</span>
                        </div>
                        <div className="bg-muted/30 p-2.5 rounded-lg border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">IELTS Min</span>
                          <span className="font-display font-bold text-navy text-base mt-0.5 block">{countryB.ieltsRequirement.split(" ")[0]}</span>
                        </div>
                        <div className="bg-muted/30 p-2.5 rounded-lg border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">Deadlines</span>
                          <span className="font-display font-semibold text-gold text-[10px] mt-1.5 block leading-tight">{countryB.intakeDeadlines.split(" | ")[0]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Popular Domains */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-2.5">High Demand Fields</span>
                      <div className="flex flex-wrap gap-1.5">
                        {countryB.popularFields.map((f, i) => (
                          <span key={i} className="rounded-full bg-navy/[0.04] px-2.5 py-1 text-[10px] font-medium text-navy border border-navy/[0.04]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Geography & Lifestyle */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Climate & Vibe</span>
                          <span className="text-xs text-navy font-medium mt-1.5 block leading-relaxed">{countryB.climate}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Top Student Cities</span>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {countryB.topCities.map((city, idx) => (
                              <span key={idx} className="inline-flex items-center gap-0.5 rounded bg-muted/60 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground border border-navy/[0.04]">
                                <MapPin className="h-2 w-2 text-muted-foreground/75" />
                                {city}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </Card>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: COMPARE UNIVERSITIES */}
        {/* ======================================================== */}
        {activeTab === "universities" && (
          <div className="mt-12 space-y-8">
            {/* Selectors and Swap Banner */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-navy/[0.06] bg-card p-6 shadow-soft sm:flex-row md:p-8">
              {/* Univ A Select */}
              <div className="w-full sm:w-[42%]">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">First University</label>
                <select
                  value={univASlug}
                  onChange={(e) => setUnivASlug(e.target.value)}
                  className="w-full rounded-xl border border-navy/[0.08] bg-background px-4 py-3 text-sm font-semibold text-navy focus:border-gold focus:outline-none transition-all"
                >
                  {universitiesDb.map(u => (
                    <option key={u.slug} value={u.slug}>{u.name}</option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <button
                type="button"
                onClick={handleSwapUnivs}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/[0.08] bg-background hover:bg-muted/80 text-navy shadow-ring hover:scale-105 transition-all duration-300"
                title="Swap selections"
              >
                <RefreshCw className="h-4 w-4 text-gold" />
              </button>

              {/* Univ B Select */}
              <div className="w-full sm:w-[42%]">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Second University</label>
                <select
                  value={univBSlug}
                  onChange={(e) => setUnivBSlug(e.target.value)}
                  className="w-full rounded-xl border border-navy/[0.08] bg-background px-4 py-3 text-sm font-semibold text-navy focus:border-gold focus:outline-none transition-all"
                >
                  {universitiesDb.map(u => (
                    <option key={u.slug} value={u.slug}>{u.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Same University Alert */}
            {univASlug === univBSlug && (
              <div className="flex items-center gap-3 rounded-xl bg-gold/10 border border-gold/20 p-4 text-gold">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <p className="text-xs font-semibold">Please select two different universities to view an informative comparison comparison.</p>
              </div>
            )}

            {univASlug !== univBSlug && (
              <div className="grid gap-8 lg:grid-cols-2">
                {/* University A Card */}
                <Card className="relative overflow-hidden border border-navy/[0.06] bg-card p-8 shadow-soft transition-all hover:border-gold/30 md:p-10">
                  <div className="absolute left-0 top-0 h-full w-[4px] bg-primary" aria-hidden />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[9px] font-bold uppercase text-primary mb-2">
                        QS Rank #{univA.rank}
                      </span>
                      <h2 className="font-display text-2xl font-semibold text-navy leading-tight">{univA.name}</h2>
                      <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mt-1.5 flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                        {countriesDb.find(c => c.slug === univA.countrySlug)?.name}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-[1.65] text-muted-foreground">
                    {univA.overview}
                  </p>

                  <div className="mt-8 space-y-6">
                    {/* Financial Estimates */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-3">Estimated Annual Expenses</span>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="bg-muted/40 p-3 rounded-xl border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">Tuition Fee (Est.)</span>
                          <span className="font-display font-semibold text-navy text-sm mt-1 block">
                            ${univA.tuitionYearly.toLocaleString()} <span className="text-[10px] text-muted-foreground font-normal">/ Year</span>
                          </span>
                        </div>
                        <div className="bg-muted/40 p-3 rounded-xl border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">Accommodation (Est.)</span>
                          <span className="font-display font-semibold text-navy text-sm mt-1 block">
                            ${univA.accommodationYearly.toLocaleString()} <span className="text-[10px] text-muted-foreground font-normal">/ Year</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rankings Detail */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Rankings & Accreditation</span>
                      <p className="text-xs text-navy font-semibold mt-1.5 flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-gold shrink-0" />
                        {univA.rankingsDetail}
                      </p>
                    </div>

                    {/* Campus Information */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Campus & Visual Lifestyle</span>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                        {univA.campusInfo}
                      </p>
                    </div>

                    {/* Entry Eligibility */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Eligibility & Entry Criteria</span>
                      <div className="mt-2 rounded-xl bg-gold/5 border border-gold/10 p-3 text-xs text-navy">
                        <p className="font-medium leading-relaxed">{univA.eligibility}</p>
                      </div>
                    </div>

                    {/* Brochure download */}
                    <div className="border-t border-navy/[0.05] pt-6 flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground">Managed Syllabus</span>
                      <ButtonLink
                        href={getWhatsAppLink(`Hi Yolotripz, I'm interested in applying to ${univA.name}.`)}
                        variant="secondary"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-full hover:scale-103 transition-transform"
                      >
                        <Download className="h-3.5 w-3.5 text-gold shrink-0" />
                        Syllabus Details
                      </ButtonLink>
                    </div>
                  </div>
                </Card>

                {/* University B Card */}
                <Card className="relative overflow-hidden border border-navy/[0.06] bg-card p-8 shadow-soft transition-all hover:border-gold/30 md:p-10">
                  <div className="absolute left-0 top-0 h-full w-[4px] bg-accent" aria-hidden />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 border border-accent/20 px-2 py-0.5 text-[9px] font-bold uppercase text-accent mb-2">
                        QS Rank #{univB.rank}
                      </span>
                      <h2 className="font-display text-2xl font-semibold text-navy leading-tight">{univB.name}</h2>
                      <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mt-1.5 flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                        {countriesDb.find(c => c.slug === univB.countrySlug)?.name}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-[1.65] text-muted-foreground">
                    {univB.overview}
                  </p>

                  <div className="mt-8 space-y-6">
                    {/* Financial Estimates */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-3">Estimated Annual Expenses</span>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="bg-muted/40 p-3 rounded-xl border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">Tuition Fee (Est.)</span>
                          <span className="font-display font-semibold text-navy text-sm mt-1 block">
                            ${univB.tuitionYearly.toLocaleString()} <span className="text-[10px] text-muted-foreground font-normal">/ Year</span>
                          </span>
                        </div>
                        <div className="bg-muted/40 p-3 rounded-xl border border-navy/[0.04]">
                          <span className="text-[9px] text-muted-foreground block uppercase">Accommodation (Est.)</span>
                          <span className="font-display font-semibold text-navy text-sm mt-1 block">
                            ${univB.accommodationYearly.toLocaleString()} <span className="text-[10px] text-muted-foreground font-normal">/ Year</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rankings Detail */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Rankings & Accreditation</span>
                      <p className="text-xs text-navy font-semibold mt-1.5 flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-gold shrink-0" />
                        {univB.rankingsDetail}
                      </p>
                    </div>

                    {/* Campus Information */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Campus & Visual Lifestyle</span>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                        {univB.campusInfo}
                      </p>
                    </div>

                    {/* Entry Eligibility */}
                    <div className="border-t border-navy/[0.05] pt-5">
                      <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Eligibility & Entry Criteria</span>
                      <div className="mt-2 rounded-xl bg-gold/5 border border-gold/10 p-3 text-xs text-navy">
                        <p className="font-medium leading-relaxed">{univB.eligibility}</p>
                      </div>
                    </div>

                    {/* Brochure download */}
                    <div className="border-t border-navy/[0.05] pt-6 flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground">Managed Syllabus</span>
                      <ButtonLink
                        href={getWhatsAppLink(`Hi Yolotripz, I'm interested in applying to ${univB.name}.`)}
                        variant="secondary"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-full hover:scale-103 transition-transform"
                      >
                        <Download className="h-3.5 w-3.5 text-gold shrink-0" />
                        Syllabus Details
                      </ButtonLink>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        )}

        {/* Global Conversion Bar */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto border border-gold/20 bg-gradient-to-r from-gold/5 via-gold/10 to-transparent p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left shadow-soft">
            <div>
              <p className="text-sm font-semibold text-navy flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-gold" />
                Need a certified profile evaluation?
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Let our expert counsellors double-check your academic scores against exact intake requirements.</p>
            </div>
            <ButtonLink
              href={getWhatsAppLink(`Hi Yolotripz, I would like to request a free profile evaluation for study abroad.`)}
              variant="primary"
              className="text-xs font-semibold shrink-0 text-center"
            >
              Get Free Profile Evaluation
            </ButtonLink>
          </Card>
        </div>

      </Container>
    </div>
  );
}
