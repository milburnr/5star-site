import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Amarillo TX | 5 Star Roofing',
  description: 'Premier residential roof replacement in Amarillo TX. Specialized in hail damage claims, Class 4 impact-resistant materials, insurance coverage assistance. 25+ years experience, licensed & bonded. Free estimates, comprehensive warranties on all residential roof replacement projects.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Roof Replacement",
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
    "description": "Complete residential roof replacement services in Amarillo, Texas. Specializing in hail damage replacement, insurance claims, and Class 4 impact-resistant shingles.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "pric​eSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Residential Roof Replacement",
                      "url": "/residential-roof-replacement/"
              },
              {
                      "name": "Amarillo",
                      "url": "/residential-roof-replacement-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roof-replacement-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roof Replacement",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/residential-roof-replacement-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof replacement services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <section className="hero-small">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Roof Replacement in Amarillo</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Complete roof replacement services for Amarillo homes. Hail damage specialists with insurance claim expertise.</p>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="content-block">
            <h2 className="content-block-title">When It's Time to Replace Your Amarillo Roof</h2>
            <p className="text-lg mb-4">
              Amarillo homeowners face unique roofing challenges that often necessitate complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a>. The Texas Panhandle's severe hailstorms, high winds, and extreme temperature fluctuations can damage even the highest-quality roofing materials over time. If your roof is showing signs of significant damage or has reached the end of its service life, replacement—rather than repair—is often the most cost-effective long-term solution.
            </p>
            <p className="text-lg mb-6">
              Most <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofs in Amarillo</a> last 15-25 years depending on materials and weather exposure. However, after severe hailstorms like those common in spring and summer, insurance companies may approve full replacement even for newer roofs if damage is extensive enough. We've helped thousands of Amarillo homeowners navigate the insurance process to get brand new roofs at little to no out-of-pocket cost.
            </p>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Signs You Need Roof Replacement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">⚠️ Age of Roof</h3>
                <p className="text-gray-600">Roofs over 20 years old should be inspected annually. Beyond 25 years, replacement is often more economical than ongoing repairs.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🌨️ Hail Damage</h3>
                <p className="text-gray-600">Baseball-sized hail can bruise or puncture shingles, compromising granule protection. If damage exceeds 8-10 hits per test square, full replacement is typically approved by insurance.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💧 Multiple Leaks</h3>
                <p className="text-gray-600">If you have leaks in several areas, the entire roof system is likely failing. Repairing individual leaks won't address underlying structural issues.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">📉 Missing/Curling Shingles</h3>
                <p className="text-gray-600">Widespread shingle loss, curling, or cupping indicates the roof has reached the end of its lifespan. Patchwork repairs are temporary at best.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🏚️ Sagging Roof Deck</h3>
                <p className="text-gray-600">Any visible sagging or dipping in the roof line indicates serious structural damage requiring immediate replacement.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💰 Energy Bills Rising</h3>
                <p className="text-gray-600">If heating/cooling costs have increased significantly, your roof may no longer provide adequate insulation or ventilation.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-brand-gold-light rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Roofing Materials for Amarillo Homes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Impact-Resistant Asphalt Shingles (Most Popular)</h3>
                <p className="text-gray-700 mb-2">
                  Class 4 impact-resistant shingles are now the standard in Amarillo after major hail events. These shingles feature reinforced construction that withstands hail impacts up to 2 inches in diameter.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>GAF Timberline HDZ:</strong> Lifetime warranty with StrikeGuard hail protection</li>
                  <li><strong>Owens Corning Duration Storm:</strong> SureNail strip for wind resistance up to 130 mph</li>
                  <li><strong>CertainTeed Landmark IR:</strong> Advanced impact resistance with algae protection</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600"><strong>Average Cost:</strong> $8,500-$15,000 for typical 2,000 sq ft home (most homeowners pay only deductible with insurance)</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Standing Seam Metal Roofing (Premium Option)</h3>
                <p className="text-gray-700 mb-2">
                  For maximum durability and hail protection, standing seam metal roofing is increasingly popular in Amarillo. While hail may dent the surface, metal roofs remain watertight and last 50+ years.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>50-70 year lifespan (last roof you'll ever need)</li>
                  <li>Reduces cooling costs 20-30% with reflective coatings</li>
                  <li>Wind resistant to 140+ mph</li>
                  <li>Fire resistant (Class A rating)</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600"><strong>Average Cost:</strong> $15,000-$25,000 for 2,000 sq ft home</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Our Amarillo Roof Replacement Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Free Inspection & Documentation</h3>
                <p className="text-gray-600">We inspect your roof, photograph all damage, measure your home, and create a detailed estimate for your insurance claim—completely free.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Insurance Claim Filing</h3>
                <p className="text-gray-600">We help file your <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage claim</a>, meet with the adjuster on-site, and ensure all damage is properly documented. Most Amarillo homeowners pay only their deductible ($1,000-$2,500).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Material Selection</h3>
                <p className="text-gray-600">Choose your shingle color and style from our selection of Class 4 impact-resistant options. We order all materials and schedule your installation date.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex-items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Complete Tear-Off & Installation (1-2 Days)</h3>
                <p className="text-gray-600">Our experienced crews remove your old roof, inspect/repair the deck, install new underlayment, and install your new shingles. Most Amarillo homes are completed in one day.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex-items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Final Inspection & Cleanup</h3>
                <p className="text-gray-600">We inspect all work, clean your property with magnetic sweepers for nails, haul away old materials, and register your manufacturer's warranty.</p>
              </div>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-4">Insurance Claims for Roof Replacement</h2>
            <p className="text-lg mb-4">
              Most homeowners insurance policies in Amarillo and the Texas Panhandle cover <a href="/hail-damage-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">storm damage roof replacement</a>. After hailstorms, insurance adjusters use the "test square method" to determine if replacement is warranted:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <div><strong>8+ hits per test square:</strong> Full replacement typically approved</div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <div><strong>5-7 hits:</strong> May require additional documentation or supplemental claims</div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <div><strong>Granule loss exceeding 25%:</strong> Often qualifies for replacement</div>
              </li>
            </ul>
            <p className="text-lg">
              We work directly with all major insurance companies and have helped thousands of Amarillo homeowners receive full coverage for their roof replacements. We handle all documentation, meet with adjusters, and fight for the coverage you deserve.
            </p>
          </section>
        </FadeIn>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Residential Roof Replacement Pricing - Amarillo Market 2025</h2>
          <p className="text-lg mb-8 text-center text-gray-600">
            Transparent residential pricing based on current Amarillo market conditions. All projects include complete tear-off, disposal, premium materials, permits, and comprehensive cleanup.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Standard Architectural</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$9,500-$14,200</div>
              <p className="text-sm text-gray-600 mb-4">Quality shingles • 30-year warranty • Basic protection</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Architectural dimensional shingles</li>
                <li>✓ 30-year manufacturer warranty</li>
                <li>✓ Standard synthetic underlayment</li>
                <li>✓ 5-year workmanship warranty</li>
                <li>✓ Complete debris removal</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Typical 1,800-2,200 sq ft home</p>
            </div>
            
            <div className="pricing-card border-2 border-brand-gold rounded-lg p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold">RECOMMENDED</div>
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Class 4 Impact-Resistant</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$12,500-$18,750</div>
              <p className="text-sm text-gray-600 mb-4">Hail protection • Lifetime warranty • Insurance discounts</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Class 4 impact-resistant shingles</li>
                <li>✓ Lifetime manufacturer warranty</li>
                <li>✓ Premium synthetic underlayment</li>
                <li>✓ 10-year workmanship warranty</li>
                <li>✓ Insurance premium discounts up to 35%</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Typical 1,800-2,200 sq ft home</p>
            </div>
            
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Premium Metal Roofing</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$19,500-$32,000</div>
              <p className="text-sm text-gray-600 mb-4">Lifetime solution • Maximum durability • Energy efficient</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Standing seam metal panels</li>
                <li>✓ 50-year paint & panel warranty</li>
                <li>✓ Superior hail resistance</li>
                <li>✓ Lifetime workmanship warranty</li>
                <li>✓ 25-30% energy cost reduction</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Typical 1,800-2,200 sq ft home</p>
            </div>
            
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Luxury Designer Series</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$15,500-$24,500</div>
              <p className="text-sm text-gray-600 mb-4">Premium aesthetics • Enhanced curb appeal • Superior performance</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Designer shingle collections</li>
                <li>✓ Multiple color blends available</li>
                <li>✓ Enhanced dimensional appearance</li>
                <li>✓ Premium algae resistance</li>
                <li>✓ Extended warranty options</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Typical 1,800-2,200 sq ft home</p>
            </div>
            
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Steep Slope Specialty</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$13,500-$21,000</div>
              <p className="text-sm text-gray-600 mb-4">Complex rooflines • Safety premium • Enhanced materials</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Multi-level & steep pitch expertise</li>
                <li>✓ Enhanced safety equipment</li>
                <li>✓ Premium installation techniques</li>
                <li>✓ Complex flashing work included</li>
                <li>✓ Extended project timeline</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Typical 1,800-2,200 sq ft home</p>
            </div>
            
            <div className="pricing-card border-2 border-green-500 rounded-lg p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">INSURANCE CLAIMS</div>
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Coverage</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">Deductible Only</div>
              <p className="text-sm text-gray-600 mb-4">Full insurance claim management</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Complete claim documentation</li>
                <li>✓ Adjuster meeting coordination</li>
                <li>✓ Supplement negotiation</li>
                <li>✓ Code upgrade assistance</li>
                <li>✓ Upgrade to Class 4 materials</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Typical deductible: $1,000-$2,500</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h4 className="font-bold mb-3">💰 Residential Pricing Factors in Amarillo:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li><strong>Home Size:</strong> Square footage determines base cost ($6.50-$14.00/sq ft)</li>
                <li><strong>Roof Complexity:</strong> Hip roofs add 15%, complex rooflines add 25-40%</li>
                <li><strong>Story Height:</strong> Two-story homes add $1.75-$2.50/sq ft for safety</li>
                <li><strong>Material Choice:</strong> Class 4 shingles add $1.50-$2.25/sq ft premium</li>
              </ul>
              <ul className="space-y-2">
                <li><strong>Deck Repair:</strong> Replace damaged decking $4.50-$7.25/sq ft additional</li>
                <li><strong>Permits & Inspection:</strong> City of Amarillo $200-$450 (included in pricing)</li>
                <li><strong>Seasonal Demand:</strong> Spring storm season increases costs 15-25%</li>
                <li><strong>Financing Available:</strong> 0% interest for 18 months, extended terms available</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Amarillo Residential Neighborhoods We Serve</h2>
          <p className="text-lg mb-6 text-gray-600">
            Our comprehensive residential roof replacement services reach every neighborhood in Amarillo and surrounding communities. Each area presents unique challenges and opportunities:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Historic North Heights</h3>
              <p className="text-sm text-gray-600 mb-3">Elegant homes built 1920s-1950s with architectural significance requiring specialized restoration approaches.</p>
              <ul className="text-xs space-y-1">
                <li>• Heritage home preservation expertise</li>
                <li>• Period-appropriate material matching</li>
                <li>• Historic district compliance</li>
                <li>• Architectural review coordination</li>
              </ul>
              <p className="text-sm mt-3 font-semibold">Average Project: $14,500-$22,000</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Wolflin Village & Area</h3>
              <p className="text-sm text-gray-600 mb-3">Established neighborhood with mature trees, custom homes, and strict HOA requirements for aesthetic consistency.</p>
              <ul className="text-xs space-y-1">
                <li>• HOA compliance guarantee</li>
                <li>• Premium material selections</li>
                <li>• Mature landscaping protection</li>
                <li>• Enhanced cleanup protocols</li>
              </ul>
              <p className="text-sm mt-3 font-semibold">Average Project: $13,200-$19,750</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Southwest Amarillo</h3>
              <p className="text-sm text-gray-600 mb-3">Modern developments with contemporary home designs, energy efficiency focus, and newer construction standards.</p>
              <ul className="text-xs space-y-1">
                <li>• Energy-efficient material upgrades</li>
                <li>• Modern installation techniques</li>
                <li>• Builder warranty coordination</li>
                <li>• Smart home integration prep</li>
              </ul>
              <p className="text-sm mt-3 font-semibold">Average Project: $11,800-$17,500</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Plemons-Eakle District</h3>
              <p className="text-sm text-gray-600 mb-3">Mix of historic and renovated homes with tree-lined streets and established community character.</p>
              <ul className="text-xs space-y-1">
                <li>• Neighborhood character preservation</li>
                <li>• Tree protection measures</li>
                <li>• Community aesthetic compliance</li>
                <li>• Property value enhancement focus</li>
              </ul>
              <p className="text-sm mt-3 font-semibold">Average Project: $12,500-$18,200</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Tascosa & Suburbs</h3>
              <p className="text-sm text-gray-600 mb-3">Growing suburban areas with family homes, newer construction, and modern amenity expectations.</p>
              <ul className="text-xs space-y-1">
                <li>• Family-focused project management</li>
                <li>• Minimal disruption schedules</li>
                <li>• Child & pet safety protocols</li>
                <li>• Warranty service accessibility</li>
              </ul>
              <p className="text-sm mt-3 font-semibold">Average Project: $10,900-$16,400</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Rural Amarillo Properties</h3>
              <p className="text-sm text-gray-600 mb-3">Larger properties, ranch homes, and rural residential requiring specialized logistics and approach.</p>
              <ul className="text-xs space-y-1">
                <li>• Extended service area coverage</li>
                <li>• Large property logistics</li>
                <li>• Agricultural consideration</li>
                <li>• Extended timeline flexibility</li>
              </ul>
              <p className="text-sm mt-3 font-semibold">Average Project: $13,500-$21,000+</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Residential Market Analysis & Home Value Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-brown">Amarillo Real Estate Impact</h3>
              <ul className="space-y-3">
                <li><strong>Property Value Increase:</strong> New roofs add $18,000-$28,000 to home values in Amarillo market</li>
                <li><strong>ROI on Investment:</strong> 75-85% return on investment for roof replacement</li>
                <li><strong>Selling Advantage:</strong> Homes with new roofs sell 23% faster than comparable properties</li>
                <li><strong>Insurance Benefits:</strong> Class 4 materials qualify for 20-35% premium discounts</li>
                <li><strong>Energy Savings:</strong> Properly installed roofs reduce energy costs 15-25% annually</li>
                <li><strong>Warranty Transfer:</strong> Transferable warranties add appeal to potential buyers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-brown">Market Timing Considerations</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-bold mb-2">🌸 Spring (March-May)</h4>
                  <p className="text-sm">Post-storm season • High demand • Insurance claim peak • 3-8 week wait times</p>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-bold mb-2">☀️ Summer (June-August)</h4>
                  <p className="text-sm">Peak construction season • Best material availability • Optimal weather • Premium pricing</p>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-bold mb-2">🍂 Fall (September-November)</h4>
                  <p className="text-sm">Ideal conditions • Lower demand • Best pricing • 1-3 week scheduling</p>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-bold mb-2">❄️ Winter (December-February)</h4>
                  <p className="text-sm">Limited work windows • Emergency only • Planning season • Material pre-orders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Comprehensive Warranty & Protection Plan</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">10</span>
              </div>
              <h3 className="font-bold mb-3">10-Year Workmanship</h3>
              <p className="text-sm text-gray-600">Comprehensive labor warranty covering all installation aspects, leak-free guarantee, and proper material application.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🏠</span>
              </div>
              <h3 className="font-bold mb-3">Manufacturer Warranties</h3>
              <p className="text-sm text-gray-600">GAF System Plus, Owens Corning Platinum, and CertainTeed Integrity warranties up to lifetime coverage.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="font-bold mb-3">24/7 Emergency Response</h3>
              <p className="text-sm text-gray-600">Emergency service guarantee for any warranty-covered issues within 24 hours of contact.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold mb-3">Extended Protection Benefits:</h4>
              <ul className="text-sm space-y-2">
                <li>✓ Transferable warranty for home sales</li>
                <li>✓ Annual inspection reminders</li>
                <li>✓ Priority scheduling for warranty service</li>
                <li>✓ Preventive maintenance recommendations</li>
                <li>✓ Insurance claim assistance throughout warranty</li>
                <li>✓ Material upgrade opportunities</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold mb-3">Service Guarantee Commitments:</h4>
              <ul className="text-sm space-y-2">
                <li>✓ Licensed, bonded, and insured crew</li>
                <li>✓ $2M+ general liability coverage</li>
                <li>✓ Workers' compensation for all employees</li>
                <li>✓ Better Business Bureau A+ rating</li>
                <li>✓ Texas RRC contractor certification</li>
                <li>✓ Manufacturer certified installation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Customer Success Stories - Residential Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brand-gold pl-6">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Wolflin Village Hail Damage Replacement</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Project Details:</strong> 2,850 sq ft two-story home with complex hip roof design and multiple dormers
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Challenge:</strong> Severe hail damage from April 2024 storm with HOA architectural compliance requirements
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Solution:</strong> Complete replacement with GAF Timberline HDZ in Pewter Gray, matching neighborhood aesthetic while upgrading to Class 4 protection
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Insurance Outcome:</strong> $28,750 claim approved with code upgrade allowances
              </p>
              <p className="text-sm font-semibold text-green-600">Customer Investment: $2,500 deductible | Timeline: 2 days | Follow-up: Perfect performance through subsequent storms</p>
            </div>
            
            <div className="border-l-4 border-brand-gold pl-6">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Southwest Amarillo Energy Upgrade</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Project Details:</strong> 1,950 sq ft ranch home built in 1995 with rising energy costs
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Challenge:</strong> Original roof nearing end of life with inadequate insulation and ventilation
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Solution:</strong> Complete replacement with Owens Corning Duration STORM, enhanced ventilation system, and radiant barrier upgrade
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Investment:</strong> $16,750 total project cost with energy efficiency financing
              </p>
              <p className="text-sm font-semibold text-green-600">Results: 28% reduction in energy costs | Increased home value $19,500 | Customer savings: $185/month</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Complete Amarillo Area Service Coverage</h2>
          <p className="text-lg mb-6">
            Expert residential roof replacement services throughout the Texas Panhandle, with deep understanding of local weather patterns, building codes, and insurance requirements:
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-brand-brown">Amarillo Metro</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">• Downtown Amarillo</a></li>
                <li><a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon</a></li>
                <li><a href="/bushland-tx-roofing/" className="text-brand-gold hover:underline">• Bushland</a></li>
                <li><a href="/happy-tx-roofing/" className="text-brand-gold hover:underline">• Happy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-brand-brown">Panhandle Towns</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/borger-texas-roofing/" className="text-brand-gold hover:underline">• Borger</a></li>
                <li><a href="/pampa-texas-roofing/" className="text-brand-gold hover:underline">• Pampa</a></li>
                <li><a href="/dumas-texas-roofing/" className="text-brand-gold hover:underline">• Dumas</a></li>
                <li><a href="/perryton-texas-roofing/" className="text-brand-gold hover:underline">• Perryton</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-brand-brown">West Texas Cities</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock</a></li>
                <li><a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland</a></li>
                <li><a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa</a></li>
                <li><a href="/big-spring-texas-roofing/" className="text-brand-gold hover:underline">• Big Spring</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-brand-brown">Service Specialties</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/hail-damage-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">• Hail Damage Claims</a></li>
                <li><a href="/metal-roofing-amarillo/" className="text-brand-gold hover:underline">• Metal Roofing</a></li>
                <li><a href="/roof-inspections-amarillo/" className="text-brand-gold hover:underline">• Free Inspections</a></li>
                <li><a href="/emergency-roof-repair-amarillo/" className="text-brand-gold hover:underline">• Emergency Service</a></li>
              </ul>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready for a New Roof?</h2>
            <p className="cta-text mb-6">
              Free inspections and insurance claim assistance for all Amarillo homeowners. Most customers pay only their insurance deductible.
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
