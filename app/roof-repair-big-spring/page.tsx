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
  alternates: { canonical: 'https://5starroofingpros.com/roof-repair-big-spring/' },
  title: "Roof Repair Big Spring TX | 5 Star Commercial Roofing",
  description: "Professional roof repair services in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairBigSpringPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Repair",
                      "url": "/roof-repair/"
              },
              {
                      "name": "Big Spring",
                      "url": "/roof-repair-big-spring/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-big-spring/#localbusiness",
        "name": "5 Star Commercial Roofing - Big Spring Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.2504, "longitude": -101.4787 },
        "url": "https://5starroofingpros.com/roof-repair-big-spring/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Big Spring, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Repair",
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
              "name": "Big Spring",
              "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Professional roof repair services in Big Spring TX. West Texas experiences 7-9 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-25-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-orange-900/75 to-amber-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Repair in <span className="text-brand-gold-light">Big Spring</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas Roof Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof repair services in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
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
              Big Spring's Premier Roof Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Big Spring, Texas, positioned at 2,398 feet elevation in Howard County, faces some of West Texas's most challenging weather conditions. This crossroads city experiences 7-9 intense hailstorms annually, with spring supercells producing hail up to golf ball-size. Combined with sustained winds reaching 70+ mph, temperature swings from freezing to 110°F, and intense UV radiation, Big Spring properties demand specialized roofing expertise.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected over 400 properties throughout Big Spring and Howard County with premium materials and expert craftsmanship. From historic downtown buildings near the Howard County Courthouse to modern facilities along Interstate 20, we understand the unique intersection of weather patterns that make Big Spring one of Texas's most challenging roofing environments.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Big Spring's Unique Weather Challenges</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Big Spring sits at a critical weather intersection where multiple storm systems converge. The city's location between the Llano Estacado plateau and the Edwards Plateau creates unique atmospheric conditions. Dryline storms frequently form here, producing some of Texas's most violent weather, including rotating supercells that spawn tornadoes and deposit devastating hail.
            </p>
            
            <div className="bg-amber-50 p-8 rounded-xl mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Big Spring Weather Statistics:</h4>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>• <strong>Annual Hailstorms:</strong> 7-9 severe events, typically March-June</li>
                <li>• <strong>Wind Patterns:</strong> Average 14 mph, gusts regularly exceed 60 mph</li>
                <li>• <strong>Temperature Range:</strong> -8°F to 110°F recorded extremes</li>
                <li>• <strong>Precipitation:</strong> 20.4 inches annually, mostly from intense storms</li>
                <li>• <strong>Tornado Activity:</strong> EF2+ tornadoes within 25 miles since 2000</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Comprehensive Roof Repair Services</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our Big Spring roof repair team addresses the full spectrum of weather damage common to this region. Whether dealing with hail impact damage, wind uplift from High Plains gusts, thermal stress from extreme temperature swings, or storm debris impact, we have the expertise to restore your roof's protective integrity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Restoration</h4>
                <p className="text-gray-600 mb-3">Specialized repairs for Big Spring's severe weather patterns and their aftermath.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Hail impact assessment and repair</li>
                  <li>• Wind damage structural analysis</li>
                  <li>• Debris impact restoration</li>
                  <li>• Water infiltration prevention</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Emergency Response Services</h4>
                <p className="text-gray-600 mb-3">availability for urgent repairs protecting Big Spring properties.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Immediate leak containment</li>
                  <li>• Emergency tarping and protection</li>
                  <li>• Structural stabilization</li>
                  <li>• Insurance documentation support</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Big Spring Areas We Serve</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our comprehensive Big Spring roof repair services reach every corner of the city and surrounding Howard County areas. From the established neighborhoods near Comanche Trail Park to the growing commercial district along Gregg Street, we've earned trust through consistent quality and reliable service across all of Big Spring's diverse communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Downtown Historic District</h4>
                <p className="text-gray-600 text-sm mb-3">Heritage buildings requiring specialized restoration and preservation techniques.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Historical integrity preservation</li>
                  <li>• Original material sourcing</li>
                  <li>• Modern code compliance</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Suburban Neighborhoods</h4>
                <p className="text-gray-600 text-sm mb-3">Family homes throughout Big Spring's residential developments.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Single-family repair services</li>
                  <li>• Neighborhood-matched materials</li>
                  <li>• HOA compliance assurance</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Industrial Corridor</h4>
                <p className="text-gray-600 text-sm mb-3">Commercial and industrial facilities along major transportation routes.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Large-format roof systems</li>
                  <li>• Minimal disruption scheduling</li>
                  <li>• Safety protocol compliance</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Big Spring Weather Patterns & Roof Impact</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Big Spring's position at the intersection of multiple climate zones creates a complex weather environment. The city experiences continental arid climate with strong seasonal variations. Spring brings the most dangerous weather as Pacific cold fronts collide with warm, moist air from the Gulf of Mexico, creating the perfect conditions for supercell development and severe weather outbreaks.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Seasonal Roofing Challenges in Big Spring</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Spring Storm Season (March-June)</h5>
                  <p className="text-sm text-gray-600 mb-3">Peak severe weather period with supercells, tornadoes, and large hail.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Hail damage assessment and repair</li>
                    <li>• Tornado debris cleanup</li>
                    <li>• Emergency weatherproofing</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Summer Heat (July-September)</h5>
                  <p className="text-sm text-gray-600 mb-3">Extreme temperatures and UV exposure stress roofing materials.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Thermal expansion compensation</li>
                    <li>• UV damage prevention</li>
                    <li>• Cooling efficiency optimization</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Fall Transition (October-November)</h5>
                  <p className="text-sm text-gray-600 mb-3">Temperature fluctuations cause material stress and sealant issues.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Thermal stress analysis</li>
                    <li>• Sealant inspection and replacement</li>
                    <li>• Winter preparation services</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Winter Conditions (December-February)</h5>
                  <p className="text-sm text-gray-600 mb-3">Freeze-thaw cycles and occasional ice storms create unique challenges.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Ice damage prevention</li>
                    <li>• Freeze-thaw cycle management</li>
                    <li>• Winter leak response</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Big Spring-Specific Roofing Solutions</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Not all roofing materials can withstand Big Spring's extreme weather patterns. Our decade of experience in Howard County has taught us which products and installation methods deliver long-term performance. We've refined our material selection and techniques specifically for Big Spring's unique environmental stresses.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Impact-Resistant Roofing Systems</h4>
                <p className="text-gray-600 mb-2">Class 4 impact-rated materials specifically chosen for Big Spring's frequent large hail events, with proven resistance to golf ball-size impacts.</p>
                <p className="text-sm text-gray-500">Qualify for significant insurance discounts in Howard County.</p>
              </div>
              
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Wind-Resistant Installation Methods</h4>
                <p className="text-gray-600 mb-2">Enhanced fastening systems and wind-rated materials designed to withstand Big Spring's High Plains wind patterns and sudden storm gusts.</p>
                <p className="text-sm text-gray-500">Tested to withstand winds up to 130 mph.</p>
              </div>
              
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Energy-Efficient Cool Roofing</h4>
                <p className="text-gray-600 mb-2">Reflective roofing systems that reduce cooling costs during Big Spring's intense summer heat while maintaining durability in severe weather.</p>
                <p className="text-sm text-gray-500">Reduce energy costs by up to 25% during peak summer months.</p>
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

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Frequently Asked Questions - Big Spring Roof Repair</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What makes Big Spring's weather so damaging to roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Big Spring sits at a unique weather intersection where dry air from the west meets moisture from the Gulf of Mexico. This collision creates supercell thunderstorms with rotating updrafts that produce large hail, tornadoes, and destructive winds. The city's elevation and open terrain amplify these effects, making it one of Texas's most challenging environments for roofing systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  How often should Big Spring roofs be inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  We recommend biannual inspections for Big Spring properties - once before storm season (February) and once after (September). Given the intensity of local weather events, post-storm inspections are also crucial. Many insurance policies require prompt reporting of storm damage, so regular inspections help identify issues before they become major problems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  Do you offer emergency roof repair services in Big Spring?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Yes, we provide prompt response throughout Howard County. Our emergency team typically responds within 2-3 hours for urgent calls. We understand that Big Spring storms can cause sudden, severe damage requiring immediate attention to prevent water intrusion and further structural damage to your property.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What roofing materials work best in Big Spring's climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  For Big Spring, we recommend Class 4 impact-resistant shingles, standing seam metal roofing with enhanced wind ratings, and modified TPO systems for commercial properties. These materials are specifically designed to withstand large hail, high winds, and extreme temperature fluctuations. We avoid materials that perform poorly in rapid freeze-thaw cycles or intense UV exposure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  How do you handle insurance claims for Big Spring storm damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  We have extensive experience with Howard County storm damage claims and work directly with all major insurance companies. Our team documents damage thoroughly, provides detailed estimates, and can represent your interests during adjuster meetings. We understand the specific requirements for West Texas weather-related claims and help ensure fair settlements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What warranties do you provide on Big Spring roof repairs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  We provide comprehensive warranty protection: 10-year workmanship warranty, manufacturer material warranties (typically 20-30 years), and specific storm damage guarantees. Our warranties are designed to provide confidence that repairs will withstand Big Spring's severe weather patterns, and we stand behind our work with responsive service throughout the warranty period.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Why Big Spring Chooses 5 Star Commercial Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Proven Local Performance</h3>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Our decade of service in Big Spring and Howard County has given us unique insights into local weather patterns and building challenges. We've weathered multiple severe storm seasons alongside our customers, refining our techniques and building lasting relationships throughout the community.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 400+ Big Spring projects completed</li>
                  <li>• Local building code mastery</li>
                  <li>• Community involvement and investment</li>
                  <li>• Storm season preparedness programs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Advanced Materials & Methods</h3>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  We continuously research and test the latest materials and installation methods designed for extreme weather regions. Our partnerships with leading manufacturers ensure access to the most advanced products suited for Big Spring's challenging environment.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Climate-tested material selection</li>
                  <li>• Advanced installation techniques</li>
                  <li>• Energy efficiency optimization</li>
                  <li>• Comprehensive maintenance programs</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Big Spring Service Promise</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <h4 className="font-bold mb-2 text-brand-brown">Rapid Storm Response</h4>
                  <p className="text-sm text-gray-600">Emergency services when Big Spring weather strikes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🔒</div>
                  <h4 className="font-bold mb-2 text-brand-brown">Comprehensive Warranties</h4>
                  <p className="text-sm text-gray-600">10-year workmanship guarantee on all installations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🤝</div>
                  <h4 className="font-bold mb-2 text-brand-brown">Insurance Partnership</h4>
                  <p className="text-sm text-gray-600">Expert guidance through the entire claims process</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free comprehensive inspections for Big Spring property owners. Expert roof repair with extensive warranties and complete insurance claim assistance. Don't let West Texas weather compromise your investment.
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
