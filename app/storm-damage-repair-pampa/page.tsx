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
  title: 'Storm Damage Repair Pampa TXService | Free Inspection',
  description: 'storm damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function StormDamageRepairPampaPage() {
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
                      "name": "Pampa",
                      "url": "/storm-damage-repair-pampa/"
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
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              "name": "Pampa",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "What types of storm damage affect Pampa roofs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pampa's location in Gray County creates exposure to multiple storm threats: 6-8 annual hailstorms with baseball-sized hail, High Plains winds exceeding 60 mph, heavy rainstorms causing water intrusion, and flying debris from agricultural areas. Properties near Recreation Park, downtown Pampa, and Pampa Regional Medical Center experience all these weather extremes, requiring comprehensive storm damage assessment after each severe weather event."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly do you respond to storm damage emergencies in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide 24/7 emergency storm damage response throughout Pampa and Gray County. For active leaks and urgent damage near Harvester Stadium, Coronado Healthcare Center, or anywhere in Pampa's ranching community, we typically arrive within 2-4 hours with emergency tarping and temporary repairs. For comprehensive post-storm inspections, we schedule within 24-48 hours."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover storm damage repairs in Pampa's agricultural area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Property insurance policies typically cover sudden storm damage including hail, wind, debris impacts, and water intrusion from storm-damaged roofs. Given Pampa's extreme High Plains weather, insurance companies regularly process claims from Gray County. We document all storm damage with detailed photos, wind speed data, and hail measurements, then work directly with adjusters to maximize coverage for property owners."
                }
              },
              {
                "@type": "Question",
                "name": "Can you repair storm damage on agricultural buildings in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We repair storm damage on all building types in Pampa's ranching community—from barns and agricultural facilities to commercial buildings near downtown Pampa and homes near Woody Guthrie Folk Music Center. Our team understands the unique needs of Gray County's agricultural buildings and works efficiently to minimize disruption to farming and ranching operations."
                }
              },
              {
                "@type": "Question",
                "name": "What storm damage repairs do you handle in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We handle all storm-related repairs for properties near Hobart Street Park, White Deer Land Museum, and throughout Pampa: hail damage shingle replacement, wind-damaged section rebuilding, emergency leak repairs, debris impact damage, blown-off metal panels, damaged flashing, and complete roof replacements when storm damage is severe. Most projects complete in 1-3 days for homes, 3-7 days for commercial properties."
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
                Storm Damage Repair in <span className="text-brand-gold-light">Pampa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Response | Panhandle Weather Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
              Pampa's Storm Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's position as Gray County's seat exposes properties to severe Panhandle storm systems. From Pampa Regional Medical Center and Recreation Park to agricultural properties throughout the county, storm damage from hail, wind, and debris threatens every building. Properties near downtown Pampa, Harvester Stadium, and Coronado Healthcare Center face 6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural debris impacts—creating comprehensive storm damage needing immediate professional response.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've responded to 220+ storm damage emergencies across Pampa's ranching community with 24/7 service. From historic areas near Woody Guthrie Folk Music Center to properties near Hobart Street Park and White Deer Land Museum, we provide emergency tarping, complete damage documentation, insurance claim management, and permanent repairs. We understand Gray County building codes and work efficiently to restore your property. Most owners pay only their deductible when insurance covers storm damage.
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
                  What types of storm damage affect Pampa roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Pampa's location in Gray County creates exposure to multiple storm threats: 6-8 annual hailstorms with baseball-sized hail, High Plains winds exceeding 60 mph, heavy rainstorms causing water intrusion, and flying debris from agricultural areas. Properties near Recreation Park, downtown Pampa, and Pampa Regional Medical Center experience all these weather extremes, requiring comprehensive storm damage assessment after each severe weather event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly do you respond to storm damage emergencies in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide 24/7 emergency storm damage response throughout Pampa and Gray County. For active leaks and urgent damage near Harvester Stadium, Coronado Healthcare Center, or anywhere in Pampa's ranching community, we typically arrive within 2-4 hours with emergency tarping and temporary repairs. For comprehensive post-storm inspections, we schedule within 24-48 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover storm damage repairs in Pampa's agricultural area?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes! Property insurance policies typically cover sudden storm damage including hail, wind, debris impacts, and water intrusion from storm-damaged roofs. Given Pampa's extreme High Plains weather, insurance companies regularly process claims from Gray County. We document all storm damage with detailed photos, wind speed data, and hail measurements, then work directly with adjusters to maximize coverage for property owners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you repair storm damage on agricultural buildings in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. We repair storm damage on all building types in Pampa's ranching community—from barns and agricultural facilities to commercial buildings near downtown Pampa and homes near Woody Guthrie Folk Music Center. Our team understands the unique needs of Gray County's agricultural buildings and works efficiently to minimize disruption to farming and ranching operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What storm damage repairs do you handle in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We handle all storm-related repairs for properties near Hobart Street Park, White Deer Land Museum, and throughout Pampa: hail damage shingle replacement, wind-damaged section rebuilding, emergency leak repairs, debris impact damage, blown-off metal panels, damaged flashing, and complete roof replacements when storm damage is severe. Most projects complete in 1-3 days for homes, 3-7 days for commercial properties.
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
            Free inspections for Pampa property owners. Expert storm damage repair with comprehensive warranties and insurance claim assistance.
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
