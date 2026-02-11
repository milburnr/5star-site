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
  title: 'Asphalt Shingles Monahans TX | 5 Star Roofing',
  description: "Quality asphalt shingle roofing in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function AsphaltShingleRoofingMonahansPage() {
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
                      "name": "Monahans",
                      "url": "/asphalt-shingle-roofing-monahans/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-monahans/#localbusiness",
        "name": "5 Star Commercial Roofing - Monahans Asphalt Shingle Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.5943, "longitude": -102.8927 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-monahans/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas", "name": "Monahans", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert asphalt shingle roofing services in Monahans, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "telephone": "(806) 622-6041",
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
              "name": "Monahans",
              "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Quality asphalt shingle roofing in Monahans TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/85 via-gray-900/75 to-stone-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Asphalt Shingle Roofing in <span className="text-brand-gold-light">Monahans</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Asphalt Shingle Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Quality asphalt shingle roofing in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
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
              Monahans's Premier Residential Asphalt Shingle Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Monahans, Texas, positioned in Ward County's heart, faces unique challenges as a Permian Basin oil and gas hub. Located near the famous Monahans Sandhills, this community experiences 6-8 major hailstorms annually with severe impact damage potential. Summer temperatures consistently exceed 100°F while winter lows can drop to 25°F, creating extreme thermal cycling that stresses roofing systems. The area's low annual precipitation (14 inches) means intense, sporadic storms that dump large amounts of water quickly, testing drainage and waterproofing systems.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has specialized in protecting Monahans's residential neighborhoods with premium asphalt shingle systems designed for Permian Basin extremes. From historic homes near downtown Monahans to newer subdivisions around Monahans Sandhills State Park, we understand the unique challenges facing homeowners: oil field environmental impacts, sand infiltration, extreme UV exposure, and the need for durable solutions that protect investments in this vital energy community.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Why Monahans Homeowners Rely on Quality Asphalt Shingles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Outstanding Investment Protection</h4>
                  <p className="text-gray-600 mb-4">Monahans's median home value of $87,500 benefits dramatically from quality roofing upgrades. Premium asphalt shingles increase property values by 18-25% while providing decades of reliable protection in this oil and gas economy. Our installations offer superior ROI while maintaining the practical appearance that fits this hardworking community's character.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Permian Basin Storm Durability</h4>
                  <p className="text-gray-600">Advanced impact-resistant shingles with UL 2218 Class 4 ratings handle Monahans's frequent hail damage. Wind resistance up to 150 MPH withstands the powerful microbursts and straight-line winds common during severe weather, while fire resistance protects against wildfire threats from surrounding rangeland.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Energy Efficiency Benefits</h4>
                  <p className="text-gray-600 mb-4">Cool-roof technology reduces cooling costs by 20-30% during Monahans's brutal summers. Advanced reflective granules and proper ventilation systems help homes stay comfortable while reducing strain on HVAC systems, crucial for managing energy costs in this desert climate.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Low-Maintenance Desert Performance</h4>
                  <p className="text-gray-600">Unlike metal roofing that shows sand accumulation and requires frequent cleaning, or tile that cracks under thermal stress, architectural asphalt shingles handle Monahans's sand, dust, and extreme conditions with minimal maintenance while delivering 30-50 year lifespans.</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Comprehensive Asphalt Shingle Solutions for Monahans Homes</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Standard Architectural Shingles</h4>
                <p className="text-gray-600 mb-3">Ideal for Monahans homeowners seeking dependable protection at oil-field economy prices. Starting at $4.50 per square foot installed, these GAF Timberline or CertainTeed Landmark shingles provide 25-30 year warranties with excellent desert climate resistance.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 110 MPH wind warranties</li>
                  <li>• Advanced granule technology</li>
                  <li>• Class A fire safety rating</li>
                  <li>• 14 desert-appropriate colors</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Impact-Resistant Premium</h4>
                <p className="text-gray-600 mb-3">Monahans's most popular choice for maximum hail and wind protection. Multi-layer construction with polymer modification provides Class 4 impact resistance at $7.00-9.50 per square foot with 30-lifetime warranties.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• UL 2218 Class 4 impact rated</li>
                  <li>• 130+ MPH wind resistance</li>
                  <li>• Desert heat reflection</li>
                  <li>• Insurance discounts available</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Designer Luxury Series</h4>
                <p className="text-gray-600 mb-3">Premium options for discerning Monahans homeowners. Authentic slate, cedar shake, and tile appearances with lifetime warranties and maximum performance. Investment range: $10.50-14.50 per square foot for ultimate protection.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lifetime limited warranties</li>
                  <li>• Maximum weather protection</li>
                  <li>• Cool-roof ENERGY STAR rating</li>
                  <li>• Authentic dimensional textures</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">Monahans Desert Climate Installation Expertise</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Sand Infiltration Prevention</h4>
                  <p className="text-gray-600 mb-4">Proximity to Monahans Sandhills requires specialized sealing techniques to prevent sand infiltration. We use enhanced edge sealing, upgraded underlayment, and sand-resistant fastening systems that maintain weather-tight performance despite constant sand exposure from West Texas winds.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Oil Field Environment Adaptation</h4>
                  <p className="text-gray-600">Installation schedules consider oil field activities, dust patterns, and potential vibrations from nearby operations. We coordinate timing and use specialized materials resistant to hydrocarbon exposure and industrial particulates common in Permian Basin communities.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Extreme Heat Engineering</h4>
                  <p className="text-gray-600 mb-4">Monahans's desert climate requires specialized thermal management. We install enhanced ventilation systems, reflective underlayment, and use fastening schedules designed for extreme thermal expansion and contraction cycles common in desert environments.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Local Compliance & Safety</h4>
                  <p className="text-gray-600">All installations meet Ward County building requirements including wildfire protection provisions, high-wind zone specifications, and coordination with local utility providers including AEP Texas, Atmos Energy, and oil field infrastructure.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Monahans Professional Installation Excellence</h2>
            
            <div className="space-y-8">
              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-orange-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Comprehensive Desert Climate Assessment</h3>
                  <p className="text-gray-600">Our detailed evaluation considers Monahans's unique environmental challenges including sand exposure, oil field proximity, UV intensity, and thermal cycling patterns. We use advanced detection methods to identify hail damage, wind damage, sand infiltration, and structural issues specific to desert conditions.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-orange-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Customized Material Selection & Planning</h3>
                  <p className="text-gray-600">Every Monahans home receives tailored recommendations based on desert exposure, neighborhood characteristics, and performance requirements. We provide detailed analysis of energy efficiency benefits, storm protection levels, and long-term value enhancement specific to Permian Basin conditions.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-orange-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Expert Installation & Quality Control</h3>
                  <p className="text-gray-600">Our certified teams complete most Monahans residential projects in 2-3 days using desert-adapted techniques and premium materials. We maintain clean worksites despite sand conditions, protect oil field considerations, and conduct rigorous quality inspections throughout installation.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-orange-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Complete Warranty & Desert Support</h3>
                  <p className="text-gray-600">Project completion includes thorough cleanup, comprehensive warranty documentation, and maintenance guidance for Monahans's desert climate. We provide 24/7 emergency service throughout Ward County with maintenance schedules designed for Permian Basin environmental conditions.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Insurance Claims & Oil Field Economy Financing</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Storm Damage Claims Specialization</h3>
                <p className="text-gray-600 mb-4">Monahans's frequent severe weather makes insurance claims routine for homeowners. We work with all major carriers including State Farm, Allstate, Farmers, and USAA to document damage comprehensively and ensure full coverage including hidden damage from sand infiltration.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free comprehensive damage documentation</li>
                  <li>• Professional drone photography</li>
                  <li>• Direct insurance adjuster coordination</li>
                  <li>• Sand damage assessment and reporting</li>
                  <li>• Supplemental claim assistance</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Flexible Oil Field Financing</h3>
                <p className="text-gray-600 mb-4">Understanding Monahans's oil and gas economy cycles, we offer financing solutions that work for energy workers, service companies, and families throughout boom and adjustment periods.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 0% interest financing available</li>
                  <li>• Extended payment terms up to 60 months</li>
                  <li>• No prepayment penalties</li>
                  <li>• Quick approval process</li>
                  <li>• Energy industry flexible scheduling</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Serving All Monahans Communities</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Historic Downtown Monahans</h4>
                <p className="text-gray-600 text-sm">Original Monahans neighborhoods featuring 1920s-1950s architecture near the railroad district. We maintain historical character while upgrading desert performance and sand resistance.</p>
              </div>
              
              <div className="bg-gradient-to-b from-red-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">North Monahans Residential</h4>
                <p className="text-gray-600 text-sm">Newer subdivisions with contemporary homes requiring advanced ventilation and impact-resistant materials for optimal desert climate performance and energy efficiency.</p>
              </div>
              
              <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Sandhills Area</h4>
                <p className="text-gray-600 text-sm">Properties near Monahans Sandhills State Park with extreme sand exposure requiring specialized installation techniques and enhanced sealing for long-term performance.</p>
              </div>
              
              <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">South Monahans</h4>
                <p className="text-gray-600 text-sm">Established neighborhoods with well-maintained homes requiring reliable, cost-effective roofing solutions that handle oil field environmental conditions.</p>
              </div>
              
              <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Rural Ward County</h4>
                <p className="text-gray-600 text-sm">Ranch properties and oil field housing requiring specialized installation for extreme weather exposure and larger structures typical of rural Permian Basin locations.</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Industrial Adjacent Areas</h4>
                <p className="text-gray-600 text-sm">Residential properties near oil and gas operations requiring enhanced protection against industrial dust, vibrations, and specialized environmental considerations.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Monahans, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.89!3d31.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sMonahans%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monahans, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Monahans Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Monahans property owners. Expert asphalt shingle roofing with comprehensive warranties and insurance claim assistance.
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
