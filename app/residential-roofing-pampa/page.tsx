import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roofing Pampa TX | 5 Star Roofing',
  description: "Professional residential roofing in Pampa TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function ResidentialRoofingPampaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Pampa", url: "/residential-roofing-pampa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-pampa/#localbusiness",
        "name": "5 Star Commercial Roofing - Pampa Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-pampa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas", "name": "Pampa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Pampa TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
            "name": "Residential Roofing in Pampa",
            "description": "Professional residential roofing services in Pampa, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Pampa",
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
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Pampa typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-pampa-36-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Pampa</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing throughout Pampa. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Pampa's Premier Residential Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional residential roofing throughout Pampa and Gray County, serving the "Top of Texas" with pride. Located at the crossroads of energy, agriculture, and commerce, Pampa presents unique roofing challenges from its elevated position on the High Plains and proximity to severe weather corridors.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Pampa's 17,300 residents with expert installations designed for Panhandle extremes. Our team understands the diverse housing needs of this historic railroad town, from established neighborhoods near downtown to modern developments supporting the area's oil and gas operations.</p>
            
            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Pampa Housing Market Characteristics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Pampa's housing market reflects its history as a major Panhandle hub and its ongoing role in energy production. The median home value is approximately $115,000, with a housing stock that spans from historic downtown properties to modern suburban developments. The city's strategic location has attracted steady population growth despite economic fluctuations.</p>
              
              <p className="text-gray-700 leading-relaxed mb-4">The housing inventory includes significant numbers of homes built during the 1960s-1980s boom periods, many now requiring roof replacement. Established neighborhoods like those around Austin Elementary and Pampa High School feature mid-century architecture, while newer developments near Loop 171 showcase modern energy-efficient construction adapted to High Plains conditions.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Pampa Housing Statistics</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Population: ~17,300 residents</li>
                  <li>• Median home value: $115,000</li>
                  <li>• Average home age: 44 years</li>
                  <li>• Major housing era: 1960-1985</li>
                  <li>• Owner-occupied rate: 68%</li>
                  <li>• Average home size: 1,500-1,900 sq ft</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">"Top of Texas" Climate</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Elevation: 3,234 feet</li>
                  <li>• Severe weather frequency: Very High</li>
                  <li>• Annual hail events: 6-8</li>
                  <li>• Peak wind speeds: 80+ mph</li>
                  <li>• Temperature range: -15°F to 105°F</li>
                  <li>• Proximity to Tornado Alley</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Comprehensive Roofing Services for Top of Texas</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Complete Roof Replacement</h3>
                <p className="text-gray-700 mb-4">Full-service roof replacement designed for Panhandle weather extremes, from historic homes to modern energy sector housing.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-wind rated systems (130+ mph)</li>
                  <li>• Class 4 impact-resistant materials</li>
                  <li>• Energy-efficient technologies</li>
                  <li>• Historic home specialization</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Storm Damage Restoration</h3>
                <p className="text-gray-700 mb-4">Expert restoration for severe weather damage including hail, tornadoes, and straight-line winds common in Gray County.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 emergency response</li>
                  <li>• Tornado damage specialists</li>
                  <li>• Complete insurance coordination</li>
                  <li>• Structural assessment services</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Preventive Inspections</h3>
                <p className="text-gray-700 mb-4">Comprehensive roof evaluations to identify weather damage and prevent costly failures in Pampa's severe climate.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Post-storm assessments</li>
                  <li>• Annual maintenance programs</li>
                  <li>• Insurance documentation</li>
                  <li>• Aging system evaluation</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Pampa-Specific Roofing Challenges</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Severe Weather Corridor</h4>
                  <p className="text-gray-700 mb-4">Pampa's location places it directly in the path of severe Panhandle storms, including tornadoes, large hail, and destructive straight-line winds. Our systems are engineered to withstand these extreme conditions.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Historic Architecture</h4>
                  <p className="text-gray-700">Downtown Pampa features significant historic buildings and homes requiring specialized roofing approaches that preserve architectural integrity while providing modern protection and efficiency.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Energy Industry Impact</h4>
                  <p className="text-gray-700 mb-4">The oil and gas industry presence creates housing demands for workers while generating environmental factors that impact roofing systems, including increased particulate matter and infrastructure vibrations.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">High Plains Elevation</h4>
                  <p className="text-gray-700">At over 3,200 feet elevation, Pampa experiences intense UV exposure, rapid pressure changes, and extreme temperature swings that stress roofing materials beyond normal parameters.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Top of Texas Homeowners Choose 5 Star Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Local Expertise & Understanding</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Severe Weather Experience</h4>
                      <p className="text-gray-700">Extensive experience with Panhandle severe weather including tornado damage, large hail, and extreme wind events affecting Gray County.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Historic Preservation Knowledge</h4>
                      <p className="text-gray-700">Specialized expertise in maintaining the architectural character of Pampa's historic downtown while upgrading to modern performance standards.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Regional Insurance Expertise</h4>
                      <p className="text-gray-700">Deep relationships with insurers serving the Panhandle region and extensive experience maximizing claims for severe weather damage.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Complete Service Coverage</h3>
                <p className="text-gray-700 mb-4">Full residential and commercial roofing services throughout Gray County and surrounding Panhandle communities:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Pampa historic district</li>
                  <li>• Established neighborhoods near schools</li>
                  <li>• Modern developments off Loop 171</li>
                  <li>• Rural properties throughout Gray County</li>
                  <li>• Lefors, McLean, and surrounding areas</li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-brand-brown font-semibold">Priority storm response for severe weather events. Emergency services available 24/7 during severe weather season.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions About Pampa Roofing</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Pampa typically costs $9,000-$26,000, reflecting the need for high-wind rated systems and impact-resistant materials. The average Pampa home (1,500-1,900 sq ft) costs $13,000-$18,000 for complete replacement. Most projects are insurance claims with deductibles of $1,000-$2,500.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle tornado damage in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">As tornado specialists, we provide immediate emergency response including structural assessment, temporary protection, and complete restoration services. Our team has extensive experience with severe wind damage and coordinates closely with insurance adjusters and emergency management officials during major storm events.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What wind speeds can your roofing systems withstand?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Our standard installations are rated for 130+ mph winds, exceeding building codes for the Pampa area. We use enhanced fastening patterns, high-wind rated shingles, and reinforced system components. For areas with extreme exposure, we offer systems rated to 150+ mph with specialized anchoring and sealed construction.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work with historic homes in downtown Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in historic preservation roofing throughout downtown Pampa. Our team understands the architectural requirements and can match historical materials while upgrading performance. We work with preservation guidelines and can incorporate modern efficiency features while maintaining authentic appearance.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How often should I inspect my roof in Pampa's severe weather environment?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We recommend professional inspections twice annually (spring and fall) plus after any significant weather event. Pampa's location in the severe weather corridor means frequent hail and wind exposure. Our maintenance programs include priority scheduling and detailed documentation for insurance purposes.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the best roofing material for Pampa's climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 impact-resistant asphalt shingles perform excellently in Pampa's severe weather environment. Metal roofing offers superior wind resistance and longevity. We recommend materials with high SBS polymer content for flexibility during temperature extremes and enhanced granule adhesion for hail resistance.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you prepare for severe weather season?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We maintain emergency response protocols from March through October, Pampa's peak severe weather season. This includes pre-positioned materials, 24/7 response teams, and coordination with local emergency management. We offer preventive inspections and minor repairs before storm season to minimize damage risk.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide financing for Pampa homeowners?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we offer flexible financing options including 12-36 month payment plans with competitive rates. Many storm damage projects qualify for insurance coverage, and we assist with claims to minimize out-of-pocket costs. We also offer seasonal payment options aligned with local economic cycles.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Severe Weather Response & Preparedness</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Storm Season Readiness</h3>
                <p className="text-gray-700 mb-6">Pampa's location at the "Top of Texas" places it directly in the path of severe Panhandle weather systems. Our comprehensive storm response program ensures rapid recovery when severe weather strikes Gray County.</p>
                
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-brown mb-2">⚡ Storm Response Protocol:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 24/7 emergency hotline activation</li>
                    <li>• Rapid damage assessment teams</li>
                    <li>• Priority temporary protection</li>
                    <li>• Insurance coordination specialists</li>
                    <li>• Debris removal and cleanup</li>
                    <li>• Structural integrity evaluation</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Preventive Maintenance</h3>
                <p className="text-gray-700 mb-6">Regular maintenance is crucial in Pampa's harsh weather environment. Our programs help identify vulnerabilities before they become costly failures during severe weather events.</p>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-brown mb-2">🛡️ Maintenance Program Benefits:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Bi-annual professional inspections</li>
                    <li>• Post-storm damage assessment</li>
                    <li>• Minor repair priority scheduling</li>
                    <li>• Insurance documentation support</li>
                    <li>• Weather alerts and recommendations</li>
                    <li>• Emergency response priority</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Understanding Pampa's Weather Patterns</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Spring (March-May)</h4>
                  <p className="text-gray-700 mb-2">Peak tornado season with frequent supercells, large hail, and damaging winds.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Most severe weather events</li>
                    <li>• Rapid temperature changes</li>
                    <li>• High wind frequency</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Summer (June-August)</h4>
                  <p className="text-gray-700 mb-2">Extreme heat, intense UV, and occasional severe thunderstorms.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 100°F+ temperatures</li>
                    <li>• Thermal stress on materials</li>
                    <li>• Isolated severe storms</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Fall/Winter (Sept-Feb)</h4>
                  <p className="text-gray-700 mb-2">Rapid weather changes, ice storms, and preparation for next severe season.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Freeze-thaw cycles</li>
                    <li>• Ice storm potential</li>
                    <li>• System preparation time</li>
                  </ul>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Pampa property owners. Expert residential roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}