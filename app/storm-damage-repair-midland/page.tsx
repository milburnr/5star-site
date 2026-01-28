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
  title: "Storm Damage Repair Midland | 5 Star Commercial Roofing",
  description: "Expert storm damage repair in Midland. 24/7 emergency service for hail, wind, and weather damage. Complete insurance assistance. Call (806) 622-6041",
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
                      "name": "Midland",
                      "url": "/storm-damage-repair-midland/"
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
              "telephone": "+18066226041",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2909 S Western St",
                "addressLocality": "Midland",
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
              "@id": "https://en.wikipedia.org/wiki/Midland,_Texas",
              "name": "Midland",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage repair in Midland. 24/7 emergency service for hail, wind, and weather damage. Complete insurance assistance."
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
                "name": "What types of storm damage affect Midland roofs most often?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Midland roofs face hail damage (6-8 storms annually), high winds exceeding 65+ mph, intense UV degradation, and temperature extremes. Permian Basin storms can combine multiple factors - hail, wind, and heavy rain - causing compound damage that requires comprehensive assessment and repair."
                }
              },
              {
                "@type": "Question",
                "name": "Should I tarp my Midland roof after storm damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, emergency tarping prevents further water damage after storms. We provide 24/7 emergency tarping service in Midland to protect your property until permanent repairs are completed. Most insurance policies cover emergency mitigation costs, and prompt action prevents mold and interior damage."
                }
              },
              {
                "@type": "Question",
                "name": "How do Permian Basin storms differ from other Texas regions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Permian Basin storms are characterized by extreme intensity, large hail, sustained high winds, and rapid development. The open terrain around Midland allows storms to build strength, while petroleum industry infrastructure requires special considerations. Our crews understand these unique regional challenges."
                }
              },
              {
                "@type": "Question",
                "name": "Can you repair both residential and commercial storm damage in Midland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We handle storm damage for Midland homes, businesses, and oil & gas facilities. Our experience spans from residential neighborhoods near downtown Midland to large commercial properties at Midland International Air & Space Port and industrial facilities throughout the Permian Basin."
                }
              },
              {
                "@type": "Question",
                "name": "What documentation do I need for a Midland storm damage insurance claim?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive documentation including photos, measurements, weather reports from local Midland/Permian Basin storms, and detailed damage assessments. Our reports meet insurance requirements and ensure you receive proper compensation for all storm-related damage."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/storm-damage-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Midland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Protecting Permian Basin Properties Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage repair in Midland. 24/7 emergency service for hail, wind, and weather damage. Complete insurance assistance.
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
              Expert Storm Damage Repair for Midland, Permian Basin
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Midland's location in the Permian Basin creates unique roofing challenges. The area experiences 6-8 hailstorms annually, sustained winds with gusts exceeding 65+ mph, extreme temperature fluctuations, and extreme UV exposure and petroleum industry infrastructure. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected Midland properties with premium materials and expert installation. Serving properties from the Museum of the Southwest to Centennial Park, from Tall City downtown buildings to residential areas near Scharbauer Sports Complex, we respond immediately after Permian Basin storms. Our installations meet or exceed manufacturer specifications, preserving full warranty coverage while delivering long-term performance.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Storm Damage Repair FAQs - Midland, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  What types of storm damage affect Midland roofs most often?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Midland roofs face hail damage (6-8 storms annually), high winds exceeding 65+ mph, intense UV degradation, and temperature extremes. Permian Basin storms can combine multiple factors - hail, wind, and heavy rain - causing compound damage that requires comprehensive assessment and repair.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Should I tarp my Midland roof after storm damage?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, emergency tarping prevents further water damage after storms. We provide 24/7 emergency tarping service in Midland to protect your property until permanent repairs are completed. Most insurance policies cover emergency mitigation costs, and prompt action prevents mold and interior damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How do Permian Basin storms differ from other Texas regions?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Permian Basin storms are characterized by extreme intensity, large hail, sustained high winds, and rapid development. The open terrain around Midland allows storms to build strength, while petroleum industry infrastructure requires special considerations. Our crews understand these unique regional challenges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can you repair both residential and commercial storm damage in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Absolutely. We handle storm damage for Midland homes, businesses, and oil & gas facilities. Our experience spans from residential neighborhoods near downtown Midland to large commercial properties at Midland International Air & Space Port and industrial facilities throughout the Permian Basin.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  What documentation do I need for a Midland storm damage insurance claim?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We provide comprehensive documentation including photos, measurements, weather reports from local Midland/Permian Basin storms, and detailed damage assessments. Our reports meet insurance requirements and ensure you receive proper compensation for all storm-related damage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              24/7 Storm Response in Midland
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107520.70423634634!2d-102.17804595!3d31.99735745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe95d928b1d87b%3A0x85974033d5072ced!2sMidland%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Midland, TX Storm Damage Repair Service Area"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections and estimates for Midland property owners. Expert storm damage repair with honest assessments and fair pricing.
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
