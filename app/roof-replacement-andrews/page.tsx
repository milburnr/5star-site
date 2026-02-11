import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Andrews TX | 5 Star Roofing',
  description: "Professional roof replacement in Andrews TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementAndrewsPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Andrews", url: "/roof-replacement-andrews/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews Roof Replacement",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Andrews TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Andrews",
            "description": "Professional roof replacement services in Andrews, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Andrews",
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"When should I replace my Andrews roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles (residential) and TPO or metal (commercial) handle Texas hail, wind, and temperature extremes best."}},{"@type":"Question","name":"Will a new roof increase my home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI. Class 4 roofs add premium value with insurance discounts and reduced maintenance."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-39-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Andrews</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Andrews. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Get Free Inspection</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">24/7</div><div className="text-brand-brown font-semibold text-lg">Emergency Service</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">1-3</div><div className="text-brand-brown font-semibold text-lg">Days to Complete</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Andrews's Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof replacement throughout Andrews and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings that characterize West Texas climate.</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Since 2014, we've served Andrews with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available for all 13,677 residents of this thriving oil community.</p>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Understanding Andrews Housing Market</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Andrews represents a unique housing market in West Texas, with its economy deeply rooted in oil and gas industry. The median household income of $78,896 reflects the economic strength of this community, but it also creates specific roofing challenges and opportunities that homeowners need to understand.</p>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
              <h4 className="text-xl font-bold text-amber-800 mb-2">Andrews Housing Demographics at a Glance</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Population:</strong> 13,677 residents (2024)</li>
                <li>• <strong>Median Age:</strong> 33.2 years - younger workforce requiring modern housing</li>
                <li>• <strong>Median Income:</strong> $78,896 - above Texas average</li>
                <li>• <strong>Ethnic Composition:</strong> 53.9% Hispanic, 41.3% White, 2.6% Black</li>
                <li>• <strong>Housing Era:</strong> Mix of oil boom construction (1950s-1980s) and modern builds</li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Andrews Housing Stock and Roofing Challenges</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">The housing stock in Andrews tells the story of Texas oil booms. Many homes were built during the petroleum industry expansions of the 1950s through 1980s, creating a significant population of aging roofs that now require replacement. The combination of older construction standards and decades of harsh West Texas weather has created an urgent need for modern roofing solutions.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-blue-800 mb-3">Era-Specific Housing Challenges</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>1950s-1960s Homes:</strong> Original composition shingles, inadequate ventilation</li>
                  <li><strong>1970s-1980s Construction:</strong> Early asphalt shingles, storm damage accumulation</li>
                  <li><strong>1990s-2000s Builds:</strong> Standard 3-tab shingles nearing replacement time</li>
                  <li><strong>Modern Construction:</strong> Opportunity for Class 4 impact-resistant upgrades</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-green-800 mb-3">West Texas Weather Impact</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Hail Season:</strong> April-June brings golf ball to softball-sized hail</li>
                  <li><strong>Wind Damage:</strong> Sustained winds 25-35 mph with gusts to 70+ mph</li>
                  <li><strong>Temperature Extremes:</strong> -10°F to 110°F annual range</li>
                  <li><strong>UV Exposure:</strong> Intense sunlight accelerates shingle aging</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Andrews Roof Replacement Cost Guide 2025</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Understanding replacement costs helps Andrews homeowners make informed decisions about protecting their investment in this strong housing market.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Budget-Friendly Options</h3>
                <div className="text-3xl font-bold text-blue-700 mb-2">$7,500-$12,000</div>
                <p className="text-sm text-blue-600 mb-4">Average 1,500-2,000 sq ft home</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• 3-tab asphalt shingles</li>
                  <li>• Basic underlayment</li>
                  <li>• Standard ventilation</li>
                  <li>• 20-year warranty</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-300">
                <h3 className="text-2xl font-bold text-amber-800 mb-3">Recommended Choice</h3>
                <div className="text-3xl font-bold text-amber-700 mb-2">$12,000-$18,000</div>
                <p className="text-sm text-amber-600 mb-4">Class 4 impact-resistant system</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Architectural shingles (Class 4)</li>
                  <li>• Synthetic underlayment</li>
                  <li>• Ridge ventilation system</li>
                  <li>• 30-50 year warranty</li>
                  <li>• Insurance discounts</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
                <h3 className="text-2xl font-bold text-green-800 mb-3">Premium Systems</h3>
                <div className="text-3xl font-bold text-green-700 mb-2">$18,000-$35,000</div>
                <p className="text-sm text-green-600 mb-4">Metal and advanced materials</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Standing seam metal</li>
                  <li>• Tile or slate options</li>
                  <li>• Advanced ventilation</li>
                  <li>• Lifetime warranties</li>
                  <li>• Maximum hail resistance</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h4 className="text-xl font-bold text-yellow-800 mb-2">Andrews-Specific Cost Factors</h4>
              <p className="text-gray-700 mb-3">Several factors unique to Andrews can affect your roof replacement investment:</p>
              <ul className="text-gray-700 space-y-2 grid md:grid-cols-2 gap-x-8">
                <li>• <strong>Oil Industry Demand:</strong> Higher labor costs during boom periods</li>
                <li>• <strong>Remote Location:</strong> Material delivery adds 5-10% to costs</li>
                <li>• <strong>Permit Requirements:</strong> City permits average $200-400</li>
                <li>• <strong>Insurance Claims:</strong> Frequent hail damage creates claims backlog</li>
                <li>• <strong>Wind Uplift Requirements:</strong> Enhanced fastening increases labor</li>
                <li>• <strong>Summer Heat:</strong> Seasonal timing affects scheduling and pricing</li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Roofing Materials Engineered for Andrews Climate</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">West Texas demands roofing materials that can withstand extreme weather while delivering long-term value for Andrews homeowners.</p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Impact-Resistant Shingles - Our Top Recommendation</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Andrews' hail-prone environment, Class 4 impact-resistant shingles offer the best protection and value. These shingles undergo rigorous testing, withstanding 2-inch steel balls dropped from 20 feet without cracking.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-slate-700 mb-2">Performance Benefits</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Withstand hail up to 1.75 inches</li>
                        <li>• Wind resistance to 130 mph</li>
                        <li>• UV-resistant granules</li>
                        <li>• Algae-resistant coating</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-blue-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Cost Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Material Cost:</span><span>$5.50-$7.50/sq ft</span></div>
                        <div className="flex justify-between"><span>Installation:</span><span>$3.00-$4.50/sq ft</span></div>
                        <div className="flex justify-between border-t border-blue-400 pt-2 font-bold"><span>Total:</span><span>$8.50-$12.00/sq ft</span></div>
                      </div>
                      <p className="text-blue-100 text-sm mt-3">Insurance discounts: 15-35% premium reduction</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-amber-800 mb-4">Metal Roofing - Premium Durability</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">Metal roofing represents the ultimate in durability for Andrews properties. With proper installation, metal roofs can last 50+ years while reflecting heat and resisting all weather conditions.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-amber-700 mb-2">Material Options</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• <strong>Steel:</strong> 26-29 gauge, Galvalume coating</li>
                        <li>• <strong>Aluminum:</strong> Coastal/corrosion resistance</li>
                        <li>• <strong>Copper:</strong> Premium appearance, 100+ year life</li>
                        <li>• <strong>Standing Seam:</strong> No exposed fasteners</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-amber-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Investment Range</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Steel Panels:</span><span>$12-$18/sq ft</span></div>
                        <div className="flex justify-between"><span>Standing Seam:</span><span>$15-$25/sq ft</span></div>
                        <div className="flex justify-between"><span>Copper Premium:</span><span>$25-$35/sq ft</span></div>
                      </div>
                      <p className="text-amber-100 text-sm mt-3">50-year+ lifespan • Energy savings • Hail resistance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-emerald-800 mb-4">TPO Commercial Roofing</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For commercial buildings and flat-roof residential properties in Andrews, TPO (Thermoplastic Olefin) membrane roofing provides excellent value and performance in our extreme climate conditions.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-emerald-700 mb-2">TPO Advantages</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Heat-reflective white surface</li>
                        <li>• Chemically resistant membrane</li>
                        <li>• Flexible in temperature extremes</li>
                        <li>• Mechanically attached or ballasted</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-emerald-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Commercial Pricing</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>TPO Membrane:</span><span>$5.20-$8.00/sq ft</span></div>
                        <div className="flex justify-between"><span>EPDM Rubber:</span><span>$4.50-$7.50/sq ft</span></div>
                        <div className="flex justify-between"><span>Modified Bitumen:</span><span>$6.00-$9.00/sq ft</span></div>
                      </div>
                      <p className="text-emerald-100 text-sm mt-3">20-30 year warranties • Energy efficient • Low maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-indigo-800 text-center">The Andrews Advantage: Why Location Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">Economic Stability Creates Roofing Opportunities</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Andrews' position as a key player in the Permian Basin oil industry creates unique advantages for homeowners considering roof replacement. The median household income of $78,896 - significantly above the Texas average - means residents can invest in quality roofing systems that provide long-term value.</p>
                
                <h4 className="text-xl font-bold text-indigo-700 mb-3">Investment Benefits for Andrews Homeowners</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Property Value Protection:</strong> Quality roofs maintain home values in competitive market</li>
                  <li>• <strong>Insurance Premium Reductions:</strong> Class 4 roofs qualify for significant discounts</li>
                  <li>• <strong>Energy Efficiency:</strong> Reflective roofing reduces cooling costs by 15-25%</li>
                  <li>• <strong>Financing Options:</strong> Strong local economy supports favorable lending terms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Weather Patterns Unique to Andrews</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Located in the heart of West Texas, Andrews experiences weather patterns that demand specific roofing considerations. Understanding these patterns helps homeowners choose materials and timing that maximize their roofing investment.</p>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold text-purple-700 mb-3">Seasonal Roofing Calendar</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Spring (Mar-May):</span>
                      <span className="text-purple-600">Peak hail season - inspection time</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Summer (Jun-Aug):</span>
                      <span className="text-purple-600">Optimal installation weather</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Fall (Sep-Nov):</span>
                      <span className="text-purple-600">Last chance before winter</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Winter (Dec-Feb):</span>
                      <span className="text-purple-600">Emergency repairs only</span>
                    </div>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Andrews roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 impact-resistant shingles (residential) and TPO or metal (commercial) handle Texas hail, wind, and temperature extremes best.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will a new roof increase my home value?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. New roofs provide 60-70% ROI. Class 4 roofs add premium value with insurance discounts and reduced maintenance.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Andrews property owners. Expert roof replacement with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}