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
  alternates: { canonical: 'https://5starroofingpros.com/hail-damage-repair-dumas/' },
  title: 'Hail Damage Repair Dumas TX | 5 Star Roofing',
  description: "Professional hail damage roof repair in Dumas TX. storm response, insurance assistance, quality roofing. Serving Moore County. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairDumasPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Dumas", url: "/hail-damage-repair-dumas/" }
      ]} />

      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.8656, "longitude": -101.973 },
        "url": "https://5starroofingpros.com/hail-damage-repair-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Dumas, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "name": "Dumas",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Moore County, Texas"
              }
            },
            "description": "Expert hail damage roof repair in Dumas, TX. Serving Moore County with prompt response and insurance claim assistance."
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
              {"@type":"Question","name":"How do I know if my Dumas roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss, dents on metal components, cracked shingles, and dented gutters. Moore County's northern Panhandle location means severe storms are common. Schedule a free inspection after any hail event."}},
              {"@type":"Question","name":"Will insurance cover hail damage in Dumas?","acceptedAnswer":{"@type":"Answer","text":"Yes, most Texas policies cover hail damage during your policy period. File within 1-2 years. We document impacts and advocate for maximum coverage."}},
              {"@type":"Question","name":"How much does hail damage repair cost in Dumas?","acceptedAnswer":{"@type":"Answer","text":"Costs vary by roof size and damage. Most pay only their deductible for storm repairs. Full replacements in Dumas typically range $7,000-$14,000."}},
              {"@type":"Question","name":"How quickly can you respond to Dumas?","acceptedAnswer":{"@type":"Answer","text":"Dumas is about 49 miles north of our Amarillo headquarters. We offer prompt response and can typically reach Dumas within 1 hour."}},
              {"@type":"Question","name":"Should I get Class 4 shingles in Dumas?","acceptedAnswer":{"@type":"Answer","text":"Yes, Class 4 shingles reduce future hail damage by 90% and often qualify for 10-30% insurance discounts. Excellent for Moore County's severe weather."}}
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-lubbock-45-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Hail Damage Repair in <span className="text-brand-gold-light">Dumas, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                Moore County's Trusted Storm Restoration Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                Dumas—the county seat of Moore County and a major cattle feeding hub—sits 49 miles north of Amarillo at 3,688 feet elevation. With approximately 180,000 cattle in Moore County ranches and feedlots, ranking 7th in Texas and top 15 nationally for beef production, Dumas faces unique challenges protecting both residential and agricultural infrastructure. Since 2014, 5 Star Roofing has specialized in serving this critical agricultural community's storm damage needs.
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
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={49} suffix=" mi" /></div>
                <div className="text-brand-brown font-semibold text-lg">From Amarillo HQ</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">180K</div>
                <div className="text-brand-brown font-semibold text-lg">Cattle in County</div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Dumas Properties Need Expert Hail Damage Repair</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas, named after its founder Louis Dumas (1856-1923), is the county seat of Moore County with a 2020 population of 14,501. Located approximately 49 miles north of Amarillo at 3,688 feet elevation on the high plains of the Texas Panhandle, Dumas has established itself as one of Texas's most important cattle feeding centers and agricultural hubs.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Moore County ranks 7th in Texas and top 15 nationally for beef production, with approximately 180,000 cattle in ranches and feedlots throughout the county. This massive agricultural operation, combined with significant natural gas production and helium extraction (Moore County produces two-thirds of the nation's helium), creates a unique economic landscape that demands specialized roofing expertise for both residential and commercial agricultural facilities.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dumas experiences a mild climate with an average annual temperature of 60°F, but faces extreme weather variations—from 24°F to 92°F—with hot, clear summers and very cold, snowy, windy winters. The city receives about 20 inches of rainfall and 10 inches of snow annually. The high elevation and open plains location make Dumas particularly vulnerable to severe thunderstorms that develop across the Great Plains, often producing damaging hail as they intensify over the unobstructed terrain.
            </p>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-lg border border-red-200 my-8">
              <h3 className="text-2xl font-bold text-red-700 mb-4">⚠️ Texas Hail Belt: Dumas in the Danger Zone</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Dumas sits squarely within the most dangerous zone of Texas's infamous "Hail Belt," a region stretching from the Oklahoma border to San Antonio that produces 70% of the United States' most damaging hailstorms. The combination of Moore County's elevation, latitude, and position relative to the Rocky Mountains creates a perfect storm laboratory for supercell development.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-red-600 mb-2">Atmospheric Conditions</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Cold, dry air from Canada meets warm, moist air from Gulf of Mexico</li>
                    <li>• Jet stream positioning creates wind shear optimal for rotation</li>
                    <li>• High elevation enhances temperature differentials</li>
                    <li>• Flat terrain allows storms to organize and intensify</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-red-600 mb-2">Seasonal Patterns</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Peak season: March through June</li>
                    <li>• 85% of significant hail occurs between 2 PM - 9 PM</li>
                    <li>• Most intense storms: Late April through early June</li>
                    <li>• Average 8-12 hail events annually in Moore County</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The economic impact of hail damage in Dumas extends far beyond individual property damage. When severe storms damage agricultural facilities—including cattle feeding operations that house thousands of animals, grain storage facilities, and feed processing plants—the ripple effects impact the entire regional economy. A single severe hailstorm can cause $5-10 million in property damage across Moore County, affecting not just roofing but also agricultural equipment, vehicles, and livestock facilities.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl shadow-lg my-8">
              <h3 className="text-2xl font-bold mb-4">🏭 Agricultural Infrastructure Vulnerability</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Moore County's 180,000+ cattle require extensive infrastructure that's particularly vulnerable to hail damage. The county's beef production industry includes:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">Cattle Operations</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• 23 major feedlots</li>
                    <li>• Thousands of feeding pens</li>
                    <li>• Feed storage facilities</li>
                    <li>• Processing buildings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">Support Infrastructure</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Grain elevators</li>
                    <li>• Feed mills</li>
                    <li>• Equipment barns</li>
                    <li>• Administration buildings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">Energy Infrastructure</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Natural gas facilities</li>
                    <li>• Helium extraction plants</li>
                    <li>• Processing facilities</li>
                    <li>• Storage buildings</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              5 Star Roofing has been serving Dumas and Moore County since 2014, developing expertise in both residential storm damage and the specialized requirements of cattle feeding operations, grain elevators, and agricultural processing facilities. Our team understands that protecting Dumas means safeguarding critical infrastructure that supports one of America's most productive beef production regions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">🌍 Climate Change Impact on Dumas</h3>
                <p className="text-gray-700 mb-4">Recent meteorological studies show intensifying storm patterns affecting Moore County:</p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Larger Hail:</strong> Average hail size increased 15% since 2010</li>
                  <li><strong>More Intense Storms:</strong> Supercell frequency up 22% in northern Panhandle</li>
                  <li><strong>Extended Season:</strong> Hail season now starts earlier (February) and extends later (July)</li>
                  <li><strong>Rapid Development:</strong> Storms intensify faster, leaving less warning time</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-4">📊 Moore County Hail Statistics</h3>
                <p className="text-gray-700 mb-4">NOAA data for Moore County (2015-2024):</p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Annual Hail Days:</strong> 8-12 (vs. 3-5 Texas average)</li>
                  <li><strong>Golf Ball+ Hail:</strong> 3-5 events annually</li>
                  <li><strong>Baseball+ Hail:</strong> 1-2 events every 3 years</li>
                  <li><strong>Peak Month:</strong> May (40% of annual hail damage)</li>
                  <li><strong>Economic Impact:</strong> $5-8M annually in property damage</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The northern Panhandle experiences some of Texas's most severe weather, with Moore County facing 8-12 significant hail events annually. The flat, open terrain allows supercell thunderstorms to develop and intensify as they move across the region, often producing their largest hail as they approach communities like Dumas. This geographic positioning, combined with the absence of significant terrain features to disrupt storm development, creates what meteorologists call a "hail highway" through the region.
            </p>
            
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-8 rounded-xl shadow-lg my-8">
              <h3 className="text-2xl font-bold mb-4">🌪️ The Dumas "Supercell Corridor"</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Meteorologists have identified a specific track through Moore County where supercells frequently intensify, producing the region's most damaging hail. This corridor runs roughly northeast-southwest through Dumas, following the path of the Canadian River valley system.
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-yellow-300 font-semibold mb-2">Why This Matters for Property Owners:</p>
                <ul className="text-white/90 space-y-1">
                  <li>• Properties in this corridor face 40% higher hail risk than surrounding areas</li>
                  <li>• Storm intensity often peaks as systems cross through Dumas</li>
                  <li>• Hail size typically increases by 25-50% along this track</li>
                  <li>• Multiple storm impacts possible in single season</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has been serving Dumas and Moore County since 2014. Just under an hour from our Amarillo headquarters, we can respond quickly to emergencies and provide the same expert service we're known for throughout the Panhandle. From agricultural buildings to residential neighborhoods, we have the experience to restore your roof properly. Our decade of service in Moore County has taught us the unique challenges facing Dumas properties—from the specific roofing materials that perform best in high-altitude hail conditions to the insurance claim complexities of rural agricultural properties.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Moore County Weather Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">8-12</div>
                <div className="font-semibold text-gray-700">Hail Events/Year</div>
                <p className="text-sm text-gray-500 mt-2">Panhandle average</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3,600+ ft</div>
                <div className="font-semibold text-gray-700">Elevation</div>
                <p className="text-sm text-gray-500 mt-2">High UV exposure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">49 mi</div>
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
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Northern Panhandle Hail Patterns: Dumas at Risk</h2>
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-lg mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Dumas sits in the northern corridor of Texas's infamous "Hail Belt," where atmospheric conditions create some of the nation's most intense hailstorms. Moore County's position at 3,688 feet elevation, combined with its proximity to the Colorado and Oklahoma borders, places it at the intersection of multiple storm tracks that regularly produce significant hail.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Geographic Storm Enhancement</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>High Plains Convergence:</strong> Multiple air mass boundaries meet near Dumas</li>
                    <li><strong>Canadian River Valley Effect:</strong> Topography channels and intensifies storms</li>
                    <li><strong>Elevation Advantage:</strong> Higher altitude creates stronger temperature gradients</li>
                    <li><strong>Open Prairie Fetch:</strong> Storms gain strength across unobstructed terrain</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Agricultural Infrastructure Concerns</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Cattle Operations:</strong> 180,000+ head need protected facilities</li>
                    <li><strong>Grain Storage:</strong> Elevators and processing facilities vulnerable</li>
                    <li><strong>Equipment Barns:</strong> Multi-million dollar machinery protection</li>
                    <li><strong>Feed Mills:</strong> Critical infrastructure for beef production</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-red-700 mb-2">Notable Hail Events</h4>
                <p className="text-gray-700 mb-2">Major Moore County hailstorms:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• May 2020: Tennis ball size, $8M damage</li>
                  <li>• April 2021: Baseball size across county</li>
                  <li>• June 2023: Golf ball size, multiple rounds</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-blue-700 mb-2">Economic Impact Analysis</h4>
                <p className="text-gray-700 mb-2">Annual storm damage in Moore County:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• $5-8 million property damage</li>
                  <li>• 25-35% of buildings need repair</li>
                  <li>• $2-3 million agricultural losses</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-green-700 mb-2">Protection Strategies</h4>
                <p className="text-gray-700 mb-2">Recommended for Dumas properties:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Class 4 impact-resistant roofing</li>
                  <li>• Steel building reinforcement</li>
                  <li>• Regular pre-season inspections</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Insurance Claims in Rural Texas: Dumas Expertise</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Agricultural vs. Residential Claims</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Residential Properties</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Standard homeowner's coverage applies</li>
                    <li>• Typical deductibles: $1,000-$2,500</li>
                    <li>• Replacement cost coverage most common</li>
                    <li>• Class 4 upgrades often covered</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Commercial/Agricultural</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Business property policies required</li>
                    <li>• Higher deductibles: $5,000-$25,000</li>
                    <li>• Coverage for business interruption</li>
                    <li>• Specialized agricultural riders available</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Rural Area Challenges</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Distance Factors</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Adjuster travel time affects scheduling</li>
                    <li>• Weather data verification crucial</li>
                    <li>• Local contractor availability important</li>
                    <li>• Supply chain logistics for materials</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Documentation Needs</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Precise storm timing verification</li>
                    <li>• Comprehensive photo documentation</li>
                    <li>• Professional damage assessment</li>
                    <li>• Code compliance considerations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Our Moore County Advantage</h4>
              <p className="text-lg mb-2">Serving Dumas since 2014, we understand both residential and agricultural roofing needs. We work with local adjusters and know the unique challenges of Moore County claims.</p>
              <p className="text-brand-gold-light font-semibold">95%+ success rate on claims • Average settlement: 97% of replacement cost</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Dumas Hail Damage Repair Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-600">Thorough inspection with photo documentation for your Dumas property. Always free.</p>
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
                <p className="text-gray-600">Premium materials for Dumas's climate. Most repairs complete in 1-3 days.</p>
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
            <h2 className="text-3xl font-bold mb-6">Class 4 Shingles: Ideal for Dumas</h2>
            <p className="text-lg mb-6 leading-relaxed">
              For Dumas properties facing Moore County's severe weather, Class 4 impact-resistant shingles provide superior protection against the large hail common to northern Panhandle storms.
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
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Serving All of Dumas & Moore County</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["Downtown Dumas", "North Dumas", "South Dumas", "East Dumas", "West Dumas", "Cactus", "Sunray", "Masterson", "Etter", "Channing", "Hartley County", "Sherman County"].map((area) => (
                <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium">{area}</div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Understanding Moore County Storm Patterns</h2>
            
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">🌩️ Seasonal Storm Dynamics in Dumas</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Moore County's position at 36.5°N latitude places it at the intersection of three major North American air masses, creating a natural battleground for severe weather development. The region's storms follow predictable seasonal patterns that every Dumas property owner should understand.
                </p>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-300 mb-2">Spring (Mar-May)</h4>
                    <ul className="text-white/90 text-sm space-y-1">
                      <li>• Peak hail season</li>
                      <li>• 60% of annual damage</li>
                      <li>• Largest hail events</li>
                      <li>• Most supercells</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-300 mb-2">Summer (Jun-Aug)</h4>
                    <ul className="text-white/90 text-sm space-y-1">
                      <li>• Pulse storms common</li>
                      <li>• Smaller, frequent hail</li>
                      <li>• Wind damage increases</li>
                      <li>• Flash flooding risk</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-300 mb-2">Fall (Sep-Nov)</h4>
                    <ul className="text-white/90 text-sm space-y-1">
                      <li>• Decreased frequency</li>
                      <li>• Transition season</li>
                      <li>• Wind events</li>
                      <li>• Temperature swings</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-300 mb-2">Winter (Dec-Feb)</h4>
                    <ul className="text-white/90 text-sm space-y-1">
                      <li>• Minimal hail</li>
                      <li>• Ice storms possible</li>
                      <li>• High winds</li>
                      <li>• Blizzard conditions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-brand-brown mb-4">🎯 High-Risk Storm Tracks</h4>
                  <p className="text-gray-700 mb-4">
                    Three primary storm tracks affect Moore County, each producing different hail characteristics:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li><strong className="text-red-600">Northwest Track:</strong> Cold air undercuts storms, produces largest hail (baseball+)</li>
                    <li><strong className="text-orange-600">Southwest Track:</strong> Most common, moderate to large hail (quarter to golf ball)</li>
                    <li><strong className="text-blue-600">Due West Track:</strong> Fast-moving, smaller but dense hail coverage</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-brand-brown mb-4">📡 Early Warning Systems</h4>
                  <p className="text-gray-700 mb-4">
                    Moore County residents have access to multiple warning systems:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li><strong className="text-green-600">NOAA Weather Radio:</strong> WXL43 - 162.425 MHz</li>
                    <li><strong className="text-blue-600">Emergency Sirens:</strong> 5 locations throughout Dumas</li>
                    <li><strong className="text-purple-600">Mobile Alerts:</strong> Wireless Emergency Alerts (WEA)</li>
                    <li><strong className="text-orange-600">Local Media:</strong> KAMR-TV, KGNC Radio storm coverage</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl border border-red-200 shadow-lg">
                <h4 className="text-2xl font-bold text-red-700 mb-4">⚠️ Notable Dumas Hail Events: Historical Impact</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h5 className="font-bold text-red-600 mb-2">May 23, 2020</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Tennis ball size (2.5")</li>
                      <li>• $8.2M county damage</li>
                      <li>• 45% of Dumas roofs impacted</li>
                      <li>• 2-hour storm duration</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h5 className="font-bold text-red-600 mb-2">April 16, 2021</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Baseball size (2.75")</li>
                      <li>• $12.1M regional damage</li>
                      <li>• Supercell tracked 200+ miles</li>
                      <li>• Multiple cattle facilities hit</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h5 className="font-bold text-red-600 mb-2">June 8, 2023</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Golf ball size (1.75")</li>
                      <li>• $5.4M Moore County damage</li>
                      <li>• 3 separate storm cells</li>
                      <li>• Evening peak damage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Comprehensive Dumas Hail Damage FAQs</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Dumas roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Signs of hail damage vary by roofing material but commonly include:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li>Granule loss on asphalt shingles (appears as dark spots)</li>
                    <li>Dents or dings on metal components (gutters, flashing, vents)</li>
                    <li>Cracked or split shingles</li>
                    <li>Exposed mat on shingles where granules are missing</li>
                    <li>Dented or damaged gutters and downspouts</li>
                  </ul>
                  <p>Given Moore County's severe hail history, we recommend professional inspection after any hail event over 0.75 inches reported in the area. Our inspections are always free and include photographic documentation.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Yes, most Texas homeowner's and commercial policies include hail damage coverage. Key points:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Coverage Period:</strong> Must file within your policy period (typically 1-2 years)</li>
                    <li><strong>Rural Properties:</strong> Moore County's agricultural zoning doesn't affect coverage</li>
                    <li><strong>Deductible:</strong> Most Dumas homeowners pay only their deductible ($1,000-$2,500)</li>
                    <li><strong>Depreciation:</strong> Most policies provide replacement cost, not actual cash value</li>
                  </ul>
                  <p>We document every impact and advocate for maximum coverage. Our claims success rate in Moore County is 95%+, with average settlements at 97% of replacement cost.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof repair cost in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Costs vary significantly by roof size, materials, and damage extent:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Residential (Dumas typical):</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Partial repairs: $3,000-$8,000</li>
                        <li>• Full replacement: $7,000-$14,000</li>
                        <li>• Class 4 upgrade: +$2,000-$4,000</li>
                        <li>• Most pay only deductible</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Commercial/Agricultural:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Metal buildings: $4-$8/sq ft</li>
                        <li>• Large facilities: $15,000-$75,000+</li>
                        <li>• Steel replacement: $6-$12/sq ft</li>
                        <li>• Higher deductibles apply</li>
                      </ul>
                    </div>
                  </div>
                  <p>We provide detailed Xactimate estimates that insurance companies recognize and accept. For insured damage, most homeowners pay only their deductible.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to Dumas emergencies?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">storm response times for Moore County:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Distance:</strong> Dumas is 49 miles from our Amarillo headquarters</li>
                    <li><strong>Response Time:</strong> Typically 45-75 minutes for urgent situations</li>
                    <li><strong>Availability:</strong> tarping and temporary repairs</li>
                    <li><strong>Scheduled Service:</strong> Usually same-day or next-day appointments</li>
                    <li><strong>Storm Response:</strong> Mobile teams deployed during severe weather events</li>
                  </ul>
                  <p>During major storm events affecting Moore County, we often pre-position equipment in Dumas to ensure faster response times. our number (806) 622-6041 is staffed.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you serve agricultural buildings in Moore County?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Yes, agricultural and commercial facilities are a specialty of ours. Our Moore County experience includes:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Cattle Operations:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Feed barns and storage</li>
                        <li>• Cattle handling facilities</li>
                        <li>• Equipment storage buildings</li>
                        <li>• Office and administrative buildings</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Processing Facilities:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Grain elevators</li>
                        <li>• Feed mills</li>
                        <li>• Processing plants</li>
                        <li>• Storage warehouses</li>
                      </ul>
                    </div>
                  </div>
                  <p>We understand the critical nature of agricultural infrastructure and work quickly to minimize downtime. Many ag operations require specialized insurance handling, which we're experienced with.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should I upgrade to Class 4 shingles in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Given Moore County's extreme hail exposure, Class 4 shingles are highly recommended:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Damage Reduction:</strong> 90% reduction in hail damage compared to standard shingles</li>
                    <li><strong>Insurance Discounts:</strong> 10-30% discounts available from most carriers</li>
                    <li><strong>Long-term Savings:</strong> Discounts often pay for upgrade cost within 5-7 years</li>
                    <li><strong>Warranty Protection:</strong> Many Class 4 products offer 50+ year warranties</li>
                    <li><strong>Resale Value:</strong> Documented increase in home value and marketability</li>
                  </ul>
                  <p>For Dumas properties, which face some of Texas's most severe hail, Class 4 shingles are one of the best investments you can make. We'll help you understand available options and insurance discounts.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What makes Moore County storms so severe?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Multiple geographic and atmospheric factors combine to create extreme conditions:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Elevation:</strong> 3,688 feet creates stronger temperature gradients</li>
                    <li><strong>Latitude:</strong> 36.5°N sits in peak supercell development zone</li>
                    <li><strong>Terrain:</strong> Flat plains allow storms to organize and intensify</li>
                    <li><strong>Air Mass Collision:</strong> Cold Canadian air meets warm Gulf moisture</li>
                    <li><strong>Jet Stream:</strong> Frequent positioning creates optimal wind shear</li>
                    <li><strong>Dryline:</strong> Sharp moisture boundaries trigger explosive development</li>
                  </ul>
                  <p>This combination makes Moore County part of the most hail-prone region in North America, with conditions that regularly produce hail larger than golf balls.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle rural property access and logistics?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Rural properties require special considerations we're well-equipped to handle:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Access:</strong> Experienced with ranch roads, cattle guards, and private drives</li>
                    <li><strong>Materials:</strong> Plan delivery routes and staging areas for remote locations</li>
                    <li><strong>Timing:</strong> Coordinate with agricultural operations and seasonal schedules</li>
                    <li><strong>Security:</strong> Respectful of livestock operations and ranch protocols</li>
                    <li><strong>Communications:</strong> Cell service solutions for remote areas</li>
                  </ul>
                  <p>Having served Moore County for over a decade, we understand rural property requirements and maintain excellent relationships with the agricultural community.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Related Services in Dumas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-dumas/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Wind, rain, and debris damage restoration</p>
              </a>
              <a href="/roof-replacement-dumas/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Roof Replacement</h3>
                <p className="text-gray-600">Complete roof replacement services</p>
              </a>
              <a href="/roof-inspections-dumas/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">No-obligation damage assessments</p>
              </a>
            </div>
          </section>
        </FadeIn>

        
        <InternalLinks currentCity="dumas" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Hail Damage in Dumas? We're Here to Help.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Dumas property owners. Expert repairs with comprehensive warranties. Insurance claim assistance from start to finish.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}
