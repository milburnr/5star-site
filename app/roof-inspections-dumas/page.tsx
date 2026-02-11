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
  title: 'Roof Inspections Dumas TX | 5 Star Roofing',
  description: "Expert roof inspections in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsDumasPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Inspections",
                      "url": "/roof-inspections/"
              },
              {
                      "name": "Dumas",
                      "url": "/roof-inspections-dumas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.8656, "longitude": -101.973 },
        "url": "https://5starroofingpros.com/roof-inspections-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Dumas, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Inspections",
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
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              "name": "Dumas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof inspections in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How much does a roof inspection cost in Dumas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most routine inspections for homeowners are FREE, especially for insurance claims, storm damage assessments, or when considering our services. Pre-purchase inspections for home buyers run $200-$400 depending on home size. Commercial property inspections range from $300-$800. All inspections include detailed written reports with photos."
                }
              },
              {
                "@type": "Question",
                "name": "What does a professional roof inspection include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our comprehensive inspections include drone aerial photography, close-up examination of shingles and flashing, attic inspection for leaks and ventilation issues, structural assessment, and thermal imaging if needed. We document all damage, measure roof dimensions, and provide detailed written reports with photos. Inspections typically take 45-90 minutes."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I have my Dumas roof inspected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Given Dumas's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections."
                }
              },
              {
                "@type": "Question",
                "name": "Can roof inspections help with insurance claims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Professional documentation dramatically improves claim approval rates. We photograph all damage, count hail impacts per test square, document wind damage patterns, and provide reports meeting insurance company standards. Our inspections have helped thousands of Texas Panhandle homeowners successfully file storm damage claims."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you inspect my roof after a storm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Dumas. For emergency situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-dumas-43-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Inspections in <span className="text-brand-gold-light">Dumas</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                FREE Professional Inspections | Drone Technology
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof inspections in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Schedule FREE Inspection
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
                  <AnimatedCounter to={190} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Dumas Projects</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">FREE</div>
                <div className="text-brand-brown font-semibold text-lg">Inspections</div>
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
              Dumas's Roof Inspections Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas's location in the Texas Panhandle creates unique roofing challenges. Agricultural and feedlot industry center. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural and feedlot industry demands with extreme Panhandle weather—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 190+ Dumas properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Dumas property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Agricultural Industry Impact on Roofing Systems</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Feedlot and Agricultural Environmental Factors</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🐄 Livestock Operation Effects</h4>
                    <p className="text-gray-700 mb-4">Dumas is home to massive cattle feedlots creating unique atmospheric conditions affecting roofing materials.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Ammonia Exposure:</strong> Livestock waste produces ammonia vapors accelerating metal corrosion</li>
                      <li>• <strong>Hydrogen Sulfide:</strong> Gas production from feedlots creating acidic environments</li>
                      <li>• <strong>Dust Generation:</strong> Feed processing and animal activity creating abrasive particulates</li>
                      <li>• <strong>Organic Deposits:</strong> Windborne organic matter accumulation</li>
                      <li>• <strong>Moisture Elevation:</strong> Animal respiration increasing local humidity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🌾 Agricultural Processing Impact</h4>
                    <p className="text-gray-700 mb-4">Grain processing and agricultural operations create additional environmental stressors.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Grain Dust:</strong> Fine particles from processing creating abrasive conditions</li>
                      <li>• <strong>Silo Operations:</strong> Dust clouds and pressure variations</li>
                      <li>• <strong>Chemical Applications:</strong> Fertilizer and pesticide atmospheric exposure</li>
                      <li>• <strong>Equipment Vibration:</strong> Heavy machinery affecting nearby structures</li>
                      <li>• <strong>Irrigation Humidity:</strong> Center pivot systems elevating moisture levels</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Agricultural-Specific Inspection Protocol</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Environmental Contamination Assessment (20 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Chemical Exposure Evaluation</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Ammonia corrosion pattern identification</li>
                          <li>• Hydrogen sulfide surface etching assessment</li>
                          <li>• Agricultural chemical residue analysis</li>
                          <li>• Metal fastener degradation evaluation</li>
                          <li>• Organic material accumulation documentation</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Particulate Damage Analysis</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Grain dust abrasion assessment</li>
                          <li>• Feed particle coating contamination</li>
                          <li>• Drainage system clogging evaluation</li>
                          <li>• Ventilation blockage inspection</li>
                          <li>• Filter system stress analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-brown-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Agricultural Building Type Assessment (25 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Residential Properties</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Rural home exposure to agricultural operations</li>
                          <li>• Distance from feedlots impact assessment</li>
                          <li>• Windborne contaminant deposition</li>
                          <li>• HVAC system contamination protection</li>
                          <li>• Property value protection considerations</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Agricultural Facility Roofs</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Livestock housing structure assessment</li>
                          <li>• Grain storage facility roof evaluation</li>
                          <li>• Equipment building inspection</li>
                          <li>• Feed mill facility roof analysis</li>
                          <li>• Processing plant structural integrity</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Specialized Agricultural Roof Challenges (15 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Heavy Load Considerations</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Grain storage load capacity assessment</li>
                          <li>• Snow plus grain load calculations</li>
                          <li>• Equipment mounting stress analysis</li>
                          <li>• Structural deflection measurement</li>
                          <li>• Safety factor verification</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Ventilation & Airflow</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Agricultural ventilation system integration</li>
                          <li>• Contaminated air exhaust pathways</li>
                          <li>• Positive pressure system effects</li>
                          <li>• Air quality protection measures</li>
                          <li>• HVAC contamination prevention</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">What Dumas Agricultural Environment Inspectors Examine</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Agricultural-Specific Damage Indicators</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">🧪 Chemical Corrosion Patterns</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Ammonia Corrosion:</strong> White crystalline deposits on metal surfaces</li>
                      <li>• <strong>Sulfide Blackening:</strong> Dark staining from hydrogen sulfide exposure</li>
                      <li>• <strong>Accelerated Rust:</strong> Rapid oxidation from chemical atmosphere</li>
                      <li>• <strong>Gasket Degradation:</strong> Rubber seal failure from agricultural chemicals</li>
                      <li>• <strong>Paint Failure:</strong> Coating breakdown from chemical exposure</li>
                      <li>• <strong>Fastener Weakening:</strong> Chemical attack on screws and bolts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">🌪️ Enhanced Weather Damage</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Dust-Accelerated Abrasion:</strong> Windborne particles creating wear patterns</li>
                      <li>• <strong>Moisture Trap Damage:</strong> Organic matter holding moisture against surfaces</li>
                      <li>• <strong>Chemical-Weakened Materials:</strong> Reduced hail and wind resistance</li>
                      <li>• <strong>Clogged Drainage:</strong> Agricultural debris blocking water flow</li>
                      <li>• <strong>Filter Overload:</strong> HVAC systems stressed by contaminated air</li>
                      <li>• <strong>Biological Growth:</strong> Organic matter fostering mold and bacteria</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">🏗️ Structural Agricultural Stress</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Equipment Vibration Damage:</strong> Machinery creating structural fatigue</li>
                      <li>• <strong>Heavy Load Deflection:</strong> Grain storage causing sagging</li>
                      <li>• <strong>Thermal Cycling Stress:</strong> Agricultural process heat variations</li>
                      <li>• <strong>Settling Damage:</strong> Foundation movement from heavy loads</li>
                      <li>• <strong>Connection Loosening:</strong> Vibration and thermal stress effects</li>
                      <li>• <strong>Material Fatigue:</strong> Repeated stress cycles from operations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Advanced Detection for Agricultural Environments</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Chemical Analysis Technology</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Air Quality Monitoring</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Ammonia concentration measurement</li>
                          <li>• Hydrogen sulfide level detection</li>
                          <li>• Particulate matter assessment</li>
                          <li>• Volatile organic compound analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Surface Contamination Testing</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• pH testing of roof surfaces</li>
                          <li>• Chemical residue identification</li>
                          <li>• Corrosion rate assessment</li>
                          <li>• Material compatibility analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Agricultural-Specific Inspection Tools</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Enhanced Safety Protocols</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Respiratory protection for chemical exposure</li>
                          <li>• Gas detection equipment</li>
                          <li>• Personal protective equipment protocols</li>
                          <li>• Emergency response procedures</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Specialized Documentation</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Proximity to agricultural operations mapping</li>
                          <li>• Wind pattern contamination analysis</li>
                          <li>• Seasonal exposure variation tracking</li>
                          <li>• Chemical-resistant material recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Agricultural Season Inspection Timing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">🌱 Spring Agricultural Operations (March-May)</h3>
                <p className="text-gray-700 mb-4"><strong>Planting Season Impact:</strong> Field preparation and planting operations create dust and chemical exposure.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Agricultural Activity Coordination:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Pre-planting inspection timing</li>
                      <li>• Chemical application schedule awareness</li>
                      <li>• Field work dust generation periods</li>
                      <li>• Irrigation system startup assessment</li>
                      <li>• Livestock breeding season considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Storm Season Preparation:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Chemical-resistant material assessment</li>
                      <li>• Contamination cleanup before storms</li>
                      <li>• Agricultural building vulnerability check</li>
                      <li>• Drainage system agricultural debris clearing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">🌾 Summer Growing Season (June-August)</h3>
                <p className="text-gray-700 mb-4"><strong>Peak Agricultural Activity:</strong> Irrigation, chemical applications, and peak feedlot operations.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">High Contamination Period:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Maximum feedlot animal populations</li>
                      <li>• Peak ammonia and hydrogen sulfide levels</li>
                      <li>• Intensive irrigation creating humidity</li>
                      <li>• Chemical application frequency increases</li>
                      <li>• Heat intensifying chemical reactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Inspection Timing Challenges:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Early morning inspections to avoid peak chemicals</li>
                      <li>• Wind direction consideration</li>
                      <li>• Enhanced safety equipment requirements</li>
                      <li>• Agricultural operation scheduling coordination</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">🌽 Harvest Season Assessment (September-November)</h3>
                <p className="text-gray-700 mb-4"><strong>Harvest Operations Impact:</strong> Grain dust, equipment vibration, and storage facility loading.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Harvest Activity Considerations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Massive grain dust generation</li>
                      <li>• Heavy equipment traffic vibration</li>
                      <li>• Grain elevator and silo loading stress</li>
                      <li>• Feedlot preparation for winter feeding</li>
                      <li>• Agricultural building maximum capacity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Annual Assessment Priorities:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Cumulative chemical exposure evaluation</li>
                      <li>• Structural stress from annual operations</li>
                      <li>• Contamination cleanup before winter</li>
                      <li>• Equipment-related damage assessment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">❄️ Winter Agricultural Dormancy (December-February)</h3>
                <p className="text-gray-700 mb-4"><strong>Reduced Operations:</strong> Optimal inspection timing with minimal agricultural interference.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Winter Advantages:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Minimal chemical applications</li>
                      <li>• Reduced feedlot odors and contamination</li>
                      <li>• Limited equipment operation disturbance</li>
                      <li>• Clear assessment of cumulative damage</li>
                      <li>• Planning time for repairs before spring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Winter Assessment Focus:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Annual chemical exposure damage review</li>
                      <li>• Structural integrity after harvest stress</li>
                      <li>• Contamination removal effectiveness</li>
                      <li>• Material selection for spring replacements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Insurance Claims for Agricultural Properties</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Agricultural Environment Documentation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Environmental Factor Evidence</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Chemical Exposure Mapping:</strong> Proximity to feedlots and processing</li>
                      <li>• <strong>Air Quality Documentation:</strong> Ammonia and hydrogen sulfide levels</li>
                      <li>• <strong>Accelerated Aging Evidence:</strong> Chemical vs. normal weathering</li>
                      <li>• <strong>Agricultural Operation Impact:</strong> Dust, vibration, and contamination</li>
                      <li>• <strong>Seasonal Variation Tracking:</strong> Peak exposure periods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Specialized Damage Categories</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Chemical Corrosion Claims:</strong> Agricultural vs. storm damage</li>
                      <li>• <strong>Environmental Liability:</strong> Health and property impacts</li>
                      <li>• <strong>Agricultural Business Interruption:</strong> Roof failure operational impact</li>
                      <li>• <strong>Equipment Protection:</strong> Specialized material requirements</li>
                      <li>• <strong>Multi-Factor Causation:</strong> Weather plus chemical interactions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Agricultural Insurance Challenges</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Common Claim Complications</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Pollution Exclusions:</strong> Chemical damage coverage disputes</li>
                      <li>• <strong>Gradual Damage:</strong> Slow chemical deterioration vs. sudden loss</li>
                      <li>• <strong>Agricultural Business Coverage:</strong> Specialized commercial policies</li>
                      <li>• <strong>Equipment Integration:</strong> Roof-mounted agricultural equipment</li>
                      <li>• <strong>Multi-Building Claims:</strong> Farm operation complex coverage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Expert Documentation Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Agricultural environment expertise</li>
                      <li>• Chemical damage pattern analysis</li>
                      <li>• Environmental impact assessment</li>
                      <li>• Agricultural operation integration</li>
                      <li>• Specialized material requirement justification</li>
                    </ul>
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
                  How much does a roof inspection cost in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most routine inspections for homeowners are FREE, especially for insurance claims, storm damage assessments, or when considering our services. Pre-purchase inspections for home buyers run $200-$400 depending on home size. Commercial property inspections range from $300-$800. All inspections include detailed written reports with photos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What does a professional roof inspection include?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our comprehensive inspections include drone aerial photography, close-up examination of shingles and flashing, attic inspection for leaks and ventilation issues, structural assessment, and thermal imaging if needed. We document all damage, measure roof dimensions, and provide detailed written reports with photos. Inspections typically take 45-90 minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How often should I have my Dumas roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Given Dumas's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can roof inspections help with insurance claims?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Professional documentation dramatically improves claim approval rates. We photograph all damage, count hail impacts per test square, document wind damage patterns, and provide reports meeting insurance company standards. Our inspections have helped thousands of Texas Panhandle homeowners successfully file storm damage claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you inspect my roof after a storm?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Dumas. For emergency situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Dumas property owners. Expert roof inspections with comprehensive warranties and insurance claim assistance.
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
