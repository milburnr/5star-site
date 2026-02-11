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
  title: "TPO Roofing Big Spring TX | 5 Star Commercial Roofing",
  description: "Expert TPO roofing installation in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingBigSpringPage() {
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
                      "name": "Big Spring",
                      "url": "/tpo-roofing-big-spring/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-big-spring/#localbusiness",
        "name": "5 Star Commercial Roofing - Big Spring TPO Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.2504, "longitude": -101.4787 },
        "url": "https://5starroofingpros.com/tpo-roofing-big-spring/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert tpo roofing services in Big Spring, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "telephone": "(806) 622-6041",
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
              "name": "Big Spring",
              "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert TPO roofing installation in Big Spring TX. West Texas experiences 7-9 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-channing-35-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                TPO Roofing in <span className="text-brand-gold-light">Big Spring</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas TPO Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert TPO roofing installation in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
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
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
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
              Big Spring's TPO Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Big Spring's location in Howard County creates unique roofing challenges. The West Texas experiences 7-9 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your commercial roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Big Spring and Howard County with premium TPO membrane systems and expert installation. From properties near Big Spring State Park to buildings throughout Big Spring, we understand West Texas weather patterns, local building codes, and the specific energy efficiency needs of Howard County commercial property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Complete TPO Roofing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">New TPO Installation</h3>
                <p className="text-gray-700 mb-4">Complete TPO membrane installation using premium materials designed for Big Spring's harsh climate. Energy-efficient white membranes reduce cooling costs significantly.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Energy Star qualified TPO membranes</li>
                  <li>✓ 45, 60, and 80-mil thickness options</li>
                  <li>✓ Mechanically attached systems</li>
                  <li>✓ Fully adhered installations</li>
                  <li>✓ Enhanced wind uplift resistance</li>
                  <li>✓ 15-30 year warranties</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Energy Efficiency Solutions</h3>
                <p className="text-gray-700 mb-4">TPO's reflective white surface can reduce roof temperatures by 50-70°F compared to dark roofs, cutting cooling costs by 20-40% in Big Spring's hot climate.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ CRRC certified cool roof systems</li>
                  <li>✓ ENERGY STAR qualified membranes</li>
                  <li>✓ Enhanced insulation packages</li>
                  <li>✓ Thermal bridging elimination</li>
                  <li>✓ Green building compliance</li>
                  <li>✓ Utility rebate assistance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO Repair & Maintenance</h3>
                <p className="text-gray-700 mb-4">Expert repair services for existing TPO systems. Preventive maintenance programs extend roof life and maintain energy efficiency performance.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Membrane patching and welding</li>
                  <li>✓ Seam repair and re-welding</li>
                  <li>✓ Puncture and tear repair</li>
                  <li>✓ Drain and scupper maintenance</li>
                  <li>✓ Preventive maintenance programs</li>
                  <li>✓ Emergency leak repairs</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO Assessments & Consulting</h3>
                <p className="text-gray-700 mb-4">Comprehensive evaluations of existing flat roof systems to determine optimal TPO replacement timing and energy efficiency opportunities.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free TPO system evaluations</li>
                  <li>✓ Energy efficiency assessments</li>
                  <li>✓ Roof condition reporting</li>
                  <li>✓ Cost-benefit analysis</li>
                  <li>✓ Warranty transfer assistance</li>
                  <li>✓ Insurance documentation</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Big Spring Commercial Market & TPO Benefits</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🏢 Big Spring Commercial Real Estate Landscape</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">Big Spring's economy, anchored by the Big Spring Correctional Center, Howard College, and regional healthcare services, creates steady demand for energy-efficient commercial roofing solutions. The city's 28,000+ residents support diverse businesses requiring modern flat roof systems.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Commercial properties:</strong> 850+ buildings</li>
                      <li>• <strong>Average building age:</strong> 35 years</li>
                      <li>• <strong>Flat roof percentage:</strong> 65% of commercial</li>
                      <li>• <strong>Energy cost per sq ft:</strong> $2.40 annually</li>
                      <li>• <strong>TPO adoption rate:</strong> 40% of new installs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">Big Spring's climate creates significant opportunities for energy savings through reflective roofing systems. TPO installations can reduce building cooling loads by 25-40%, providing substantial utility cost savings for local businesses.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Cooling degree days:</strong> 2,850 annually</li>
                      <li>• <strong>Peak summer temps:</strong> 96°F average</li>
                      <li>• <strong>Solar intensity:</strong> High (UV index 9-10)</li>
                      <li>• <strong>Potential TPO savings:</strong> 20-40% cooling</li>
                      <li>• <strong>Average payback period:</strong> 4-7 years</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🌟 TPO Energy Efficiency Benefits for Big Spring Buildings</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">TPO (Thermoplastic Polyolefin) membranes offer exceptional energy efficiency benefits that directly translate to cost savings for Big Spring commercial property owners. The combination of reflective properties and excellent insulation performance makes TPO ideal for West Texas climate conditions.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Reflective Performance</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Solar reflectance: 80-87%</li>
                        <li>• Thermal emittance: 87-92%</li>
                        <li>• Cool Roof Rating: Meets standards</li>
                        <li>• Surface temp reduction: 50-70°F</li>
                        <li>• ENERGY STAR qualified</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Energy Cost Savings</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cooling cost reduction: 20-40%</li>
                        <li>• Peak demand reduction: 15-30%</li>
                        <li>• Annual savings: $0.50-1.20/sq ft</li>
                        <li>• Utility rebates available</li>
                        <li>• Tax incentive eligibility</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Environmental Impact</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Reduced urban heat island effect</li>
                        <li>• Lower carbon footprint</li>
                        <li>• Recyclable membrane material</li>
                        <li>• LEED point contribution</li>
                        <li>• Sustainable building compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">TPO Roofing Investment Analysis for Big Spring</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-4">2025 TPO Installation Costs</h3>
                  <ul className="space-y-3">
                    <li><strong>Small commercial (2,000-5,000 sq ft):</strong> $8-12/sq ft
                      <br /><span className="text-sm text-gray-600">Retail, small offices, basic installations</span>
                    </li>
                    <li><strong>Medium commercial (5,000-15,000 sq ft):</strong> $7-10/sq ft
                      <br /><span className="text-sm text-gray-600">Warehouses, larger retail, economies of scale</span>
                    </li>
                    <li><strong>Large commercial (15,000-50,000 sq ft):</strong> $6-9/sq ft
                      <br /><span className="text-sm text-gray-600">Industrial, big box, maximum efficiency</span>
                    </li>
                    <li><strong>Complex installations:</strong> $9-15/sq ft
                      <br /><span className="text-sm text-gray-600">Multiple levels, equipment, specialty features</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-4">Energy Savings Projections</h3>
                  <ul className="space-y-3">
                    <li><strong>10,000 sq ft building example:</strong>
                      <br /><span className="text-sm text-gray-600">Annual cooling cost: $3,600 typical</span>
                      <br /><span className="text-sm text-gray-600">TPO savings: $900-1,440 annually</span>
                    </li>
                    <li><strong>25,000 sq ft warehouse:</strong>
                      <br /><span className="text-sm text-gray-600">Annual cooling cost: $8,500 typical</span>
                      <br /><span className="text-sm text-gray-600">TPO savings: $2,125-3,400 annually</span>
                    </li>
                    <li><strong>Return on investment:</strong>
                      <br /><span className="text-sm text-gray-600">Typical payback: 4-7 years</span>
                      <br /><span className="text-sm text-gray-600">With rebates: 3-5 years</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-brand-brown mb-4">💰 Total Cost of Ownership Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Immediate Benefits</h4>
                    <p className="text-sm text-gray-600 mb-3">TPO installations provide immediate energy cost reductions, often noticeable in the first utility bill after installation.</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• First-month cooling reduction: 20-35%</li>
                      <li>• Peak demand charge savings</li>
                      <li>• Improved interior comfort</li>
                      <li>• Reduced HVAC strain</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Long-term Value</h4>
                    <p className="text-sm text-gray-600 mb-3">TPO systems maintain energy efficiency throughout their 20+ year service life while providing excellent durability.</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• 20-30 year service life</li>
                      <li>• Maintained reflectivity</li>
                      <li>• Lower maintenance costs</li>
                      <li>• Enhanced property value</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-brand-brown mb-2">📋 Free Energy Efficiency Assessments</p>
                <p className="text-gray-700">We provide comprehensive energy analysis including current cooling costs, projected TPO savings, ROI calculations, and available rebate/incentive information. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> for your customized assessment.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">TPO Performance in Big Spring Climate</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🌡️ Climate Optimization for Energy Efficiency</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Heat Load Reduction</h4>
                    <p className="text-gray-700 mb-3">Big Spring's intense summer heat creates significant cooling loads. TPO's reflective white surface dramatically reduces heat transfer into buildings, lowering HVAC energy consumption.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Average summer high: 94°F</li>
                      <li>• Traditional roof surface: 160°F+</li>
                      <li>• TPO surface temperature: 90-110°F</li>
                      <li>• Heat transfer reduction: 60-75%</li>
                      <li>• Cooling load reduction: 25-40%</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Durability in Harsh Conditions</h4>
                    <p className="text-gray-700 mb-3">TPO membranes resist UV degradation, thermal cycling, and weather damage that commonly affect other flat roof systems in West Texas conditions.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• UV resistance: Excellent</li>
                      <li>• Thermal cycling tolerance: High</li>
                      <li>• Hail impact resistance: Good</li>
                      <li>• Wind uplift resistance: 90+ mph</li>
                      <li>• Expected service life: 20-30 years</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">💡 TPO vs. Other Commercial Roofing Systems</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">Comparing TPO to other commercial roofing options demonstrates clear advantages for energy efficiency and long-term value in Big Spring's climate.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-3 text-left text-brand-brown">Roofing System</th>
                          <th className="p-3 text-center text-brand-brown">Energy Efficiency</th>
                          <th className="p-3 text-center text-brand-brown">Durability</th>
                          <th className="p-3 text-center text-brand-brown">Cost</th>
                          <th className="p-3 text-center text-brand-brown">Maintenance</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-t">
                          <td className="p-3 font-medium">TPO Membrane</td>
                          <td className="p-3 text-center">★★★★★</td>
                          <td className="p-3 text-center">★★★★☆</td>
                          <td className="p-3 text-center">★★★★☆</td>
                          <td className="p-3 text-center">★★★★☆</td>
                        </tr>
                        <tr className="border-t bg-gray-25">
                          <td className="p-3 font-medium">EPDM Rubber</td>
                          <td className="p-3 text-center">★★☆☆☆</td>
                          <td className="p-3 text-center">★★★★☆</td>
                          <td className="p-3 text-center">★★★★★</td>
                          <td className="p-3 text-center">★★★☆☆</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 font-medium">Modified Bitumen</td>
                          <td className="p-3 text-center">★★☆☆☆</td>
                          <td className="p-3 text-center">★★★☆☆</td>
                          <td className="p-3 text-center">★★★☆☆</td>
                          <td className="p-3 text-center">★★☆☆☆</td>
                        </tr>
                        <tr className="border-t bg-gray-25">
                          <td className="p-3 font-medium">Built-Up Roof</td>
                          <td className="p-3 text-center">★☆☆☆☆</td>
                          <td className="p-3 text-center">★★★☆☆</td>
                          <td className="p-3 text-center">★★★☆☆</td>
                          <td className="p-3 text-center">★★☆☆☆</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions - TPO Roofing</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">How much can TPO roofing save on energy costs in Big Spring?</h3>
                <p className="text-gray-700">TPO can reduce cooling costs by 20-40% compared to traditional dark roofs. For a typical 10,000 sq ft building with $3,600 annual cooling costs, TPO saves $900-1,440 yearly. Larger buildings see proportionally greater savings.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">What is the expected lifespan of TPO in Big Spring's climate?</h3>
                <p className="text-gray-700">Quality TPO systems typically last 20-30 years in Big Spring's climate when properly installed and maintained. The membrane's resistance to UV degradation and thermal cycling makes it ideal for West Texas conditions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">Are there utility rebates available for TPO installation?</h3>
                <p className="text-gray-700">Many utility companies offer rebates for cool roof installations. We help identify and apply for available rebates, which can range from $0.25-0.75 per square foot for qualifying TPO systems.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">How does TPO perform in hailstorms?</h3>
                <p className="text-gray-700">TPO membranes offer good hail resistance, though not as high as metal systems. Thicker membranes (60-80 mil) provide better impact resistance. We typically recommend 60+ mil TPO for Big Spring's hail exposure.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">What maintenance does TPO roofing require?</h3>
                <p className="text-gray-700">TPO requires minimal maintenance: annual inspections, debris removal, and cleaning. The smooth surface doesn't trap dirt and the welded seams eliminate many leak points common with other systems. We offer preventive maintenance programs.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Big Spring, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-101.47!3d32.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sBig%20Spring%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Big Spring, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Big Spring property owners. Expert tpo roofing with comprehensive warranties and insurance claim assistance.
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
