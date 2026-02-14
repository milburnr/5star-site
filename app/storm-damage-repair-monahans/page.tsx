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
  alternates: { canonical: 'https://5starroofingpros.com/storm-damage-repair-monahans/' },
  title: "Storm Damage Repair Monahans TX | 5 Star Commercial Roofing",
  description: "Expert storm damage roof repair in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function StormDamageRepairMonahansPage() {
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
                      "name": "Monahans",
                      "url": "/storm-damage-repair-monahans/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/storm-damage-repair-monahans/#localbusiness",
        "name": "5 Star Commercial Roofing - Monahans Storm Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.5943, "longitude": -102.8927 },
        "url": "https://5starroofingpros.com/storm-damage-repair-monahans/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas", "name": "Monahans", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert storm damage repair services in Monahans, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


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
              },
              "parentOrganization": { "@id": "https://5starroofingpros.com/#organization" }
            },
            "areaServed": {
              "@type": "City",
              "name": "Monahans",
              "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Monahans TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-midland-37-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Monahans</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Storm Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
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
              Monahans's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Monahans's location in Ward County creates unique roofing challenges. The Permian Basin experiences 6-8 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Monahans and Ward County with premium materials and expert installation. From properties near Monahans Sandhills State Park to buildings throughout Monahans, we understand Permian Basin weather patterns, local building codes, and the specific needs of Ward County property owners.
            </p>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Monahans & Permian Basin Weather Challenges</h3>
            <div className="bg-amber-50 p-8 rounded-2xl mb-8">
              <h4 className="text-2xl font-bold mb-4 text-brand-brown">Desert Basin Climate Profile</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Monahans sits at 2,600 feet elevation in the heart of the Permian Basin, creating a unique desert-influenced climate with extreme weather contrasts. The combination of low humidity, intense solar radiation, dramatic temperature swings, and proximity to storm development zones along the Caprock Escarpment makes this one of the most challenging roofing environments in Texas. Summer temperatures routinely exceed 105°F while sudden winter storms can bring freezing rain and snow.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">Desert Climate Factors</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Low Humidity:</strong> 25-35% average, extreme material stress</li>
                    <li>• <strong>UV Intensity:</strong> 18% higher than coastal regions</li>
                    <li>• <strong>Temperature Swings:</strong> 45-60°F daily variations</li>
                    <li>• <strong>Sand Erosion:</strong> Constant abrasive wind action</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">Storm Season Statistics</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 6-8 significant hailstorms annually</li>
                    <li>• Peak period: April-June, September-October</li>
                    <li>• Average annual rainfall: 12-14 inches</li>
                    <li>• Flash flood potential during heavy rains</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Significant Storm Events in Monahans</h3>
            <div className="space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-red-800">Major Hailstorm Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">June 9, 2020 - Supercell Complex</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A massive supercell complex produced tennis ball to baseball-sized hail (2.5-3 inches) across Monahans during the peak of oil field activity. The storm formed along the dryline and intensified rapidly as it moved over Ward County. The prolonged hail event lasted 25 minutes with continuous large stones, causing extensive damage to industrial facilities, residential properties, and oil field infrastructure. The Monahans airport recorded hailstones up to 3.25 inches in diameter, making it one of the most severe hailstorms in West Texas history.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">May 24, 2018 - Memorial Day Storm</h5>
                    <p className="text-gray-700 leading-relaxed">
                      An isolated supercell formed directly over Monahans, producing golf ball to tennis ball-sized hail that devastated the city center. The storm's stationary nature caused repeated hail waves over a 2-hour period, with five distinct hail cores passing over different parts of the city. Downtown businesses near the courthouse square experienced catastrophic roof damage, with many historic buildings requiring complete roof system replacement due to the intensity and duration of hail exposure.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">April 15, 2016 - Oil Patch Devastation</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A severe supercell produced baseball-sized hail across the Monahans oil field area, causing millions in damage to industrial roofing systems. The storm tracked directly along the major pipeline corridors and oil processing facilities, with hailstones measuring up to 3 inches in diameter. Many metal roofing systems on industrial buildings sustained complete perforation, while membrane roofing systems experienced widespread puncture damage. The storm highlighted the vulnerability of critical energy infrastructure to severe weather in the Permian Basin.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-orange-800">Extreme Heat & Dust Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-orange-700">July 2023 - Record Heat Dome</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Monahans experienced its highest temperature on record at 115°F during an extended heat dome event. Surface temperatures on dark roofing exceeded 170°F for multiple consecutive days, causing widespread thermal damage to roofing membranes throughout the city. The extreme heat combined with the desert environment's low humidity created conditions that caused rapid moisture loss from roofing materials, leading to premature cracking, shrinkage, and membrane failure across numerous commercial and residential buildings.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-orange-700">March 30, 2022 - Historic Dust Storm</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A massive dust storm (haboob) engulfed Monahans with 70+ mph winds and near-zero visibility for over 3 hours. The combination of abrasive sand particles and sustained high winds caused extensive surface damage to roofing materials throughout the city. The storm stripped protective granules from composition roofing, abraded metal surfaces, and clogged drainage systems with sand accumulation. US Highway 80 and Interstate 20 were completely closed through the area due to the severity of the dust storm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-blue-800">Severe Wind & Storm Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">October 12, 2021 - Derecho Impact</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A rare Permian Basin derecho brought sustained winds of 75+ mph with gusts exceeding 95 mph to Monahans for over 90 minutes. The prolonged straight-line winds caused widespread roof damage throughout Ward County, with particular impact on large industrial buildings in the oil and gas sector. Many membrane roofing systems experienced complete blow-off, while metal roofing sustained extensive standing seam separation and panel displacement. The event caused power outages lasting several days across the region.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">May 28, 2019 - Flash Flood Event</h5>
                    <p className="text-gray-700 leading-relaxed">
                      An unusual slow-moving storm system dropped 4-6 inches of rain over Monahans in less than 3 hours, creating the worst flash flooding in the city's history. The desert soil's inability to absorb rapid rainfall caused extensive ponding on flat roofs throughout the city, leading to structural damage and multiple roof collapses. Many commercial buildings experienced catastrophic water infiltration due to overwhelmed drainage systems designed for the typically arid climate.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">April 3, 2017 - Tornado Outbreak</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Multiple tornadoes formed across Ward County, with an EF-2 tornado passing within 5 miles of Monahans. While the tornado itself missed the city, the associated supercell brought 85+ mph straight-line winds and large hail that caused significant damage to roofing systems throughout the area. The combination of wind and hail created complex damage patterns requiring specialized restoration techniques for the affected properties.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-purple-800">Winter Weather Extremes</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-purple-700">February 15-17, 2021 - Winter Storm Uri</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Monahans experienced unprecedented cold with temperatures dropping to -12°F during Winter Storm Uri. The extreme temperature contrast (from 70°F to -12°F in 24 hours) caused catastrophic thermal shock to roofing systems throughout the city. Ice accumulation combined with power outages created conditions that led to widespread pipe bursts and structural damage. Many industrial facilities experienced multiple roof membrane failures due to the extreme thermal cycling and ice expansion forces.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-purple-700">January 4, 2014 - Ice Storm</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A significant ice storm deposited 0.75-1 inch of ice across Monahans, causing extensive damage to roofing systems unaccustomed to ice loading. The weight of ice accumulation caused multiple structural failures in older buildings, while the expansion forces of freezing water damaged numerous membrane roofing systems. The storm knocked out power to most of the city for several days, contributing to additional freeze damage in buildings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Permian Basin Storm Damage Solutions</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Desert Climate Damage Patterns</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Thermal Stress Damage</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Extreme temperature cycling cracking</li>
                      <li>• UV-accelerated material degradation</li>
                      <li>• Thermal expansion joint failure</li>
                      <li>• Membrane shrinkage and splitting</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Environmental Erosion</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Sand abrasion surface damage</li>
                      <li>• Granule loss acceleration</li>
                      <li>• Metal surface corrosion</li>
                      <li>• Drainage system clogging</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Storm Impact Damage</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Large hail puncture damage</li>
                      <li>• High wind membrane lifting</li>
                      <li>• Flash flood water infiltration</li>
                      <li>• Industrial equipment impact</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold-light p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Our Monahans Service Specialization</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Desert Climate Expertise</h4>
                      <p className="text-sm opacity-90">Specialized knowledge of Permian Basin environmental challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Industrial Experience</h4>
                      <p className="text-sm opacity-90">Extensive work with oil field and energy sector facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Extreme Weather Materials</h4>
                      <p className="text-sm opacity-90">Systems designed for desert heat and severe storms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Rapid Response Network</h4>
                      <p className="text-sm opacity-90"> for critical energy infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Long-Term Durability Focus</h4>
                      <p className="text-sm opacity-90">Solutions that withstand years of extreme conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  Why is Monahans particularly challenging for roofing systems?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Monahans presents a unique combination of extreme environmental stresses that few other locations experience simultaneously. The desert climate creates intense UV exposure and temperature swings of 45-60°F daily, while the Permian Basin's position in the storm track brings severe hail and wind events. Constant sand erosion from West Texas winds accelerates material degradation, while the low humidity environment causes rapid moisture cycling that stresses roofing materials. Additionally, the area's industrial activity from oil and gas operations creates additional exposure to chemicals and impacts that further challenge roofing systems.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  How does the oil field environment affect roofing in Monahans?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  The Permian Basin's oil and gas activity creates several unique challenges for roofing systems. Chemical exposure from hydrocarbon vapors and processing byproducts can accelerate deterioration of certain roofing materials. Heavy industrial traffic generates vibrations that can affect roof membrane integrity over time. The presence of critical infrastructure means that roof failures can have significant operational and environmental consequences, requiring higher standards for materials and installation. Additionally, the nature of energy operations demands roofing solutions that minimize maintenance disruption and provide reliable long-term performance in this harsh environment.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  What roofing materials work best in the Permian Basin climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  For Monahans' extreme environment, we recommend modified bitumen systems with heavy mineral surfacing for maximum UV and thermal protection. Thermoplastic membranes (TPO/PVC) with enhanced UV stabilizers and higher mil thickness provide excellent chemical resistance and durability. Metal roofing systems with specialized coatings handle thermal cycling well while resisting sand erosion. All systems require enhanced fastening for high wind resistance and specialized flashing details to handle extreme thermal movement. We also recommend regular inspection and maintenance schedules to address the accelerated aging that occurs in this challenging environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  How do you handle emergency repairs in remote Permian Basin locations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  We maintain strategic material stockpiles and mobile repair equipment specifically for Permian Basin operations. Our emergency response protocol includes immediate temporary weatherization to protect critical operations, followed by comprehensive permanent repairs. We understand that many facilities in the Monahans area operate around the clock and cannot afford extended downtime. Our crews are experienced in working around active industrial operations while maintaining safety standards. We also coordinate with facility management to schedule repairs during planned maintenance windows when possible, minimizing operational disruption while ensuring thorough restoration of damaged roofing systems.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Monahans, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.89!3d31.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sMonahans%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monahans, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Monahans Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Monahans property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
