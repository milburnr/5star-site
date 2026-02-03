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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas TPO Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.8656, "longitude": -101.973 },
        "url": "https://5starroofingpros.com/tpo-roofing-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert tpo roofing services in Dumas, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              Why Dumas Agricultural & Industrial Businesses Choose TPO
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🌾 Agricultural Applications</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Grain storage facilities</li>
                  <li>✓ Equipment buildings and barns</li>
                  <li>✓ Feed mills and processing plants</li>
                  <li>✓ Agricultural supply warehouses</li>
                  <li>✓ Administrative farm offices</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏭 Industrial Solutions</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Manufacturing and processing facilities</li>
                  <li>✓ Chemical resistant membranes</li>
                  <li>✓ High-temperature performance</li>
                  <li>✓ Easy maintenance and cleaning</li>
                  <li>✓ Long-term durability guarantees</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Dumas's Agricultural Climate Challenges</h3>
              <p className="text-lg text-gray-700 mb-4">
                As a major agricultural center in the Texas Panhandle, Dumas faces unique roofing challenges from dust, chemicals, extreme temperature variations, and frequent severe weather. Agricultural facilities require roofing systems that can withstand chemical exposure from fertilizers and pesticides while maintaining energy efficiency.
              </p>
              <p className="text-lg text-gray-700">
                TPO roofing provides exceptional chemical resistance, easy cleaning capabilities, and excellent thermal performance - making it ideal for Dumas's agricultural and industrial applications.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Membrane Options for Dumas Commercial Properties
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Standard TPO (45-60 mil)</h3>
                <p className="text-gray-700 mb-3">
                  Cost-effective solution for basic commercial applications with moderate weather exposure.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Excellent for office buildings</li>
                  <li>• Good wind resistance</li>
                  <li>• 15-20 year warranty available</li>
                  <li>• Budget-friendly installation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Reinforced TPO (60-80 mil)</h3>
                <p className="text-gray-700 mb-3">
                  Enhanced thickness for superior hail resistance and extended lifespan in Dumas's challenging climate.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Superior hail impact resistance</li>
                  <li>• Enhanced puncture resistance</li>
                  <li>• 20-25 year warranty available</li>
                  <li>• Ideal for agricultural facilities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Premium TPO (80+ mil)</h3>
                <p className="text-gray-700 mb-3">
                  Maximum performance for critical applications requiring ultimate durability and chemical resistance.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Maximum chemical resistance</li>
                  <li>• Ultimate weather protection</li>
                  <li>• 25-30 year warranty available</li>
                  <li>• Perfect for industrial facilities</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Agricultural Facility Roofing Considerations
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-green-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Chemical Resistance & Durability</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Chemical Exposure Protection</h4>
                  <p className="text-gray-700 mb-4">
                    Agricultural operations often involve exposure to fertilizers, pesticides, and other chemicals. TPO membranes provide excellent resistance to chemical degradation.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Resistant to fertilizer runoff</li>
                    <li>• Withstands pesticide exposure</li>
                    <li>• Easy cleaning and maintenance</li>
                    <li>• No chemical absorption into membrane</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Agricultural Building Requirements</h4>
                  <p className="text-gray-700 mb-4">
                    Farm buildings require specialized roofing considerations for optimal performance and code compliance in agricultural applications.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Large span capability</li>
                    <li>• Ventilation system integration</li>
                    <li>• Equipment mounting provisions</li>
                    <li>• Drainage for chemical washdown</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Energy Efficiency for Dumas Agricultural Buildings
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Cost Savings for Agricultural Operations</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-brand-gold mb-2">35%</div>
                  <div className="font-semibold mb-1">Cooling Reduction</div>
                  <div className="text-gray-600 text-sm">Summer energy savings for grain storage</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-brand-gold mb-2">$12K</div>
                  <div className="font-semibold mb-1">Annual Savings</div>
                  <div className="text-gray-600 text-sm">Processing facility energy costs</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-brand-gold mb-2">18°F</div>
                  <div className="font-semibold mb-1">Temperature Drop</div>
                  <div className="text-gray-600 text-sm">Interior temperature reduction</div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3">Equipment Protection</h4>
                <p className="text-gray-700 mb-3">
                  Cooler building temperatures extend equipment life and reduce maintenance costs for sensitive agricultural machinery and storage systems.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Reduced HVAC strain</li>
                  <li>• Extended equipment lifespan</li>
                  <li>• Lower maintenance costs</li>
                  <li>• Improved product storage conditions</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3">Environmental Benefits</h4>
                <p className="text-gray-700 mb-3">
                  Energy-efficient roofing reduces environmental impact while qualifying for agricultural tax incentives and sustainability programs.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Reduced carbon footprint</li>
                  <li>• USDA sustainability compliance</li>
                  <li>• Energy tax credit eligibility</li>
                  <li>• Improved farm sustainability ratings</li>
                </ul>
              </div>
            </div>
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
