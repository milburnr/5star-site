import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Asphalt Shingle Roofing Midland TX | 5 Star Roofing',
  description: "Heavy-duty asphalt shingle roofing in Midland TX. Built for Permian Basin weather and industrial conditions. Desert-rated materials. 30-year warranties. Call (806) 622-6041",
};

export default function AsphaltShingleRoofingMidlandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Asphalt Shingle Roofing", url: "/asphalt-shingle-roofing/" },
        { name: "Midland", url: "/asphalt-shingle-roofing-midland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-midland/#localbusiness",
        "name": "5 Star Commercial Roofing - Midland Asphalt Shingle Roofing",
        "image": "https://5starroofingpros.com/images/asphalt-shingles-2.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.0174, "longitude": -102.0779 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-midland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "89", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Midland,_Texas", "name": "Midland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Heavy-duty asphalt shingle roofing in Midland TX. Built for Permian Basin weather and industrial conditions.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "serviceArea": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 32.0174, "longitude": -102.0779}, "geoRadius": "50000"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Permian Basin Asphalt Shingle Roofing",
        "description": "Industrial-grade asphalt shingle installation for Midland's oil field environment",
        "provider": {"@id": "https://5starroofingpros.com/#organization"},
        "areaServed": "Midland, Texas",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Permian Basin Roofing Services",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Desert-Grade Architectural Shingles"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Industrial Environment Roofing"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Oil Field Dust-Resistant Systems"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Heat-Reflective Shingle Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Executive Home Premium Roofing"}}
          ]
        }
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type":"Question","name":"How do asphalt shingles perform in Midland's extreme heat?","acceptedAnswer":{"@type":"Answer","text":"Midland's 110°+ summers require heat-rated shingles. We install cool-colored Class A fire-rated shingles with enhanced granule retention, designed for desert conditions. Proper ventilation is critical for 30+ year performance."}},
          {"@type":"Question","name":"What challenges do oil field operations create for roofing in Midland?","acceptedAnswer":{"@type":"Answer","text":"Oil field dust, industrial emissions, and vibrations from nearby operations affect shingle adhesion and longevity. We use premium sealed shingles with enhanced adhesive and install vibration-resistant fastening systems."}},
          {"@type":"Question","name":"What's the cost of asphalt shingle roofing in Midland?","acceptedAnswer":{"@type":"Answer","text":"Midland pricing reflects premium materials: Standard architectural $11,000-$16,500, heat-resistant premium $14,000-$19,500, Class 4 luxury-grade $17,000-$25,000. Higher costs reflect desert-grade materials and skilled labor market."}},
          {"@type":"Question","name":"Which shingle colors work best in Midland's desert climate?","acceptedAnswer":{"@type":"Answer","text":"Light, reflective colors are essential: Cool Gray, Desert Tan, Stone Gray, and Antique Silver. Avoid dark colors which can reach 170°F+ in Midland's intense sun. Energy-efficient colors reduce cooling costs by 15-25%."}},
          {"@type":"Question","name":"Do Midland homes need special roofing for the oil industry environment?","acceptedAnswer":{"@type":"Answer","text":"Yes! Industrial emissions and particulates require sealed shingles with enhanced granule adhesion. We recommend Class A fire-rated materials and improved ventilation to handle both heat and air quality considerations."}},
          {"@type":"Question","name":"How often should Midland roofs be maintained in the Permian Basin?","acceptedAnswer":{"@type":"Answer","text":"Inspect quarterly due to extreme heat stress and industrial environment. Professional evaluation after each major storm and annually for heat damage. Oil field dust requires more frequent gutter cleaning and surface maintenance."}}
        ]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-2-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Asphalt Shingle Roofing in <span className="text-brand-gold-light">Midland</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Permian Basin Tough & Desert Proven</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Heavy-duty asphalt shingle roofing engineered for Midland's extreme desert heat and industrial environment. Premium materials rated for oil field conditions and 110°+ summers.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Get Free Assessment</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">110°F+</div><div className="text-brand-brown font-semibold text-lg">Heat Rated</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={150} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Midland Projects</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">30</div><div className="text-brand-brown font-semibold text-lg">Year Performance</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">🛢️</div><div className="text-brand-brown font-semibold text-lg">Oil Field Tested</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Roofing Challenges in America's Oil Capital</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Permian Basin Environmental Factors</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Midland's unique position in the heart of America's busiest oil field creates roofing challenges unlike anywhere else:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Extreme heat:</strong> Summer temps exceeding 110°F with intense UV radiation</li>
                  <li>• <strong>Industrial particulates:</strong> Oil field dust and emissions affecting materials</li>
                  <li>• <strong>Desert aridity:</strong> Less than 5% humidity accelerating material aging</li>
                  <li>• <strong>Severe storms:</strong> Supercells with giant hail and 80+ mph winds</li>
                  <li>• <strong>Sand abrasion:</strong> Constant wind-blown sand wearing surfaces</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Permian Basin Expertise</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Over 150 installations in Midland have taught us to specify materials that thrive in this demanding environment:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Desert-grade shingles with enhanced UV protection</li>
                  <li>• Heat-reflective granule technology reducing surface temps</li>
                  <li>• Industrial-rated adhesives resisting oil field chemicals</li>
                  <li>• Enhanced ventilation systems for extreme heat management</li>
                  <li>• Fire-rated materials for industrial environment safety</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Premium Asphalt Solutions for Midland's Extreme Conditions</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Standard Architectural</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$11,000-$16,500</div>
                <p className="text-gray-700 mb-6">Entry-level option enhanced for Midland climate. Minimum recommendation for desert conditions.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 18-25 year lifespan in extreme heat</li>
                  <li>• Class A fire rating for industrial areas</li>
                  <li>• Basic heat-reflective granules</li>
                  <li>• Standard wind resistance (70-90 mph)</li>
                  <li>• Limited color selection</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-brand-gold relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Heat-Resistant Premium</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$14,000-$19,500</div>
                <p className="text-gray-700 mb-6">Advanced materials designed specifically for desert performance and energy efficiency.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 25-30 year lifespan with heat protection</li>
                  <li>• Cool roof certified granules (15°F+ cooler)</li>
                  <li>• Enhanced UV protection coating</li>
                  <li>• Superior wind resistance (110+ mph)</li>
                  <li>• Energy Star qualified options</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">LUXURY</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Executive Grade Class 4</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$17,000-$25,000</div>
                <p className="text-gray-700 mb-6">Ultimate protection for Midland's premium homes. Maximum performance and aesthetics.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 30+ year lifespan with full warranties</li>
                  <li>• Military-grade impact resistance</li>
                  <li>• Premium cool roof technology</li>
                  <li>• 30-40% insurance premium savings</li>
                  <li>• Designer color collections</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Why Heat-Resistant Technology Matters in Midland</h3>
              <p className="text-lg mb-4">Standard shingles can reach 170°F+ on Midland roofs, causing rapid aging and energy waste. Our cool roof technology reduces temperatures by 15-25°F, dramatically extending life and cutting energy costs.</p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <strong>Energy Savings:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• 15-30% reduction in cooling costs</li>
                    <li>• Reduced HVAC system stress and maintenance</li>
                    <li>• Improved indoor comfort during peak heat</li>
                    <li>• Lower peak electrical demand charges</li>
                  </ul>
                </div>
                <div>
                  <strong>Performance Benefits:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Slower granule loss from heat cycling</li>
                    <li>• Reduced thermal shock cracking</li>
                    <li>• Extended adhesive seal life</li>
                    <li>• Better dimensional stability</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Desert Climate Design Strategies</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Heat-Reflective Color Selection</h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-xl font-bold mb-3 text-blue-800">Cool Roof Colors (Recommended)</h4>
                    <ul className="space-y-2">
                      <li><strong>Cool Gray:</strong> Stays 20°F cooler than standard gray</li>
                      <li><strong>Desert Tan:</strong> Blends with West Texas landscape</li>
                      <li><strong>Stone Gray:</strong> Executive appearance with energy efficiency</li>
                      <li><strong>Antique Silver:</strong> Premium look with maximum reflection</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="text-xl font-bold mb-3 text-red-700">Dangerous in Midland Heat</h4>
                    <ul className="space-y-2 text-red-700">
                      <li><strong>Black/Charcoal:</strong> Can reach 180°F+ (fire hazard)</li>
                      <li><strong>Dark Brown:</strong> Extreme heat causes rapid failure</li>
                      <li><strong>Dark Green/Blue:</strong> Poor performance in desert UV</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Industrial Environment Considerations</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-brand-brown">Oil Field Protection</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Sealed shingle tabs prevent industrial dust infiltration</li>
                      <li>• Chemical-resistant granules for emissions exposure</li>
                      <li>• Enhanced fire rating for industrial safety</li>
                      <li>• Vibration-resistant installation near operations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-brand-brown">Executive Home Standards</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Premium aesthetics matching neighborhood standards</li>
                      <li>• Superior performance for high-value properties</li>
                      <li>• Enhanced warranties protecting investment</li>
                      <li>• Energy efficiency reducing operational costs</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <p className="text-sm text-yellow-700"><strong>Midland Advantage:</strong> Oil industry prosperity means premium materials are common. We match the community standard while optimizing for local conditions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Extreme Heat Performance Data</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">115°F</div>
                  <div className="text-sm text-gray-700">Record high<br/>temperature</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">180°F</div>
                  <div className="text-sm text-gray-700">Dark shingle<br/>surface temp</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">95+</div>
                  <div className="text-sm text-gray-700">Days over 100°F<br/>annually</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">3.8</div>
                  <div className="text-sm text-gray-700">Annual hail<br/>events</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Desert-Grade Installation Process</h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Heat-Specific Preparation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                      <span><strong>Temperature Timing:</strong> Installations scheduled for cooler morning hours (before 10 AM)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                      <span><strong>Deck Assessment:</strong> Checking for heat warping and thermal stress damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                      <span><strong>Ventilation Planning:</strong> Designing airflow for extreme heat management</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Premium Installation Standards</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                      <span><strong>Heat-Rated Underlayment:</strong> Synthetic materials rated for 200°F+ exposure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">5</span>
                      <span><strong>Enhanced Fastening:</strong> Stainless steel nails preventing thermal expansion issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">6</span>
                      <span><strong>Cool Roof Technology:</strong> Reflective granules and heat-shedding design</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Installation Timeline</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 1</h4>
                    <p className="text-sm text-gray-600">Early morning tear-off and deck preparation. Heat protection measures.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 2</h4>
                    <p className="text-sm text-gray-600">Premium underlayment and enhanced edge protection installation.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 2-3</h4>
                    <p className="text-sm text-gray-600">Heat-resistant shingle installation during optimal temperatures.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">✓</div>
                    <h4 className="font-bold text-brand-brown mb-2">Final</h4>
                    <p className="text-sm text-gray-600">Ridge venting, cleanup, and thermal performance verification.</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                <h3 className="text-xl font-bold mb-3 text-orange-800">Desert Installation Protocols</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-orange-700 text-sm">
                  <li>• Work suspended when surface temps exceed 150°F</li>
                  <li>• Enhanced crew safety protocols for heat exposure</li>
                  <li>• Material storage in climate-controlled environment</li>
                  <li>• Quality control with thermal imaging verification</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Maintenance in the Permian Basin Environment</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Desert Heat Maintenance Program</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="text-lg font-bold text-red-800 mb-2">Summer Heat Protocol</h4>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li><strong>Monthly:</strong> Visual inspection for heat stress indicators</li>
                      <li><strong>Quarterly:</strong> Professional thermal assessment</li>
                      <li><strong>Pre-summer:</strong> Comprehensive ventilation check</li>
                      <li><strong>Post-storm:</strong> Emergency inspection and repairs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Industrial Environment Care</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Dust and particulate removal from surfaces</li>
                      <li>• Chemical residue cleaning as needed</li>
                      <li>• Fastener inspection for vibration effects</li>
                      <li>• Fire safety system verification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Performance Monitoring</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-brand-brown">Heat Damage Warning Signs</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Excessive granule loss on south-facing slopes</li>
                      <li>• Shingle curling or cupping from heat cycling</li>
                      <li>• Cracking along seal lines from thermal stress</li>
                      <li>• Fading or discoloration beyond normal aging</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="text-lg font-bold mb-2 text-brand-brown">Energy Performance Tracking</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Monthly energy bill comparison analysis</li>
                      <li>• Attic temperature monitoring in summer</li>
                      <li>• HVAC system performance correlation</li>
                      <li>• ROI calculation for cool roof investment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do asphalt shingles perform in Midland's extreme heat?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Midland's 110°+ summers require heat-rated shingles. We install cool-colored Class A fire-rated shingles with enhanced granule retention, designed for desert conditions. Proper ventilation is critical for 30+ year performance.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What challenges do oil field operations create for roofing in Midland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Oil field dust, industrial emissions, and vibrations from nearby operations affect shingle adhesion and longevity. We use premium sealed shingles with enhanced adhesive and install vibration-resistant fastening systems.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the cost of asphalt shingle roofing in Midland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Midland pricing reflects premium materials: Standard architectural $11,000-$16,500, heat-resistant premium $14,000-$19,500, Class 4 luxury-grade $17,000-$25,000. Higher costs reflect desert-grade materials and skilled labor market.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Which shingle colors work best in Midland's desert climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Light, reflective colors are essential: Cool Gray, Desert Tan, Stone Gray, and Antique Silver. Avoid dark colors which can reach 170°F+ in Midland's intense sun. Energy-efficient colors reduce cooling costs by 15-25%.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do Midland homes need special roofing for the oil industry environment?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes! Industrial emissions and particulates require sealed shingles with enhanced granule adhesion. We recommend Class A fire-rated materials and improved ventilation to handle both heat and air quality considerations.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How often should Midland roofs be maintained in the Permian Basin?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Inspect quarterly due to extreme heat stress and industrial environment. Professional evaluation after each major storm and annually for heat damage. Oil field dust requires more frequent gutter cleaning and surface maintenance.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Permian Basin Performance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Heavy-duty asphalt shingle roofing engineered for Midland's extreme conditions. Desert-proven materials, oil field tough construction, and energy-efficient design for America's energy capital.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Assessment</a>
          </div>
        </section>
      </div>
    </>
  );
}