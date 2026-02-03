import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "Roof Replacement Dumas TX | Expert Service | Free Inspection",
  description: "Professional roof replacement in Dumas TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementDumasPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Dumas", url: "/roof-replacement-dumas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas Roof Replacement",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Dumas TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Dumas",
            "description": "Professional roof replacement services in Dumas, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Dumas",
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
        "mainEntity": [{"@type":"Question","name":"When should I replace my Dumas roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles (residential) and TPO or metal (commercial) handle Texas hail, wind, and temperature extremes best."}},{"@type":"Question","name":"Will a new roof increase my home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI. Class 4 roofs add premium value with insurance discounts and reduced maintenance."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/residential-roofing-5.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Dumas</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Dumas. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Dumas's Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof replacement throughout Dumas and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings that define this thriving Panhandle community.</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Since 2014, we've served Dumas's 14,834 residents with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation for this rapidly growing agricultural and energy center.</p>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Dumas's Growing Community and Housing Market</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Dumas represents one of the Texas Panhandle's fastest-growing communities, with a 2.8% annual growth rate driven by agricultural innovation and energy sector expansion. This diverse community, with a Hispanic majority (59.1%) and young median age (29.3 years), creates unique roofing needs that combine family-focused durability with economic value considerations.</p>
            
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 mb-8">
              <h4 className="text-xl font-bold text-rose-800 mb-2">Dumas Community Demographics</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Population:</strong> 14,834 residents (2024) - growing rapidly at 2.8% annually</li>
                <li>• <strong>Median Age:</strong> 29.3 years - young, family-oriented community</li>
                <li>• <strong>Median Income:</strong> $62,129 - working-class agricultural and energy economy</li>
                <li>• <strong>Ethnic Composition:</strong> 59.1% Hispanic, 28.5% White, 5.1% Multi-racial</li>
                <li>• <strong>Housing Character:</strong> Family homes, agricultural worker housing, new developments</li>
                <li>• <strong>Economic Base:</strong> Agriculture, food processing, energy, and related services</li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Agricultural Economy and Housing Considerations</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Dumas's economy centers around agriculture and food processing, with major employers including agricultural technology companies and energy operations. This creates a housing market focused on family stability and value, where roofing investments must balance initial cost with long-term protection in a climate known for severe weather events.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-green-800 mb-3">Family-Focused Housing Patterns</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Established Neighborhoods:</strong> 1970s-1990s family homes requiring updates</li>
                  <li><strong>New Growth Areas:</strong> Modern construction with young families</li>
                  <li><strong>Agricultural Worker Housing:</strong> Practical, durable housing needs</li>
                  <li><strong>Starter Home Market:</strong> First-time buyers seeking value and reliability</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-yellow-800 mb-3">Panhandle Weather Challenges</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Severe Hailstorms:</strong> Spring and early summer produce destructive hail</li>
                  <li><strong>High Wind Events:</strong> Open terrain creates 50+ mph sustained winds</li>
                  <li><strong>Temperature Extremes:</strong> -10°F to 105°F stresses roofing materials</li>
                  <li><strong>Agricultural Dust:</strong> Airborne particles affect roof system performance</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Dumas Family-Focused Roof Replacement Guide 2025</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Value-driven roofing solutions for Dumas families balancing protection, durability, and affordability in a growing community.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Family Value</h3>
                <div className="text-3xl font-bold text-blue-700 mb-2">$8,000-$12,500</div>
                <p className="text-sm text-blue-600 mb-4">Average 1,300-1,700 sq ft home</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Quality architectural shingles</li>
                  <li>• Standard underlayment system</li>
                  <li>• Proper ventilation installation</li>
                  <li>• 25-year manufacturer warranty</li>
                  <li>• Family budget friendly</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300 transform scale-105">
                <h3 className="text-2xl font-bold text-green-800 mb-3">Smart Protection</h3>
                <div className="text-3xl font-bold text-green-700 mb-2">$12,500-$18,000</div>
                <p className="text-sm text-green-600 mb-4">Impact-resistant family upgrade</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Class 4 impact-resistant shingles</li>
                  <li>• Synthetic underlayment</li>
                  <li>• Enhanced ridge ventilation</li>
                  <li>• 30-50 year warranties</li>
                  <li>• Insurance discounts 15-35%</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-300">
                <h3 className="text-2xl font-bold text-amber-800 mb-3">Premium Investment</h3>
                <div className="text-3xl font-bold text-amber-700 mb-2">$18,000-$30,000</div>
                <p className="text-sm text-amber-600 mb-4">Metal and advanced systems</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Standing seam metal roofing</li>
                  <li>• Designer shingle options</li>
                  <li>• Advanced insulation systems</li>
                  <li>• Lifetime material warranties</li>
                  <li>• Maximum weather protection</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-xl">
              <h4 className="text-xl font-bold text-purple-800 mb-2">Dumas Family Investment Factors</h4>
              <p className="text-gray-700 mb-3">Key considerations for family-focused roofing decisions:</p>
              <ul className="text-gray-700 space-y-2 grid md:grid-cols-2 gap-x-8">
                <li>• <strong>Family Budget Planning:</strong> Flexible payment options available</li>
                <li>• <strong>Insurance Claims Support:</strong> Bilingual assistance for diverse community</li>
                <li>• <strong>Energy Cost Reduction:</strong> Improved insulation reduces utility bills</li>
                <li>• <strong>Property Value Protection:</strong> Quality roofing maintains home equity</li>
                <li>• <strong>Safety Considerations:</strong> Impact-resistant materials protect children</li>
                <li>• <strong>Community Standards:</strong> Roofing choices that enhance neighborhood appeal</li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Roofing Materials for Dumas Families and Climate</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Practical material choices designed for family homes in the Texas Panhandle's challenging agricultural environment.</p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-cyan-800 mb-4">Impact-Resistant Family Shingles - Community Favorite</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Dumas families, Class 4 impact-resistant shingles provide the ideal combination of protection, value, and peace of mind. These shingles are specifically engineered to withstand the severe hailstorms that regularly impact the Texas Panhandle while fitting within family budgets.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-cyan-700 mb-2">Family Protection Benefits</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Withstands 1.75+ inch hail impacts</li>
                        <li>• Wind resistance to 130 mph gusts</li>
                        <li>• Enhanced granule adhesion for longevity</li>
                        <li>• Available in family-friendly color options</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-cyan-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Family Value Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Impact Shingles:</span><span>$6.50-$8.50/sq ft</span></div>
                        <div className="flex justify-between"><span>Professional Install:</span><span>$4.00-$5.50/sq ft</span></div>
                        <div className="flex justify-between border-t border-cyan-400 pt-2 font-bold"><span>Family Investment:</span><span>$10.50-$14.00/sq ft</span></div>
                      </div>
                      <p className="text-cyan-100 text-sm mt-3">Annual insurance savings • 30-40 year lifespan • Family peace of mind</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-green-800 mb-4">Metal Roofing - Long-Term Family Investment</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">Metal roofing appeals to Dumas families planning for long-term residence and value. With proper installation, metal roofs can protect family homes for 50+ years while providing superior energy efficiency and requiring minimal maintenance - important factors for busy agricultural community families.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-green-700 mb-2">Long-Term Family Benefits</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• <strong>Galvalume Steel:</strong> 50+ year lifespan with warranty</li>
                        <li>• <strong>Energy Efficiency:</strong> Cool roof technology reduces cooling costs</li>
                        <li>• <strong>Low Maintenance:</strong> Minimal upkeep for busy families</li>
                        <li>• <strong>Fire Resistance:</strong> Additional safety for rural properties</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-green-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Metal Investment Range</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Steel Panels:</span><span>$11-$17/sq ft</span></div>
                        <div className="flex justify-between"><span>Standing Seam:</span><span>$15-$23/sq ft</span></div>
                        <div className="flex justify-between"><span>Stone-Coated:</span><span>$13-$20/sq ft</span></div>
                      </div>
                      <p className="text-green-100 text-sm mt-3">Generational investment • Energy savings • Agricultural durability</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-orange-800 mb-4">Agricultural Property Roofing Systems</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Dumas properties with agricultural operations, roofing systems must withstand not only severe weather but also the unique challenges of agricultural environments including chemical exposure, equipment vibration, and increased dust loads that can impact system performance.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-orange-700 mb-2">Agricultural Environment Solutions</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Chemical-resistant coatings and materials</li>
                        <li>• Enhanced fastening for equipment vibration</li>
                        <li>• Dust-resistant ventilation systems</li>
                        <li>• UV-stable materials for high exposure</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-orange-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Agricultural Property Pricing</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Enhanced Shingles:</span><span>$9.00-$13.00/sq ft</span></div>
                        <div className="flex justify-between"><span>Metal Systems:</span><span>$12.00-$20.00/sq ft</span></div>
                        <div className="flex justify-between"><span>Commercial TPO:</span><span>$7.50-$12.00/sq ft</span></div>
                      </div>
                      <p className="text-orange-100 text-sm mt-3">Agricultural durability • Chemical resistance • Equipment compatibility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-violet-800 text-center">Dumas Community Focus: Growing Together with Quality</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-violet-700 mb-4">Supporting Community Growth</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Dumas's rapid 2.8% annual growth reflects the success of its agricultural economy and the arrival of young families seeking opportunity. Quality roofing investment supports this growth by protecting family homes and enhancing the community's appeal to new residents and businesses.</p>
                
                <h4 className="text-xl font-bold text-violet-700 mb-3">Community Investment Benefits</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Family Security:</strong> Impact-resistant roofs protect children and property</li>
                  <li>• <strong>Economic Stability:</strong> Quality housing attracts business investment</li>
                  <li>• <strong>Energy Efficiency:</strong> Reduced utility costs help family budgets</li>
                  <li>• <strong>Community Pride:</strong> Well-maintained homes enhance neighborhood appeal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Agricultural Climate Adaptation</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Dumas's position in the heart of Texas agricultural country requires roofing systems that can handle both severe weather and the unique environmental factors of agricultural operations. Smart material selection ensures long-term protection and value.</p>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold text-purple-700 mb-3">Agricultural Season Considerations</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Spring Planning:</span>
                      <span className="text-purple-600">Pre-storm season preparation</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Summer Installation:</span>
                      <span className="text-purple-600">Between planting and harvest</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Fall Projects:</span>
                      <span className="text-purple-600">Post-harvest completion</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Winter Preparation:</span>
                      <span className="text-purple-600">Next season planning</span>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Dumas roof?</AccordionTrigger>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Dumas property owners. Expert roof replacement with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}