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
  title: "Wind Damage Repair Lubbock | 5 Star Commercial Roofing",
  description: "Wind damage repair in Lubbock. South Plains sustained winds with gusts over 70+ mph. 24/7 emergency service and insurance claim assistance. Call (806) 622-6041",
};

export default function Page() {
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
                      "name": "Lubbock",
                      "url": "/wind-damage-repair-lubbock/"
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
                "addressLocality": "Lubbock",
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
              "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas",
              "name": "Lubbock",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Wind damage repair in Lubbock. South Plains sustained winds with gusts over 70+ mph. 24/7 emergency service and insurance claim assistance."
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
                              "name": "What wind speeds typically cause roof damage in Lubbock?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sustained winds above 45 mph begin lifting shingle tabs on older roofs. Gusts exceeding 60 mph can remove entire shingles even from relatively new roofs if installation quality was poor. Lubbock regularly experiences wind events in this range, especially during spring and fall frontal passages. High-wind rated installation methods dramatically improve performance."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Will insurance cover wind damage to my Lubbock roof?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most homeowner policies cover wind damage when sustained winds or gusts exceed thresholds specified in your policy—typically 50-60 mph. We help document wind speeds from National Weather Service reports and link damage patterns to specific wind events. Our professional documentation improves claim approval rates significantly."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How do you prevent future wind damage in Lubbock?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "High-wind installation methods are critical in Lubbock. We use 6-nail patterns instead of standard 4-nail, install premium starter strips with enhanced adhesion, seal all flashing with high-grade sealants, and use Class 4 shingles rated for 130 mph winds. These methods reduce wind damage risk by 80-90% compared to standard installations."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How quickly can you repair wind damage in Lubbock?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We provide emergency tarping and temporary repairs within hours for actively leaking roofs. Full repair or replacement typically occurs 2-4 weeks after claim approval, depending on material availability and scheduling. During widespread wind events affecting the entire Texas Panhandle, we work extended hours to accommodate emergency needs."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Should I get a wind damage inspection after every windstorm in Lubbock?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Inspect after wind events with sustained winds above 45 mph or gusts exceeding 60 mph. Even if you see no obvious damage from the ground, lifted shingles and flashing issues may exist. We offer free inspections that identify problems early before they cause leaks. Early detection prevents minor wind damage from becoming major water damage."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "What makes Lubbock's wind damage different from other Texas cities?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Lubbock's South Plains location creates unique wind challenges: sustained agricultural debris during crop seasons, microburst events from isolated thunderstorms, dry line wind shear, and minimal natural windbreaks. The 3,256-foot elevation intensifies wind effects, and agricultural debris becomes projectiles in wind events."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How do thunderstorm microbursts affect Lubbock roofs differently?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "South Plains microbursts create concentrated downdrafts that spread radially, hitting roofs from multiple directions simultaneously. These events can produce 80-120 mph winds in small areas, overwhelming standard roofing systems with sudden, extreme intensity across multiple roof components."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Will my insurance cover agricultural debris damage to my roof?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Coverage depends on whether debris impact occurred during a covered wind event. Cotton bolls, crop residue, and agricultural equipment blown by winds typically qualify when wind speeds exceed policy thresholds. Professional documentation showing projectile impact patterns significantly improves claim approval rates."
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
                Wind Damage Repair in <span className="text-brand-gold-light">Lubbock</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Protecting South Plains Properties Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Lubbock's South Plains location at 3,256 feet elevation creates perfect conditions for destructive winds. The city averages 12.8 mph sustained winds with frequent 50-80 mph gusts from thunderstorm outflows and frontal systems. As the largest city between Dallas and Denver, Lubbock sits exposed on vast agricultural plains with minimal wind protection, making roofs vulnerable to sustained high-wind events that can strip shingles, damage flashing, and compromise entire roofing systems.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Estimate
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Understanding Wind Damage in Lubbock's South Plains Environment
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Lubbock's position at 3,256 feet elevation on the South Plains creates a unique wind environment distinct from other Texas regions. Unlike coastal areas with consistent directional winds, Lubbock experiences multi-directional wind events from various weather systems. The city averages 12.8 mph sustained winds year-round, with spring months (March-May) seeing averages exceed 15 mph. NOAA records show Lubbock experiences wind gusts over 50 mph approximately 25-30 times annually, with peak wind season occurring during late spring frontal passages and summer thunderstorm complexes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Lubbock Wind Characteristics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Elevation factor:</strong> 3,256 ft elevation intensifies wind effects</li>
                  <li><strong>Agricultural exposure:</strong> Minimal windbreaks across farmland for 100+ miles</li>
                  <li><strong>Thunderstorm season:</strong> May-September microbursts with 60-90 mph winds</li>
                  <li><strong>Dry line activity:</strong> Sharp atmospheric boundaries create severe wind shear</li>
                  <li><strong>Winter winds:</strong> Blue norther events with sustained 40+ mph winds</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Local Wind Hazards</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Supercell downdrafts:</strong> Concentrated outflow winds exceeding 100 mph</li>
                  <li><strong>Haboob dust storms:</strong> Combined wind-debris damage events</li>
                  <li><strong>Bow echo complexes:</strong> Linear wind damage across Lubbock County</li>
                  <li><strong>Gap flow acceleration:</strong> Channeled winds between storm cells</li>
                  <li><strong>Agricultural debris:</strong> Cotton, crop residue becomes wind-driven projectiles</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The South Plains agricultural landscape means wind events often carry significant debris loads—cotton bolls, crop residue, and topsoil—that compound standard wind damage through abrasion and impact. From properties near Texas Tech University to homes in the Monterey area, from Westwind to Shadow Hills neighborhoods, we've documented how Lubbock's unique position affects roofing performance across Lubbock County's diverse residential areas.
            </p>
            
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 mb-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">Critical Wind Speed Data for Lubbock Roofs</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">40-50 mph</div>
                  <div className="text-sm text-gray-600">Shingle tab lifting threshold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-700">55-70 mph</div>
                  <div className="text-sm text-gray-600">Significant component damage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800">75+ mph</div>
                  <div className="text-sm text-gray-600">Potential system failure</div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">Based on 15 years of South Plains weather data and roof performance analysis</p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Unlike hail damage that's immediately visible, wind damage in Lubbock often develops gradually through repeated stress cycles. Each significant wind event (25+ annually) potentially weakens roof components through microscopic movements and seal failures. Our wind damage assessments use advanced detection methods including thermal imaging and drone-mounted sensors to identify problems invisible to ground-level inspection—critical for preventing small issues from becoming major failures during Lubbock's intense summer storm season.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Seasonal Wind Patterns Affecting Lubbock Roofs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Winter (Dec-Feb)</h3>
                <p className="text-sm text-blue-800 mb-3">Average: 11.4 mph sustained</p>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Blue norther arctic fronts with 40-55 mph gusts</li>
                  <li>• Dry, cold air increases material brittleness</li>
                  <li>• Temperature cycling stresses roof systems</li>
                  <li>• Limited repair windows due to freezing</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-3">Spring (Mar-May)</h3>
                <p className="text-sm text-green-800 mb-3">Average: 15.1 mph sustained</p>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Peak wind season with frequent 60+ mph events</li>
                  <li>• Dry line thunderstorm development</li>
                  <li>• Agricultural debris in wind events</li>
                  <li>• Optimal weather for roof repairs</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Summer (Jun-Aug)</h3>
                <p className="text-sm text-yellow-800 mb-3">Average: 11.8 mph sustained</p>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Severe thunderstorm microbursts 70-100+ mph</li>
                  <li>• Heat expansion worsens existing wind damage</li>
                  <li>• Haboob dust storms with sustained high winds</li>
                  <li>• Emergency repair season due to sudden events</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Fall (Sep-Nov)</h3>
                <p className="text-sm text-orange-800 mb-3">Average: 12.9 mph sustained</p>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• Strong cold fronts with rapid wind shifts</li>
                  <li>• Cotton harvest debris in wind events</li>
                  <li>• Final opportunity for major roof projects</li>
                  <li>• Insurance claims processing from summer storms</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Wind Damage Patterns Specific to South Plains Conditions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-slate-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Agricultural Debris Impact</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Cotton boll damage:</strong> Wind-driven cotton bolls puncture and abrade shingle surfaces during harvest season (August-October)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Crop residue scour:</strong> Corn stalks and wheat stubble become projectiles, damaging gutters and flashing systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Topsoil abrasion:</strong> Fine agricultural dust erodes protective granules faster than standard wind events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Equipment debris:</strong> High winds tear loose agricultural equipment covers, creating large projectile hazards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Thunderstorm Microburst Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Concentrated downdrafts:</strong> Supercell thunderstorms produce focused 80-120 mph winds in areas as small as 1-2 miles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Radial wind patterns:</strong> Microbursts create outflow in all directions, stressing roofs from multiple angles simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Rapid onset/cessation:</strong> Damage occurs in 2-5 minutes with little warning—often catches roofs unprepared</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Wet microburst saturation:</strong> Heavy rain saturates roofing materials before high winds hit, reducing adhesion strength</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold text-teal-900 mb-4">Dry Line Wind Effects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Sharp wind shear boundaries:</strong> Rapid wind direction changes create complex stress patterns on roof structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Sustained high winds:</strong> Dry line events maintain 40-60 mph winds for hours, causing fatigue failures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Pressure fluctuations:</strong> Atmospheric pressure changes create additional uplift stress beyond standard wind forces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Dust loading:</strong> High dust concentrations increase effective wind density, multiplying force on roof surfaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Wind Damage Insurance Coverage for Lubbock Properties
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-900 mb-4">South Plains Coverage Considerations</h3>
                <p className="text-gray-700 mb-4">
                  Lubbock County wind damage claims often involve complex weather attribution due to the area's multiple wind hazard types—straight-line thunderstorm winds, microburst events, dry line systems, and frontal passages can all cause covered damage within the same storm system.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Texas Farm Bureau:</strong> Agricultural area expertise with enhanced wind coverage</li>
                  <li><strong>State Farm:</strong> Separate wind/hail deductibles common in Lubbock</li>
                  <li><strong>Allstate:</strong> Catastrophic wind event provisions for widespread damage</li>
                  <li><strong>USAA:</strong> Military families near Reese Center get enhanced coverage</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Documentation for South Plains Claims</h3>
                <p className="text-gray-700 mb-4">
                  Successful wind damage claims in Lubbock require correlating damage to specific meteorological events. The National Weather Service office provides detailed wind speed data, but agricultural debris damage may need additional documentation to prove wind causation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Microburst data:</strong> Radar velocity signatures from NWS Lubbock</li>
                  <li><strong>Agricultural impact:</strong> Crop damage reports supporting wind speed claims</li>
                  <li><strong>Debris analysis:</strong> Photographing foreign objects embedded in roofing</li>
                  <li><strong>Timeline correlation:</strong> Linking storm reports to damage discovery</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Lubbock-Specific Insurance Challenges</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Agricultural Debris Exclusions</h4>
                  <p className="text-sm text-gray-600">
                    Some carriers try to classify crop debris as "normal wear" rather than storm damage. Professional documentation proving projectile impact vs. gradual accumulation is essential.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Microburst vs. Tornado Classification</h4>
                  <p className="text-sm text-gray-600">
                    Microbursts cause tornado-like damage but may have different coverage terms. NWS storm surveys help determine official classification for insurance purposes.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Gradual vs. Sudden Damage</h4>
                  <p className="text-sm text-gray-600">
                    Lubbock's frequent wind events can complicate claims timing. Regular professional inspections help establish baseline conditions and damage progression.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Wind-Resistant Roofing Solutions for South Plains Conditions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Enhanced Shingle Systems</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>GAF Timberline HDZ (130 mph rating):</strong> Laydown adhesive and wider nail zone handle South Plains thermal cycling and sustained winds</li>
                  <li><strong>CertainTeed Landmark Solaris (110 mph + Class 4):</strong> Dual protection against wind and agricultural debris impact</li>
                  <li><strong>Owens Corning Duration Storm (130 mph rating):</strong> SureNail strip technology provides superior holding power in high-wind events</li>
                  <li><strong>Atlas StormMaster Slate (115 mph rating):</strong> Enhanced granule adhesion resists South Plains dust storm abrasion</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-teal-900 mb-4">South Plains Installation Upgrades</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>8-nail high-wind pattern:</strong> Exceeds standard 6-nail for extreme exposure areas—reduces blow-off risk by 70% in 80+ mph winds</li>
                  <li><strong>Enhanced edge sealing:</strong> Additional sealant along perimeter edges where South Plains winds create maximum uplift</li>
                  <li><strong>Agricultural debris guards:</strong> Protective screening for vents and gutters during crop season</li>
                  <li><strong>Reinforced flashing systems:</strong> Heavier gauge metals and mechanical fastening for sustained wind resistance</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Advanced Wind Mitigation for Agricultural Environments</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">🌾</span>
                  </div>
                  <h4 className="font-bold text-indigo-800 mb-2">Debris-Resistant Design</h4>
                  <p className="text-sm text-gray-600">Specialized materials and installation methods designed to handle South Plains agricultural debris during high-wind events.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">💨</span>
                  </div>
                  <h4 className="font-bold text-indigo-800 mb-2">Microburst Protection</h4>
                  <p className="text-sm text-gray-600">Installation techniques specifically engineered for sudden, extreme wind events common to South Plains thunderstorm activity.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">🏠</span>
                  </div>
                  <h4 className="font-bold text-indigo-800 mb-2">Tech Terrace Tested</h4>
                  <p className="text-sm text-gray-600">Our installation methods are proven in Lubbock's most exposed neighborhoods, from Tech Terrace to Westwind developments.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions - Lubbock Wind Damage
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Lubbock's wind damage different from other Texas cities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lubbock's South Plains location creates unique wind challenges: sustained agricultural debris during crop seasons, microburst events from isolated thunderstorms, dry line wind shear, and minimal natural windbreaks across hundreds of miles. The 3,256-foot elevation intensifies wind effects compared to lower elevations. Agricultural debris like cotton bolls and crop residue becomes projectiles in wind events, causing damage patterns not seen in urban areas. These factors combine to create more complex and frequent wind damage compared to other Texas cities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do thunderstorm microbursts affect Lubbock roofs differently?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  South Plains microbursts create concentrated downdrafts that spread radially upon ground contact, hitting roofs from multiple directions simultaneously—unlike straight-line winds that stress structures in one direction. These events can produce 80-120 mph winds in areas as small as 1-2 miles, often catching individual properties while leaving nearby areas undamaged. The sudden onset and extreme intensity overwhelm standard roofing systems designed for gradual wind loading, causing rapid-sequence failures across multiple roof components.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will my insurance cover agricultural debris damage to my roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Coverage depends on whether debris impact occurred during a covered wind event. Cotton bolls, crop residue, and agricultural equipment blown by winds typically qualify as covered damage when wind speeds exceed policy thresholds (usually 50-60 mph). However, some carriers try to classify gradual debris accumulation as "normal wear" rather than storm damage. Professional documentation showing projectile impact patterns, wind speed correlation, and timeline linking to specific weather events significantly improves claim approval rates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What's the best roofing system for Lubbock's agricultural environment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  High-wind rated shingles (130+ mph) with enhanced granule adhesion perform best in Lubbock's conditions. Class 4 impact resistance handles agricultural debris, while advanced installation techniques—8-nail patterns, enhanced edge sealing, reinforced flashing—provide the structural integrity needed for microburst events. Synthetic underlayment with superior tear strength handles debris punctures better than felt. Agricultural debris guards for vents and gutters prevent crop residue accumulation that can cause drainage failures and component damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How often should I inspect my roof during Lubbock's wind season?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Inspect after any wind event with sustained winds above 40 mph or gusts exceeding 55 mph—which occurs 25-30 times annually in Lubbock. Spring and early summer require increased vigilance due to frequent thunderstorm activity. Professional inspections are recommended after significant agricultural debris events (harvest seasons) and following any microburst or severe thunderstorm warning. Our free drone-assisted inspections identify wind damage invisible from ground level, preventing minor issues from becoming major failures during subsequent wind events.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can repairs be completed after South Plains wind events?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Emergency tarping and temporary repairs are completed within 2-4 hours for actively leaking roofs—critical since Lubbock wind events often precede heavy rain. Full repairs typically occur 2-3 weeks after insurance approval, depending on damage extent and material availability. During widespread events (affecting multiple South Plains counties), we maintain regional material stockpiles and coordinate with agricultural equipment suppliers for specialized debris removal. Our local presence and South Plains weather expertise ensure faster response times than companies unfamiliar with agricultural area challenges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do dust storms cause wind damage separate from regular thunderstorms?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, South Plains haboobs (dust storms) create unique damage through sustained winds carrying heavy dust loads. The increased air density from dust particles multiplies wind forces on roof surfaces, while abrasive dust gradually erodes protective granules and seals. These events typically maintain 40-50 mph winds for hours, causing different damage patterns than brief thunderstorm gusts. Dust infiltration can compromise flashing seals and penetration points, creating slow leak paths that may not be immediately apparent but worsen during subsequent rain events.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What neighborhoods in Lubbock see the most wind damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Properties in western and northwestern Lubbock (Westridge, Shadow Hills, Westwind) experience maximum exposure to prevailing winds with minimal windbreaks. Areas near agricultural fields see increased debris-related damage during crop seasons. Older neighborhoods like Tech Terrace and Overton may have mature trees providing some protection but often have older roofing systems more vulnerable to wind damage. New developments on the city's periphery face maximum exposure until landscaping matures. However, microburst events can cause severe damage anywhere in Lubbock County regardless of location or protection.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Lubbock Service Area</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107097.95394183475!2d-101.8552!3d33.5779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12add7c5e66f%3A0x388a148f3840234e!2sLubbock%2C%20TX!5e0!3m2!1sen!2sus!4v1736541567890!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections and estimates for Lubbock property owners. Expert wind damage repair with honest assessments and fair pricing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
