import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roofing Levelland TX | 5 Star Roofing',
  description: "Professional residential roofing in Levelland TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function ResidentialRoofingLevellandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Levelland", url: "/residential-roofing-levelland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Levelland TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
            "name": "Residential Roofing in Levelland",
            "description": "Professional residential roofing services in Levelland, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Levelland",
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
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Levelland?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Levelland typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/ResidentialServices.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Levelland</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing throughout Levelland. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">24/7</div><div className="text-brand-brown font-semibold text-lg">Emergency Service</div></div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Levelland's Premier Residential Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional residential roofing throughout Levelland and Hockley County. As the county seat and home to South Plains College, Levelland presents unique roofing challenges from diverse housing stock ranging from historic downtown properties to modern college housing developments and expanding suburban neighborhoods.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Levelland's 13,500 residents with expert installations, comprehensive warranties, and outstanding customer service. We understand the specific needs of college town housing, rental properties, and family homes throughout this growing community.</p>
            
            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Levelland Housing Market Overview</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Levelland's housing market reflects its dual identity as a college town and agricultural center. The median home value is approximately $95,000, making it one of the most affordable markets in the South Plains region. The proximity to South Plains College creates a robust rental market, with many properties serving both students and local families.</p>
              
              <p className="text-gray-700 leading-relaxed mb-4">The housing stock includes significant numbers of homes built in the 1950s-1970s boom period, many of which are approaching roof replacement age. Newer developments near the college and along FM 1585 feature modern construction, while historic downtown areas showcase early 20th-century architecture requiring specialized roofing approaches.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Levelland Housing Statistics</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Population: ~13,500 residents</li>
                  <li>• Median home value: $95,000</li>
                  <li>• Dominant housing era: 1950-1980</li>
                  <li>• College housing demand: High</li>
                  <li>• Rental property percentage: 35%</li>
                  <li>• Average home size: 1,200-1,600 sq ft</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">South Plains Climate Impact</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Elevation: 3,510 feet</li>
                  <li>• Hail season: March through September</li>
                  <li>• Average wind speed: 13.2 mph</li>
                  <li>• Annual precipitation: 19 inches</li>
                  <li>• Temperature range: -5°F to 100°F</li>
                  <li>• Intense UV exposure year-round</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Comprehensive Roofing Services for Levelland Properties</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Residential Roof Replacement</h3>
                <p className="text-gray-700 mb-4">Complete roof replacement services for single-family homes, college housing, and rental properties throughout Levelland.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Class 4 impact-resistant systems</li>
                  <li>• Energy-efficient materials</li>
                  <li>• Multi-property discounts</li>
                  <li>• Student housing specialists</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">College Housing Specialists</h3>
                <p className="text-gray-700 mb-4">Specialized services for property managers and landlords serving South Plains College student housing market.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rental property roofing</li>
                  <li>• Maintenance programs</li>
                  <li>• Summer installation scheduling</li>
                  <li>• Property management partnerships</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Storm Damage Restoration</h3>
                <p className="text-gray-700 mb-4">Expert restoration for South Plains severe weather damage including hail, wind, and flash flood impacts.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 emergency response</li>
                  <li>• Multi-property coordination</li>
                  <li>• Insurance claim expertise</li>
                  <li>• Temporary protection services</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Levelland-Specific Roofing Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">College Town Dynamics</h4>
                  <p className="text-gray-700 mb-4">The presence of South Plains College creates unique roofing needs. Many properties serve as student housing, requiring durable materials and efficient maintenance schedules that work around academic calendars.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Agricultural Environment</h4>
                  <p className="text-gray-700">Levelland sits in prime cotton-growing country, creating environmental factors including seasonal dust, agricultural chemicals, and machinery vibrations that impact roofing longevity.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Economic Considerations</h4>
                  <p className="text-gray-700 mb-4">With a median home value of $95,000, Levelland homeowners need cost-effective roofing solutions. We offer financing options and work with insurance companies to maximize claim benefits.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Historic Preservation</h4>
                  <p className="text-gray-700">Downtown Levelland features historic commercial and residential districts requiring specialized roofing approaches that maintain architectural character while providing modern protection.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Levelland Property Owners Choose 5 Star Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Local Market Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">College Housing Experience</h4>
                      <p className="text-gray-700">Extensive experience with rental properties and student housing, understanding the unique scheduling and durability requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">South Plains Weather Knowledge</h4>
                      <p className="text-gray-700">Deep understanding of local weather patterns, including the unique hail corridors and wind patterns affecting Hockley County.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Property Management Partnerships</h4>
                      <p className="text-gray-700">Established relationships with local property management companies and maintenance programs for multi-property portfolios.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Service Coverage Area</h3>
                <p className="text-gray-700 mb-4">Complete residential and commercial roofing services throughout Hockley County and surrounding areas:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Levelland historic district</li>
                  <li>• South Plains College campus area</li>
                  <li>• Residential neighborhoods off FM 1585</li>
                  <li>• Rural properties throughout Hockley County</li>
                  <li>• Sundown, Opdyke West, and Anton areas</li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-brand-brown font-semibold">Special scheduling available for college housing properties. Summer installation priority for student housing providers.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions About Levelland Roofing</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Levelland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Levelland typically costs $7,000-$20,000, reflecting the area's more affordable housing market. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500). The average Levelland home (1,200-1,600 sq ft) costs $9,000-$14,000 for complete replacement with impact-resistant materials.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work with rental property owners and landlords?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in rental property roofing throughout Levelland's college housing market. We offer multi-property discounts, flexible scheduling around academic calendars, and maintenance programs for property management companies. Our team understands the unique needs of student housing providers.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the best time for roof replacement in Levelland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Summer months (June-August) are ideal for college housing projects when students are away. For residential properties, late spring and early fall offer the best weather windows. We coordinate with property owners to minimize disruption to tenants and academic schedules.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do South Plains weather patterns affect roofing in Levelland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Levelland's location in the South Plains creates unique challenges including frequent hail, high winds, and extreme temperature swings. The 3,510-foot elevation increases UV exposure. We use materials specifically engineered for these conditions, including Class 4 impact-resistant shingles and high-wind rated systems.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you offer financing options for Levelland homeowners?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we understand Levelland's affordable housing market and offer flexible financing options including 12-24 month payment plans. Many projects qualify for insurance coverage, and we assist with claims to minimize out-of-pocket costs. We also offer property management company billing arrangements.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials perform best in the Levelland climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Impact-resistant asphalt shingles excel in Levelland's hail-prone environment. Metal roofing offers excellent energy efficiency and longevity for the high-UV exposure. We avoid materials that struggle with the freeze-thaw cycles and recommend reflective options to combat intense summer heat and reduce cooling costs.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle emergency repairs during the school year?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide 24/7 emergency response throughout the school year with special consideration for student housing. Our team coordinates with property managers to minimize disruption and provides temporary protection services. We maintain emergency contact protocols for multi-property owners and college housing providers.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work with South Plains College housing projects?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we have experience with educational facility roofing and work with approved contractor lists. We understand the specific requirements for institutional projects and can coordinate with college facilities management. Our commercial division handles larger campus projects while our residential team serves off-campus student housing.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Student Housing & Rental Property Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Property Management Services</h3>
                <p className="text-gray-700 mb-6">With over 35% of Levelland's housing serving as rental properties, we've developed specialized services for property managers and landlords. Our programs are designed to maintain property values while minimizing tenant disruption.</p>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-brown mb-2">🏢 Property Management Benefits:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Multi-property volume discounts</li>
                    <li>• Preventive maintenance programs</li>
                    <li>• Emergency response priority</li>
                    <li>• Tenant coordination services</li>
                    <li>• Insurance claim assistance</li>
                    <li>• Flexible billing arrangements</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">College Housing Specialists</h3>
                <p className="text-gray-700 mb-6">South Plains College's student population creates unique housing demands. We understand the academic calendar constraints and provide specialized scheduling for student housing providers.</p>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-brown mb-2">🎓 Student Housing Features:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Summer installation priority</li>
                    <li>• Academic calendar coordination</li>
                    <li>• Minimal disruption protocols</li>
                    <li>• Durable, low-maintenance materials</li>
                    <li>• Energy-efficient systems</li>
                    <li>• Safety-focused installations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Seasonal Scheduling & Planning</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌞</div>
                  <h4 className="font-bold text-brand-brown mb-2">Summer (June-August)</h4>
                  <p className="text-gray-700 text-sm">Peak season for student housing projects. Maximum availability, minimal tenant disruption, ideal weather conditions.</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">🍂</div>
                  <h4 className="font-bold text-brand-brown mb-2">Fall/Spring (Sept-May)</h4>
                  <p className="text-gray-700 text-sm">Emergency repairs and insurance claims. Coordinated scheduling to minimize academic disruption.</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">❄️</div>
                  <h4 className="font-bold text-brand-brown mb-2">Winter (Dec-Feb)</h4>
                  <p className="text-gray-700 text-sm">Emergency services only. Planning and preparation for spring projects.</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Levelland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Levelland property owners. Expert residential roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}