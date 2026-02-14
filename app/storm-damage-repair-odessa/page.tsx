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
  alternates: { canonical: 'https://5starroofingpros.com/storm-damage-repair-odessa/' },
  title: "Storm Damage Repair Odessa | 5 Star Commercial Roofing",
  description: "Expert storm damage repair in Odessa.  for hail, wind, and weather damage. Complete insurance assistance. Call (806) 622-6041",
};

export default function Page() {
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
                      "name": "Odessa",
                      "url": "/storm-damage-repair-odessa/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/storm-damage-repair-odessa/#localbusiness",
        "name": "5 Star Commercial Roofing - Odessa Storm Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.8457, "longitude": -102.3676 },
        "url": "https://5starroofingpros.com/storm-damage-repair-odessa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert storm damage repair services in Odessa, TX. Free inspections, insurance claim assistance, prompt response.",
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
                "addressLocality": "Odessa",
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
              "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas",
              "name": "Odessa",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage repair in Odessa.  for hail, wind, and weather damage. Complete insurance assistance."
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
                "name": "What types of storm damage affect Odessa roofs most often?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Odessa roofs face hail damage (6-8 storms annually), high winds exceeding 65+ mph, intense UV degradation, and temperature extremes. Permian Basin storms can combine multiple factors - hail, wind, and heavy rain - causing compound damage that requires comprehensive assessment and repair."
                }
              },
              {
                "@type": "Question",
                "name": "Should I tarp my Odessa roof after storm damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, emergency tarping prevents further water damage after storms. We provide emergency tarping services available in Odessa to protect your property until permanent repairs are completed. Most insurance policies cover emergency mitigation costs, and prompt action prevents mold and interior damage."
                }
              },
              {
                "@type": "Question",
                "name": "How do Permian Basin storms differ from other Texas regions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Permian Basin storms are characterized by extreme intensity, large hail, sustained high winds, and rapid development. The open terrain around Odessa allows storms to build strength, while petroleum industry infrastructure requires special considerations. Our crews understand these unique regional challenges."
                }
              },
              {
                "@type": "Question",
                "name": "Can you repair both residential and commercial storm damage in Odessa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We handle storm damage for Odessa homes, businesses, and oil & gas facilities. Our experience spans from residential neighborhoods to Music City Mall commercial properties and industrial facilities throughout the Permian Basin oil field operations areas."
                }
              },
              {
                "@type": "Question",
                "name": "What documentation do I need for an Odessa storm damage insurance claim?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive documentation including photos, measurements, weather reports from local Odessa/Permian Basin storms, and detailed damage assessments. Our reports meet insurance requirements and ensure you receive proper compensation for all storm-related damage."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-odessa-13-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Odessa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Protecting Permian Basin Properties Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage repair in Odessa.  for hail, wind, and weather damage. Complete insurance assistance.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Estimate
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Odessa Storm Damage Specialists: Ector County Weather Experts
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Ector County Storm Profile:</strong> Odessa sits in the heart of the Permian Basin's most intensive oil production area, where unique desert-petroleum microclimate creates severe storm conditions. Unlike its sister city Midland, <strong>Odessa experiences more frequent dust storm activity</strong> due to its position in the basin's lower elevation pocket, while the massive Permian Basin oil infrastructure creates heat islands that trigger explosive thunderstorm development.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>University of Texas Permian Basin (UTPB) Weather Research:</strong> Odessa benefits from UTPB's atmospheric science programs that document local weather patterns unique to Ector County. The university's research shows that Odessa experiences 15-20% more severe weather events than surrounding areas due to the concentration of petroleum processing facilities creating thermal updrafts that intensify storm cell development.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Desert-Industrial Weather Convergence:</strong> Odessa's position in the Permian Basin's geological depression creates a natural bowl effect where storms concentrate and intensify. The combination of Chihuahuan Desert conditions with massive petroleum thermal sources produces some of Texas's most challenging roofing environments - extreme temperature swings (50°F+ daily), frequent dust storms with petroleum particulates, and sudden severe weather with minimal advance warning.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected Odessa properties through every major weather event, serving from UTPB campus facilities to downtown Odessa's historic districts, from Music City Mall commercial areas to the residential communities around Ratliff Stadium, and throughout Ector County's extensive oil field operations. Our specialized approach addresses Odessa's unique combination of desert conditions, petroleum industry influences, and university-community infrastructure requirements.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Ector County Storm Patterns & Environmental Factors
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Desert Dust Storm Season</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>March through May:</strong> Odessa experiences more dust storm activity than Midland due to its lower elevation position and exposure to Chihuahuan Desert air masses. These dust storms carry petroleum particulates that create more aggressive roofing material degradation.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Dust + petroleum chemicals create corrosive conditions requiring specialized protective coatings
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Thermal Storm Development</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>April through August:</strong> Odessa's concentration of refineries and processing facilities creates the Permian Basin's most intense heat islands. These thermal sources trigger storm development that can increase local severity by 25+ mph over forecast conditions.
                </p>
                <p className="text-sm text-gray-600 italic">
                  UTPB research documents storm intensification rates exceeding regional forecasts
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Service Areas Throughout Ector County
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">UTPB & Academic Areas</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• University of Texas Permian Basin</li>
                  <li>• Academic research facilities</li>
                  <li>• Student housing complexes</li>
                  <li>• Faculty residential areas</li>
                  <li>• Campus support services</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Central Odessa</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Downtown Historic District</li>
                  <li>• Music City Mall area</li>
                  <li>• Ratliff Stadium vicinity</li>
                  <li>• Ector County Coliseum</li>
                  <li>• Presidential Museum area</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Petroleum Industrial</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Refinery complexes</li>
                  <li>• Petrochemical facilities</li>
                  <li>• Oil field service companies</li>
                  <li>• Worker housing developments</li>
                  <li>• Pipeline terminal facilities</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Storm Damage Types Specific to Ector County
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Petroleum-Enhanced Dust Storms</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Odessa's dust storms carry petroleum particulates from refinery operations, creating more aggressive chemical corrosion of roofing materials than typical dust storms. The combination of desert sand and hydrocarbon residues accelerates deterioration of protective coatings and metal components.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Requires specialized cleaning and protective coating applications after each dust storm event
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Refinery Heat Island Storms</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Odessa's concentration of refineries creates the most intense heat islands in the Permian Basin, generating explosive thunderstorm development with hail sizes 25-30% larger than forecast. These storms develop rapidly with minimal warning as thermal columns trigger supercell formation.
                </p>
                <p className="text-sm text-gray-600 italic">
                  UTPB weather research documents local storm enhancement exceeding regional models
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Chemical Process Precipitation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Rain and hail falling through petroleum emissions create more aggressive chemical precipitation that accelerates corrosion of roofing materials. This effect is particularly pronounced in areas downwind of major processing facilities, requiring enhanced protective measures.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Properties within 3 miles of refineries require chemical-resistant roofing materials
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Basin Bowl Wind Amplification</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Odessa's position in the Permian Basin's geological depression creates a natural bowl effect where winds converge and amplify. Storm winds can increase by 20-30% as they funnel into the basin, creating higher than forecast wind damage throughout Ector County.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Enhanced wind ratings required for all roofing installations in basin floor locations
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Recent Ector County Storm Events
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-brand-brown mb-2">May 2024 - Basin Bowl Storm Complex</h3>
                <p className="text-gray-700 mb-2">A severe storm system intensified dramatically as it entered Odessa's basin geography, producing tennis ball-sized hail and 80+ mph winds. The concentration of refinery heat sources amplified the storm beyond forecast predictions, causing widespread damage across UTPB campus and downtown areas.</p>
                <p className="text-sm text-gray-600 italic">Response: 112 emergency calls, 78 roof replacements, specialized UTPB campus protocols</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-brand-brown mb-2">April 2023 - Chemical Dust Storm</h3>
                <p className="text-gray-700 mb-2">A massive dust storm carrying petroleum particulates from refinery areas created aggressive chemical corrosion conditions across Ector County. Properties downwind of processing facilities experienced accelerated roofing material deterioration requiring specialized cleaning and protective treatments.</p>
                <p className="text-sm text-gray-600 italic">Response: 189 chemical damage assessments, enhanced protective coating applications</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">August 2022 - Heat Island Supercell</h3>
                <p className="text-gray-700 mb-2">Extreme heat from refinery operations triggered explosive supercell development with golf ball hail and 75+ mph winds. The storm's rapid intensification caught weather services off-guard, demonstrating the unpredictable nature of petroleum-enhanced weather systems.</p>
                <p className="text-sm text-gray-600 italic">Response: 145 emergency tarping jobs, 89 complete replacements</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Storm Damage Repair FAQs - Odessa, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why are Odessa storms more intense than surrounding areas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Odessa's position in the Permian Basin's geological depression creates a natural bowl effect where storms concentrate and intensify. The concentration of refineries creates more intense heat islands than Midland, generating thermal columns that trigger explosive storm development. UTPB research documents storm enhancement of 25-30% over forecast conditions due to these combined geographical and industrial factors. This makes Odessa one of Texas's most challenging storm environments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What special considerations apply to UTPB campus properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  University of Texas Permian Basin facilities require coordination with university administration, adherence to state building codes, and consideration of academic calendar timing. Emergency response must accommodate student safety protocols and research facility requirements. We maintain current university vendor credentials and understand the unique needs of academic buildings, dormitories, and research facilities. Response times are prioritized during severe weather events that threaten student housing and critical campus infrastructure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does chemical precipitation affect roof damage insurance claims?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Rain and hail falling through petroleum emissions create chemically enhanced precipitation that causes more aggressive damage than typical storm events. Documentation requires chemical analysis and specialized damage assessment techniques. Our experience with Ector County insurance adjusters includes proper documentation of petroleum-influenced storm damage, differentiation from normal weathering, and coordination with environmental assessments when required. Many policies cover chemical enhancement damage when properly documented.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What safety protocols apply to refinery area emergency response?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Emergency response near refinery facilities requires specialized safety protocols including gas monitoring, fire safety procedures, and hazardous area entry permits. Our crews maintain current refinery safety certifications and coordinate with facility security before entering restricted areas. Response includes air quality monitoring, specialized personal protective equipment, and adherence to petroleum industry emergency protocols. We prioritize worker safety while providing rapid storm damage mitigation in industrial zones.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you protect roofs against Odessa's chemical dust storms?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Odessa's dust storms carry petroleum particulates requiring specialized protective strategies. We install chemical-resistant coatings, enhanced flashing seals, and corrosion-resistant materials designed for petroleum environments. Regular maintenance includes chemical cleaning protocols and inspection of protective coatings. Properties within 3 miles of refinery operations receive enhanced protection packages designed for aggressive chemical exposure. Post-storm cleaning removes petroleum residues before they can cause permanent damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes basin bowl geography so challenging for roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Odessa's location in the Permian Basin's geological depression creates a natural funnel effect that amplifies wind speeds and concentrates storm energy. Winds can increase 20-30% as they converge into the basin, while the bowl shape prevents rapid storm movement, creating prolonged severe conditions. This geography combined with petroleum thermal effects creates some of Texas's most unpredictable and intense weather patterns. All roofing installations require enhanced wind ratings to handle amplified conditions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Our Ector County Storm Response Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl border-t-4 border-purple-600 text-center">
                <div className="text-3xl mb-3">🌪️</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Basin-Aware Response</h3>
                <p className="text-sm text-gray-700">Specialized protocols for basin geography and petroleum facility safety requirements with certified crews.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-600 text-center">
                <div className="text-3xl mb-3">🧪</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Chemical Assessment</h3>
                <p className="text-sm text-gray-700">Comprehensive evaluation including petroleum exposure analysis and enhanced corrosion damage documentation.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl border-t-4 border-orange-500 text-center">
                <div className="text-3xl mb-3">🏫</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Campus Coordination</h3>
                <p className="text-sm text-gray-700">UTPB-compliant procedures with university administration coordination and student safety protocols.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500 text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Enhanced Protection</h3>
                <p className="text-sm text-gray-700">Chemical-resistant materials and protective systems designed for Ector County's unique environmental challenges.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Storm Damage Response in Odessa
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107520.70423634634!2d-102.42804595!3d31.84735745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86faf91655f3d8d7%3A0x2e7c3d166a0ac322!2sOdessa%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Odessa, TX Storm Damage Repair Service Area"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections and estimates for Odessa property owners. Expert storm damage repair with honest assessments and fair pricing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
