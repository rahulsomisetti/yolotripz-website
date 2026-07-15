"use client";

import React from "react";

export function CookiePreferencesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-cookie-consent"))}
      className="underline decoration-dotted underline-offset-2 hover:text-primary transition-colors cursor-pointer"
    >
      Cookie Preferences
    </button>
  );
}
