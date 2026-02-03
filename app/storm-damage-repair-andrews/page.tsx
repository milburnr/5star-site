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
  title: "Storm Damage Repair Andrews TX | 5 Star Commercial Roofing",
  description: "Expert storm damage roof repair in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function StormDamageRepairAndrewsPage() {
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
                      "name": "Andrews",
                      "url": "/storm-damage-repair-andrews/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/storm-damage-repair-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews Storm Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.3187, "longitude": -102.5454 },
        "url": "https://5starroofingpros.com/storm-damage-repair-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert storm damage repair services in Andrews, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "name": "Andrews",
              "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Andrews TX. Permian Basin experiences 6-8 hailstorms annually."
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
                Storm Damage Repair in <span className="text-brand-gold-light">Andrews</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Storm Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
              Andrews's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Andrews's location in Andrews County creates unique roofing challenges. The Permian Basin experiences 6-8 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Andrews and Andrews County with premium materials and expert installation. From properties near Andrews County Courthouse to buildings throughout Andrews, we understand Permian Basin weather patterns, local building codes, and the specific needs of Andrews County property owners.
            </p>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Andrews Weather Patterns & Storm History</h3>
            <div className="bg-amber-50 p-8 rounded-2xl mb-8">
              <h4 className="text-2xl font-bold mb-4 text-brand-brown">Climate Profile</h4>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Andrews experiences a semi-arid climate with extreme temperature variations. Summer temperatures regularly exceed 100°F, while winter lows can drop below freezing. This dramatic temperature swing causes significant thermal expansion and contraction in roofing materials, leading to premature aging, cracking, and failure points that make roofs vulnerable during storm events.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">Seasonal Weather Extremes</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Summer:</strong> Highs 95-105°F, intense UV exposure</li>
                    <li>• <strong>Winter:</strong> Lows 25-35°F, occasional ice storms</li>
                    <li>• <strong>Spring:</strong> Peak tornado season (March-May)</li>
                    <li>• <strong>Fall:</strong> Severe thunderstorms, large hail</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-3 text-brand-brown">Annual Precipitation Patterns</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Average rainfall: 14-16 inches annually</li>
                    <li>• Most rain falls May-September</li>
                    <li>• Flash flooding during heavy downpours</li>
                    <li>• Drought conditions common</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Historical Storm Events in Andrews</h3>
            <div className="space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-red-800">Significant Hail Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">May 27, 2021 - Supercell Outbreak</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A devastating supercell thunderstorm produced baseball-sized hail (2.75 inches) across Andrews County. Wind speeds reached 75 mph, causing widespread roof damage to commercial and residential properties. The storm lasted nearly 45 minutes, with continuous hail fall damaging hundreds of roofs throughout the city. Insurance claims exceeded $12 million in Andrews County alone.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">April 12, 2018 - Easter Sunday Storm</h5>
                    <p className="text-gray-700 leading-relaxed">
                      This memorable storm system brought golf ball to tennis ball-sized hail (1.75-2.5 inches) to Andrews during Easter celebrations. The timing caught many residents off guard, with vehicles and roofs sustaining significant damage. The storm's slow movement prolonged the hail exposure, causing extensive granule loss and impact damage to asphalt shingles and membrane roofing systems.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-red-700">June 8, 2015 - Record Setting Event</h5>
                    <p className="text-gray-700 leading-relaxed">
                      The largest recorded hailstone in Andrews County history fell during this supercell event - measuring 3.5 inches in diameter. This softball-sized hail caused catastrophic damage to roofing systems across Andrews, with many buildings requiring complete roof replacement. The storm produced a damage path 15 miles wide and 35 miles long.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-blue-800">Wind Damage Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">March 21, 2022 - Derecho Event</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A rare derecho (widespread windstorm) brought sustained winds of 80+ mph to Andrews, with gusts reaching 95 mph. This straight-line wind event lasted over 30 minutes, causing extensive damage to roofing systems, HVAC units, and building facades. Unlike tornado damage, the derecho affected the entire city uniformly, overwhelming local roofing contractors for months.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-700">May 15, 2019 - Tornado Touchdown</h5>
                    <p className="text-gray-700 leading-relaxed">
                      An EF-2 tornado touched down 3 miles southwest of Andrews, with peak winds of 125 mph. While the tornado itself missed the city center, the associated supercell brought 90+ mph straight-line winds to Andrews, causing significant roof damage to industrial facilities and commercial buildings near the Andrews County Airport area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-500 p-8 rounded-r-2xl">
                <h4 className="text-2xl font-bold mb-4 text-gray-800">Ice Storm & Winter Weather Events</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-gray-700">February 15-17, 2021 - Historic Freeze</h5>
                    <p className="text-gray-700 leading-relaxed">
                      The unprecedented winter storm that affected Texas brought temperatures as low as -5°F to Andrews, with sustained sub-freezing conditions for over 100 hours. Ice accumulation of up to 1 inch caused significant damage to roofing systems, gutters, and building facades. Many older buildings experienced roof membrane cracking due to extreme cold and ice expansion.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-700">December 26, 2015 - Christmas Ice Storm</h5>
                    <p className="text-gray-700 leading-relaxed">
                      A significant ice storm deposited 0.5-0.75 inches of ice across Andrews County. The weight of ice accumulation caused structural damage to weaker roofing systems and extensive gutter damage throughout the city. Power outages lasted several days in some areas, preventing proper heating and leading to freeze damage in buildings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Storm Damage Assessment & Repair Process</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Common Storm Damage Types in Andrews</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Hail Impact Damage</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Granule loss on asphalt shingles</li>
                      <li>• Membrane punctures and tears</li>
                      <li>• HVAC unit damage</li>
                      <li>• Gutter and downspout denting</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Wind Damage</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Membrane lifting and tearing</li>
                      <li>• Shingle blow-off and curling</li>
                      <li>• Flashing displacement</li>
                      <li>• Debris impact damage</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Thermal Damage</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Membrane cracking and splitting</li>
                      <li>• Thermal movement stress</li>
                      <li>• UV degradation acceleration</li>
                      <li>• Expansion joint failure</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold-light p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Our Storm Response Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Emergency Response</h4>
                      <p className="text-sm opacity-90">24/7 emergency calls, immediate temporary repairs to prevent further damage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Comprehensive Inspection</h4>
                      <p className="text-sm opacity-90">Detailed assessment with photo documentation and written reports</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Insurance Coordination</h4>
                      <p className="text-sm opacity-90">Direct insurance company communication and claim assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Expert Repairs</h4>
                      <p className="text-sm opacity-90">Professional restoration using premium materials and proven techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Quality Assurance</h4>
                      <p className="text-sm opacity-90">Final inspection and comprehensive warranty coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  What makes Andrews particularly vulnerable to storm damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Andrews sits in the heart of "Hail Alley," where warm, moist air from the Gulf of Mexico collides with cool, dry air masses from Canada. The flat terrain provides no natural windbreaks, allowing storms to intensify rapidly. The Permian Basin's elevation and geographic position create ideal conditions for supercell thunderstorm development, particularly during spring and early summer months. Additionally, the extreme temperature variations throughout the year weaken roofing materials over time, making them more susceptible to storm damage when severe weather strikes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  How quickly should I address storm damage in Andrews?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Storm damage should be addressed immediately in Andrews due to the region's weather patterns. Even minor damage can quickly worsen during the next storm event, which typically occurs within weeks during active weather seasons. The intense summer heat can cause compromised roofing materials to deteriorate rapidly, while sudden temperature drops can cause expansion and contraction that worsens existing damage. Most insurance companies require prompt action to maintain coverage, typically within 30-60 days of the storm event. Our 24/7 emergency response ensures temporary protection while permanent repairs are scheduled.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  What roofing systems work best for Andrews' climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  For Andrews' extreme climate conditions, we recommend impact-resistant materials designed for both hail resistance and thermal stability. Modified bitumen systems with mineral surfacing provide excellent hail resistance and UV protection. Metal roofing systems with proper thermal expansion joints handle temperature extremes well while resisting wind uplift. For commercial applications, thermoplastic membranes (TPO/PVC) offer superior weatherability and energy efficiency. All systems should include enhanced fastening patterns and reinforced flashing details to withstand the high winds common in this region. We customize our recommendations based on your building's specific exposure and use requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-brand-brown">
                  How does 5 Star Commercial Roofing handle insurance claims?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Our storm damage restoration process includes full insurance claim assistance from start to finish. We provide detailed photo documentation, written damage assessments, and meet with insurance adjusters on-site to ensure all damage is properly identified and covered. Our estimates are prepared using industry-standard pricing databases that insurance companies recognize and accept. We maintain relationships with major insurance carriers serving the Andrews area and understand their specific requirements and processes. If coverage disputes arise, we provide additional documentation and expert testimony to support legitimate claims. Our goal is to restore your property while maximizing your insurance benefits and minimizing your out-of-pocket expenses.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Andrews, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.55!3d32.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sAndrews%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Andrews, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Andrews property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
