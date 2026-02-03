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
  title: 'Storm Damage Repair Borger TXService | Free Inspection',
  description: 'storm damage roof repair in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function StormDamageRepairBorgerPage() {
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
                      "name": "Borger",
                      "url": "/storm-damage-repair-borger/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/storm-damage-repair-borger/#localbusiness",
        "name": "5 Star Commercial Roofing - Borger Storm Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.6678, "longitude": -101.3974 },
        "url": "https://5starroofingpros.com/storm-damage-repair-borger/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Borger,_Texas", "name": "Borger", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert storm damage repair services in Borger, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "@id": "https://en.wikipedia.org/wiki/Borger,_Texas",
              "name": "Borger",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                              "name": "How quickly can you respond to storm damage emergencies in Borger?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We maintain 24/7 emergency teams throughout the Texas Panhandle including Borger with 2-4 hour response times for critical situations. During major storm events affecting the region, we mobilize additional crews to handle high call volumes. Emergency tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Will insurance cover my storm damage repairs in Borger?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes emergency mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Should I tarp my roof myself or wait for professionals in Borger?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Never climb on a storm-damaged roof—it's extremely dangerous with unstable footing, electrical hazards, and severe weather conditions. Improper tarping can cause additional damage and complicate insurance claims. Call our 24/7 emergency line immediately—we'll dispatch crews for professional emergency tarping that's properly documented for insurance. Our service prevents interior damage while keeping you safe."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How long does storm damage roof replacement take in Borger?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Emergency mitigation (tarping/temporary repairs) happens same-day or next-day. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting Borger, timelines may extend due to high demand—early claims get priority scheduling."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "What should I do immediately after storm damage in Borger?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "(1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for emergency inspection and mitigation—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from emergency response through final restoration."
                              }
                    }
          ]
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
                Storm Damage Repair in <span className="text-brand-gold-light">Borger</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Response | Panhandle Weather Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  Emergency: (806) 622-6041
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
                  24/7
                </div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
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
              Borger's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Borger's location in the Texas Panhandle creates unique roofing challenges. This industrial petrochemical center faces both severe weather and environmental factors. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and industrial environment with petrochemical operations demand superior roofing materials and expert installation. Properties near the Phillips 66 refinery, downtown Borger, and residential areas around Frank Phillips College experience extreme weather exposure.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 180+ Borger properties with premium materials engineered for Panhandle weather. From homes near Huber Park to industrial buildings throughout Hutchinson County, we understand local building codes, work seamlessly with Borger property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-slate-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Borger's Unique Storm Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Industrial Environment Impact</h3>
                <p className="text-gray-700 mb-4">
                  Borger's petrochemical industry creates unique roofing challenges. Chemical exposure from refineries accelerates material degradation, while industrial heat islands intensify storm formation. Properties downwind from Phillips 66 and other facilities face increased environmental stress that compounds storm damage.
                </p>
                <p className="text-gray-700">
                  We specify chemical-resistant materials and enhanced protective coatings designed for industrial environments. Our experience with Hutchinson County's petrochemical facilities ensures proper material selection for both storm resistance and chemical compatibility.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Panhandle Plains Wind Amplification</h3>
                <p className="text-gray-700 mb-4">
                  Borger's position on the High Plains creates wind amplification effects. With no natural barriers for 100+ miles in any direction, storms maintain full intensity while crossing Hutchinson County. The industrial infrastructure creates additional turbulence that increases localized wind speeds around buildings.
                </p>
                <p className="text-gray-700">
                  Our installations account for these wind dynamics with enhanced fastening systems, aerodynamic edge details, and materials rated for sustained high winds. We analyze each property's exposure to industrial wind effects.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Storm Damage Timeline for Borger Properties
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-3 text-red-700">Emergency Phase (0-24 hours)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Safety assessment and area securing</li>
                  <li>• Emergency tarping for active leaks</li>
                  <li>• Damage documentation begins</li>
                  <li>• Insurance notification</li>
                  <li>• Temporary weather protection</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold mb-3 text-orange-700">Assessment Phase (1-7 days)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Comprehensive damage inspection</li>
                  <li>• Insurance adjuster coordination</li>
                  <li>• Material specifications and ordering</li>
                  <li>• Permit applications if required</li>
                  <li>• Project timeline development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold mb-3 text-green-700">Restoration Phase (1-4 weeks)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Complete damage remediation</li>
                  <li>• New roof system installation</li>
                  <li>• Quality inspections and testing</li>
                  <li>• Final insurance documentation</li>
                  <li>• Warranty registration</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Borger Storm Patterns & Preparedness
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Annual Weather Cycle</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-blue-700">Spring Storm Season (March-May)</h4>
                    <p className="text-gray-600 text-sm">Peak supercell activity with tennis ball-sized hail, 80+ mph winds, and tornado potential. Borger's industrial heat island can intensify afternoon storm development.</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-yellow-700">Summer Heat Stress (June-August)</h4>
                    <p className="text-gray-600 text-sm">Extreme heat (105°F+) combined with chemical exposure accelerates roof aging. Thermal expansion stress creates vulnerability for fall storms.</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold text-orange-700">Fall Storm Return (September-November)</h4>
                    <p className="text-gray-600 text-sm">Second severe season with powerful cold fronts. Wind shear events and large temperature swings stress already heat-damaged materials.</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-semibold text-gray-700">Winter Exposure (December-February)</h4>
                    <p className="text-gray-600 text-sm">Ice storms and blizzards with 40+ mph winds. Freeze-thaw cycles exploit any storm damage from previous seasons.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Industrial Zone Considerations</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Chemical Resistance Requirements</h4>
                    <p className="text-gray-600 text-sm">Roofing materials near petrochemical facilities must resist acid rain, chemical vapors, and industrial emissions that accelerate degradation.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Emergency Access Protocols</h4>
                    <p className="text-gray-600 text-sm">Industrial area response requires coordination with facility security and safety protocols. We maintain certifications for working near active operations.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Enhanced Fastening Systems</h4>
                    <p className="text-gray-600 text-sm">Higher wind loads from industrial turbulence require upgraded attachment methods and wind-rated materials exceeding standard residential requirements.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Environmental Documentation</h4>
                    <p className="text-gray-600 text-sm">Insurance claims may require additional environmental impact documentation when chemical exposure contributes to accelerated storm damage.</p>
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
                  How quickly can you respond to storm damage emergencies in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We maintain 24/7 emergency teams throughout the Texas Panhandle including Borger with 2-4 hour response times for critical situations. During major storm events affecting the region, we mobilize additional crews to handle high call volumes. Emergency tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover my storm damage repairs in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes emergency mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I tarp my roof myself or wait for professionals in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Never climb on a storm-damaged roof—it's extremely dangerous with unstable footing, electrical hazards, and severe weather conditions. Improper tarping can cause additional damage and complicate insurance claims. Call our 24/7 emergency line immediately—we'll dispatch crews for professional emergency tarping that's properly documented for insurance. Our service prevents interior damage while keeping you safe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does storm damage roof replacement take in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Emergency mitigation (tarping/temporary repairs) happens same-day or next-day. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting Borger, timelines may extend due to high demand—early claims get priority scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What should I do immediately after storm damage in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  (1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for emergency inspection and mitigation—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from emergency response through final restoration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does Borger's industrial environment affect storm damage repairs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Borger's petrochemical industry creates unique challenges requiring specialized materials and techniques. Chemical exposure from refineries accelerates normal wear, making roofs more vulnerable to storm damage. We use chemical-resistant materials, enhanced protective coatings, and installation methods that account for industrial wind turbulence. Properties near Phillips 66 and other facilities receive extra protection against both storm damage and industrial environmental factors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Borger's hailstorms especially damaging?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Borger sits in the heart of "Hail Alley" where supercell storms develop tremendous updraft strength across the flat Panhandle. The industrial heat island from petrochemical facilities can intensify afternoon storm development, creating larger hail stones. With no terrain barriers, these storms maintain full intensity while crossing Hutchinson County. Hail sizes regularly reach golf ball to tennis ball diameter, causing severe granule loss and mat exposure that requires complete roof replacement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work on commercial and industrial buildings in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we specialize in commercial and industrial storm damage repair throughout Borger's business district. Our team holds certifications for working near active petrochemical operations and understands the unique requirements for industrial facilities. We coordinate with facility managers on safety protocols, work around production schedules, and use materials approved for chemical exposure environments. From small businesses near Frank Phillips College to major industrial facilities, we handle all commercial storm damage repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long do storm damage repairs last in Borger's harsh environment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our storm damage repairs are designed specifically for Borger's challenging environment. We use enhanced materials that resist both severe weather and chemical exposure, with manufacturer warranties of 25-50 years depending on the system. Our installations exceed standard requirements with upgraded fastening, chemical-resistant coatings, and enhanced underlayment. With proper maintenance, our repairs perform excellently despite Borger's extreme conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What's included in your emergency storm response for Borger properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our 24/7 emergency service includes immediate safety assessment, professional damage documentation with photos and measurements, emergency tarping to prevent further damage, temporary repairs for active leaks, coordination with insurance adjusters, and detailed estimates for permanent repairs. We arrive within 2-4 hours for critical situations and work around Borger's industrial schedules. All emergency work is properly documented for insurance claims and credited toward final repair costs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Material Selection for Borger's Environment
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-lg border">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-brand-gold">Chemical-Resistant Systems</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• EPDM membrane roofing</li>
                    <li>• Chemical-resistant coatings</li>
                    <li>• Enhanced polymer shingles</li>
                    <li>• Industrial-grade fasteners</li>
                    <li>• Acid-resistant flashing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-brand-gold">Wind-Resistant Features</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 140+ mph wind ratings</li>
                    <li>• Enhanced fastening patterns</li>
                    <li>• Aerodynamic edge systems</li>
                    <li>• Reinforced attachment points</li>
                    <li>• Impact-resistant materials</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-brand-gold">Heat/UV Protection</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Cool roof technology</li>
                    <li>• UV-resistant surfaces</li>
                    <li>• Thermal barrier systems</li>
                    <li>• Heat-reflective coatings</li>
                    <li>• Expansion joint systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving Borger, TX</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104618.76254676384!2d-101.45892194335938!3d35.66790969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870158e13d1c44ef%3A0x5f8b3ed64c7a8b92!2sBorger%2C%20TX!5e0!3m2!1sen!2sus!4v1736541234567!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Borger property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
