import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Wind Damage Roof Repair in Amarillo | 5 Star',
  description: 'Wind Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wind Damage Roof Repair",
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
    "description": "Professional wind damage roof repair in Amarillo, Texas. High wind damage restoration, blown-off shingle replacement, and storm damage repairs."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Wind Damage",
                      "url": "/roof-wind-damage/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-wind-damage-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Wind Damage Roof Repair in Amarillo, TX</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">High Wind Roof Damage in the Texas Panhandle</h2>
        <p className="text-lg">
          <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a> averages 12-14 mph sustained winds year-round—one of the windiest cities in America. But it's the extreme wind events that cause roof damage: spring thunderstorm downbursts exceeding 70 mph, winter northers with sustained 50+ mph winds, and occasional tornado-force winds during severe weather. These high winds expose installation defects, aging materials, and inadequate fastening that might otherwise go unnoticed for years.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we've repaired thousands of wind-damaged roofs across the <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a>. From a few blown-off shingles to complete roof system failures, our team provides fast, comprehensive <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">wind damage repairs</a> for both <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial properties</a>. We also work directly with insurance companies to document damage and maximize your claim coverage.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">How Wind Damages Roofs in Amarillo</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">💨 Shingle Blow-Off</h3>
            <p className="text-gray-600 mb-3">
              Wind gets under shingle edges (especially at roof perimeters and ridges) and tears them off completely. This is the most visible wind damage and creates immediate leak risks.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Missing shingles on roof edges</li>
              <li>✓ Ridge cap shingles blown away</li>
              <li>✓ Starter strip failures at eaves</li>
              <li>✓ Corners and peaks most vulnerable</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🌪️ Shingle Lifting & Curling</h3>
            <p className="text-gray-600 mb-3">
              Even when shingles don't blow off, wind can lift edges, break seal bonds, and cause curling. This progressive damage worsens with each wind event until shingles fail completely.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Lifted shingle tabs exposing nails</li>
              <li>✓ Broken sealant bond strips</li>
              <li>✓ Curled or cupped shingle edges</li>
              <li>✓ Accelerated aging from wind flexing</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🏠 Flashing Damage</h3>
            <p className="text-gray-600 mb-3">
              Wind peels back metal flashing around chimneys, vents, and valleys. Once flashing is compromised, water intrusion occurs even without visible shingle damage.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Chimney flashing pulled loose</li>
              <li>✓ Vent pipe boots torn or displaced</li>
              <li>✓ Valley metal lifted or bent</li>
              <li>✓ Drip edge detached from fascia</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">📦 Debris Impact Damage</h3>
            <p className="text-gray-600 mb-3">
              High winds turn tree branches, signs, lawn furniture, and building materials into projectiles that puncture or dent roofing materials upon impact.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Tree limb impacts and punctures</li>
              <li>✓ Neighboring roof debris strikes</li>
              <li>✓ Flying signs or panels</li>
              <li>✓ Accumulated debris in valleys/gutters</li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="font-bold text-lg mb-3">🌬️ Amarillo Wind Patterns & Roof Damage Risk</h3>
        <p className="mb-3">
          Understanding Amarillo's wind patterns helps predict where damage occurs:
        </p>
        <ul className="space-y-2">
          <li><strong>Prevailing Southwesterlies (Daily):</strong> 12-20 mph winds stress south and west roof slopes</li>
          <li><strong>Spring Thunderstorm Outflows (March-May):</strong> 50-70 mph downbursts from any direction</li>
          <li><strong>Winter Northers (October-March):</strong> Sustained 40-60 mph from north, stressing north slopes</li>
          <li><strong>Tornado Season (April-June):</strong> Occasional 100+ mph winds causing catastrophic damage</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Signs of Wind Damage to Look For</h2>
      <div className="card mb-8">
        <div className="card-body">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-gold mb-3">Obvious Damage (Immediate Repair):</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Missing shingles or large sections gone</div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Shingles in yard or gutters after windstorm</div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Visible flashing peeled back or missing</div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Exposed roof deck or underlayment</div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Active leaks after windstorm</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-gold mb-3">Subtle Damage (Get Inspection):</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Shingle edges lifting or curling</div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Loose or rattling vents during wind</div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Granules accumulating in gutters</div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Shingles darker in some areas (exposed underlayment)</div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <div>Neighbors getting roof repairs after same storm</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Wind Damage Repair Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Free Wind Damage Inspection</h3>
            <p className="step-text">Complete roof inspection checking all slopes, edges, ridges, and flashing. We document all wind damage with photos for your insurance claim.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Insurance Claim Documentation</h3>
            <p className="step-text">Prepare detailed damage reports accepted by all major insurance companies. We note visible damage and underlying issues that adjusters might miss.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Material Matching & Ordering</h3>
            <p className="step-text">Match your existing shingles for seamless repairs. For extensive damage where full replacement is approved, help select upgraded wind-resistant materials.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Professional Repair Installation</h3>
            <p className="step-text">Replace damaged shingles using proper nailing patterns (6-nail for high-wind areas). Re-seal all edges, replace flashing, and ensure wind resistance meets or exceeds code.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">Wind Resistance Upgrades</h3>
            <p className="step-text">If approved by insurance, upgrade to Class 3 or 4 wind-rated shingles (rated to 110-130 mph). Additional fasteners and enhanced sealants prevent future damage.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <h3 className="text-xl font-bold mb-3">⚠️ Don't Ignore Minor Wind Damage</h3>
        <p className="mb-2">
          A few missing shingles might seem minor, but each exposed area becomes an entry point for the next windstorm. Wind damage is progressive—small problems become catastrophic failures during the next severe weather event.
        </p>
        <p className="font-semibold">
          Schedule a free inspection within 48 hours of any windstorm with gusts over 50 mph for best insurance claim results.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Wind-Resistant Roofing for Amarillo</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="feature-box">
          <div className="feature-icon">🛡️</div>
          <h3 className="feature-title">Class 4 Impact Shingles</h3>
          <p className="feature-text">Wind-rated to 130 mph with enhanced sealant strips and reinforced construction</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">🔨</div>
          <h3 className="feature-title">6-Nail Installation</h3>
          <p className="feature-text">High-wind nailing pattern uses 6 nails per shingle vs. standard 4 for superior hold</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">📎</div>
          <h3 className="feature-title">Enhanced Fastening</h3>
          <p className="feature-text">Ring-shank nails and special adhesives create bonds that resist even extreme winds</p>
        </div>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          Wind damage repair services throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Wind Damage</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Storm Repairs</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Wind Repairs</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Wind Damage</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Wind Damage Repair in Amarillo?</h2>
        <p className="cta-text">
          Free inspections and insurance claim assistance. Most wind damage repairs completed within 1-3 days. Serving Amarillo for over 10 years.
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
