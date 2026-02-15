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
  alternates: { canonical: 'https://5starroofingpros.com/storm-damage-repair-canyon/' },
  title: 'Storm Damage Repair Canyon TXService | Free Inspection',
  description: 'storm damage roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function StormDamageRepairCanyonPage() {
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
                      "name": "Canyon",
                      "url": "/storm-damage-repair-canyon/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/storm-damage-repair-canyon/#localbusiness",
        "name": "5 Star Commercial Roofing - Canyon Storm Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 34.9803, "longitude": -101.9188 },
        "url": "https://5starroofingpros.com/storm-damage-repair-canyon/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert storm damage repair services in Canyon, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas",
              "name": "Canyon",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                              "name": "How quickly can you respond to storm damage emergencies in Canyon?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We maintain our teams throughout the Texas Panhandle including Canyon with 2-4 hour response times for critical situations. During major storm events affecting the region, we mobilize additional crews to handle high call volumes. tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Will insurance cover my storm damage repairs in Canyon?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Should I tarp my roof myself or wait for professionals in Canyon?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How long does storm damage roof replacement take in Canyon?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Tarping and temporary repairs are typically scheduled within 1-2 business days. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting Canyon, timelines may extend due to high demand—early claims get priority scheduling."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "What should I do immediately after storm damage in Canyon?",
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
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-2-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Canyon</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Storm Damage Experts | Panhandle Weather Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
              Canyon's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Canyon's location in the Texas Panhandle creates unique roofing challenges. Near Palo Duro Canyon, home to West Texas A&M University, this Randall County seat faces distinctive weather patterns. The canyon's geography creates microclimates and wind channeling effects that intensify storm damage. Properties from the WTAMU campus to historic downtown Canyon and residential areas near Canyon Country Club experience amplified weather conditions requiring specialized storm damage expertise.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 350+ Canyon properties with premium materials engineered for Panhandle weather. From student housing near West Texas A&M to historic buildings downtown and modern subdivisions, we understand Canyon's diverse building stock and unique weather challenges. We work seamlessly with property owners, handle complete insurance claims, and understand Randall County building codes. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-slate-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Palo Duro Canyon's Weather Impact on Storm Damage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Canyon Wind Channeling Effects</h3>
                <p className="text-gray-700 mb-4">
                  The famous Palo Duro Canyon creates unique wind patterns that amplify storm damage in Canyon. As storms move across the High Plains, the canyon geography channels and accelerates winds, creating turbulent airflow that can exceed normal storm wind speeds by 20-30%. This channeling effect particularly impacts properties on the canyon's east and west rims.
                </p>
                <p className="text-gray-700">
                  West Texas A&M University's elevated campus location and areas near Canyon Country Club face increased exposure to these wind effects. Our installations account for these localized wind patterns with enhanced fastening systems and aerodynamic design features.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Microclimate Storm Formation</h3>
                <p className="text-gray-700 mb-4">
                  Palo Duro Canyon's 800-foot depth creates temperature differentials that can trigger or intensify thunderstorm development. Cool air from the canyon floor meets heated surface air from the surrounding plains, creating atmospheric instability. This effect is strongest during late afternoon and early evening hours.
                </p>
                <p className="text-gray-700">
                  These localized storm cells often produce more intense hail and damaging winds than regional weather forecasts predict. Our storm response teams monitor local conditions and respond quickly when canyon-enhanced storms develop.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Storm Damage Patterns by Canyon Area
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-3 text-blue-700">WTAMU Campus Area</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Elevated exposure to wind shear</li>
                  <li>• Large flat roof areas catch more hail</li>
                  <li>• Multiple building height turbulence</li>
                  <li>• Student housing densities</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  The university's elevated campus faces maximum wind exposure with minimal protection. Academic buildings and residence halls require specialized attention to fastening systems and impact resistance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold mb-3 text-green-700">Historic Downtown Canyon</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Older building vulnerabilities</li>
                  <li>• Historic preservation requirements</li>
                  <li>• Mixed architectural styles</li>
                  <li>• Limited access for repairs</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Downtown's historic buildings often require specialized materials and methods that preserve architectural integrity while providing storm protection meeting modern standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold mb-3 text-orange-700">Canyon Rim Residential</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Maximum wind exposure</li>
                  <li>• Channeled storm effects</li>
                  <li>• Debris from canyon vegetation</li>
                  <li>• Scenic view preservation needs</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Homes near the canyon rim face the most severe weather exposure but often have restrictions on visible modifications. We balance protection with aesthetic requirements.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              University and Student Housing Storm Response
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Campus Emergency Protocols</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold">Coordinated University Response</h4>
                      <p className="text-gray-600 text-sm">We work directly with WTAMU facilities management to coordinate storm repairs on campus buildings and student housing complexes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold">Student Safety Priority</h4>
                      <p className="text-gray-600 text-sm">Housing protection focuses on residence halls and student apartments, ensuring safe living conditions throughout the repair process.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold">Academic Continuity</h4>
                      <p className="text-gray-600 text-sm">We schedule repairs to minimize disruption to academic schedules, working around finals, move-in periods, and major university events.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold">Insurance Coordination</h4>
                      <p className="text-gray-600 text-sm">We handle both private property claims and university insurance requirements with documentation meeting institutional standards.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Student Housing Specialization</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Multi-Unit Efficiency</h4>
                    <p className="text-gray-600 text-sm">Apartment complexes and residence halls benefit from our multi-unit repair expertise, reducing costs and timeline through coordinated projects.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Temporary Housing Support</h4>
                    <p className="text-gray-600 text-sm">When storm damage requires temporary relocation, we work with property managers to expedite repairs and minimize displacement duration.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Budget-Conscious Solutions</h4>
                    <p className="text-gray-600 text-sm">We understand student housing economics and recommend cost-effective materials that provide excellent protection without unnecessary premium features.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Noise Management</h4>
                    <p className="text-gray-600 text-sm">Repair scheduling considers student sleep patterns and study periods, minimizing disruption during exam periods and late-night hours.</p>
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
                  How quickly can you respond to storm damage emergencies in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We maintain our teams throughout the Texas Panhandle including Canyon with 2-4 hour response times for critical situations. During major storm events affecting the region, we mobilize additional crews to handle high call volumes. tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover my storm damage repairs in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I tarp my roof myself or wait for professionals in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does storm damage roof replacement take in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Tarping and temporary repairs are typically scheduled within 1-2 business days. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting Canyon, timelines may extend due to high demand—early claims get priority scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What should I do immediately after storm damage in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  (1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for professional inspection—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from initial assessment through final restoration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does Palo Duro Canyon affect storm damage in the area?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Palo Duro Canyon creates unique microclimate effects that can intensify storm damage. The canyon channels winds, creating wind speeds 20-30% higher than regional forecasts. Temperature differentials between the canyon floor and rim trigger localized storm development. Properties near the canyon rim face maximum exposure, while the university campus experiences enhanced wind shear effects. We factor these geographic influences into all our Canyon area installations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work on West Texas A&M University buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we're experienced with university facilities and work directly with WTAMU management on storm damage repairs. We understand academic schedules, coordinate around university events, and meet institutional insurance requirements. Our team handles everything from residence halls to academic buildings, ensuring student safety while maintaining educational continuity. We also serve private student housing throughout Canyon.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Canyon's downtown historic buildings challenging for storm repairs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Downtown Canyon's historic buildings require specialized approaches that preserve architectural character while providing modern storm protection. Many structures have unique architectural features, older framing systems, and historic preservation requirements. We use period-appropriate materials where possible and work with city planning officials to ensure repairs meet both modern building codes and historic district guidelines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle storm damage on canyon rim properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Canyon rim properties face the most severe weather exposure but often have scenic view restrictions on modifications. We use low-profile, aesthetically compatible materials that provide maximum protection without compromising views. Enhanced fastening systems account for channeled canyon winds, while debris barriers protect against vegetation and materials carried up from the canyon during storms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What preventive measures work best for Canyon's unique weather patterns?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Canyon properties benefit from wind-resistant design features including impact-resistant materials, enhanced attachment systems, and aerodynamic edge details. Regular inspections before storm seasons help identify vulnerabilities. Properties near the canyon should secure outdoor items that become projectiles and consider landscaping that reduces wind exposure. University area buildings benefit from coordinated maintenance programs that address multiple units efficiently.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Historic Preservation & Storm Protection
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-brand-gold">Preservation Challenges</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-400 pl-4">
                      <h4 className="font-semibold text-amber-700">Architectural Integrity</h4>
                      <p className="text-gray-600 text-sm">Maintaining historic character while adding modern storm protection requires specialized materials and techniques that blend with original architecture.</p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-4">
                      <h4 className="font-semibold text-amber-700">Building Code Compliance</h4>
                      <p className="text-gray-600 text-sm">Historic buildings must meet modern safety standards while preserving historic designation, requiring creative solutions and variance applications.</p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-4">
                      <h4 className="font-semibold text-amber-700">Material Compatibility</h4>
                      <p className="text-gray-600 text-sm">Modern storm-resistant materials must be compatible with historic substrates and expansion characteristics of original construction.</p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-4">
                      <h4 className="font-semibold text-amber-700">Approval Processes</h4>
                      <p className="text-gray-600 text-sm">Historic district modifications require additional approvals from preservation committees and city planning departments.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-brand-gold">Our Historic Solutions</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Period-Appropriate Materials</h4>
                      <p className="text-gray-600 text-sm">We source materials that match historic appearance while providing modern performance, including clay tiles, slate, and specialty metal systems.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Hidden Protection Systems</h4>
                      <p className="text-gray-600 text-sm">Enhanced underlayment and fastening systems provide superior storm protection without visible modifications to historic exteriors.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Documentation Expertise</h4>
                      <p className="text-gray-600 text-sm">We handle all preservation committee applications and work with historic preservation consultants to ensure compliance.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Craftsman Specialists</h4>
                      <p className="text-gray-600 text-sm">Our team includes specialists trained in historic restoration techniques and familiar with Canyon's architectural heritage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving Canyon, TX</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52475.96394183475!2d-101.9574!3d34.9803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870148c5448c58c7%3A0x61f1e483f088b833!2sCanyon%2C%20TX!5e0!3m2!1sen!2sus!4v1736541345678!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Canyon property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
