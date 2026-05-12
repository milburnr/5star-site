import type { Metadata } from "next";
import { HomeHero } from "@/components/heroes/HomeHero";

export const metadata: Metadata = {
  title: "5 Star Roofing | Amarillo's Residential & Commercial Roofing Company",
  description:
    "5 Star Residential and Commercial Roofing — serving the Texas Panhandle and all of West and Central Texas from Amarillo, TX.",
};

export default function NewHomepage() {
  return <HomeHero />;
}
