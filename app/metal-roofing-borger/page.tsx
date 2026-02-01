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
  title: "Metal Roofing Borger TX | Standing Seam | 50+ Year Lifespan",
  description: "Expert metal roofing in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function MetalRoofingBorgerPage() {
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
                      "name": "Borger",
                      "url": "/metal-roofing-borger/"
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
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Borger,_Texas",
              "name": "Borger",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert metal roofing in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "Why is metal roofing ideal for Borger properties?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metal roofing excels in Borger's Texas Panhandle climate due to superior wind resistance (140+ mph ratings), Class A fire resistance, exceptional hail resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency from reflective coatings. Metal roofs withstand Borger's 7-9 annual hailstorms, extreme temperature swings, and sustained high winds better than any other roofing material."
                }
              },
              {
                "@type": "Question",
                "name": "How long does metal roofing last in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metal roofing systems typically last 50-70 years in Borger when properly installed. Standing seam metal roofs often outlast the buildings they protect. Unlike asphalt shingles that deteriorate in Texas Panhandle UV exposure, metal roofing maintains performance decade after decade. Many metal roofs installed in the 1970s-80s still perform excellently today."
                }
              },
              {
                "@type": "Question",
                "name": "Is metal roofing energy-efficient for Borger homes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, metal roofing with reflective coatings significantly reduces cooling costs in Borger's hot climate. Cool-roof metal systems reflect solar radiation and re-emit absorbed heat, keeping buildings 10-15 degrees cooler. Borger property owners typically see 20-40% reductions in summer cooling expenses. Metal roofing qualifies for energy efficiency tax credits."
                }
              },
              {
                "@type": "Question",
                "name": "How much does metal roofing cost in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metal roofing in Borger typically costs $7-15 per square foot installed, depending on metal type, profile, coating, and roof complexity. Standing seam metal is premium ($12-15/sq ft), while R-panel and corrugated options are more economical ($7-10/sq ft). While initial costs exceed asphalt shingles, metal roofing's 50+ year lifespan and low maintenance provide superior long-term value."
                }
              },
              {
                "@type": "Question",
                "name": "Can metal roofing withstand Borger's hailstorms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, metal roofing with proper gauge thickness and dent-resistant coatings provides excellent hail protection for Borger's 7-9 annual hailstorms. 26-gauge steel with Kynar coatings resists denting from golf ball-sized hail. Stone-coated metal shingles offer additional impact protection. Many insurance companies offer premium discounts for impact-resistant metal roofing installations."
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
                Metal Roofing in <span className="text-brand-gold-light">Borger</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Premium Metal Systems | 50+ Year Lifespan
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert metal roofing in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                <div className="text-brand-brown font-semibold text-lg">Borger Projects</div>
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
              Borger's Metal Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Borger's location in the Texas Panhandle creates unique roofing challenges. Industrial petrochemical center. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and industrial environment with petrochemical operations and Panhandle weather extremes—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 180+ Borger properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Borger property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Borger Properties Choose Metal Roofing
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏭 Industrial Strength</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ 50+ year lifespan in Panhandle weather</li>
                  <li>✓ Superior wind resistance (150+ mph)</li>
                  <li>✓ Class A fire rating for industrial zones</li>
                  <li>✓ Chemical resistance for petrochemical environment</li>
                  <li>✓ Minimal maintenance requirements</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">💼 Commercial Applications</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Industrial facilities and plants</li>
                  <li>✓ Office buildings and complexes</li>
                  <li>✓ Warehouses and distribution centers</li>
                  <li>✓ Municipal and government buildings</li>
                  <li>✓ Retail and commercial structures</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Borger's Industrial Environment Demands</h3>
              <p className="text-lg text-gray-700 mb-4">
                Borger's petrochemical operations create a challenging environment for roofing materials. Chemical emissions, extreme temperatures, and industrial operations require roofing systems that can withstand harsh conditions while providing superior protection.
              </p>
              <p className="text-lg text-gray-700">
                Metal roofing excels in these demanding conditions with unmatched durability, chemical resistance, and the ability to protect critical industrial infrastructure for decades.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Metal Roofing Systems for Borger Industrial Properties
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Standing Seam</h3>
                <p className="text-gray-700 mb-3">
                  Concealed fastener system perfect for industrial applications requiring maximum weather protection.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• No exposed fasteners</li>
                  <li>• Superior wind resistance</li>
                  <li>• Thermal expansion accommodation</li>
                  <li>• Clean, professional appearance</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Through-Fastened</h3>
                <p className="text-gray-700 mb-3">
                  Cost-effective solution for large industrial buildings where value and performance are priorities.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Lower initial cost</li>
                  <li>• Proven track record</li>
                  <li>• Easy installation</li>
                  <li>• Wide panel options</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Structural Systems</h3>
                <p className="text-gray-700 mb-3">
                  Heavy-duty systems for maximum spans and ultimate durability in harsh industrial environments.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 30+ foot clear spans</li>
                  <li>• Maximum load capacity</li>
                  <li>• Industrial-grade materials</li>
                  <li>• Custom engineering available</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Superior Weather Protection for Borger
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Extreme Weather Performance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Hail Resistance</h4>
                  <p className="text-gray-700 mb-4">
                    Metal roofing provides exceptional hail protection with UL 2218 Class 4 impact resistance, easily deflecting Borger's frequent hailstorms.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Dent-resistant steel formulations</li>
                    <li>• Impact-tested to 2" hail stones</li>
                    <li>• Insurance premium discounts available</li>
                    <li>• No cracking or splitting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Wind Resistance</h4>
                  <p className="text-gray-700 mb-4">
                    Engineered for Texas Panhandle winds exceeding 100 mph with proper installation and structural design.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Wind uplift ratings up to 150+ mph</li>
                    <li>• Structural panel interlocking</li>
                    <li>• Enhanced edge and corner protection</li>
                    <li>• Building code compliance guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow border text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">50+</div>
                <div className="font-semibold mb-1">Years Lifespan</div>
                <div className="text-gray-600 text-sm">In Panhandle conditions</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">150+</div>
                <div className="font-semibold mb-1">MPH Wind Rating</div>
                <div className="text-gray-600 text-sm">Maximum protection</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">Class A</div>
                <div className="font-semibold mb-1">Fire Rating</div>
                <div className="text-gray-600 text-sm">Industrial safety</div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Energy Efficiency & Environmental Benefits
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Cool Metal Technology</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced reflective coatings reduce surface temperatures by up to 50°F, dramatically cutting cooling costs for Borger's industrial facilities.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• ENERGY STAR certified options</li>
                    <li>• Solar reflectance up to 70%</li>
                    <li>• Thermal emittance ratings 0.85+</li>
                    <li>• Meets cool roof requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Sustainability Advantages</h3>
                  <p className="text-gray-700 mb-4">
                    Metal roofing is 100% recyclable and often contains significant recycled content, supporting Borger's industrial sustainability goals.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 25-95% recycled content available</li>
                    <li>• 100% recyclable at end of life</li>
                    <li>• LEED certification points</li>
                    <li>• Reduced carbon footprint</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Metal Roofing FAQs - Borger, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is metal roofing ideal for Borger properties?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing excels in Borger's Texas Panhandle climate due to superior wind resistance (140+ mph ratings), Class A fire resistance, exceptional hail resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency from reflective coatings. Metal roofs withstand Borger's 7-9 annual hailstorms, extreme temperature swings, and sustained high winds better than any other roofing material.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does metal roofing last in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing systems typically last 50-70 years in Borger when properly installed. Standing seam metal roofs often outlast the buildings they protect. Unlike asphalt shingles that deteriorate in Texas Panhandle UV exposure, metal roofing maintains performance decade after decade. Many metal roofs installed in the 1970s-80s still perform excellently today.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is metal roofing energy-efficient for Borger homes?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with reflective coatings significantly reduces cooling costs in Borger's hot climate. Cool-roof metal systems reflect solar radiation and re-emit absorbed heat, keeping buildings 10-15 degrees cooler. Borger property owners typically see 20-40% reductions in summer cooling expenses. Metal roofing qualifies for energy efficiency tax credits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does metal roofing cost in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing in Borger typically costs $7-15 per square foot installed, depending on metal type, profile, coating, and roof complexity. Standing seam metal is premium ($12-15/sq ft), while R-panel and corrugated options are more economical ($7-10/sq ft). While initial costs exceed asphalt shingles, metal roofing's 50+ year lifespan and low maintenance provide superior long-term value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can metal roofing withstand Borger's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with proper gauge thickness and dent-resistant coatings provides excellent hail protection for Borger's 7-9 annual hailstorms. 26-gauge steel with Kynar coatings resists denting from golf ball-sized hail. Stone-coated metal shingles offer additional impact protection. Many insurance companies offer premium discounts for impact-resistant metal roofing installations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Amarillo Location - Serving Borger
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
                title="Borger, TX Area Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Borger property owners. Expert metal roofing with comprehensive warranties and insurance claim assistance.
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
