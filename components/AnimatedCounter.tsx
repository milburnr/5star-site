"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Count-up animation using requestAnimationFrame + IntersectionObserver.
 * Replaces a framer-motion version that shipped ~40KB of JS for a number tick.
 *
 * SSR renders the final value so content is correct in HTML for crawlers.
 * Client mounts: if element is visible, runs animation from `from` → `to`.
 */
export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [value, setValue] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect motion prefs: show final value, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (hasRun.current) return;
      hasRun.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / (duration * 1000));
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(from + (to - from) * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      setValue(from);
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
