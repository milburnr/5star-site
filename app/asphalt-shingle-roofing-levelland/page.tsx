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
  title: 'Asphalt Shingles Levelland TX | 5 Star Roofing',
  description: "Quality asphalt shingle roofing in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function AsphaltShingleRoofingLevellandPage() {
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
                      "name": "Levelland",
                      "url": "/asphalt-shingle-roofing-levelland/"
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
              "name": "Levelland",
              "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Quality asphalt shingle roofing in Levelland TX. South Plains experiences 7-10 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/asphalt-shingle-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/85 via-gray-900/75 to-stone-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Asphalt Shingle Roofing in <span className="text-brand-gold-light">Levelland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                South Plains Asphalt Shingle Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Quality asphalt shingle roofing in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">7-10</div>
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
              Levelland's Premier Residential Asphalt Shingle Experts
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Levelland, Texas, sits at the heart of the South Plains agricultural region, where flat terrain and elevation of 3,517 feet create unique weather challenges. This college town experiences 7-10 major hailstorms annually, with the infamous "Hail Alley" producing stones up to softball size. Summer temperatures regularly exceed 95°F while winter lows can plummet to 15°F, creating dramatic thermal cycling that stresses roofing materials. The South Plains receives intense UV radiation due to high elevation and minimal cloud cover, accelerating material degradation without proper protection.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has specialized in protecting Levelland's diverse residential neighborhoods with premium asphalt shingle systems engineered for South Plains extremes. From historic homes near downtown Levelland to modern subdivisions around South Plains College, we understand the unique challenges facing homeowners: extreme weather exposure, agricultural dust accumulation, college town aesthetics, and the need for cost-effective solutions that protect property values in this thriving educational community.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Why Levelland Homeowners Choose Premium Asphalt Shingles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Superior Value Investment</h4>
                  <p className="text-gray-600 mb-4">Levelland's median home value of $102,000 benefits significantly from quality roofing upgrades. Premium asphalt shingles increase property values by 20-30% while providing decades of reliable protection. Our installations offer exceptional ROI compared to premium materials while maintaining the attractive appearance that complements Levelland's college town character.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">South Plains Storm Performance</h4>
                  <p className="text-gray-600">Advanced impact-resistant shingles featuring UL 2218 Class 4 ratings withstand Levelland's severe hail patterns. Wind resistance up to 150 MPH handles the powerful straight-line winds and derechos that sweep across the flat South Plains terrain, while fire resistance protects against agricultural burn-offs and drought conditions.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Energy Efficiency Excellence</h4>
                  <p className="text-gray-600 mb-4">Cool-roof technology and strategic ventilation reduce cooling costs by 25-35% during Levelland's intense summers. Reflective granules and thermal barriers help homes stay comfortable while reducing strain on HVAC systems, crucial for managing utility costs in this college community.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Agricultural Environment Durability</h4>
                  <p className="text-gray-600">Unlike metal roofing that shows dust and requires frequent cleaning, or tile that cracks under thermal stress, architectural asphalt shingles handle South Plains dust, agricultural particulates, and extreme weather with minimal maintenance while delivering 30-50 year lifespans.</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Premium Asphalt Shingle Options for Levelland Homes</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Architectural Standard Series</h4>
                <p className="text-gray-600 mb-3">Perfect for Levelland homeowners seeking reliable protection at college-town budgets. Starting at $5.00 per square foot installed, these GAF Timberline HD or CertainTeed Landmark shingles provide 25-30 year warranties with superior hail resistance.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 110 MPH wind warranties</li>
                  <li>• StainGuard algae protection</li>
                  <li>• Class A fire safety rating</li>
                  <li>• 18 designer color options</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Impact-Resistant Premium</h4>
                <p className="text-gray-600 mb-3">Levelland's most popular choice for maximum hail protection. Multi-layer polymer-modified construction provides Class 4 impact resistance at $8.00-10.00 per square foot with 30-lifetime warranties plus insurance premium discounts.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• UL 2218 Class 4 impact rated</li>
                  <li>• 130+ MPH wind resistance</li>
                  <li>• Advanced cooling technology</li>
                  <li>• Up to 20% insurance discounts</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Designer Luxury Collections</h4>
                <p className="text-gray-600 mb-3">Premium options for discerning Levelland homeowners and college faculty. Authentic slate, wood shake, and tile appearances with lifetime warranties. Investment range: $11.00-15.50 per square foot for maximum protection and curb appeal.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lifetime limited warranties</li>
                  <li>• Maximum weather protection</li>
                  <li>• Cool-roof ENERGY STAR rating</li>
                  <li>• Authentic dimensional profiles</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">Levelland Climate-Optimized Installation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">High-Plains Wind Engineering</h4>
                  <p className="text-gray-600 mb-4">Levelland's exposure to straight-line winds requires specialized installation techniques. We use enhanced fastening patterns, upgraded edge detailing, and wind-tested adhesive applications to handle sustained winds of 70+ MPH and gusts exceeding 100 MPH common during South Plains storm systems.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">College Town Aesthetics</h4>
                  <p className="text-gray-600">Our installations consider Levelland's unique character as home to South Plains College. We help homeowners select colors and styles that complement the college atmosphere while meeting neighborhood standards and enhancing property values in this educational community.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Extreme UV Protection</h4>
                  <p className="text-gray-600 mb-4">South Plains elevation and clear skies create intense UV exposure requiring specialized materials. We use advanced UV-resistant granules, high-performance underlayment, and reflective technologies that maintain appearance and performance under Levelland's intense solar radiation.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Agricultural Consideration</h4>
                  <p className="text-gray-600">Installation schedules account for agricultural activities including cotton harvest dust, crop burning seasons, and equipment vibrations. We coordinate timing to minimize exposure during peak agricultural periods while ensuring optimal installation conditions.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Levelland Professional Installation Process</h2>
            
            <div className="space-y-8">
              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-green-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Comprehensive Home Assessment</h3>
                  <p className="text-gray-600">Our detailed evaluation process examines your Levelland home's exposure to South Plains weather patterns, structural conditions, and energy efficiency opportunities. We use thermal imaging, moisture detection, and drone surveys to identify hail damage, wind damage, UV deterioration, and ventilation deficiencies that could impact performance.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-green-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Tailored Design & Material Consultation</h3>
                  <p className="text-gray-600">Every proposal considers your home's architectural style, neighborhood character, and performance requirements. We provide detailed material comparisons, energy efficiency projections, and long-term value analysis while respecting college town budgets and aesthetic preferences common in Levelland neighborhoods.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-green-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Expert Installation & Quality Assurance</h3>
                  <p className="text-gray-600">Our certified crews complete most Levelland residential projects in 2-3 days using manufacturer-approved techniques and premium materials. We maintain clean worksites, protect college campus proximity considerations, and conduct rigorous quality inspections to ensure your investment delivers decades of reliable performance.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-green-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Complete Warranty & Ongoing Support</h3>
                  <p className="text-gray-600">Project completion includes thorough cleanup, comprehensive warranty documentation, and maintenance guidance for Levelland's unique climate challenges. We provide 24/7 emergency service throughout Hockley County and maintain detailed maintenance schedules tailored to South Plains weather patterns.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Insurance Claims & Student-Friendly Financing</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Hail Damage Claims Expertise</h3>
                <p className="text-gray-600 mb-4">Levelland's location in Hail Alley makes storm damage claims routine. We work with all major carriers including State Farm, Allstate, Farmers, and USAA to document damage comprehensively and ensure full coverage of necessary repairs and upgrades.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free comprehensive damage assessments</li>
                  <li>• Professional drone damage documentation</li>
                  <li>• Direct insurance adjuster coordination</li>
                  <li>• Hidden damage identification and reporting</li>
                  <li>• Supplemental claim assistance for full coverage</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Flexible College-Town Financing</h3>
                <p className="text-gray-600 mb-4">Understanding Levelland's diverse economy including college employees, agricultural families, and young professionals, we offer financing solutions that work for every budget and payment preference.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 0% interest financing for qualified buyers</li>
                  <li>• Extended payment terms up to 60 months</li>
                  <li>• No prepayment penalties or hidden fees</li>
                  <li>• Quick approval process (same day)</li>
                  <li>• Educational discounts for college employees</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Serving All Levelland Areas</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Historic Downtown Levelland</h4>
                <p className="text-gray-600 text-sm">Original Levelland neighborhoods featuring 1920s-1950s architecture near the courthouse square. We maintain historical character while upgrading performance to modern standards for these charming properties.</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">South Plains College Area</h4>
                <p className="text-gray-600 text-sm">Faculty neighborhoods and student-adjacent residential areas requiring reliable roofing solutions. Popular area for college employees seeking maximum value and energy efficiency.</p>
              </div>
              
              <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">North Levelland Residential</h4>
                <p className="text-gray-600 text-sm">Newer suburban developments with contemporary architectural styles requiring advanced ventilation and impact-resistant materials to handle South Plains weather exposure.</p>
              </div>
              
              <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">West Side Neighborhoods</h4>
                <p className="text-gray-600 text-sm">Established residential areas with well-maintained homes requiring cost-effective roofing solutions that enhance property values and reduce energy costs for long-term residents.</p>
              </div>
              
              <div className="bg-gradient-to-b from-red-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Rural Hockley County</h4>
                <p className="text-gray-600 text-sm">Agricultural properties and country homes requiring specialized installation techniques for larger structures and extreme weather exposure typical of South Plains farming operations.</p>
              </div>
              
              <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">East Levelland</h4>
                <p className="text-gray-600 text-sm">Mix of established and newer residential areas including both college-related housing and family neighborhoods requiring diverse roofing solutions for various architectural styles.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Levelland, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.38!3d33.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sLevelland%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Levelland, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Levelland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Levelland property owners. Expert asphalt shingle roofing with comprehensive warranties and insurance claim assistance.
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
