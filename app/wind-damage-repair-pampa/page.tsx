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
  title: 'Wind Damage Repair Pampa TXService | High Plains Winds',
  description: 'wind damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function WindDamageRepairPampaPage() {
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
                      "name": "Pampa",
                      "url": "/wind-damage-repair-pampa/"
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
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              "name": "Pampa",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert wind damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How severe are High Plains winds in Pampa's agricultural region?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pampa experiences High Plains winds regularly exceeding 60 mph, with gusts often reaching 80+ mph during severe weather. Properties near Recreation Park, Harvester Stadium, and throughout Gray County's open ranching areas face constant wind exposure with minimal windbreaks. This unobstructed agricultural landscape near downtown Pampa, Pampa Regional Medical Center, and Coronado Healthcare Center creates extreme uplift pressures that damage roofs not properly engineered for High Plains conditions."
                }
              },
              {
                "@type": "Question",
                "name": "What wind damage signs should Pampa property owners recognize?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common wind damage in Pampa includes lifted or missing shingles, peeled back metal panels, damaged ridge caps, torn flashing, and exposed underlayment. Properties near Hobart Street Park and White Deer Land Museum should check for creased shingles, loose granules, and nail pops after high wind events. Even minor wind damage can worsen rapidly in Gray County's repeated wind events."
                }
              },
              {
                "@type": "Question",
                "name": "Does insurance cover wind damage in Pampa's high-wind zone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Most property insurance policies cover wind damage when winds exceed certain thresholds, typically 50-60 mph. Given Pampa's documented High Plains winds 60+ mph, wind damage claims are common and expected. We document wind speeds, photograph all damage, and work directly with adjusters to secure full coverage for property owners throughout Gray County."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing materials resist Pampa's constant High Plains winds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For Pampa's extreme wind environment, we recommend Class 4 impact-resistant shingles with enhanced wind ratings (130+ mph), standing seam metal roofing with concealed fasteners, or TPO with reinforced attachment for commercial properties. Buildings near Woody Guthrie Folk Music Center and throughout downtown Pampa require superior fastening systems with 6-8 nails per shingle versus standard 4-nail patterns."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly should wind damage be repaired in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Schedule wind damage repairs immediately. Even small areas of wind damage allow water intrusion during Pampa's frequent rainstorms. Properties throughout Gray County's ranching community face repeated high-wind events, so unrepaired damage worsens quickly. We provide 24/7 emergency response with temporary repairs, then schedule permanent restoration within days to prevent secondary damage."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/wind-damage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Wind Damage Repair in <span className="text-brand-gold-light">Pampa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Service | High Plains Wind Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert wind damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
              Pampa's Wind Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's location in Gray County's open agricultural landscape creates extreme wind exposure. High Plains winds regularly exceed 60 mph with gusts to 80+ mph, damaging roofs from Recreation Park and Pampa Regional Medical Center to ranching properties throughout the county. Properties near downtown Pampa, Harvester Stadium, and Coronado Healthcare Center face constant wind pressure with minimal windbreaks—creating uplift damage, missing shingles, and structural stress requiring specialized High Plains wind damage repair.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've repaired wind damage on 220+ Pampa properties using materials engineered for extreme High Plains conditions. From homes near Woody Guthrie Folk Music Center to buildings near Hobart Street Park and White Deer Land Museum, we install wind-rated roofing systems (130+ mph), enhanced fastening patterns, and impact-resistant materials. We document wind speeds, photograph damage, work directly with insurance adjusters, and complete repairs efficiently. Most property owners pay only their deductible.
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
                  How severe are High Plains winds in Pampa's agricultural region?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Pampa experiences High Plains winds regularly exceeding 60 mph, with gusts often reaching 80+ mph during severe weather. Properties near Recreation Park, Harvester Stadium, and throughout Gray County's open ranching areas face constant wind exposure with minimal windbreaks. This unobstructed agricultural landscape near downtown Pampa, Pampa Regional Medical Center, and Coronado Healthcare Center creates extreme uplift pressures that damage roofs not properly engineered for High Plains conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What wind damage signs should Pampa property owners recognize?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Common wind damage in Pampa includes lifted or missing shingles, peeled back metal panels, damaged ridge caps, torn flashing, and exposed underlayment. Properties near Hobart Street Park and White Deer Land Museum should check for creased shingles, loose granules, and nail pops after high wind events. Even minor wind damage can worsen rapidly in Gray County's repeated wind events.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does insurance cover wind damage in Pampa's high-wind zone?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes! Most property insurance policies cover wind damage when winds exceed certain thresholds, typically 50-60 mph. Given Pampa's documented High Plains winds 60+ mph, wind damage claims are common and expected. We document wind speeds, photograph all damage, and work directly with adjusters to secure full coverage for property owners throughout Gray County.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing materials resist Pampa's constant High Plains winds?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  For Pampa's extreme wind environment, we recommend Class 4 impact-resistant shingles with enhanced wind ratings (130+ mph), standing seam metal roofing with concealed fasteners, or TPO with reinforced attachment for commercial properties. Buildings near Woody Guthrie Folk Music Center and throughout downtown Pampa require superior fastening systems with 6-8 nails per shingle versus standard 4-nail patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly should wind damage be repaired in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Schedule wind damage repairs immediately. Even small areas of wind damage allow water intrusion during Pampa's frequent rainstorms. Properties throughout Gray County's ranching community face repeated high-wind events, so unrepaired damage worsens quickly. We provide 24/7 emergency response with temporary repairs, then schedule permanent restoration within days to prevent secondary damage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Serving Pampa, Texas
            </h2>
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104282.72655892584!2d-101.02071843828125!3d35.53617399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870148b3c6f516d3%3A0x4f1e89dc3c2b7e7d!2sPampa%2C%20TX!5e0!3m2!1sen!2sus!4v1644444444444!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa property owners. Expert wind damage repair with comprehensive warranties and insurance claim assistance.
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
