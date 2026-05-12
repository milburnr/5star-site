import type { Metadata } from "next";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

export const metadata: Metadata = {
  title: "Interior Hero Preview — Location Variant",
  description: "InteriorHeroSection preview rendered with the 'location' variant (Lubbock, TX).",
};

export default function InteriorHeroLocationPreview() {
  return (
    <InteriorHeroSection
      heroVariant="location"
      city="Lubbock"
      state="TEXAS"
      h1="Roofing Company in Lubbock, TX"
      image="/images/heroes/5star-new-hero.png"
    />
  );
}
