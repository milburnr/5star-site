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
  title: 'Asphalt Shingles Canyon TX | 5 Star Roofing',
  description: 'asphalt shingle roofing in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function AsphaltShingleRoofingCanyonPage() {
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
                      "name": "Canyon",
                      "url": "/asphalt-shingle-roofing-canyon/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-canyon/#localbusiness",
        "name": "5 Star Commercial Roofing - Canyon Asphalt Shingle Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 34.9803, "longitude": -101.9188 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-canyon/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert asphalt shingle roofing services in Canyon, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas",
              "name": "Canyon",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert asphalt shingle roofing in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "What are the best asphalt shingles for Canyon's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 impact-resistant architectural shingles are essential for Canyon's 8-10 annual hailstorms. We recommend Owens Corning Duration Storm, GAF Timberline HDZ RS, or CertainTeed Landmark Impact Resistant shingles. These premium shingles feature reinforced construction, Class 4 (UL 2218) impact ratings, 130+ mph wind resistance, and algae-resistant granules. They qualify for insurance discounts and carry 30-50 year warranties."
                }
              },
              {
                "@type": "Question",
                "name": "How long do asphalt shingles last in Canyon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality architectural shingles typically last 20-30 years in Canyon when properly installed and maintained. Palo Duro Canyon area's intense UV exposure, temperature extremes, and hailstorms stress roofing materials. Class 4 impact-resistant shingles last longer than standard shingles. Regular inspections after storms and prompt repairs extend lifespan. Premium shingles with enhanced UV protection perform better in Canyon's climate."
                }
              },
              {
                "@type": "Question",
                "name": "Do Class 4 shingles qualify for insurance discounts in Canyon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most Texas insurance companies offer 10-35% premium discounts for Class 4 impact-resistant shingles in Canyon. Given the area's severe hail risk with 8-10 storms annually, these discounts typically pay for the shingle upgrade within 5-7 years. We provide all documentation needed for your insurance company to approve the discount."
                }
              },
              {
                "@type": "Question",
                "name": "How much does asphalt shingle roofing cost in Canyon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Asphalt shingle roofing in Canyon typically costs $4.50-$8 per square foot installed. Standard architectural shingles run $4.50-$6/sq ft, while Class 4 impact-resistant shingles cost $6-$8/sq ft. Costs vary by roof size, pitch, complexity, and shingle quality. Most 2,000 sq ft Canyon homes need $9,000-$16,000 for complete re-roofing. We provide free detailed estimates."
                }
              },
              {
                "@type": "Question",
                "name": "Can asphalt shingles withstand Canyon's wind and hail?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, when properly installed with proper nailing patterns and starter strips. Class 4 impact-resistant shingles withstand golf ball-sized hail without cracking. Architectural shingles rated for 130+ mph wind resistance handle Canyon's sustained winds and gusts. Proper installation includes 6-nail pattern, ice/water shield, and reinforced starter courses for maximum wind and hail protection."
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
                Asphalt Shingle Roofing in <span className="text-brand-gold-light">Canyon</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Class 4 Impact-Resistant Shingles | Premium Brands
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert asphalt shingle roofing in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={350} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Canyon Projects</div>
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
              Canyon's Asphalt Shingle Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Canyon's location in the Texas Panhandle creates unique roofing challenges. Near Palo Duro Canyon, home to West Texas A&M University. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and unique weather patterns near Palo Duro Canyon with High Plains wind exposure—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 350+ Canyon properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Canyon property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Quality Roofing Solutions for Canyon Families
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏡 Family Home Protection</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ WTAMU faculty and staff homes</li>
                  <li>✓ Growing family neighborhoods</li>
                  <li>✓ Historic district preservation</li>
                  <li>✓ New construction communities</li>
                  <li>✓ Ranch and rural properties</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">💰 Value & Affordability</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Budget-friendly installation costs</li>
                  <li>✓ Excellent return on investment</li>
                  <li>✓ Flexible financing options</li>
                  <li>✓ Insurance claim assistance</li>
                  <li>✓ Comprehensive warranties</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Canyon's Family-Friendly Roofing Needs</h3>
              <p className="text-lg text-gray-700 mb-4">
                Canyon's close-knit community includes many university families, longtime residents, and newcomers attracted to the area's quality of life. These homeowners need roofing solutions that provide reliable protection, attractive curb appeal, and excellent value for their investment.
              </p>
              <p className="text-lg text-gray-700">
                Our asphalt shingle systems deliver the perfect combination of affordability, durability, and aesthetic appeal that Canyon families deserve, with proven performance in the challenging Panhandle climate.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Architectural Styles for Canyon Homes
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-lg font-bold mb-3 text-brand-brown">Traditional</h3>
                <p className="text-gray-700 text-sm mb-3">Classic three-tab and architectural shingles for timeless appeal</p>
                <div className="text-2xl font-bold text-brand-gold">$3-6</div>
                <div className="text-gray-600 text-sm">per sq ft</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-lg font-bold mb-3 text-brand-brown">Designer</h3>
                <p className="text-gray-700 text-sm mb-3">Premium dimensional shingles with enhanced curb appeal</p>
                <div className="text-2xl font-bold text-brand-gold">$5-9</div>
                <div className="text-gray-600 text-sm">per sq ft</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-lg font-bold mb-3 text-brand-brown">Luxury</h3>
                <p className="text-gray-700 text-sm mb-3">High-end shingles mimicking slate or wood shake</p>
                <div className="text-2xl font-bold text-brand-gold">$7-12</div>
                <div className="text-gray-600 text-sm">per sq ft</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-lg font-bold mb-3 text-brand-brown">Impact</h3>
                <p className="text-gray-700 text-sm mb-3">Class 4 hail-resistant options with insurance benefits</p>
                <div className="text-2xl font-bold text-brand-gold">$6-10</div>
                <div className="text-gray-600 text-sm">per sq ft</div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Homeowner Financing & Payment Options
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Flexible Payment Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    We understand that a new roof is a significant investment for Canyon families. Our flexible financing options make quality roofing accessible and affordable.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 0% interest financing available</li>
                    <li>• Extended payment terms</li>
                    <li>• No prepayment penalties</li>
                    <li>• Quick approval process</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Insurance Claim Support</h3>
                  <p className="text-gray-700 mb-4">
                    Many Canyon homeowners are surprised to learn their insurance covers storm damage. We help navigate the claims process from start to finish.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Free damage assessments</li>
                    <li>• Insurance company negotiations</li>
                    <li>• Detailed documentation</li>
                    <li>• Deductible-only payment options</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Asphalt Shingle Roofing FAQs - Canyon, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  What are the best asphalt shingles for Canyon's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Class 4 impact-resistant architectural shingles are essential for Canyon's 8-10 annual hailstorms. We recommend Owens Corning Duration Storm, GAF Timberline HDZ RS, or CertainTeed Landmark Impact Resistant shingles. These premium shingles feature reinforced construction, Class 4 (UL 2218) impact ratings, 130+ mph wind resistance, and algae-resistant granules. They qualify for insurance discounts and carry 30-50 year warranties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long do asphalt shingles last in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality architectural shingles typically last 20-30 years in Canyon when properly installed and maintained. Palo Duro Canyon area's intense UV exposure, temperature extremes, and hailstorms stress roofing materials. Class 4 impact-resistant shingles last longer than standard shingles. Regular inspections after storms and prompt repairs extend lifespan. Premium shingles with enhanced UV protection perform better in Canyon's climate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Do Class 4 shingles qualify for insurance discounts in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, most Texas insurance companies offer 10-35% premium discounts for Class 4 impact-resistant shingles in Canyon. Given the area's severe hail risk with 8-10 storms annually, these discounts typically pay for the shingle upgrade within 5-7 years. We provide all documentation needed for your insurance company to approve the discount.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does asphalt shingle roofing cost in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Asphalt shingle roofing in Canyon typically costs $4.50-$8 per square foot installed. Standard architectural shingles run $4.50-$6/sq ft, while Class 4 impact-resistant shingles cost $6-$8/sq ft. Costs vary by roof size, pitch, complexity, and shingle quality. Most 2,000 sq ft Canyon homes need $9,000-$16,000 for complete re-roofing. We provide free detailed estimates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can asphalt shingles withstand Canyon's wind and hail?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, when properly installed with proper nailing patterns and starter strips. Class 4 impact-resistant shingles withstand golf ball-sized hail without cracking. Architectural shingles rated for 130+ mph wind resistance handle Canyon's sustained winds and gusts. Proper installation includes 6-nail pattern, ice/water shield, and reinforced starter courses for maximum wind and hail protection.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Canyon Location
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104883.68253246285!2d-101.95555!3d34.98037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015f7c1e4b8c4d%3A0x7e8f8c8e4e4c8d8e!2sCanyon%2C%20TX!5e0!3m2!1sen!2sus!4v1736496000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Canyon, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Canyon property owners. Expert asphalt shingle roofing with comprehensive warranties and insurance claim assistance.
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
