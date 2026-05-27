"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { countriesDb } from "@/content/database/studyData";
import { 
  Calculator,
  DollarSign,
  TrendingDown,
  Clock,
  ShieldCheck,
  Building,
  Utensils
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function CalculatorPage() {
  // Configurator states
  const [countrySlug, setCountrySlug] = useState<string>("usa");
  const [level, setLevel] = useState<"UG" | "PG">("PG");
  
  // Budget Sliders (defaults loaded based on US PG average)
  const [tuitionYearly, setTuitionYearly] = useState<number>(35000);
  const [rentMonthly, setRentMonthly] = useState<number>(1000);
  const [lifestyleMonthly, setLifestyleMonthly] = useState<number>(500);

  // Work Sliders
  const [workHours, setWorkHours] = useState<number>(15);
  const [hourlyWage, setHourlyWage] = useState<number>(16);

  const activeCountry = useMemo(() => {
    return countriesDb.find(c => c.slug === countrySlug)!;
  }, [countrySlug]);

  // Adjust defaults when country changes to keep sliders realistic
  const handleCountryChange = (slug: string) => {
    setCountrySlug(slug);
    if (slug === "germany") {
      setTuitionYearly(1500);
      setRentMonthly(500);
      setLifestyleMonthly(400);
      setHourlyWage(14);
    } else if (slug === "uk") {
      setTuitionYearly(24000); // in GBP equivalent value represented as USD for unified calculation
      setRentMonthly(900);
      setLifestyleMonthly(450);
      setHourlyWage(15);
    } else if (slug === "australia") {
      setTuitionYearly(28000);
      setRentMonthly(800);
      setLifestyleMonthly(400);
      setHourlyWage(22);
    } else if (slug === "ireland") {
      setTuitionYearly(18000);
      setRentMonthly(800);
      setLifestyleMonthly(450);
      setHourlyWage(13);
    } else if (slug === "canada") {
      setTuitionYearly(22000);
      setRentMonthly(750);
      setLifestyleMonthly(400);
      setHourlyWage(16);
    } else {
      // USA
      setTuitionYearly(35000);
      setRentMonthly(1000);
      setLifestyleMonthly(500);
      setHourlyWage(16);
    }
  };

  // Calculations
  const totalRentYearly = useMemo(() => rentMonthly * 12, [rentMonthly]);
  const totalLifestyleYearly = useMemo(() => lifestyleMonthly * 12, [lifestyleMonthly]);
  const grandTotalYearly = useMemo(() => {
    return tuitionYearly + totalRentYearly + totalLifestyleYearly;
  }, [tuitionYearly, totalRentYearly, totalLifestyleYearly]);

  const partTimeEarningsYearly = useMemo(() => {
    // Estimating 48 working weeks per year (including holiday full-time allowance)
    return workHours * hourlyWage * 48;
  }, [workHours, hourlyWage]);

  const netCostYearly = useMemo(() => {
    const cost = grandTotalYearly - partTimeEarningsYearly;
    return cost < 0 ? 0 : cost;
  }, [grandTotalYearly, partTimeEarningsYearly]);

  // CSS Chart Percentages
  const tuitionPct = useMemo(() => (tuitionYearly / grandTotalYearly) * 100, [tuitionYearly, grandTotalYearly]);
  const rentPct = useMemo(() => (totalRentYearly / grandTotalYearly) * 100, [totalRentYearly, grandTotalYearly]);
  const lifePct = useMemo(() => (totalLifestyleYearly / grandTotalYearly) * 100, [totalLifestyleYearly, grandTotalYearly]);

  // Currencies represented
  const currencySymbol = useMemo(() => {
    if (countrySlug === "uk") return "£";
    if (countrySlug === "germany" || countrySlug === "ireland") return "€";
    if (countrySlug === "australia") return "A$";
    if (countrySlug === "canada") return "C$";
    return "$";
  }, [countrySlug]);

  return (
    <div className="min-h-screen bg-mesh-gradient bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.02),transparent_45%)] bg-background pb-24 pt-16 sm:pb-32 sm:pt-20">
      <Container>
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <Calculator className="h-3.5 w-3.5 text-gold shrink-0" />
            Visual Budget Configurator
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Cost of Study Abroad Calculator
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Slide and configure your academic and lifestyle preferences to see an instant breakdown of your yearly expenses, offset by your part-time work rights.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Sliders Panel */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="border border-navy/[0.06] bg-card p-6 shadow-soft md:p-8">
              <h2 className="font-display text-lg font-semibold text-navy mb-6">1. Configure Your Setup</h2>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Destination Dropdown */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Target Destination</label>
                  <select
                    value={countrySlug}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="w-full rounded-xl border border-navy/[0.08] bg-background px-4 py-3 text-sm font-semibold text-navy focus:border-gold focus:outline-none transition-all"
                  >
                    {countriesDb.map(c => (
                      <option key={c.slug} value={c.slug}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                </div>

                {/* Level Toggle */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Academic Level</label>
                  <div className="grid grid-cols-2 rounded-xl bg-muted/60 p-1 border border-navy/[0.04]">
                    <button
                      type="button"
                      className={`rounded-lg py-2 text-xs font-semibold uppercase ${
                        level === "UG" ? "bg-card text-navy shadow-sm" : "text-muted-foreground hover:text-navy"
                      }`}
                      onClick={() => setLevel("UG")}
                    >
                      Bachelors (UG)
                    </button>
                    <button
                      type="button"
                      className={`rounded-lg py-2 text-xs font-semibold uppercase ${
                        level === "PG" ? "bg-card text-navy shadow-sm" : "text-muted-foreground hover:text-navy"
                      }`}
                      onClick={() => setLevel("PG")}
                    >
                      Masters (PG)
                    </button>
                  </div>
                </div>
              </div>

              {/* Sliders Grid */}
              <div className="mt-8 space-y-8">
                {/* Slider 1: Tuition */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-primary shrink-0" />
                      Annual Tuition Fee
                    </span>
                    <span className="font-display font-bold text-primary text-base">
                      {currencySymbol}{tuitionYearly.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={countrySlug === "germany" ? "10000" : "60000"}
                    step="500"
                    value={tuitionYearly}
                    onChange={(e) => setTuitionYearly(Number(e.target.value))}
                    className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>{currencySymbol}0</span>
                    <span>{countrySlug === "germany" ? `${currencySymbol}10k (Private hubs)` : `${currencySymbol}60k (Ivy league average)`}</span>
                  </div>
                </div>

                {/* Slider 2: Rent */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1">
                      <Building className="h-4 w-4 text-primary shrink-0" />
                      Monthly Rent & Housing
                    </span>
                    <span className="font-display font-bold text-navy text-base">
                      {currencySymbol}{rentMonthly.toLocaleString()} <span className="text-[10px] text-muted-foreground font-normal">/ month</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="3000"
                    step="50"
                    value={rentMonthly}
                    onChange={(e) => setRentMonthly(Number(e.target.value))}
                    className="w-full accent-navy h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>{currencySymbol}100 (Shared regional)</span>
                    <span>{currencySymbol}3,000 (London/NYC Premium)</span>
                  </div>
                </div>

                {/* Slider 3: Food / Lifestyle */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1">
                      <Utensils className="h-4 w-4 text-primary shrink-0" />
                      Monthly Food & Lifestyle
                    </span>
                    <span className="font-display font-bold text-navy text-base">
                      {currencySymbol}{lifestyleMonthly.toLocaleString()} <span className="text-[10px] text-muted-foreground font-normal">/ month</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    step="25"
                    value={lifestyleMonthly}
                    onChange={(e) => setLifestyleMonthly(Number(e.target.value))}
                    className="w-full accent-navy h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>{currencySymbol}50 (Self-catering saver)</span>
                    <span>{currencySymbol}1,500 (Socialite style)</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Part-Time Work Offset Panel */}
            <Card className="border border-navy/[0.06] bg-card p-6 shadow-soft md:p-8">
              <h2 className="font-display text-lg font-semibold text-navy mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                2. Calculate Part-Time Earnings Offset
              </h2>
              <p className="text-xs leading-relaxed text-muted-foreground mb-6">
                Most destinations allow students to work **20 hours per week** (or 48 hrs/fortnight in Australia). Use this panel to estimate how much of your living expenses you can cover directly!
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Sliders: Hours */}
                <div className="space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-xs font-semibold text-navy">Weekly Hours worked</span>
                    <span className="text-xs font-bold text-navy">{workHours} hrs / week</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={workHours}
                    onChange={(e) => setWorkHours(Number(e.target.value))}
                    className="w-full accent-gold h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-muted-foreground">
                    <span>0 hrs (None)</span>
                    <span>20 hrs (Full Allowable)</span>
                  </div>
                </div>

                {/* Sliders: Wage */}
                <div className="space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-xs font-semibold text-navy">Average Hourly Wage</span>
                    <span className="text-xs font-bold text-navy">{currencySymbol}{hourlyWage} / hr</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="35"
                    step="1"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(Number(e.target.value))}
                    className="w-full accent-gold h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-muted-foreground">
                    <span>{currencySymbol}10 / hr</span>
                    <span>{currencySymbol}35 / hr</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Outcomes Display */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            <Card className="relative overflow-hidden border border-navy/[0.07] bg-navy p-8 shadow-soft text-white rounded-2xl">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-white/[0.03] blur-xl" aria-hidden />

              <span className="inline-flex rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold">
                Yearly Outlay Projection
              </span>

              {/* Cost Slits */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-end border-b border-white/10 pb-3">
                  <span className="text-xs text-white/70">Tuition Outlay</span>
                  <span className="font-display font-semibold text-sm">{currencySymbol}{tuitionYearly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-3">
                  <span className="text-xs text-white/70">Housing & Accommodation</span>
                  <span className="font-display font-semibold text-sm">{currencySymbol}{totalRentYearly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-3">
                  <span className="text-xs text-white/70">Lifestyle & General Living</span>
                  <span className="font-display font-semibold text-sm">{currencySymbol}{totalLifestyleYearly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-3 font-semibold">
                  <span className="text-xs text-gold">Grand Total Outlay</span>
                  <span className="font-display font-bold text-gold text-xl">{currencySymbol}{grandTotalYearly.toLocaleString()}</span>
                </div>
              </div>

              {/* Dynamic CSS Visual Breakdown Chart */}
              {grandTotalYearly > 0 && (
                <div className="mt-8 space-y-2">
                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider block">Expense Breakdown Visual</span>
                  <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden flex">
                    <div style={{ width: `${tuitionPct}%` }} className="bg-primary/90 h-full" title={`Tuition: ${tuitionPct.toFixed(0)}%`} />
                    <div style={{ width: `${rentPct}%` }} className="bg-accent/90 h-full" title={`Housing: ${rentPct.toFixed(0)}%`} />
                    <div style={{ width: `${lifePct}%` }} className="bg-gold/90 h-full" title={`Lifestyle: ${lifePct.toFixed(0)}%`} />
                  </div>
                  <div className="flex justify-start gap-4 text-[9px] text-white/75 mt-1.5 flex-wrap">
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 bg-primary/95 rounded-full" /> Tuition ({tuitionPct.toFixed(0)}%)</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 bg-accent/95 rounded-full" /> Housing ({rentPct.toFixed(0)}%)</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 bg-gold/95 rounded-full" /> Living ({lifePct.toFixed(0)}%)</span>
                  </div>
                </div>
              )}

              {/* Part-time offset projection */}
              {partTimeEarningsYearly > 0 && (
                <div className="mt-8 border-t border-white/10 pt-6 space-y-3">
                  <div className="flex justify-between items-end text-xs text-white/70">
                    <span className="flex items-center gap-1 text-gold"><TrendingDown className="h-3.5 w-3.5 text-gold shrink-0" /> Part-Time Offset</span>
                    <span className="font-semibold text-gold font-display">-{currencySymbol}{partTimeEarningsYearly.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-3 text-xs text-white/70">
                    <span>Estimated Net Out-of-Pocket</span>
                    <span className="font-bold text-white text-base font-display">{currencySymbol}{netCostYearly.toLocaleString()} <span className="text-[9px] text-white/60 font-normal">/ Year</span></span>
                  </div>
                  <p className="text-[10px] text-white/60 italic leading-relaxed">
                    * Projections assume working {workHours} hours per week at {currencySymbol}{hourlyWage}/hr for 48 weeks. Regional visa work rights apply.
                  </p>
                </div>
              )}

              {/* Book session */}
              <div className="mt-8">
                <ButtonLink
                  href={getWhatsAppLink(`Hi Yolotripz, I designed a study abroad budget plan using your calculator. Here's my preference: Country: ${activeCountry.name}, Study Level: ${level}, Total Budget Yearly: ${currencySymbol}${grandTotalYearly.toLocaleString()}. I would like to check feasible shortlists.`)}
                  variant="primary"
                  className="w-full text-center text-xs font-semibold py-3"
                >
                  Share Budget Plan with Advisory Desk
                </ButtonLink>
              </div>
            </Card>

            {/* Shield list check */}
            <Card className="border border-navy/[0.06] bg-card p-5 shadow-soft flex gap-3.5 items-start">
              <ShieldCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-navy">resilient Budget Planning</h4>
                <p className="text-[11px] leading-relaxed text-muted-foreground mt-0.5">
                  Our calculations are modeled on actual student profiles across Karnataka. Book a counselling call to evaluate specific blocked accounts, health covers, and visa funding formats.
                </p>
              </div>
            </Card>
          </div>

        </div>

      </Container>
    </div>
  );
}
