"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

/** Fires a conversion event when the confirmation page is reached. */
export default function ThankYouTracker() {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    trackEvent("generate_lead", "lead_generation", "contact_form_complete");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
