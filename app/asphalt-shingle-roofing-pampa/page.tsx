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
  title: "Asphalt Shingle Roofing Pampa TX | Class 4 | Free Inspection",
  description: 'asphalt shingle roofing in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function AsphaltShingleRoofingPampaPage() {
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
                      "name": "Pampa",
                      "url": "/asphalt-shingle-roofing-pampa/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-pampa/#localbusiness",
        "name": "5 Star Commercial Roofing - Pampa Asphalt Shingle Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.5364, "longitude": -100.9599 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-pampa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas", "name": "Pampa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert asphalt shingle roofing services in Pampa, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              "name": "Pampa",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert asphalt shingle roofing in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "What are the best asphalt shingles for Pampa's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 impact-resistant architectural shingles are essential for Pampa's 7-9 annual hailstorms. We recommend Owens Corning Duration Storm, GAF Timberline HDZ RS, or CertainTeed Landmark Impact Resistant shingles. These premium shingles feature reinforced construction, Class 4 (UL 2218) impact ratings, 130+ mph wind resistance, and algae-resistant granules. They qualify for insurance discounts and carry 30-50 year warranties."
                }
              },
              {
                "@type": "Question",
                "name": "How long do asphalt shingles last in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality architectural shingles typically last 20-30 years in Pampa when properly installed and maintained. Texas Panhandle's intense UV exposure, temperature extremes, and hailstorms stress roofing materials. Class 4 impact-resistant shingles last longer than standard shingles. Regular inspections after storms and prompt repairs extend lifespan. Premium shingles with enhanced UV protection perform better in Pampa's climate."
                }
              },
              {
                "@type": "Question",
                "name": "Do Class 4 shingles qualify for insurance discounts in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most Texas insurance companies offer 10-35% premium discounts for Class 4 impact-resistant shingles in Pampa. Given the area's severe hail risk with 7-9 storms annually, these discounts typically pay for the shingle upgrade within 5-7 years. We provide all documentation needed for your insurance company to approve the discount."
                }
              },
              {
                "@type": "Question",
                "name": "How much does asphalt shingle roofing cost in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Asphalt shingle roofing in Pampa typically costs $4.50-$8 per square foot installed. Standard architectural shingles run $4.50-$6/sq ft, while Class 4 impact-resistant shingles cost $6-$8/sq ft. Costs vary by roof size, pitch, complexity, and shingle quality. Most 2,000 sq ft Pampa homes need $9,000-$16,000 for complete re-roofing. We provide free detailed estimates."
                }
              },
              {
                "@type": "Question",
                "name": "Can asphalt shingles withstand Pampa's wind and hail?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, when properly installed with proper nailing patterns and starter strips. Class 4 impact-resistant shingles withstand golf ball-sized hail without cracking. Architectural shingles rated for 130+ mph wind resistance handle Pampa's sustained winds and gusts. Proper installation includes 6-nail pattern, ice/water shield, and reinforced starter courses for maximum wind and hail protection."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/ResidentialServices.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-brown-900/75 to-orange-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Asphalt Shingle Roofing in <span className="text-brand-gold-light">Pampa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Class 4 Impact-Resistant Shingles | Premium Brands
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert asphalt shingle roofing in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={220} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Pampa Projects</div>
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
              Pampa's Asphalt Shingle Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's location in the Texas Panhandle creates unique roofing challenges. Agricultural community in the High Plains. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural community exposure to High Plains winds and frequent hailstorms—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 220+ Pampa properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Pampa property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Energy Industry Family Homes in Pampa
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">⚡ Energy Worker Families</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Oil & gas industry professionals</li>
                  <li>✓ Energy sector family homes</li>
                  <li>✓ Professional service workers</li>
                  <li>✓ Growing residential communities</li>
                  <li>✓ Executive housing developments</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🛡️ Industrial Environment Protection</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Enhanced chemical resistance</li>
                  <li>✓ Air quality protection features</li>
                  <li>✓ Superior fire resistance</li>
                  <li>✓ High-performance ventilation systems</li>
                  <li>✓ Maintenance-friendly designs</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Pampa's Industrial Community Needs</h3>
              <p className="text-lg text-gray-700 mb-4">
                Pampa's energy industry creates a unique residential environment where homes may be exposed to industrial elements while families demand quality, comfort, and protection. These homeowners often have higher income potential but also face unique environmental challenges.
              </p>
              <p className="text-lg text-gray-700">
                Our premium asphalt shingle systems are specially selected to withstand industrial environments while providing the aesthetic appeal and performance that energy industry families expect from their home investments.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Premium Protection for Energy Sector Families
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Enhanced Air Quality Features</h3>
                <p className="text-gray-700 mb-4">
                  Specialized shingle systems and ventilation solutions help maintain indoor air quality in areas with industrial operations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Advanced ventilation systems</li>
                  <li>• Sealed deck installation</li>
                  <li>• Air barrier integration</li>
                  <li>• Filtration system compatibility</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Executive Home Standards</h3>
                <p className="text-gray-700 mb-4">
                  Premium materials and installation techniques that meet the high standards expected by energy industry professionals.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Designer color selections</li>
                  <li>• Architectural enhancement options</li>
                  <li>• Extended warranty packages</li>
                  <li>• Professional project management</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Investment Protection</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">30-50</div>
                  <div className="font-semibold mb-1">Year Warranties</div>
                  <div className="text-gray-600 text-sm">Manufacturer protection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">Class 4</div>
                  <div className="font-semibold mb-1">Impact Rating</div>
                  <div className="text-gray-600 text-sm">Insurance discounts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">15%+</div>
                  <div className="font-semibold mb-1">Home Value</div>
                  <div className="text-gray-600 text-sm">ROI increase</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Professional Installation for Professional Families
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Executive Service Standards</h3>
                  <p className="text-gray-700 mb-4">
                    Energy industry professionals expect and deserve the highest levels of service, communication, and workmanship quality.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Dedicated project managers</li>
                    <li>• Daily progress updates</li>
                    <li>• Flexible scheduling around work demands</li>
                    <li>• Premium material selections</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Industry Professional Discounts</h3>
                  <p className="text-gray-700 mb-4">
                    We offer special pricing for Pampa's energy industry workers as appreciation for their contribution to the local economy.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Energy industry employee discounts</li>
                    <li>• Referral rewards programs</li>
                    <li>• Multiple home project pricing</li>
                    <li>• Flexible payment terms</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Asphalt Shingle Roofing FAQs - Pampa, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  What are the best asphalt shingles for Pampa's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Class 4 impact-resistant architectural shingles are essential for Pampa's 7-9 annual hailstorms. We recommend Owens Corning Duration Storm, GAF Timberline HDZ RS, or CertainTeed Landmark Impact Resistant shingles. These premium shingles feature reinforced construction, Class 4 (UL 2218) impact ratings, 130+ mph wind resistance, and algae-resistant granules. They qualify for insurance discounts and carry 30-50 year warranties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long do asphalt shingles last in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality architectural shingles typically last 20-30 years in Pampa when properly installed and maintained. Texas Panhandle's intense UV exposure, temperature extremes, and hailstorms stress roofing materials. Class 4 impact-resistant shingles last longer than standard shingles. Regular inspections after storms and prompt repairs extend lifespan. Premium shingles with enhanced UV protection perform better in Pampa's climate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Do Class 4 shingles qualify for insurance discounts in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, most Texas insurance companies offer 10-35% premium discounts for Class 4 impact-resistant shingles in Pampa. Given the area's severe hail risk with 7-9 storms annually, these discounts typically pay for the shingle upgrade within 5-7 years. We provide all documentation needed for your insurance company to approve the discount.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does asphalt shingle roofing cost in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Asphalt shingle roofing in Pampa typically costs $4.50-$8 per square foot installed. Standard architectural shingles run $4.50-$6/sq ft, while Class 4 impact-resistant shingles cost $6-$8/sq ft. Costs vary by roof size, pitch, complexity, and shingle quality. Most 2,000 sq ft Pampa homes need $9,000-$16,000 for complete re-roofing. We provide free detailed estimates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can asphalt shingles withstand Pampa's wind and hail?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, when properly installed with proper nailing patterns and starter strips. Class 4 impact-resistant shingles withstand golf ball-sized hail without cracking. Architectural shingles rated for 130+ mph wind resistance handle Pampa's sustained winds and gusts. Proper installation includes 6-nail pattern, ice/water shield, and reinforced starter courses for maximum wind and hail protection.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Pampa Location
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104797.36251486284!2d-100.96555!3d35.53647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870157e7e7e7e7e7%3A0x7e7e7e7e7e7e7e7e!2sPampa%2C%20TX!5e0!3m2!1sen!2sus!4v1736496000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pampa, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa property owners. Expert asphalt shingle roofing with comprehensive warranties and insurance claim assistance.
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
