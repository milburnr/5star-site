import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  /** Section heading. Default "Ready to Get Started?". */
  heading?: ReactNode;
  /** Sub-text below heading. */
  body?: ReactNode;
  /** Primary phone CTA. */
  primaryCTA: { tel: string; display: string; label?: string };
  /** Secondary CTA. Default href #get-quote, label "Free Inspection". */
  secondaryCTA?: { href: string; label: string };
  /** When true, drops the page padding so this can sit flush against an adjacent section. */
  flush?: boolean;
  className?: string;
}

/**
 * Final-section CTA bar replicating the homepage final-CTA pattern.
 * Uses the brand brown→gold heat gradient (note: the same conceptual
 * gradient that the sticky bar uses — but here as a tall section,
 * not a thin strip, so the midpoint doesn't go muddy. See globals.css
 * .sticky-contact-bar for the strip variant which routes via
 * orange-700 to avoid the muddy yellow zone).
 *
 * Tier-1 priority: 7 of 8 RETROFIT samples needed this swap-in
 * (divergence-catalog cross-sample finding #6 — final-CTA inconsistency).
 *
 * CTA copy rotation across templated pages should follow
 * template-variation-rules.md Rule 8 — pass different `heading` /
 * `primaryCTA.label` per page in a templated set so 16 city pages
 * don't ship "Ready to Get Started?" repeated 16 times.
 */
export function CTASection({
  heading = "Ready to Get Started?",
  body,
  primaryCTA,
  secondaryCTA = { href: "#get-quote", label: "Free Inspection" },
  flush = false,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "bg-gradient-to-r from-brand-brown to-brand-gold text-white text-center",
        flush ? "py-12 md:py-16" : "section-major",
        className,
      )}
    >
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{heading}</h2>
        {body && (
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-95">{body}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href={`tel:${primaryCTA.tel}`}
            className="bg-white text-brand-brown hover:text-brand-brown-dark px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            {primaryCTA.label ?? `Call ${primaryCTA.display}`}
          </a>
          <a
            href={secondaryCTA.href}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-brown px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            {secondaryCTA.label}
          </a>
        </div>
      </div>
    </section>
  );
}
