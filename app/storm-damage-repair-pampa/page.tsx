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
  title: 'Storm Damage Repair Pampa TXService | Free Inspection',
  description: 'storm damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function StormDamageRepairPampaPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Storm Damage Repair",
                      "url": "/storm-damage-repair/"
              },
              {
                      "name": "Pampa",
                      "url": "/storm-damage-repair-pampa/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Storm Damage Roof Repair",
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
              },
              "parentOrganization": { "@id": "https://5starroofingpros.com/#organization" }
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              "name": "Pampa",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "What types of storm damage affect Pampa roofs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pampa's location in Gray County creates exposure to multiple storm threats: 6-8 annual hailstorms with baseball-sized hail, High Plains winds exceeding 60 mph, heavy rainstorms causing water intrusion, and flying debris from agricultural areas. Properties near Recreation Park, downtown Pampa, and Pampa Regional Medical Center experience all these weather extremes, requiring comprehensive storm damage assessment after each severe weather event."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly do you respond to storm damage emergencies in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide 24/7 emergency storm damage response throughout Pampa and Gray County. For active leaks and urgent damage near Harvester Stadium, Coronado Healthcare Center, or anywhere in Pampa's ranching community, we typically arrive within 2-4 hours with emergency tarping and temporary repairs. For comprehensive post-storm inspections, we schedule within 24-48 hours."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover storm damage repairs in Pampa's agricultural area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Property insurance policies typically cover sudden storm damage including hail, wind, debris impacts, and water intrusion from storm-damaged roofs. Given Pampa's extreme High Plains weather, insurance companies regularly process claims from Gray County. We document all storm damage with detailed photos, wind speed data, and hail measurements, then work directly with adjusters to maximize coverage for property owners."
                }
              },
              {
                "@type": "Question",
                "name": "Can you repair storm damage on agricultural buildings in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We repair storm damage on all building types in Pampa's ranching community—from barns and agricultural facilities to commercial buildings near downtown Pampa and homes near Woody Guthrie Folk Music Center. Our team understands the unique needs of Gray County's agricultural buildings and works efficiently to minimize disruption to farming and ranching operations."
                }
              },
              {
                "@type": "Question",
                "name": "What storm damage repairs do you handle in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We handle all storm-related repairs for properties near Hobart Street Park, White Deer Land Museum, and throughout Pampa: hail damage shingle replacement, wind-damaged section rebuilding, emergency leak repairs, debris impact damage, blown-off metal panels, damaged flashing, and complete roof replacements when storm damage is severe. Most projects complete in 1-3 days for homes, 3-7 days for commercial properties."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/storm-damage-repair.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Pampa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Response | Panhandle Weather Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  Emergency: (806) 622-6041
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
                  24/7
                </div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
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
              Pampa's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's position as Gray County's seat exposes properties to severe Panhandle storm systems. From Pampa Regional Medical Center and Recreation Park to agricultural properties throughout the county, storm damage from hail, wind, and debris threatens every building. Properties near downtown Pampa, Harvester Stadium, and Coronado Healthcare Center face 6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural debris impacts—creating comprehensive storm damage needing immediate professional response.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've responded to 220+ storm damage emergencies across Pampa's ranching community with 24/7 service. From historic areas near Woody Guthrie Folk Music Center to properties near Hobart Street Park and White Deer Land Museum, we provide emergency tarping, complete damage documentation, insurance claim management, and permanent repairs. We understand Gray County building codes and work efficiently to restore your property. Most owners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-slate-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Understanding Pampa's Severe Weather Patterns
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Supercell Storm Formation</h3>
                <p className="text-gray-700 mb-4">
                  Pampa sits in the heart of "Tornado Alley" where dry air masses from the Rocky Mountains collide with warm, moist air from the Gulf of Mexico. This creates perfect conditions for supercell thunderstorms - massive rotating storms capable of producing baseball-sized hail, 80+ mph winds, and devastating tornadoes.
                </p>
                <p className="text-gray-700">
                  These supercells typically form April through September, with peak activity May-June. The flat Texas Panhandle terrain offers no barriers to slow storm development, allowing supercells to gain strength as they move across Gray County toward Pampa.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">High Plains Wind Dynamics</h3>
                <p className="text-gray-700 mb-4">
                  Pampa experiences unique wind patterns due to its High Plains location at 3,200 feet elevation. Prevailing southwest winds accelerate across the flat landscape, creating sustained speeds of 25-35 mph on normal days. During storm systems, these winds can exceed 80 mph.
                </p>
                <p className="text-gray-700">
                  The lack of natural windbreaks means Pampa properties face constant wind stress year-round. Agricultural debris, tumbleweeds, and loose materials become dangerous projectiles during severe weather events.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Seasonal Storm Damage Patterns in Pampa
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-green-800">Spring (Mar-May)</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Peak supercell season</li>
                  <li>• Large hail (golf ball+)</li>
                  <li>• Tornado activity</li>
                  <li>• Wind speeds 60-80 mph</li>
                  <li>• Flash flooding</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-orange-800">Summer (Jun-Aug)</h3>
                <ul className="text-orange-700 space-y-2">
                  <li>• Afternoon storms</li>
                  <li>• Damaging straight-line winds</li>
                  <li>• Heavy rainfall events</li>
                  <li>• Heat-related material stress</li>
                  <li>• UV damage acceleration</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-red-800">Fall (Sep-Nov)</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Secondary severe season</li>
                  <li>• Strong cold fronts</li>
                  <li>• Wind shear events</li>
                  <li>• Temperature extremes</li>
                  <li>• Debris accumulation</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Winter (Dec-Feb)</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Ice storms</li>
                  <li>• Blizzard conditions</li>
                  <li>• Freeze-thaw cycles</li>
                  <li>• Snow loading stress</li>
                  <li>• Thermal contraction</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Emergency Storm Response Protocol for Pampa Properties
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-3">Immediate Safety Assessment</h3>
                <p className="text-gray-700">
                  Within 2-4 hours of your call, our emergency team arrives at your Pampa property to assess structural safety, document all visible damage, and implement immediate protective measures like emergency tarping.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-3">Damage Documentation</h3>
                <p className="text-gray-700">
                  We photograph all storm damage, measure hail impact sizes, record wind speed estimates, and create detailed reports for insurance claims. This documentation is crucial for maximizing your coverage.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-3">Permanent Restoration</h3>
                <p className="text-gray-700">
                  After insurance approval, we execute complete repairs using materials designed for Panhandle weather. All work meets Gray County building codes and includes comprehensive warranties.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Insurance Claims for Pampa Storm Damage
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">What's Typically Covered</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Hail damage:</strong> Granule loss, exposed mat, cracked shingles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Wind damage:</strong> Lifted shingles, torn sections, blown-off materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Debris impact:</strong> Tree branches, flying objects, agricultural debris</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Water intrusion:</strong> Secondary damage from storm-compromised roofs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Emergency repairs:</strong> Tarping and temporary protection measures</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Maximizing Your Claim</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Report damage within 24-48 hours of the storm</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Document all damage with photos and measurements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Keep receipts for emergency repairs and hotel stays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Work with experienced contractors who understand claims</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Don't settle for partial repairs if full replacement is needed</span>
                    </li>
                  </ul>
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
                  What types of storm damage affect Pampa roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Pampa's location in Gray County creates exposure to multiple storm threats: 6-8 annual hailstorms with baseball-sized hail, High Plains winds exceeding 60 mph, heavy rainstorms causing water intrusion, and flying debris from agricultural areas. Properties near Recreation Park, downtown Pampa, and Pampa Regional Medical Center experience all these weather extremes, requiring comprehensive storm damage assessment after each severe weather event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly do you respond to storm damage emergencies in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide 24/7 emergency storm damage response throughout Pampa and Gray County. For active leaks and urgent damage near Harvester Stadium, Coronado Healthcare Center, or anywhere in Pampa's ranching community, we typically arrive within 2-4 hours with emergency tarping and temporary repairs. For comprehensive post-storm inspections, we schedule within 24-48 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover storm damage repairs in Pampa's agricultural area?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes! Property insurance policies typically cover sudden storm damage including hail, wind, debris impacts, and water intrusion from storm-damaged roofs. Given Pampa's extreme High Plains weather, insurance companies regularly process claims from Gray County. We document all storm damage with detailed photos, wind speed data, and hail measurements, then work directly with adjusters to maximize coverage for property owners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you repair storm damage on agricultural buildings in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. We repair storm damage on all building types in Pampa's ranching community—from barns and agricultural facilities to commercial buildings near downtown Pampa and homes near Woody Guthrie Folk Music Center. Our team understands the unique needs of Gray County's agricultural buildings and works efficiently to minimize disruption to farming and ranching operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What storm damage repairs do you handle in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We handle all storm-related repairs for properties near Hobart Street Park, White Deer Land Museum, and throughout Pampa: hail damage shingle replacement, wind-damaged section rebuilding, emergency leak repairs, debris impact damage, blown-off metal panels, damaged flashing, and complete roof replacements when storm damage is severe. Most projects complete in 1-3 days for homes, 3-7 days for commercial properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do Texas Panhandle supercells damage roofs differently?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Panhandle supercells create unique damage patterns due to their rotating nature and massive size. Unlike ordinary storms, supercells produce hail that falls at angles due to powerful updrafts, hitting both vertical and horizontal surfaces. The rotation creates varying wind directions that can lift shingles from multiple angles. Pampa's flat terrain allows these storms to maintain strength longer, creating sustained damage over larger areas than typical thunderstorms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why is immediate storm response crucial in Pampa's climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Pampa's extreme weather doesn't pause between storms. A roof damaged by hail in May faces continued exposure to severe thunderstorms through September, plus winter freeze-thaw cycles and spring winds. Even small storm damage allows water intrusion that rapidly deteriorates structural materials in our climate. Quick response prevents secondary damage that can cost 3-5 times more than immediate repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What materials work best for storm-prone Pampa properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We recommend impact-resistant materials rated for high-wind zones. For shingle roofs: Class 4 impact-resistant asphalt shingles with 130+ mph wind ratings. For metal roofs: 26-gauge or thicker steel with enhanced coating systems. All installations include upgraded fastening patterns, impact-resistant underlayment, and reinforced flashing systems designed for Gray County's extreme weather patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle agricultural building storm damage in Gray County?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Agricultural buildings face unique challenges from flying debris and large roof areas that catch maximum wind loads. We understand farming schedules and work efficiently during harvest breaks. Our agricultural specialists handle everything from livestock barns to grain storage facilities, using materials and methods appropriate for each building's function while meeting insurance requirements for commercial agricultural properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What preventive measures reduce future storm damage in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Beyond quality materials, we recommend: regular inspections before storm seasons, proper attic ventilation to reduce wind uplift, secure outdoor items that become projectiles, strategic landscaping to reduce wind exposure, and upgrading to current building codes even if not required. Properties near Pampa's agricultural areas especially benefit from debris barriers and reinforced attachment points.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Storm Damage Assessment Process
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-brand-gold">Visual Inspection Checklist</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</div>
                      <div>
                        <h4 className="font-semibold">Hail Impact Assessment</h4>
                        <p className="text-gray-600 text-sm">Granule loss patterns, exposed mat, circular impacts, soft metal denting</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</div>
                      <div>
                        <h4 className="font-semibold">Wind Damage Analysis</h4>
                        <p className="text-gray-600 text-sm">Lifted shingles, torn materials, fastener failures, edge lifting</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</div>
                      <div>
                        <h4 className="font-semibold">Structural Evaluation</h4>
                        <p className="text-gray-600 text-sm">Decking damage, rafter stress, support beam condition, foundation issues</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</div>
                      <div>
                        <h4 className="font-semibold">Water Intrusion Check</h4>
                        <p className="text-gray-600 text-sm">Interior damage, insulation condition, electrical safety, mold potential</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-brand-gold">Professional Documentation</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Photographic Evidence</h4>
                      <p className="text-gray-600 text-sm">High-resolution images from multiple angles, close-up damage details, overview shots showing scope</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Measurement Reports</h4>
                      <p className="text-gray-600 text-sm">Hail size documentation, wind speed estimates, damage area calculations, material lists</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Weather Correlation</h4>
                      <p className="text-gray-600 text-sm">Storm timing verification, wind direction analysis, precipitation records, radar data</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Code Compliance</h4>
                      <p className="text-gray-600 text-sm">Gray County building codes, manufacturer specifications, warranty requirements, permit needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Serving Pampa, Texas
            </h2>
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104282.72655892584!2d-101.02071843828125!3d35.53617399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870148b3c6f516d3%3A0x4f1e89dc3c2b7e7d!2sPampa%2C%20TX!5e0!3m2!1sen!2sus!4v1644444444444!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
