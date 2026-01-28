import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Repair Services Amarillo TX | 5 Star',
  description: 'roofing repair services in Amarillo. Fast emergency repairs, leak detection, shingle replacement, storm damage. Licensed & insured. Free inspections.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roofing Repair Services",
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
    "description": "Professional roofing repair services in Amarillo, Texas. Emergency repairs, leak detection, shingle replacement, and storm damage restoration."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roofing Repair Services",
                      "url": "/roofing-repair-services/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roofing-repair-services-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Expert Roofing Repair Services in Amarillo, TX</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Fast, Professional Roof Repairs When You Need Them</h2>
        <p className="text-lg">
          When it comes to <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">roofing repair services in Amarillo</a>, finding the right contractor is crucial. Amarillo's unpredictable weather—from severe hailstorms to high winds and extreme temperature swings—makes it essential to maintain a well-functioning roof to protect your home or business from costly damage.
        </p>
        <p className="text-lg mt-4">
          At <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">5 Star Commercial Roofing</a>, we've been providing emergency and scheduled <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roof repairs</a> throughout the Texas Panhandle for over 10 years. Whether you're dealing with a sudden leak, <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage</a>, or gradual wear and tear, our experienced team responds quickly with lasting solutions.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Roofing Repairs We Handle</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">💧 Roof Leak Detection & Repair</h3>
            <p className="text-gray-600 mb-3">
              Roof leaks can cause extensive damage if not addressed quickly. We locate and repair leaks at their source.
            </p>
            <ul className="text-sm space-y-2">
              <li><strong>Flashing Leaks:</strong> Repair or replace damaged chimney and vent flashing</li>
              <li><strong>Valley Leaks:</strong> Fix compromised valley metal and seals</li>
              <li><strong>Penetration Leaks:</strong> Seal around pipes, vents, and skylights</li>
              <li><strong>Hidden Damage:</strong> Infrared detection finds moisture before visible damage</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🌪️ Storm & Wind Damage Repair</h3>
            <p className="text-gray-600 mb-3">
              Amarillo's severe weather can tear off shingles, damage flashing, and compromise your roof's integrity.
            </p>
            <ul className="text-sm space-y-2">
              <li><strong>Blown-Off Shingles:</strong> Replace missing shingles before water intrusion</li>
              <li><strong>Wind Uplift Damage:</strong> Repair lifted edges and corners</li>
              <li><strong>Debris Impact:</strong> Fix punctures from tree branches and flying objects</li>
              <li><strong>Emergency Tarping:</strong> Immediate protection while scheduling permanent repairs</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">⚡ Hail Damage Restoration</h3>
            <p className="text-gray-600 mb-3">
              Hail is the #1 cause of roof damage in Amarillo. We work directly with your insurance company.
            </p>
            <ul className="text-sm space-y-2">
              <li><strong>Shingle Impact Damage:</strong> Assess and document granule loss and cracks</li>
              <li><strong>Insurance Claims:</strong> Full documentation and claim assistance</li>
              <li><strong>Metal Roof Dents:</strong> Evaluate structural integrity after hail impacts</li>
              <li><strong>Preventive Upgrades:</strong> Install Class 4 impact-resistant materials</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🔧 General Roof Maintenance</h3>
            <p className="text-gray-600 mb-3">
              Regular maintenance prevents small issues from becoming expensive emergencies.
            </p>
            <ul className="text-sm space-y-2">
              <li><strong>Shingle Replacement:</strong> Replace cracked, curled, or missing shingles</li>
              <li><strong>Flashing Repair:</strong> Re-seal or replace deteriorated flashing</li>
              <li><strong>Vent Replacement:</strong> Replace damaged pipe boots and vent covers</li>
              <li><strong>Caulk & Seal:</strong> Re-seal exposed nails and vulnerable areas</li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Roof Repair Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Emergency Response & Initial Assessment</h3>
            <p className="step-text">We respond quickly to your call. For emergencies, we provide same-day or next-day service. Our initial assessment identifies all damage—not just the obvious issues—so you get a complete repair solution.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Detailed Inspection & Documentation</h3>
            <p className="step-text">We thoroughly inspect your roof from deck to ridge, documenting all damage with photos and notes. If insurance is involved, we provide comprehensive documentation to support your claim.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Transparent Estimate</h3>
            <p className="step-text">You'll receive a detailed written estimate explaining the damage, recommended repairs, materials, and costs. We never surprise you with hidden fees or unnecessary work.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Professional Repair Execution</h3>
            <p className="step-text">Our experienced crew completes repairs using quality materials and proven techniques. We match existing materials when possible and ensure all work meets or exceeds Texas building codes.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">Quality Inspection & Cleanup</h3>
            <p className="step-text">After repairs, we conduct a final inspection to ensure everything is watertight and secure. We clean up all debris and perform a magnetic sweep to remove nails from your property.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Call for Roof Repairs</h2>
      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <p className="mb-4">
          Don't wait for a small problem to become a costly disaster. Call 5 Star Commercial Roofing immediately if you notice:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li><strong>✗ Water Stains:</strong> Ceiling or wall discoloration indicating leaks</li>
            <li><strong>✗ Missing Shingles:</strong> Bare spots or gaps in roofing material</li>
            <li><strong>✗ Curled/Cracked Shingles:</strong> Visible deterioration or granule loss</li>
            <li><strong>✗ Sagging Areas:</strong> Dips or depressions in the roof surface</li>
          </ul>
          <ul className="space-y-2">
            <li><strong>✗ Light in Attic:</strong> Daylight visible through roof boards</li>
            <li><strong>✗ Damaged Flashing:</strong> Rust, gaps, or missing flashing</li>
            <li><strong>✗ Granules in Gutters:</strong> Excessive shingle granule shedding</li>
            <li><strong>✗ After Severe Weather:</strong> Hail, wind, or storm damage</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose 5 Star for Roof Repairs?</h2>
      <div className="card mb-8">
        <div className="card-body">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Experience & Expertise</h3>
              <p className="mb-4">
                With over a decade serving <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a> and the Texas Panhandle, we've seen every type of roof damage imaginable. Our crews are trained, licensed, and insured, with expertise in <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing</a> systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Emergency Response</h3>
              <p className="mb-4">
                We understand that roof emergencies don't wait for convenient times. We offer rapid response for <a href="/storm-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">storm damage</a> and urgent leaks, often providing same-day emergency tarping and next-day permanent repairs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Insurance Expertise</h3>
              <p className="mb-4">
                We work directly with all major insurance companies to ensure you receive the full coverage you deserve for <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail</a> and storm damage. We handle documentation, claims support, and adjuster meetings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Quality Guaranteed</h3>
              <p className="mb-4">
                Every repair is backed by our workmanship warranty. We use quality materials from trusted manufacturers and follow proper installation procedures to ensure repairs last for years, not months.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Roofing Services Throughout West Texas</h2>
        <p className="text-lg mb-4">
          Professional roof repair services for <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial</a> properties:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roof Repairs</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Repair Services</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Emergency Repairs</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roof Repairs</a>
          <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">• Roof Replacement</a>
          <a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">• Free Roof Inspections</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Emergency Roof Repairs in Amarillo?</h2>
        <p className="cta-text">
          Don't wait for a small leak to become major water damage. Call 5 Star Commercial Roofing now for fast, professional <a href="/roof-repair-services-in-amarillo/" className="text-white hover:underline">roof repairs</a> in Amarillo. <a href="/roof-inspections-in-amarillo/" className="text-white hover:underline">Free inspections</a>, emergency response, and insurance claim assistance available. Serving Amarillo and the entire Texas Panhandle.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg">
            📞 Call (806) 622-6041 Now
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown text-lg">
            Request Emergency Service
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
