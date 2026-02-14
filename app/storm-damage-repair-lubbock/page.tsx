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
  alternates: { canonical: 'https://5starroofingpros.com/storm-damage-repair-lubbock/' },
  title: "Storm Damage Repair Lubbock | 5 Star Commercial Roofing",
  description: "Expert storm damage repair in Lubbock.  for hail, wind, and weather damage. Complete insurance assistance. Call (806) 622-6041",
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
                      "name": "Lubbock",
                      "url": "/storm-damage-repair-lubbock/"
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
                "addressLocality": "Lubbock",
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
              "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas",
              "name": "Lubbock",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage repair in Lubbock.  for hail, wind, and weather damage. Complete insurance assistance."
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
                "name": "What types of storm damage affect roofs in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lubbock roofs face multiple storm threats including hail (7-10 events annually), wind gusts exceeding 70+ mph, heavy rain causing water infiltration, and debris impact from South Plains storms. Spring and early summer bring severe thunderstorms with large hail and straight-line winds. Dust storms reduce visibility and deposit abrasive particles. Winter ice accumulation stresses roof structures. Our comprehensive storm damage assessment identifies all issues including hidden damage to underlayment, decking, and structural components that worsen without prompt repair."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you respond to storm damage emergencies in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide prompt response throughout Lubbock and the South Plains region. Our crews typically arrive within 2-4 hours for urgent tarping and temporary weatherproofing. We prioritize properties with active leaks, missing shingles exposing underlayment, or structural damage. After severe storms affecting neighborhoods near Mackenzie Park, Prairie Dog Town, or the Depot District, we deploy multiple crews to serve affected areas quickly. Emergency tarping prevents secondary water damage while you schedule permanent repairs and process insurance claims."
                }
              },
              {
                "@type": "Question",
                "name": "Does insurance cover all types of storm damage in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Lubbock homeowner policies cover sudden storm damage including hail, wind, and debris impact. Coverage typically includes roof replacement, interior water damage repairs, and temporary housing if needed. Gradual deterioration or maintenance issues aren't covered. We document all storm-related damage with photos, measurements, and detailed reports. Our experience with South Plains insurance adjusters helps differentiate covered storm damage from pre-existing conditions. We handle the entire claims process, ensuring you receive fair compensation for complete restoration."
                }
              },
              {
                "@type": "Question",
                "name": "What areas of Lubbock do you serve for storm damage repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all Lubbock neighborhoods including Tech Terrace, Overton, Melonie Park, and areas surrounding Texas Tech University and the National Ranching Heritage Center. Our service extends throughout the South Plains agricultural region to rural properties and farm buildings. We're familiar with specific challenges in each area, from historic homes near the Buddy Holly Center requiring specialized repairs to modern developments with HOA requirements. Our local presence since 2014 ensures prompt response and expert service across greater Lubbock."
                }
              },
              {
                "@type": "Question",
                "name": "Can storm damage be prevented in Lubbock's severe weather?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While storms can't be prevented, proper preparation minimizes damage. Class 4 impact-resistant shingles reduce hail damage significantly. Proper attic ventilation prevents ice dam formation. Regular inspections identify weak spots before storms hit. Trim trees near the roof to prevent debris impact. Ensure proper flashing around chimneys and vents. Install high-wind rated shingles for South Plains conditions. Our preventive maintenance program includes pre-storm inspections, minor repairs, and recommendations to strengthen your roof against Lubbock's severe weather threats."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-lubbock-45-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Lubbock</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Protecting South Plains Properties Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage repair in Lubbock.  for hail, wind, and weather damage. Complete insurance assistance.
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
              Expert Storm Damage Repair for Lubbock, South Plains
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Lubbock's location in the South Plains creates unique roofing challenges. The area experiences 7-10 hailstorms annually, sustained winds with gusts exceeding 70+ mph, extreme temperature fluctuations, and high elevation and constant South Plains winds. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has provided emergency storm damage repair throughout Lubbock and the South Plains. From properties near Lubbock Lake Landmark to homes surrounding Prairie Dog Town in Mackenzie Park and buildings throughout the Depot District, we respond quickly with . Our experienced crews understand South Plains storm patterns and provide comprehensive damage assessment, emergency weatherproofing, and complete restoration services that protect your property and maximize insurance coverage.
            </p>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Frequently Asked Questions - Storm Damage Repair in Lubbock
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  What types of storm damage affect roofs in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700">
                  Lubbock roofs face multiple storm threats including hail (7-10 events annually), wind gusts exceeding 70+ mph, heavy rain causing water infiltration, and debris impact from South Plains storms. Spring and early summer bring severe thunderstorms with large hail and straight-line winds. Dust storms reduce visibility and deposit abrasive particles. Winter ice accumulation stresses roof structures. Our comprehensive storm damage assessment identifies all issues including hidden damage to underlayment, decking, and structural components that worsen without prompt repair.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How quickly can you respond to storm damage emergencies in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700">
                  We provide prompt response throughout Lubbock and the South Plains region. Our crews typically arrive within 2-4 hours for urgent tarping and temporary weatherproofing. We prioritize properties with active leaks, missing shingles exposing underlayment, or structural damage. After severe storms affecting neighborhoods near Mackenzie Park, Prairie Dog Town, or the Depot District, we deploy multiple crews to serve affected areas quickly. Emergency tarping prevents secondary water damage while you schedule permanent repairs and process insurance claims.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Does insurance cover all types of storm damage in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700">
                  Most Lubbock homeowner policies cover sudden storm damage including hail, wind, and debris impact. Coverage typically includes roof replacement, interior water damage repairs, and temporary housing if needed. Gradual deterioration or maintenance issues aren't covered. We document all storm-related damage with photos, measurements, and detailed reports. Our experience with South Plains insurance adjusters helps differentiate covered storm damage from pre-existing conditions. We handle the entire claims process, ensuring you receive fair compensation for complete restoration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  What areas of Lubbock do you serve for storm damage repair?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700">
                  We serve all Lubbock neighborhoods including Tech Terrace, Overton, Melonie Park, and areas surrounding Texas Tech University and the National Ranching Heritage Center. Our service extends throughout the South Plains agricultural region to rural properties and farm buildings. We're familiar with specific challenges in each area, from historic homes near the Buddy Holly Center requiring specialized repairs to modern developments with HOA requirements. Our local presence since 2014 ensures prompt response and expert service across greater Lubbock.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can storm damage be prevented in Lubbock's severe weather?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700">
                  While storms can't be prevented, proper preparation minimizes damage. Class 4 impact-resistant shingles reduce hail damage significantly. Proper attic ventilation prevents ice dam formation. Regular inspections identify weak spots before storms hit. Trim trees near the roof to prevent debris impact. Ensure proper flashing around chimneys and vents. Install high-wind rated shingles for South Plains conditions. Our preventive maintenance program includes pre-storm inspections, minor repairs, and recommendations to strengthen your roof against Lubbock's severe weather threats.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown text-center">
              Serving Lubbock and the South Plains
            </h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214628.83174374424!2d-101.94953284999999!3d33.577863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12add1019bfb%3A0x3704f77c0633ae02!2sLubbock%2C%20TX!5e0!3m2!1sen!2sus!4v1642535234567!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lubbock, TX Service Area Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections and estimates for Lubbock property owners. Expert storm damage repair with honest assessments and fair pricing.
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
