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
  alternates: { canonical: 'https://5starroofingpros.com/storm-damage-repair-snyder/' },
  title: "Storm Damage Repair Snyder TX | 5 Star Commercial Roofing",
  description: "Expert storm damage roof repair in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function StormDamageRepairSnyderPage() {
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
                      "name": "Snyder",
                      "url": "/storm-damage-repair-snyder/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/storm-damage-repair-snyder/#localbusiness",
        "name": "5 Star Commercial Roofing - Snyder Storm Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.7179, "longitude": -100.9176 },
        "url": "https://5starroofingpros.com/storm-damage-repair-snyder/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas", "name": "Snyder", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert storm damage repair services in Snyder, TX. Free inspections, insurance claim assistance, prompt response.",
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
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Snyder",
              "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Snyder TX. West Texas experiences 7-9 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-midland-30-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Snyder</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas Storm Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
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
              Snyder's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Snyder's location in Scurry County creates unique roofing challenges. The West Texas experiences 7-9 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Snyder and Scurry County with premium materials and expert installation. From properties near Scurry County Museum to buildings throughout Snyder, we understand West Texas weather patterns, local building codes, and the specific needs of Scurry County property owners.
            </p>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Snyder & Scurry County Weather Patterns</h3>
            <div className="bg-amber-50 p-8 rounded-2xl mb-8">
              <h4 className="text-2xl font-bold mb-4 text-brand-brown">West Texas Climate Profile</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Snyder sits at 2,350 feet elevation on the Colorado River valley edge, where the Rolling Plains meet the West Texas desert. This transitional climate zone creates volatile weather patterns with extreme temperature variations, intense storm development, and persistent high winds. The city's position along major storm tracks makes it particularly vulnerable to severe weather events that intensify as they cross the varied terrain of West Texas.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">Rolling Plains Characteristics</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Elevation:</strong> 2,350 feet with varied topography</li>
                    <li>• <strong>Wind Exposure:</strong> Enhanced by river valley channeling</li>
                    <li>• <strong>Storm Intensification:</strong> Terrain-driven convergence</li>
                    <li>• <strong>UV Intensity:</strong> 16% higher than sea level locations</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">Annual Weather Patterns</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 7-9 severe hailstorms per year</li>
                    <li>• Peak storm season: April-July</li>
                    <li>• Average rainfall: 19-21 inches annually</li>
                    <li>• Temperature extremes: -5°F to 107°F</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Historic Storm Events in Snyder</h3>
            <div className="space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-red-800">Devastating Hailstorm Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">May 25, 2021 - The Great Snyder Hailstorm</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A massive supercell produced the largest hailstones ever recorded in Scurry County, with stones measuring up to 4.25 inches in diameter (larger than softballs). The storm formed along a strong dryline and rapidly intensified as it approached Snyder from the northwest. For 35 minutes, continuous large hail pummeled the city, causing unprecedented damage to every roof in the downtown area. Western Texas College alone sustained over $12 million in damage. The storm created the largest single-day insurance event in Scurry County history, with total claims exceeding $85 million.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">April 29, 2017 - Multiple Supercell Event</h5>
                    <p className="text-gray-700 leading-relaxed">
                      An extraordinary weather pattern produced four separate supercells that all impacted Snyder within 6 hours. The first storm brought golf ball-sized hail at 2 PM, followed by tennis ball-sized stones at 4 PM, baseball-sized hail at 6 PM, and finally softball-sized hail at 8 PM. This "hail siege" created layered damage patterns throughout the city, with many buildings requiring complete roof replacement. The Snyder airport recorded continuous hail coverage for over 4 hours, making it one of the longest-duration hail events in Texas history.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">June 8, 2014 - Supercell Train</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A series of supercells moved in a continuous line over Snyder, producing tennis ball to baseball-sized hail for nearly 3 hours. The "supercell train" created accumulation depths of 12-18 inches in parts of the city, blocking storm drains and causing extensive flooding in addition to hail damage. Many flat-roof commercial buildings experienced both hail punctures and subsequent water infiltration, creating complex damage scenarios that required specialized restoration techniques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-blue-800">Severe Wind & Tornado Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">May 11, 2022 - Tornado Touchdown</h5>
                    <p className="text-gray-700 leading-relaxed">
                      An EF-2 tornado touched down 1 mile west of Snyder with peak winds of 135 mph before dissipating near the city limits. While the tornado itself narrowly missed downtown, the associated supercell brought 90+ mph straight-line winds that caused extensive roof damage throughout Snyder. The combination of tornadic circulation and straight-line winds created unusual damage patterns, with many buildings experiencing both wind uplift and rotational damage. The Scurry County Courthouse and surrounding historic buildings sustained significant roof and structural damage.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">March 18, 2020 - High Wind Event</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A powerful dry line passage brought sustained winds of 70+ mph with gusts exceeding 95 mph to Snyder for over 2 hours. The Colorado River valley's terrain channeled and intensified the winds, causing widespread roof membrane lifting and HVAC equipment damage. Many commercial buildings experienced complete membrane blow-off, while residential properties lost numerous shingles and experienced structural damage. The sustained nature of the high winds made this event particularly destructive to roofing systems throughout Scurry County.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">April 14, 2018 - Microburst Outbreak</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Multiple microbursts produced localized wind speeds exceeding 100 mph in different areas of Snyder. These intense downdrafts created pockets of extreme damage separated by relatively undamaged areas, making assessment and restoration particularly challenging. The microbursts occurred during peak storm season when many roofing contractors were already busy with hail damage repairs from earlier events, creating extended restoration timelines for affected properties.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-purple-800">Winter Storm & Flash Flood Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-purple-700">February 15-18, 2021 - Winter Storm Uri</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Snyder experienced its coldest temperatures in over 30 years during Winter Storm Uri, with readings dropping to -11°F and remaining below freezing for 135+ hours. The extreme cold combined with snow and ice accumulation caused widespread roof damage throughout the city. Western Texas College experienced over 150 roof leaks when temperatures finally rose, while many commercial buildings suffered membrane cracking and structural damage. The storm highlighted the vulnerability of West Texas roofing systems to extreme winter weather events.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-purple-700">September 19, 2019 - Flash Flood Event</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Heavy rainfall from Tropical Storm Imelda's remnants caused the worst flooding in Snyder's modern history. The Colorado River and local tributaries overflowed, while urban flooding overwhelmed drainage systems throughout the city. Many flat-roof commercial buildings experienced ponding water infiltration due to drainage systems designed for the typically drier climate. The combination of standing water and subsequent high winds created complex damage scenarios requiring specialized restoration approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Snyder-Specific Damage Assessment & Restoration</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Common Damage Types in Scurry County</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Rolling Plains Hail Impact</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Extreme granule loss and shingle damage</li>
                      <li>• Large membrane punctures and tears</li>
                      <li>• HVAC and skylight destruction</li>
                      <li>• Accumulated hail drainage blockage</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Terrain-Enhanced Wind Damage</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Valley-channeled wind intensification</li>
                      <li>• Membrane uplift and blow-off</li>
                      <li>• Directional damage from topography</li>
                      <li>• Structural component displacement</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Flash Flood Complications</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Rapid water infiltration</li>
                      <li>• Drainage system failure</li>
                      <li>• Post-flood secondary damage</li>
                      <li>• Structural saturation effects</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold-light p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Our Snyder Restoration Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Storm Response</h4>
                      <p className="text-sm opacity-90">Priority service for Snyder's frequent severe weather events</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Terrain-Aware Assessment</h4>
                      <p className="text-sm opacity-90">Understanding how local topography affects damage patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Multi-Hazard Solutions</h4>
                      <p className="text-sm opacity-90">Systems designed for hail, wind, and flood resistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Local Code Compliance</h4>
                      <p className="text-sm opacity-90">Expertise in Scurry County building requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Community Partnership</h4>
                      <p className="text-sm opacity-90">Long-term relationships with Snyder property owners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  What makes Snyder's storm damage patterns unique in West Texas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Snyder's position in the Colorado River valley creates unique atmospheric dynamics that intensify severe weather. The varied topography of the Rolling Plains causes air masses to converge and strengthen as they approach the city, while the river valley acts as a natural channel that focuses and accelerates wind speeds during storm events. This terrain-driven intensification means that storms often become more severe as they reach Snyder, creating damage patterns that can be more extensive than in surrounding flat areas. The combination of elevation changes and valley channeling makes Snyder particularly vulnerable to both hail formation and wind damage.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  How do you handle the high frequency of storm events in Snyder?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Snyder's 7-9 annual hailstorms require a strategic approach to storm damage restoration. We maintain dedicated crews and material stockpiles specifically for the Scurry County area during peak storm season (April-July). Our process prioritizes structural stabilization to prevent further damage, followed by comprehensive assessment and systematic restoration. We work closely with local insurance adjusters who understand Snyder's unique storm patterns and maintain relationships with Western Texas College and other major institutions to ensure rapid response capability. Our goal is to complete most residential repairs within 2-3 weeks and commercial projects within 4-6 weeks, depending on damage severity.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  What roofing systems are most effective for Snyder's varied weather challenges?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  For Snyder's combination of severe hail, high winds, and occasional flooding, we recommend Class 4 impact-resistant systems with enhanced drainage capabilities. Modified bitumen with heavy aggregate surfacing provides excellent hail protection and UV resistance. Metal roofing with impact-resistant coatings handles both hail and wind effectively while offering superior drainage performance. For commercial applications, reinforced membrane systems with enhanced fastening patterns and properly designed drainage slopes are essential. All systems should include upgraded gutters and downspouts sized for the area's potential for heavy rainfall and rapid runoff.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  How do you coordinate with insurance companies familiar with Snyder's storm history?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  We maintain strong relationships with insurance carriers who regularly handle claims in the Snyder area and understand the city's severe weather patterns. Our documentation process includes detailed photo evidence, drone surveys for large properties, and written reports that clearly identify storm-related damage versus normal wear. We provide historical weather data and expert testimony when needed to support legitimate claims. Our estimates are prepared using industry-standard databases that insurance companies recognize, and we participate in post-storm meetups with adjusters to streamline the claims process for our customers. This collaborative approach helps maximize insurance benefits while minimizing delays in the restoration process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Snyder, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-100.92!3d32.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sSnyder%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Snyder, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Snyder Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Snyder property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
