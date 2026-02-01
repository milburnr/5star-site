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
  title: 'Asphalt Shingles Borger TX | 5 Star Roofing',
  description: 'asphalt shingle roofing in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function AsphaltShingleRoofingBorgerPage() {
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
                      "name": "Borger",
                      "url": "/asphalt-shingle-roofing-borger/"
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
              "@id": "https://en.wikipedia.org/wiki/Borger,_Texas",
              "name": "Borger",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert asphalt shingle roofing in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "What are the best asphalt shingles for Borger's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 impact-resistant architectural shingles are essential for Borger's 7-9 annual hailstorms. We recommend Owens Corning Duration Storm, GAF Timberline HDZ RS, or CertainTeed Landmark Impact Resistant shingles. These premium shingles feature reinforced construction, Class 4 (UL 2218) impact ratings, 130+ mph wind resistance, and algae-resistant granules. They qualify for insurance discounts and carry 30-50 year warranties."
                }
              },
              {
                "@type": "Question",
                "name": "How long do asphalt shingles last in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality architectural shingles typically last 20-30 years in Borger when properly installed and maintained. Texas Panhandle's intense UV exposure, temperature extremes, and hailstorms stress roofing materials. Class 4 impact-resistant shingles last longer than standard shingles. Regular inspections after storms and prompt repairs extend lifespan. Premium shingles with enhanced UV protection perform better in Borger's climate."
                }
              },
              {
                "@type": "Question",
                "name": "Do Class 4 shingles qualify for insurance discounts in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most Texas insurance companies offer 10-35% premium discounts for Class 4 impact-resistant shingles in Borger. Given the area's severe hail risk with 7-9 storms annually, these discounts typically pay for the shingle upgrade within 5-7 years. We provide all documentation needed for your insurance company to approve the discount."
                }
              },
              {
                "@type": "Question",
                "name": "How much does asphalt shingle roofing cost in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Asphalt shingle roofing in Borger typically costs $4.50-$8 per square foot installed. Standard architectural shingles run $4.50-$6/sq ft, while Class 4 impact-resistant shingles cost $6-$8/sq ft. Costs vary by roof size, pitch, complexity, and shingle quality. Most 2,000 sq ft Borger homes need $9,000-$16,000 for complete re-roofing. We provide free detailed estimates."
                }
              },
              {
                "@type": "Question",
                "name": "Can asphalt shingles withstand Borger's wind and hail?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, when properly installed with proper nailing patterns and starter strips. Class 4 impact-resistant shingles withstand golf ball-sized hail without cracking. Architectural shingles rated for 130+ mph wind resistance handle Borger's sustained winds and gusts. Proper installation includes 6-nail pattern, ice/water shield, and reinforced starter courses for maximum wind and hail protection."
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
                Asphalt Shingle Roofing in <span className="text-brand-gold-light">Borger</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Class 4 Impact-Resistant Shingles | Premium Brands
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert asphalt shingle roofing in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
              Borger's Asphalt Shingle Roofing Specialists
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
              Residential Value & Protection for Borger Homeowners
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏠 Homeowner Benefits</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Affordable upfront investment</li>
                  <li>✓ Wide variety of colors and styles</li>
                  <li>✓ Proven performance in Texas weather</li>
                  <li>✓ Insurance claim expertise</li>
                  <li>✓ Comprehensive warranty coverage</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">⭐ Premium Performance</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Impact-resistant Class 4 options</li>
                  <li>✓ Wind resistance up to 130 mph</li>
                  <li>✓ Algae-resistant formulations</li>
                  <li>✓ Energy-efficient cool roof options</li>
                  <li>✓ 30-50 year manufacturer warranties</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Borger Residential Roofing Challenges</h3>
              <p className="text-lg text-gray-700 mb-4">
                Borger homeowners face unique challenges from the Texas Panhandle's severe weather patterns. With 7-9 hailstorms annually, high winds exceeding 60 mph, and extreme temperature fluctuations, residential properties need roofing systems that provide both affordability and exceptional protection.
              </p>
              <p className="text-lg text-gray-700">
                Our premium asphalt shingle systems are specifically selected for Borger's climate, offering homeowners the perfect balance of value, performance, and curb appeal while providing superior protection against Panhandle weather extremes.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Premium Shingle Options for Borger Homes
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Architectural Shingles</h3>
                <p className="text-gray-700 mb-3">
                  Premium dimensional shingles that provide superior weather protection and enhanced curb appeal for Borger homes.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 30-50 year warranties</li>
                  <li>• Class A fire rating</li>
                  <li>• Multiple color options</li>
                  <li>• Enhanced wind resistance</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Impact-Resistant</h3>
                <p className="text-gray-700 mb-3">
                  UL 2218 Class 4 shingles designed specifically for hail-prone areas like Borger, often qualifying for insurance discounts.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• SBS modified asphalt</li>
                  <li>• Enhanced granule adhesion</li>
                  <li>• Insurance premium savings</li>
                  <li>• Superior impact protection</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Designer Series</h3>
                <p className="text-gray-700 mb-3">
                  Premium luxury shingles that replicate the appearance of wood, slate, or tile while providing superior performance.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Authentic material appearance</li>
                  <li>• Enhanced dimensional profile</li>
                  <li>• Premium color blends</li>
                  <li>• Lifetime limited warranties</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Insurance Claims & Storm Damage Assistance
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Complete Claims Support</h3>
                  <p className="text-gray-700 mb-4">
                    With Borger's frequent hailstorms, we provide comprehensive insurance claim assistance to ensure homeowners receive proper compensation for storm damage.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Free storm damage inspections</li>
                    <li>• Insurance adjuster meetings</li>
                    <li>• Detailed damage documentation</li>
                    <li>• Supplement negotiation assistance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Homeowner Savings</h3>
                  <p className="text-gray-700 mb-4">
                    Many Borger homeowners pay only their deductible when insurance covers approved storm damage claims for eligible repairs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-green-50 rounded">
                      <div className="text-2xl font-bold text-brand-gold">95%</div>
                      <div className="text-sm">Claim Success Rate</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-brand-gold">$500-1K</div>
                      <div className="text-sm">Typical Deductible</div>
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
              Energy Efficiency for Borger Homes
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Cool Roof Shingle Technology</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Reflective Granules</h4>
                  <p className="text-gray-700 mb-4">
                    Advanced granule technology reflects more sunlight and absorbs less heat, reducing attic temperatures and cooling costs.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• ENERGY STAR qualified options</li>
                    <li>• Solar reflectance up to 40%</li>
                    <li>• Thermal emittance ratings 0.83+</li>
                    <li>• Attic temperature reduction up to 15°F</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Homeowner Savings</h4>
                  <p className="text-gray-700 mb-4">
                    Energy-efficient shingles can reduce cooling costs by 10-15% during Borger's hot summers while improving home comfort.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Reduced utility bills</li>
                    <li>• Improved HVAC efficiency</li>
                    <li>• Extended equipment lifespan</li>
                    <li>• Potential utility rebates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Asphalt Shingle Roofing FAQs - Borger, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  What are the best asphalt shingles for Borger's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Class 4 impact-resistant architectural shingles are essential for Borger's 7-9 annual hailstorms. We recommend Owens Corning Duration Storm, GAF Timberline HDZ RS, or CertainTeed Landmark Impact Resistant shingles. These premium shingles feature reinforced construction, Class 4 (UL 2218) impact ratings, 130+ mph wind resistance, and algae-resistant granules. They qualify for insurance discounts and carry 30-50 year warranties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long do asphalt shingles last in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality architectural shingles typically last 20-30 years in Borger when properly installed and maintained. Texas Panhandle's intense UV exposure, temperature extremes, and hailstorms stress roofing materials. Class 4 impact-resistant shingles last longer than standard shingles. Regular inspections after storms and prompt repairs extend lifespan. Premium shingles with enhanced UV protection perform better in Borger's climate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Do Class 4 shingles qualify for insurance discounts in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, most Texas insurance companies offer 10-35% premium discounts for Class 4 impact-resistant shingles in Borger. Given the area's severe hail risk with 7-9 storms annually, these discounts typically pay for the shingle upgrade within 5-7 years. We provide all documentation needed for your insurance company to approve the discount.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does asphalt shingle roofing cost in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Asphalt shingle roofing in Borger typically costs $4.50-$8 per square foot installed. Standard architectural shingles run $4.50-$6/sq ft, while Class 4 impact-resistant shingles cost $6-$8/sq ft. Costs vary by roof size, pitch, complexity, and shingle quality. Most 2,000 sq ft Borger homes need $9,000-$16,000 for complete re-roofing. We provide free detailed estimates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can asphalt shingles withstand Borger's wind and hail?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, when properly installed with proper nailing patterns and starter strips. Class 4 impact-resistant shingles withstand golf ball-sized hail without cracking. Architectural shingles rated for 130+ mph wind resistance handle Borger's sustained winds and gusts. Proper installation includes 6-nail pattern, ice/water shield, and reinforced starter courses for maximum wind and hail protection.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Borger Location
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104531.02863856373!2d-101.46558!3d35.66778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870158d0e71ea1e7%3A0xf64e3f2f1e8b9c7b!2sBorger%2C%20TX!5e0!3m2!1sen!2sus!4v1736496000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Borger, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Borger property owners. Expert asphalt shingle roofing with comprehensive warranties and insurance claim assistance.
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
