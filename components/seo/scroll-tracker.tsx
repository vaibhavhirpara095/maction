"use client";

import { useEffect, useRef } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function ScrollTracker() {
  const { trackEvent } = useAnalytics();
  const trackedDepths = useRef<Record<number, boolean>>({
    25: false,
    50: false,
    75: false,
    100: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight <= 0) return;

      const percentage = Math.round((scrollTop / scrollHeight) * 100);

      [25, 50, 75, 100].forEach((depth) => {
        if (percentage >= depth && !trackedDepths.current[depth]) {
          trackedDepths.current[depth] = true;
          trackEvent("scroll_depth", "engagement", `${depth}%`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trackEvent]);

  return null;
}
