import type { Metadata } from "next";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

export const metadata: Metadata = {
  title: "Interior Hero Preview — Service Variant",
  description: "InteriorHeroSection preview rendered with the 'service' variant (Hail Damage).",
};

export default function InteriorHeroServicePreview() {
  return (
    <InteriorHeroSection
      heroVariant="service"
      service="Hail Damage"
      h1="Hail Damage in West Texas"
      image="/images/heroes/5star-new-hero.png"
    />
  );
}
