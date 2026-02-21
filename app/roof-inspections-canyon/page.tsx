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
  alternates: { canonical: 'https://5starroofingpros.com/roof-inspections-canyon/' },
  title: 'Roof Inspections Canyon TX | 5 Star Roofing',
  description: "Expert roof inspections in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsCanyonPage() {
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
                      "name": "Canyon",
                      "url": "/roof-inspections-canyon/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "RoofingContractor"],
        "@id": "https://5starroofingpros.com/roof-inspections-canyon/#localbusiness",
        "name": "5 Star Roofing",
        "image": "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
        "telephone": "(806) 622-6041",
        "email": "admin@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 34.9803, "longitude": -101.9188 },
        "url": "https://5starroofingpros.com/roof-inspections-canyon/",
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Expert roof inspections services in Canyon, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "@type": ["LocalBusiness", "RoofingContractor"],
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Roofing",
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
              "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas",
              "name": "Canyon",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof inspections in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How much does a roof inspection cost in Canyon?",
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
                "name": "How often should I have my Canyon roof inspected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Given Canyon's severe weather (8-10 hailstorms annually), we recommend annual inspections plus after any major storm. Near Palo Duro Canyon, Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections."
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
                  "text": "We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Canyon. for prompt situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-7-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Inspections in <span className="text-brand-gold-light">Canyon</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                FREE Professional Inspections | Drone Technology
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof inspections in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={350} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Canyon Projects</div>
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
              What Makes Our Canyon Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Canyon's location in the Texas Panhandle creates unique roofing challenges. Near Palo Duro Canyon, home to West Texas A&M University. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and unique weather patterns near Palo Duro Canyon with High Plains wind exposure—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 350+ Canyon properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Canyon property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">What Are Canyon's Unique Geographic Challenges?</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Palo Duro Canyon Microclimate Effects</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🏔️ Canyon Wind Patterns</h4>
                    <p className="text-gray-700 mb-4">The proximity to Palo Duro Canyon creates unique wind patterns and thermal effects that intensify weather conditions.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Wind Acceleration:</strong> Canyon walls create venturi effects increasing wind speeds</li>
                      <li>• <strong>Thermal Updrafts:</strong> Canyon heating creates convective instability</li>
                      <li>• <strong>Turbulence Zones:</strong> Irregular airflow patterns near canyon rim</li>
                      <li>• <strong>Direction Changes:</strong> Rapid wind direction shifts from canyon effects</li>
                      <li>• <strong>Pressure Variations:</strong> Elevation changes affecting atmospheric pressure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">⛈️ Enhanced Storm Formation</h4>
                    <p className="text-gray-700 mb-4">The canyon's geography contributes to supercell formation and intensification over the region.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Orographic Lifting:</strong> Canyon topography enhancing storm development</li>
                      <li>• <strong>Convergence Zones:</strong> Air mass interactions creating severe weather</li>
                      <li>• <strong>Hail Growth:</strong> Extended updraft time from terrain effects</li>
                      <li>• <strong>Wind Shear:</strong> Varying wind speeds at different elevations</li>
                      <li>• <strong>Temperature Gradients:</strong> Canyon thermal effects intensifying storms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">University District Considerations</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🏫 West Texas A&M University Impact</h4>
                    <p className="text-gray-700 mb-4">University presence creates unique building densities and architectural challenges affecting local weather patterns.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Building Heat Islands:</strong> Campus structures affecting local temperatures</li>
                      <li>• <strong>Wind Patterns:</strong> Large buildings creating turbulence and channeling</li>
                      <li>• <strong>Drainage Issues:</strong> Impermeable surfaces affecting water flow</li>
                      <li>• <strong>Historic Buildings:</strong> Older structures with unique requirements</li>
                      <li>• <strong>Dormitory Density:</strong> Multiple-story buildings with complex rooflines</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🏘️ Residential Development Patterns</h4>
                    <p className="text-gray-700 mb-4">Canyon's growth around the university creates diverse housing stock requiring specialized inspection approaches.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Student Housing:</strong> High-occupancy rental property considerations</li>
                      <li>• <strong>Faculty Neighborhoods:</strong> Quality construction with specific maintenance needs</li>
                      <li>• <strong>Historic Districts:</strong> Older homes with original roofing materials</li>
                      <li>• <strong>New Developments:</strong> Modern materials and construction techniques</li>
                      <li>• <strong>Mixed Use:</strong> Commercial and residential integration challenges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">How Does the Comprehensive Canyon Inspection Process Work?</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Geographic-Specific Assessment Protocol</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Terrain-Influenced Weather Damage Analysis (25 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Canyon Wind Effect Assessment</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Wind pressure variation mapping across roof</li>
                          <li>• Venturi effect damage identification</li>
                          <li>• Turbulence-induced fatigue patterns</li>
                          <li>• Directional damage from canyon winds</li>
                          <li>• Pressure differential stress points</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Orographic Hail Damage Patterns</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Enhanced hail size from canyon updrafts</li>
                          <li>• Impact angle variations from wind shear</li>
                          <li>• Concentrated damage zones from terrain focusing</li>
                          <li>• Extended storm duration effects</li>
                          <li>• Multiple impact event cumulation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">University District Building Assessment (20 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Multi-Story Structure Considerations</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Height-related wind pressure increases</li>
                          <li>• Building interaction aerodynamics</li>
                          <li>• Thermal stack effect impacts</li>
                          <li>• Structural load distribution analysis</li>
                          <li>• Seismic movement considerations</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Historic vs. Modern Construction</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Material compatibility assessments</li>
                          <li>• Code compliance transition issues</li>
                          <li>• Architectural preservation requirements</li>
                          <li>• Structural integration challenges</li>
                          <li>• Energy efficiency upgrade potential</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Canyon Microclimate Environmental Impact (15 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Temperature Variation Effects</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Canyon thermal gradient impacts</li>
                          <li>• Elevation-related temperature changes</li>
                          <li>• Diurnal temperature swing effects</li>
                          <li>• Thermal expansion stress analysis</li>
                          <li>• Seasonal variation adaptation</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Moisture and Drainage Considerations</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Canyon fog and moisture intrusion</li>
                          <li>• Elevation drainage flow patterns</li>
                          <li>• Terrain-influenced precipitation</li>
                          <li>• Runoff concentration areas</li>
                          <li>• Flash flood potential assessment</li>
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
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">What Canyon Roof Inspectors Examine?</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Canyon-Specific Damage Indicators</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">🌪️ Canyon Wind Damage Signatures</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Venturi Acceleration Damage:</strong> Enhanced wind speeds from canyon channeling</li>
                      <li>• <strong>Turbulence Fatigue:</strong> Irregular stress patterns from wind eddies</li>
                      <li>• <strong>Pressure Differential Stress:</strong> Varying wind loads across roof surface</li>
                      <li>• <strong>Direction Change Damage:</strong> Multiple impact angles from shifting winds</li>
                      <li>• <strong>Uplift Concentration:</strong> Enhanced negative pressure zones</li>
                      <li>• <strong>Progressive Failure:</strong> Cumulative damage from repeated stress</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">⛈️ Orographic Storm Enhancement</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Enhanced Hail Formation:</strong> Larger hail from extended updraft time</li>
                      <li>• <strong>Wind-Driven Hail:</strong> Horizontal impact from canyon wind shear</li>
                      <li>• <strong>Storm Intensification:</strong> Terrain-enhanced severe weather</li>
                      <li>• <strong>Multiple Storm Tracks:</strong> Canyon-guided storm repetition</li>
                      <li>• <strong>Extended Duration Damage:</strong> Storms stalling over canyon terrain</li>
                      <li>• <strong>Pressure Wave Effects:</strong> Rapid pressure changes from topography</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">🏔️ Elevation and Terrain Effects</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>UV Intensification:</strong> Increased radiation exposure at elevation</li>
                      <li>• <strong>Temperature Cycling:</strong> Enhanced thermal stress from terrain</li>
                      <li>• <strong>Moisture Patterns:</strong> Canyon fog and precipitation variations</li>
                      <li>• <strong>Debris Accumulation:</strong> Wind-deposited materials from canyon</li>
                      <li>• <strong>Drainage Complications:</strong> Terrain-influenced water flow</li>
                      <li>• <strong>Ice Formation:</strong> Cold air pooling in canyon areas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">University District Building Considerations</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Academic Building Assessment</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Multi-Story Wind Exposure</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Height-velocity wind pressure increases</li>
                          <li>• Building wake turbulence effects</li>
                          <li>• Corner acceleration zones</li>
                          <li>• Roof edge uplift concentrations</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Complex Roofline Challenges</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Multiple level transitions</li>
                          <li>• HVAC equipment integration</li>
                          <li>• Accessibility and safety access</li>
                          <li>• Drainage coordination complexity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Residential Property Variations</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Historic Home Considerations</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Original material preservation requirements</li>
                          <li>• Structural integrity with age</li>
                          <li>• Code compliance modernization</li>
                          <li>• Energy efficiency upgrade options</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Student Housing Demands</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• High-traffic wear patterns</li>
                          <li>• Frequent maintenance requirements</li>
                          <li>• Cost-effective repair solutions</li>
                          <li>• Safety and liability considerations</li>
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
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">What Are the Seasonal Inspection Timing for Canyon?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">🌸 Spring Canyon Weather Assessment (March-May)</h3>
                <p className="text-gray-700 mb-4"><strong>Storm Season Preparation:</strong> Canyon's geography intensifies spring severe weather systems.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Terrain-Enhanced Storm Preparation:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Pre-season vulnerability assessment</li>
                      <li>• Canyon wind pattern analysis</li>
                      <li>• Orographic storm enhancement preparation</li>
                      <li>• University schedule coordination</li>
                      <li>• Emergency access route planning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Academic Calendar Considerations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Student housing inspection scheduling</li>
                      <li>• Campus facility coordination</li>
                      <li>• Spring break timing optimization</li>
                      <li>• Semester transition planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">☀️ Summer Heat and UV Assessment (June-August)</h3>
                <p className="text-gray-700 mb-4"><strong>Elevation UV Exposure:</strong> Canyon's elevation increases UV intensity and thermal stress.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Enhanced UV Damage Assessment:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Elevation-enhanced UV exposure evaluation</li>
                      <li>• Canyon thermal amplification effects</li>
                      <li>• Material degradation acceleration</li>
                      <li>• Reflective surface heat concentration</li>
                      <li>• Thermal expansion stress analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Summer Schedule Advantages:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Reduced university activity</li>
                      <li>• Extended daylight hours</li>
                      <li>• Student housing accessibility</li>
                      <li>• Clear weather inspection windows</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">🍂 Fall Comprehensive Assessment (September-November)</h3>
                <p className="text-gray-700 mb-4"><strong>Academic Year Preparation:</strong> University activity resumption requires inspection timing coordination.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Storm Season Wrap-up:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Cumulative weather damage assessment</li>
                      <li>• Canyon wind effect annual evaluation</li>
                      <li>• University facility maintenance coordination</li>
                      <li>• Student housing turnover inspection</li>
                      <li>• Winter weather preparation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Campus Activity Coordination:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Football season scheduling consideration</li>
                      <li>• Academic calendar integration</li>
                      <li>• Homecoming event timing</li>
                      <li>• Semester project planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">❄️ Winter Canyon Microclimate (December-February)</h3>
                <p className="text-gray-700 mb-4"><strong>Canyon Cold Effects:</strong> Cold air pooling and unique winter weather patterns.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Canyon Winter Challenges:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Cold air pooling in canyon areas</li>
                      <li>• Enhanced ice formation risk</li>
                      <li>• Wind chill factor increases</li>
                      <li>• Limited daylight inspection windows</li>
                      <li>• University break scheduling advantages</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Alternative Assessment Methods:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Interior moisture monitoring</li>
                      <li>• Thermal imaging from ground level</li>
                      <li>• Energy efficiency assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">How Do Insurance Claims for Canyon Properties Work?</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Geographic Factor Documentation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Terrain-Enhanced Damage Evidence</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Canyon Wind Amplification:</strong> Topographic wind speed enhancement</li>
                      <li>• <strong>Orographic Storm Intensification:</strong> Terrain-induced severe weather</li>
                      <li>• <strong>Microclimate Documentation:</strong> Local weather pattern evidence</li>
                      <li>• <strong>Elevation Effects:</strong> UV and temperature variation impacts</li>
                      <li>• <strong>Multiple Weather Events:</strong> Cumulative damage from geographic factors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">University District Considerations</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Building Density Effects:</strong> Wind pattern modifications from structures</li>
                      <li>• <strong>Historic Preservation Requirements:</strong> Special material and method needs</li>
                      <li>• <strong>Multi-Story Exposure:</strong> Height-related increased wind loads</li>
                      <li>• <strong>Academic Facility Standards:</strong> Enhanced performance requirements</li>
                      <li>• <strong>Student Housing Safety:</strong> Liability and occupancy considerations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Specialized Claim Support for Canyon</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Geographic Expert Testimony</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Canyon microclimate expertise</li>
                      <li>• Topographic weather enhancement documentation</li>
                      <li>• University district building knowledge</li>
                      <li>• Historic preservation compliance</li>
                      <li>• Local weather station data correlation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Enhanced Documentation Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 3D mapping of canyon wind effects</li>
                      <li>• Thermal imaging of elevation effects</li>
                      <li>• Weather station data integration</li>
                      <li>• University facility standards compliance</li>
                      <li>• Multi-building damage correlation</li>
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
                  How much does a roof inspection cost in Canyon?
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
                  How often should I have my Canyon roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Given Canyon's severe weather (8-10 hailstorms annually), we recommend annual inspections plus after any major storm. Near Palo Duro Canyon, Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections.
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
                  We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Canyon. for prompt situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast.
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
        <InternalLinks currentCity="canyon" currentService="roof-inspections" />


        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Canyon property owners. Expert roof inspections with comprehensive warranties and insurance claim assistance.
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
