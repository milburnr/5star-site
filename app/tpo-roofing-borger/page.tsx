import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'TPO Roofing Borger TX | 5 Star Roofing',
  description: "Expert tpo roofing in Borger TX. Texas Panhandle experiences 7-9 hailstorms annually. Refinery town. Free inspections. Call (806) 622-6041",
};

export default function TpoRoofingBorgerPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "TPO Roofing",
                      "url": "/tpo-roofing/"
              },
              {
                      "name": "Borger",
                      "url": "/tpo-roofing-borger/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-borger/#localbusiness",
        "name": "5 Star Commercial Roofing - Borger TPO Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.6678, "longitude": -101.3974 },
        "url": "https://5starroofingpros.com/tpo-roofing-borger/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Borger,_Texas", "name": "Borger", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert tpo roofing services in Borger, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "telephone": "+18066226041",
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "84",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Borger,_Texas",
              "name": "Borger",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert TPO roofing in Borger TX. Texas Panhandle refinery town experiences 7-9 hailstorms annually. Energy-efficient commercial systems."
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why is TPO roofing ideal for Borger commercial buildings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TPO roofing excels in Borger's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 7-9 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Borger's severe weather and industrial environment."
                }
              },
              {
                "@type": "Question",
                "name": "How long does TPO roofing last in Borger's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality TPO roofing systems typically last 20-30 years in Borger when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and industrial environment can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan."
                }
              },
              {
                "@type": "Question",
                "name": "Is TPO roofing energy-efficient for Borger businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, TPO's white reflective surface significantly reduces cooling costs in Borger's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Borger commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates."
                }
              },
              {
                "@type": "Question",
                "name": "How much does TPO roofing cost in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TPO roofing in Borger typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Borger commercial properties."
                }
              },
              {
                "@type": "Question",
                "name": "Can TPO roofing withstand Borger's hailstorms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Borger's 7-9 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/tpo-roof-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Tpo Roofing in <span className="text-brand-gold-light">Borger</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Energy-Efficient TPO Systems | Commercial Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert tpo roofing in Borger TX. Texas Panhandle experiences 7-9 hailstorms annually. Refinery town. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={180} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Borger Projects</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
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
              Borger's Tpo Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Borger's location in the Texas Panhandle creates unique roofing challenges. Industrial petrochemical center. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and industrial environment with petrochemical operations and Panhandle weather extremes—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 180+ Borger properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Borger property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Borger Businesses Choose TPO Roofing
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">📊 Commercial Performance</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ 20-30 year lifespan in Panhandle weather</li>
                  <li>✓ Class A fire resistance for industrial zones</li>
                  <li>✓ Chemical resistance for petrochemical environment</li>
                  <li>✓ Energy savings up to 30% annually</li>
                  <li>✓ OSHA-compliant walkways available</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏭 Industrial Applications</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Manufacturing facilities</li>
                  <li>✓ Warehouses and distribution centers</li>
                  <li>✓ Office buildings and retail</li>
                  <li>✓ Educational institutions</li>
                  <li>✓ Healthcare facilities</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Borger's Commercial Roofing Challenges</h3>
              <p className="text-lg text-gray-700 mb-4">
                Borger's unique industrial environment creates specific roofing demands. The city's petrochemical operations, combined with Texas Panhandle weather extremes, require roofing systems that can withstand chemical exposure, extreme temperature fluctuations, and severe weather events including frequent hailstorms and high winds.
              </p>
              <p className="text-lg text-gray-700">
                TPO roofing excels in these conditions due to its chemical resistance, UV stability, and proven performance in industrial environments. Our commercial-grade TPO systems are specifically designed for Borger's challenging climate and industrial atmosphere.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Installation Process for Borger Commercial Properties
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Phase 1: Pre-Installation Assessment</h3>
                <p className="text-gray-700 mb-3">
                  Complete building analysis including structural capacity evaluation, existing roof condition assessment, and energy efficiency analysis. We coordinate with Borger building officials to ensure all permits are secured before work begins.
                </p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Structural engineering review for industrial loads</li>
                  <li>• Existing membrane removal planning</li>
                  <li>• Insulation requirements based on building use</li>
                  <li>• Access planning for industrial facilities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Phase 2: Deck Preparation & Insulation</h3>
                <p className="text-gray-700 mb-3">
                  Professional deck preparation ensures optimal TPO performance. Our team installs high-R-value insulation systems designed for Borger's extreme temperature variations, maximizing energy efficiency for commercial operations.
                </p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Deck cleaning and repair</li>
                  <li>• Vapor barrier installation</li>
                  <li>• Polyiso or XPS insulation placement</li>
                  <li>• Cover board installation for membrane protection</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Phase 3: TPO Membrane Installation</h3>
                <p className="text-gray-700 mb-3">
                  Heat-welded TPO installation using commercial-grade equipment. Our certified installers ensure every seam meets manufacturer specifications for maximum durability in Borger's challenging industrial environment.
                </p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Precision membrane cutting and fitting</li>
                  <li>• Heat-welded seam joining (400°F minimum)</li>
                  <li>• Mechanical fastening per wind uplift requirements</li>
                  <li>• Penetration sealing and flashing details</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Phase 4: Quality Control & Final Inspection</h3>
                <p className="text-gray-700 mb-3">
                  Comprehensive testing ensures system integrity. Every seam is tested, all penetrations are verified watertight, and the complete system undergoes final inspection before project completion and warranty activation.
                </p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Electronic leak detection testing</li>
                  <li>• Seam strength verification</li>
                  <li>• Final walkthrough with building owner</li>
                  <li>• Warranty documentation and maintenance schedule</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Commercial TPO Benefits for Borger Businesses
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Energy Efficiency & Cost Savings</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="font-bold mb-2">Summer Cooling</h4>
                  <p className="text-gray-700">White TPO membrane reflects 80%+ of UV rays, reducing cooling costs by 20-30% during Borger's hot summers.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="font-bold mb-2">Winter Insulation</h4>
                  <p className="text-gray-700">Continuous insulation layer eliminates thermal bridging, maintaining consistent interior temperatures.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="font-bold mb-2">Utility Rebates</h4>
                  <p className="text-gray-700">Energy-efficient TPO systems qualify for local utility rebates and federal tax credits.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Weather Protection & Durability</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3">Hail Resistance</h4>
                  <p className="text-gray-700 mb-4">
                    Borger experiences 7-9 hailstorms annually. Our reinforced TPO systems with impact-resistant membranes (60-80 mil thickness) provide superior protection against hail damage.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• UL 2218 Class 4 impact rating available</li>
                    <li>• Flexible membrane absorbs impact energy</li>
                    <li>• Insurance premium discounts often available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Wind Uplift Resistance</h4>
                  <p className="text-gray-700 mb-4">
                    Texas Panhandle winds regularly exceed 60 mph. Our TPO systems are engineered for UL-580 Class 90 wind uplift resistance, ensuring membrane security during severe weather.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Fully adhered or mechanically attached systems</li>
                    <li>• Enhanced edge and corner fastening</li>
                    <li>• Proven performance in 100+ mph winds</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Maintenance for Borger Commercial Properties
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Preventive Maintenance Schedule</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-brand-gold pl-4">
                      <h4 className="font-bold">Semi-Annual Inspections</h4>
                      <p className="text-gray-700">Spring and fall inspections identify potential issues before they become costly problems.</p>
                    </div>
                    <div className="border-l-4 border-brand-gold pl-4">
                      <h4 className="font-bold">Post-Storm Assessments</h4>
                      <p className="text-gray-700">Immediate inspection after hailstorms or severe wind events to document any damage for insurance claims.</p>
                    </div>
                    <div className="border-l-4 border-brand-gold pl-4">
                      <h4 className="font-bold">Membrane Cleaning</h4>
                      <p className="text-gray-700">Annual cleaning maintains reflectivity and extends membrane life in Borger's dusty environment.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Common Maintenance Items</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      <span><strong>Drain clearing:</strong> Prevent ponding water that can stress the membrane</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      <span><strong>Seam inspection:</strong> Check heat-welded seams for integrity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      <span><strong>Penetration sealing:</strong> Maintain watertight seals around HVAC and other penetrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      <span><strong>Edge detail review:</strong> Ensure proper termination at walls and parapets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      <span><strong>Fastener inspection:</strong> Verify mechanical attachment security</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Roofing FAQs - Borger, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is TPO roofing ideal for Borger commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing excels in Borger's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 7-9 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Borger's severe weather and industrial environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does TPO roofing last in Borger's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality TPO roofing systems typically last 20-30 years in Borger when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and industrial environment can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is TPO roofing energy-efficient for Borger businesses?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, TPO's white reflective surface significantly reduces cooling costs in Borger's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Borger commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does TPO roofing cost in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing in Borger typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Borger commercial properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can TPO roofing withstand Borger's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Borger's 7-9 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Amarillo Location
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amarillo, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Borger property owners. Expert tpo roofing with comprehensive warranties and insurance claim assistance.
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
