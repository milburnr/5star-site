import type { Metadata } from "next";
import { LocationHero } from "@/components/heroes/LocationHero";

export const metadata: Metadata = {
  title: "Lubbock TX Roofing Company | 5 Star Roofing",
  description:
    "Roofing company serving Lubbock, TX. 5 Star Residential and Commercial Roofing — Texas Panhandle and West Texas.",
};

export default function LocationHeroPreview() {
  return <LocationHero city="Lubbock" state="TEXAS" />;
}
