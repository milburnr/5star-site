import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roofing-repair-services-in-amarillo/' },
  title: 'Roofing Repair Amarillo TX | 5 Star Roofing',
  description: 'Leading roofing repair services in Amarillo TX. Storm damage repair, hail damage restoration, leak detection, insurance claims assistance. Licensed, bonded & insured with 10+ years local experience. Free estimates & prompt response.',
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
    "description": "Professional roofing repair services in Amarillo, Texas. storm repairs, leak detection, shingle replacement, and storm damage restoration."
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roofing-repair-services-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/roofing-repair-services-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roofing services in Amarillo, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Expert Roofing Repair Services in Amarillo, TX</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Amarillo's Most Trusted Roof Repair Specialists Since 2014</h2>
        <p className="text-lg">
          When it comes to <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">roofing repair services in Amarillo</a>, finding the right contractor is crucial. Amarillo's unpredictable weather—from severe hailstorms averaging 35 days per year to high winds exceeding 58 mph and extreme temperature swings from 105°F in summer to below freezing in winter—makes it essential to maintain a well-functioning roof to protect your home or business from costly damage.
        </p>
        <p className="text-lg mt-4">
          At <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">5 Star Commercial Roofing</a>, we've been providing prompt and scheduled <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roof repairs</a> throughout the Texas Panhandle for over 10 years. Whether you're dealing with a sudden leak, <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage</a>, or gradual wear and tear, our experienced team responds quickly with lasting solutions that stand up to West Texas weather.
        </p>
        <p className="text-lg mt-4">
          <strong>Located in Amarillo's business district at 2909 S Western St,</strong> we understand the unique challenges facing Potter and Randall County property owners. From the historic homes in the Plemons-Eakle neighborhood to modern developments in Wolflin Village, we've repaired thousands of roofs throughout our service area including Canyon, Bushland, Happy, Wildorado, and surrounding communities.
        </p>
      </div>

      <section className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Amarillo Weather Impact on Roofing Systems</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🌨️</div>
            <h3 className="font-bold mb-2">Hail Damage</h3>
            <p className="text-sm">Amarillo receives an average of 35+ hail days annually, with quarter-sized to golf ball-sized hail common during spring and early summer storms.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💨</div>
            <h3 className="font-bold mb-2">Wind Damage</h3>
            <p className="text-sm">High winds averaging 13.5 mph with gusts exceeding 58 mph cause shingle blow-offs and structural stress throughout the year.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌡️</div>
            <h3 className="font-bold mb-2">Temperature Extremes</h3>
            <p className="text-sm">Dramatic temperature swings from 105°F to -10°F cause expansion/contraction damage to roofing materials and flashing.</p>
          </div>
        </div>
      </section>

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
              <li><strong>tarping:</strong> Immediate protection while scheduling permanent repairs</li>
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

      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">2025 Roof Repair Pricing Guide for Amarillo</h2>
        <p className="text-lg mb-6 text-center">
          Transparent pricing based on current Amarillo market rates and material costs. Prices may vary based on roof accessibility, damage extent, and material selection.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="pricing-card">
            <h3 className="pricing-title">Minor Leak Repairs</h3>
            <div className="pricing-amount">$185 - $450</div>
            <ul className="pricing-features">
              <li>Single penetration seal</li>
              <li>Flashing repair (small area)</li>
              <li>Vent boot replacement</li>
              <li>Caulk and seal work</li>
              <li>Up to 3 shingle replacement</li>
            </ul>
          </div>
          
          <div className="pricing-card">
            <h3 className="pricing-title">Moderate Damage</h3>
            <div className="pricing-amount">$650 - $1,850</div>
            <ul className="pricing-features">
              <li>Storm damage repair</li>
              <li>Multiple shingle replacement</li>
              <li>Chimney flashing repair</li>
              <li>Valley metal replacement</li>
              <li>Skylight resealing</li>
            </ul>
          </div>
          
          <div className="pricing-card">
            <h3 className="pricing-title">Major Repair Work</h3>
            <div className="pricing-amount">$2,200 - $8,500</div>
            <ul className="pricing-features">
              <li>Hail damage restoration</li>
              <li>Large section replacement</li>
              <li>Structural deck repair</li>
              <li>Complete valley rebuild</li>
              <li>Multi-area storm damage</li>
            </ul>
          </div>
          
          <div className="pricing-card">
            <h3 className="pricing-title">Storm Damage Services</h3>
            <div className="pricing-amount">$350 - $1,200</div>
            <ul className="pricing-features">
              <li>response available</li>
              <li>tarping</li>
              <li>Temporary leak stoppage</li>
              <li>Same-day assessment</li>
              <li>Weekend & holiday service</li>
            </ul>
          </div>
          
          <div className="pricing-card">
            <h3 className="pricing-title">Commercial Repairs</h3>
            <div className="pricing-amount">$450 - $15,000+</div>
            <ul className="pricing-features">
              <li>Flat roof membrane repair</li>
              <li>HVAC penetration sealing</li>
              <li>Parapet wall flashing</li>
              <li>Drain system repair</li>
              <li>TPO/EPDM patching</li>
            </ul>
          </div>
          
          <div className="pricing-card">
            <h3 className="pricing-title">Insurance Claims</h3>
            <div className="pricing-amount">Deductible Only</div>
            <ul className="pricing-features">
              <li>Full claim documentation</li>
              <li>Adjuster meeting attendance</li>
              <li>Supplement negotiation</li>
              <li>Code upgrade coverage</li>
              <li>Claim process management</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-brand-gold p-6">
          <h4 className="font-bold mb-2">💰 Factors Affecting Repair Costs in Amarillo:</h4>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            <li><strong>Material Costs:</strong> 15% higher than national average due to transport costs</li>
            <li><strong>Labor Rates:</strong> $65-95/hour for skilled roofers (vs $45-75 statewide)</li>
            <li><strong>Weather Windows:</strong> Limited fall/spring work periods increase demand</li>
            <li><strong>Insurance Claims:</strong> High volume after storm seasons affects pricing</li>
            <li><strong>Access Difficulty:</strong> Multi-story homes and steep pitches add 20-40%</li>
            <li><strong>Material Matching:</strong> Discontinued shingles may require premium sourcing</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Local Market Analysis: Amarillo Roofing Trends 2025</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-brown">Market Demand Factors</h3>
            <ul className="space-y-3">
              <li><strong>Population Growth:</strong> Amarillo metro area grew 8.2% since 2020, increasing housing demand</li>
              <li><strong>Home Age:</strong> 47% of homes built before 1980 need roof upgrades or repairs</li>
              <li><strong>Storm Frequency:</strong> 2024 saw record hail events, driving repair demand up 34%</li>
              <li><strong>Energy Efficiency:</strong> Rising utility costs fuel demand for reflective roofing repairs</li>
              <li><strong>Insurance Requirements:</strong> New wind-resistant standards drive upgrade repairs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-brown">Cost Comparison: Amarillo vs Regional</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Basic Shingle Repair</span>
                <span className="font-bold">$12-18/sq ft</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Lubbock Market</span>
                <span className="text-green-600">$10-15/sq ft</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Dallas Market</span>
                <span className="text-red-600">$15-22/sq ft</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Material Delivery</span>
                <span>7-14 days</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Peak Season Wait</span>
                <span className="text-red-600">3-6 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Amarillo-Specific Repair Considerations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3 text-brand-brown">Historic District Regulations</h3>
            <p className="text-sm mb-3">Properties in Amarillo's historic districts require special permitting and material matching requirements.</p>
            <ul className="text-sm space-y-1">
              <li>• Historic preservation compliance</li>
              <li>• Original material matching when possible</li>
              <li>• City permit requirements</li>
              <li>• Architectural review board approval</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 text-brand-brown">Wind Zone Requirements</h3>
            <p className="text-sm mb-3">Amarillo is in Wind Zone II, requiring enhanced fastening and wind-resistant materials for all repairs.</p>
            <ul className="text-sm space-y-1">
              <li>• 6 nails per shingle minimum</li>
              <li>• Enhanced edge securement</li>
              <li>• Wind-resistant underlayment</li>
              <li>• Proper fastener penetration depths</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 text-brand-brown">Insurance Considerations</h3>
            <p className="text-sm mb-3">High claim frequency in Amarillo affects coverage and requires careful documentation.</p>
            <ul className="text-sm space-y-1">
              <li>• Detailed photo documentation</li>
              <li>• Pre-loss condition evidence</li>
              <li>• Code upgrade coverage verification</li>
              <li>• Depreciation recovery assistance</li>
            </ul>
          </div>
        </div>
      </section>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Comprehensive Roof Repair Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">storm response & Initial Assessment</h3>
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
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Storm Response</h3>
              <p className="mb-4">
                We understand that roof emergencies don't wait for convenient times. We offer rapid response for <a href="/storm-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">storm damage</a> and urgent leaks, often providing same-day tarping and next-day permanent repairs.
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
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa storm repairs</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roof Repairs</a>
          <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">• Roof Replacement</a>
          <a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">• Free Roof Inspections</a>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Recent Amarillo Roof Repair Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 border-brand-gold pl-6">
            <h3 className="text-lg font-bold mb-2">Wolflin Village Hail Damage - March 2024</h3>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Challenge:</strong> 2,400 sq ft home sustained severe hail damage with 80% shingle impact and multiple skylight leaks.
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Solution:</strong> Complete roof restoration with Class 4 impact-resistant shingles, new skylights, and enhanced flashing system.
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Insurance Claim:</strong> $18,500 approved claim with minimal homeowner expense beyond deductible.
            </p>
            <p className="text-sm font-semibold text-green-600">Timeline: 3 days completion during favorable weather window</p>
          </div>
          
          <div className="border-l-4 border-brand-gold pl-6">
            <h3 className="text-lg font-bold mb-2">Historic Downtown Commercial - August 2024</h3>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Challenge:</strong> 1920s brick building with leaking TPO membrane and HVAC penetration failures.
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Solution:</strong> Membrane restoration with new penetration seals, parapet flashing upgrade, and preventive maintenance plan.
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Historic Compliance:</strong> All work approved by Amarillo Historic Preservation Commission.
            </p>
            <p className="text-sm font-semibold text-green-600">Result: Zero leaks through entire 2024 storm season</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Amarillo Roof Repairs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Q: How quickly can you respond to storm damage repairs in Amarillo?</h3>
              <p className="text-sm">A: We provide prompt response throughout Amarillo, Canyon, and Bushland. Same-day tarping is available, with permanent repairs typically scheduled within 48-72 hours depending on weather and damage extent.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Q: Will insurance cover my hail damage repair costs?</h3>
              <p className="text-sm">A: Most standard homeowner policies cover hail damage repairs. We work directly with your insurance company, provide detailed documentation, attend adjuster meetings, and help ensure you receive full coverage for both repairs and code upgrades.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Q: How do I know if my roof can be repaired vs needs replacement?</h3>
              <p className="text-sm">A: Our free inspection evaluates damage extent, roof age, and cost-effectiveness. Generally, if repair costs exceed 30% of replacement value or structural damage is present, replacement may be more economical.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Q: What's the typical timeline for roof repairs in Amarillo?</h3>
              <p className="text-sm">A: Minor repairs (1-5 shingles): Same day. Moderate repairs (partial sections): 1-3 days. Major repairs (large areas): 3-7 days. Timeline depends on weather, material availability, and damage complexity.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Q: Do you offer financing for larger repair projects?</h3>
              <p className="text-sm">A: Yes, we offer financing options through approved lenders for repairs over $2,500. Options include 0% interest for 12 months and extended payment plans with competitive rates for qualified customers.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Q: Can you match existing shingles on older roofs?</h3>
              <p className="text-sm">A: We maintain relationships with multiple suppliers to source discontinued or specialty shingles. When exact matches aren't available, we provide closest alternatives and can arrange strategic partial replacement for aesthetic consistency.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Q: What warranty do you provide on repair work?</h3>
              <p className="text-sm">A: All repair work includes our 5-year workmanship warranty. Material warranties vary by manufacturer (typically 10-50 years). storm repairs include 90-day temporary warranty until permanent repairs are completed.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Q: Do you service rural areas around Amarillo?</h3>
              <p className="text-sm">A: Yes, we service a 50-mile radius including Canyon, Happy, Wildorado, Vega, Claude, and other rural Potter/Randall County areas. Travel charges may apply for locations beyond our standard service area.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Our Service Guarantee & Warranty Information</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">5</span>
            </div>
            <h3 className="font-bold mb-2">5-Year Workmanship Warranty</h3>
            <p className="text-sm">All repair work backed by our comprehensive workmanship guarantee covering installation defects and material application.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="font-bold mb-2">Licensed & Bonded</h3>
            <p className="text-sm">Texas RRC license, $2M liability insurance, and bonded for your protection. All permits and inspections included.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💯</span>
            </div>
            <h3 className="font-bold mb-2">100% Satisfaction Promise</h3>
            <p className="text-sm">If you're not completely satisfied with our repair work, we'll return to make it right at no additional cost.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Seasonal Repair Planning for Amarillo Properties</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <h3 className="font-bold mb-3 text-brand-brown">🌸 Spring (Mar-May)</h3>
            <ul className="text-sm space-y-1 text-left">
              <li>• Post-winter inspection</li>
              <li>• Hail season preparation</li>
              <li>• Preventive maintenance</li>
              <li>• Insurance claim filing peak</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-3 text-brand-brown">☀️ Summer (Jun-Aug)</h3>
            <ul className="text-sm space-y-1 text-left">
              <li>• Peak repair season</li>
              <li>• Material availability best</li>
              <li>• Extended daylight hours</li>
              <li>• Heat stress evaluation</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-3 text-brand-brown">🍂 Fall (Sep-Nov)</h3>
            <ul className="text-sm space-y-1 text-left">
              <li>• Winter preparation repairs</li>
              <li>• Gutter cleaning/repair</li>
              <li>• Ideal weather conditions</li>
              <li>• Pre-holiday completion</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-3 text-brand-brown">❄️ Winter (Dec-Feb)</h3>
            <ul className="text-sm space-y-1 text-left">
              <li>• Planning for spring work</li>
              <li>• Material pre-ordering</li>
              <li>• Interior damage assessment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Storm Damage Roof Repairs in Amarillo?</h2>
        <p className="cta-text">
          Don't wait for a small leak to become major water damage. Call 5 Star Commercial Roofing now for fast, professional <a href="/roof-repair-services-in-amarillo/" className="text-white hover:underline">roof repairs</a> in Amarillo. <a href="/roof-inspections-in-amarillo/" className="text-white hover:underline">Free inspections</a>, storm response, and insurance claim assistance available. Serving Amarillo and the entire Texas Panhandle since 2014.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg">
            📞 Call (806) 622-6041 Now
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown text-lg">
            Request prompt service
          </a>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white text-sm">
            <strong>Service Area:</strong> Amarillo • Canyon • Bushland • Happy • Wildorado • Vega • Claude • Potter County • Randall County
          </p>
          <p className="text-white text-sm mt-2">
            <strong>Business Hours:</strong> Mon-Sat 7:00 AM - 7:00 PM | <strong>prompt service:</strong>/365
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
