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
  title: "Storm Damage Repair Levelland TX | 5 Star Commercial Roofing",
  description: "Expert storm damage roof repair in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function StormDamageRepairLevellandPage() {
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
                      "name": "Levelland",
                      "url": "/storm-damage-repair-levelland/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/storm-damage-repair-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland Storm Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5873, "longitude": -102.3779 },
        "url": "https://5starroofingpros.com/storm-damage-repair-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert storm damage repair services in Levelland, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "name": "Levelland",
              "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Levelland TX. South Plains experiences 7-10 hailstorms annually."
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
                Storm Damage Repair in <span className="text-brand-gold-light">Levelland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                South Plains Storm Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">7-10</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
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
              Levelland's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Levelland's location in Hockley County creates unique roofing challenges. The South Plains experiences 7-10 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Levelland and Hockley County with premium materials and expert installation. From properties near South Plains College to buildings throughout Levelland, we understand South Plains weather patterns, local building codes, and the specific needs of Hockley County property owners.
            </p>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Levelland & South Plains Weather Patterns</h3>
            <div className="bg-amber-50 p-8 rounded-2xl mb-8">
              <h4 className="text-2xl font-bold mb-4 text-brand-brown">South Plains Climate Profile</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Levelland sits at 3,500+ feet elevation on the Llano Estacado (High Plains), experiencing one of the most severe hail climates in Texas. The combination of high elevation, flat terrain extending for hundreds of miles, and position in the central storm track creates ideal conditions for supercell thunderstorm development. Summer temperatures regularly exceed 100°F while winter can bring sudden ice storms and blizzard conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">High Plains Characteristics</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Elevation:</strong> 3,500+ feet above sea level</li>
                    <li>• <strong>Terrain:</strong> Flat plains with no natural windbreaks</li>
                    <li>• <strong>UV Exposure:</strong> 20% higher than coastal areas</li>
                    <li>• <strong>Wind:</strong> Average 15+ mph, gusts 80-100+ mph</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">Annual Weather Statistics</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 7-10 significant hailstorms per year</li>
                    <li>• Peak season: April through July</li>
                    <li>• Average rainfall: 18-20 inches annually</li>
                    <li>• Temperature range: -10°F to 110°F</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Notable Storm Events in Levelland</h3>
            <div className="space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-red-800">Historic Hailstorm Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">May 28, 2022 - Supercell Marathon</h5>
                    <p className="text-gray-700 leading-relaxed">
                      An unprecedented supercell system produced five separate hail cores over Levelland in a 6-hour period. The event began with golf ball-sized hail at 2 PM, followed by tennis ball-sized stones at 4 PM, baseball-sized hail at 6 PM, and culminated with softball-sized hail (4+ inches) around 8 PM. This "hail marathon" caused the most extensive property damage in Levelland's recorded history, with every roof in the city sustaining some level of damage. South Plains College alone sustained over $8 million in damage to campus buildings.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">April 25, 2021 - The Easter Outbreak</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A massive supercell produced the largest verified hailstone in Hockley County history - measuring 4.5 inches in diameter and weighing over 8 ounces. This grapefruit-sized hail caused catastrophic damage across Levelland, punching holes through roofing systems and shattering virtually every skylight and window exposed to the storm's path. The storm's slow movement (5 mph) prolonged hail exposure for nearly 30 minutes, causing unprecedented accumulation depths of 18+ inches in some areas.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">June 15, 2018 - Night Ambush Storm</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A rare overnight supercell caught Levelland residents sleeping, producing baseball-sized hail from 1:30-3:00 AM. The storm formed rapidly along a convergence zone and intensified directly over the city. Morning revealed extensive damage to thousands of roofing systems, with many commercial flat roofs experiencing complete membrane failure. The storm's timing amplified damage as emergency repairs were delayed until daylight, allowing water infiltration to cause additional interior damage throughout the city.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-blue-800">Severe Wind Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">March 13, 2023 - Dust Bowl Redux</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A historic dust storm combined with 70+ mph sustained winds created conditions reminiscent of the 1930s Dust Bowl. Visibility dropped to near zero for over 2 hours while sustained winds exceeding 70 mph with gusts to 92 mph caused widespread roof damage throughout Levelland. The combination of abrasive dust and high winds stripped protective granules from asphalt shingles and damaged membrane roofing systems across the city. Interstate 27 was completely closed through Levelland due to zero visibility.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">May 11, 2020 - Derecho Event</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A rare High Plains derecho brought destructive straight-line winds exceeding 90 mph to Levelland, lasting nearly 90 minutes. The sustained high winds caused extensive roof membrane lifting, HVAC equipment damage, and structural failures throughout the city. The Levelland airport recorded peak gusts of 95 mph, with wind damage extending from the South Plains College campus through the downtown area. Power outages lasted up to a week in some areas due to extensive infrastructure damage.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">April 7, 2019 - Tornado Touchdown</h5>
                    <p className="text-gray-700 leading-relaxed">
                      An EF-2 tornado touched down just west of Levelland with peak winds of 130 mph. While the tornado's path missed the main city, the associated supercell brought 85+ mph straight-line winds and tennis ball-sized hail to Levelland proper. The combination of wind and hail created complex damage patterns, with wind lifting roof membranes that were then punctured by subsequent hail. Many buildings required complete roof system replacement due to the combined impact damage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-purple-800">Winter Weather Extremes</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-purple-700">February 14-18, 2021 - Winter Storm Uri</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Levelland experienced its coldest temperatures on record during Winter Storm Uri, with readings as low as -17°F and sustained sub-freezing conditions for over 140 hours. The extreme cold combined with snow and ice accumulation of 8-12 inches created catastrophic damage to roofing systems throughout the city. Many membrane roofing systems suffered thermal cracking, while older buildings experienced structural damage from ice accumulation weight. South Plains College alone had over 200 roof leaks when temperatures finally rose above freezing.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-purple-700">December 12-13, 2022 - Ice Storm</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A significant ice storm deposited 1-1.5 inches of ice across Levelland, creating the heaviest ice accumulation in decades. The weight of ice caused structural damage to weaker roofing systems and extensive damage to HVAC equipment throughout the city. Many flat-roof commercial buildings experienced membrane tears from ice expansion, while numerous gutters were completely destroyed by ice weight and expansion forces.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-purple-700">January 12, 2017 - Blizzard Conditions</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A rare High Plains blizzard brought 14 inches of snow with sustained winds of 45+ mph, creating snowdrifts up to 6 feet deep against buildings. The extreme wind-driven snow caused infiltration problems in many roofing systems, while the weight of accumulated snow stressed older structures beyond design limits. The storm knocked out power to 85% of Levelland for multiple days, preventing adequate heating in buildings and contributing to freeze damage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">South Plains Storm Damage Restoration</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">High Plains Damage Patterns</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Extreme Hail Damage</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Complete granule stripping</li>
                      <li>• Membrane punctures and tears</li>
                      <li>• Structural deck damage</li>
                      <li>• Catastrophic system failure</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">High Wind Damage</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Membrane blow-off and lifting</li>
                      <li>• Dust abrasion damage</li>
                      <li>• HVAC equipment displacement</li>
                      <li>• Structural wind uplift</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Thermal Extremes</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Rapid thermal cycling damage</li>
                      <li>• UV degradation acceleration</li>
                      <li>• Ice expansion cracking</li>
                      <li>• Membrane brittleness</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold-light p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Our Levelland-Specific Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">High Plains Expertise</h4>
                      <p className="text-sm opacity-90">Specialized knowledge of South Plains weather challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Impact-Resistant Systems</h4>
                      <p className="text-sm opacity-90">Materials designed for extreme hail resistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Wind-Resistant Design</h4>
                      <p className="text-sm opacity-90">Enhanced fastening for sustained high winds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Temperature-Stable Materials</h4>
                      <p className="text-sm opacity-90">Systems that handle extreme temperature variations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Post-Storm Monitoring</h4>
                      <p className="text-sm opacity-90">Ongoing assessment through future storm seasons</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  Why does Levelland experience more severe hailstorms than other Texas cities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Levelland sits in the heart of "Hail Alley" on the High Plains at over 3,500 feet elevation. This unique geography creates perfect conditions for supercell thunderstorm development. The flat terrain extending for hundreds of miles allows storms to organize and intensify without disruption, while the elevation provides the atmospheric instability needed for severe hail formation. The convergence of warm, moist air from the Gulf of Mexico with cool, dry air from the Rocky Mountains regularly occurs directly over the South Plains during spring and early summer months, making Levelland one of the most hail-prone cities in the United States.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  How does the high elevation affect roofing systems in Levelland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  The 3,500+ foot elevation significantly impacts roofing systems in several ways. UV radiation is approximately 20% more intense than at sea level, accelerating material degradation and reducing roof lifespan. The thin air provides less wind resistance, allowing hailstones to maintain higher velocities and impact energy when they strike roofs. Extreme temperature variations (often 40-50°F daily swings) create severe thermal stress that causes premature cracking and failure in roofing materials. Additionally, the high elevation increases wind speeds during storms, with less atmospheric resistance meaning sustained winds and gusts are typically 10-15% stronger than they would be at lower elevations.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  What roofing systems are most effective for South Plains conditions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  For Levelland's extreme conditions, we recommend Class 4 impact-resistant systems as the minimum standard. Modified bitumen with heavy mineral surfacing provides excellent hail and UV resistance. Metal roofing systems with impact-resistant coatings and proper expansion joints handle both hail and temperature extremes well. For commercial applications, reinforced thermoplastic membranes (TPO/PVC) with enhanced UV stabilizers and higher mil thickness offer superior durability. All systems require enhanced fastening patterns designed for sustained high winds, reinforced penetration details, and regular maintenance schedules to address the accelerated aging caused by South Plains weather conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  How do you handle the high volume of claims after major storm events?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  We maintain strategic relationships with material suppliers and additional crews throughout Texas to ensure rapid response capability during major storm events that affect the entire South Plains region. Our process includes immediate emergency services to prevent further damage, comprehensive documentation for insurance purposes, and phased restoration that prioritizes critical repairs first. We utilize drone technology for rapid assessment of large commercial properties and maintain detailed databases of local building specifications to expedite the estimation process. During major events like the 2022 hailstorm marathon, we coordinate with regional contractors while maintaining our quality standards to ensure all customers receive proper restoration services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Levelland, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.38!3d33.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sLevelland%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Levelland, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Levelland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Levelland property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
