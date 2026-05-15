"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { postLead } from "@/lib/leads/client";
import { BUDGET_RANGE_OPTIONS, PREFERRED_COUNTRIES } from "@/lib/leads/constants";
import { contactFormIntro, contactFormTopics } from "@/content/contact";

export function ContactEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState<(typeof contactFormTopics)[number]["value"]>("study-abroad");
  const [intake, setIntake] = useState("");
  const [message, setMessage] = useState("");
  const [preferredCountry, setPreferredCountry] =
    useState<(typeof PREFERRED_COUNTRIES)[number]>("unspecified");
  const [courseInterest, setCourseInterest] = useState("");
  const [budgetRange, setBudgetRange] = useState<(typeof BUDGET_RANGE_OPTIONS)[number] | "">("");
  const [hp, setHp] = useState("");
  const formLoadedAtRef = useRef<number | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (formLoadedAtRef.current == null) {
      formLoadedAtRef.current = Date.now();
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!name.trim() || !email.trim()) {
      setError("Please add your name and email so we can reply.");
      return;
    }

    const formLoadedAt = formLoadedAtRef.current;
    if (formLoadedAt == null) {
      setError("Please wait a moment and try again.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        source: "contact" as const,
        fullName: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        topic,
        intake: intake.trim() || undefined,
        message: message.trim() || undefined,
        preferredCountry,
        courseInterest: courseInterest.trim() || undefined,
        budgetRange: budgetRange || undefined,
        formLoadedAt,
        _hp: hp || undefined,
      };

      const res = await postLead(payload);
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setTopic("study-abroad");
      setIntake("");
      setMessage("");
      setPreferredCountry("unspecified");
      setCourseInterest("");
      setBudgetRange("");
      setHp("");
      formLoadedAtRef.current = Date.now();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section
      id="enquiry"
      variant="default"
      eyebrow="Enquiry"
      title={contactFormIntro.title}
      description={contactFormIntro.description}
      edge
      className="!py-16 md:!py-20"
    >
      <Reveal>
        <Card className="mx-auto max-w-2xl border border-navy/[0.07] bg-card p-6 shadow-ring sm:p-8 md:p-10">
          <form
            onSubmit={handleSubmit}
            className="relative space-y-6"
            aria-busy={submitting}
            noValidate
          >
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-navy">
                  Full name <span className="text-destructive">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={submitting}
                  className="mt-2 w-full rounded-xl border border-navy/[0.1] bg-background px-4 py-3.5 text-sm text-navy outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-navy">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={submitting}
                  className="mt-2 w-full rounded-xl border border-navy/[0.1] bg-background px-4 py-3.5 text-sm text-navy outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-phone" className="text-sm font-medium text-navy">
                Phone <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={submitting}
                className="mt-2 w-full rounded-xl border border-navy/[0.1] bg-background px-4 py-3.5 text-sm text-navy outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                placeholder="+91 …"
              />
            </div>
            <div>
              <label htmlFor="contact-topic" className="text-sm font-medium text-navy">
                What do you need help with?
              </label>
              <select
                id="contact-topic"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value as typeof topic)}
                disabled={submitting}
                className="mt-2 w-full rounded-xl border border-navy/[0.1] bg-background px-4 py-3.5 text-sm text-navy outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              >
                {contactFormTopics.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-country" className="text-sm font-medium text-navy">
                  Preferred country <span className="text-muted-foreground">(optional)</span>
                </label>
                <select
                  id="contact-country"
                  name="preferredCountry"
                  value={preferredCountry}
                  onChange={(e) =>
                    setPreferredCountry(e.target.value as (typeof PREFERRED_COUNTRIES)[number])
                  }
                  disabled={submitting}
                  className="mt-2 w-full rounded-xl border border-navy/[0.1] bg-background px-4 py-3.5 text-sm text-navy outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                >
                  {PREFERRED_COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c === "unspecified" ? "Not specified" : c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-budget" className="text-sm font-medium text-navy">
                  Budget band <span className="text-muted-foreground">(optional)</span>
                </label>
                <select
                  id="contact-budget"
                  name="budgetRange"
                  value={budgetRange}
                  onChange={(e) =>
                    setBudgetRange(
                      (e.target.value || "") as (typeof BUDGET_RANGE_OPTIONS)[number] | "",
                    )
                  }
                  disabled={submitting}
                  className="mt-2 w-full rounded-xl border border-navy/[0.1] bg-background px-4 py-3.5 text-sm text-navy outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                >
                  <option value="">Prefer not to say</option>
                  {BUDGET_RANGE_OPTIONS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="contact-course" className="text-sm font-medium text-navy">
                Course / field interest <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                id="contact-course"
                name="courseInterest"
                value={courseInterest}
                onChange={(e) => setCourseInterest(e.target.value)}
                disabled={submitting}
                className="mt-2 w-full rounded-xl border border-navy/[0.1] bg-background px-4 py-3.5 text-sm text-navy outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                placeholder="e.g. MSc Data Science, MBA, public health…"
              />
            </div>
            <div>
              <label htmlFor="contact-intake" className="text-sm font-medium text-navy">
                Target intake <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                id="contact-intake"
                name="intake"
                value={intake}
                onChange={(e) => setIntake(e.target.value)}
                disabled={submitting}
                className="mt-2 w-full rounded-xl border border-navy/[0.1] bg-background px-4 py-3.5 text-sm text-navy outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                placeholder="e.g. September 2026, January 2027"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={submitting}
                className="mt-2 w-full resize-y rounded-xl border border-navy/[0.1] bg-background px-4 py-3.5 text-sm text-navy outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                placeholder="Course interest, countries you are considering, or questions for parents…"
              />
            </div>
            {error ? (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            ) : null}
            {success ? (
              <p className="text-sm font-medium text-navy" role="status">
                Thank you — we received your enquiry. Our team will follow up on email or WhatsApp
                during working hours.
              </p>
            ) : null}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95 disabled:pointer-events-none disabled:opacity-60 sm:w-auto sm:min-w-[12rem]"
            >
              {submitting ? "Sending…" : "Submit enquiry"}
            </button>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Submissions are stored in our private CRM (Sanity). Please do not include passwords or
              sensitive identity numbers in this form.
            </p>
          </form>
        </Card>
      </Reveal>
    </Section>
  );
}
