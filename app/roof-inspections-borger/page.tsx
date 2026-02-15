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
  alternates: { canonical: 'https://5starroofingpros.com/roof-inspections-borger/' },
  title: 'Roof Inspections Borger TX | 5 Star Roofing',
  description: "Expert roof inspections in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsBorgerPage() {
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
                      "name": "Borger",
                      "url": "/roof-inspections-borger/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-borger/#localbusiness",
        "name": "5 Star Commercial Roofing - Borger Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.6678, "longitude": -101.3974 },
        "url": "https://5starroofingpros.com/roof-inspections-borger/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Borger,_Texas", "name": "Borger", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Borger, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "@id": "https://en.wikipedia.org/wiki/Borger,_Texas",
              "name": "Borger",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof inspections in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How much does a roof inspection cost in Borger?",
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
                "name": "How often should I have my Borger roof inspected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Given Borger's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections."
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
                  "text": "We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Borger. for prompt situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-17-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Inspections in <span className="text-brand-gold-light">Borger</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                FREE Professional Inspections | Drone Technology
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof inspections in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={180} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Borger Projects</div>
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
              Borger's Roof Inspections Specialists
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
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Borger's Industrial Environment & Roof Challenges</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Petrochemical Industry Impact on Roofing Systems</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🏭 Chemical Exposure Factors</h4>
                    <p className="text-gray-700 mb-4">Borger's position as a major petrochemical refining center creates unique atmospheric conditions affecting roofing materials.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Sulfur Compounds:</strong> Accelerated metal corrosion and fastener failure</li>
                      <li>• <strong>Hydrocarbon Vapors:</strong> Degradation of rubber gaskets and seals</li>
                      <li>• <strong>Acid Rain Formation:</strong> pH-reduced precipitation damage</li>
                      <li>• <strong>Particulate Deposits:</strong> Abrasive dust accumulation</li>
                      <li>• <strong>Chemical Fallout:</strong> Coating and membrane deterioration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🌪️ Panhandle Weather Intensification</h4>
                    <p className="text-gray-700 mb-4">Industrial activities combined with High Plains geography create amplified weather damage potential.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Heat Island Effect:</strong> Elevated temperatures from industrial operations</li>
                      <li>• <strong>Thermal Inversions:</strong> Trapped pollutants accelerating damage</li>
                      <li>• <strong>Convective Enhancement:</strong> Industrial heat fueling severe storms</li>
                      <li>• <strong>Wind Channeling:</strong> Building clusters creating turbulence</li>
                      <li>• <strong>Pressure Fluctuations:</strong> Industrial processes affecting atmospheric stability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Specialized Inspection Protocol for Borger Properties</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Chemical Resistance Assessment (15 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Material Compatibility</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Membrane chemical resistance verification</li>
                          <li>• Fastener corrosion assessment</li>
                          <li>• Sealant degradation from chemical exposure</li>
                          <li>• Metal flashing oxidation patterns</li>
                          <li>• Coating integrity against acid rain</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Environmental Damage Indicators</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Discoloration from chemical deposits</li>
                          <li>• Premature aging patterns</li>
                          <li>• Unusual wear on specific materials</li>
                          <li>• Localized deterioration near industrial sources</li>
                          <li>• Atmospheric corrosion signatures</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Enhanced Weather Damage Documentation (30 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Hail Impact Analysis</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Industrial heat dome hail size correlation</li>
                          <li>• Multiple storm event cumulative damage</li>
                          <li>• Chemical-weakened surface vulnerability</li>
                          <li>• Wind-driven impact pattern mapping</li>
                          <li>• Structural compromise from repeated events</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Wind Stress Evaluation</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Panhandle wind uplift pressure calculation</li>
                          <li>• Industrial turbulence effect assessment</li>
                          <li>• Fatigue failure from constant wind stress</li>
                          <li>• Edge and corner vulnerability analysis</li>
                          <li>• Progressive system degradation tracking</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Air Quality & Contamination Check (10 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Indoor Air Quality Impact</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Roof breach contamination pathways</li>
                          <li>• Ventilation system integrity</li>
                          <li>• Chemical infiltration through damage</li>
                          <li>• HVAC system protection adequacy</li>
                          <li>• Indoor air monitoring recommendations</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Safety Considerations</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Inspector safety protocols for chemical exposure</li>
                          <li>• Respiratory protection requirements</li>
                          <li>• Skin contact prevention measures</li>
                          <li>• Decontamination protocols</li>
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
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">What Borger Inspectors Look For</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Industrial Environment Damage Signatures</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">⚗️ Chemical Degradation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Acid Etching:</strong> Surface pitting from acid rain exposure</li>
                      <li>• <strong>Polymer Breakdown:</strong> Membrane brittleness from chemical exposure</li>
                      <li>• <strong>Metal Corrosion:</strong> Accelerated rust and oxidation</li>
                      <li>• <strong>Gasket Deterioration:</strong> Rubber seal failure from hydrocarbon vapors</li>
                      <li>• <strong>Coating Failure:</strong> Premature chalking and adhesion loss</li>
                      <li>• <strong>Sealant Dissolution:</strong> Chemical breakdown of caulk compounds</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">⛈️ Enhanced Storm Damage</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Amplified Hail Impact:</strong> Chemical-weakened surfaces more vulnerable</li>
                      <li>• <strong>Wind Pressure Stress:</strong> Industrial turbulence creating higher loads</li>
                      <li>• <strong>Thermal Shock:</strong> Rapid temperature changes from industrial heat</li>
                      <li>• <strong>Fatigue Cracking:</strong> Repeated stress from constant wind exposure</li>
                      <li>• <strong>Debris Impact:</strong> Industrial materials becoming projectiles</li>
                      <li>• <strong>Pressure Cycling:</strong> Atmospheric pressure variations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">🏭 Particulate Damage</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Abrasive Wear:</strong> Industrial dust creating surface erosion</li>
                      <li>• <strong>Drainage Clogging:</strong> Particulate accumulation in gutters</li>
                      <li>• <strong>Ventilation Blockage:</strong> Dust infiltration reducing airflow</li>
                      <li>• <strong>Coating Contamination:</strong> Embedded particles reducing performance</li>
                      <li>• <strong>Filter Loading:</strong> HVAC system stress from contamination</li>
                      <li>• <strong>Adhesion Interference:</strong> Particles preventing proper sealing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Advanced Detection Methods for Industrial Environments</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Chemical Analysis Protocol</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">pH Testing</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Surface acidity measurement from acid rain</li>
                          <li>• Material degradation correlation</li>
                          <li>• Chemical exposure history assessment</li>
                          <li>• Future performance prediction</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Contamination Mapping</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Industrial source proximity analysis</li>
                          <li>• Wind pattern contamination tracking</li>
                          <li>• Seasonal exposure variation assessment</li>
                          <li>• Material selection recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Enhanced Environmental Monitoring</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Air Quality Correlation</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Local air quality index integration</li>
                          <li>• Pollution level damage correlation</li>
                          <li>• Health impact assessment</li>
                          <li>• Mitigation strategy development</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Weather Station Data</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Local weather station correlation</li>
                          <li>• Industrial heat island documentation</li>
                          <li>• Wind pattern analysis</li>
                          <li>• Storm intensity verification</li>
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
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Seasonal Inspection Strategy for Borger</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">🌸 Spring Industrial Assessment (March-May)</h3>
                <p className="text-gray-700 mb-4"><strong>Chemical Exposure Evaluation:</strong> Winter chemical accumulation assessment and storm season preparation.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Chemical Impact Assessment:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Winter chemical buildup documentation</li>
                      <li>• Freeze-thaw with contamination damage</li>
                      <li>• Industrial plant startup impact</li>
                      <li>• Spring cleaning effectiveness</li>
                      <li>• Storm season vulnerability preparation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Storm Preparation:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Fastener integrity verification</li>
                      <li>• Emergency ventilation system checks</li>
                      <li>• Chemical-resistant coating assessment</li>
                      <li>• Drainage system decontamination</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">☀️ Summer Heat & Chemical Stress (June-August)</h3>
                <p className="text-gray-700 mb-4"><strong>Thermal-Chemical Synergy:</strong> Combined heat and chemical exposure creating accelerated damage.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Accelerated Aging:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Heat-activated chemical reactions</li>
                      <li>• Thermal expansion with chemical stress</li>
                      <li>• Industrial heat island amplification</li>
                      <li>• Membrane outgassing acceleration</li>
                      <li>• UV + chemical degradation synergy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Safety Considerations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Heat stress protection protocols</li>
                      <li>• Chemical vapor concentration increases</li>
                      <li>• Early morning inspection timing</li>
                      <li>• Enhanced PPE requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">🍂 Fall Comprehensive Review (September-November)</h3>
                <p className="text-gray-700 mb-4"><strong>Annual Damage Assessment:</strong> Complete evaluation of year's chemical and weather exposure.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Annual Cumulative Assessment:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Storm season damage compilation</li>
                      <li>• Chemical exposure annual impact</li>
                      <li>• Material performance evaluation</li>
                      <li>• Replacement timeline planning</li>
                      <li>• Winter protection strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Maintenance Planning:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Chemical-resistant coating renewal</li>
                      <li>• Enhanced fastener replacement</li>
                      <li>• Ventilation system upgrades</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">❄️ Winter Industrial Monitoring (December-February)</h3>
                <p className="text-gray-700 mb-4"><strong>Chemical-Winter Interaction:</strong> Chemical effects combined with freeze-thaw cycles.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Chemical-Freeze Interaction:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Contaminated ice formation effects</li>
                      <li>• Chemical concentration from evaporation</li>
                      <li>• Freeze-thaw cycle acceleration</li>
                      <li>• Ice dam chemical contamination</li>
                      <li>• Indoor air quality monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Limited Access Protocols:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Interior moisture monitoring</li>
                      <li>• Remote sensor installation</li>
                      <li>• Chemical vapor detection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Insurance Claims for Industrial-Exposed Properties</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Specialized Documentation for Industrial Environments</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Enhanced Evidence Requirements</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Chemical Exposure Documentation:</strong> Atmospheric condition records</li>
                      <li>• <strong>Industrial Source Mapping:</strong> Proximity to emission sources</li>
                      <li>• <strong>Accelerated Aging Proof:</strong> Comparison to non-industrial areas</li>
                      <li>• <strong>Multi-Factor Damage:</strong> Weather + chemical interaction evidence</li>
                      <li>• <strong>Health Impact Assessment:</strong> Indoor air quality correlation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Insurance Company Challenges</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Coverage Exclusions:</strong> Industrial pollution clauses</li>
                      <li>• <strong>Causation Disputes:</strong> Weather vs. chemical damage</li>
                      <li>• <strong>Accelerated Depreciation:</strong> Reduced material life expectations</li>
                      <li>• <strong>Specialized Repairs:</strong> Chemical-resistant material requirements</li>
                      <li>• <strong>Health Concerns:</strong> Indoor air quality liability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Expert Testimony & Technical Support</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Professional Advocacy</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Industrial environment expertise</li>
                      <li>• Chemical damage pattern recognition</li>
                      <li>• Accelerated aging calculations</li>
                      <li>• Multi-factor causation analysis</li>
                      <li>• Specialized repair necessity justification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Technical Documentation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Chemical analysis reports</li>
                      <li>• Environmental monitoring data</li>
                      <li>• Material compatibility assessments</li>
                      <li>• Engineering failure analysis</li>
                      <li>• Industry standard compliance verification</li>
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
                  How much does a roof inspection cost in Borger?
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
                  How often should I have my Borger roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Given Borger's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections.
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
                  We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Borger. for prompt situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Borger property owners. Expert roof inspections with comprehensive warranties and insurance claim assistance.
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
