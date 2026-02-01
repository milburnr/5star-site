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
  title: 'Storm Damage Repair Big Spring TX | 5 Star Roofing',
  description: "Expert storm damage roof repair in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function StormDamageRepairBigSpringPage() {
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
                      "name": "Big Spring",
                      "url": "/storm-damage-repair-big-spring/"
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
              "name": "Big Spring",
              "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Big Spring TX. West Texas experiences 7-9 hailstorms annually."
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
                Storm Damage Repair in <span className="text-brand-gold-light">Big Spring</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas Storm Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
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
              Big Spring's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Big Spring's location in Howard County creates unique roofing challenges. The West Texas experiences 7-9 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Big Spring and Howard County with premium materials and expert installation. From properties near Big Spring State Park to buildings throughout Big Spring, we understand West Texas weather patterns, local building codes, and the specific needs of Howard County property owners.
            </p>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Big Spring Weather Patterns & Climate Challenges</h3>
            <div className="bg-amber-50 p-8 rounded-2xl mb-8">
              <h4 className="text-2xl font-bold mb-4 text-brand-brown">Regional Climate Profile</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Big Spring sits at 2,400 feet elevation on the Llano Estacado edge, experiencing a semi-arid climate with dramatic weather swings. The city's position along the Caprock Escarpment creates unique atmospheric conditions that intensify storm development. Summer temperatures routinely exceed 100°F while winter can bring sudden freezing temperatures, creating extreme thermal stress on roofing systems.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">Elevation Impact on Weather</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Elevation:</strong> 2,400+ feet above sea level</li>
                    <li>• <strong>UV Intensity:</strong> 15% higher than coastal areas</li>
                    <li>• <strong>Wind Exposure:</strong> Minimal natural windbreaks</li>
                    <li>• <strong>Temperature Swings:</strong> 40-50°F daily variations</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">Severe Weather Statistics</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 7-9 hailstorms annually (April-June peak)</li>
                    <li>• Average wind speeds: 13-15 mph year-round</li>
                    <li>• Peak gusts: 80-100+ mph during storms</li>
                    <li>• Annual rainfall: 17-19 inches (highly variable)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Historical Storm Events in Big Spring</h3>
            <div className="space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-red-800">Major Hailstorm Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">May 28, 2019 - Memorial Day Supercell</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A devastating supercell produced softball-sized hail (3+ inches) across Big Spring, creating the most expensive single-day insurance event in Howard County history. The storm formed rapidly along the Caprock Escarpment and intensified as it moved over the city. Continuous hail fell for over 20 minutes, with the largest stones causing catastrophic damage to roofs, vehicles, and HVAC equipment. Total insurance claims exceeded $35 million citywide.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">April 11, 2016 - Spring Outbreak</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Multiple supercells tracked across Howard County, with Big Spring experiencing three separate hail events in one afternoon. The first wave brought golf ball-sized hail, followed by tennis ball-sized stones, and finally baseball-sized hail that lasted 15 minutes. This unprecedented triple-hit event overwhelmed local roofing contractors and created a six-month backlog for storm damage repairs throughout the city.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">June 13, 2012 - Nocturnal Supercell</h5>
                    <p className="text-gray-700 leading-relaxed">
                      An unusual nighttime supercell caught Big Spring residents sleeping, producing tennis ball to baseball-sized hail from 2:00-3:30 AM. The storm's timing amplified damage as many residents were unaware of the severity until morning. The hail created extensive granule loss on composition roofing and punctured numerous membrane roofing systems on commercial buildings throughout the downtown area and near McMahon-Wrinkle Airpark.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-blue-800">Significant Wind Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">March 23, 2023 - High Wind Warning</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Sustained winds of 60+ mph with gusts to 85 mph impacted Big Spring for over 4 hours during a fast-moving dry line passage. The extended duration of high winds caused widespread roof damage, particularly to older commercial buildings and manufactured structures. The Big Spring McMahon-Wrinkle Airpark recorded peak gusts of 87 mph, with significant damage to aircraft hangars and terminal buildings.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">October 4, 2020 - Derecho Impact</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A rare West Texas derecho brought destructive winds exceeding 90 mph to Big Spring, causing the most widespread wind damage in the city's recent history. The straight-line winds persisted for 45 minutes, damaging hundreds of roofing systems and downing power lines throughout the city. Many buildings near Comanche Trail Lake experienced roof membrane failures and extensive HVAC damage.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">May 5, 2015 - Tornado Near-Miss</h5>
                    <p className="text-gray-700 leading-relaxed">
                      An EF-3 tornado passed just 2 miles north of Big Spring with winds reaching 140 mph. While the tornado itself missed the city, the associated supercell brought 80+ mph straight-line winds that caused significant roof damage to industrial facilities and the Howard County Courthouse area. The storm also produced large hail and heavy rainfall that tested the city's drainage systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-purple-800">Extreme Weather Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-purple-700">February 14-17, 2021 - Winter Storm Uri</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Big Spring experienced temperatures as low as -8°F during Winter Storm Uri, with sustained sub-freezing conditions for over 120 hours. The extreme cold caused widespread roof membrane cracking, pipe bursts, and structural damage throughout the city. Snow and ice accumulation reached 6-8 inches, creating additional weight stress on older roofing systems. Many flat-roof commercial buildings experienced membrane failures that weren't discovered until spring thaw.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-purple-700">July 15, 2022 - Extreme Heat Event</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Big Spring recorded its highest temperature ever at 112°F during a historic heat dome event. Surface temperatures on dark roofing exceeded 160°F for multiple consecutive days, causing thermal damage to roofing membranes, HVAC failures, and accelerated aging of roofing materials throughout the city. The extreme heat combined with low humidity created exceptional fire danger and stressed building systems beyond design limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Storm Damage Restoration in Big Spring</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Climate-Specific Damage Patterns</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">High Elevation Effects</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Accelerated UV degradation of materials</li>
                      <li>• Thermal expansion stress cracking</li>
                      <li>• Wind uplift at roof perimeters</li>
                      <li>• Hail impact amplification</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Extreme Temperature Damage</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Membrane shrinkage and splitting</li>
                      <li>• Joint and seam failures</li>
                      <li>• Freeze-thaw cycling damage</li>
                      <li>• HVAC equipment thermal stress</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Flash Flooding Impact</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Drainage system overwhelm</li>
                      <li>• Ponding water infiltration</li>
                      <li>• Foundation settlement effects</li>
                      <li>• Interior water damage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold-light p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Our Big Spring Service Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Rapid Response</h4>
                      <p className="text-sm opacity-90">Priority service for Big Spring's unique weather challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Climate-Specific Assessment</h4>
                      <p className="text-sm opacity-90">Evaluation considering Big Spring's elevation and exposure factors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Weather-Resistant Repairs</h4>
                      <p className="text-sm opacity-90">Materials and techniques proven in West Texas conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Preventive Enhancement</h4>
                      <p className="text-sm opacity-90">Upgrades to prevent future damage from similar events</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Ongoing Monitoring</h4>
                      <p className="text-sm opacity-90">Regular inspections to ensure system performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  Why is Big Spring particularly susceptible to severe weather?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Big Spring's location along the Caprock Escarpment creates a natural weather intensification zone. The elevation change and terrain features cause air masses to converge and strengthen, particularly during spring and early summer months. The city sits directly in the path of the "Hail Highway" where warm, moist Gulf air collides with cool, dry air from the Rocky Mountains. Additionally, the lack of natural windbreaks on the high plains allows storms to maintain intensity as they approach the city, while the elevation amplifies both wind speeds and UV exposure that damages roofing materials.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  What makes storm damage worse in Big Spring compared to other cities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Several factors amplify storm damage in Big Spring. The 2,400-foot elevation increases both wind speeds and UV intensity, accelerating material degradation. The extreme temperature variations (often 40-50°F daily swings) create thermal stress that weakens roofing systems before storms hit. Flash flooding is common due to the hard-packed clay soil that doesn't absorb water well, and the surrounding terrain funnels water toward the city during heavy rains. The combination of these factors means that even moderate storms can cause significant damage to roofing systems that might survive similar conditions elsewhere.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  What roofing materials perform best in Big Spring's climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  For Big Spring's challenging climate, we recommend materials specifically designed for high UV exposure and extreme temperature variations. Modified bitumen with mineral surfacing provides excellent durability and hail resistance. Thermoplastic membranes (TPO/PVC) with enhanced UV stabilizers perform well in the intense West Texas sun. Metal roofing systems with thermal expansion joints handle the temperature swings effectively while resisting wind uplift. All systems require enhanced fastening patterns and reinforced details to withstand the frequent high winds. We also recommend impact-resistant materials and proper drainage design to handle the area's flash flooding potential.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  How quickly can you respond to storm damage in Big Spring?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  We maintain 24/7 emergency response capability for Big Spring and Howard County. During major storm events, we pre-position crews and materials in the area to ensure rapid response. Our goal is same-day emergency service for critical damage and comprehensive assessment within 24-48 hours of initial contact. We understand that Big Spring's weather patterns often produce multiple storm events in short periods, so quick temporary repairs are essential to prevent cascading damage. Our local relationships with material suppliers ensure we can obtain necessary repair materials even when demand is high throughout West Texas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Big Spring, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-101.47!3d32.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sBig%20Spring%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Big Spring, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Big Spring property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
