import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Big Spring TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Big Spring TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairBigSpringPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Big Spring", url: "/emergency-roof-repair-big-spring/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-big-spring/#localbusiness",
        "name": "5 Star Commercial Roofing - Big Spring Emergency Roof Repair",
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-big-spring/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Big Spring TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Big Spring?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Big Spring. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Big Spring. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/emergency-repair-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Big Spring</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional emergency roof repair throughout Big Spring. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Big Spring's Emergency Roof Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Big Spring and Howard County. We understand West Texas weather challenges and provide roofing solutions engineered for extreme conditions including severe hailstorms, high winds, and dramatic temperature fluctuations.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Big Spring's diverse property types - from historic downtown buildings to modern residential developments near Big Spring State Park. We handle all permits, insurance claims, and warranty documentation with complete transparency.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Strategic Location Advantage</h3>
                <p className="text-gray-700 mb-4">Our Amarillo headquarters positions us perfectly to serve Big Spring, located just 2 hours north. This proximity allows our emergency crews to respond rapidly while maintaining the resources and expertise of a major West Texas roofing operation.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Emergency hotline: (806) 622-6041</li>
                  <li>• Response time: Under 2 hours from Amarillo</li>
                  <li>• Howard County service area coverage</li>
                  <li>• Interstate 20 corridor accessibility</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Big Spring Climate Considerations</h3>
                <p className="text-gray-700 mb-4">Big Spring's semi-arid climate presents unique roofing challenges. Our emergency services address damage from:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Severe hailstorms (peak season April-June)</li>
                  <li>• High wind events exceeding 60 mph</li>
                  <li>• Flash flood potential during spring rains</li>
                  <li>• Extreme temperature variations (20°F to 100°F+)</li>
                  <li>• Dust storm damage and abrasion</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Comprehensive Emergency Services for Big Spring</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Emergency Storm Response</h3>
                <p className="text-gray-700">Immediate response to hail and wind damage common in Big Spring. We secure properties quickly to prevent water intrusion and further structural damage.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔧</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">24/7 Leak Repair</h3>
                <p className="text-gray-700">Expert leak detection and repair for Big Spring's varied architecture, from historic buildings downtown to modern subdivisions near Comanche Trail Park.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📋</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Insurance Documentation</h3>
                <p className="text-gray-700">Comprehensive damage assessment and documentation for insurance claims, ensuring maximum coverage for Big Spring property owners.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Our Big Spring Emergency Response Process</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                  <h4 className="font-bold text-brand-brown mb-2">Emergency Contact</h4>
                  <p className="text-sm text-gray-700">24/7 hotline for immediate assistance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                  <h4 className="font-bold text-brand-brown mb-2">Rapid Deployment</h4>
                  <p className="text-sm text-gray-700">Team en route within 30 minutes from Amarillo</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                  <h4 className="font-bold text-brand-brown mb-2">Damage Assessment</h4>
                  <p className="text-sm text-gray-700">Complete evaluation and emergency stabilization</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                  <h4 className="font-bold text-brand-brown mb-2">Complete Restoration</h4>
                  <p className="text-sm text-gray-700">Full repair with warranty protection</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Big Spring Chooses 5 Star Roofing for Emergencies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Local Understanding, Regional Resources</h3>
                <p className="text-gray-700 mb-6">Serving Big Spring and Howard County from our Amarillo headquarters, we combine local market knowledge with the resources of a major regional operation. Our team understands Big Spring's unique architectural heritage and modern development patterns.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Weather Pattern Expertise</h3>
                <p className="text-gray-700 mb-6">Big Spring's location in the heart of "Tornado Alley" requires specialized emergency preparedness. We monitor regional weather patterns and pre-position emergency supplies during severe weather seasons to ensure rapid response when disasters strike.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Premium Materials for Texas Conditions</h3>
                <p className="text-gray-700 mb-6">Our emergency repairs use materials specifically engineered for West Texas weather extremes. From impact-resistant shingles to high-wind-rated fasteners, every component is selected for durability and performance in Big Spring's challenging climate.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Comprehensive Service Coverage</h3>
                <p className="text-gray-700 mb-6">From historic properties downtown to modern residential areas, we service all of Big Spring's diverse neighborhoods. Our experience includes emergency repairs for commercial buildings, residential homes, and industrial facilities throughout Howard County.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Big Spring Regional Emergency Response Hub
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Big Spring serves as a regional hub for West Texas, requiring emergency roofing services that support diverse property types including state facilities, healthcare operations, transportation infrastructure, and energy industry support. As Howard County's seat and home to major state institutions, Big Spring emergency response affects regional services and capabilities.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Big Spring Emergency Response Timeline</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>0-25 minutes:</strong> Emergency dispatch, regional coordination initiated</li>
                <li><strong>25-90 minutes:</strong> Travel via Interstate 20, multi-facility equipment loaded</li>
                <li><strong>90-120 minutes:</strong> On-site arrival, state facility protocols activated</li>
                <li><strong>120-240 minutes:</strong> Emergency protection for institutional facilities</li>
                <li><strong>3-6 hours:</strong> State compliance documentation, regional coordination</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              State facility emergency response requires compliance with government procurement procedures, security protocols, and continuity of operations planning that ensures essential state services remain available during emergency repair operations. Coordination with facility management addresses operational requirements and security considerations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Healthcare and Transportation Infrastructure Protection</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Big Spring's healthcare facilities including Scenic Mountain Medical Center provide critical services for a multi-county region, requiring priority emergency response to maintain healthcare availability. Transportation infrastructure including rail facilities and highway operations support regional commerce and emergency response capabilities.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Big Spring Critical Facility Priorities</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Healthcare Facilities:</strong> Hospital and medical clinic continuity</li>
                <li><strong>State Institutions:</strong> Government facility operational requirements</li>
                <li><strong>Transportation Hubs:</strong> Rail and highway infrastructure support</li>
                <li><strong>Educational Facilities:</strong> Howard College and public school protection</li>
                <li><strong>Municipal Services:</strong> City operations and emergency services</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Regional coordination during major emergency events includes cooperation with multi-county emergency management, state agencies, and transportation authorities that maintain critical infrastructure throughout West Texas. Emergency response prioritization considers facilities with broader regional importance and economic impact.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Tornado Alley Emergency Preparedness</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold mb-4 text-brand-brown">Severe Weather Monitoring</h4>
                <p className="text-gray-700 mb-4">Big Spring's location in Tornado Alley requires advanced weather monitoring and emergency preparedness protocols. Our response system integrates with National Weather Service operations and regional emergency management to anticipate severe weather impacts.</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Real-time Doppler radar monitoring</li>
                  <li>• Tornado warning protocol activation</li>
                  <li>• Hail storm prediction and crew pre-positioning</li>
                  <li>• Multi-county weather coordination</li>
                  <li>• Storm spotter network integration</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold mb-4 text-brand-brown">Post-Storm Mass Casualty Response</h4>
                <p className="text-gray-700 mb-4">Major tornado events can damage hundreds of structures simultaneously. Our mass casualty response protocol prioritizes life-safety facilities while systematically addressing residential and commercial damage throughout Big Spring.</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Emergency triage and prioritization</li>
                  <li>• Multi-crew deployment coordination</li>
                  <li>• Critical infrastructure first response</li>
                  <li>• Public shelter facility protection</li>
                  <li>• Regional mutual aid coordination</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Interstate 20 Corridor Emergency Logistics</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Big Spring's position on Interstate 20 makes it a critical transportation hub for emergency response throughout West Texas. Our logistics operations leverage this infrastructure advantage to rapidly deploy resources and coordinate multi-county emergency response efforts.
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Regional Response Coordination</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">East Corridor</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Colorado City emergency support</li>
                    <li>• Sweetwater backup operations</li>
                    <li>• Abilene regional coordination</li>
                    <li>• Highway 20 access maintenance</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">West Corridor</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Midland emergency coordination</li>
                    <li>• Odessa industrial support</li>
                    <li>• Permian Basin facility response</li>
                    <li>• Oil field emergency protocols</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">North/South Corridors</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Lamesa agricultural area support</li>
                    <li>• Sterling City ranching operations</li>
                    <li>• Highway 87 rural emergency access</li>
                    <li>• Remote facility coordination</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-brand-brown">State Facility Emergency Protocols</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Big Spring hosts multiple state facilities including educational institutions, healthcare operations, and government offices that require specialized emergency response protocols. Our team maintains current certifications and clearances necessary for state facility emergency work.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-gray-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Compliance and Certification Requirements</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">State Procurement Compliance</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• HUB (Historically Underutilized Business) certification</li>
                    <li>• State contracting procedures knowledge</li>
                    <li>• Emergency procurement authority coordination</li>
                    <li>• Prevailing wage compliance requirements</li>
                    <li>• State facility security protocols</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Educational Facility Requirements</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Background check clearances for school properties</li>
                    <li>• Asbestos awareness certification</li>
                    <li>• Lead-safe work practices (older buildings)</li>
                    <li>• Student safety protocols during repairs</li>
                    <li>• Minimal disruption scheduling requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Big Spring Weather Pattern Analysis</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Historical weather data for Big Spring reveals specific patterns that inform our emergency response planning. Understanding these patterns allows us to anticipate damage types, pre-position resources, and optimize response times during peak damage seasons.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Historical Severe Weather Events</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1">Spring Tornado Season (March-May)</h5>
                    <p className="text-sm text-gray-700 mb-2">Peak tornado activity with F2-F4 strength tornadoes historically impacting Howard County. Our response includes mass casualty protocols and regional coordination.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1">Hail Season (April-June)</h5>
                    <p className="text-sm text-gray-700 mb-2">Severe hailstorms with stones exceeding 2 inches in diameter cause widespread roof damage. Our rapid deployment minimizes water intrusion during repair periods.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1">Flash Flood Events (Summer)</h5>
                    <p className="text-sm text-gray-700 mb-2">Monsoon-style rainfall overwhelms drainage systems, causing roof ponding and structural stress requiring emergency assessment and drainage restoration.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Material Performance in Big Spring Climate</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1">UV Exposure Challenges</h5>
                    <p className="text-sm text-gray-700 mb-2">High-altitude sun exposure accelerates material degradation. Emergency repairs use UV-resistant materials designed for prolonged West Texas exposure.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1">Temperature Cycling Effects</h5>
                    <p className="text-sm text-gray-700 mb-2">Extreme temperature variations (winter lows to summer highs exceeding 80°F difference) stress roofing systems through thermal expansion and contraction cycles.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1">Wind Load Considerations</h5>
                    <p className="text-sm text-gray-700 mb-2">Consistent winds and severe weather gusts require enhanced fastening systems and wind-resistant installation techniques for all emergency repairs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Big Spring?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 2 hours for active leaks and storm damage throughout Big Spring and Howard County. Our emergency crews dispatch directly from our Amarillo headquarters via Interstate 20, allowing rapid access to all Big Spring neighborhoods. We maintain a 24/7 hotline and emergency supply inventory specifically for the Big Spring service area.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What qualifies as a roofing emergency in Big Spring?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">In Big Spring's climate, roofing emergencies include active leaks from storm damage, missing or damaged shingles after severe weather, hail punctures, wind-torn sections, and any damage compromising structural integrity. Given Big Spring's position in Tornado Alley, we also respond to debris impact damage and partial roof collapse situations that require immediate stabilization.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency tarping services?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we provide 24/7 emergency tarping throughout Big Spring. Our tarps are specifically designed for West Texas wind conditions and are secured using professional-grade fastening systems. We understand Big Spring's wind patterns and use reinforced installation techniques to ensure tarps remain secure during the repair process.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are typical emergency repair costs in Big Spring?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Emergency repair costs in Big Spring vary based on damage extent and roofing material. Most homeowner's insurance policies cover emergency repairs, especially weather-related damage common in our area. We provide free emergency assessments and work directly with insurance companies to ensure maximum coverage. Our transparent pricing means no surprises during emergency situations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle historic buildings in downtown Big Spring?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Big Spring's historic downtown requires specialized expertise for emergency repairs. We work closely with property owners to maintain architectural integrity while providing effective protection. Our team is experienced with older roofing systems, tile work, and architectural details common in Big Spring's historic district. We ensure all emergency repairs respect the character and value of historic properties.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you assist with insurance claims for Big Spring properties?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. We have extensive experience working with insurance companies serving the Big Spring market. Our team provides comprehensive documentation including detailed photos, measurements, and damage assessments. We can meet with insurance adjusters on-site and provide supplemental information when needed. Our goal is to ensure you receive full coverage for necessary repairs while making the claims process as smooth as possible.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you prepare for Big Spring's severe weather seasons?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">During Big Spring's peak severe weather season (March-June), we increase staffing levels and maintain expanded emergency supply inventory. We monitor National Weather Service forecasts for Howard County and pre-position crews when severe weather is predicted. Our emergency protocol includes coordination with local emergency services and safe working procedures that can be implemented even during active weather events when conditions permit.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What warranty protection comes with emergency repairs?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">All emergency repairs in Big Spring include comprehensive warranty coverage for both materials and workmanship. Emergency temporary repairs are warranted until permanent solutions are completed. Permanent emergency repairs receive our standard warranty protection - up to 25 years on materials and 10 years on workmanship, depending on the scope and materials used. This ensures long-term protection for your Big Spring property investment.</AccordionContent>
              </AccordionItem>
            </Accordion>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Big Spring property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}