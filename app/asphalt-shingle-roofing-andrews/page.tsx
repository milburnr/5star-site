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
  alternates: { canonical: 'https://5starroofingpros.com/asphalt-shingle-roofing-andrews/' },
  title: 'Asphalt Shingles Andrews TX | 5 Star Roofing',
  description: "Quality asphalt shingle roofing in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function AsphaltShingleRoofingAndrewsPage() {
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
                      "name": "Andrews",
                      "url": "/asphalt-shingle-roofing-andrews/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews Asphalt Shingle Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.3187, "longitude": -102.5454 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert asphalt shingle roofing services in Andrews, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "name": "Andrews",
              "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Quality asphalt shingle roofing in Andrews TX. Permian Basin experiences 6-8 hailstorms annually."
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
                Asphalt Shingle Roofing in <span className="text-brand-gold-light">Andrews</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Asphalt Shingle Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Quality asphalt shingle roofing in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
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
              Andrews's Premier Asphalt Shingle Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Andrews, Texas sits in the heart of the Permian Basin oil country, where extreme weather conditions test every roofing system. With average annual precipitation of just 14 inches but intense summer temperatures reaching 100°F+ and winter lows dropping to 20°F, your roof faces dramatic thermal cycling that can crack and deteriorate inferior materials. The Permian Basin experiences 6-8 significant hailstorms annually, with stones ranging from quarter-size to golf ball diameter, making impact-resistant asphalt shingles essential for Andrews homeowners.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected residential properties throughout Andrews County with premium GAF, CertainTeed, and Owens Corning asphalt shingles. From historic homes near the Andrews County Courthouse to modern subdivisions on North Main Street, we understand the unique challenges facing Andrews homeowners: oil field dust accumulation, high UV exposure, frequent wind storms, and the need for energy-efficient roofing solutions that reduce cooling costs during brutal summer months.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Why Andrews Homeowners Choose Asphalt Shingles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Outstanding Value Investment</h4>
                  <p className="text-gray-600 mb-4">Andrews's median home value of $95,000 makes cost-effective roofing solutions crucial. Quality asphalt shingles deliver decades of protection while enhancing curb appeal and resale value. Our installations typically increase home value by 15-20% while providing excellent ROI compared to premium materials.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Permian Basin Weather Performance</h4>
                  <p className="text-gray-600">Modern architectural shingles feature Class A fire resistance, Class 4 impact ratings for hail protection, and wind resistance up to 130 MPH - essential for Andrews's severe weather patterns including dust storms, derechos, and supercell thunderstorms.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Energy Efficiency Benefits</h4>
                  <p className="text-gray-600 mb-4">Reflective granules and advanced ventilation systems reduce cooling costs by up to 25% during Andrews's scorching summers. Cool-roof technology reflects solar heat while proper attic ventilation prevents ice dam formation during winter freeze-thaw cycles.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Low Maintenance Requirements</h4>
                  <p className="text-gray-600">Unlike metal roofing that requires frequent cleaning due to oil field dust or tile that cracks in temperature extremes, asphalt shingles handle Andrews's challenging conditions with minimal maintenance while delivering 25-50 year lifespans.</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Comprehensive Asphalt Shingle Options for Andrews Homes</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">3-Tab Architectural Shingles</h4>
                <p className="text-gray-600 mb-3">Perfect for Andrews homeowners seeking reliable protection without premium costs. Starting at $4.50 per square foot installed, these GAF or CertainTeed shingles offer 25-year warranties with excellent wind and hail resistance.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 90-110 MPH wind resistance</li>
                  <li>• Class A fire rating</li>
                  <li>• Algae-resistant granules</li>
                  <li>• 12 popular color options</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Dimensional Architectural</h4>
                <p className="text-gray-600 mb-3">Andrews's most popular choice for enhanced curb appeal and performance. Multi-layered design creates shadow lines mimicking premium materials at $6.50-8.50 per square foot with 30-50 year warranties.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Class 4 impact resistance</li>
                  <li>• 130+ MPH wind ratings</li>
                  <li>• Advanced weatherproofing</li>
                  <li>• 25+ designer colors</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Premium Designer Series</h4>
                <p className="text-gray-600 mb-3">Luxury options for discriminating Andrews homeowners. Slate, cedar shake, and tile appearances with lifetime warranties. Investment range: $9.50-13.50 per square foot for ultimate performance and aesthetics.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lifetime limited warranties</li>
                  <li>• Maximum hail/wind protection</li>
                  <li>• Cool-roof technology</li>
                  <li>• Authentic texture patterns</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">Andrews-Specific Installation Expertise</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Local Climate Adaptations</h4>
                  <p className="text-gray-600 mb-4">Our Andrews installations account for extreme temperature swings (80°F+ daily variations), UV exposure levels 25% above Texas averages, and frequent dust storms that affect ventilation systems. We use enhanced fastening patterns, upgraded underlayment, and climate-specific sealants.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Neighborhood Considerations</h4>
                  <p className="text-gray-600">From historic districts near Downtown Andrews to newer developments along Highway 385, we match architectural styles while ensuring optimal performance. Our color consultation service helps select shades that complement Andrews's prevalent brick and stucco construction.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Code Compliance & Permits</h4>
                  <p className="text-gray-600 mb-4">We handle all Andrews building permit requirements, including wind uplift calculations, fire safety compliance, and structural load assessments. Our installations meet or exceed Texas Building Code requirements and HOA guidelines throughout Andrews County.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Utility Integration</h4>
                  <p className="text-gray-600">Proper coordination with Atmos Energy gas lines, AEP electric service, and Andrews internet infrastructure ensures safe, code-compliant installations without service disruptions to your family's daily routines.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Andrews Residential Roofing Process</h2>
            
            <div className="space-y-8">
              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-amber-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-brand-gold text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Comprehensive Property Assessment</h3>
                  <p className="text-gray-600">Our certified inspectors evaluate your Andrews home's current roofing condition, structural integrity, ventilation needs, and energy efficiency opportunities. We document hail damage, wind damage, UV deterioration, and oil field dust accumulation using drone photography and moisture detection technology. This thorough assessment becomes the foundation for insurance claims and warranty coverage.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-amber-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-brand-gold text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Custom Design & Material Selection</h3>
                  <p className="text-gray-600">We create detailed proposals featuring multiple asphalt shingle options tailored to your Andrews home's architecture, budget, and performance requirements. Our design team considers neighborhood aesthetics, HOA requirements, energy efficiency goals, and long-term value enhancement. You'll see actual shingle samples, color comparisons, and projected energy savings specific to Andrews's climate.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-amber-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-brand-gold text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Expert Installation & Quality Control</h3>
                  <p className="text-gray-600">Our GAF Master Elite certified crews complete most Andrews residential projects in 2-3 days using premium materials and proven techniques. We protect landscaping, maintain clean work sites, and conduct multiple quality inspections throughout installation. Every project includes enhanced ventilation systems, upgraded ice-and-water barriers, and fastening patterns exceeding Texas wind requirements.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-amber-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-brand-gold text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Final Inspection & Warranty Activation</h3>
                  <p className="text-gray-600">Final walkthrough includes comprehensive cleanup, detailed warranty documentation, and maintenance guidance specific to Andrews's climate challenges. We coordinate final inspections with Andrews building officials, activate manufacturer warranties, and provide prompt contact information for storm response coverage throughout Andrews County.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Insurance Claims & Financing Options</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Storm Damage Claims Assistance</h3>
                <p className="text-gray-600 mb-4">Andrews homeowners face frequent hail and wind damage requiring insurance claims. We work directly with all major carriers including State Farm, Allstate, USAA, and Farmers to document damage, provide detailed estimates, and ensure full coverage of necessary repairs.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free insurance inspection reports</li>
                  <li>• Damage documentation with drone photography</li>
                  <li>• Direct insurance company communication</li>
                  <li>• Supplemental claim assistance for hidden damage</li>
                  <li>• Deductible financing options available</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Flexible Payment Solutions</h3>
                <p className="text-gray-600 mb-4">We understand Andrews's economy relies heavily on oil and gas industry cycles. Our flexible financing helps homeowners protect their investment regardless of current market conditions.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 0% interest financing (qualified buyers)</li>
                  <li>• Extended payment plans up to 60 months</li>
                  <li>• No prepayment penalties</li>
                  <li>• Same-day approval process</li>
                  <li>• Cash discounts for full payment</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Serving All Andrews Neighborhoods</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Historic Downtown Andrews</h4>
                <p className="text-gray-600 text-sm">Original Andrews neighborhoods near the courthouse featuring 1920s-1950s architecture. We specialize in historically-appropriate repairs while upgrading performance to modern standards.</p>
              </div>
              
              <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">North Andrews Residential</h4>
                <p className="text-gray-600 text-sm">Modern subdivisions along North Main Street and Highway 385 corridor. Contemporary homes require advanced ventilation and energy-efficient roofing solutions.</p>
              </div>
              
              <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">South Andrews Area</h4>
                <p className="text-gray-600 text-sm">Established neighborhoods with mix of ranch-style homes and newer construction. Focus on value-oriented solutions that enhance property values and reduce energy costs.</p>
              </div>
              
              <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">West Andrews Developments</h4>
                <p className="text-gray-600 text-sm">Newer residential areas with modern building codes requiring enhanced wind resistance and energy efficiency standards. Premium material installations are popular.</p>
              </div>
              
              <div className="bg-gradient-to-b from-red-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Rural Andrews County</h4>
                <p className="text-gray-600 text-sm">Country homes and ranch properties requiring specialized installation techniques for larger structures and extreme weather exposure typical of rural Permian Basin locations.</p>
              </div>
              
              <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Industrial District Adjacent</h4>
                <p className="text-gray-600 text-sm">Residential properties near oil and gas facilities requiring specialized cleaning protocols and enhanced filtration systems to handle increased dust and particulate exposure.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Andrews, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.55!3d32.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sAndrews%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Andrews, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Andrews property owners. Expert asphalt shingle roofing with comprehensive warranties and insurance claim assistance.
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
