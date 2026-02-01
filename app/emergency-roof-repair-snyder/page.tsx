import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Snyder TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Snyder TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairSnyderPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Snyder", url: "/emergency-roof-repair-snyder/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-snyder/#localbusiness",
        "name": "5 Star Commercial Roofing - Snyder Emergency Roof Repair",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-snyder/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas", "name": "Snyder", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Snyder TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Snyder?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Snyder. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Snyder. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/emergency-repair-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Snyder</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional emergency roof repair throughout Snyder. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Snyder's Emergency Roof Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Snyder and surrounding areas. We understand Texas weather challenges and provide rapid response for storm damage, active leaks, and urgent roofing emergencies that threaten property and safety.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Since 2014, we've provided 24/7 emergency response for Snyder properties with expert temporary repairs, comprehensive damage assessment, and permanent restoration solutions. We handle all insurance claims, emergency tarping, and emergency board-up services.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">West Texas Storm Challenges</h3>
                <p className="text-gray-700 mb-4">Snyder's location in West Texas exposes properties to severe weather events that can cause immediate roofing emergencies. Hailstorms with stones exceeding 2 inches in diameter, straight-line winds over 70 mph, and sudden severe thunderstorms can cause significant damage requiring immediate professional intervention.</p>
                <p className="text-gray-700 mb-4">The region's semi-arid climate creates conditions for rapid weather changes, from intense heat to severe storms, often with little warning. Emergency situations can develop quickly, making rapid professional response critical to preventing extensive interior damage and protecting property value.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Immediate Response Protocol</h3>
                <p className="text-gray-700 mb-4">Our emergency response teams are available 24/7 throughout Snyder and surrounding areas, equipped with emergency repair materials, tarping supplies, and assessment tools. We maintain emergency response vehicles fully stocked for immediate deployment to storm-damaged properties.</p>
                <p className="text-gray-700 mb-4">When you call our emergency hotline, certified technicians are dispatched immediately with GPS routing for fastest response times. Our goal is stabilizing the emergency situation within 2-4 hours to prevent further damage while developing comprehensive repair plans.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-red-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Emergency Services Available 24/7 in Snyder</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-red-100">
                <div className="text-4xl mb-4 text-red-600">🚨</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Active Leak Repair</h3>
                <p className="text-gray-700 mb-4">Immediate response for active water intrusion that threatens interior property, electrical systems, and structural integrity. Emergency sealing and drainage redirection to stop ongoing damage.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Immediate leak location and isolation</li>
                  <li>• Emergency sealant application</li>
                  <li>• Water extraction and drying</li>
                  <li>• Interior protection measures</li>
                  <li>• Damage assessment and documentation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-red-100">
                <div className="text-4xl mb-4 text-blue-600">🛡️</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Emergency Tarping</h3>
                <p className="text-gray-700 mb-4">Professional emergency tarping for storm-damaged roofs using heavy-duty materials and secure fastening systems designed to withstand additional weather events while repairs are planned.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Heavy-duty waterproof tarping materials</li>
                  <li>• Professional secure fastening systems</li>
                  <li>• Multi-layer protection for large damaged areas</li>
                  <li>• Wind-resistant installation techniques</li>
                  <li>• Temporary but durable weather protection</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-red-100">
                <div className="text-4xl mb-4 text-orange-600">⚡</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Storm Damage Assessment</h3>
                <p className="text-gray-700 mb-4">Comprehensive emergency assessment for hail damage, wind damage, and debris impact. Professional documentation for insurance claims while implementing immediate protective measures.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Detailed damage assessment and documentation</li>
                  <li>• Insurance claim preparation and support</li>
                  <li>• Photo and video evidence collection</li>
                  <li>• Structural integrity evaluation</li>
                  <li>• Priority repair recommendations</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Common Emergency Situations in Snyder</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Understanding common roofing emergencies helps property owners recognize urgent situations requiring immediate professional response.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">🌪️ Severe Wind Damage</h3>
                    <p className="text-gray-700">West Texas wind events can lift shingles, tear roofing materials, and create immediate water intrusion points. Missing or damaged shingles require immediate attention to prevent extensive interior damage during subsequent rain events.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">🧊 Hail Impact Damage</h3>
                    <p className="text-gray-700">Large hailstones can puncture roofing materials, crack shingles, and damage flashing systems. Even minor hail damage can compromise waterproofing and lead to significant problems if not addressed immediately.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">⚡ Lightning and Electrical Damage</h3>
                    <p className="text-gray-700">Lightning strikes can damage roofing materials, compromise electrical systems, and create fire hazards. Immediate inspection and repairs are essential for safety and preventing further damage.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">🌳 Debris Impact</h3>
                    <p className="text-gray-700">Tree limbs, construction materials, and other debris driven by high winds can puncture or severely damage roofing systems. Large debris may require structural assessment in addition to roofing repairs.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">🚰 Plumbing and HVAC Leaks</h3>
                    <p className="text-gray-700">Roof-mounted equipment failures, including HVAC units and plumbing vents, can create emergency leak situations requiring immediate attention to prevent extensive water damage and equipment loss.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">🔥 Fire Damage</h3>
                    <p className="text-gray-700">Fire damage to roofing systems requires immediate professional assessment and emergency protection to prevent further damage from weather exposure while planning comprehensive restoration.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance Claim Support and Documentation</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Complete insurance claim support to ensure maximum coverage for emergency roof repairs and restoration in Snyder.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Comprehensive Documentation</h3>
                  <p className="text-gray-700 mb-4">Our emergency response teams document all damage thoroughly using professional photography, detailed written assessments, and accurate measurements. This documentation supports insurance claims and ensures appropriate coverage for repairs.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional damage photography and video documentation</li>
                    <li>• Detailed written damage assessments and reports</li>
                    <li>• Accurate measurements and material calculations</li>
                    <li>• Weather event correlation and documentation</li>
                    <li>• Before and after condition comparisons</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Insurance Coordination</h3>
                  <p className="text-gray-700 mb-4">We work directly with insurance adjusters, provide detailed estimates, and coordinate emergency repairs with claim approvals. Our experience with insurance processes ensures efficient claim resolution and appropriate compensation.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Direct coordination with insurance adjusters</li>
                    <li>• Detailed repair estimates and material specifications</li>
                    <li>• Emergency repair approval and coordination</li>
                    <li>• Claim documentation and progress reporting</li>
                    <li>• Supplement negotiations for complete restoration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Emergency Response Equipment and Capabilities</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Professional emergency equipment and certified technicians ensure rapid, effective response to roofing emergencies throughout Snyder.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🚛</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Mobile Response Units</h3>
                  <p className="text-gray-600">Fully equipped emergency response vehicles with tarping materials, repair supplies, safety equipment, and communication systems for immediate deployment to emergency situations.</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">⚙️</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Specialized Equipment</h3>
                  <p className="text-gray-600">Professional roofing tools, water extraction equipment, moisture detection devices, and emergency power systems to address complex emergency situations effectively.</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🎯</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">24/7 Availability</h3>
                  <p className="text-gray-600">Round-the-clock emergency response capabilities with certified technicians on call every day of the year, including holidays and severe weather events.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Snyder?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 2 hours for active leaks and storm damage throughout Snyder. 24/7 emergency crews available year-round with fully equipped mobile response units for immediate deployment to emergency situations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What qualifies as a roofing emergency?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Active leaks causing interior damage, missing shingles after storms, holes from hail/debris impact, partially collapsed roof sections, severe storm damage requiring immediate protection, fire damage, or any situation threatening property safety or security.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency tarping?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, 24/7 emergency tarping in Snyder using heavy-duty waterproof materials and professional fastening systems. We install protective tarping within hours to prevent further damage while coordinating permanent repairs and insurance claims.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle insurance claims for emergency repairs?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide comprehensive insurance claim support including professional damage documentation, direct coordination with insurance adjusters, detailed repair estimates, and emergency repair approval coordination. Our experience ensures efficient claim processing and maximum coverage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What should I do immediately after discovering roof damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">First, ensure safety by staying clear of damaged areas. If there's active leaking, place containers to catch water and move valuables to safety. Take photos of visible damage, then call our emergency hotline immediately. Avoid attempting repairs yourself, as this can be dangerous and potentially void insurance coverage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do emergency repairs come with warranties?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, all emergency repairs include workmanship warranties. Temporary emergency measures are guaranteed to protect your property until permanent repairs are completed. Permanent emergency repairs carry the same comprehensive warranties as our standard roofing work.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can you work during severe weather conditions?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Safety is our priority. We perform emergency stabilization work during breaks in severe weather when conditions allow safe access to roofing systems. During active storms, we focus on interior protection and prepare for immediate response once conditions improve.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's included in emergency response service?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Emergency response includes immediate damage assessment, temporary protective measures (tarping, sealing), water extraction if needed, damage documentation for insurance, emergency repairs to prevent further damage, and coordination of permanent repair solutions.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Prevention and Preparedness for Snyder Properties</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Proactive measures and emergency preparedness help minimize damage and improve response times during severe weather events.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Regular Maintenance Programs</h3>
                  <p className="text-gray-700 mb-4">Preventive maintenance identifies and addresses potential problems before they become emergencies. Regular inspections, minor repairs, and system maintenance significantly reduce emergency repair needs and associated costs.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Bi-annual roof inspections and condition assessments</li>
                    <li>• Preventive repair of minor issues before they escalate</li>
                    <li>• Drainage system maintenance and cleaning</li>
                    <li>• Flashing and sealant inspection and maintenance</li>
                    <li>• Early warning systems for potential problems</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Emergency Preparedness Planning</h3>
                  <p className="text-gray-700 mb-4">Emergency preparedness plans help property owners respond effectively to roofing emergencies, minimize damage, and coordinate professional response efficiently during high-stress situations.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Emergency contact information and response procedures</li>
                    <li>• Interior protection strategies for immediate implementation</li>
                    <li>• Insurance information and claim contact details</li>
                    <li>• Property documentation and photography guidelines</li>
                    <li>• Emergency supply recommendations and storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Choose 5 Star Roofing for Emergency Services in Snyder</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Rapid Response Time</h3>
                      <p className="text-gray-700">24/7 availability with 2-hour emergency response times throughout Snyder and surrounding areas. GPS-dispatched mobile units ensure fastest possible arrival at emergency scenes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Certified Emergency Technicians</h3>
                      <p className="text-gray-700">Extensively trained emergency response specialists with certifications in safety, insurance documentation, and emergency repair techniques for effective crisis management.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Complete Emergency Equipment</h3>
                      <p className="text-gray-700">Fully equipped mobile response units with professional-grade tarping materials, emergency repair supplies, safety equipment, and communication systems for comprehensive emergency response.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Insurance Claim Expertise</h3>
                      <p className="text-gray-700">Extensive experience with insurance claim processes, adjuster coordination, and damage documentation ensuring maximum coverage and efficient claim resolution for emergency repairs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Local Weather Expertise</h3>
                      <p className="text-gray-700">Deep understanding of West Texas weather patterns, seasonal challenges, and regional building requirements gained through years of emergency response experience in Snyder and surrounding areas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Comprehensive Warranties</h3>
                      <p className="text-gray-700">All emergency repairs include workmanship warranties with clear terms and responsive service, providing peace of mind during stressful emergency situations.</p>
                    </div>
                  </div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Snyder Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Snyder property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}