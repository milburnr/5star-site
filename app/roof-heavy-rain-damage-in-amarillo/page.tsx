import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Rain Damage Roof Repair Amarillo TX | 5 Star',
  description: "Expert heavy rain roof damage repair in Amarillo. Flash flood damage, water intrusion, leak detection. Emergency service. Insurance claims. (806) 622-6041",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Heavy Rain Roof Damage Repair",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109"
      }
    },
    "areaServed": [
      {"@type": "City", "name": "Amarillo"},
      {"@type": "City", "name": "Canyon"},
      {"@type": "City", "name": "Bushland"}
    ],
    "description": "Professional heavy rain roof damage repair in Amarillo, Texas. Flash flood damage restoration, water intrusion repair, and leak detection services."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Heavy Rain Damage",
                      "url": "/roof-heavy-rain-damage/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-heavy-rain-damage-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Heavy Rain Roof Damage Repair in Amarillo, TX</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Flash Flood & Heavy Rain Damage in Amarillo</h2>
        <p className="text-lg">
          While <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a> averages only 20 inches of annual rainfall, when it rains it pours—literally. The <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a> experiences sudden, intense thunderstorms that can drop 2-4 inches of rain in under an hour, overwhelming even well-maintained drainage systems. Flash flooding, wind-driven rain, and sustained downpours expose weaknesses in <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roofing systems</a> that might otherwise go unnoticed for years.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in identifying and repairing heavy rain damage for both <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial properties</a> throughout Amarillo. From emergency leak repairs during active storms to comprehensive water damage restoration, we help property owners recover quickly and prevent future problems.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">How Heavy Rain Damages Roofs</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">💧 Wind-Driven Rain Intrusion</h3>
            <p className="text-gray-600 mb-3">
              During severe thunderstorms, horizontal winds drive rain sideways, forcing water under shingles, behind flashing, and through ventilation systems that would normally shed vertical rainfall.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Water under lifted or damaged shingles</li>
              <li>✓ Penetration through ridge vents</li>
              <li>✓ Flashing overwhelmed by sideways flow</li>
              <li>✓ Soffit and fascia saturation</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🌊 Ponding Water Overload</h3>
            <p className="text-gray-600 mb-3">
              Flat and low-slope roofs can't handle flash flood-level rainfall. Drains become overwhelmed, creating standing water that seeps through seams and saturates membranes.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Clogged or undersized drains</li>
              <li>✓ Water pooling over 48 hours</li>
              <li>✓ Membrane seam failure</li>
              <li>✓ Excessive roof deck loading</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🏠 Gutter and Valley Failure</h3>
            <p className="text-gray-600 mb-3">
              2-4 inch per hour rainfall exceeds most gutter capacity. Overflowing gutters create waterfalls along fascia boards and valleys channel massive volumes that erode roofing materials.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Gutter overflow at fascia boards</li>
              <li>✓ Valley erosion and separation</li>
              <li>✓ Downspout backup causing roof flooding</li>
              <li>✓ Foundation damage from overflow</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">⚡ Existing Damage Exposure</h3>
            <p className="text-gray-600 mb-3">
              Heavy rain reveals problems that went unnoticed during dry periods—small cracks from previous storms, deteriorated flashing, or missing shingles suddenly become active leaks.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Hail damage from previous storms</li>
              <li>✓ Aging sealant and caulk failure</li>
              <li>✓ Cracked or brittle flashing</li>
              <li>✓ Compromised roof penetrations</li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-red-800">🚨 Emergency Rain Damage Service</h3>
        <p className="mb-4">
          Active roof leaks during rainstorms cause extensive interior damage—soaked insulation, ceiling stains, electrical hazards, and ruined possessions. Every minute counts when water is entering your home or business.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">We Provide:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <div>24/7 emergency phone answering</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <div>1-2 hour response in Amarillo area</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <div>Emergency tarping to stop active leaks</div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Common Emergencies:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Water pouring through ceiling</li>
              <li>• Multiple leak points during storm</li>
              <li>• Commercial building operational disruption</li>
              <li>• Electrical system exposure to water</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4">
          <a href="tel:8066226041" className="font-bold text-red-800 hover:underline">Call (806) 622-6041 Now for Emergency Service</a>
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Heavy Rain Damage Repair Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Emergency Leak Detection</h3>
            <p className="step-text">During or immediately after storms, we locate all active leak points using moisture meters and thermal imaging. Temporary repairs stop water intrusion.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Comprehensive Roof Inspection</h3>
            <p className="step-text">Once weather clears, complete evaluation of all roof systems—shingles, flashing, valleys, gutters, drainage. We identify the root cause of failures.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Interior Damage Assessment</h3>
            <p className="step-text">Inspect attics, ceilings, and walls for water damage. Document all damage for insurance claims with photos and moisture readings.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Permanent Repairs</h3>
            <p className="step-text">Replace damaged shingles, re-flash penetrations, repair valleys, upgrade drainage systems. All work warrantied for 10 years.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">Prevention Upgrades</h3>
            <p className="step-text">Install additional drains, seal vulnerable areas, add ice/water shield in valleys. Prevent future rain damage problems.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Amarillo Rain Damage Scenarios</h2>
      <div className="card mb-8">
        <div className="card-body">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Sudden Thunderstorm (2-4 inches in 1 hour)</h3>
              <p className="text-gray-600">
                Most common rain damage in Amarillo. Overwhelms gutters, drives rain under shingles, floods flat roofs through drains. Often combined with high winds and hail.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Sustained Spring Rains (2-3 days continuous)</h3>
              <p className="text-gray-600">
                Extended rainfall saturates roofing materials and finds every weakness. Water seeps through previously minor cracks, ponding water doesn't evaporate, insulation becomes waterlogged.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Flash Flooding (4-6 inches in 2 hours)</h3>
              <p className="text-gray-600">
                Rare but catastrophic. Drainage systems completely overwhelmed, commercial flat roofs may experience structural loading issues, residential gutters fail causing cascade effects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <h3 className="text-xl font-bold mb-3">⏰ Act Fast After Heavy Rain</h3>
        <p className="mb-2">
          Even if you don't see interior leaks immediately, water may be trapped in your attic, insulation, or wall cavities. This hidden moisture promotes mold growth, wood rot, and electrical hazards within 24-48 hours.
        </p>
        <p className="font-semibold">
          Schedule a free inspection within 24 hours of any major rainfall event for best results.
        </p>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          Emergency rain damage services throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Rain Damage</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Leak Repair</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Flash Flood Damage</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Storm Damage</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Rain Damage Repair in Amarillo?</h2>
        <p className="cta-text">
          Free inspections and insurance claim assistance. 24/7 emergency service for active leaks. Most repairs completed within 1-2 days.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg">
            📞 Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary-hero border-2 border-white hover:bg-white hover:text-brand-brown text-lg">
            Request Free Inspection
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
