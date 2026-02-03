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
  title: 'TPO Roofing Perryton TX | 5 Star Roofing',
  description: "Expert tpo roofing in Perryton TX. Texas Panhandle experiences 7-9 hailstorms annually. Wheat country. Free inspections. Call (806) 622-6041",
};

export default function TpoRoofingPerrytonPage() {
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
                      "name": "Perryton",
                      "url": "/tpo-roofing-perryton/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-perryton/#localbusiness",
        "name": "5 Star Commercial Roofing - Perryton TPO Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 36.4, "longitude": -100.8028 },
        "url": "https://5starroofingpros.com/tpo-roofing-perryton/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas", "name": "Perryton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert tpo roofing services in Perryton, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


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
            "description": "Expert TPO roofing in Perryton TX. Texas Panhandle wheat country experiences 7-9 hailstorms annually. Energy-efficient commercial systems."
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
                "name": "Why is TPO roofing ideal for Perryton commercial buildings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TPO roofing excels in Perryton's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 7-9 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Perryton's severe weather and agricultural/wheat environment."
                }
              },
              {
                "@type": "Question",
                "name": "How long does TPO roofing last in Perryton's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality TPO roofing systems typically last 20-30 years in Perryton when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and agricultural/wheat environment can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan."
                }
              },
              {
                "@type": "Question",
                "name": "Is TPO roofing energy-efficient for Perryton businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, TPO's white reflective surface significantly reduces cooling costs in Perryton's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Perryton commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates."
                }
              },
              {
                "@type": "Question",
                "name": "How much does TPO roofing cost in Perryton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TPO roofing in Perryton typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Perryton commercial properties."
                }
              },
              {
                "@type": "Question",
                "name": "Can TPO roofing withstand Perryton's hailstorms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Perryton's 7-9 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations."
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
                Tpo Roofing in <span className="text-brand-gold-light">Perryton</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Energy-Efficient TPO Systems | Commercial Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert tpo roofing in Perryton TX. Texas Panhandle experiences 7-9 hailstorms annually. Wheat country. Free inspections. Call (806) 622-6041
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
                <div className="text-brand-brown font-semibold text-lg">Perryton Projects</div>
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
              Perryton's Tpo Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Perryton's location in the Texas Panhandle creates unique roofing challenges. Industrial petrochemical center. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural/wheat environment with petrochemical operations and Panhandle weather extremes—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 180+ Perryton properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Perryton wheat farming property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Perryton Agricultural & Grain Facilities Choose TPO
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🌾 Grain Industry Solutions</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Grain elevators and storage</li>
                  <li>✓ Feed mills and processing</li>
                  <li>✓ Agricultural equipment buildings</li>
                  <li>✓ Loading and shipping facilities</li>
                  <li>✓ Administrative offices</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">💪 Agricultural Performance</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Dust and debris resistance</li>
                  <li>✓ Chemical exposure protection</li>
                  <li>✓ Large span capabilities</li>
                  <li>✓ Easy maintenance and cleaning</li>
                  <li>✓ Superior weathering resistance</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Perryton's Agricultural Climate Considerations</h3>
              <p className="text-lg text-gray-700 mb-4">
                As a major grain and agricultural center, Perryton's commercial buildings face unique challenges from dust accumulation, chemical exposure from fertilizers and pesticides, and the need for large-span roofing over grain storage and processing facilities.
              </p>
              <p className="text-lg text-gray-700">
                TPO roofing provides the perfect solution with its smooth, cleanable surface, chemical resistance, and ability to span large areas without structural supports - ideal for Perryton's agricultural operations.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Grain Facility TPO Installation Considerations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Dust Management</h3>
                <p className="text-gray-700 mb-3">
                  TPO's smooth surface prevents dust accumulation and allows for easy cleaning - critical for grain facility operations.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Smooth, non-porous surface</li>
                  <li>• Easy pressure washing</li>
                  <li>• No dust-trapping textures</li>
                  <li>• Maintains reflectivity</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Large Span Capability</h3>
                <p className="text-gray-700 mb-3">
                  TPO systems can span large grain storage areas without interior supports, maximizing usable space.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Single membrane installation</li>
                  <li>• Minimal seam requirements</li>
                  <li>• Structural efficiency</li>
                  <li>• Cost-effective coverage</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Chemical Resistance</h3>
                <p className="text-gray-700 mb-3">
                  Protection against agricultural chemicals including fertilizers, pesticides, and cleaning agents.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Fertilizer runoff protection</li>
                  <li>• Pesticide resistance</li>
                  <li>• Cleaning agent tolerance</li>
                  <li>• Long-term stability</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Energy Efficiency for Perryton Agricultural Buildings
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Temperature Control Benefits</h3>
                  <p className="text-gray-700 mb-4">
                    Proper temperature control is critical for grain storage quality and equipment performance in Perryton's agricultural facilities.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Grain quality preservation</li>
                    <li>• Moisture control improvement</li>
                    <li>• Equipment protection</li>
                    <li>• Reduced spoilage losses</li>
                    <li>• Worker comfort enhancement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Cost Savings Examples</h3>
                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div className="p-3 bg-green-50 rounded">
                      <div className="text-2xl font-bold text-brand-gold">30%</div>
                      <div className="text-sm">Cooling Cost Reduction</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-brand-gold">$15K</div>
                      <div className="text-sm">Annual Energy Savings</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Based on 50,000 sq ft grain facility with TPO cool roof installation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Roofing FAQs - Perryton, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is TPO roofing ideal for Perryton commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing excels in Perryton's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 7-9 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Perryton's severe weather and agricultural/wheat environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does TPO roofing last in Perryton's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality TPO roofing systems typically last 20-30 years in Perryton when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and agricultural/wheat environment can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is TPO roofing energy-efficient for Perryton businesses?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, TPO's white reflective surface significantly reduces cooling costs in Perryton's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Perryton commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does TPO roofing cost in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing in Perryton typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Perryton commercial properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can TPO roofing withstand Perryton's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Perryton's 7-9 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Perryton wheat farming property owners. Expert tpo roofing with comprehensive warranties and insurance claim assistance.
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
