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
  alternates: { canonical: 'https://5starroofingpros.com/storm-damage-repair-dumas/' },
  title: 'Storm Damage Repair Dumas TXService | Free Inspection',
  description: 'storm damage roof repair in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function StormDamageRepairDumasPage() {
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
                      "name": "Dumas",
                      "url": "/storm-damage-repair-dumas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/storm-damage-repair-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas Storm Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.8656, "longitude": -101.973 },
        "url": "https://5starroofingpros.com/storm-damage-repair-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert storm damage repair services in Dumas, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              "name": "Dumas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                              "name": "How quickly can you respond to storm damage emergencies in Dumas?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We maintain our teams throughout the Texas Panhandle including Dumas with 2-4 hour response times for critical situations. During major storm events affecting the region, we mobilize additional crews to handle high call volumes. tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Will insurance cover my storm damage repairs in Dumas?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Should I tarp my roof myself or wait for professionals in Dumas?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How long does storm damage roof replacement take in Dumas?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Tarping and temporary repairs are typically scheduled within 1-2 business days. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting Dumas, timelines may extend due to high demand—early claims get priority scheduling."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "What should I do immediately after storm damage in Dumas?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "(1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for professional inspection—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from initial assessment through final restoration."
                              }
                    }
          ]
})
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-35-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Dumas</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Storm Damage Experts | Panhandle Weather Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  urgent: (806) 622-6041
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
                 
                </div>
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
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
              Dumas's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas, the Moore County seat, faces extreme Panhandle weather as a major agricultural and industrial center. This northern Panhandle location experiences some of Texas's most severe storm conditions, with supercells tracking directly across the flat terrain from New Mexico. Properties from Moore County Airport to downtown Dumas and agricultural facilities throughout the county face 6-8 annual hailstorms with golf ball-sized hail and sustained winds exceeding 70 mph.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 240+ Dumas properties with premium materials engineered for Panhandle weather extremes. From residential areas near Window on the Plains Museum to industrial facilities and agricultural operations, we understand Moore County's diverse building needs. We work seamlessly with farmers, business owners, and residents, handling complete insurance claims while meeting strict agricultural and industrial timelines. Most property owners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-slate-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Dumas's Agricultural Storm Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Farm & Ranch Operations Impact</h3>
                <p className="text-gray-700 mb-4">
                  Dumas sits at the heart of Moore County's agricultural operations, where storm damage affects not just homes and businesses but critical farming infrastructure. Livestock facilities, grain storage, and equipment buildings face unique challenges from High Plains supercells that develop tremendous intensity crossing the unobstructed terrain from Colorado and New Mexico.
                </p>
                <p className="text-gray-700">
                  Agricultural buildings require rapid storm response to protect livestock, stored grain, and expensive equipment. We prioritize storm repairs on agricultural structures and understand the critical timing around planting and harvest seasons when delays cost thousands daily.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Northern Panhandle Storm Intensity</h3>
                <p className="text-gray-700 mb-4">
                  Dumas's position in the far northern Panhandle means storms arrive with maximum intensity after building strength across hundreds of miles of open plains. The higher elevation (3,600+ feet) provides no protection from supercell development, while the completely flat terrain allows storms to maintain peak intensity longer than anywhere else in Texas.
                </p>
                <p className="text-gray-700">
                  These factors create hailstones regularly exceeding golf ball size and wind speeds that can reach 80+ mph. Properties throughout Moore County face some of the state's most challenging weather conditions, requiring the highest-grade materials and installation methods.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Agricultural Building Storm Response
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
                <h3 className="text-lg font-bold mb-3 text-red-700">Livestock Facilities</h3>
                <ul className="text-red-600 space-y-2 text-sm">
                  <li>• Animal protection</li>
                  <li>• Rapid ventilation restoration</li>
                  <li>• Feed storage security</li>
                  <li>• Milking barn priority</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-500">
                <h3 className="text-lg font-bold mb-3 text-orange-700">Grain Storage</h3>
                <ul className="text-orange-600 space-y-2 text-sm">
                  <li>• Bin roof replacement</li>
                  <li>• Moisture protection</li>
                  <li>• Loading system repairs</li>
                  <li>• Quality preservation</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-500">
                <h3 className="text-lg font-bold mb-3 text-yellow-700">Equipment Buildings</h3>
                <ul className="text-yellow-600 space-y-2 text-sm">
                  <li>• Machinery protection</li>
                  <li>• Large door repairs</li>
                  <li>• Workshop restoration</li>
                  <li>• Tool security</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                <h3 className="text-lg font-bold mb-3 text-green-700">Processing Facilities</h3>
                <ul className="text-green-600 space-y-2 text-sm">
                  <li>• Production continuity</li>
                  <li>• Sanitary requirements</li>
                  <li>• Climate control</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Moore County Weather Patterns & Storm Preparedness
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Extreme Weather Calendar</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold text-purple-700">March-May: Prime Supercell Season</h4>
                    <p className="text-gray-600 text-sm">Peak tornado and large hail season with 70% of annual severe weather. Supercells track northeast from New Mexico with devastating intensity.</p>
                  </div>
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-700">June-August: Heat & Wind Stress</h4>
                    <p className="text-gray-600 text-sm">Extreme heat (110°F+) combines with constant 25+ mph winds to stress roofing materials. Afternoon thunderstorms produce damaging microbursts.</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold text-orange-700">September-November: Secondary Severe Season</h4>
                    <p className="text-gray-600 text-sm">Powerful cold fronts create violent wind shear and large temperature swings that damage heat-stressed materials.</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-blue-700">December-February: Ice & Blizzard Season</h4>
                    <p className="text-gray-600 text-sm">Severe ice storms and blizzards with 50+ mph winds test repairs made during previous storm seasons.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Agricultural Storm Preparedness</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Seasonal Inspection Schedule</h4>
                    <p className="text-gray-600 text-sm">Pre-storm season inspections in February and August identify vulnerabilities before peak weather periods, preventing catastrophic failures during critical farming periods.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">storm response Planning</h4>
                    <p className="text-gray-600 text-sm">Agricultural operations need rapid response protocols for livestock protection, grain preservation, and equipment security during and after severe weather events.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Multi-Building Efficiency</h4>
                    <p className="text-gray-600 text-sm">Farms with multiple structures benefit from coordinated repair projects that reduce costs and minimize operational disruptions during critical seasons.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Insurance Coordination</h4>
                    <p className="text-gray-600 text-sm">Agricultural insurance requires specific documentation and timing. We understand farm policy requirements and work within agricultural insurance timelines.</p>
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
                  How quickly can you respond to storm damage emergencies in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We maintain our teams throughout the Texas Panhandle including Dumas with 2-4 hour response times for critical situations. During major storm events affecting the region, we mobilize additional crews to handle high call volumes. tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover my storm damage repairs in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I tarp my roof myself or wait for professionals in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does storm damage roof replacement take in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Tarping and temporary repairs are typically scheduled within 1-2 business days. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting Dumas, timelines may extend due to high demand—early claims get priority scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What should I do immediately after storm damage in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  (1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for professional inspection—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from initial assessment through final restoration.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving Dumas, TX</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52373.48394183475!2d-101.9734!3d35.8657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870196c5448c58c7%3A0x61f1e483f088b833!2sDumas%2C%20TX!5e0!3m2!1sen!2sus!4v1736541456789!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Dumas property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
