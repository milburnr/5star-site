import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roof-repair-services-in-amarillo/' },
  title: 'Roof Repair Amarillo TX | 5 Star Roofing',
  description: 'Trusted roof repair services in Amarillo TX since 2014. Emergency storm damage repair, hail damage restoration, leak repair, insurance claims assistance. Licensed, bonded, insured. Free estimates, prompt response throughout Potter & Randall Counties.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Repair",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109"
      },
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
    },
    "areaServed": [
      {"@type": "City", "name": "Amarillo"},
      {"@type": "City", "name": "Canyon"},
      {"@type": "City", "name": "Bushland"}
    ],
    "description": "Professional roof repair services in Amarillo, Texas. Emergency leak repair, hail damage repair, shingle replacement, and storm damage restoration."
  };

  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Repair Services",
                      "url": "/roof-repair-services/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-repair-services-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-services-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/roof-repair-services-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Amarillo, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <section className="hero-small">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Repair Services in Amarillo, TX</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Fast, reliable roof repair for Amarillo homes and businesses. .</p>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="content-block">
            <h2 className="content-block-title">Expert Roof Repair in Amarillo & West Texas</h2>
            <p className="text-lg mb-4">
              When your <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo roof</a> develops a leak, loses shingles in a windstorm, or suffers <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage</a>, fast professional repair is critical to prevent further damage to your home or business. At 5 Star Commercial Roofing, we've been Amarillo's trusted roof repair specialists for over a decade, handling everything from emergency leak repairs to comprehensive storm damage restoration across the Texas Panhandle.
            </p>
            <p className="text-lg mb-4">
              Amarillo sits at 3,605 feet elevation in the heart of the Texas Panhandle, creating unique weather challenges that few roofing companies truly understand. The city experiences an average of 8-12 severe hailstorms annually, with supercell thunderstorms producing hail up to softball-size. Combined with Panhandle winds regularly exceeding 70 mph, temperature extremes from -23°F to 108°F, and intense UV radiation at elevation, Amarillo roofing systems face some of Texas's most demanding conditions.
            </p>
            <p className="text-lg mb-4">
              Our team understands these specific challenges and provides repairs engineered for Texas Panhandle conditions. Whether you need <a href="/residential-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">residential roof repair</a> in Southwest Amarillo neighborhoods or commercial roofing services for Panhandle industrial facilities, we respond quickly with solutions that last. From historic homes in the North Heights to modern developments in Wolflin, we've protected thousands of Amarillo properties.
            </p>
            <p className="text-lg mb-6">
              We handle all insurance paperwork for <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">hail and storm damage claims</a>, meet with adjusters on-site, and advocate for the coverage you deserve. Most Amarillo homeowners pay only their insurance deductible for major repairs. Our relationships with all major insurers and understanding of Texas weather patterns help ensure fair settlements.
            </p>
            
            <div className="bg-amber-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Amarillo Weather Challenges</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-brand-gold">Hailstorm Capital of Texas</h4>
                  <p className="text-sm text-gray-600">Amarillo experiences more large hail events than any other Texas city, with storms producing hail up to 4+ inches in diameter.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-brand-gold">Panhandle Wind Patterns</h4>
                  <p className="text-sm text-gray-600">Open geography creates sustained winds averaging 14 mph with gusts regularly exceeding 70 mph during storms.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-brand-gold">Extreme Temperature Swings</h4>
                  <p className="text-sm text-gray-600">Daily temperature fluctuations up to 60°F stress roofing materials through rapid expansion and contraction.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-brand-gold">High Altitude UV Exposure</h4>
                  <p className="text-sm text-gray-600">Elevation intensifies solar radiation, accelerating material degradation compared to lower altitude regions.</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Amarillo Neighborhoods We Serve</h3>
            <p className="text-lg mb-6 text-gray-600">
              Our comprehensive roof repair services reach every corner of Amarillo and surrounding Potter and Randall Counties. From the historic North Heights district to growing suburban developments in Southwest Amarillo, we've built lasting relationships through consistent quality and reliable service.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">North Heights Historic District</h4>
                <p className="text-gray-600 text-sm mb-3">Heritage homes requiring specialized restoration and preservation techniques.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Historical accuracy preservation</li>
                  <li>• Period-appropriate materials</li>
                  <li>• Modern performance upgrades</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Southwest Amarillo</h4>
                <p className="text-gray-600 text-sm mb-3">Modern neighborhoods with contemporary roofing systems and materials.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Modern material systems</li>
                  <li>• Energy efficiency focus</li>
                  <li>• HOA compliance assurance</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Wolflin & Established Areas</h4>
                <p className="text-gray-600 text-sm mb-3">Mid-century homes and established neighborhoods throughout Amarillo.</p>
                <ul className="text-xs text-gray-600">
                  <li>• System upgrade opportunities</li>
                  <li>• Material modernization</li>
                  <li>• Insurance claim optimization</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Common Roof Repairs in Amarillo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💧 Leak Repair</h3>
                <p className="text-gray-600 mb-3">Water stains on ceilings, drips during rain, or moisture in the attic indicate roof leaks that need immediate attention. We locate the source using moisture detection equipment and make permanent repairs—not temporary patches.</p>
                <p className="text-sm font-semibold">Common Causes: Damaged flashing, missing shingles, worn valleys, failed sealants</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🌨️ Hail Damage Repair</h3>
                <p className="text-gray-600 mb-3">Baseball-sized hail common in Amarillo can crack shingles, knock off granules, and create bruising that leads to leaks. Our certified inspectors document all damage for insurance claims and restore your roof to pre-storm condition.</p>
                <p className="text-sm font-semibold">Timeline: Most repairs completed in 1-2 days after approval</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💨 Wind Damage Repair</h3>
                <p className="text-gray-600 mb-3">High winds blow off shingles, lift roof edges, and damage flashing. Wind damage often goes unnoticed until leaks develop. We inspect your entire roof after windstorms and replace all damaged materials.</p>
                <p className="text-sm font-semibold">Prevention: Proper installation with 6-nail pattern prevents most wind damage</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🔧 Flashing Repair</h3>
                <p className="text-gray-600 mb-3">Flashing around chimneys, vents, skylights, and valleys is the #1 source of roof leaks. We fabricate custom metal flashing and install it properly with appropriate underlayment and sealants.</p>
                <p className="text-sm font-semibold">Materials: Galvanized steel, aluminum, or copper flashing depending on application</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">📏 Valley Repair</h3>
                <p className="text-gray-600 mb-3">Roof valleys channel massive amounts of water and wear out faster than field shingles. Cracked or separated valley material causes major leaks. We replace worn valleys with premium materials rated for Texas weather.</p>
                <p className="text-sm font-semibold">Upgrade Option: Metal valleys last 50+ years vs. 20 years for shingle valleys</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🏚️ Shingle Replacement</h3>
                <p className="text-gray-600 mb-3">Missing, cracked, or curling shingles compromise your roof's protection. We replace damaged shingles matching your existing roof color and style. For extensive damage, full <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">replacement</a> may be more economical.</p>
                <p className="text-sm font-semibold">Coverage: Individual shingle replacement or full sections as needed</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-red-50 rounded-lg p-8 mb-12 border-l-4 border-red-600">
            <h2 className="text-2xl font-bold mb-4 text-red-800">🚨 Emergency Roof Repair (24/7)</h2>
            <p className="text-lg mb-4">
              When severe storms hit Amarillo or your roof develops sudden leaks, every minute counts. Water damage to interiors, insulation, and possessions can cost thousands of dollars—far more than the roof repair itself.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-bold mb-2">We Provide:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <div>emergency phone answering during storm season</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <div>2-hour response time for emergencies in Amarillo area</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <div>Emergency tarping to stop active leaks immediately</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <div>Temporary repairs to protect property until permanent fix</div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Common Emergencies:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Active roof leaks during rainstorms</li>
                  <li>• Wind damage with exposed roof deck</li>
                  <li>• Tree damage from fallen branches</li>
                  <li>• Hail damage after severe storms</li>
                  <li>• Commercial roof failures affecting operations</li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-6">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4 inline-block">📞 Call (806) 622-6041 for Emergency Service</a>
            </p>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Our Roof Repair Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Free Inspection & Diagnosis</h3>
                <p className="text-gray-600">We thoroughly inspect your roof to identify all damage—not just obvious problems. Using moisture meters and drone photography when needed, we find every issue. Detailed written estimate provided free.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Insurance Documentation</h3>
                <p className="text-gray-600">For storm damage, we photograph all issues, create detailed reports, and file your insurance claim. We meet with adjusters on-site to ensure all damage is properly documented and covered.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Professional Repair</h3>
                <p className="text-gray-600">Our experienced crews complete repairs using premium materials from GAF, Owens Corning, and CertainTeed. We match existing materials whenever possible and warranty all workmanship for 10 years.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Quality Inspection & Cleanup</h3>
                <p className="text-gray-600">Final inspection ensures all work meets our standards. Magnetic sweepers remove nails, all debris is hauled away, and your property is left cleaner than we found it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Amarillo Roof Repair Pricing Guide 2025</h2>
          <p className="text-lg mb-8 text-center text-gray-600">
            Fair, transparent pricing based on current Amarillo market conditions. All estimates include materials, labor, permits, and cleanup.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="pricing-card border rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Basic Leak Repair</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$225-$485</div>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Single leak point repair</li>
                <li>✓ Minor flashing work</li>
                <li>✓ 1-3 shingle replacement</li>
                <li>✓ Penetration resealing</li>
                <li>✓ 2-year workmanship warranty</li>
              </ul>
            </div>
            
            <div className="pricing-card border rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Repair</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$875-$3,200</div>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Multiple damaged areas</li>
                <li>✓ Shingle section replacement</li>
                <li>✓ Flashing reconstruction</li>
                <li>✓ Valley repair/replacement</li>
                <li>✓ Insurance claim assistance</li>
              </ul>
            </div>
            
            <div className="pricing-card border rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Damage Restoration</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$1,850-$12,500</div>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Comprehensive damage assessment</li>
                <li>✓ Impact-resistant upgrades available</li>
                <li>✓ Insurance adjuster meetings</li>
                <li>✓ Full system restoration</li>
                <li>✓ 10-year warranty</li>
              </ul>
            </div>
            
            <div className="pricing-card border rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Commercial Repairs</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$625-$25,000+</div>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Flat roof membrane repair</li>
                <li>✓ HVAC penetration sealing</li>
                <li>✓ Metal roof restoration</li>
                <li>✓ Emergency leak response</li>
                <li>✓ Preventive maintenance plans</li>
              </ul>
            </div>
            
            <div className="pricing-card border rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Repair</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$385-$1,850</div>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ prompt response</li>
                <li>✓ Immediate leak stoppage</li>
                <li>✓ Emergency tarping included</li>
                <li>✓ Same-day service available</li>
                <li>✓ No overtime charges in storm season</li>
              </ul>
            </div>
            
            <div className="pricing-card border rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Preventive Maintenance</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$165-$425</div>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Annual roof inspections</li>
                <li>✓ Gutter cleaning & repair</li>
                <li>✓ Minor leak prevention</li>
                <li>✓ Flashing maintenance</li>
                <li>✓ Seasonal tune-ups</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 rounded">
            <h4 className="font-bold mb-3">💡 Pricing Notes for Amarillo Market:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li><strong>Material Costs:</strong> 10-15% above Texas average due to shipping distance</li>
                <li><strong>Labor Rates:</strong> Competitive at $75-95/hour for certified roofers</li>
                <li><strong>Storm Season:</strong> Prices may increase 15-25% during peak demand</li>
                <li><strong>Insurance Deductibles:</strong> Most customers pay only deductible for storm damage</li>
              </ul>
              <ul className="space-y-2">
                <li><strong>Multi-Story Homes:</strong> Add 20-30% for safety equipment and access</li>
                <li><strong>Historic Properties:</strong> Specialty materials may increase costs 25-40%</li>
                <li><strong>Emergency Response:</strong> No premium charges for service in Amarillo</li>
                <li><strong>Financing Available:</strong> 0% interest for 12 months on repairs over $2,500</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Amarillo Roof Repair Market Analysis 2025</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-brown">Market Trends & Drivers</h3>
              <ul className="space-y-3">
                <li><strong>Population Growth:</strong> Amarillo metro population increased 12.3% since 2020, driving housing demand</li>
                <li><strong>Housing Stock Age:</strong> 52% of homes built before 1985 require roof system updates</li>
                <li><strong>Climate Impact:</strong> Increasing storm severity drives 40% more repair requests annually</li>
                <li><strong>Energy Costs:</strong> Rising utility bills fuel demand for energy-efficient roof upgrades</li>
                <li><strong>Insurance Changes:</strong> New wind-resistance requirements drive compliance repairs</li>
                <li><strong>Commercial Growth:</strong> Industrial expansion creates demand for commercial roofing services</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-brown">Regional Cost Comparison</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span><strong>Amarillo Average</strong></span>
                  <span className="font-bold text-brand-gold">$8.50-12.75/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>Lubbock Market</span>
                  <span className="text-green-600">$7.25-11.50/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>Dallas Market</span>
                  <span className="text-red-600">$12.50-18.75/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>Typical Project Timeline</span>
                  <span>1-5 days</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>Storm Season Delays</span>
                  <span className="text-red-600">2-8 weeks</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>Material Lead Times</span>
                  <span>5-14 days</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded">
                <h4 className="font-bold mb-2">Why Choose Local Amarillo Contractors?</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Understanding of local weather patterns</li>
                  <li>✓ Established relationships with suppliers</li>
                  <li>✓ Knowledge of local building codes</li>
                  <li>✓ Community reputation and accountability</li>
                  <li>✓ Faster response times for emergencies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Advanced Repair Techniques for Amarillo Conditions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Hail-Resistant Upgrades</h3>
              <p className="text-sm text-gray-600 mb-3">
                Amarillo's frequent hailstorms make impact-resistant materials a smart investment. We offer UL 2218 Class 4 shingles that resist hail up to 2 inches.
              </p>
              <ul className="text-sm space-y-1">
                <li>• GAF Timberline HD-Z shingles</li>
                <li>• Owens Corning Duration STORM</li>
                <li>• Insurance discounts up to 30%</li>
                <li>• Enhanced warranty coverage</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Wind-Resistant Installation</h3>
              <p className="text-sm text-gray-600 mb-3">
                High plains winds require enhanced fastening techniques. We exceed manufacturer specifications to ensure your roof withstands Texas Panhandle conditions.
              </p>
              <ul className="text-sm space-y-1">
                <li>• 6-nail pattern on all shingles</li>
                <li>• Sealed starter strip installation</li>
                <li>• Enhanced edge securement</li>
                <li>• Ring-shank nail penetration</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Energy-Efficient Solutions</h3>
              <p className="text-sm text-gray-600 mb-3">
                Amarillo's intense summer heat and winter cold make energy efficiency crucial. Our repair upgrades can significantly reduce utility costs.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Cool roof reflective shingles</li>
                <li>• Enhanced attic ventilation</li>
                <li>• Radiant barrier installation</li>
                <li>• Insulation upgrades during repair</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Customer Success Stories - Amarillo Area</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Southwest Amarillo Storm Repair</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Project:</strong> Complete hail damage restoration after March 2024 supercell thunderstorm
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Challenge:</strong> 90% shingle granule loss, multiple skylight leaks, damaged gutters and flashing
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Solution:</strong> Full roof replacement with GAF Timberline HD-Z impact-resistant shingles, new skylights, and comprehensive storm protection upgrades
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Insurance Outcome:</strong> $24,750 claim approved with supplemental coverage for code upgrades
              </p>
              <p className="text-sm font-semibold text-green-600">Customer paid only $1,500 deductible • Project completed in 4 days</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">North Heights Historic Home</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Project:</strong> Leak repair and preservation upgrade on 1925 historic home
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Challenge:</strong> Multiple leak points, deteriorated clay tiles, historic preservation requirements
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Solution:</strong> Custom clay tile matching, modern underlayment upgrade, enhanced flashing system while maintaining historic appearance
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Compliance:</strong> Full approval from Amarillo Historic Preservation Commission
              </p>
              <p className="text-sm font-semibold text-green-600">Heritage preserved • Modern performance achieved • Leak-free for 18+ months</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Comprehensive Service Area Coverage</h2>
          <p className="text-lg mb-4">
            Professional roof repair services throughout the Texas Panhandle region, with specialized expertise in Amarillo's unique weather challenges:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-bold mb-2 text-brand-brown">Primary Service Area</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon</a></li>
                <li><a href="/bushland-tx-roofing/" className="text-brand-gold hover:underline">• Bushland</a></li>
                <li><a href="/wildorado-tx-roofing/" className="text-brand-gold hover:underline">• Wildorado</a></li>
                <li><a href="/claude-tx-roofing/" className="text-brand-gold hover:underline">• Claude</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-brand-brown">Extended Coverage</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland</a></li>
                <li><a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa</a></li>
                <li><a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock</a></li>
                <li><a href="/big-spring-texas-roofing/" className="text-brand-gold hover:underline">• Big Spring</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-brand-brown">Service Specialties</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">• Emergency Repairs</a></li>
                <li><a href="/hail-damage-repair-amarillo/" className="text-brand-gold hover:underline">• Hail Damage</a></li>
                <li><a href="/storm-damage-repair-amarillo/" className="text-brand-gold hover:underline">• Storm Damage</a></li>
                <li><a href="/commercial-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">• Commercial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-brand-brown">Additional Services</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">• Roof Replacement</a></li>
                <li><a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">• Free Inspections</a></li>
                <li><a href="/gutters-amarillo/" className="text-brand-gold hover:underline">• Gutter Services</a></li>
                <li><a href="/service-areas/" className="text-brand-gold hover:underline">• All Areas</a></li>
              </ul>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Need Roof Repair in Amarillo?</h2>
            <p className="cta-text mb-6">
              Free inspections for all Amarillo homeowners and businesses. . Insurance claims assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4 inline-block bg-white text-brand-brown hover:bg-gray-100">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4 border-2 border-white hover:bg-white hover:text-brand-brown">Request Free Inspection</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
