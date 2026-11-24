"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  duration?: number;
  className?: string;
}

/**
 * Scroll-into-view reveal used by marketing sections. Centralises the
 * initial/whileInView/once pattern that was copy-pasted across sections and —
 * critically — disables animation when the user prefers reduced motion (a11y).
 */
export default function MotionReveal({
  children,
  delay = 0,
  y = 30,
  duration = 0.5,
  className,
}: MotionRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
