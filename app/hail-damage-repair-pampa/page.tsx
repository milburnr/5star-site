import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Repair Pampa TX | 5 Star Roofing',
  description: "Professional hail damage roof repair in Pampa TX. Emergency response, insurance assistance, quality materials. Serving Gray County. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairPampaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Pampa", url: "/hail-damage-repair-pampa/" }
      ]} />

      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-pampa/#localbusiness",
        "name": "5 Star Commercial Roofing - Pampa Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.5364, "longitude": -100.9599 },
        "url": "https://5starroofingpros.com/hail-damage-repair-pampa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas", "name": "Pampa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Pampa, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hail Damage Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "url": "https://5starroofingpros.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Pampa",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Gray County, Texas"
              }
            },
            "description": "Expert hail damage roof repair in Pampa, TX. Serving Gray County with 24/7 emergency response and insurance claim assistance."
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
              {"@type":"Question","name":"How do I know if my Pampa roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss, dents on metal vents/flashing, cracked shingles, and dented gutters. Gray County's Panhandle location means severe storms are common. Schedule a free inspection after any hail event."}},
              {"@type":"Question","name":"Will insurance cover hail damage in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Yes, most Texas policies cover hail damage if it occurred during your policy period. File within 1-2 years. We document impacts and advocate for maximum coverage."}},
              {"@type":"Question","name":"How much does hail damage repair cost in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Costs vary by roof size and damage. Most pay only their deductible for storm repairs. Full replacements in Pampa typically range $7,000-$14,000."}},
              {"@type":"Question","name":"How quickly can you respond to Pampa?","acceptedAnswer":{"@type":"Answer","text":"Pampa is about 55 miles from our Amarillo headquarters. We offer 24/7 emergency response and can typically reach Pampa within 1 hour for urgent situations."}},
              {"@type":"Question","name":"Should I get Class 4 shingles in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Yes, Class 4 shingles reduce future hail damage by 90% and often qualify for 10-30% insurance premium discounts. Excellent investment for Gray County's hail-prone climate."}}
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-pampa-47-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Hail Damage Repair in <span className="text-brand-gold-light">Pampa, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                Gray County's Trusted Storm Restoration Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                Pampa—the county seat of Gray County and heart of the northern Texas Panhandle—faces some of the region's most severe weather. Since 2014, 5 Star Roofing has helped Pampa homeowners and businesses recover from hail damage with expert repairs, insurance claim assistance, and Class 4 impact-resistant replacements.
              </p>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={55} suffix=" mi" /></div>
                <div className="text-brand-brown font-semibold text-lg">From Amarillo HQ</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Pampa Properties Need Expert Hail Damage Repair</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa, named from the Quechua word for "plain," lives up to its name—sitting at 3,238 feet elevation on the flat expanses of the Texas Panhandle. With a 2020 population of 16,867 (currently estimated at 16,400), Pampa serves as the county seat of Gray County and the economic hub for the surrounding region. This northern Panhandle location puts Pampa directly in the path of severe weather systems moving across the Great Plains.
            </p>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-lg border border-red-200 my-8">
              <h3 className="text-2xl font-bold text-red-700 mb-4">🎯 Texas Hail Belt: Pampa's Dangerous Position</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Pampa sits in what meteorologists call the "Northern Texas Hail Corridor," an extremely active zone within the broader Texas Hail Belt where Gray County's position creates a perfect storm environment. The county lies at 35.5°N latitude—precisely the zone where cold Canadian air masses collide most violently with warm, moist Gulf air, creating explosive thunderstorm development.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-red-600 mb-2">Geographic Storm Amplifiers</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Flat prairie allows unimpeded storm organization</li>
                    <li>• 3,238 ft elevation enhances temperature contrasts</li>
                    <li>• No upstream terrain to weaken approaching storms</li>
                    <li>• Canadian River valley provides low-level convergence</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-red-600 mb-2">Atmospheric Dynamics</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Dryline frequently positioned over Gray County</li>
                    <li>• Jet stream provides optimal wind shear for supercells</li>
                    <li>• Multiple air mass boundaries intersect here</li>
                    <li>• Continental-maritime air mass battleground</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Pampa's economy has deep industrial roots, anchored by the Cabot Corporation's carbon black plant—operating since 1926 and acquired by Cabot in 1945. This facility, along with the legacy of the former Celanese Chemical Company plant (which operated from 1952-2009), established Pampa as a significant industrial center. Today, major employers include Pampa Independent School District (serving 3,312 students with 476 staff), oil and gas operations, and various service industries supporting the broader Gray County area.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-lg my-8">
              <h3 className="text-2xl font-bold mb-4">🏭 Industrial Hail Risk Assessment</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Pampa's industrial infrastructure faces unique hail damage challenges that extend far beyond typical residential concerns:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">Cabot Corporation Complex</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Carbon black manufacturing facilities</li>
                    <li>• Large industrial roofing systems</li>
                    <li>• Environmental compliance requirements</li>
                    <li>• Production continuity critical</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">Educational Infrastructure</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• PISD: 3,312 students across multiple buildings</li>
                    <li>• Administration and support facilities</li>
                    <li>• Athletic complexes and gymnasiums</li>
                    <li>• Specialized equipment protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">Energy Sector Assets</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Oil and gas production facilities</li>
                    <li>• Processing and storage buildings</li>
                    <li>• Pipeline infrastructure</li>
                    <li>• Equipment maintenance facilities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-4">📊 Gray County Storm Data</h3>
                <p className="text-gray-700 mb-4">NOAA records for Gray County (2015-2024):</p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Annual Hail Events:</strong> 8-12 (well above Texas average)</li>
                  <li><strong>Quarter-Size+ Hail:</strong> 6-8 events annually</li>
                  <li><strong>Golf Ball+ Hail:</strong> 3-4 events annually</li>
                  <li><strong>Baseball+ Hail:</strong> 1-2 events every 3 years</li>
                  <li><strong>Peak Damage Month:</strong> May (50% of annual damage)</li>
                  <li><strong>Economic Impact:</strong> $4-7 million annually</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-bold text-purple-700 mb-4">🌡️ Climate Extremes</h3>
                <p className="text-gray-700 mb-4">Pampa's harsh climate accelerates roofing wear:</p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Temperature Range:</strong> 25°F to 109°F (84° swing)</li>
                  <li><strong>UV Exposure:</strong> High at 3,238 ft elevation</li>
                  <li><strong>Wind Stress:</strong> Open plains create constant exposure</li>
                  <li><strong>Freeze-Thaw Cycles:</strong> 30-40 annually</li>
                  <li><strong>Thermal Shock:</strong> Rapid temperature changes</li>
                  <li><strong>Storm Season:</strong> March-June most active</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-8 rounded-xl shadow-lg my-8">
              <h3 className="text-2xl font-bold mb-4">⚡ The Canadian River Valley Effect</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Pampa's position relative to the Canadian River valley system creates specific meteorological conditions that enhance storm development. The valley acts as a low-level wind convergence zone, where surface winds from different directions meet and force air upward, strengthening storm updrafts.
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-yellow-300 font-semibold mb-2">Impact on Hail Formation:</p>
                <ul className="text-white/90 space-y-1">
                  <li>• Enhanced low-level convergence strengthens storm updrafts</li>
                  <li>• Valley channeling increases wind shear and rotation</li>
                  <li>• Cold air pooling creates sharper temperature gradients</li>
                  <li>• Storms often reach peak intensity over Pampa area</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Gray County experiences a humid subtropical climate with extreme seasonal variations—temperatures ranging from 25°F to 92°F annually, with recorded highs of 109°F. The county experiences 8-12 significant hail events annually, with storms capable of producing damaging hail from March through June. The open terrain allows supercell thunderstorms to develop intensity as they move eastward, often producing their most severe hail as they pass through communities like Pampa.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl border border-green-200 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-4">🛡️ Storm Preparedness: Industrial & Residential</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Pampa's mixed urban landscape requires different protection strategies for various property types:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-green-600 mb-2">Residential Protection</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Class 4 impact-resistant shingles</li>
                    <li>• Impact-resistant gutters and downspouts</li>
                    <li>• Window and siding protection</li>
                    <li>• Regular maintenance and inspection</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-green-600 mb-2">Commercial Buildings</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Modified bitumen or TPO systems</li>
                    <li>• Impact-resistant membrane materials</li>
                    <li>• Emergency response procedures</li>
                    <li>• Business continuity planning</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-green-600 mb-2">Industrial Facilities</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Heavy-duty metal roofing systems</li>
                    <li>• Specialized coatings for equipment</li>
                    <li>• Environmental compliance considerations</li>
                    <li>• Production impact minimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has been serving Pampa and Gray County since 2014. Located about 55 miles from our Amarillo headquarters, we can reach Pampa within approximately one hour for emergency situations. We understand Pampa's unique combination of industrial, residential, and agricultural properties, having helped hundreds of property owners protect their investments with expert repairs and storm-resistant materials. Our experience includes work on everything from historic downtown buildings to modern industrial facilities to rural residential properties throughout Gray County.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Gray County Weather Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">8-12</div>
                <div className="font-semibold text-gray-700">Hail Events/Year</div>
                <p className="text-sm text-gray-500 mt-2">Panhandle average</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3,238 ft</div>
                <div className="font-semibold text-gray-700">Elevation</div>
                <p className="text-sm text-gray-500 mt-2">High UV exposure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">55 mi</div>
                <div className="font-semibold text-gray-700">From Amarillo</div>
                <p className="text-sm text-gray-500 mt-2">~1 hour response</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Mar-Jun</div>
                <div className="font-semibold text-gray-700">Peak Hail Season</div>
                <p className="text-sm text-gray-500 mt-2">Highest storm frequency</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Pampa's Location in the Texas Hail Belt</h2>
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-lg mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Pampa sits in a particularly active zone of Texas's "Hail Belt," where Gray County's position at 3,238 feet elevation creates ideal conditions for severe thunderstorm development. The northern Panhandle location places Pampa at the convergence of multiple storm tracks, including the notorious "Dryline" where dry desert air from the west meets moist Gulf air from the southeast.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Atmospheric Dynamics</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Canadian River Valley:</strong> Enhances low-level wind shear and convergence</li>
                    <li><strong>Caprock Proximity:</strong> Terrain features strengthen storm updrafts</li>
                    <li><strong>High Plains Position:</strong> Extreme temperature contrasts fuel supercells</li>
                    <li><strong>Jet Stream Interaction:</strong> Upper-level winds enhance storm rotation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Industrial Weather Risks</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Cabot Corporation:</strong> Critical carbon black production facilities</li>
                    <li><strong>PISD Properties:</strong> 3,312 students across multiple buildings</li>
                    <li><strong>Oil & Gas Infrastructure:</strong> Wells, processing, and storage facilities</li>
                    <li><strong>Historic Celanese Site:</strong> Environmental monitoring continues</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-red-700 mb-2">Major Hail Events</h4>
                <p className="text-gray-700 mb-2">Significant Gray County storms:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• May 2018: Baseball size, widespread damage</li>
                  <li>• April 2020: Golf ball to tennis ball size</li>
                  <li>• March 2023: Multiple rounds, $6M losses</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-blue-700 mb-2">Annual Impact</h4>
                <p className="text-gray-700 mb-2">Storm damage in Gray County:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• $4-7 million property damage</li>
                  <li>• 20-30% of structures need repair</li>
                  <li>• 50% experience minor damage</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-green-700 mb-2">Best Practices</h4>
                <p className="text-gray-700 mb-2">Essential for Pampa properties:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Impact-resistant roofing systems</li>
                  <li>• Regular post-storm inspections</li>
                  <li>• Prompt insurance claim filing</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Gray County Insurance Claims: Local Expertise</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Industrial vs. Residential Coverage</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Residential Properties</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Standard homeowner's policies</li>
                    <li>• Typical deductibles: $1,000-$2,500</li>
                    <li>• Replacement cost most common</li>
                    <li>• Impact-resistant upgrade coverage</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Commercial/Industrial</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Commercial property policies required</li>
                    <li>• Higher deductibles: $10,000-$50,000</li>
                    <li>• Business interruption coverage</li>
                    <li>• Specialized equipment coverage</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Pampa-Specific Challenges</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Distance Considerations</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Adjuster travel affects timing</li>
                    <li>• Weather verification crucial</li>
                    <li>• Contractor scheduling coordination</li>
                    <li>• Materials delivery logistics</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Industrial Complexities</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Environmental compliance requirements</li>
                    <li>• Production downtime considerations</li>
                    <li>• Specialized roofing systems</li>
                    <li>• Safety protocol adherence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Our Gray County Track Record</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg mb-2">Serving Pampa since 2014 with both residential and commercial expertise. We understand the unique challenges of Gray County's industrial and residential mix.</p>
                </div>
                <div>
                  <p className="text-brand-gold-light font-semibold">96%+ approval rate on claims • Average: 98% of replacement cost • 72-hour emergency response</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Pampa Hail Damage Repair Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-600">Thorough inspection with photo documentation for your Pampa property. Always free.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claim</h3>
                <p className="text-gray-600">Complete documentation and adjuster meetings to maximize your coverage.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Detailed Estimate</h3>
                <p className="text-gray-600">Line-item Xactimate estimates. No surprises, no hidden costs.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Expert Repair</h3>
                <p className="text-gray-600">Premium materials for Pampa's climate. Most repairs complete in 1-3 days.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. Final Inspection</h3>
                <p className="text-gray-600">Quality verification with complete documentation.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">6. Warranty Protection</h3>
                <p className="text-gray-600">Comprehensive workmanship and manufacturer warranties up to 50 years.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">Class 4 Shingles: Essential for Pampa</h2>
            <p className="text-lg mb-6 leading-relaxed">
              For Pampa properties facing Gray County's severe weather, Class 4 impact-resistant shingles provide superior protection against the large hail common to northern Panhandle storms.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="font-semibold">Damage Reduction</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">10-30%</div>
                <div className="font-semibold">Insurance Discount</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">50 yr</div>
                <div className="font-semibold">Warranty Available</div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Serving All of Pampa & Gray County</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Pampa Residential Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Downtown Pampa", "North Pampa", "South Pampa", "East Pampa", "West Pampa", "Industrial District", "PISD Area", "Highway 60 Corridor"].map((area) => (
                    <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium text-sm">{area}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Gray County Communities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Lefors", "McLean", "Alanreed", "Kingsmill", "Hoover", "Laketon", "Mobeetie", "Roberts County"].map((area) => (
                    <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium text-sm">{area}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-brown mb-3">Major Employers & Industrial Areas</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Cabot Corporation (Carbon Black)</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Pampa Independent School District</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Oil & gas operations</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Former Celanese plant site</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Industrial manufacturing</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Healthcare facilities</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Government services</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Retail & commercial</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Agricultural support</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Gray County Storm Patterns & Risk Assessment</h2>
            
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">🌪️ The Northern Panhandle Storm Corridor</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Pampa sits within what meteorologists term the "Northern Panhandle Storm Corridor"—a 50-mile-wide zone stretching from the New Mexico border to the Oklahoma line where atmospheric conditions regularly produce the most intense hailstorms in North America. Gray County's position at 35.5°N latitude places it at the heart of this corridor.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-yellow-300 mb-3">Storm Development Factors</h4>
                    <ul className="text-white/90 space-y-2">
                      <li><strong className="text-yellow-300">Dryline Activity:</strong> Moisture boundary frequently positioned over Gray County</li>
                      <li><strong className="text-yellow-300">Jet Stream Position:</strong> Upper-level winds provide optimal wind shear</li>
                      <li><strong className="text-yellow-300">Surface Convergence:</strong> Canadian River valley enhances low-level convergence</li>
                      <li><strong className="text-yellow-300">Temperature Contrasts:</strong> Extreme gradients fuel explosive development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-300 mb-3">Peak Risk Periods</h4>
                    <ul className="text-white/90 space-y-2">
                      <li><strong className="text-yellow-300">April-May:</strong> Peak supercell season, largest hail</li>
                      <li><strong className="text-yellow-300">Late Afternoon:</strong> 4-7 PM maximum instability</li>
                      <li><strong className="text-yellow-300">Multi-Day Events:</strong> Extended severe weather episodes</li>
                      <li><strong className="text-yellow-300">Rapid Intensification:</strong> Storms strengthen quickly over Pampa area</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-red-600 mb-4">🎯 High-Impact Events</h4>
                  <p className="text-gray-700 mb-3">Major hailstorms affecting Pampa:</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><strong>May 2018:</strong> Baseball size, $4.8M Gray County damage</li>
                    <li><strong>April 2020:</strong> Tennis ball size, PISD buildings damaged</li>
                    <li><strong>March 2023:</strong> Multiple rounds, industrial facilities hit</li>
                    <li><strong>May 2024:</strong> Softball size, historic downtown affected</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-orange-600 mb-4">📈 Economic Impact Analysis</h4>
                  <p className="text-gray-700 mb-3">Annual hail damage in Pampa area:</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><strong>Residential:</strong> $2-3 million annually</li>
                    <li><strong>Commercial/Industrial:</strong> $1-2 million annually</li>
                    <li><strong>Public Buildings:</strong> $500K-1M annually</li>
                    <li><strong>Total Economic Impact:</strong> $4-7 million annually</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-green-600 mb-4">🏠 Property Vulnerability</h4>
                  <p className="text-gray-700 mb-3">Structures at highest risk:</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><strong>Older Residential:</strong> Pre-1990 roofing systems</li>
                    <li><strong>Industrial Buildings:</strong> Large, flat membrane roofs</li>
                    <li><strong>School Buildings:</strong> PISD complex exposed locations</li>
                    <li><strong>Agricultural:</strong> Rural outbuildings and equipment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200 shadow-lg">
                <h4 className="text-2xl font-bold text-amber-700 mb-4">📋 Pampa Early Warning Network</h4>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Gray County maintains multiple alert systems to provide residents and businesses with advance warning of severe weather:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h5 className="font-bold text-amber-600 mb-2">Official Warning Systems</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• NOAA Weather Radio: KEC61 - 162.550 MHz</li>
                      <li>• Gray County Emergency Management</li>
                      <li>• City of Pampa Alert System</li>
                      <li>• Wireless Emergency Alerts (WEA)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h5 className="font-bold text-amber-600 mb-2">Local Media & Sirens</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Outdoor warning sirens (6 locations)</li>
                      <li>• KGRO Radio 1230 AM/99.3 FM</li>
                      <li>• Social media updates</li>
                      <li>• Industrial facility alert systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Comprehensive Pampa Hail Damage FAQs</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Pampa roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Hail damage in Pampa can manifest in several ways:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li>Granule loss creating dark or shiny spots on asphalt shingles</li>
                    <li>Dents or dings on metal components (gutters, flashing, vents)</li>
                    <li>Cracked, split, or missing shingles</li>
                    <li>Exposed mat where granules have been knocked off</li>
                    <li>Damaged or dented gutters and downspouts</li>
                    <li>Bruising on wood shakes or tile roofing</li>
                  </ul>
                  <p>Gray County's hailstorms often produce wind-driven hail that can impact roofs from multiple angles. Given Pampa's position in the storm corridor, we recommend professional inspection after any hail event over 0.75 inches reported in the area. Our inspections are comprehensive and always free.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Yes, Texas insurance law provides strong protection for hail damage claims:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Coverage Requirement:</strong> Most policies include hail as a covered peril</li>
                    <li><strong>Filing Deadline:</strong> Must report within 1-2 years of the loss date</li>
                    <li><strong>Industrial Properties:</strong> Commercial policies include business interruption coverage</li>
                    <li><strong>Public Buildings:</strong> PISD and city properties follow different procedures</li>
                  </ul>
                  <p>We document every impact with detailed photography and measurements, meet with adjusters on-site, and advocate for maximum coverage. Our Gray County success rate is 96%+ with average settlements at 98% of replacement cost. Most homeowners pay only their deductible ($1,000-$2,500).</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof repair cost in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Repair costs vary by property type and damage severity:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Residential Properties:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Partial repairs: $3,000-$8,000</li>
                        <li>• Full replacement: $7,000-$14,000</li>
                        <li>• Class 4 upgrade: +$2,500-$4,000</li>
                        <li>• Historic homes: Premium pricing</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Commercial/Industrial:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Small commercial: $10,000-$25,000</li>
                        <li>• Industrial facilities: $25,000-$100,000+</li>
                        <li>• School buildings: $15,000-$75,000</li>
                        <li>• Specialized systems: Custom pricing</li>
                      </ul>
                    </div>
                  </div>
                  <p>For insured storm damage, most property owners pay only their deductible. We provide detailed Xactimate estimates that insurance companies recognize. Commercial and industrial projects may include specialized coatings or systems to meet environmental compliance requirements.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to Pampa emergencies?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Our emergency response for Pampa area:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Distance:</strong> 55 miles from our Amarillo headquarters</li>
                    <li><strong>Emergency Response:</strong> 45-75 minutes for urgent situations</li>
                    <li><strong>Normal Service:</strong> Same-day or next-day scheduling</li>
                    <li><strong>24/7 Availability:</strong> Emergency tarping and leak stopping</li>
                    <li><strong>Storm Season:</strong> Mobile response teams during active weather</li>
                  </ul>
                  <p>During major hail events affecting Gray County, we often establish temporary operations in Pampa to reduce response times. Our emergency line (806) 622-6041 connects directly to our dispatch center 24/7. Industrial and commercial properties receive priority scheduling due to production and business continuity concerns.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should I upgrade to Class 4 shingles in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">For Pampa's high-risk hail environment, Class 4 shingles are an excellent investment:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Damage Reduction:</strong> 85-95% reduction in hail damage</li>
                    <li><strong>Insurance Benefits:</strong> 10-30% premium discounts available</li>
                    <li><strong>ROI Timeline:</strong> Discounts typically pay for upgrade within 6-9 years</li>
                    <li><strong>Property Value:</strong> Increases resale value and marketability</li>
                    <li><strong>Warranty Protection:</strong> Enhanced coverage up to 50 years</li>
                  </ul>
                  <p>Given Gray County's position in the most hail-active region of North America, Class 4 shingles are among the smartest investments a Pampa property owner can make. We'll help you understand available options, insurance discounts, and financing for your specific situation.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work on industrial and commercial facilities in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Yes, we specialize in both residential and commercial/industrial projects:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Industrial Experience:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Large manufacturing facilities</li>
                        <li>• Chemical processing plants</li>
                        <li>• Oil and gas infrastructure</li>
                        <li>• Grain elevators and storage</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Commercial Properties:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• School district buildings</li>
                        <li>• Retail and office complexes</li>
                        <li>• Healthcare facilities</li>
                        <li>• Government buildings</li>
                      </ul>
                    </div>
                  </div>
                  <p>We understand the unique requirements of Pampa's industrial sector, including environmental compliance, production continuity needs, and specialized roofing systems. Our crews are certified for work in industrial environments and follow all safety protocols.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Why is Pampa particularly vulnerable to severe hail?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Several geographic and atmospheric factors make Pampa especially susceptible:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Latitude Position:</strong> 35.5°N sits in optimal supercell development zone</li>
                    <li><strong>Flat Terrain:</strong> No upstream barriers to weaken approaching storms</li>
                    <li><strong>Elevation:</strong> 3,238 feet creates strong temperature gradients</li>
                    <li><strong>Canadian River Valley:</strong> Enhances low-level convergence and wind shear</li>
                    <li><strong>Dryline Position:</strong> Moisture boundary frequently positioned over Gray County</li>
                    <li><strong>Air Mass Collision:</strong> Cold Canadian air meets warm Gulf moisture</li>
                  </ul>
                  <p>These combined factors place Pampa in the most hail-active corridor in North America. Studies show Gray County experiences 40-50% more severe hail events than the Texas average, with storms often reaching peak intensity directly over the Pampa area.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle the logistics of rural Gray County properties?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Rural properties require special planning and coordination:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Access Planning:</strong> Coordinate with landowners for private road access</li>
                    <li><strong>Materials Delivery:</strong> Plan staging areas for remote locations</li>
                    <li><strong>Timing Coordination:</strong> Work around agricultural schedules and operations</li>
                    <li><strong>Weather Dependencies:</strong> Account for rural road conditions</li>
                    <li><strong>Equipment Transport:</strong> Specialized vehicles for difficult terrain</li>
                  </ul>
                  <p>Our decade of experience in Gray County includes extensive work on rural properties throughout the area. We maintain excellent relationships with local landowners and understand the unique challenges of serving remote locations while respecting agricultural operations and property boundaries.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Related Services in Pampa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-pampa/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Wind, rain, and debris damage restoration</p>
              </a>
              <a href="/roof-replacement-pampa/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Roof Replacement</h3>
                <p className="text-gray-600">Complete roof replacement services</p>
              </a>
              <a href="/roof-inspections-pampa/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">No-obligation damage assessments</p>
              </a>
            </div>
          </section>
        </FadeIn>

        
        <InternalLinks currentCity="pampa" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Hail Damage in Pampa? We're Here to Help.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Pampa property owners. Expert repairs with comprehensive warranties. Insurance claim assistance from start to finish.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}
