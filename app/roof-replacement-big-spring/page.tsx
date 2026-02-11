import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Big Spring TX | 5 Star Roofing',
  description: "Professional roof replacement in Big Spring TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementBigSpringPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Big Spring", url: "/roof-replacement-big-spring/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-big-spring/#localbusiness",
        "name": "5 Star Commercial Roofing - Big Spring Roof Replacement",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-big-spring/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Big Spring TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Big Spring",
            "description": "Professional roof replacement services in Big Spring, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Big Spring",
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
        "mainEntity": [{"@type":"Question","name":"When should I replace my Big Spring roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles (residential) and TPO or metal (commercial) handle Texas hail, wind, and temperature extremes best."}},{"@type":"Question","name":"Will a new roof increase my home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI. Class 4 roofs add premium value with insurance discounts and reduced maintenance."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-25-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Big Spring</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Big Spring. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Big Spring's Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof replacement throughout Big Spring and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings that define West Texas living.</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Since 2014, we've served Big Spring's 22,541 residents with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation for this historic West Texas community.</p>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Big Spring Housing Market Analysis</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Big Spring stands as a testament to West Texas resilience, with a housing market that reflects both its railroad heritage and modern economic diversification. With approximately 10,293 housing units serving a population of 22,541, the community offers unique roofing challenges and opportunities that homeowners must understand.</p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h4 className="text-xl font-bold text-blue-800 mb-2">Big Spring Demographics Overview</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Population:</strong> 22,541 residents (2024)</li>
                <li>• <strong>Housing Units:</strong> 10,293 total units</li>
                <li>• <strong>Median Age:</strong> 36.5 years - established community</li>
                <li>• <strong>Median Income:</strong> $70,532 - stable economic base</li>
                <li>• <strong>Ethnic Composition:</strong> 50.8% Hispanic, 38.8% White, 5.9% Black</li>
                <li>• <strong>Housing Era:</strong> Railroad boom homes (1920s-1950s) plus modern construction</li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Big Spring's Historic Housing Stock and Roofing Needs</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Big Spring's housing reflects its rich history as a railroad town and agricultural center. Many homes date back to the railroad expansion era of the 1920s through 1950s, creating a substantial inventory of properties approaching or exceeding the typical roof replacement timeline. The combination of historic construction methods and decades of harsh West Texas weather creates immediate roofing replacement opportunities.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-amber-800 mb-3">Historical Housing Patterns</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>1920s-1940s Railroad Era:</strong> Original tar and gravel, wood shingles</li>
                  <li><strong>1950s-1970s Expansion:</strong> Early asphalt, minimal insulation</li>
                  <li><strong>1980s-1990s Growth:</strong> Standard composition shingles</li>
                  <li><strong>Modern Construction:</strong> Opportunity for impact-resistant upgrades</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-red-800 mb-3">West Texas Climate Impact</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Hail Corridor:</strong> Frequent spring hailstorms damage aging roofs</li>
                  <li><strong>Wind Stress:</strong> Constant 15-30 mph winds with 60+ mph gusts</li>
                  <li><strong>Temperature Cycling:</strong> Daily 40°F+ swings crack materials</li>
                  <li><strong>UV Degradation:</strong> High altitude intensifies sun damage</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Big Spring Roof Replacement Investment Guide 2025</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Comprehensive pricing analysis for Big Spring's diverse housing stock, from historic railroad homes to modern construction.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-3">Essential Protection</h3>
                <div className="text-3xl font-bold text-green-700 mb-2">$8,500-$13,500</div>
                <p className="text-sm text-green-600 mb-4">Average 1,400-1,800 sq ft home</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Standard 3-tab shingles</li>
                  <li>• Basic underlayment</li>
                  <li>• Standard ventilation</li>
                  <li>• 20-year material warranty</li>
                  <li>• Code-compliant installation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300 transform scale-105">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Smart Investment</h3>
                <div className="text-3xl font-bold text-blue-700 mb-2">$13,500-$19,500</div>
                <p className="text-sm text-blue-600 mb-4">Class 4 impact-resistant system</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Class 4 architectural shingles</li>
                  <li>• Synthetic underlayment</li>
                  <li>• Advanced ridge ventilation</li>
                  <li>• 30-50 year warranties</li>
                  <li>• Insurance discounts up to 35%</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Premium Solutions</h3>
                <div className="text-3xl font-bold text-purple-700 mb-2">$19,500-$38,000</div>
                <p className="text-sm text-purple-600 mb-4">Metal and luxury materials</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Standing seam metal roofing</li>
                  <li>• Architectural slate/tile options</li>
                  <li>• Premium ventilation systems</li>
                  <li>• Lifetime material warranties</li>
                  <li>• Maximum weather resistance</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl">
              <h4 className="text-xl font-bold text-orange-800 mb-2">Big Spring Market Factors</h4>
              <p className="text-gray-700 mb-3">Several local factors impact roofing costs in Big Spring:</p>
              <ul className="text-gray-700 space-y-2 grid md:grid-cols-2 gap-x-8">
                <li>• <strong>Historic Home Complexity:</strong> Older homes may require structural updates</li>
                <li>• <strong>Materials Transport:</strong> Location adds 3-8% to material costs</li>
                <li>• <strong>Permit Process:</strong> City permits typically $150-350</li>
                <li>• <strong>Insurance Claims Volume:</strong> High hail frequency creates adjuster delays</li>
                <li>• <strong>Seasonal Demand:</strong> Post-storm periods see 20-30% price increases</li>
                <li>• <strong>Labor Market:</strong> Steady local workforce keeps labor costs competitive</li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Roofing Materials Optimized for Big Spring Climate</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Material selection for Big Spring must account for severe weather patterns, historic home compatibility, and long-term value retention.</p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-indigo-800 mb-4">Class 4 Impact-Resistant Shingles - Top Recommendation</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Big Spring's position in Texas's hail corridor, Class 4 shingles provide essential protection while respecting the architectural character of historic neighborhoods. These premium shingles undergo UL 2218 testing, withstanding 2-inch steel ball impacts without cracking.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-indigo-700 mb-2">Big Spring Benefits</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Survives quarter-to-golf ball hail</li>
                        <li>• Wind resistance to 130 mph</li>
                        <li>• Compatible with historic architecture</li>
                        <li>• Algae resistance in humid periods</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-indigo-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Investment Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Material Cost:</span><span>$6.00-$8.50/sq ft</span></div>
                        <div className="flex justify-between"><span>Professional Installation:</span><span>$3.50-$5.00/sq ft</span></div>
                        <div className="flex justify-between border-t border-indigo-400 pt-2 font-bold"><span>Total Investment:</span><span>$9.50-$13.50/sq ft</span></div>
                      </div>
                      <p className="text-indigo-100 text-sm mt-3">Annual insurance savings: $300-800</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Metal Roofing - Ultimate Durability</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">Metal roofing represents the pinnacle of protection for Big Spring properties. With proper installation, metal roofs can serve 50+ years while providing superior resistance to hail, wind, and fire - critical considerations for West Texas properties.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-slate-700 mb-2">Material Categories</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• <strong>Galvalume Steel:</strong> 26-29 gauge, 50-year coating warranty</li>
                        <li>• <strong>Aluminum:</strong> Corrosion-proof, lightweight option</li>
                        <li>• <strong>Copper:</strong> Premium choice, 100+ year lifespan</li>
                        <li>• <strong>Stone-Coated Steel:</strong> Traditional appearance, metal durability</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-slate-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Big Spring Pricing</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Exposed Fastener:</span><span>$9-$14/sq ft</span></div>
                        <div className="flex justify-between"><span>Standing Seam:</span><span>$14-$22/sq ft</span></div>
                        <div className="flex justify-between"><span>Premium Copper:</span><span>$22-$35/sq ft</span></div>
                      </div>
                      <p className="text-slate-100 text-sm mt-3">ROI: 70-85% • Energy savings: 20-30% • 50+ year lifespan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-teal-800 mb-4">Commercial TPO Systems</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Big Spring's commercial and flat-roof residential properties, TPO (Thermoplastic Olefin) membrane systems provide excellent performance in extreme temperature conditions while maintaining energy efficiency through reflective surfaces.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-teal-700 mb-2">System Advantages</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Reflects 85%+ of solar radiation</li>
                        <li>• Maintains flexibility in temperature extremes</li>
                        <li>• Chemically resistant to oils/greases</li>
                        <li>• Mechanically attached or fully adhered</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-teal-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Commercial Investment</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>TPO Membrane:</span><span>$6.50-$9.50/sq ft</span></div>
                        <div className="flex justify-between"><span>EPDM Alternative:</span><span>$5.50-$8.50/sq ft</span></div>
                        <div className="flex justify-between"><span>Modified Bitumen:</span><span>$7.00-$10.00/sq ft</span></div>
                      </div>
                      <p className="text-teal-100 text-sm mt-3">20-30 year warranties • ENERGY STAR qualified • Low maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-rose-800 text-center">The Big Spring Advantage: Historic Character Meets Modern Protection</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-rose-700 mb-4">Preserving Architectural Heritage</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Big Spring's historic neighborhoods require roofing solutions that respect architectural integrity while providing modern protection. Our expertise in historic home roofing ensures your replacement maintains the character that makes Big Spring special while delivering contemporary performance.</p>
                
                <h4 className="text-xl font-bold text-rose-700 mb-3">Historic Home Considerations</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Architectural Compatibility:</strong> Materials that complement 1920s-1950s designs</li>
                  <li>• <strong>Structural Assessment:</strong> Evaluation of historic framing and decking</li>
                  <li>• <strong>Code Compliance:</strong> Modern safety standards without compromising character</li>
                  <li>• <strong>Energy Efficiency:</strong> Improved insulation and ventilation retrofits</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Modern Protection Standards</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Today's roofing technology offers Big Spring homeowners protection levels unimaginable when many of these homes were built. Impact resistance, energy efficiency, and extended warranties provide peace of mind in an increasingly unpredictable climate.</p>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold text-pink-700 mb-3">Weather Protection Timeline</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Spring Storm Season:</span>
                      <span className="text-pink-600">March-May damage assessment</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Summer Installation:</span>
                      <span className="text-pink-600">June-August optimal conditions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Fall Preparation:</span>
                      <span className="text-pink-600">September-November final work</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Winter Protection:</span>
                      <span className="text-pink-600">Emergency repairs only</span>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Big Spring roof?</AccordionTrigger>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Big Spring property owners. Expert roof replacement with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}