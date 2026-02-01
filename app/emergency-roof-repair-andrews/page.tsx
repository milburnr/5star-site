import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Andrews TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Andrews TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairAndrewsPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Andrews", url: "/emergency-roof-repair-andrews/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews Emergency Roof Repair",
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Andrews TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": { "@id": "https://5starroofingpros.com/#organization" }
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Andrews?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Andrews. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Andrews. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/emergency-repair-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Andrews</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional emergency roof repair throughout Andrews. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Andrews's Emergency Roof Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Andrews and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Andrews with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Rapid Response from Amarillo HQ</h3>
                <p className="text-gray-700 mb-4">Our Andrews emergency roof repair team responds within 2 hours from our Amarillo headquarters. Located just 90 minutes from Andrews, our certified technicians understand the unique roofing challenges faced by West Texas properties.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• 24/7 emergency hotline: (806) 622-6041</li>
                  <li>• Average response time: Under 2 hours</li>
                  <li>• Weekend and holiday availability</li>
                  <li>• Storm damage priority response</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Andrews Weather Challenges</h3>
                <p className="text-gray-700 mb-4">Andrews experiences severe weather patterns that can damage roofing systems. Our emergency repair services address damage from:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Hailstorms (common March-June)</li>
                  <li>• High winds up to 70+ mph</li>
                  <li>• Flash flooding and heavy rains</li>
                  <li>• Temperature extremes (-10°F to 105°F)</li>
                  <li>• Tornado activity in spring months</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Comprehensive Emergency Services in Andrews</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🚨</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Emergency Leak Repair</h3>
                <p className="text-gray-700">Immediate response to active leaks causing interior damage. We locate the source, provide temporary protection, and implement permanent solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Emergency Tarping</h3>
                <p className="text-gray-700">Professional tarping services to protect your property while permanent repairs are scheduled. Heavy-duty materials resistant to West Texas winds.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⛈️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Assessment</h3>
                <p className="text-gray-700">Comprehensive evaluation of hail, wind, and tornado damage. Detailed documentation for insurance claims and repair prioritization.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Our Andrews Emergency Response Process</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                  <h4 className="font-bold text-brand-brown mb-2">Emergency Call</h4>
                  <p className="text-sm text-gray-700">Contact our 24/7 hotline for immediate assistance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                  <h4 className="font-bold text-brand-brown mb-2">Rapid Dispatch</h4>
                  <p className="text-sm text-gray-700">Team dispatched from Amarillo within 30 minutes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                  <h4 className="font-bold text-brand-brown mb-2">On-Site Assessment</h4>
                  <p className="text-sm text-gray-700">Thorough evaluation and immediate protection</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                  <h4 className="font-bold text-brand-brown mb-2">Permanent Solution</h4>
                  <p className="text-sm text-gray-700">Complete repair with warranty and documentation</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Andrews Property Owners Choose 5 Star Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Local Expertise, Regional Coverage</h3>
                <p className="text-gray-700 mb-6">Serving Andrews County and surrounding areas from our Amarillo headquarters, we understand the unique challenges facing West Texas properties. Our team has extensive experience with the oil industry buildings, residential developments, and commercial properties that define Andrews' landscape.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Insurance Claim Specialists</h3>
                <p className="text-gray-700 mb-6">We work directly with insurance companies to ensure your emergency repairs are covered. Our team provides detailed documentation, photos, and estimates to streamline your claim process and maximize your coverage benefits.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Advanced Materials & Techniques</h3>
                <p className="text-gray-700 mb-6">Using only premium materials designed for Texas weather conditions, our emergency repairs are built to last. We stock emergency supplies at our Amarillo location for immediate deployment to Andrews properties.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Warranty Protection</h3>
                <p className="text-gray-700 mb-6">All emergency repairs come with comprehensive warranties covering both materials and workmanship. Our commitment to quality ensures your Andrews property remains protected long after the emergency is resolved.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Andrews Permian Basin Emergency Operations
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Andrews serves as a major hub for Permian Basin oil and gas operations, requiring emergency roofing services that understand the unique demands of energy industry facilities, chemical processing plants, and support operations that operate continuously. Andrews County's energy infrastructure includes drilling operations, processing facilities, and transportation hubs critical to national energy production.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Andrews Emergency Response Protocol</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>0-30 minutes:</strong> Emergency dispatch, oil facility safety assessment</li>
                <li><strong>30-120 minutes:</strong> Extended travel from Amarillo, industrial equipment loaded</li>
                <li><strong>120-150 minutes:</strong> On-site arrival, energy facility coordination</li>
                <li><strong>150-300 minutes:</strong> Petroleum-resistant emergency protection installed</li>
                <li><strong>4-8 hours:</strong> Environmental compliance documentation, repair planning</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency response for Andrews energy facilities requires specialized equipment resistant to petroleum products, chemical exposure, and high-temperature conditions. Safety protocols include gas monitoring, fire suppression coordination, and compliance with industry safety standards for hazardous environments.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">West Texas Climate and Material Challenges</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Andrews experiences extreme West Texas climate including intense UV exposure, severe temperature fluctuations, and high winds that create challenging emergency repair conditions. Desert climate conditions require specialized materials and application techniques for sustained performance in harsh environmental conditions.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Andrews Climate Emergency Factors</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Extreme Heat:</strong> Summer temperatures exceeding 110°F affecting operations</li>
                <li><strong>UV Degradation:</strong> High-altitude UV requiring resistant materials</li>
                <li><strong>Dust Storms:</strong> Petroleum and sand creating abrasive conditions</li>
                <li><strong>Flash Flooding:</strong> Desert arroyos creating sudden water hazards</li>
                <li><strong>High Winds:</strong> Sustained winds requiring enhanced anchoring</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency material selection accounts for petroleum vapor exposure, chemical contamination, and temperature extremes that rapidly degrade standard materials. Specialized supplies include chemical-resistant tarps, petroleum-safe adhesives, and explosion-proof equipment for volatile environments.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Andrews County Weather Patterns & Emergency Planning</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold mb-4 text-brand-brown">Seasonal Weather Hazards</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Spring (March-May)</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Severe thunderstorms with baseball-sized hail</li>
                      <li>• Tornado activity peak (F2-F3 strength)</li>
                      <li>• Flash flooding in normally dry creek beds</li>
                      <li>• Wind gusts exceeding 70 mph during storms</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Summer (June-August)</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Extreme heat affecting material performance</li>
                      <li>• Monsoon-style rainfall events</li>
                      <li>• Dust devil formation damaging roof equipment</li>
                      <li>• Thermal expansion stress on roofing systems</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold mb-4 text-brand-brown">Emergency Response Logistics</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Equipment Staging</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Pre-positioned emergency supplies in Amarillo</li>
                      <li>• Specialized petroleum-resistant materials</li>
                      <li>• Mobile command unit for large-scale events</li>
                      <li>• Safety equipment for hazardous environments</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Coordination Protocols</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Direct liaison with Andrews emergency services</li>
                      <li>• Oil & gas facility safety coordination</li>
                      <li>• Environmental compliance documentation</li>
                      <li>• Multi-site emergency triage system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Industrial Facility Emergency Procedures</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Andrews County hosts numerous petroleum processing facilities, chemical plants, and support infrastructure requiring specialized emergency procedures. Our emergency response teams are trained in OSHA regulations, EPA compliance, and industry safety standards for working near volatile materials and active operations.
            </p>
            <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Hazardous Environment Protocols</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Pre-Entry Safety Assessment</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Atmospheric monitoring for volatile compounds</li>
                    <li>• Fire suppression system coordination</li>
                    <li>• Hot work permit acquisition when required</li>
                    <li>• Emergency evacuation route identification</li>
                    <li>• Communication with facility safety personnel</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Specialized Equipment Requirements</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Explosion-proof lighting and power tools</li>
                    <li>• Chemical-resistant tarping materials</li>
                    <li>• Non-sparking fastening hardware</li>
                    <li>• Personal protective equipment (Level B)</li>
                    <li>• Confined space entry equipment when needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Multi-Site Emergency Management</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              During major weather events affecting Andrews County, multiple facilities may require simultaneous emergency response. Our command structure includes priority triage based on safety hazards, environmental impact potential, and operational criticality to energy infrastructure.
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Priority Response Matrix</h4>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                    <h5 className="font-bold text-gray-800 mb-1">Critical Infrastructure</h5>
                    <p className="text-xs text-gray-700">Active petroleum processing, chemical storage areas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                    <h5 className="font-bold text-gray-800 mb-1">High-Value Operations</h5>
                    <p className="text-xs text-gray-700">Control rooms, administrative facilities, maintenance shops</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                    <h5 className="font-bold text-gray-800 mb-1">Standard Commercial/Residential</h5>
                    <p className="text-xs text-gray-700">Office buildings, retail establishments, residential properties</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Environmental Compliance & Documentation</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency repairs in Andrews County often require environmental compliance documentation, particularly for facilities handling petroleum products or chemicals. Our emergency response includes proper documentation for EPA reporting requirements and state environmental regulations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Required Documentation</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Environmental impact assessment forms</li>
                  <li>• Waste material handling protocols</li>
                  <li>• Air quality monitoring during repairs</li>
                  <li>• Spill prevention and containment measures</li>
                  <li>• Chain of custody for hazardous materials</li>
                  <li>• Post-repair environmental verification</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Regulatory Coordination</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Texas Commission on Environmental Quality notification</li>
                  <li>• Andrews County emergency management coordination</li>
                  <li>• Railroad Commission of Texas for oil/gas facilities</li>
                  <li>• EPA Region 6 emergency response team liaison</li>
                  <li>• Insurance carrier environmental compliance verification</li>
                  <li>• OSHA workplace safety documentation</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 2 hours for active leaks and storm damage throughout Andrews. Our emergency crews are dispatched from our Amarillo headquarters, approximately 90 minutes away. We maintain a 24/7 hotline and have emergency supplies pre-positioned for rapid deployment across Andrews County and surrounding areas.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What qualifies as a roofing emergency?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Roofing emergencies include active leaks causing interior damage, missing or damaged shingles after storms, holes from hail or debris impact, partially collapsed roof sections, exposed decking, and any damage that compromises the weather barrier. In Andrews, we frequently respond to hail damage, high wind damage, and flash flood-related issues that require immediate attention to prevent further property damage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency tarping?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we provide 24/7 emergency tarping services in Andrews. Our crews use heavy-duty, wind-resistant tarps designed for West Texas conditions. We secure tarps with proper fastening techniques to withstand Andrews' frequent high winds while protecting your property during the insurance claim process and permanent repair scheduling.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the cost of emergency roof repair in Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Emergency repair costs in Andrews vary based on damage extent, materials needed, and accessibility. Most insurance policies cover emergency repairs, and we work directly with insurers to minimize your out-of-pocket expenses. We provide free emergency assessments and detailed estimates before beginning any work. Our transparent pricing ensures no surprise charges during emergency situations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you help with insurance claims for Andrews properties?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. We have extensive experience working with insurance companies serving Andrews County. Our team documents all damage with detailed photos, measurements, and written assessments. We can meet with insurance adjusters, provide supplemental estimates if needed, and help ensure your claim covers all necessary repairs. Our goal is to make the claims process as smooth as possible while you focus on getting your property back to normal.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What types of roofing materials do you repair in Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We repair all roofing systems common in Andrews, including asphalt shingles, metal roofing (popular for commercial and oil industry buildings), TPO and EPDM for flat roofs, tile roofing, and built-up roofing systems. Our emergency repair vehicles carry materials suitable for temporary and permanent repairs for each roofing type, ensuring we can address any emergency regardless of your roof material.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle emergency repairs during Andrews' severe weather seasons?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">During severe weather seasons (March-June for hail, spring for tornadoes), we maintain increased staffing and expanded emergency supply inventory. We monitor weather patterns and pre-position crews when severe weather is forecast for the Andrews area. Our emergency response protocol includes safe working procedures and temporary protection measures that can be implemented even during active weather events when safety permits.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What warranty do you provide on emergency roof repairs?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">All emergency repairs in Andrews come with our comprehensive warranty covering both materials and workmanship. Emergency patches and temporary repairs are warranted until permanent solutions are installed. Permanent emergency repairs receive the same warranty as our standard roofing work - up to 25 years on materials and 10 years on workmanship, depending on the materials used and scope of repair.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Andrews property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}