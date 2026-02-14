import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/residential-roofing-monahans/' },
  title: 'Residential Roofing Monahans TX | 5 Star Roofing',
  description: "Professional residential roofing in Monahans TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function ResidentialRoofingMonahansPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Monahans", url: "/residential-roofing-monahans/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-monahans/#localbusiness",
        "name": "5 Star Commercial Roofing - Monahans Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-monahans/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas", "name": "Monahans", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Monahans TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
            "name": "Residential Roofing in Monahans",
            "description": "Professional residential roofing services in Monahans, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Monahans",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Residential Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Monahans?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Monahans typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Monahans</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing throughout Monahans. Expert installation, comprehensive warranties, and . Free inspections and insurance assistance available.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Get Free Inspection</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">Fast</div><div className="text-brand-brown font-semibold text-lg">Response Time</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">1-3</div><div className="text-brand-brown font-semibold text-lg">Days to Complete</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Monahans's Premier Residential Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional residential roofing throughout Monahans and Ward County, serving the heart of the Permian Basin. As a key oil industry hub, Monahans presents unique roofing challenges from extreme desert climate conditions, rapid population growth, and the demanding energy sector environment.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Monahans's 6,950 residents with expert installations designed for desert extremes. Our team understands the specific needs of oil field housing, permanent family residences, and the growing number of modern developments supporting the energy boom.</p>
            
            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Monahans Housing Market Analysis</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Monahans's housing market reflects its position as a major Permian Basin center. The median home value is approximately $135,000, driven by energy sector demand and rapid population growth. The housing stock ranges from historic downtown properties to modern developments built to accommodate oil industry workers and their families.</p>
              
              <p className="text-gray-700 leading-relaxed mb-4">The area's boom-bust history has created diverse housing stock with significant numbers of homes built during the 1970s-1980s oil boom, many requiring roof replacement. Newer subdivisions feature modern energy-efficient construction designed for extreme desert conditions, while older neighborhoods showcase mid-century architecture adapted to the harsh West Texas climate.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Monahans Housing Statistics</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Population: ~6,950 residents (growing)</li>
                  <li>• Median home value: $135,000</li>
                  <li>• Energy sector housing demand: High</li>
                  <li>• Average home age: 38 years</li>
                  <li>• Man camps and workforce housing: 15%</li>
                  <li>• New construction growth: 25% annually</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Desert Climate Challenges</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Extreme heat: 100°F+ for 60+ days</li>
                  <li>• Intense UV radiation year-round</li>
                  <li>• Sandstorm and dust exposure</li>
                  <li>• Rapid temperature fluctuations</li>
                  <li>• Low humidity (10-30%)</li>
                  <li>• Limited rainfall: 12 inches annually</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Specialized Roofing Services for Permian Basin Conditions</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Desert Climate Roofing</h3>
                <p className="text-gray-700 mb-4">Specialized systems engineered for extreme heat, UV exposure, and rapid temperature changes unique to the Chihuahuan Desert region.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cool roof technology</li>
                  <li>• UV-resistant materials</li>
                  <li>• Thermal expansion joints</li>
                  <li>• Reflective coating systems</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Energy Sector Housing</h3>
                <p className="text-gray-700 mb-4">Comprehensive roofing services for oil field housing, workforce developments, and industrial residential properties.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Man camp roofing systems</li>
                  <li>• Multi-unit housing projects</li>
                  <li>• Rapid deployment capabilities</li>
                  <li>• Industrial-grade materials</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Sandstorm Protection</h3>
                <p className="text-gray-700 mb-4">Advanced sealing and protection systems designed to withstand frequent dust storms and abrasive conditions.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Enhanced sealing systems</li>
                  <li>• Abrasion-resistant materials</li>
                  <li>• Dust infiltration prevention</li>
                  <li>• Easy maintenance access</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Permian Basin Roofing Challenges</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Oil Industry Environment</h4>
                  <p className="text-gray-700 mb-4">The active petroleum industry creates unique environmental factors including increased particulate matter, chemical exposure, and vibrations from heavy equipment that impact roofing systems and require specialized materials.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Rapid Development</h4>
                  <p className="text-gray-700">The ongoing Permian Basin boom has led to rapid construction and housing development, requiring efficient roofing solutions that can keep pace with growth while maintaining quality standards.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Desert Extremes</h4>
                  <p className="text-gray-700 mb-4">Monahans's location in the Chihuahuan Desert creates extreme conditions including 100°F+ temperatures for months, intense UV radiation, and dramatic temperature swings that stress roofing materials.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Infrastructure Demands</h4>
                  <p className="text-gray-700">The energy sector's infrastructure needs require roofing systems that can handle industrial environments while providing comfort and efficiency for residential properties.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Monahans Chooses 5 Star Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Permian Basin Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Energy Sector Experience</h4>
                      <p className="text-gray-700">Extensive experience with oil industry housing projects, workforce developments, and the unique demands of Permian Basin construction.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Desert Climate Specialization</h4>
                      <p className="text-gray-700">Deep knowledge of materials and techniques that perform in extreme heat, UV exposure, and abrasive desert conditions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Rapid Response Capability</h4>
                      <p className="text-gray-700">Fast project completion to meet energy sector timelines while maintaining highest quality standards for residential installations.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Service Area Coverage</h3>
                <p className="text-gray-700 mb-4">Complete residential and industrial roofing services throughout Ward County and the greater Permian Basin region:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Monahans historic district</li>
                  <li>• New residential developments</li>
                  <li>• Oil field workforce housing</li>
                  <li>• Ward County rural properties</li>
                  <li>• Wickett, Barstow, and Grandfalls areas</li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-brand-brown font-semibold">Specialized services for energy sector housing projects. Emergency response available for critical infrastructure.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions About Monahans Roofing</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Monahans typically costs $10,000-$28,000, reflecting the need for specialized desert-climate materials and labor demands in the Permian Basin market. Energy sector workers often have higher-value homes requiring premium systems. Most projects qualify for insurance coverage with deductibles of $1,000-$2,500.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in Monahans's desert climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Cool roof systems with reflective properties perform best in Monahans's extreme heat. We recommend Class 4 impact-resistant shingles with high Solar Reflectance Index (SRI), metal roofing with reflective coatings, and tile systems designed for thermal expansion. These materials reduce cooling costs and handle the 100°F+ temperatures common in summer.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work with oil industry housing projects?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in energy sector housing including man camps, workforce developments, and executive housing. We understand the rapid timeline demands of oil industry projects and can coordinate large-scale installations. Our team is experienced with industrial-grade materials and multi-unit housing requirements.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do sandstorms and dust affect roofing in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Frequent sandstorms create abrasive conditions that accelerate wear on standard roofing materials. We use enhanced sealing systems, abrasion-resistant materials, and additional protective measures. Regular maintenance is crucial - we offer inspection programs to address dust infiltration and ensure long-term performance in desert conditions.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the best time for roof replacement in the Permian Basin?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Fall through early spring (October-April) offers the best conditions, avoiding extreme summer heat. However, we work year-round using specialized protocols for hot weather installation. Energy sector projects often require summer completion - we use early morning schedules and heat-protection measures to ensure quality in extreme temperatures.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does the oil industry environment affect residential roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Oil industry operations create increased particulate matter, potential chemical exposure, and vibrations from heavy equipment. We recommend enhanced filtration systems, chemical-resistant materials, and additional structural reinforcement where needed. Properties near active operations may require more frequent inspections and maintenance.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you offer energy-efficient roofing solutions for desert conditions?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. Energy efficiency is critical in Monahans's extreme heat. We install cool roof systems, radiant barriers, and reflective coatings that can reduce cooling costs by 15-30%. Solar-ready systems are popular with energy sector workers who value long-term energy independence and cost savings.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What warranties do you provide for desert climate installations?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide enhanced warranty coverage for desert installations, including 15-year workmanship guarantees and materials warranties of 25-50 years depending on system selection. Our warranties specifically cover thermal expansion issues and UV degradation, addressing the primary concerns in Monahans's extreme climate.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Desert Climate Roofing Solutions</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Cool Roof Technology</h3>
                <p className="text-gray-700 mb-6">In Monahans's extreme heat, cool roof technology can reduce surface temperatures by 50°F or more, dramatically reducing cooling costs and extending material lifespan. Our systems are specifically engineered for desert conditions.</p>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-brown mb-2">❄️ Cool Roof Benefits:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Reduce cooling costs by 15-30%</li>
                    <li>• Extend roof lifespan in extreme heat</li>
                    <li>• Improve indoor comfort</li>
                    <li>• Reduce urban heat island effect</li>
                    <li>• Qualify for energy rebates</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">UV Protection Systems</h3>
                <p className="text-gray-700 mb-6">Monahans receives intense UV radiation year-round due to high elevation and clear desert skies. Our UV protection systems prevent premature aging and maintain material integrity in harsh conditions.</p>
                
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-brown mb-2">☀️ UV Protection Features:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• UV-resistant material formulations</li>
                    <li>• Reflective protective coatings</li>
                    <li>• Enhanced granule technology</li>
                    <li>• Color stability guarantee</li>
                    <li>• Extended lifespan in high-UV environments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Emergency Services for Energy Sector</h3>
              <p className="text-gray-700 mb-6">The oil industry operates, and housing infrastructure must maintain continuous operation. Our emergency response team understands the critical nature of energy sector housing and provides priority service for workforce developments.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚨</div>
                  <h4 className="font-bold text-brand-brown mb-2">Priority Response</h4>
                  <p className="text-gray-700 text-sm">Emergency repairs for energy sector housing receive priority scheduling and rapid mobilization.</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">🏭</div>
                  <h4 className="font-bold text-brand-brown mb-2">Industrial Experience</h4>
                  <p className="text-gray-700 text-sm">Specialized knowledge of oil industry housing requirements and environmental conditions.</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">📞</div>
                  <h4 className="font-bold text-brand-brown mb-2">Availability</h4>
                  <p className="text-gray-700 text-sm">Round-the-clock emergency services to match energy sector operational demands.</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <div className="bg-red-600 text-white p-4 rounded-xl inline-block">
                  <h3 className="text-xl font-bold mb-2">Energy Sector Emergency Hotline</h3>
                  <a href="tel:8066226041" className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-all">
                    📞 (806) 622-6041
                  </a>
                </div>
              </div>
            </div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Monahans Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Monahans property owners. Expert residential roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}