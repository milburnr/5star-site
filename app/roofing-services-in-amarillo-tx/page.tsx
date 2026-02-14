import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roofing-services-in-amarillo-tx/' },
  title: 'Amarillo TX Roofing Services | 5 Star Roofing',
  description: "Complete roofing services in Amarillo, TX. Residential & commercial, repair & replacement, hail damage, emergency service. Free inspections. Call (806) 622-6041",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roofing Services",
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
    "description": "Comprehensive roofing services in Amarillo, Texas including repair, replacement, hail damage restoration, and emergency service for residential and commercial properties."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roofing Services",
                      "url": "/roofing-services/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roofing-services-in-amarillo-tx/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roofing-services-in-amarillo-tx/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/roofing-services-in-amarillo-tx/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roofing services in Amarillo, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Professional Roofing Services in Amarillo, TX</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Complete Roofing Solutions for Amarillo & the Texas Panhandle</h2>
        <p className="text-lg">
          At 5 Star Commercial Roofing, we provide comprehensive <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">roofing services</a> for both <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial properties</a> throughout Amarillo and the Texas Panhandle. From routine <a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">inspections</a> to emergency <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">storm damage repairs</a>, we handle every aspect of roofing with professional expertise and customer-first service.
        </p>
        <p className="text-lg mt-4">
          Whether you need <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage assessment</a>, a complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a>, or ongoing maintenance for your commercial facility, our experienced team delivers quality workmanship backed by industry-leading warranties. We understand the unique challenges of the Texas Panhandle climate—from severe hailstorms to high winds and extreme temperature swings—and we build roofs designed to withstand them.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Roofing Services</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🔨 Roof Repair Services</h3>
            <p className="text-gray-600 mb-3">
              From minor shingle replacement to major storm damage repair, we fix all types of roofing problems quickly and affordably.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Leak detection and repair</li>
              <li>✓ Shingle replacement (missing or damaged)</li>
              <li>✓ Flashing repair around chimneys and vents</li>
              <li>✓ Valley repair and re-sealing</li>
              <li>✓ Gutter and downspout repairs</li>
              <li>✓ Emergency tarping service (24/7)</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🏗️ Roof Replacement</h3>
            <p className="text-gray-600 mb-3">
              When repairs aren't enough, we provide complete roof replacement with upgraded materials designed for Amarillo's harsh climate.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Residential asphalt shingle roofing</li>
              <li>✓ Metal roofing installation</li>
              <li>✓ Commercial flat roofing (TPO, EPDM, PVC)</li>
              <li>✓ Impact-resistant Class 4 shingles</li>
              <li>✓ Complete tear-off and decking replacement</li>
              <li>✓ Ventilation and insulation upgrades</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">⛈️ Storm Damage Restoration</h3>
            <p className="text-gray-600 mb-3">
              Amarillo experiences 8-12 hailstorms annually. We specialize in identifying and repairing storm damage of all types.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Hail damage assessment and repair</li>
              <li>✓ Wind damage restoration</li>
              <li>✓ Rain and water damage repairs</li>
              <li>✓ Ice dam removal and prevention</li>
              <li>✓ Insurance claim documentation</li>
              <li>✓ Direct insurance billing</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🏢 Commercial Roofing</h3>
            <p className="text-gray-600 mb-3">
              Specialized commercial roofing services for businesses, warehouses, retail centers, and industrial facilities.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Flat roof installation and repair</li>
              <li>✓ TPO, PVC, and EPDM membranes</li>
              <li>✓ Modified bitumen and BUR systems</li>
              <li>✓ Metal roof coating and restoration</li>
              <li>✓ Planned maintenance programs</li>
              <li>✓ Emergency commercial repairs</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🔍 Roof Inspections</h3>
            <p className="text-gray-600 mb-3">
              Professional roof inspections to identify problems before they become expensive failures.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Free storm damage inspections</li>
              <li>✓ Pre-purchase home inspections</li>
              <li>✓ Annual maintenance inspections</li>
              <li>✓ Drone photography and video</li>
              <li>✓ Thermal imaging leak detection</li>
              <li>✓ Detailed written reports with photos</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">📋 Insurance Claims Assistance</h3>
            <p className="text-gray-600 mb-3">
              We work directly with your insurance company to ensure you receive the full coverage you deserve.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Complete damage documentation</li>
              <li>✓ Meet with insurance adjusters</li>
              <li>✓ Provide detailed repair estimates</li>
              <li>✓ Explain coverage options</li>
              <li>✓ Handle claim paperwork</li>
              <li>✓ Work with all major insurers</li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose 5 Star Commercial Roofing?</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="feature-box">
          <div className="feature-icon">🏆</div>
          <h3 className="feature-title">10+ Years Experience</h3>
          <p className="feature-text">Over a decade serving Amarillo and the Texas Panhandle with quality roofing services</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title"></h3>
          <p className="feature-text">Available around the clock for emergency tarping and storm damage response</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">🛡️</div>
          <h3 className="feature-title">Licensed & Insured</h3>
          <p className="feature-text">Fully licensed, bonded, and insured for your protection and peace of mind</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">💰</div>
          <h3 className="feature-title">Insurance Experts</h3>
          <p className="feature-text">Work directly with all major insurance companies to maximize your claim</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">📝</div>
          <h3 className="feature-title">Written Warranties</h3>
          <p className="feature-text">10-year workmanship warranty on all installations plus manufacturer warranties</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">⭐</div>
          <h3 className="feature-title">5-Star Service</h3>
          <p className="feature-text">Customer satisfaction is our top priority—we're not done until you're satisfied</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Residential vs. Commercial Roofing Services</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">🏠 Residential Roofing</h3>
            <p className="mb-3">
              Homeowner-focused roofing services for single-family homes, townhomes, and residential properties throughout Amarillo and surrounding areas.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Asphalt shingle roofing (3-tab, architectural, designer)</li>
              <li>Impact-resistant hail-rated shingles</li>
              <li>Metal roofing (standing seam, metal shingles)</li>
              <li>Tile and slate roofing</li>
              <li>Attic ventilation and insulation</li>
              <li>Gutter installation and repair</li>
              <li>Skylight installation</li>
              <li>Free inspections for homeowners</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">🏢 Commercial Roofing</h3>
            <p className="mb-3">
              Business-focused roofing solutions for commercial buildings, warehouses, retail centers, offices, and industrial facilities.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>TPO single-ply membrane roofing</li>
              <li>EPDM rubber roofing systems</li>
              <li>PVC membrane installation</li>
              <li>Modified bitumen and BUR</li>
              <li>Metal roof coating and restoration</li>
              <li>Roof drainage improvements</li>
              <li>Planned maintenance programs</li>
              <li>Minimal business disruption scheduling</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Roofing Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Free Inspection & Estimate</h3>
            <p className="step-text">We inspect your roof thoroughly, identify all issues, and provide a detailed written estimate with photos. No pressure, no obligations.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Insurance Claim Assistance (If Applicable)</h3>
            <p className="step-text">If you have storm damage, we document everything for your insurance claim and meet with adjusters to ensure proper coverage.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Material Selection & Scheduling</h3>
            <p className="step-text">Choose from quality roofing materials suited to Amarillo's climate. We schedule work at your convenience with clear timelines.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Professional Installation</h3>
            <p className="step-text">Our experienced crew completes your project efficiently with attention to detail. We protect your property and clean up thoroughly each day.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">Final Inspection & Warranty</h3>
            <p className="step-text">We conduct a final walkthrough with you, provide all warranty documentation, and remain available for any questions or concerns.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="font-bold text-lg mb-3">💡 When Should You Call a Roofing Professional?</h3>
        <p className="mb-3">
          Don't wait until small problems become expensive disasters. Contact us if you notice:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>After any hailstorm</strong> – Even if you don't see damage, hail often causes hidden fractures that worsen over time</li>
          <li><strong>Missing or damaged shingles</strong> – Exposed roof decking allows water infiltration and rot</li>
          <li><strong>Interior water stains</strong> – Any ceiling discoloration indicates active leaks requiring immediate attention</li>
          <li><strong>Roof age over 15 years</strong> – Most asphalt shingle roofs in Amarillo last 15-25 years depending on conditions</li>
          <li><strong>Energy bills increasing</strong> – Poor attic ventilation or compromised insulation from roof leaks</li>
          <li><strong>Granules in gutters</strong> – Excessive granule loss means shingles are aging and losing protection</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Roofing Materials We Install</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="check-item">
          <span className="check-icon text-2xl">🏠</span>
          <div>
            <h3 className="font-bold mb-2">Asphalt Shingles</h3>
            <p className="text-gray-600">Most popular residential roofing. Available in 3-tab, architectural, and designer styles with 20-30 year lifespans.</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🛡️</span>
          <div>
            <h3 className="font-bold mb-2">Impact-Resistant Shingles</h3>
            <p className="text-gray-600">Class 4 hail-rated shingles with reinforced construction. Qualify for insurance discounts in Amarillo.</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🔩</span>
          <div>
            <h3 className="font-bold mb-2">Metal Roofing</h3>
            <p className="text-gray-600">Standing seam and metal shingles. 40-60 year lifespan, excellent wind and hail resistance, energy efficient.</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🏢</span>
          <div>
            <h3 className="font-bold mb-2">TPO Commercial Roofing</h3>
            <p className="text-gray-600">White reflective membrane for flat commercial roofs. UV resistant, energy efficient, 15-25 year lifespan.</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🌧️</span>
          <div>
            <h3 className="font-bold mb-2">EPDM Rubber Roofing</h3>
            <p className="text-gray-600">Durable black rubber membrane. Excellent weather resistance, affordable, proven long-term performance.</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">💪</span>
          <div>
            <h3 className="font-bold mb-2">PVC Membrane</h3>
            <p className="text-gray-600">Premium commercial flat roof option. Superior chemical and weather resistance, heat-welded seams.</p>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Amarillo & West Texas</h2>
        <p className="text-lg mb-4">
          Professional roofing services throughout the Texas Panhandle and West Texas:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing Services</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Commercial Roofing</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roof Repair</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Roofing Services in Amarillo?</h2>
        <p className="cta-text">
          Free inspections, honest estimates, and professional installation. Available for emergency service. Serving Amarillo and the Texas Panhandle for over 10 years.
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
