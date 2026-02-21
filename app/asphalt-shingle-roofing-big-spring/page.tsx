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
  alternates: { canonical: 'https://5starroofingpros.com/asphalt-shingle-roofing-big-spring/' },
  title: 'Asphalt Shingles Big Spring TX | 5 Star Roofing',
  description: "Quality asphalt shingle roofing in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function AsphaltShingleRoofingBigSpringPage() {
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
                      "name": "Big Spring",
                      "url": "/asphalt-shingle-roofing-big-spring/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "RoofingContractor"],
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-big-spring/#localbusiness",
        "name": "5 Star Roofing",
        "image": "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
        "telephone": "(806) 622-6041",
        "email": "admin@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.2504, "longitude": -101.4787 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-big-spring/",
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Expert asphalt shingle roofing services in Big Spring, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "@type": ["LocalBusiness", "RoofingContractor"],
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Roofing",
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
              "name": "Big Spring",
              "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Quality asphalt shingle roofing in Big Spring TX. West Texas experiences 7-9 hailstorms annually."
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
                Asphalt Shingle Roofing in <span className="text-brand-gold-light">Big Spring</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas Asphalt Shingle Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Quality asphalt shingle roofing in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
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
              What Makes Big Spring a Top Choice for Roof Repair?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Big Spring, Texas, positioned strategically along Interstate 20 in Howard County, faces some of West Texas's most challenging weather patterns. With an elevation of 2,398 feet and exposure to high-plains wind patterns, Big Spring experiences 7-9 major hailstorms annually with stones reaching tennis ball size. Summer temperatures regularly exceed 100°F while winter lows can drop to 20°F, creating thermal stress that tests every roofing component. Annual precipitation of only 19 inches means intense, sporadic storms that dump massive amounts of water in short periods.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has specialized in protecting Big Spring's diverse residential neighborhoods with premium asphalt shingle systems engineered for West Texas extremes. From historic homes near Downtown Big Spring to modern subdivisions around Big Spring State Park, we understand the unique challenges facing homeowners: extreme UV exposure, frequent dust storms, oil field activity impacts, and the need for energy-efficient solutions that combat brutal summer heat while maintaining affordability in this hardworking community.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Why Big Spring Homeowners Invest in Quality Asphalt Shingles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Exceptional Home Value Protection</h4>
                  <p className="text-gray-600 mb-4">With Big Spring's median home value of $89,500, protecting your investment requires smart roofing choices. Quality asphalt shingles increase property values by 15-25% while providing decades of reliable protection. Our installations deliver superior ROI compared to premium materials while maintaining the classic appearance that defines Big Spring's residential character.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">West Texas Storm Resistance</h4>
                  <p className="text-gray-600">Modern impact-resistant shingles feature UL 2218 Class 4 ratings specifically designed for Big Spring's severe hail patterns. Advanced wind resistance up to 150 MPH handles the powerful straight-line winds and microbursts common during West Texas thunderstorm complexes that sweep across the Llano Estacado.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Energy Cost Reduction</h4>
                  <p className="text-gray-600 mb-4">Cool-roof technology and proper attic ventilation reduce cooling costs by 20-30% during Big Spring's scorching summers. Reflective granules deflect solar radiation while advanced underlayment systems create thermal barriers that keep homes comfortable without overworking HVAC systems.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Low-Maintenance Performance</h4>
                  <p className="text-gray-600">Unlike metal roofing that requires regular maintenance due to West Texas dust and temperature cycling, or tile that cracks under thermal stress, architectural asphalt shingles deliver 30-50 year lifespans with minimal upkeep while maintaining their appearance and protective qualities.</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Complete Asphalt Shingle Solutions for Big Spring Homes</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Standard Architectural Shingles</h4>
                <p className="text-gray-600 mb-3">Ideal for Big Spring homeowners seeking dependable protection at affordable prices. Starting at $4.75 per square foot installed, these GAF Timberline or CertainTeed Landmark shingles provide 25-30 year protection with excellent hail and wind resistance.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 110 MPH wind warranty</li>
                  <li>• Algae resistance guarantee</li>
                  <li>• Class A fire safety rating</li>
                  <li>• 15 popular color choices</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Impact-Resistant Premium</h4>
                <p className="text-gray-600 mb-3">Big Spring's top choice for maximum hail protection. Multi-layer construction with advanced polymer modification provides Class 4 impact resistance at $7.50-9.50 per square foot with 30-lifetime warranties and potential insurance discounts.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• UL 2218 Class 4 impact rated</li>
                  <li>• 130+ MPH wind resistance</li>
                  <li>• Cool-roof energy efficiency</li>
                  <li>• Insurance premium reductions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Luxury Designer Collections</h4>
                <p className="text-gray-600 mb-3">Premium options for discerning Big Spring homeowners. Authentic slate, cedar, and tile appearances with lifetime warranties and maximum performance. Investment range: $10.50-14.50 per square foot for ultimate protection and curb appeal.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lifetime limited warranties</li>
                  <li>• Maximum weather protection</li>
                  <li>• Advanced cooling technology</li>
                  <li>• Authentic textured profiles</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">Big Spring Climate-Specific Installation Methods</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">High-Wind Zone Engineering</h4>
                  <p className="text-gray-600 mb-4">Big Spring's location in ASCE 7 Wind Zone II requires enhanced fastening patterns and specialized installation techniques. We use 6-nail fastening on perimeter shingles, upgraded edge details, and wind-tested sealant applications to handle 70+ MPH sustained winds and 90+ MPH gusts common during West Texas storm systems.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Thermal Movement Accommodation</h4>
                  <p className="text-gray-600">West Texas temperature swings can reach 60-70°F in a single day. Our installations include expansion joints, flexible flashings, and climate-adapted fastening schedules that allow natural thermal movement without compromising weather-tight seals or structural integrity.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Enhanced Ventilation Systems</h4>
                  <p className="text-gray-600 mb-4">Big Spring's intense summer heat requires superior attic ventilation to prevent premature shingle aging and reduce energy costs. We install balanced ridge and soffit vent systems with intake-to-exhaust ratios optimized for West Texas climate conditions.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Local Code Compliance</h4>
                  <p className="text-gray-600">All installations meet Howard County building requirements, including fire safety provisions for rural areas, structural load calculations for high-wind zones, and coordination with local utility providers including AEP Texas and Atmos Energy.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">What Does Big Spring Installation Excellence Involve?</h2>
            
            <div className="space-y-8">
              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Detailed Property Evaluation</h3>
                  <p className="text-gray-600">Our comprehensive inspection process evaluates your Big Spring home's unique challenges including wind exposure, hail damage history, UV deterioration, and structural conditions. We use advanced moisture detection, thermal imaging, and drone photography to document current conditions and identify potential issues before they become expensive problems.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-blue-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Customized Material Selection & Design</h3>
                  <p className="text-gray-600">Every Big Spring home receives a tailored proposal featuring shingle options matched to your home's architecture, neighborhood standards, and performance requirements. We consider factors like directional wind exposure, solar heat gain, and long-term maintenance needs while providing detailed cost-benefit analysis for each option.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Professional Installation & Protection</h3>
                  <p className="text-gray-600">Our certified installation teams complete most Big Spring residential projects in 2-3 days using manufacturer-certified techniques and premium materials. We protect landscaping, maintain clean worksites, and conduct quality inspections at every stage to ensure your investment delivers decades of reliable performance.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-blue-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Comprehensive Warranty & Support</h3>
                  <p className="text-gray-600">Final project completion includes thorough cleanup, detailed warranty documentation, and ongoing support for Big Spring's unique climate challenges. We provide  throughout Howard County and maintain detailed maintenance schedules tailored to West Texas weather patterns.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">How Do Financing and Insurance Work in Big Spring?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Storm Damage Claims Expertise</h3>
                <p className="text-gray-600 mb-4">Big Spring's frequent severe weather makes insurance claims a common necessity. We maintain excellent relationships with all major carriers including State Farm, Allstate, Farmers, and USAA, providing detailed damage documentation and comprehensive repair estimates that ensure full coverage.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free detailed damage assessments</li>
                  <li>• Professional drone documentation</li>
                  <li>• Direct adjuster communication</li>
                  <li>• Hidden damage identification</li>
                  <li>• Supplemental claim assistance</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Flexible Payment Options</h3>
                <p className="text-gray-600 mb-4">Understanding Big Spring's diverse economy, we offer financing solutions that work for everyone from oil field workers to state employees to retirees seeking to protect their most valuable investment.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 0% interest financing available</li>
                  <li>• Extended terms up to 60 months</li>
                  <li>• No prepayment penalties</li>
                  <li>• Quick approval process</li>
                  <li>• Deductible financing options</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Serving All Big Spring Communities</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Historic Downtown Big Spring</h4>
                <p className="text-gray-600 text-sm">Original Big Spring neighborhoods featuring 1920s-1940s architecture including Craftsman bungalows and early ranch homes. We specialize in maintaining historical character while upgrading to modern performance standards.</p>
              </div>
              
              <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">College Heights & Kentwood</h4>
                <p className="text-gray-600 text-sm">Established neighborhoods with well-maintained homes requiring reliable, cost-effective roofing solutions. Popular area for young families and first-time homeowners seeking maximum value.</p>
              </div>
              
              <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Highland South & Coronado Hills</h4>
                <p className="text-gray-600 text-sm">Newer residential developments with contemporary architectural styles requiring advanced ventilation systems and energy-efficient roofing solutions to handle West Texas heat.</p>
              </div>
              
              <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">State Park Area</h4>
                <p className="text-gray-600 text-sm">Properties near Big Spring State Park with enhanced wind exposure requiring specialized fastening techniques and impact-resistant materials for optimal storm protection.</p>
              </div>
              
              <div className="bg-gradient-to-b from-red-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Rural Howard County</h4>
                <p className="text-gray-600 text-sm">Ranch properties and country homes requiring specialized installation techniques for larger structures and extreme weather exposure typical of West Texas rural locations.</p>
              </div>
              
              <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">East Big Spring</h4>
                <p className="text-gray-600 text-sm">Mixed residential areas including both established neighborhoods and newer construction, requiring diverse roofing solutions that balance performance, aesthetics, and affordability.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Big Spring, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-101.47!3d32.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sBig%20Spring%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Big Spring, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="big-spring" currentService="asphalt-shingle-roofing" />


        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Big Spring Asphalt Shingle Roofing FAQs
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="faq-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does Big Spring&apos;s refinery environment affect asphalt shingle selection?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Big Spring&apos;s Delek US refinery operations release airborne particulates that can settle on roof surfaces and interact with shingle materials. We recommend shingles with enhanced chemical resistance and UV-stabilized granules for Big Spring properties, particularly those downwind of industrial operations along I-20. Regular cleaning of accumulated particulates helps extend shingle life.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What wind ratings are recommended for asphalt shingles in Big Spring?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Big Spring&apos;s location on the Llano Estacado at 2,400 feet elevation produces sustained winds averaging 12 mph with frequent gusts exceeding 50 mph. We recommend asphalt shingles rated for at least 130 mph wind resistance with six-nail installation patterns that exceed standard four-nail minimums. Enhanced starter strip adhesion is also critical for Big Spring installations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Are there specific shingle colors that perform better in Big Spring&apos;s heat?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lighter-colored shingles reflect more solar radiation and can reduce attic temperatures by 10-15 degrees in Big Spring&apos;s extreme summer heat. However, darker colors better hide the red-brown dust common in Howard County. We typically recommend medium-toned architectural shingles with cool-roof technology that provides UV reflectance regardless of color.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How often should Big Spring homeowners have their shingle roofs inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We recommend professional inspections twice annually for Big Spring properties: once in early spring before severe storm season and once in late fall. Additionally, request an inspection after any hailstorm producing quarter-sized or larger hail. Big Spring&apos;s combination of hail, wind, UV exposure, and industrial particulates means damage can accumulate quickly if not addressed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does Big Spring&apos;s hard water affect roof maintenance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Big Spring&apos;s notoriously hard water with high mineral content can leave calcium deposits on roof surfaces and in gutters when sprinkler systems overshoot or during rare heavy rains. These mineral deposits trap moisture and create conditions for algae growth. We can install zinc or copper strips along ridge lines that naturally inhibit algae and mineral buildup.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What warranty coverage is most important for Big Spring asphalt shingles?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In Big Spring&apos;s demanding climate, look for manufacturer warranties that specifically cover wind damage above 110 mph, algae resistance, and thermal cycling performance. Our preferred manufacturers offer 50-year limited lifetime warranties with 10-15 year full coverage periods. We also provide our own workmanship warranty that covers installation quality regardless of manufacturer terms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>


        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Big Spring property owners. Expert asphalt shingle roofing with comprehensive warranties and insurance claim assistance.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type":"Question","name":"How does Big Spring's refinery environment affect asphalt shingle selection?","acceptedAnswer":{"@type":"Answer","text":"Big Spring's Delek US refinery operations release airborne particulates that can settle on roof surfaces and interact with shingle materials. We recommend shingles with enhanced chemical resistance and UV-stabilized granules for Big Spring properties, particularly those downwind of industrial operations along I-20. Regular cleaning of accumulated particulates helps extend shingle life."}},
              {"@type":"Question","name":"What wind ratings are recommended for asphalt shingles in Big Spring?","acceptedAnswer":{"@type":"Answer","text":"Big Spring's location on the Llano Estacado at 2,400 feet elevation produces sustained winds averaging 12 mph with frequent gusts exceeding 50 mph. We recommend asphalt shingles rated for at least 130 mph wind resistance with six-nail installation patterns that exceed standard four-nail minimums. Enhanced starter strip adhesion is also critical for Big Spring installations."}},
              {"@type":"Question","name":"Are there specific shingle colors that perform better in Big Spring's heat?","acceptedAnswer":{"@type":"Answer","text":"Lighter-colored shingles reflect more solar radiation and can reduce attic temperatures by 10-15 degrees in Big Spring's extreme summer heat. However, darker colors better hide the red-brown dust common in Howard County. We typically recommend medium-toned architectural shingles with cool-roof technology that provides UV reflectance regardless of color."}},
              {"@type":"Question","name":"How often should Big Spring homeowners have their shingle roofs inspected?","acceptedAnswer":{"@type":"Answer","text":"We recommend professional inspections twice annually for Big Spring properties: once in early spring before severe storm season and once in late fall. Additionally, request an inspection after any hailstorm producing quarter-sized or larger hail. Big Spring's combination of hail, wind, UV exposure, and industrial particulates means damage can accumulate quickly if not addressed."}},
              {"@type":"Question","name":"Does Big Spring's hard water affect roof maintenance?","acceptedAnswer":{"@type":"Answer","text":"Big Spring's notoriously hard water with high mineral content can leave calcium deposits on roof surfaces and in gutters when sprinkler systems overshoot or during rare heavy rains. These mineral deposits trap moisture and create conditions for algae growth. We can install zinc or copper strips along ridge lines that naturally inhibit algae and mineral buildup."}},
              {"@type":"Question","name":"What warranty coverage is most important for Big Spring asphalt shingles?","acceptedAnswer":{"@type":"Answer","text":"In Big Spring's demanding climate, look for manufacturer warranties that specifically cover wind damage above 110 mph, algae resistance, and thermal cycling performance. Our preferred manufacturers offer 50-year limited lifetime warranties with 10-15 year full coverage periods. We also provide our own workmanship warranty that covers installation quality regardless of manufacturer terms."}}
            ]
          })
        }}
      />
    </>
  );
}
