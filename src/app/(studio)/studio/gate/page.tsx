"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { safeStudioGateNextPath } from "@/lib/studio-gate/safe-next";

function GateForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");
  const nextPath = safeStudioGateNextPath(searchParams.get("next"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sessionChecked, setSessionChecked] = useState(false);
  const [session, setSession] = useState<{ email: string } | null>(null);
  const [misconfigured, setMisconfigured] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/studio-gate/session", {
          credentials: "same-origin",
        });
        const data = (await res.json()) as {
          ok?: boolean;
          email?: string;
          misconfigured?: boolean;
        };
        if (cancelled) return;
        if (data.misconfigured) {
          setMisconfigured(true);
        } else if (data.ok && data.email) {
          setSession({ email: data.email });
        }
      } finally {
        if (!cancelled) setSessionChecked(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/studio-gate/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ email, password, remember }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Sign-in was not successful.");
        return;
      }
      router.replace(nextPath);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  async function onLogout() {
    await fetch("/api/studio-gate/logout", {
      method: "POST",
      credentials: "same-origin",
    });
    setSession(null);
    router.refresh();
  }

  if (!sessionChecked) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center px-4">
        <div className="h-9 w-9 animate-pulse rounded-full bg-muted" aria-hidden />
        <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
      </div>
    );
  }

  if (misconfigured || reason === "misconfigured") {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h1 className="font-display text-xl font-semibold text-foreground">
            Studio is unavailable
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The studio access gate is not configured. Set{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              STUDIO_GATE_SECRET
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              STUDIO_GATE_PASSWORD
            </code>
            , and{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              STUDIO_GATE_ALLOWED_EMAILS
            </code>{" "}
            on the server, then reload this page.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Back to site
          </Link>
        </div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Signed in to studio gate
          </p>
          <h1 className="mt-2 font-display text-xl font-semibold text-foreground">
            {session.email}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Continue to Sanity Studio. You will still sign in with Sanity as usual.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={nextPath}
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
            >
              Open Studio
            </Link>
            <button
              type="button"
              onClick={onLogout}
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/40 px-4 py-16">
      <div className="w-full max-w-[420px] rounded-2xl border border-border/80 bg-card/95 p-8 shadow-[0_24px_80px_-32px_rgb(var(--brand-shadow-rgb)_/_0.28)] backdrop-blur-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <Link
            href="/"
            className="mb-5 inline-flex items-center justify-center outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Back to website home"
          >
            <SiteLogo variant="mark" markSize="lg" />
          </Link>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Studio access
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Authorized team members only. Sanity sign-in follows next.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="studio-gate-email"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Work email
            </label>
            <input
              id="studio-gate-email"
              name="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm shadow-sm transition placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="studio-gate-password"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Access phrase
            </label>
            <input
              id="studio-gate-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm shadow-sm transition placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="••••••••"
            />
          </div>

          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-4 rounded border-input text-primary focus-visible:ring-2 focus-visible:ring-ring"
            />
            Stay signed in on this device (30 days)
          </label>

          {error ? (
            <p
              className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
              role="alert"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="flex h-11 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:pointer-events-none disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Continue"}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          <Link href="/" className="underline-offset-4 hover:underline">
            Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function StudioGatePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center px-4">
          <div className="h-9 w-9 animate-pulse rounded-full bg-muted" />
        </div>
      }
    >
      <GateForm />
    </Suspense>
  );
}
