import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/storm-damage-roof-repair-in-amarillo/' },
  title: 'Storm Damage Roof Repair in Amarillo | 5 Star',
  description: 'Storm Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Storm Damage Roof Repair",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
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
    "description": "storm damage roof repair in Amarillo, Texas. Wind, hail, rain damage restoration. Insurance claim assistance and tarping."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Storm Damage Roof Repair",
                      "url": "/storm-damage-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/storm-damage-roof-repair-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Storm Damage Roof Repair in Amarillo</h1>
      </FadeIn>

      {/* Hero Image */}
      <img
        alt="Severe storm damage on Texas Panhandle roof - tarping and repair services - 5 Star Commercial Roofing"
        className="w-full h-96 object-cover rounded-lg mb-8"
      />

      <div className="content-block">
        <h2 className="content-block-title">Storm Damage Response</h2>
        <p className="text-lg">
          Severe weather strikes the <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a> without warning. High winds, <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail</a>, <a href="/roof-heavy-rain-damage-in-amarillo/" className="text-brand-gold hover:underline">heavy rain</a>, and even tornadoes can damage roofs across Amarillo in minutes. When <a href="/roof-storm-damage-in-amarillo/" className="text-brand-gold hover:underline">storm damage</a> occurs, fast action prevents further interior damage. We're available for tarping and <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">repairs</a>.
        </p>
      </div>

      <div className="bg-red-100 border-l-4 border-red-600 p-6 mb-8">
        <p>Available for tarping, leak repair, and storm damage assessment</p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Storm Damage in Amarillo</h2>

      {/* Visual Damage Type Examples */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Wind damage on Amarillo roof - Missing and lifted shingles after storm - 5 Star Commercial Roofing"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">💨 Wind Damage</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Missing or lifted shingles</li>
              <li>• Exposed underlayment</li>
              <li>• Damaged ridge caps</li>
              <li>• Blown-off flashing</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Water damage from roof leak Amarillo TX - Ceiling stains and attic moisture - 5 Star Commercial Roofing"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">🌧️ Water Damage</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Active leaks into attic</li>
              <li>• Ceiling stains or sagging</li>
              <li>• Compromised insulation</li>
              <li>• Mold or mildew growth</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Tree damage on Texas Panhandle roof - Branch puncture requiring storm repair - 5 Star Commercial Roofing"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">🌳 Debris Impact</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Tree limb punctures</li>
              <li>• Broken or cracked decking</li>
              <li>• Damaged skylights</li>
              <li>• Structural issues</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Storm damage roof tarping service Amarillo TX - Preventing further storm damage - 5 Star Commercial Roofing"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Same-day response</li>
              <li>• Heavy-duty materials</li>
              <li>• Prevents water intrusion</li>
              <li>• availability</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our storm response Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Immediate Response (Within Hours)</h3>
            <p className="step-text">We dispatch a crew for tarping to prevent further water damage. Our trucks carry heavy-duty tarps, 2x4s, and fastening equipment.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Damage Documentation (24-48 Hours)</h3>
            <p className="step-text">Complete roof inspection with photos, measurements, and detailed report for your insurance company.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Insurance Claim Filing</h3>
            <p className="step-text">We help file your claim with all necessary documentation and meet with the adjuster on-site.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Permanent Repair or Replacement</h3>
            <p className="step-text">Once approved, we complete repairs or full replacement with upgraded, storm-resistant materials.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Time Matters After Storm Damage</h2>
      <p className="mb-4">Delaying repairs after storm damage can lead to:</p>
      <ul className="list-disc list-inside space-y-2 mb-8 ml-4">
        <li><strong>Water Infiltration:</strong> Even small roof openings allow gallons of water into your attic during Panhandle storms</li>
        <li><strong>Mold Growth:</strong> Amarillo's temperature swings create perfect conditions for mold in wet insulation</li>
        <li><strong>Structural Damage:</strong> Water-soaked wood decking and rafters lose structural integrity</li>
        <li><strong>Claim Denial:</strong> Insurance companies expect timely mitigation—waiting months can jeopardize claims</li>
        <li><strong>Interior Damage:</strong> Ceiling damage, ruined insulation, and destroyed belongings add thousands to losses</li>
      </ul>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          emergency storm damage services for <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial</a> properties throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Storm Damage</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland prompt service</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Storm Repairs</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Storm Damage</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Expert Roofing Service in Amarillo?</h2>
        <p className="cta-text">
          Free inspections, insurance claim assistance, and professional installation. Serving the Texas Panhandle for over 10 years.
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
