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
  alternates: { canonical: 'https://5starroofingpros.com/asphalt-shingle-roofing-dumas/' },
  title: "Asphalt Shingle Roofing Dumas TX | Class 4 | Free Inspection",
  description: 'asphalt shingle roofing in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function AsphaltShingleRoofingDumasPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Asphalt Shingle Roofing",
                      "url": "/asphalt-shingle-roofing/"
              },
              {
                      "name": "Dumas",
                      "url": "/asphalt-shingle-roofing-dumas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas Asphalt Shingle Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.8656, "longitude": -101.973 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert asphalt shingle roofing services in Dumas, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Asphalt Shingle Roofing",
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
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              "name": "Dumas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert asphalt shingle roofing in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "What are the best asphalt shingles for Dumas's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 impact-resistant architectural shingles are essential for Dumas's 7-9 annual hailstorms. We recommend Owens Corning Duration Storm, GAF Timberline HDZ RS, or CertainTeed Landmark Impact Resistant shingles. These premium shingles feature reinforced construction, Class 4 (UL 2218) impact ratings, 130+ mph wind resistance, and algae-resistant granules. They qualify for insurance discounts and carry 30-50 year warranties."
                }
              },
              {
                "@type": "Question",
                "name": "How long do asphalt shingles last in Dumas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality architectural shingles typically last 20-30 years in Dumas when properly installed and maintained. Texas Panhandle's intense UV exposure, temperature extremes, and hailstorms stress roofing materials. Class 4 impact-resistant shingles last longer than standard shingles. Regular inspections after storms and prompt repairs extend lifespan. Premium shingles with enhanced UV protection perform better in Dumas's climate."
                }
              },
              {
                "@type": "Question",
                "name": "Do Class 4 shingles qualify for insurance discounts in Dumas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most Texas insurance companies offer 10-35% premium discounts for Class 4 impact-resistant shingles in Dumas. Given the area's severe hail risk with 7-9 storms annually, these discounts typically pay for the shingle upgrade within 5-7 years. We provide all documentation needed for your insurance company to approve the discount."
                }
              },
              {
                "@type": "Question",
                "name": "How much does asphalt shingle roofing cost in Dumas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Asphalt shingle roofing in Dumas typically costs $4.50-$8 per square foot installed. Standard architectural shingles run $4.50-$6/sq ft, while Class 4 impact-resistant shingles cost $6-$8/sq ft. Costs vary by roof size, pitch, complexity, and shingle quality. Most 2,000 sq ft Dumas homes need $9,000-$16,000 for complete re-roofing. We provide free detailed estimates."
                }
              },
              {
                "@type": "Question",
                "name": "Can asphalt shingles withstand Dumas's wind and hail?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, when properly installed with proper nailing patterns and starter strips. Class 4 impact-resistant shingles withstand golf ball-sized hail without cracking. Architectural shingles rated for 130+ mph wind resistance handle Dumas's sustained winds and gusts. Proper installation includes 6-nail pattern, ice/water shield, and reinforced starter courses for maximum wind and hail protection."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-3-1920w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-brown-900/75 to-orange-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Asphalt Shingle Roofing in <span className="text-brand-gold-light">Dumas</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Class 4 Impact-Resistant Shingles | Premium Brands
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert asphalt shingle roofing in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={190} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Dumas Projects</div>
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
              Dumas's Asphalt Shingle Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas's location in the Texas Panhandle creates unique roofing challenges. Agricultural and feedlot industry center. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural and feedlot industry demands with extreme Panhandle weather—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 190+ Dumas properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Dumas property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Agricultural Community Roofing Solutions for Dumas
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🌾 Rural & Agricultural Homes</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Farm and ranch properties</li>
                  <li>✓ Rural residential communities</li>
                  <li>✓ Agricultural worker housing</li>
                  <li>✓ Large acreage homes</li>
                  <li>✓ Multi-building properties</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">💪 Durability Features</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Chemical-resistant formulations</li>
                  <li>✓ Enhanced wind uplift resistance</li>
                  <li>✓ Algae and moss resistance</li>
                  <li>✓ Extended warranty coverage</li>
                  <li>✓ Easy maintenance requirements</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Dumas Agricultural Environment Considerations</h3>
              <p className="text-lg text-gray-700 mb-4">
                Dumas-area homes face unique challenges from agricultural operations including dust exposure, chemical drift from farming activities, and the need for roofing systems that can withstand rural environmental conditions while remaining cost-effective for farm families.
              </p>
              <p className="text-lg text-gray-700">
                Our specially selected asphalt shingle systems are designed to resist agricultural contaminants, provide superior weather protection, and offer the value that farming families need for their residential roofing investments.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Chemical-Resistant Shingle Technology for Agricultural Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Enhanced Granules</h3>
                <p className="text-gray-700 mb-3">
                  Ceramic-coated granules resist chemical degradation from agricultural operations near Dumas homes.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Fertilizer exposure resistance</li>
                  <li>• Pesticide contact protection</li>
                  <li>• Acid rain resistance</li>
                  <li>• Color fade prevention</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Modified Asphalt</h3>
                <p className="text-gray-700 mb-3">
                  SBS modified asphalt base provides enhanced flexibility and chemical resistance for rural applications.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Superior flexibility</li>
                  <li>• Temperature cycling resistance</li>
                  <li>• Crack prevention</li>
                  <li>• Extended service life</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Algae Resistance</h3>
                <p className="text-gray-700 mb-3">
                  Copper-containing granules prevent algae growth common in agricultural environments with high humidity.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Algae growth prevention</li>
                  <li>• Moss resistance</li>
                  <li>• Maintained appearance</li>
                  <li>• Reduced cleaning needs</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Cost-Effective Solutions for Agricultural Families
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Farm Family Value</h3>
                  <p className="text-gray-700 mb-4">
                    We understand agricultural families need maximum value from their roofing investment. Our solutions provide excellent protection at prices that fit farm budgets.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Competitive agricultural pricing</li>
                    <li>• Multiple property discounts</li>
                    <li>• Seasonal scheduling flexibility</li>
                    <li>• Extended payment terms available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Multi-Building Projects</h3>
                  <p className="text-gray-700 mb-4">
                    Many Dumas properties include multiple buildings. We offer package pricing for homes, barns, and outbuildings on the same property.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-green-50 rounded">
                      <div className="text-2xl font-bold text-brand-gold">15%</div>
                      <div className="text-sm">Multi-Building Discount</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-brand-gold">3+</div>
                      <div className="text-sm">Buildings Minimum</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Asphalt Shingle Roofing FAQs - Dumas, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  What are the best asphalt shingles for Dumas's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Class 4 impact-resistant architectural shingles are essential for Dumas's 7-9 annual hailstorms. We recommend Owens Corning Duration Storm, GAF Timberline HDZ RS, or CertainTeed Landmark Impact Resistant shingles. These premium shingles feature reinforced construction, Class 4 (UL 2218) impact ratings, 130+ mph wind resistance, and algae-resistant granules. They qualify for insurance discounts and carry 30-50 year warranties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long do asphalt shingles last in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality architectural shingles typically last 20-30 years in Dumas when properly installed and maintained. Texas Panhandle's intense UV exposure, temperature extremes, and hailstorms stress roofing materials. Class 4 impact-resistant shingles last longer than standard shingles. Regular inspections after storms and prompt repairs extend lifespan. Premium shingles with enhanced UV protection perform better in Dumas's climate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Do Class 4 shingles qualify for insurance discounts in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, most Texas insurance companies offer 10-35% premium discounts for Class 4 impact-resistant shingles in Dumas. Given the area's severe hail risk with 7-9 storms annually, these discounts typically pay for the shingle upgrade within 5-7 years. We provide all documentation needed for your insurance company to approve the discount.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does asphalt shingle roofing cost in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Asphalt shingle roofing in Dumas typically costs $4.50-$8 per square foot installed. Standard architectural shingles run $4.50-$6/sq ft, while Class 4 impact-resistant shingles cost $6-$8/sq ft. Costs vary by roof size, pitch, complexity, and shingle quality. Most 2,000 sq ft Dumas homes need $9,000-$16,000 for complete re-roofing. We provide free detailed estimates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can asphalt shingles withstand Dumas's wind and hail?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, when properly installed with proper nailing patterns and starter strips. Class 4 impact-resistant shingles withstand golf ball-sized hail without cracking. Architectural shingles rated for 130+ mph wind resistance handle Dumas's sustained winds and gusts. Proper installation includes 6-nail pattern, ice/water shield, and reinforced starter courses for maximum wind and hail protection.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Dumas Location
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105225.47382646284!2d-102.01635!3d35.86567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870159c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sDumas%2C%20TX!5e0!3m2!1sen!2sus!4v1736496000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dumas, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Dumas property owners. Expert asphalt shingle roofing with comprehensive warranties and insurance claim assistance.
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
