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
  title: 'Metal Roofing Perryton TX | 5 Star Roofing',
  description: "Expert metal roofing in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function MetalRoofingPerrytonPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Metal Roofing",
                      "url": "/metal-roofing/"
              },
              {
                      "name": "Perryton",
                      "url": "/metal-roofing-perryton/"
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
            "serviceType": "Metal Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
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
              "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
              "name": "Perryton",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert metal roofing in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "Why is metal roofing ideal for Perryton properties?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metal roofing excels in Perryton's Texas Panhandle climate due to superior wind resistance (140+ mph ratings), Class A fire resistance, exceptional hail resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency from reflective coatings. Metal roofs withstand Perryton's 7-9 annual hailstorms, extreme temperature swings, and sustained high winds better than any other roofing material."
                }
              },
              {
                "@type": "Question",
                "name": "How long does metal roofing last in Perryton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metal roofing systems typically last 50-70 years in Perryton when properly installed. Standing seam metal roofs often outlast the buildings they protect. Unlike asphalt shingles that deteriorate in Texas Panhandle UV exposure, metal roofing maintains performance decade after decade. Many metal roofs installed in the 1970s-80s still perform excellently today."
                }
              },
              {
                "@type": "Question",
                "name": "Is metal roofing energy-efficient for Perryton homes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, metal roofing with reflective coatings significantly reduces cooling costs in Perryton's hot climate. Cool-roof metal systems reflect solar radiation and re-emit absorbed heat, keeping buildings 10-15 degrees cooler. Perryton property owners typically see 20-40% reductions in summer cooling expenses. Metal roofing qualifies for energy efficiency tax credits."
                }
              },
              {
                "@type": "Question",
                "name": "How much does metal roofing cost in Perryton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metal roofing in Perryton typically costs $7-15 per square foot installed, depending on metal type, profile, coating, and roof complexity. Standing seam metal is premium ($12-15/sq ft), while R-panel and corrugated options are more economical ($7-10/sq ft). While initial costs exceed asphalt shingles, metal roofing's 50+ year lifespan and low maintenance provide superior long-term value."
                }
              },
              {
                "@type": "Question",
                "name": "Can metal roofing withstand Perryton's hailstorms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, metal roofing with proper gauge thickness and dent-resistant coatings provides excellent hail protection for Perryton's 7-9 annual hailstorms. 26-gauge steel with Kynar coatings resists denting from golf ball-sized hail. Stone-coated metal shingles offer additional impact protection. Many insurance companies offer premium discounts for impact-resistant metal roofing installations."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/metal-roof-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-zinc-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Metal Roofing in <span className="text-brand-gold-light">Perryton</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Premium Metal Systems | 50+ Year Lifespan
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert metal roofing in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={160} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Perryton Projects</div>
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
              Perryton's Metal Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Perryton's location in the Texas Panhandle creates unique roofing challenges. Wheat country agricultural community. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and wheat country agricultural exposure with severe Panhandle hailstorms—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 160+ Perryton properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Perryton property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Grain Industry Metal Roofing for Perryton Agricultural Facilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🌾 Grain Facility Advantages</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Large clear-span capabilities (150+ feet)</li>
                  <li>✓ Heavy load capacity for grain storage</li>
                  <li>✓ Dust-resistant smooth surfaces</li>
                  <li>✓ Easy cleaning and maintenance</li>
                  <li>✓ Cost-effective per square foot</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏭 Agricultural Applications</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Grain elevators and storage</li>
                  <li>✓ Feed processing facilities</li>
                  <li>✓ Equipment storage buildings</li>
                  <li>✓ Loading dock structures</li>
                  <li>✓ Administrative offices</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-green-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Perryton's Grain Industry Roofing Needs</h3>
              <p className="text-lg text-gray-700 mb-4">
                Perryton's position as a major grain handling center requires roofing systems that can span vast storage areas, support heavy loads, resist dust accumulation, and withstand the demanding conditions of grain processing operations.
              </p>
              <p className="text-lg text-gray-700">
                Metal roofing provides the optimal solution with unmatched clear-span capabilities, superior load-bearing capacity, and the durability needed for heavy-duty agricultural operations.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Large-Span Agricultural Building Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Clear Spans</h3>
                <div className="text-3xl font-bold text-brand-gold mb-2">150+</div>
                <div className="text-gray-600">Feet without supports</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Load Capacity</h3>
                <div className="text-3xl font-bold text-brand-gold mb-2">90</div>
                <div className="text-gray-600">PSF live load rating</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Service Life</h3>
                <div className="text-3xl font-bold text-brand-gold mb-2">60+</div>
                <div className="text-gray-600">Years in agricultural use</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Agricultural Building Benefits</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Structural Efficiency</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Maximum usable space</li>
                    <li>• Minimal interior columns</li>
                    <li>• Optimal storage capacity</li>
                    <li>• Equipment access optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Operational Advantages</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Easy maintenance access</li>
                    <li>• Dust accumulation resistance</li>
                    <li>• Chemical cleaning compatibility</li>
                    <li>• Lightning protection integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Metal Roofing FAQs - Perryton, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is metal roofing ideal for Perryton properties?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing excels in Perryton's Texas Panhandle climate due to superior wind resistance (140+ mph ratings), Class A fire resistance, exceptional hail resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency from reflective coatings. Metal roofs withstand Perryton's 7-9 annual hailstorms, extreme temperature swings, and sustained high winds better than any other roofing material.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does metal roofing last in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing systems typically last 50-70 years in Perryton when properly installed. Standing seam metal roofs often outlast the buildings they protect. Unlike asphalt shingles that deteriorate in Texas Panhandle UV exposure, metal roofing maintains performance decade after decade. Many metal roofs installed in the 1970s-80s still perform excellently today.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is metal roofing energy-efficient for Perryton homes?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with reflective coatings significantly reduces cooling costs in Perryton's hot climate. Cool-roof metal systems reflect solar radiation and re-emit absorbed heat, keeping buildings 10-15 degrees cooler. Perryton property owners typically see 20-40% reductions in summer cooling expenses. Metal roofing qualifies for energy efficiency tax credits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does metal roofing cost in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing in Perryton typically costs $7-15 per square foot installed, depending on metal type, profile, coating, and roof complexity. Standing seam metal is premium ($12-15/sq ft), while R-panel and corrugated options are more economical ($7-10/sq ft). While initial costs exceed asphalt shingles, metal roofing's 50+ year lifespan and low maintenance provide superior long-term value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can metal roofing withstand Perryton's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with proper gauge thickness and dent-resistant coatings provides excellent hail protection for Perryton's 7-9 annual hailstorms. 26-gauge steel with Kynar coatings resists denting from golf ball-sized hail. Stone-coated metal shingles offer additional impact protection. Many insurance companies offer premium discounts for impact-resistant metal roofing installations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Amarillo Location - Serving Perryton
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
                title="Perryton, TX Area Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Perryton property owners. Expert metal roofing with comprehensive warranties and insurance claim assistance.
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
