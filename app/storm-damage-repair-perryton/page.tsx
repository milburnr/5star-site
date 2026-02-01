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

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Perryton TXEmergency | 5 Star',
  description: 'Storm Damage Repair in Perryton, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function StormDamageRepairPerrytonPage() {
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
                      "name": "Perryton",
                      "url": "/storm-damage-repair-perryton/"
              }
      ]} />


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
              "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
              "name": "Perryton",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "24/7 emergency storm damage roof repair in Perryton, TX. Wind, hail, and severe weather damage specialists with complete insurance assistance."
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
                "name": "How quickly can you respond to storm damage emergencies in Perryton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain 24/7 emergency teams serving the northernmost Texas Panhandle with 2-4 hour response times for critical situations in Perryton. During major storm events affecting Ochiltree County's wheat country, we mobilize additional crews. Emergency tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover my storm damage repairs in Perryton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most property policies cover storm damage including wind, hail, and rain infiltration from covered perils. Given Perryton's 7-9 annual hailstorms and High Plains winds exceeding 70+ mph, many roofing projects qualify for insurance coverage. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage. Our 95%+ approval rate demonstrates our insurance expertise serving Ochiltree County properties."
                }
              },
              {
                "@type": "Question",
                "name": "Should I tarp my Perryton roof myself or wait for professionals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Never climb on a storm-damaged roof—it's extremely dangerous with unstable footing, electrical hazards, and severe weather conditions. Improper tarping can cause additional damage and complicate insurance claims. Call our 24/7 emergency line immediately—we'll dispatch crews for professional emergency tarping that's properly documented for insurance. Our service prevents interior damage while keeping you safe."
                }
              },
              {
                "@type": "Question",
                "name": "How long does storm damage roof replacement take in Perryton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Emergency mitigation (tarping/temporary repairs) happens same-day or next-day. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most properties. During major storm events affecting Perryton and wheat country areas, timelines may extend due to high demand—early claims get priority scheduling."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do immediately after storm damage in Perryton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "(1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for emergency inspection and mitigation—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from emergency response through final restoration for properties near downtown Perryton, the Perryton Museum, and throughout Ochiltree County."
                }
              },
              {
                "@type": "Question",
                "name": "Why is Perryton particularly vulnerable to severe storm damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the northernmost city in the Texas Panhandle, Perryton's location on the flat plains means unobstructed storm systems funnel through with maximum intensity. Combined with 7-9 annual hailstorms, winds exceeding 70+ mph, and agricultural exposure in wheat country, properties from downtown to surrounding ranches face extreme storm damage risk. Professional storm damage assessment is essential after every major weather event in Ochiltree County."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/shutterstock_162724754.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Perryton</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Service | Severe Weather Specialists
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Perryton's northernmost Panhandle location brings severe storms with hail, high winds, torrential rain, and extreme weather. We provide 24/7 emergency response, temporary repairs, complete damage assessment, and insurance claim assistance for storm-damaged roofs throughout Ochiltree County.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="bg-gradient-to-r from-red-600 to-red-700 text-white text-lg px-10 py-5 rounded-full font-bold shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-subtle">
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
        <section className="py-16 bg-gradient-to-b from-red-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={2} />-4hr
                </div>
                <div className="text-brand-brown font-semibold text-lg">Response Time</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">FREE</div>
                <div className="text-brand-brown font-semibold text-lg">Storm Inspections</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">100%</div>
                <div className="text-brand-brown font-semibold text-lg">Insurance Help</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Perryton's Storm Damage Repair Experts
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              As the northernmost city in the Texas Panhandle, Perryton experiences severe weather—7-9 annual hailstorms with baseball-sized hail, straight-line winds exceeding 70 mph, torrential rainfall, and extreme agricultural exposure in wheat country. These storms don't just damage roofs; they can compromise your entire roofing system in minutes. Delayed repairs lead to interior water damage, mold growth, structural issues, and exponentially higher costs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've responded to every major Perryton storm since 2014, serving properties from downtown Perryton to agricultural facilities, from the Perryton Museum area to homes throughout Ochiltree County. Our 24/7 emergency team provides same-day tarping and temporary repairs to prevent interior damage while we document everything for insurance claims. We handle the entire process—from emergency mitigation through final restoration with upgraded Class 4 materials. Most storm damage is 100% covered by insurance when properly documented.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-slate-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Northernmost Panhandle Storm Exposure
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Maximum Plains Exposure</h3>
                <p className="text-gray-700 mb-4">
                  Perryton's position as the northernmost Texas Panhandle city means storms arrive with full intensity after building strength across 300+ miles of open plains from Colorado and Kansas. With no terrain barriers and elevation around 2,900 feet, supercells maintain peak power longer than anywhere else in the region.
                </p>
                <p className="text-gray-700">
                  The agricultural landscape provides no wind protection, allowing storms to approach with devastating force. Properties throughout Ochiltree County face some of the most extreme weather conditions in the entire state, requiring specialized storm-resistant construction methods.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Wheat Country Storm Patterns</h3>
                <p className="text-gray-700 mb-4">
                  Perryton sits in prime wheat country where vast agricultural fields create unique microclimate effects. During growing season, the moisture from irrigated fields can enhance storm development, while harvest season creates massive dust storms that can compound severe weather damage.
                </p>
                <p className="text-gray-700">
                  Agricultural debris—wheat chaff, irrigation equipment, and farm machinery—becomes dangerous projectiles during high winds. Our installations account for these agricultural hazards with enhanced impact resistance and secure attachment systems.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Perryton Emergency Response Protocol
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-3 text-red-700">Immediate Response (0-4 hours)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Safety assessment and area securing</li>
                  <li>• Emergency tarping for active leaks</li>
                  <li>• Structural stability evaluation</li>
                  <li>• Initial damage documentation</li>
                  <li>• Insurance company notification</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold mb-3 text-orange-700">Documentation Phase (1-3 days)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Comprehensive damage inspection</li>
                  <li>• Weather correlation analysis</li>
                  <li>• Insurance adjuster coordination</li>
                  <li>• Material specification development</li>
                  <li>• Project timeline establishment</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold mb-3 text-green-700">Restoration Phase (1-3 weeks)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Complete damage remediation</li>
                  <li>• Upgraded material installation</li>
                  <li>• Quality control inspections</li>
                  <li>• Final insurance documentation</li>
                  <li>• Warranty processing</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Agricultural Storm Damage Specialization
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Farm Building Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Grain Storage Facilities</h4>
                      <p className="text-gray-600 text-sm">Specialized repairs for grain bins, elevators, and storage facilities with moisture protection and structural integrity focus.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Livestock Buildings</h4>
                      <p className="text-gray-600 text-sm">Rapid repair for cattle barns, milking facilities, and animal housing with ventilation system restoration.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Equipment Storage</h4>
                      <p className="text-gray-600 text-sm">Protection restoration for expensive agricultural machinery and implement buildings.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Processing Facilities</h4>
                      <p className="text-gray-600 text-sm">Specialized repairs for grain processing and agricultural production facilities with sanitation requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Agricultural Insurance Expertise</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Farm Policy Requirements</h4>
                    <p className="text-gray-600 text-sm">We understand the unique requirements of agricultural insurance policies and document damage appropriately for maximum coverage.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Operational Continuity</h4>
                    <p className="text-gray-600 text-sm">Our repairs prioritize getting agricultural operations back online quickly to minimize crop and livestock losses.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Multi-Structure Efficiency</h4>
                    <p className="text-gray-600 text-sm">Farms benefit from coordinated repairs across multiple buildings, reducing costs and timeline through efficient project management.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Seasonal Scheduling</h4>
                    <p className="text-gray-600 text-sm">We understand farming schedules and prioritize repairs around planting, growing, and harvest seasons.</p>
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
                  How quickly can you respond to storm damage emergencies in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We maintain 24/7 emergency teams serving the northernmost Texas Panhandle with 2-4 hour response times for critical situations in Perryton. During major storm events affecting Ochiltree County's wheat country, we mobilize additional crews. Emergency tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover my storm damage repairs in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most property policies cover storm damage including wind, hail, and rain infiltration from covered perils. Given Perryton's 7-9 annual hailstorms and High Plains winds exceeding 70+ mph, many roofing projects qualify for insurance coverage. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage. Our 95%+ approval rate demonstrates our insurance expertise serving Ochiltree County properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I tarp my Perryton roof myself or wait for professionals?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Never climb on a storm-damaged roof—it's extremely dangerous with unstable footing, electrical hazards, and severe weather conditions. Improper tarping can cause additional damage and complicate insurance claims. Call our 24/7 emergency line immediately—we'll dispatch crews for professional emergency tarping that's properly documented for insurance. Our service prevents interior damage while keeping you safe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does storm damage roof replacement take in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Emergency mitigation (tarping/temporary repairs) happens same-day or next-day. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most properties. During major storm events affecting Perryton and wheat country areas, timelines may extend due to high demand—early claims get priority scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What should I do immediately after storm damage in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  (1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for emergency inspection and mitigation—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from emergency response through final restoration for properties near downtown Perryton, the Perryton Museum, and throughout Ochiltree County.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why is Perryton particularly vulnerable to severe storm damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  As the northernmost city in the Texas Panhandle, Perryton's location on the flat plains means unobstructed storm systems funnel through with maximum intensity. Combined with 7-9 annual hailstorms, winds exceeding 70+ mph, and agricultural exposure in wheat country, properties from downtown to surrounding ranches face extreme storm damage risk. Professional storm damage assessment is essential after every major weather event in Ochiltree County.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Serving Perryton, Texas
            </h2>
            <p className="text-center text-gray-600 mb-8">
              From downtown Perryton to wheat country agricultural areas, we serve all of Ochiltree County and surrounding regions.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51842.39857816842!2d-101.11919287832031!3d36.39832690000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a8e9f9f9f9f9f9%3A0x9f9f9f9f9f9f9f9f!2sPerryton%2C%20TX!5e0!3m2!1sen!2sus!4v1647890123456!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Perryton Texas Service Area Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Storm Damage? We're Here 24/7</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Emergency response. Free storm inspections. Complete insurance assistance. Serving Perryton and Ochiltree County around the clock.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
              Emergency: (806) 622-6041
            </a>
            <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
              Schedule Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
