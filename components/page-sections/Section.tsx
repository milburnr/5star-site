import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionRecipe =
  | "amber-50"
  | "white"
  | "gold-light"
  | "brown-gold"
  | "gradient-radial"
  | "process-gray"
  | "card-warm"
  | "page-gradient";

interface SectionProps {
  children: ReactNode;
  recipe?: SectionRecipe;
  rhythm?: "major" | "sub";
  belowFold?: boolean;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** When true, content is rendered directly without the .container-custom wrapper. */
  fullWidth?: boolean;
}

/**
 * Section wrapper that picks from the 8 documented background recipes in
 * design-system/MASTER.md §2 to enforce visual rhythm rotation.
 *
 * Templated pages MUST rotate recipes — repeating one recipe across 6+
 * sections is the signature of inline-class drift (visual-design-rules.md
 * Rule 2). Picking from this enum eliminates that whole failure mode.
 *
 * Recipes:
 *   amber-50         — solid amber-50, trust signals, default body bg
 *   white            — solid white, definition cards
 *   gold-light       — bg-brand-gold-light bar, "why amarillo chooses" pattern
 *   brown-gold       — brown→gold heat gradient, final CTA
 *   gradient-radial  — subtle gradient + radial glow, materials/feature blocks
 *   process-gray     — gray-50 → slate-50 → gray-50, process timelines
 *   card-warm        — internal card warm gradient (white → amber-50)
 *   page-gradient    — section-on-page gradient w/ rounded-3xl wrapper
 */
export function Section({
  children,
  recipe = "amber-50",
  rhythm = "sub",
  belowFold = false,
  id,
  className,
  containerClassName,
  fullWidth = false,
}: SectionProps) {
  const bg = RECIPES[recipe];
  const rhythmClass = rhythm === "major" ? "section-major" : "section-sub";

  const inner = fullWidth ? (
    children
  ) : (
    <div className={cn("container-custom relative", containerClassName)}>{children}</div>
  );

  return (
    <section
      id={id}
      className={cn(
        rhythmClass,
        bg,
        belowFold && "below-fold",
        "relative overflow-hidden",
        className,
      )}
    >
      {inner}
    </section>
  );
}

const RECIPES: Record<SectionRecipe, string> = {
  "amber-50": "bg-amber-50",
  white: "bg-white",
  "gold-light": "bg-brand-gold-light",
  "brown-gold": "bg-gradient-to-r from-brand-brown to-brand-gold text-white",
  "gradient-radial":
    "bg-gradient-to-b from-white via-orange-50/20 to-white before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.06),transparent_50%)] before:pointer-events-none",
  "process-gray": "bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50",
  "card-warm": "bg-gradient-to-br from-white to-amber-50",
  "page-gradient":
    "bg-gradient-to-br from-gray-50 via-amber-50/40 to-gray-50 rounded-3xl mx-4 sm:mx-6 lg:mx-8",
};
