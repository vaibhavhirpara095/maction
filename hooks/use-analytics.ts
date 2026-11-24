"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function useAnalytics() {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } else {
      console.log(`[Analytics Mock] Event Logged - Action: ${action}, Category: ${category}, Label: ${label}`);
    }
  };

  const trackCTA = (name: string) => {
    trackEvent("cta_click", "engagement", name);
  };

  const trackFormSubmit = (formName: string, status: "success" | "failure") => {
    trackEvent("form_submission", "lead_generation", `${formName}_${status}`);
  };

  return {
    trackEvent,
    trackCTA,
    trackFormSubmit,
  };
}
