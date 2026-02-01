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
  title: 'Wind Damage Repair Amarillo TX | 5 Star Roofing',
  description: 'Wind Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function WindDamageRepairAmarilloPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Wind Damage Repair",
                      "url": "/wind-damage-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/wind-damage-repair-amarillo/"
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
            "serviceType": "Wind Damage Roof Repair",
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
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "name": "Amarillo",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Professional wind damage roof repair in Amarillo, TX with 24/7 emergency service and complete insurance claim assistance."
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
                "name": "What wind speeds typically cause roof damage in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sustained winds above 45 mph begin lifting shingle tabs on older roofs. Gusts exceeding 60 mph can remove entire shingles even from relatively new roofs if installation quality was poor. Amarillo regularly experiences wind events in this range, especially during spring and fall frontal passages. High-wind rated installation methods dramatically improve performance."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover wind damage to my Amarillo roof?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most homeowner policies cover wind damage when sustained winds or gusts exceed thresholds specified in your policy—typically 50-60 mph. We help document wind speeds from National Weather Service reports and link damage patterns to specific wind events. Our professional documentation improves claim approval rates significantly."
                }
              },
              {
                "@type": "Question",
                "name": "How do you prevent future wind damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "High-wind installation methods are critical in Amarillo. We use 6-nail patterns instead of standard 4-nail, install premium starter strips with enhanced adhesion, seal all flashing with high-grade sealants, and use Class 4 shingles rated for 130 mph winds. These methods reduce wind damage risk by 80-90% compared to standard installations."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you repair wind damage after a storm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide emergency tarping and temporary repairs within hours for actively leaking roofs. Full repair or replacement typically occurs 2-4 weeks after claim approval, depending on material availability and scheduling. During widespread wind events affecting the entire Texas Panhandle, we work extended hours to accommodate emergency needs."
                }
              },
              {
                "@type": "Question",
                "name": "Should I get a wind damage inspection after every windstorm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Inspect after wind events with sustained winds above 45 mph or gusts exceeding 60 mph. Even if you see no obvious damage from the ground, lifted shingles and flashing issues may exist. We offer free inspections that identify problems early before they cause leaks. Early detection prevents minor wind damage from becoming major water damage."
                }
              },
              {
                "@type": "Question",
                "name": "Why is wind damage different from hail damage in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wind damage occurs through uplift forces and sustained stress rather than impact like hail. While hail damage is immediately visible, wind damage often appears subtle initially but progresses rapidly. Amarillo's frequent high winds mean roofs experience cumulative stress over time, affecting different components than hail's uniform surface impact patterns."
                }
              },
              {
                "@type": "Question",
                "name": "Do dust storms cause additional roofing problems in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Amarillo's frequent dust storms create unique challenges. Wind-driven sand gradually erodes protective granules from shingles, reducing UV resistance. Dust infiltration can compromise flashing seals. Some insurance policies exclude dust-related damage, so documenting wind speeds during damage events is crucial."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best time of year for wind damage repairs in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Late fall through early spring offers the most stable weather for roofing work, with reduced wind speeds and fewer severe weather events. However, emergency repairs can't wait—we're equipped for year-round installation with specialized techniques for high-wind conditions."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/storm-damage-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Wind Damage Repair in <span className="text-brand-gold-light">Amarillo</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                High Wind Roofing Experts | 24/7 Emergency Service
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Amarillo's location in the Texas Panhandle creates perfect conditions for extreme winds. Sustained winds of 30-50 mph with gusts exceeding 70 mph damage shingles, flashing, and underlayment. We specialize in wind damage assessment and high-wind roofing systems designed for Panhandle conditions.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  Emergency: (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-600">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-600">
                <div className="text-4xl font-bold text-brand-gold mb-3">70+</div>
                <div className="text-brand-brown font-semibold text-lg">MPH Gusts</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-600">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={950} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Wind Claims</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-600">
                <div className="text-4xl font-bold text-brand-gold mb-3">FREE</div>
                <div className="text-brand-brown font-semibold text-lg">Inspections</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Understanding Wind Damage in the Texas Panhandle
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Amarillo's location at 3,605 feet above sea level on the high plains creates perfect conditions for extreme wind events. The city averages 14.1 mph sustained winds year-round—higher than 98% of cities nationwide. With zero natural windbreaks across hundreds of miles of flat terrain, wind accelerates freely from the north and west. Strong frontal systems regularly produce gusts of 50-80 mph, with recorded gusts exceeding 100 mph during severe weather outbreaks. NOAA weather data shows Amarillo experiences 170+ days annually with sustained winds above 15 mph, making it one of the windiest metropolitan areas in America.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Amarillo Wind Patterns</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Winter:</strong> Northwestern winds 20-35 mph, frequent 50+ mph gusts</li>
                  <li><strong>Spring:</strong> Strongest period—March-May averages 16.2 mph sustained</li>
                  <li><strong>Summer:</strong> Afternoon thunderstorm downbursts create 60-80 mph microbursts</li>
                  <li><strong>Fall:</strong> Cold fronts produce rapid wind shifts and sustained high winds</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Local Wind Hazards</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Derecho events:</strong> Straight-line winds 70-100+ mph, June-September</li>
                  <li><strong>Gap winds:</strong> Accelerated flow through canyon gaps near Palo Duro</li>
                  <li><strong>Dust storms:</strong> Combined wind/debris damage to roofing materials</li>
                  <li><strong>Blue northers:</strong> Sudden temperature drops with 60+ mph winds</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Wind damage differs fundamentally from hail damage. While hail impacts are visible and dramatic, wind damage often appears subtle initially—lifted shingle tabs, exposed nail heads, creased flashing—but accelerates deterioration rapidly. From historic homes in the Plemons-Eakle neighborhood to newer construction near Wolflin Square, from properties around West Texas A&M University to residences near Rick Klein Park, we've documented how sustained high winds affect roofing systems across Potter and Randall Counties.
            </p>
            
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 mb-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">Critical Wind Speed Thresholds for Amarillo Roofs</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">35-45 mph</div>
                  <div className="text-sm text-gray-600">Shingle seal failure begins</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-700">50-65 mph</div>
                  <div className="text-sm text-gray-600">Significant damage threshold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800">70+ mph</div>
                  <div className="text-sm text-gray-600">Catastrophic failure possible</div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              A single high-wind event can compromise your roof's water resistance through microscopic seal failures and flashing displacement. Our specialized wind damage inspections use thermal imaging and moisture detection to identify problems invisible to standard visual inspection. Early detection prevents minor wind damage from becoming major water damage during Amarillo's intense summer thunderstorms.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Seasonal Wind Patterns & Roofing Impact in Amarillo
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Winter (Dec-Feb)</h3>
                <p className="text-sm text-blue-800 mb-3">Average: 12.8 mph sustained</p>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Arctic fronts with 40-60 mph gusts</li>
                  <li>• Freeze-thaw cycles worsen wind damage</li>
                  <li>• Ice dams increase wind uplift risk</li>
                  <li>• Reduced daylight affects repairs</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-3">Spring (Mar-May)</h3>
                <p className="text-sm text-green-800 mb-3">Average: 16.2 mph sustained</p>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Peak wind season—most damage occurs</li>
                  <li>• Severe thunderstorm derechos</li>
                  <li>• Rapid temperature fluctuations</li>
                  <li>• Optimal repair weather follows storms</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Summer (Jun-Aug)</h3>
                <p className="text-sm text-yellow-800 mb-3">Average: 13.4 mph sustained</p>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Afternoon microburst events</li>
                  <li>• Heat expansion worsens wind damage</li>
                  <li>• Dust storms erode roof materials</li>
                  <li>• Prime repair season availability</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Fall (Sep-Nov)</h3>
                <p className="text-sm text-orange-800 mb-3">Average: 14.6 mph sustained</p>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• Cold front wind shear events</li>
                  <li>• Temperature swings stress materials</li>
                  <li>• Last chance for pre-winter repairs</li>
                  <li>• Insurance claim processing peak</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Detailed Wind Damage Patterns on Amarillo Roofs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-slate-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Primary Shingle Failures</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Tab lifting (35+ mph):</strong> Wind penetrates under loose shingle edges, breaking factory-applied sealant strips and exposing nail lines to moisture infiltration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Complete blow-offs (50+ mph):</strong> Entire shingle sections torn away, exposing felt underlayment to UV degradation and weather penetration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Fatigue creasing (40+ mph sustained):</strong> Repeated wind flexing creates permanent creases that become stress concentration points for future failures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Granule scour (dust storms):</strong> Amarillo's frequent dust-laden winds abrade protective mineral granules, reducing fire resistance and UV protection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Critical Component Failures</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Flashing displacement:</strong> High-wind uplift forces pry step flashing from sidewalls, creating direct water entry paths into wall cavities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Ridge cap separation:</strong> Peak-mounted shingles experience maximum wind stress—often first visible failure point after wind events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Vent system damage:</strong> Turbine vents, ridge vents, and penetration boots torn away, leaving large openings exposed to elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Gutter separation:</strong> Wind loads exceed fastener strength, pulling entire gutter sections from fascia boards and disrupting drainage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Hidden Wind Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Sealant failure:</strong> High-wind stress breaks invisible adhesive bonds around flashing and penetrations—undetectable without professional inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Fastener withdrawal:</strong> Uplift forces gradually pull roofing nails from decking—compromises structural integrity before visible damage appears</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Underlayment damage:</strong> Wind-driven debris penetrates felt paper through small tears—creates leak paths invisible from exterior inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Thermal movement:</strong> Wind-accelerated temperature cycling expands/contracts materials at different rates, creating microscopic separation gaps</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Wind Uplift Physics: How Amarillo Winds Damage Roofs</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When wind hits your roof, it doesn't just push—it creates complex pressure differentials that attempt to lift the entire roofing system off the structure. As wind flows over the roof peak, it accelerates and creates negative pressure (suction) on the leeward side, similar to how airplane wings generate lift. In Amarillo's flat terrain, this effect intensifies because there are no nearby structures or terrain features to disrupt wind flow.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Critical Uplift Zones:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Roof perimeters (highest pressure differentials)</li>
                    <li>• Corners and edges (turbulence concentration)</li>
                    <li>• Ridge lines (maximum wind velocity)</li>
                    <li>• Areas around penetrations (flow disruption)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Failure Progression:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Initial sealant separation (35+ mph)</li>
                    <li>• Edge lifting and tab displacement (45+ mph)</li>
                    <li>• Progressive peeling from edges inward (55+ mph)</li>
                    <li>• Complete system failure (70+ mph)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Wind Damage Insurance Coverage in Amarillo
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Coverage Basics</h3>
                <p className="text-gray-700 mb-4">
                  Most Texas homeowner policies include wind damage coverage under "windstorm and hail" provisions. However, coverage specifics vary significantly between carriers, especially regarding wind speed thresholds and deductible structures.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>State Farm:</strong> Named storm deductible vs. wind/hail deductible</li>
                  <li><strong>Allstate:</strong> Catastrophic loss provisions for widespread events</li>
                  <li><strong>USAA:</strong> Military families often have enhanced wind coverage</li>
                  <li><strong>Farmers:</strong> Percentage deductibles based on dwelling value</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Documentation Requirements</h3>
                <p className="text-gray-700 mb-4">
                  Successful wind damage claims require linking damage to specific weather events with documented wind speeds exceeding policy thresholds (typically 50-60 mph sustained or 70+ mph gusts).
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Weather data:</strong> NOAA/NWS wind speed records for claim dates</li>
                  <li><strong>Damage photos:</strong> Before storm (if available) and immediate after</li>
                  <li><strong>Professional assessment:</strong> Contractor documentation of wind-specific damage patterns</li>
                  <li><strong>Timeline correlation:</strong> Linking damage discovery to specific storm events</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Amarillo-Specific Insurance Considerations</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Wind vs. Hail Deductibles</h4>
                  <p className="text-sm text-gray-600">
                    Many Amarillo policies have separate deductibles for wind damage vs. hail damage. Wind-only events may carry higher deductibles (1-5% of dwelling value) compared to hail claims.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Dust Damage Exclusions</h4>
                  <p className="text-sm text-gray-600">
                    Some carriers exclude damage from wind-driven dust or sand. This can complicate claims when Amarillo dust storms cause granule loss or material abrasion.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Maintenance Clauses</h4>
                  <p className="text-sm text-gray-600">
                    Insurers may deny claims if they determine existing maintenance issues contributed to wind damage. Regular professional inspections help document pre-storm roof condition.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Wind-Resistant Roofing Materials for Amarillo
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">High-Wind Shingle Options</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>GAF Timberline HDZ (130 mph rating):</strong> Enhanced adhesive strips and wider nailing zone provide superior wind resistance for Panhandle conditions</li>
                  <li><strong>Owens Corning Duration Storm (130 mph rating):</strong> SureNail technology improves fastener holding power in high-wind events</li>
                  <li><strong>CertainTeed Landmark Solaris Platinum (110 mph rating):</strong> Class 4 impact resistance combined with enhanced wind performance</li>
                  <li><strong>Atlas StormMaster Shake (115 mph rating):</strong> Architectural profile with reinforced mat construction</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-teal-900 mb-4">Critical Installation Upgrades</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>6-nail pattern:</strong> Exceeds standard 4-nail requirement—reduces blow-off risk by 40-60% in wind speeds above 70 mph</li>
                  <li><strong>Premium starter strips:</strong> Enhanced adhesive provides additional edge seal strength where wind uplift forces concentrate</li>
                  <li><strong>High-wind ridge caps:</strong> Mechanical fastening every 6 inches vs. standard 12 inches for peak wind resistance</li>
                  <li><strong>Sealed flashing systems:</strong> Dual-sealant approach with structural adhesive plus mechanical fastening</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Advanced Wind Mitigation Technologies</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">UV</span>
                  </div>
                  <h4 className="font-bold text-indigo-800 mb-2">Enhanced Underlayment</h4>
                  <p className="text-sm text-gray-600">Synthetic underlayment with increased tear strength and UV resistance for Amarillo's intense sun exposure during repairs.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">⚡</span>
                  </div>
                  <h4 className="font-bold text-indigo-800 mb-2">Impact Resistance</h4>
                  <p className="text-sm text-gray-600">Class 4 materials resist damage from wind-driven debris common in Panhandle storms—may qualify for insurance discounts.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">🔧</span>
                  </div>
                  <h4 className="font-bold text-indigo-800 mb-2">Fastener Technology</h4>
                  <p className="text-sm text-gray-600">Ring-shank nails with enhanced holding power and corrosion resistance for long-term wind performance.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-3xl font-bold mb-6 text-green-900">
              Our Wind Damage Repair Process
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Comprehensive Wind Damage Assessment</h3>
                    <p className="text-gray-700">
                      Our inspectors examine every vulnerable component—shingles, flashing, vents, gutters, and fascia. We use drone photography to document roof conditions and identify patterns of wind-related failures. Assessment includes attic inspection for water infiltration evidence. Most inspections completed in 60-90 minutes with immediate preliminary findings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Insurance Documentation & Claim Filing</h3>
                    <p className="text-gray-700">
                      Wind damage insurance claims require specific documentation linking damage to covered wind events. We photograph all damage, provide detailed reports, and help you file claims with carriers. Our experience with State Farm, Allstate, USAA, and other insurers ensures proper documentation that supports claim approval.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Emergency Temporary Repairs</h3>
                    <p className="text-gray-700">
                      If your roof is actively leaking or exposed to elements, we provide emergency tarping and temporary leak repairs within hours. This prevents water damage to interior while insurance claim processes. Emergency service available 24/7 throughout Amarillo and surrounding Potter County communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">High-Wind Roofing System Installation</h3>
                    <p className="text-gray-700">
                      We install roofing systems engineered for high-wind environments. This includes 6-nail installation patterns (vs. standard 4-nail), premium starter strips, high-wind ridge caps, and sealed flashing systems. Class 4 impact-resistant shingles rated for 130 mph winds provide maximum protection for Panhandle conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Quality Inspection & Warranty</h3>
                    <p className="text-gray-700">
                      Final inspection ensures all components meet high-wind installation standards. We provide manufacturer warranties (20-50 years on materials) plus our workmanship warranty. All documentation provided for your records, giving you confidence your Amarillo home can withstand future high-wind events.
                    </p>
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
                  What wind speeds typically cause roof damage in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Sustained winds above 45 mph begin lifting shingle tabs on older roofs, while gusts exceeding 60 mph can remove entire shingles even from relatively new installations if installation quality was poor. Amarillo regularly experiences wind events in this range, especially during spring frontal passages and summer thunderstorm microbursts. At 70+ mph gusts (which Amarillo sees 15-20 times annually), even properly installed roofing systems can suffer component failures. High-wind rated installation methods with 6-nail patterns and enhanced sealing dramatically improve performance in our frequent 50-70 mph wind events.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover wind damage to my Amarillo roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Texas homeowner policies include wind damage coverage when sustained winds or gusts exceed policy thresholds—typically 50-60 mph sustained or 70+ mph gusts. We help document wind speeds from National Weather Service Amarillo office reports and correlate damage patterns to specific wind events. Our professional documentation includes thermal imaging to detect hidden damage and comprehensive photo evidence, which improves claim approval rates significantly. Many Amarillo policies have separate wind vs. hail deductibles, so understanding your specific coverage is crucial.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you prevent future wind damage on Panhandle roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  High-wind installation methods are absolutely critical in Amarillo's extreme wind environment. We use 6-nail patterns instead of standard 4-nail (reducing blow-off risk by 40-60%), install premium starter strips with enhanced adhesion, seal all flashing with structural-grade sealants, and specify Class 4 shingles rated for 130+ mph winds. Enhanced underlayment with superior tear strength handles wind-driven debris common in Panhandle storms. These methods reduce wind damage risk by 80-90% compared to standard installations, often qualifying homeowners for insurance discounts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair wind damage after Amarillo storms?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide emergency tarping and temporary repairs within 2-4 hours for actively leaking roofs—critical in Amarillo where wind damage often precedes heavy rain events. Full repair or replacement typically occurs 2-4 weeks after insurance claim approval, depending on material availability and scheduling. During widespread wind events affecting the entire Texas Panhandle (like derechos or major frontal systems), we coordinate with regional suppliers and work extended hours to accommodate emergency needs. Our local inventory of high-wind rated materials ensures faster repairs than companies relying on distant suppliers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I get inspections after every Amarillo windstorm?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Inspect after wind events with sustained winds above 45 mph or gusts exceeding 60 mph—which occurs 40-60 times annually in Amarillo. Even if you see no obvious damage from ground level, lifted shingles, seal failures, and flashing displacement may exist. We offer free professional inspections using drone photography and thermal imaging to identify problems invisible from ground observation. Early detection prevents minor wind damage from becoming major water damage during subsequent storms, and documentation helps establish timeline for insurance claims if damage worsens.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why is wind damage different from hail damage in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Wind damage typically occurs through uplift forces and sustained stress rather than impact like hail. While hail damage is immediately visible with obvious punctures and fractures, wind damage often appears subtle initially—lifted tabs, seal separation, fastener withdrawal—but progresses rapidly. Amarillo's frequent high winds mean roofs experience cumulative stress over time, with each wind event potentially worsening existing minor damage. Wind damage also affects different roof components (flashing, vents, edges) compared to hail's more uniform surface impact patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do dust storms cause additional roofing problems in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, Amarillo's frequent dust storms create unique challenges beyond standard wind damage. Wind-driven sand and debris gradually erode protective granules from shingles, reducing UV resistance and fire ratings. Dust infiltration can compromise flashing seals and penetration points, creating slow leak paths. Some insurance policies exclude dust-related damage, so documenting wind speeds (not just dust presence) during damage events is crucial. High-quality shingles with enhanced granule adhesion and sealed flashing systems provide better dust storm resistance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What's the best time of year for wind damage repairs in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Late fall through early spring (October-March) offers the most stable weather for roofing work, with reduced wind speeds and fewer severe weather events. However, emergency repairs can't wait for ideal weather—we're equipped for year-round installation with specialized techniques for high-wind conditions. Summer repairs face challenges from extreme heat and afternoon thunderstorms, while spring work must be scheduled around frequent storm systems. We maintain inventory and crew scheduling specifically for Amarillo's weather patterns to minimize delays regardless of season.
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
          <h2 className="text-4xl font-bold mb-6">Wind Damage Your Amarillo Roof?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free wind damage inspections. 24/7 emergency service. Complete insurance claim assistance. High-wind installation methods that prevent future damage.
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
