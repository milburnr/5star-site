import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Borger TX | 5 Star Roofing',
  description: "Professional roof replacement in Borger TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementBorgerPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Borger", url: "/roof-replacement-borger/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-borger/#localbusiness",
        "name": "5 Star Commercial Roofing - Borger Roof Replacement",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-borger/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Borger,_Texas", "name": "Borger", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Borger TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Borger",
            "description": "Professional roof replacement services in Borger, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Borger",
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
        "mainEntity": [{"@type":"Question","name":"When should I replace my Borger roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles (residential) and TPO or metal (commercial) handle Texas hail, wind, and temperature extremes best."}},{"@type":"Question","name":"Will a new roof increase my home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI. Class 4 roofs add premium value with insurance discounts and reduced maintenance."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-44-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Borger</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Borger. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Borger's Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof replacement throughout Borger and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings that define the Texas Panhandle climate.</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Since 2014, we've served Borger's 11,892 residents with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation for this historic petrochemical center.</p>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Understanding Borger's Unique Housing Market</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Borger represents a distinctive housing market shaped by its industrial heritage and economic transitions. As a historic petrochemical hub experiencing gradual population decline (-1.5% annually), the community presents unique roofing opportunities for property owners seeking to maintain and enhance their real estate investments.</p>
            
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
              <h4 className="text-xl font-bold text-purple-800 mb-2">Borger Community Profile</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Population:</strong> 11,892 residents (2024) - stabilizing community</li>
                <li>• <strong>Median Age:</strong> 36.3 years - established workforce</li>
                <li>• <strong>Median Income:</strong> $59,031 - industrial wage base</li>
                <li>• <strong>Ethnic Composition:</strong> 59.9% White, 32.2% Hispanic, 3.0% Black</li>
                <li>• <strong>Housing Character:</strong> Industrial-era construction (1920s-1960s) plus modern builds</li>
                <li>• <strong>Market Trend:</strong> Investment opportunity due to affordable housing costs</li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Borger's Industrial Heritage and Roofing Implications</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Founded during the Texas oil boom of the 1920s, Borger's housing stock reflects rapid industrial expansion followed by periods of economic adjustment. Many homes were built to accommodate petroleum workers during boom periods, creating a substantial inventory of properties with aging roofing systems that now require modernization to maintain value in today's market.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-orange-800 mb-3">Era-Based Housing Challenges</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>1920s-1930s Boom Construction:</strong> Original materials failing, structural updates needed</li>
                  <li><strong>1940s-1960s Industrial Expansion:</strong> Post-war materials approaching replacement</li>
                  <li><strong>1970s-1990s Modernization:</strong> Standard asphalt shingles at lifecycle end</li>
                  <li><strong>Contemporary Updates:</strong> Opportunities for energy-efficient improvements</li>
                </ul>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-cyan-800 mb-3">Panhandle Climate Factors</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Extreme Wind Events:</strong> Open prairie allows 40-70 mph sustained winds</li>
                  <li><strong>Hail Vulnerability:</strong> Located in peak hail activity zone</li>
                  <li><strong>Temperature Stress:</strong> -15°F to 105°F annual range damages materials</li>
                  <li><strong>Industrial Pollution:</strong> Chemical exposure accelerates roof degradation</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Borger Roof Replacement Value Analysis 2025</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Strategic investment guidance for Borger property owners looking to maximize value in a transitioning market.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-emerald-800 mb-3">Essential Upgrade</h3>
                <div className="text-3xl font-bold text-emerald-700 mb-2">$7,500-$11,500</div>
                <p className="text-sm text-emerald-600 mb-4">Average 1,200-1,600 sq ft home</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Standard 3-tab shingles</li>
                  <li>• Basic underlayment system</li>
                  <li>• Code-compliant ventilation</li>
                  <li>• 20-year material warranty</li>
                  <li>• Preserves property value</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-xl border-2 border-violet-300 transform scale-105">
                <h3 className="text-2xl font-bold text-violet-800 mb-3">Market Leader</h3>
                <div className="text-3xl font-bold text-violet-700 mb-2">$11,500-$17,500</div>
                <p className="text-sm text-violet-600 mb-4">Class 4 impact-resistant upgrade</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Class 4 architectural shingles</li>
                  <li>• Synthetic underlayment</li>
                  <li>• Advanced ventilation system</li>
                  <li>• 30-50 year warranties</li>
                  <li>• Insurance premium discounts</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl border-2 border-rose-300">
                <h3 className="text-2xl font-bold text-rose-800 mb-3">Premium Investment</h3>
                <div className="text-3xl font-bold text-rose-700 mb-2">$17,500-$32,000</div>
                <p className="text-sm text-rose-600 mb-4">Metal and luxury systems</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Standing seam metal roofing</li>
                  <li>• Designer shingle options</li>
                  <li>• Premium insulation upgrades</li>
                  <li>• Lifetime warranties available</li>
                  <li>• Maximum weather resistance</li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-xl">
              <h4 className="text-xl font-bold text-indigo-800 mb-2">Borger-Specific Investment Considerations</h4>
              <p className="text-gray-700 mb-3">Local market factors that affect roofing investment returns:</p>
              <ul className="text-gray-700 space-y-2 grid md:grid-cols-2 gap-x-8">
                <li>• <strong>Property Value Protection:</strong> Quality roofing maintains equity in transitioning market</li>
                <li>• <strong>Energy Cost Reduction:</strong> Improved insulation reduces heating costs significantly</li>
                <li>• <strong>Insurance Considerations:</strong> Hail-resistant roofs qualify for substantial discounts</li>
                <li>• <strong>Resale Advantage:</strong> Modern roofing differentiates properties in buyer's market</li>
                <li>• <strong>Maintenance Reduction:</strong> Newer systems reduce ongoing repair costs</li>
                <li>• <strong>Rental Property Appeal:</strong> Quality roofing attracts better tenants, higher rents</li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Roofing Materials Engineered for Panhandle Extremes</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Borger's location in the Texas Panhandle demands roofing materials capable of withstanding some of the state's most extreme weather conditions.</p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-blue-800 mb-4">Wind-Resistant Architectural Shingles - Panhandle Proven</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Borger's wind-dominated environment, high-performance architectural shingles with enhanced fastening systems provide essential protection against the constant stress of Panhandle winds. These shingles are specifically engineered for the extreme conditions common to this region.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-blue-700 mb-2">Panhandle Performance Features</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Wind resistance certified to 130+ mph</li>
                        <li>• SBS-modified asphalt for flexibility</li>
                        <li>• Enhanced tab bonding prevents uplift</li>
                        <li>• Chemical resistance against industrial pollution</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-blue-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Borger Investment Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>High-Wind Shingles:</span><span>$6.50-$9.00/sq ft</span></div>
                        <div className="flex justify-between"><span>Expert Installation:</span><span>$4.00-$5.50/sq ft</span></div>
                        <div className="flex justify-between border-t border-blue-400 pt-2 font-bold"><span>Total System:</span><span>$10.50-$14.50/sq ft</span></div>
                      </div>
                      <p className="text-blue-100 text-sm mt-3">Wind warranty • Chemical resistance • 40-50 year lifespan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Metal Roofing - Industrial Strength Protection</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">Metal roofing represents the ultimate defense against Borger's harsh climate conditions. With superior wind resistance, hail protection, and chemical resistance, metal roofing offers unmatched durability for both residential and commercial properties in this industrial environment.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-slate-700 mb-2">Industrial-Grade Options</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• <strong>Galvanized Steel:</strong> Enhanced corrosion resistance</li>
                        <li>• <strong>Galvalume Coating:</strong> Superior chemical protection</li>
                        <li>• <strong>Aluminum Systems:</strong> Lightweight, no rust potential</li>
                        <li>• <strong>Standing Seam:</strong> Concealed fasteners eliminate leak points</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-slate-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Metal System Pricing</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Exposed Fastener:</span><span>$8-$13/sq ft</span></div>
                        <div className="flex justify-between"><span>Standing Seam:</span><span>$13-$20/sq ft</span></div>
                        <div className="flex justify-between"><span>Premium Coatings:</span><span>$18-$28/sq ft</span></div>
                      </div>
                      <p className="text-slate-100 text-sm mt-3">50+ year lifespan • Energy efficient • Hail resistant</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-green-800 mb-4">Modified Bitumen Commercial Systems</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Borger's industrial and commercial properties, modified bitumen roofing systems provide robust protection against chemical exposure, extreme temperatures, and high winds. These systems are specifically designed for the demanding conditions of industrial environments.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-green-700 mb-2">Industrial Applications</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Chemical and oil resistance</li>
                        <li>• Reinforced membrane construction</li>
                        <li>• Self-adhered or torch-applied</li>
                        <li>• Excellent puncture resistance</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-green-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Commercial Investment</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>SBS Modified:</span><span>$7.50-$11.00/sq ft</span></div>
                        <div className="flex justify-between"><span>APP Modified:</span><span>$6.50-$9.50/sq ft</span></div>
                        <div className="flex justify-between"><span>Multi-Layer Systems:</span><span>$9.00-$14.00/sq ft</span></div>
                      </div>
                      <p className="text-green-100 text-sm mt-3">20-30 year warranties • Chemical resistant • Low maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-yellow-800 text-center">Borger Investment Strategy: Maximizing Value in Transition</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-yellow-700 mb-4">Market Positioning Through Quality</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">In a stabilizing market like Borger's, strategic roofing investment differentiates your property while providing tangible benefits. Quality roofing systems not only protect your investment but position your property advantageously whether you're maintaining a family home or managing rental properties.</p>
                
                <h4 className="text-xl font-bold text-yellow-700 mb-3">Strategic Investment Benefits</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Market Differentiation:</strong> Stand out in competitive rental/sales markets</li>
                  <li>• <strong>Insurance Savings:</strong> Lower premiums offset installation costs over time</li>
                  <li>• <strong>Energy Efficiency:</strong> Reduced utility costs increase property appeal</li>
                  <li>• <strong>Maintenance Reduction:</strong> Lower ongoing repair and replacement costs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-700 mb-4">Climate Adaptation Strategy</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Borger's extreme climate requires forward-thinking roofing choices. With temperature swings from -15°F to 105°F, constant wind stress, and industrial chemical exposure, standard roofing materials face accelerated aging. Investing in climate-appropriate systems provides long-term value protection.</p>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold text-amber-700 mb-3">Climate Resilience Factors</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Wind Resistance:</span>
                      <span className="text-amber-600">Class H rating minimum</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Impact Rating:</span>
                      <span className="text-amber-600">Class 4 preferred</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Chemical Resistance:</span>
                      <span className="text-amber-600">Industrial-grade coatings</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Temperature Range:</span>
                      <span className="text-amber-600">-20°F to 120°F rated</span>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Borger roof?</AccordionTrigger>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Borger property owners. Expert roof replacement with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}