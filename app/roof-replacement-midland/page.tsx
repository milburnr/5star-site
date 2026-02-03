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
  title: 'Roof Replacement Midland TX | 5 Star Roofing',
  description: "Expert roof replacement in Midland TX. Class 4 impact-resistant shingles. Insurance claims assistance. Call (806) 622-6041",
};

export default function RoofReplacementMidlandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Midland", url: "/roof-replacement-midland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/roof-replacement-midland/#localbusiness",
            "name": "5 Star Commercial Roofing - Midland Roof Replacement",
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
            "url": "https://5starroofingpros.com/roof-replacement-midland/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Midland,_Texas",
              "name": "Midland",
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
            "description": "Expert roof replacement in Midland TX. Class 4 impact-resistant shingles. Insurance claims assistance. Call (806) 622-6041"
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
            "name": "Roof Replacement in Midland",
            "description": "Professional roof replacement services in Midland, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Midland",
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
            "mainEntity": [{"@type":"Question","name":"When should I replace my Midland roof?","acceptedAnswer":{"@type":"Answer","text":"Replace when you have widespread Permian Basin hail damage, roof age over 15-20 years in dust storm environment, multiple leaks, extensive granule loss from dust erosion, or failed previous repairs. Oil boom construction from 1980s-2010s now requires replacement due to age and environmental wear."}},{"@type":"Question","name":"How much does roof replacement cost in Midland?","acceptedAnswer":{"@type":"Answer","text":"Residential: $12,000-$42,000 depending on size and materials. Commercial/Industrial: $20,000-$200,000+ for oil company facilities. Most Midland replacements are insurance-covered hail damage where property owners pay only deductible ($1,000-$3,500)."}},{"@type":"Question","name":"What roofing materials work best in Midland's Permian Basin climate?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles with dust-resistant granules (residential), TPO membrane or metal systems (commercial). Permian Basin requires materials engineered for dust storms, extreme hail, temperature cycling (20°F to 110°F+), and industrial environments."}},{"@type":"Question","name":"Do commercial buildings in Midland need special roofing considerations?","acceptedAnswer":{"@type":"Answer","text":"Yes. Oil and gas facilities require chemical-resistant materials, 24/7 operational scheduling, enhanced wind resistance, and compliance with industrial safety standards. Many require specialized access for equipment and minimal business interruption during replacement."}},{"@type":"Question","name":"How do dust storms affect roofs in Midland?","acceptedAnswer":{"@type":"Answer","text":"Frequent northwest wind dust storms cause granule loss, surface erosion, and accelerated aging. Dust accumulation blocks drainage systems and creates abrasive wear patterns. Proper material selection and maintenance schedules are critical for Permian Basin conditions."}},{"@type":"Question","name":"Are there energy efficiency benefits for new roofs in Midland?","acceptedAnswer":{"@type":"Answer","text":"Yes. Cool roof technologies can reduce cooling costs by 25-40% in Midland's intense summer heat (110°F+). Reflective membranes, metal roofing, and energy-efficient shingles qualify for utility rebates and reduce operational costs for both residential and commercial properties."}}]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/residential-roofing-5.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Replacement in <span className="text-brand-gold-light">Midland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Lifetime Protection
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Complete roof replacement for Midland homes and businesses. We install Class 4 impact-resistant roofing with 50-year warranties.
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
              Why Midland's Permian Basin Climate Demands Expert Roof Replacement
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As the heart of America's energy industry, Midland faces unique roofing challenges in the harsh Permian Basin climate. Midland County's extreme weather patterns, combined with oil boom construction cycles, create specific roof replacement needs for both residential and commercial properties.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Permian Basin Hail Events</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Golf ball to baseball sized hail</strong> - Midland's flat terrain provides no barriers to severe thunderstorms moving across the basin.
                </p>
                <p className="text-gray-600 text-sm">
                  Recent May 2024 storms caused extensive damage throughout the region. Peak season April-June with secondary October peak.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Dust Storm Damage</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Northwest wind dust storms</strong> - Frequent blowing dust events carry abrasive particles that accelerate roof material degradation.
                </p>
                <p className="text-gray-600 text-sm">
                  Spring dust storms with winds exceeding 40 mph cause granule loss and surface erosion, particularly during drought periods.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Extreme Temperature Cycling</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>90°F temperature swings</strong> - from winter lows near 20°F to summer highs over 110°F create severe thermal stress.
                </p>
                <p className="text-gray-600 text-sm">
                  High UV exposure at 2,800' elevation combined with low humidity intensifies material aging processes.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Midland's Oil Boom Housing Market & Roof Considerations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Energy Boom Construction Cycles</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Midland's housing market reflects the cyclical nature of oil and gas development. Construction surged during the 1980s boom, declined in the 1990s, and resumed with the Permian Basin shale revolution starting in 2010.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-4">
                  <h4 className="font-bold text-lg mb-3">Construction Eras</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>2010-2020 (Shale Boom):</span>
                      <strong className="text-brand-gold">38%</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>1980s-1990s (Oil Prosperity):</span>
                      <strong className="text-brand-gold">35%</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>1960s-1970s (Development Era):</span>
                      <strong className="text-brand-gold">27%</strong>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold text-sm">
                    Rapid construction during boom periods sometimes compromised quality, making proper roof replacement critical for long-term protection.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Commercial & Industrial Focus</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-red-800 mb-2">Energy Sector Buildings</h4>
                    <p className="text-sm text-gray-700">
                      Oil company offices, equipment facilities, and industrial complexes require specialized commercial roofing systems designed for 24/7 operations.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-green-800 mb-2">Executive Housing</h4>
                    <p className="text-sm text-gray-700">
                      High-end residential developments built during boom periods often feature complex rooflines requiring premium materials and expert installation.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-blue-800 mb-2">Workforce Housing</h4>
                    <p className="text-sm text-gray-700">
                      Rapid development housing from 2012-2018 period now approaching first major maintenance cycle, including roof replacements.
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800 font-semibold text-sm">
                    Insurance claims are common due to frequent hail damage in the Permian Basin oil fields and residential areas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Comprehensive Roof Replacement Solutions for Midland
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-4">Storm & Environmental Damage Assessment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Specialized inspection for Permian Basin conditions including hail damage, wind uplift, dust erosion, and thermal cycling stress. We document all findings with detailed reports for insurance and maintenance planning.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hail impact evaluation</li>
                  <li>• Dust erosion assessment</li>
                  <li>• Thermal stress analysis</li>
                  <li>• Commercial operations impact review</li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                <h3 className="text-xl font-bold mb-4">Material Selection & Code Compliance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Expert material selection optimized for Permian Basin conditions. We handle all City of Midland permits and ensure compliance with energy sector facility requirements and industrial standards.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dust-resistant systems</li>
                  <li>• High-temperature performance materials</li>
                  <li>• City of Midland permits</li>
                  <li>• Industrial facility compliance</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                <h3 className="text-xl font-bold mb-4">Professional Installation & Scheduling</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Complete replacement with scheduling flexibility for commercial operations. Enhanced installation techniques designed for extreme weather resistance and minimal business disruption.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 commercial scheduling</li>
                  <li>• Enhanced wind resistance (120+ mph)</li>
                  <li>• Dust mitigation during installation</li>
                  <li>• Operations continuity planning</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Roofing Systems Engineered for Permian Basin Conditions
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Residential Solutions</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Class 4 Heavy-Duty Shingles</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Top choice:</strong> GAF Timberline HDZ, CertainTeed Landmark Impact Resistant
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Engineered specifically for oil country conditions. Maximum hail protection with dust-resistant granules. Superior thermal cycling performance for Permian Basin temperature extremes.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$12,000 - $19,000 (typical home)</p>
                  </div>

                  <div className="border-l-4 border-gray-500 pl-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Metal Roofing Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Premium choice:</strong> Standing seam steel with protective coatings
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Superior durability for dust storm environments. Reflective surfaces reduce energy costs significantly. Perfect for executive homes and energy company housing.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$17,000 - $34,000 (typical home)</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-bold text-green-800 mb-2">Tile & Composite Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Aesthetic option:</strong> Concrete tile, synthetic slate
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Excellent thermal performance with architectural appeal. Dust-shedding surfaces and high impact resistance. Ideal for upscale Midland developments.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$19,000 - $42,000 (typical home)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Commercial & Industrial Solutions</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-lg font-bold text-red-800 mb-2">TPO High-Performance Membrane</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Industry standard:</strong> White thermoplastic systems
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Chemical resistance for industrial environments. Superior heat reflection reduces cooling loads for large facilities. Proven performance in oil field conditions.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$8.00 - $13.00 per sq ft</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Modified Bitumen Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Heavy-duty choice:</strong> Reinforced membrane systems
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Excellent puncture resistance for industrial applications. Self-healing properties for minor damage. Enhanced with reflective granules for energy efficiency.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$6.50 - $11.00 per sq ft</p>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Metal Retrofit Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Upgrade solution:</strong> Over existing commercial roofs
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Maximum durability for 24/7 operations. Eliminates future maintenance concerns. Superior energy performance for large facilities. Perfect for oil company buildings.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$12.00 - $18.00 per sq ft</p>
                  </div>
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
                  When should I replace my Midland roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Replace when you have widespread hail damage (10+ impacts per 100 sq ft), roof age over 20 years, multiple leaks, extensive granule loss, or failed previous repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does roof replacement cost in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Residential: $8,000-$25,000 depending on size and materials. Commercial: $15,000-$100,000+ depending on building size. 85% of replacements are insurance-covered hail damage where property owners pay only their deductible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are the best roofing materials for Midland's climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Class 4 impact-resistant asphalt shingles (residential), TPO or metal roofing (commercial). These materials are engineered for extreme Texas weather conditions including hail, high winds, and temperature swings.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Midland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Midland property owners. Expert roof replacement with comprehensive warranties.
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
