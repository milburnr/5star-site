"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

/**
 * Pure CSS + IntersectionObserver fade-in.
 * Project rule (CLAUDE.md): no framer-motion. This was 40KB+ of JS that
 * shipped to every page just to fade cards in — now ~500 bytes.
 *
 * SSR renders with no inline style → content is visible to crawlers.
 * On client mount, element hides, then IO shows it on intersect.
 * Elements already in viewport on mount skip the animation entirely.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"ssr" | "hidden" | "visible">("ssr");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user motion prefs — skip animation entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("visible");
      return;
    }

    const el = ref.current;
    if (!el) {
      setState("visible");
      return;
    }

    // Above-fold: element already near/in viewport on mount — show immediately,
    // no animation, no observer. Keeps LCP region interaction-ready.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 40) {
      setState("visible");
      return;
    }

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offset =
    direction === "up"
      ? "0, 40px"
      : direction === "down"
        ? "0, -40px"
        : direction === "left"
          ? "40px, 0"
          : direction === "right"
            ? "-40px, 0"
            : "0, 0";

  // state === 'ssr' → no inline style (content in HTML for crawlers + no FOUC).
  // state === 'hidden' → faded out, waiting for intersection.
  // state === 'visible' → animated in.
  const style: React.CSSProperties =
    state === "ssr"
      ? {}
      : state === "visible"
        ? {
            opacity: 1,
            transform: "translate(0, 0)",
            transition: `opacity ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s, transform ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s`,
          }
        : {
            opacity: 0,
            transform: `translate(${offset})`,
          };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
