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
  title: "TPO Roofing Dumas TX | Commercial Systems | Energy Efficient",
  description: "Expert tpo roofing in Dumas TX. Texas Panhandle experiences 7-9 hailstorms annually. Agricultural center. Free inspections. Call (806) 622-6041",
};

export default function TpoRoofingDumasPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "TPO Roofing",
                      "url": "/tpo-roofing/"
              },
              {
                      "name": "Dumas",
                      "url": "/tpo-roofing-dumas/"
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
            "serviceType": "TPO Roofing",
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
              }
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              "name": "Dumas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert TPO roofing in Dumas TX. Texas Panhandle agricultural center experiences 7-9 hailstorms annually. Energy-efficient commercial systems."
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
                "name": "Why is TPO roofing ideal for Dumas commercial buildings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TPO roofing excels in Dumas's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 7-9 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Dumas's severe weather and agricultural environment."
                }
              },
              {
                "@type": "Question",
                "name": "How long does TPO roofing last in Dumas's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality TPO roofing systems typically last 20-30 years in Dumas when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and agricultural environment can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan."
                }
              },
              {
                "@type": "Question",
                "name": "Is TPO roofing energy-efficient for Dumas businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, TPO's white reflective surface significantly reduces cooling costs in Dumas's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Dumas commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates."
                }
              },
              {
                "@type": "Question",
                "name": "How much does TPO roofing cost in Dumas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TPO roofing in Dumas typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Dumas commercial properties."
                }
              },
              {
                "@type": "Question",
                "name": "Can TPO roofing withstand Dumas's hailstorms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Dumas's 7-9 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/tpo-roof-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Tpo Roofing in <span className="text-brand-gold-light">Dumas</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Energy-Efficient TPO Systems | Commercial Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert tpo roofing in Dumas TX. Texas Panhandle experiences 7-9 hailstorms annually. Agricultural center. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={180} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Dumas Projects</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
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
              Dumas's Tpo Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas's location in the Texas Panhandle creates unique roofing challenges. Industrial petrochemical center. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural environment with petrochemical operations and Panhandle weather extremes—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 180+ Dumas properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Dumas agricultural property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Roofing FAQs - Dumas, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is TPO roofing ideal for Dumas commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing excels in Dumas's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 7-9 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Dumas's severe weather and agricultural environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does TPO roofing last in Dumas's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality TPO roofing systems typically last 20-30 years in Dumas when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and agricultural environment can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is TPO roofing energy-efficient for Dumas businesses?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, TPO's white reflective surface significantly reduces cooling costs in Dumas's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Dumas commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does TPO roofing cost in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing in Dumas typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Dumas commercial properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can TPO roofing withstand Dumas's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Dumas's 7-9 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Amarillo Location
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amarillo, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Dumas agricultural property owners. Expert tpo roofing with comprehensive warranties and insurance claim assistance.
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
