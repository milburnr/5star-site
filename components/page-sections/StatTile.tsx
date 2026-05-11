import type { ReactNode } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { cn } from "@/lib/utils";

interface StatTileProps {
  /** Numeric target for the count-up. When omitted, displayValue renders as static text. */
  to?: number;
  /** Suffix appended to the animated number (e.g. "+", "%"). */
  suffix?: string;
  /** Prefix prepended to the animated number (e.g. "$"). */
  prefix?: string;
  /** Static text alternative — for stats that aren't numeric counters ("24/7", "5.0/5.0"). */
  displayValue?: ReactNode;
  /** Sub-label under the number. */
  label: string;
  /** Optional click target. */
  href?: string;
  /** Show/hide the decorative gold underline beneath the label. Default true. */
  underline?: boolean;
  /** Compact size shrinks padding for dense grids. */
  size?: "default" | "compact";
  className?: string;
}

/**
 * Animated counter card matching the homepage trust-signal row pattern
 * (app/page.tsx:113-146). The decorative `after:` gold underline is
 * the homepage's signature touch — distinguishes these stat tiles from
 * generic Tailwind cards.
 *
 * Accepts either:
 *   - to + optional prefix/suffix → animated count-up via <AnimatedCounter>
 *   - displayValue → static text or icon (use for non-numeric like "24/7"
 *     or "5-star row" — pass icons as ReactNode)
 *
 * Wraps in <a> when href is set so the entire tile is clickable; otherwise
 * renders as a div.
 */
export function StatTile({
  to,
  prefix,
  suffix,
  displayValue,
  label,
  href,
  underline = true,
  size = "default",
  className,
}: StatTileProps) {
  const padding = size === "compact" ? "p-4 sm:p-5" : "p-4 sm:p-6 md:p-8";
  const numberSize = size === "compact" ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl";

  const inner = (
    <>
      <div
        className={cn("text-brand-brown font-heading font-bold mb-1 sm:mb-2 md:mb-3", numberSize)}
      >
        {to !== undefined ? (
          <AnimatedCounter to={to} prefix={prefix} suffix={suffix} />
        ) : (
          <>
            {prefix}
            {displayValue}
            {suffix}
          </>
        )}
      </div>
      <div className="text-gray-primary font-semibold text-sm md:text-lg">{label}</div>
    </>
  );

  const containerClass = cn(
    "block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-center",
    padding,
    underline &&
      "after:content-[''] after:block after:w-12 after:h-0.5 after:bg-brand-gold-vibrant after:mx-auto after:mt-3",
    href && "cursor-pointer",
    className,
  );

  if (href) {
    return (
      <a href={href} className={containerClass}>
        {inner}
      </a>
    );
  }
  return <div className={containerClass}>{inner}</div>;
}
