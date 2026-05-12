import type { Metadata } from "next";
import { ServiceHero } from "@/components/heroes/ServiceHero";

export const metadata: Metadata = {
  title: "Hail Damage Repair West Texas | 5 Star Roofing",
  description:
    "Hail damage roofing repair across the Texas Panhandle and West Texas. 5 Star Residential and Commercial Roofing.",
};

export default function ServiceHeroPreview() {
  return (
    <ServiceHero
      service="Hail Damage"
      serviceDescriptor="Roof Replacement"
    />
  );
}
