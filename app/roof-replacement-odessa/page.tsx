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
  title: 'Roof Replacement Odessa TX | 5 Star Roofing',
  description: "Expert roof replacement in Odessa TX. Class 4 impact-resistant shingles. Insurance claims assistance. Call (806) 622-6041",
};

export default function RoofReplacementOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Odessa", url: "/roof-replacement-odessa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/roof-replacement-odessa/#localbusiness",
            "name": "5 Star Commercial Roofing - Odessa Roof Replacement",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
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
            "url": "https://5starroofingpros.com/roof-replacement-odessa/",
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
            "description": "Expert roof replacement in Odessa TX. Class 4 impact-resistant shingles. Insurance claims assistance. Call (806) 622-6041"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Odessa",
            "description": "Professional roof replacement services in Odessa, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Odessa",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roof Replacement Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{"@type":"Question","name":"When should I replace my Odessa roof?","acceptedAnswer":{"@type":"Answer","text":"Replace when you have widespread hail damage (10+ impacts per 100 sq ft), roof age over 20 years, multiple leaks, extensive granule loss, or failed previous repairs."}},{"@type":"Question","name":"How much does roof replacement cost in Odessa?","acceptedAnswer":{"@type":"Answer","text":"Residential: $8,000-$25,000 depending on size and materials. Commercial: $15,000-$100,000+ depending on building size. 85% of replacements are insurance-covered hail damage where property owners pay only their deductible."}},{"@type":"Question","name":"What are the best roofing materials for Odessa's climate?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant asphalt shingles (residential), TPO or metal roofing (commercial). These materials are engineered for extreme Texas weather conditions including hail, high winds, and temperature swings."}}]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-odessa-14-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Replacement in <span className="text-brand-gold-light">Odessa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Lifetime Protection
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Complete roof replacement for Odessa homes and businesses. We install Class 4 impact-resistant roofing with 50-year warranties.
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
              Odessa's Premier Roof Replacement Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Complete roof replacement services for Odessa homes and businesses, featuring Class 4 impact-resistant roofing systems with comprehensive 50-year warranties. Located in the heart of the Permian Basin, Odessa presents unique roofing challenges that require specialized expertise and premium materials designed for extreme West Texas conditions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Since 2014, we've served the Odessa community with expert roof replacement services that combine advanced materials, proven installation techniques, and comprehensive project management. Our experienced teams handle all aspects of roof replacement including permits, insurance claims coordination, material selection, and long-term warranty documentation.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Understanding Odessa's Unique Roofing Challenges</h3>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa's location in West Texas subjects roofing systems to some of the most challenging weather conditions in the United States. The combination of extreme heat, intense UV radiation, sudden severe thunderstorms, and occasional hail creates a hostile environment that demands specialized roofing solutions and expert installation techniques.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The Permian Basin's oil and gas industry activities also create unique considerations for roofing systems. Industrial emissions, dust, and vibrations from nearby operations can affect roofing material performance and longevity. Our roof replacement solutions account for these local environmental factors while providing maximum protection and durability.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Temperature extremes in Odessa can range from over 110°F in summer to below freezing in winter, creating expansion and contraction cycles that stress inferior roofing materials. Our premium materials and installation techniques are specifically chosen to withstand these thermal cycles while maintaining structural integrity and weather protection.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Why Roof Replacement Becomes Necessary in Odessa</h3>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa's harsh climate accelerates normal roof aging and can cause sudden, severe damage that necessitates complete roof replacement. Understanding when repair is no longer viable and full replacement becomes the most cost-effective solution is crucial for protecting your property investment.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <strong>Hail Damage:</strong> West Texas experiences frequent hailstorms that can destroy roofing systems in minutes. When hail damage affects more than 30% of a roof surface, replacement typically becomes more economical than extensive repairs. Our damage assessment process helps determine the most cost-effective approach while ensuring complete protection.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <strong>Age-Related Deterioration:</strong> Traditional asphalt shingles in Odessa's climate typically require replacement after 15-20 years due to UV damage, thermal cycling, and granule loss. Our replacement systems using impact-resistant materials can extend service life to 30-50 years with proper maintenance.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Energy Efficiency Upgrades:</strong> Older roofing systems lack the energy efficiency features available in modern materials. Roof replacement provides an opportunity to significantly reduce cooling costs through cool roof technologies, enhanced insulation, and improved ventilation systems.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Premium Materials for Odessa's Extreme Climate
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">Class 4 Impact-Resistant Shingles</h3>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our standard residential roof replacement in Odessa features Class 4 impact-resistant asphalt shingles that have been tested to withstand severe hail impacts. These specialized shingles use modified asphalt formulations and reinforced backing materials that absorb impact energy rather than cracking or splitting.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Class 4 shingles are tested using 2-inch steel balls dropped from 20 feet, simulating golf ball-sized hail at terminal velocity. This testing ensures the shingles can withstand multiple impacts without compromising their protective qualities or aesthetic appearance. Many insurance companies offer premium discounts for Class 4 installations in hail-prone areas like Odessa.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Beyond hail resistance, these premium shingles offer enhanced wind resistance with ratings up to 130 mph, superior UV protection to prevent premature aging, and improved fire resistance for additional safety benefits. The combination of these features makes Class 4 shingles the optimal choice for Odessa's challenging climate.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Metal Roofing Systems</h3>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Standing seam metal roofing represents the ultimate in durability and performance for Odessa properties. While the initial investment is higher than asphalt shingles, metal roofs can last 50+ years with minimal maintenance while providing superior energy efficiency and storm resistance.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Metal roofing's reflective properties significantly reduce cooling costs in Odessa's intense heat. Cool roof coatings can reflect 70-90% of solar radiation, keeping roof surfaces 50-60°F cooler than traditional materials. This temperature reduction translates to substantial energy savings and extended HVAC equipment life.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hail resistance is exceptional with metal roofing systems. While large hail may cause cosmetic denting, the roof maintains its waterproof integrity and structural soundness. This durability means metal roofs rarely require replacement due to storm damage, providing long-term cost advantages.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Commercial Membrane Systems</h3>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Commercial buildings in Odessa require specialized roofing systems designed for flat or low-slope applications. TPO (Thermoplastic Olefin) and PVC (Polyvinyl Chloride) membrane systems provide excellent performance in extreme heat while offering superior puncture resistance and chemical resistance important in industrial environments.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Heat-welded seams create monolithic roof surfaces that eliminate potential leak points common in mechanically attached systems. This seamless construction is particularly important in Odessa's high-wind environment where uplift forces can stress traditional roofing connections.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              White membrane surfaces reflect solar radiation and reduce cooling loads for commercial buildings. Energy savings of 20-30% are common when upgrading from dark-colored roofing systems to reflective membrane installations. These savings often justify the replacement cost through reduced operating expenses.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Complete Roof Replacement Process for Odessa Properties
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">Initial Assessment and Planning</h3>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Every roof replacement project begins with a comprehensive assessment of your existing roofing system, structural conditions, and specific performance requirements. Our evaluation process includes visual inspection, moisture detection, structural analysis, and documentation that satisfies insurance requirements.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We utilize advanced diagnostic tools including drone photography for detailed roof surface documentation, thermal imaging to identify hidden moisture intrusion, and moisture meters to assess deck conditions. This thorough evaluation ensures all underlying issues are addressed during replacement rather than discovered after completion.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Material selection is customized based on your specific needs, local climate conditions, architectural style, and long-term value considerations. We provide detailed explanations of available options, performance characteristics, warranty coverage, and cost implications to ensure informed decision-making.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Installation Excellence and Quality Control</h3>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our installation process follows manufacturer specifications and industry best practices while incorporating enhancements specifically designed for Odessa's climate challenges. Enhanced fastening patterns provide superior wind resistance, premium sealants accommodate thermal movement, and advanced flashing details prevent water intrusion.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Quality control checkpoints throughout the installation process ensure consistent excellence. Material delivery inspection, deck preparation verification, installation technique monitoring, and final quality walkthrough guarantee that every aspect meets our stringent standards.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Weather monitoring and installation scheduling account for Odessa's unpredictable weather patterns. Our project management system tracks weather forecasts and adjusts installation schedules to ensure optimal conditions for material application and curing.
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
                  When should I replace my Odessa roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Replace when you have widespread hail damage (10+ impacts per 100 sq ft), roof age over 20 years, multiple leaks, extensive granule loss, or failed previous repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does roof replacement cost in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Residential: $8,000-$25,000 depending on size and materials. Commercial: $15,000-$100,000+ depending on building size. 85% of replacements are insurance-covered hail damage where property owners pay only their deductible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are the best roofing materials for Odessa's climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Class 4 impact-resistant asphalt shingles (residential), TPO or metal roofing (commercial). These materials are engineered for extreme Texas weather conditions including hail, high winds, and temperature swings.
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
            Free inspections for Odessa property owners. Expert roof replacement with comprehensive warranties.
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
