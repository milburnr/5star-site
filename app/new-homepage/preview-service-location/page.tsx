import type { Metadata } from "next";
import { ServiceLocationHero } from "@/components/heroes/ServiceLocationHero";

export const metadata: Metadata = {
  title: "Hail Damage Repair Lubbock TX | 5 Star Roofing",
  description:
    "Hail damage roofing repair for homes and commercial buildings in Lubbock, TX. 5 Star Residential and Commercial Roofing.",
};

export default function ServiceLocationHeroPreview() {
  return (
    <ServiceLocationHero
      city="Lubbock"
      service="Hail Damage Repair"
    />
  );
}
