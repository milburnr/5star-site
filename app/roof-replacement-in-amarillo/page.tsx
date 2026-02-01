import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Complete Roof Replacement Amarillo TX | Class 4 Impact Resistant Shingles | Insurance Claims | 5 Star',
  description: 'Premier roof replacement contractor in Amarillo TX. Class 4 impact-resistant shingles, storm damage coverage, insurance claim specialists. 25+ years experience, licensed & bonded. Free estimates, premium warranties on all roof replacement projects.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Replacement",
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
    "description": "Professional roof replacement services in Amarillo, Texas. Residential and commercial roof replacement with Class 4 impact-resistant materials and insurance claim assistance."
  };

  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Replacement",
                      "url": "/roof-replacement/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-replacement-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero-small">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Replacement in Amarillo, TX</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Complete roof replacement for homes and businesses. Class 4 impact-resistant shingles. Insurance claim experts.</p>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="content-block">
            <h2 className="content-block-title">Amarillo's Premier Roof Replacement Contractor</h2>
            <p className="text-lg mb-4">
              When your <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo roof</a> reaches the end of its lifespan or suffers extensive storm damage, complete roof replacement is the smart long-term solution. At 5 Star Commercial Roofing, we've replaced thousands of roofs across the Texas Panhandle over the past 25+ years—from small residential homes to large commercial buildings spanning 100,000+ square feet.
            </p>
            <p className="text-lg mb-4">
              The Texas Panhandle's brutal climate—with annual <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hailstorms</a>, sustained winds over 50 mph, and temperature swings exceeding 115 degrees—demands roofing systems built to last. We exclusively install Class 4 impact-resistant materials designed to withstand baseball-sized hail, extreme UV exposure, and the freeze-thaw cycles that destroy standard roofing systems.
            </p>
            <p className="text-lg mb-6">
              Most importantly, we're insurance claim experts. After major hailstorms, we help thousands of Amarillo homeowners and businesses navigate the claims process, meet with adjusters, and secure full coverage for roof replacement—often at only the cost of your deductible. We handle all paperwork, documentation, and negotiations with insurance companies.
            </p>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Signs You Need Roof Replacement</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">⏰ Age Over 20 Years</h3>
                <p className="text-gray-600">Most Amarillo roofs last 15-25 years depending on material quality and weather exposure. If your roof is approaching or exceeding this age, replacement is more economical than ongoing repairs.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🌨️ Severe Hail Damage</h3>
                <p className="text-gray-600">After major hailstorms with baseball-sized hail, insurance companies typically approve full replacement if damage exceeds 8-10 hits per test square. We document all damage for your claim.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💧 Multiple Leak Areas</h3>
                <p className="text-gray-600">If you have leaks in multiple locations across your roof, the entire system is likely failing. Patchwork repairs are temporary—replacement addresses the root problem.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">📉 Missing/Curling Shingles</h3>
                <p className="text-gray-600">Widespread shingle loss, curling, cupping, or granule loss indicates end-of-life. Wind and hail will continue damaging aging shingles faster than you can repair them.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🏚️ Sagging Roof Deck</h3>
                <p className="text-gray-600">Any visible sagging, dipping, or uneven roof lines indicate serious structural damage. This requires immediate replacement to prevent potential collapse.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💰 Rising Energy Bills</h3>
                <p className="text-gray-600">Dramatically increased heating/cooling costs often indicate your roof no longer provides adequate insulation or ventilation. New roofs with proper insulation reduce energy costs 20-30%.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-brand-gold-light rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Roofing Materials for Amarillo Climate</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Class 4 Impact-Resistant Asphalt Shingles (Most Popular)</h3>
                <p className="text-gray-700 mb-3">
                  After years of devastating hailstorms, Class 4 impact-resistant shingles have become the standard for smart Amarillo homeowners. These reinforced shingles withstand hail up to 2 inches in diameter and qualify for significant insurance discounts.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-3">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">GAF Timberline HDZ</h4>
                    <p className="text-sm text-gray-600">Lifetime warranty with StrikeGuard protection. Wind resistance to 130 mph. 12 color options.</p>
                    <p className="text-sm font-semibold mt-2">$8,500-$12,000 (typical 2,000 sq ft home)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">Owens Corning Duration Storm</h4>
                    <p className="text-sm text-gray-600">SureNail strip for superior wind resistance. Algae-resistant. 15 designer colors.</p>
                    <p className="text-sm font-semibold mt-2">$9,000-$13,000 (typical home)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">CertainTeed Landmark IR</h4>
                    <p className="text-sm text-gray-600">Advanced impact resistance. StreakFighter algae protection. 18 color blends.</p>
                    <p className="text-sm font-semibold mt-2">$9,500-$14,000 (typical home)</p>
                  </div>
                </div>
                <p className="text-sm text-brand-brown font-semibold">
                  💰 With insurance claims, most Amarillo homeowners pay only their deductible ($1,000-$2,500)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Standing Seam Metal Roofing (Premium Option)</h3>
                <p className="text-gray-700 mb-3">
                  For maximum durability and the last roof you'll ever install, standing seam metal roofing is increasingly popular in Amarillo. While hail may dent the surface, metal roofs remain 100% watertight and last 50-70 years.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2">
                  <li><strong>Lifespan:</strong> 50-70 years (literally the last roof you'll ever need)</li>
                  <li><strong>Energy Savings:</strong> Reflective coatings reduce cooling costs 20-30%</li>
                  <li><strong>Wind Resistance:</strong> 140+ mph (far exceeds Amarillo requirements)</li>
                  <li><strong>Fire Rating:</strong> Class A (best available, lowers insurance premiums)</li>
                  <li><strong>Hail Performance:</strong> Dents don't affect waterproofing</li>
                  <li><strong>Warranty:</strong> 40-50 year paint and panel warranties standard</li>
                </ul>
                <p className="text-sm font-semibold">Average Cost: $15,000-$25,000 for 2,000 sq ft home</p>
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
                <p className="text-gray-600">Complete roof inspection with drone photography, moisture detection, and detailed damage assessment. We create comprehensive reports for insurance claims—completely free with no obligation.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Insurance Claim Filing & Negotiation</h3>
                <p className="text-gray-600">We file your insurance claim, meet with the adjuster on-site, and ensure all damage is properly documented. If initial estimates are low, we file supplements to get full coverage. Most Amarillo homeowners pay only their deductible.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Material Selection</h3>
                <p className="text-gray-600">Choose your shingle color, style, and warranty level from our selection of Class 4 impact-resistant options. We order all materials and schedule your installation for optimal weather conditions.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Complete Tear-Off & Installation</h3>
                <p className="text-gray-600">Full removal of old roofing materials, inspection and repair of roof deck, installation of premium underlayment, and installation of your new roof system. Most Amarillo homes completed in 1-2 days.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Final Inspection & Cleanup</h3>
                <p className="text-gray-600">Quality inspection of all work, thorough cleanup with magnetic sweepers for nails, haul away all old materials, and register your manufacturer's warranty. Your property left cleaner than we found it.</p>
              </div>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-4">Insurance Claims for Roof Replacement</h2>
            <p className="text-lg mb-4">
              Most homeowners insurance policies in Amarillo and the Texas Panhandle cover <a href="/hail-damage-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">storm damage roof replacement</a>. After hailstorms, insurance adjusters use the "test square method":
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div><strong>8+ hits per test square:</strong> Full replacement typically approved immediately</div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div><strong>5-7 hits:</strong> May require additional documentation or supplement claims</div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div><strong>Granule loss &gt;25%:</strong> Often qualifies for replacement even without visible impacts</div>
              </li>
            </ul>
            <p className="text-lg">
              We work directly with all major insurance companies including State Farm, Allstate, USAA, Farmers, and Liberty Mutual. We've helped thousands of Amarillo property owners receive full coverage for roof replacements.
            </p>
          </section>
        </FadeIn>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">2025 Roof Replacement Pricing Guide - Amarillo Market</h2>
          <p className="text-lg mb-8 text-center text-gray-600">
            Complete pricing transparency based on current Amarillo market rates, material costs, and labor availability. All projects include tear-off, disposal, premium underlayment, and cleanup.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Basic 3-Tab Shingles</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$8,500-$12,000</div>
              <p className="text-sm text-gray-600 mb-4">Standard quality • 20-year warranty</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Basic architectural shingles</li>
                <li>✓ 30-year manufacturer warranty</li>
                <li>✓ Standard underlayment</li>
                <li>✓ 5-year workmanship warranty</li>
                <li>✓ Complete tear-off & disposal</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Average 2,000 sq ft home</p>
            </div>
            
            <div className="pricing-card border-2 border-brand-gold rounded-lg p-6 text-center">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Class 4 Impact-Resistant</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$11,500-$16,500</div>
              <p className="text-sm text-gray-600 mb-4">Premium quality • Hail protection • Insurance discounts</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Class 4 impact-resistant shingles</li>
                <li>✓ Lifetime manufacturer warranty</li>
                <li>✓ Premium synthetic underlayment</li>
                <li>✓ 10-year workmanship warranty</li>
                <li>✓ Insurance premium discounts up to 30%</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Average 2,000 sq ft home</p>
            </div>
            
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Standing Seam Metal</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$18,000-$28,000</div>
              <p className="text-sm text-gray-600 mb-4">Premium lifetime solution • Maximum durability</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ 26-gauge steel or aluminum</li>
                <li>✓ 50-year paint & panel warranty</li>
                <li>✓ Energy-efficient coating</li>
                <li>✓ Lifetime workmanship warranty</li>
                <li>✓ Last roof you'll ever need</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Average 2,000 sq ft home</p>
            </div>
            
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Luxury Designer Series</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$14,500-$22,000</div>
              <p className="text-sm text-gray-600 mb-4">Architectural styles • Enhanced curb appeal</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Designer color collections</li>
                <li>✓ Enhanced dimensional appearance</li>
                <li>✓ Premium algae resistance</li>
                <li>✓ Extended warranty coverage</li>
                <li>✓ Class 4 impact protection available</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Average 2,000 sq ft home</p>
            </div>
            
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Commercial TPO/EPDM</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$4.50-$8.75/sq ft</div>
              <p className="text-sm text-gray-600 mb-4">Flat roof membrane systems • Energy efficient</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ TPO or EPDM membrane</li>
                <li>✓ 20-year manufacturer warranty</li>
                <li>✓ Energy Star qualified options</li>
                <li>✓ Hail-resistant formulations</li>
                <li>✓ Professional installation crew</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*Per square foot installed</p>
            </div>
            
            <div className="pricing-card border-2 border-green-500 rounded-lg p-6 text-center">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">INSURANCE CLAIMS</div>
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Replacement</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">Deductible Only</div>
              <p className="text-sm text-gray-600 mb-4">Most homeowners pay only their deductible</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Complete insurance claim filing</li>
                <li>✓ Adjuster meeting attendance</li>
                <li>✓ Supplement negotiation included</li>
                <li>✓ Code upgrade coverage assistance</li>
                <li>✓ Upgrade to Class 4 materials</li>
              </ul>
              <p className="text-xs mt-3 text-gray-500">*After $1,000-$2,500 deductible</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h4 className="font-bold mb-3">💡 Amarillo Roof Replacement Cost Factors:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li><strong>Roof Complexity:</strong> Simple gable +$0 | Hip roof +15% | Multiple levels +25-40%</li>
                <li><strong>Material Transport:</strong> Amarillo pricing 8-12% above Texas average due to distance</li>
                <li><strong>Seasonal Demand:</strong> Spring storm season increases prices 15-25%</li>
                <li><strong>Permit Costs:</strong> City of Amarillo permits typically $150-$350 (included in price)</li>
              </ul>
              <ul className="space-y-2">
                <li><strong>Accessibility:</strong> Two-story homes add $1.50-$2.50/sq ft for safety equipment</li>
                <li><strong>Disposal Fees:</strong> $500-$1,200 depending on roof size and materials</li>
                <li><strong>Deck Repair:</strong> Additional $3.50-$6.00/sq ft for damaged decking replacement</li>
                <li><strong>Financing Available:</strong> 0% for 18 months or extended payment plans</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Amarillo Roof Replacement Market Analysis 2025</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-brown">Market Drivers & Trends</h3>
              <ul className="space-y-3">
                <li><strong>Storm Damage Claims:</strong> 2024 saw 73% increase in roof replacement claims after record hail season</li>
                <li><strong>Building Code Updates:</strong> New wind-resistance requirements drive replacement demand</li>
                <li><strong>Population Growth:</strong> Amarillo metro area 9.8% population increase drives new construction and renovation</li>
                <li><strong>Energy Efficiency Focus:</strong> Rising utility costs make energy-efficient roofing a priority</li>
                <li><strong>Insurance Requirements:</strong> Many insurers now require Class 4 materials for coverage</li>
                <li><strong>Home Values:</strong> New roofs add $15,000-$25,000 to home values in Amarillo market</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-brown">Regional Cost Comparison</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span><strong>Amarillo Average</strong></span>
                  <span className="font-bold text-brand-gold">$6.75-$9.25/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>Lubbock Market</span>
                  <span className="text-green-600">$6.25-$8.50/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>Dallas/Fort Worth</span>
                  <span className="text-red-600">$8.50-$12.75/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>Project Timeline</span>
                  <span>5-10 days typical</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>Storm Season Delays</span>
                  <span className="text-red-600">3-12 weeks</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded">
                <h4 className="font-bold mb-2">Why Amarillo Pricing is Competitive:</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Lower labor costs than major metros</li>
                  <li>✓ Established supplier relationships</li>
                  <li>✓ Efficient logistics for Panhandle region</li>
                  <li>✓ Competitive contractor market</li>
                  <li>✓ Insurance claim volume creates economies of scale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Comprehensive Warranty & Service Guarantees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">10</span>
              </div>
              <h3 className="font-bold mb-3">10-Year Workmanship Warranty</h3>
              <p className="text-sm text-gray-600">Comprehensive coverage on all installation workmanship, including leak-free guarantee and proper material application. Transferable to new homeowners.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h3 className="font-bold mb-3">Manufacturer Material Warranties</h3>
              <p className="text-sm text-gray-600">GAF System Plus warranties up to 50 years, Owens Corning Platinum coverage, and CertainTeed Integrity warranties. We register all warranties for you.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="font-bold mb-3">Emergency Response Guarantee</h3>
              <p className="text-sm text-gray-600">If your new roof develops leaks within warranty period, we provide emergency response within 24 hours and permanent repairs at no cost.</p>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3">What's Covered in Our Warranty:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Complete leak-free guarantee</li>
                <li>✓ Proper shingle installation and sealing</li>
                <li>✓ Flashing and penetration waterproofing</li>
                <li>✓ Ventilation system performance</li>
                <li>✓ Gutter installation and drainage</li>
                <li>✓ Cleanup and debris removal standards</li>
                <li>✓ Local code compliance certification</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Additional Service Commitments:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ $2M liability insurance coverage</li>
                <li>✓ Texas RRC licensed and bonded</li>
                <li>✓ Workers' compensation for all crew members</li>
                <li>✓ Better Business Bureau A+ rating</li>
                <li>✓ Annual warranty inspection offered</li>
                <li>✓ Transferable warranty for home sales</li>
                <li>✓ 24/7 emergency service availability</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Customer Success Stories - Amarillo Area</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Wolflin Village Complete Replacement</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Project:</strong> Full roof replacement after softball-sized hail damage in May 2024
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Challenge:</strong> 3,200 sq ft home with complex roofline, multiple penetrations, and premium material requirements
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Solution:</strong> Complete tear-off and replacement with GAF Timberline HDZ Class 4 shingles, upgraded synthetic underlayment, and enhanced ventilation system
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Insurance Result:</strong> $32,750 approved claim with code upgrade coverage
              </p>
              <p className="text-sm font-semibold text-green-600">Customer Investment: $2,500 deductible | Project completed in 3 days | 6-month follow-up: zero issues</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Southwest Amarillo New Construction</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Project:</strong> New construction custom home with premium roofing system
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Requirements:</strong> Standing seam metal roof with snow guards and enhanced energy efficiency
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Solution:</strong> Custom standing seam metal roof with Energy Star coating, premium insulation package, and architectural snow guard system
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Investment:</strong> $28,500 for 2,800 sq ft coverage
              </p>
              <p className="text-sm font-semibold text-green-600">Result: 35% energy cost reduction | 50-year warranty | Increased home value by $22,000</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Comprehensive Service Area Coverage</h2>
          <p className="text-lg mb-6">
            Expert roof replacement services throughout the Texas Panhandle and West Texas region, with specialized knowledge of local weather patterns and building requirements:
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-brand-brown">Amarillo Metro Area</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon</a></li>
                <li><a href="/bushland-tx-roofing/" className="text-brand-gold hover:underline">• Bushland</a></li>
                <li><a href="/wildorado-tx-roofing/" className="text-brand-gold hover:underline">• Wildorado</a></li>
                <li><a href="/happy-tx-roofing/" className="text-brand-gold hover:underline">• Happy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-brand-brown">Panhandle Region</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/borger-texas-roofing/" className="text-brand-gold hover:underline">• Borger</a></li>
                <li><a href="/pampa-texas-roofing/" className="text-brand-gold hover:underline">• Pampa</a></li>
                <li><a href="/dumas-texas-roofing/" className="text-brand-gold hover:underline">• Dumas</a></li>
                <li><a href="/perryton-texas-roofing/" className="text-brand-gold hover:underline">• Perryton</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-brand-brown">West Texas</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock</a></li>
                <li><a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland</a></li>
                <li><a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa</a></li>
                <li><a href="/big-spring-texas-roofing/" className="text-brand-gold hover:underline">• Big Spring</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-brand-brown">Specialized Services</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/commercial-roofing-amarillo/" className="text-brand-gold hover:underline">• Commercial Roofing</a></li>
                <li><a href="/metal-roofing-amarillo/" className="text-brand-gold hover:underline">• Metal Roofing</a></li>
                <li><a href="/hail-damage-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">• Hail Damage</a></li>
                <li><a href="/emergency-roof-repair-amarillo/" className="text-brand-gold hover:underline">• Emergency Service</a></li>
              </ul>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready for a New Roof?</h2>
            <p className="cta-text mb-6">
              Free inspections and insurance claim assistance for all Amarillo homeowners and businesses. Most customers pay only their insurance deductible.
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
