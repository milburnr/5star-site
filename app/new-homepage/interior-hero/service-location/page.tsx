import type { Metadata } from "next";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

export const metadata: Metadata = {
  title: "Interior Hero Preview — Service+Location Variant",
  description:
    "InteriorHeroSection preview rendered with the 'service-location' variant (Lubbock + Hail Damage Repair).",
};

export default function InteriorHeroServiceLocationPreview() {
  return (
    <InteriorHeroSection
      heroVariant="service-location"
      city="Lubbock"
      service="Hail Damage Repair"
      h1="Hail Damage Repair in Lubbock, TX"
      image="/images/heroes/5star-new-hero.png"
    />
  );
}
