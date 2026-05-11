"use client";

import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface InteractiveCardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  tiltEffect?: boolean;
  glowEffect?: boolean;
}

/**
 * Card with hover scale/glow effect. Pure CSS transitions (no framer-motion).
 * The original shipped ~40KB of JS to scale a card on hover.
 *
 * tiltEffect: legacy prop kept for API compatibility. 3D tilt was a design
 *   gimmick that added complexity without UX value — reduced to a scale effect.
 * glowEffect: shows a gold ring on hover via CSS.
 */
export function InteractiveCard({
  children,
  href,
  className = "",
  tiltEffect = true,
  glowEffect = true,
}: InteractiveCardProps) {
  const scaleClass = tiltEffect ? "hover:scale-[1.03]" : "hover:scale-[1.02]";
  const glowClass = glowEffect
    ? "border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(228,198,110,0.3)]"
    : "border-border";

  const content = (
    <div className={`relative transition-transform duration-300 ${scaleClass} ${className}`}>
      <Card
        className={`overflow-hidden transition-all duration-300 shadow-dual-md hover:shadow-dual-xl bg-depth-3 border-2 ${glowClass}`}
      >
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
