import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Odessa TX | 5 Star Roofing',
  description: "Professional commercial roofing in Odessa TX. TPO, EPDM, and metal roofing systems for businesses. 24/7 emergency service. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Odessa", url: "/commercial-roofing-odessa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/commercial-roofing-odessa/#localbusiness",
            "name": "5 Star Commercial Roofing - Odessa Commercial Roofing",
            "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
            "telephone": "(806) 622-6041",
            "email": "info@5starroofingpros.com",
            "priceRange": "$$",
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
            "url": "https://5starroofingpros.com/commercial-roofing-odessa/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
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
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            "description": "Professional commercial roofing in Odessa TX. TPO, EPDM, and metal roofing systems for businesses. 24/7 emergency service. Free inspections. Call (806) 622-6041",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{"@type":"Question","name":"How much does commercial roof replacement cost in Odessa?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs vary by building size, roof type, and complexity. Typical TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per square foot. EPDM is most budget-friendly at $3-$6 per square foot. We provide free detailed estimates with transparent pricing and financing options for qualified businesses."}},{"@type":"Question","name":"Can you work after hours to minimize business disruption?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule commercial installations during evenings, weekends, or planned closure periods to minimize operational impact. Many Odessa businesses prefer after-hours work for retail locations or facilities that cannot shut down during business hours."}},{"@type":"Question","name":"What makes TPO roofing ideal for Odessa's commercial buildings?","acceptedAnswer":{"@type":"Answer","text":"TPO's white reflective membrane is Energy Star rated and dramatically reduces cooling costs. The heat-welded seams create watertight bonds that withstand high winds and hail. TPO offers excellent durability (15-25 year warranties) at a competitive price point."}}]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/CommercialRoofing.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Commercial Roofing in <span className="text-brand-gold-light">Odessa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Service for Texas Businesses
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert commercial roofing for Odessa businesses. TPO, EPDM, and metal roofing systems engineered for harsh weather. Minimize operational disruption with our after-hours installation. 24/7 emergency response available.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={10} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
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
              Odessa's Commercial Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Expert commercial roofing for Odessa businesses. TPO, EPDM, and metal roofing systems engineered for harsh weather. Minimize operational disruption with our after-hours installation. 24/7 emergency response available.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've served Odessa with expert commercial roofing. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.
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
                  How much does commercial roof replacement cost in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Commercial roofing costs vary by building size, roof type, and complexity. Typical TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per square foot. EPDM is most budget-friendly at $3-$6 per square foot. We provide free detailed estimates with transparent pricing and financing options for qualified businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work after hours to minimize business disruption?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We schedule commercial installations during evenings, weekends, or planned closure periods to minimize operational impact. Many Odessa businesses prefer after-hours work for retail locations or facilities that cannot shut down during business hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes TPO roofing ideal for Odessa's commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  TPO's white reflective membrane is Energy Star rated and dramatically reduces cooling costs. The heat-welded seams create watertight bonds that withstand high winds and hail. TPO offers excellent durability (15-25 year warranties) at a competitive price point.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Odessa property owners. Expert commercial roofing with comprehensive warranties.
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
