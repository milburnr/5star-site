import type { Metadata } from "next";
import { Wrench, Home as HomeIcon, Building2 } from "lucide-react";
import { ServiceCard } from "@/components/page-sections/ServiceCard";

export const metadata: Metadata = {
  title: "ServiceCard Preview",
  description: "Editorial ServiceCard grid — no stat overlays, real images, honest copy.",
};

export default function ServiceCardPreview() {
  return (
    <main style={{ background: "#FAF6EF", minHeight: "100vh", paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <p className="eyebrow" style={{ display: "block", marginBottom: 8 }}>
          What we do
        </p>
        <h2 className="heading-primary" style={{ color: "#2B1810", marginBottom: 40 }}>
          Roofing built for West Texas weather
        </h2>

        <div className="content-grid-3">
          <ServiceCard
            href="/hail-damage-repair-amarillo/"
            title="Hail Damage Repair"
            description="Most homeowners don't realize their roof took a hit until shingles start leaking. We document the damage, walk the claim with your adjuster, and put the roof back the way it should be."
            imageSrc="/images/services/hail-damage-repair.webp"
            imageAlt="Hail-damaged shingle roof inspection in West Texas"
            icon={Wrench}
          />
          <ServiceCard
            href="/residential-roofing/"
            title="Residential Roofing"
            description="Re-roofs, repairs, and new builds across the Panhandle. Architectural shingles, metal, or impact-rated for hail country — we'll talk through what fits your house and budget."
            imageSrc="/images/heroes/lubbock-hero-1200w.webp"
            imageAlt="Residential roof in Lubbock, TX"
            icon={HomeIcon}
          />
          <ServiceCard
            href="/commercial-roofing/"
            title="Commercial Roofing"
            description="TPO, PVC, EPDM, and metal systems for warehouses, retail, and multi-tenant buildings. Tear-off, recover, or new install — built to handle Texas heat and hail."
            imageSrc="/images/heroes/midland-hero-1200w.webp"
            imageAlt="Commercial roofing project in Midland, TX"
            icon={Building2}
          />
        </div>
      </div>
    </main>
  );
}
