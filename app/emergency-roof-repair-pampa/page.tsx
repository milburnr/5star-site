import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Pampa TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Pampa TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairPampaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Pampa", url: "/emergency-roof-repair-pampa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-pampa/#localbusiness",
        "name": "5 Star Commercial Roofing - Pampa Emergency Roof Repair",
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-pampa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas", "name": "Pampa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Pampa TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Pampa?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Pampa. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Pampa. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/emergency-repair-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Pampa</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">24/7 emergency roof repair throughout Pampa and Gray County. Located 60 minutes northeast of our Amarillo headquarters via Highway 60, we respond within 90 minutes for emergency storm damage and active leaks. Emergency tarping, leak mitigation, and permanent repairs available around the clock.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Pampa's Emergency Roof Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Pampa and Gray County. As the county seat and a vital center for oil, gas, and agriculture, Pampa requires emergency roofing services that understand both industrial complexes and residential communities throughout the Texas Panhandle.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Pampa's diverse property landscape - from historic downtown buildings to modern industrial facilities and established residential neighborhoods. Our close proximity from Amarillo ensures rapid emergency response for all property types.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Optimal Regional Coverage</h3>
                <p className="text-gray-700 mb-4">Our Amarillo headquarters provides excellent access to Pampa via Highway 60, enabling our emergency crews to reach Gray County properties within 60 minutes. This proximity ensures the fastest professional roofing response in the northeastern Panhandle.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Emergency response: (806) 622-6041</li>
                  <li>• Average response time: Under 60 minutes</li>
                  <li>• Complete Gray County coverage</li>
                  <li>• Industrial and residential expertise</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Panhandle Weather Systems</h3>
                <p className="text-gray-700 mb-4">Pampa's position in the Texas Panhandle exposes properties to severe weather systems requiring comprehensive emergency response:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Severe hailstorms (particularly spring/summer)</li>
                  <li>• High winds exceeding 70 mph</li>
                  <li>• Tornado activity during peak season</li>
                  <li>• Extreme temperature fluctuations</li>
                  <li>• Industrial environment considerations</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Comprehensive Emergency Services for Pampa</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">County Seat Services</h3>
                <p className="text-gray-700">Specialized emergency services for Pampa's government buildings, courthouse facilities, and public buildings requiring immediate protection and minimal operational disruption.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏭</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Industrial Facility Emergency Response</h3>
                <p className="text-gray-700">Expert emergency services for Pampa's oil, gas, and agricultural processing facilities, including safety protocols and chemical-resistant materials.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏘️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Residential Community Protection</h3>
                <p className="text-gray-700">Complete emergency services for Pampa's established neighborhoods, from historic areas near downtown to newer residential developments throughout the city.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Pampa Emergency Response Timeline</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                  <h4 className="font-bold text-brand-brown mb-2">Emergency Contact</h4>
                  <p className="text-sm text-gray-700">24/7 emergency hotline availability</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                  <h4 className="font-bold text-brand-brown mb-2">Immediate Dispatch</h4>
                  <p className="text-sm text-gray-700">Crew en route from Amarillo within 15 minutes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                  <h4 className="font-bold text-brand-brown mb-2">Emergency Stabilization</h4>
                  <p className="text-sm text-gray-700">Immediate protection and damage control</p>
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
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Pampa Chooses 5 Star Roofing for Emergency Repairs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">County Seat Expertise</h3>
                <p className="text-gray-700 mb-6">As Gray County's seat, Pampa houses important government and public buildings requiring specialized emergency care. Our team understands the unique requirements of public facilities and maintains the discretion and professionalism appropriate for government properties.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Industrial Environment Understanding</h3>
                <p className="text-gray-700 mb-6">Pampa's role in oil, gas, and agricultural processing requires understanding industrial safety protocols and specialized materials. Our emergency services protect both workers and facilities while maintaining operational continuity where possible.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Regional Weather Monitoring</h3>
                <p className="text-gray-700 mb-6">We actively monitor Texas Panhandle weather patterns affecting the Pampa area and maintain emergency supplies specifically for rapid deployment to Gray County. Our proximity enables immediate response during severe weather events.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Community Partnership</h3>
                <p className="text-gray-700 mb-6">Pampa's importance as a regional center deserves exceptional emergency service. We partner with local authorities, businesses, and residents to provide coordinated emergency response that supports the entire community during severe weather events.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Pampa Industrial and Energy Emergency Response
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Pampa's position as Gray County's seat and industrial center requires emergency roofing services that understand the unique demands of energy processing, manufacturing operations, and the healthcare facilities that serve the broader Texas Panhandle region. Industrial operations include natural gas processing, manufacturing, and energy support services that operate continuously.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Pampa Emergency Response Timeline</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>0-20 minutes:</strong> Emergency dispatch, industrial safety protocols</li>
                <li><strong>20-60 minutes:</strong> Rapid response to Pampa via Highway 60</li>
                <li><strong>60-90 minutes:</strong> On-site arrival, facility-specific coordination</li>
                <li><strong>90-180 minutes:</strong> Industrial-grade emergency protection installed</li>
                <li><strong>3-5 hours:</strong> Complete assessment, regulatory compliance documentation</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency response for Pampa's industrial facilities requires specialized safety equipment, chemical-resistant materials, and coordination with facility emergency response teams. Natural gas processing and manufacturing operations cannot tolerate extended weather exposure without significant production and safety impacts.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Regional Healthcare and Manufacturing Hub Protection</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Pampa Regional Medical Center serves a multi-county region and requires priority emergency response to maintain healthcare services for both routine and emergency medical needs. Manufacturing facilities and processing plants require immediate weather protection to prevent equipment damage and maintain continuous operations essential to regional economic stability.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Pampa Industrial Emergency Priorities</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Natural Gas Processing:</strong> Continuous operation requirements</li>
                <li><strong>Healthcare Facilities:</strong> Regional medical service continuity</li>
                <li><strong>Manufacturing Plants:</strong> Equipment and production protection</li>
                <li><strong>County Government:</strong> Essential public service maintenance</li>
                <li><strong>Educational Facilities:</strong> Community and regional education</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Coordination with industrial facility operations includes understanding of production schedules, safety shutdown procedures, and environmental protection requirements that ensure worker safety and environmental compliance during emergency repair operations. Emergency timing accounts for industrial shift schedules and operational requirements.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 60 minutes for active leaks and storm damage throughout Pampa and Gray County. Our Amarillo headquarters provides direct Highway 60 access, ensuring rapid emergency response to government, industrial, and residential properties. Emergency crews are available 24/7 year-round.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What emergency situations do you handle in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">In Pampa's diverse environment, we handle active leaks, severe weather damage, hail punctures, industrial facility damage, government building emergencies, wind damage from Panhandle storms, and any emergency compromising structural integrity of residential, commercial, or public properties throughout Gray County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency services for government buildings?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in emergency repairs for Gray County government facilities, courthouse buildings, public safety facilities, and municipal buildings. Our team understands the importance of maintaining government operations and works efficiently to minimize disruption to public services.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle industrial facility emergencies?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Our team follows strict industrial safety protocols for oil, gas, and agricultural processing facilities in Pampa. We use specialized materials resistant to industrial environments and coordinate with facility safety officers to ensure emergency repairs don't compromise operational safety or environmental compliance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are emergency repair costs in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Emergency repair costs vary based on property type and damage extent. Most residential, commercial, industrial, and public building insurance policies cover emergency repairs, especially weather-related damage. We provide free emergency assessments and work directly with insurance companies to ensure maximum coverage for all property types in Gray County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you coordinate with local authorities during severe weather?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. During severe weather events affecting Pampa, we coordinate with city emergency services, Gray County authorities, and facility managers to prioritize emergency responses based on public safety and critical infrastructure needs. This coordination ensures the most critical facilities receive immediate attention while maintaining overall community safety.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 2 hours for active leaks and storm damage throughout Pampa. 24/7 emergency crews available year-round.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What qualifies as a roofing emergency?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency tarping?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, 24/7 emergency tarping in Pampa. We install waterproof tarps within hours to prevent further damage while processing insurance claims.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Pampa property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}