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
  title: "Wind Damage Repair Lubbock | 5 Star Commercial Roofing",
  description: "Wind damage repair in Lubbock. South Plains sustained winds with gusts over 70+ mph. 24/7 emergency service and insurance claim assistance. Call (806) 622-6041",
};

export default function Page() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Wind Damage Repair",
                      "url": "/wind-damage-repair/"
              },
              {
                      "name": "Lubbock",
                      "url": "/wind-damage-repair-lubbock/"
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
            "serviceType": "Wind Damage Roof Repair",
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
            "description": "Wind damage repair in Lubbock. South Plains sustained winds with gusts over 70+ mph. 24/7 emergency service and insurance claim assistance."
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
                              "name": "What wind speeds typically cause roof damage in Lubbock?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sustained winds above 45 mph begin lifting shingle tabs on older roofs. Gusts exceeding 60 mph can remove entire shingles even from relatively new roofs if installation quality was poor. Lubbock regularly experiences wind events in this range, especially during spring and fall frontal passages. High-wind rated installation methods dramatically improve performance."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Will insurance cover wind damage to my Lubbock roof?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most homeowner policies cover wind damage when sustained winds or gusts exceed thresholds specified in your policy—typically 50-60 mph. We help document wind speeds from National Weather Service reports and link damage patterns to specific wind events. Our professional documentation improves claim approval rates significantly."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How do you prevent future wind damage in Lubbock?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "High-wind installation methods are critical in Lubbock. We use 6-nail patterns instead of standard 4-nail, install premium starter strips with enhanced adhesion, seal all flashing with high-grade sealants, and use Class 4 shingles rated for 130 mph winds. These methods reduce wind damage risk by 80-90% compared to standard installations."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How quickly can you repair wind damage in Lubbock?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We provide emergency tarping and temporary repairs within hours for actively leaking roofs. Full repair or replacement typically occurs 2-4 weeks after claim approval, depending on material availability and scheduling. During widespread wind events affecting the entire Texas Panhandle, we work extended hours to accommodate emergency needs."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Should I get a wind damage inspection after every windstorm in Lubbock?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Inspect after wind events with sustained winds above 45 mph or gusts exceeding 60 mph. Even if you see no obvious damage from the ground, lifted shingles and flashing issues may exist. We offer free inspections that identify problems early before they cause leaks. Early detection prevents minor wind damage from becoming major water damage."
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Wind Damage Repair in <span className="text-brand-gold-light">Lubbock</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Protecting South Plains Properties Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Wind damage repair in Lubbock. South Plains sustained winds with gusts over 70+ mph. 24/7 emergency service and insurance claim assistance.
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
              Expert Wind Damage Repair for Lubbock, South Plains
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Lubbock's location in the South Plains creates unique roofing challenges. The area experiences 7-10 hailstorms annually, sustained winds with gusts exceeding 70+ mph, extreme temperature fluctuations, and high elevation and constant South Plains winds. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected Lubbock properties with premium materials and expert installation. We understand South Plains weather patterns, local building codes, and HOA requirements in Tech Terrace, Overton, and Melonie Park. Our installations meet or exceed manufacturer specifications, preserving full warranty coverage while delivering long-term performance.
            </p>
          </section>
        </FadeIn>

        
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving Lubbock, TX</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107097.95394183475!2d-101.8552!3d33.5779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12add7c5e66f%3A0x388a148f3840234e!2sLubbock%2C%20TX!5e0!3m2!1sen!2sus!4v1736541567890!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections and estimates for Lubbock property owners. Expert wind damage repair with honest assessments and fair pricing.
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
