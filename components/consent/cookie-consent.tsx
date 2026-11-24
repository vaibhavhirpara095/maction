"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const STORAGE_KEY = "maction-cookie-consent";
type Consent = "accepted" | "declined";

/**
 * GDPR-friendly consent gate: Google Analytics is only loaded after the user
 * explicitly accepts. Choice is remembered in localStorage.
 */
export default function CookieConsent({ gaId }: { gaId?: string }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // localStorage is unavailable during SSR, so we read it after mount.
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(stored);
    setReady(true);
  }, []);

  const choose = (value: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {gaId && consent === "accepted" && <GoogleAnalytics gaId={gaId} />}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl md:flex md:items-center md:gap-6"
        >
          <p className="text-sm leading-relaxed text-slate-600">
            We use cookies to analyze site traffic and improve your experience. You can accept
            analytics cookies or continue with only essential cookies.
          </p>
          <div className="mt-4 flex shrink-0 gap-3 md:mt-0">
            <button
              onClick={() => choose("declined")}
              className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Decline
            </button>
            <button
              onClick={() => choose("accepted")}
              className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
