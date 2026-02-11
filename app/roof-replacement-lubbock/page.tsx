import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Lubbock TX | 5 Star Roofing',
  description: "Expert roof replacement in Lubbock TX. Class 4 impact-resistant shingles. Insurance claims assistance. Call (806) 622-6041",
};

export default function RoofReplacementLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Lubbock", url: "/roof-replacement-lubbock/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/roof-replacement-lubbock/#localbusiness",
            "name": "5 Star Commercial Roofing - Lubbock Roof Replacement",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
            "telephone": "(806) 622-6041",
            "email": "info@5starroofingpros.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2909 S Western St",
              "addressLocality": "Amarillo",
              "addressRegion": "TX",
              "postalCode": "79109",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 35.1768,
              "longitude": -101.8590
            },
            "url": "https://5starroofingpros.com/roof-replacement-lubbock/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas",
              "name": "Lubbock",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            "description": "Expert roof replacement in Lubbock TX. Class 4 impact-resistant shingles. Insurance claims assistance. Call (806) 622-6041"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Lubbock",
            "description": "Professional roof replacement services in Lubbock, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lubbock",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roof Replacement Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{"@type":"Question","name":"When should I replace my Lubbock roof?","acceptedAnswer":{"@type":"Answer","text":"Replace when you have widespread hail damage (10+ impacts per 100 sq ft), roof age over 20 years in South Plains climate, multiple leaks, extensive granule loss, or failed previous repairs. With median home construction year of 1983, many Lubbock homes are approaching their first replacement cycle."}},{"@type":"Question","name":"How much does roof replacement cost in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Residential: $11,000-$32,000 depending on size and materials. Commercial: $15,000-$100,000+ depending on building size and system type. Most Lubbock replacements are insurance-covered South Plains hail damage where property owners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are the best roofing materials for Lubbock's South Plains climate?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant asphalt shingles (residential), TPO membrane or cool metal roofing (commercial). South Plains hail corridor requires materials engineered for large hail impacts, high winds, and extreme temperature cycling (20°F to 100°F+)."}},{"@type":"Question","name":"Do I need permits for roof replacement in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Yes. City of Lubbock requires building permits for all roof replacements per Chapter 7 Building Code. We handle all permit applications including required wind resistance specifications (110+ mph) and proper ventilation ratios. University area may have additional HOA requirements."}},{"@type":"Question","name":"How long does roof replacement take in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Residential: 1-3 days for most homes. Single-story ranch homes (common in Southwest Lubbock) typically complete in 1-2 days. Two-story homes or complex rooflines require 2-3 days. Commercial projects: 3-14 days depending on building size and system complexity."}},{"@type":"Question","name":"Will new roof reduce my energy costs in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Yes. Cool roof materials can reduce cooling costs by 20-30% in Lubbock's intense summer heat. Class 4 impact-resistant shingles with reflective granules, TPO membranes, and metal roofs with cool coatings all provide significant energy savings. Many qualify for utility rebates through LP&L."}}]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-15-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Replacement in <span className="text-brand-gold-light">Lubbock</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Lifetime Protection
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Complete roof replacement for Lubbock homes and businesses. We install Class 4 impact-resistant roofing with 50-year warranties.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={10} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why Lubbock's Climate Demands Expert Roof Replacement
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Lubbock's position in the heart of the South Plains creates unique roofing challenges. As the economic and educational hub of West Texas, Lubbock County experiences severe weather patterns that demand premium roofing solutions designed for extreme conditions.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">South Plains Hail Corridor</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Annual severe hail events</strong> - Lubbock sits in the most active hail corridor of the South Plains, with dozens of large hail reports annually.
                </p>
                <p className="text-gray-600 text-sm">
                  Recent May 2024 storms produced golf ball to baseball-sized hail across Lubbock County. Peak season April-June.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Destructive Wind Patterns</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>60+ mph wind events</strong> - Spring derecho systems regularly impact the South Plains with destructive straight-line winds.
                </p>
                <p className="text-gray-600 text-sm">
                  Flat topography provides no wind barriers, allowing storm systems to intensify rapidly across the region.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Temperature Stress</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>80°F temperature swings</strong> - from winter lows near 20°F to summer highs over 100°F create severe thermal cycling.
                </p>
                <p className="text-gray-600 text-sm">
                  UV exposure at 3,200' elevation intensifies aging of traditional roofing materials.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Lubbock Housing Market & Roof Replacement Considerations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Housing Stock Analysis</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Lubbock's housing market reflects its growth as a regional center and university town. With a <strong>median construction year of 1983</strong>, many homes are entering their first major roof replacement cycle.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-4">
                  <h4 className="font-bold text-lg mb-3">Construction Timeline</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>1970s-1990s (Energy Crisis Era):</span>
                      <strong className="text-brand-gold">42%</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>2000s-2010s (Tech Boom):</span>
                      <strong className="text-brand-gold">35%</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>1950s-1960s (Oil Prosperity):</span>
                      <strong className="text-brand-gold">23%</strong>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold text-sm">
                    Texas Tech University's growth has driven significant residential development, creating diverse neighborhoods with varying roof replacement needs.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Neighborhood Considerations</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-red-800 mb-2">University Area</h4>
                    <p className="text-sm text-gray-700">
                      Older homes (1950s-1970s) near campus often require complete replacement due to deferred maintenance and age-related deterioration.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-blue-800 mb-2">Southwest Lubbock</h4>
                    <p className="text-sm text-gray-700">
                      Newer developments (1990s-2000s) typically need replacement due to hail damage rather than age-related wear.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-green-800 mb-2">Historic Districts</h4>
                    <p className="text-sm text-gray-700">
                      Overton, Tech Terrace require materials that preserve architectural character while providing modern protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Complete Roof Replacement Solutions for Lubbock
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-4">Damage Assessment & Documentation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive inspection documenting all storm damage with high-resolution imagery. We specialize in identifying South Plains hail and wind damage patterns for insurance claims.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hail impact mapping</li>
                  <li>• Wind uplift damage assessment</li>
                  <li>• Structural integrity evaluation</li>
                  <li>• Insurance claim documentation</li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                <h3 className="text-xl font-bold mb-4">Material Selection & Permitting</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Expert guidance on optimal materials for South Plains climate. We handle all City of Lubbock permits and HOA approvals for university area and established neighborhoods.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Class 4 impact-resistant systems</li>
                  <li>• Energy-efficient cool roof options</li>
                  <li>• City of Lubbock permit handling</li>
                  <li>• HOA architectural compliance</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                <h3 className="text-xl font-bold mb-4">Expert Installation & Warranty</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Complete tear-off and replacement using advanced techniques designed for West Texas weather extremes. Enhanced ventilation and wind-resistant installation exceeds all codes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full tear-off to decking</li>
                  <li>• Wind resistance (110+ mph rated)</li>
                  <li>• Enhanced ventilation systems</li>
                  <li>• Comprehensive warranty protection</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Roofing Materials Engineered for Lubbock's Climate
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Residential Solutions</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Class 4 Impact-Resistant Shingles</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Top choice:</strong> GAF Timberline HDZ, CertainTeed Landmark Impact Resistant
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Engineered specifically for hail-prone regions. Reduces damage by 90% compared to standard shingles. Qualifies for significant insurance premium reductions in Lubbock County.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$11,000 - $17,000 (typical home)</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-bold text-green-800 mb-2">Cool Roof Metal Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Premium option:</strong> Standing seam steel with reflective coatings
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Superior hail resistance with energy efficiency benefits. Reflective surface reduces cooling costs by 20-30% in Lubbock's intense summer heat. 50+ year lifespan.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$16,000 - $32,000 (typical home)</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">Composite Slate & Cedar</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Aesthetic choice:</strong> Polymer composite materials
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Natural appearance with synthetic durability. Perfect for Tech Terrace and historic districts requiring architectural authenticity with modern performance.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$18,000 - $38,000 (typical home)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Commercial Solutions</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-lg font-bold text-red-800 mb-2">TPO Single-Ply Membrane</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Most popular:</strong> White thermoplastic membrane systems
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Excellent heat reflection properties crucial for Texas summers. Superior hail resistance with proven wind uplift performance. Energy-efficient solution for Lubbock commercial buildings.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$7.00 - $11.00 per sq ft</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Modified Bitumen Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Proven choice:</strong> Multi-layer reinforced systems
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Outstanding durability in extreme temperature cycles. Self-healing properties for minor damage. Enhanced with granulated surfaces for improved hail resistance.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$5.50 - $9.50 per sq ft</p>
                  </div>

                  <div className="border-l-4 border-gray-500 pl-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Metal Retrofit Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Upgrade solution:</strong> Over existing commercial roofs
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Maximum hail and wind protection. Eliminates future leak concerns. Significant energy savings through cool roof technology. Perfect for Texas Tech area buildings.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$11.00 - $16.00 per sq ft</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Insurance Claims & Financing in Lubbock
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Storm Damage Claims Process</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lubbock's location in the South Plains hail corridor means most roof replacements are insurance-covered. We have extensive experience with all major carriers serving West Texas.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-bold">Storm Damage Documentation</h4>
                      <p className="text-sm text-gray-600">Comprehensive damage mapping with meteorological data correlation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-bold">Adjuster Coordination</h4>
                      <p className="text-sm text-gray-600">On-site meetings to ensure complete damage recognition</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-bold">Claim Settlement & Scheduling</h4>
                      <p className="text-sm text-gray-600">Rapid project initiation following claim approval</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    Average Lubbock County deductible: $1,000 - $2,500. Many policies include full replacement coverage for severe hail damage.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Flexible Financing Solutions</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Comprehensive financing options for Lubbock County property owners. We partner with regional and national lenders to provide competitive terms for all budgets.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Same-as-Cash Options</h4>
                    <p className="text-sm text-gray-700">12-18 months 0% APR for qualified applicants with good credit</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Extended Payment Plans</h4>
                    <p className="text-sm text-gray-700">60-144 month terms with competitive rates from 5.99% APR</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Instant Pre-Approval</h4>
                    <p className="text-sm text-gray-700">Quick online application with same-day approval for most applicants</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800 font-semibold">
                    Special programs available for energy-efficient upgrades and multi-property discounts for rental property owners.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  When should I replace my Lubbock roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Replace when you have widespread hail damage (10+ impacts per 100 sq ft), roof age over 20 years in South Plains climate, multiple leaks, extensive granule loss, or failed previous repairs. With median home construction year of 1983, many Lubbock homes are approaching their first replacement cycle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does roof replacement cost in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Residential: $11,000-$32,000 depending on size and materials. Commercial: $15,000-$100,000+ depending on building size and system type. Most Lubbock replacements are insurance-covered South Plains hail damage where property owners pay only their deductible ($1,000-$2,500).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are the best roofing materials for Lubbock's South Plains climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Class 4 impact-resistant asphalt shingles (residential), TPO membrane or cool metal roofing (commercial). South Plains hail corridor requires materials engineered for large hail impacts, high winds, and extreme temperature cycling (20°F to 100°F+).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do I need permits for roof replacement in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. City of Lubbock requires building permits for all roof replacements per Chapter 7 Building Code. We handle all permit applications including required wind resistance specifications (110+ mph) and proper ventilation ratios. University area may have additional HOA requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does roof replacement take in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Residential: 1-3 days for most homes. Single-story ranch homes (common in Southwest Lubbock) typically complete in 1-2 days. Two-story homes or complex rooflines require 2-3 days. Commercial projects: 3-14 days depending on building size and system complexity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will new roof reduce my energy costs in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. Cool roof materials can reduce cooling costs by 20-30% in Lubbock's intense summer heat. Class 4 impact-resistant shingles with reflective granules, TPO membranes, and metal roofs with cool coatings all provide significant energy savings. Many qualify for utility rebates through LP&L.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Lubbock Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Lubbock property owners. Expert roof replacement with comprehensive warranties.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
