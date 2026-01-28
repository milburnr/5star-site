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
                                        "text": "We maintain 24/7 emergency teams throughout the Texas Panhandle including Canyon with 2-4 hour response times for critical situations. During major storm events affecting the region, we mobilize additional crews to handle high call volumes. Emergency tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Will insurance cover my storm damage repairs in Canyon?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes emergency mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Should I tarp my roof myself or wait for professionals in Canyon?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Never climb on a storm-damaged roof—it's extremely dangerous with unstable footing, electrical hazards, and severe weather conditions. Improper tarping can cause additional damage and complicate insurance claims. Call our 24/7 emergency line immediately—we'll dispatch crews for professional emergency tarping that's properly documented for insurance. Our service prevents interior damage while keeping you safe."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How long does storm damage roof replacement take in Canyon?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Emergency mitigation (tarping/temporary repairs) happens same-day or next-day. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting Canyon, timelines may extend due to high demand—early claims get priority scheduling."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "What should I do immediately after storm damage in Canyon?",
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
                Storm Damage Repair in <span className="text-brand-gold-light">Canyon</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Response | Panhandle Weather Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
              Canyon's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Canyon's location in the Texas Panhandle creates unique roofing challenges. Near Palo Duro Canyon, home to West Texas A&M University. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and unique weather patterns near Palo Duro Canyon with High Plains wind exposure—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 350+ Canyon properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Canyon property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
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
                  We maintain 24/7 emergency teams throughout the Texas Panhandle including Canyon with 2-4 hour response times for critical situations. During major storm events affecting the region, we mobilize additional crews to handle high call volumes. Emergency tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover my storm damage repairs in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes emergency mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I tarp my roof myself or wait for professionals in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Never climb on a storm-damaged roof—it's extremely dangerous with unstable footing, electrical hazards, and severe weather conditions. Improper tarping can cause additional damage and complicate insurance claims. Call our 24/7 emergency line immediately—we'll dispatch crews for professional emergency tarping that's properly documented for insurance. Our service prevents interior damage while keeping you safe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does storm damage roof replacement take in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Emergency mitigation (tarping/temporary repairs) happens same-day or next-day. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting Canyon, timelines may extend due to high demand—early claims get priority scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What should I do immediately after storm damage in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  (1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for emergency inspection and mitigation—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from emergency response through final restoration.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
