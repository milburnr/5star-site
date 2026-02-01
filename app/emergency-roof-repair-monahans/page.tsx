import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Monahans TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Monahans TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairMonahansPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Monahans", url: "/emergency-roof-repair-monahans/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-monahans/#localbusiness",
        "name": "5 Star Commercial Roofing - Monahans Emergency Roof Repair",
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-monahans/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas", "name": "Monahans", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Monahans TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Monahans?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Monahans. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Monahans. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/emergency-repair-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Monahans</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional emergency roof repair throughout Monahans. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Monahans's Emergency Roof Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Monahans and Ward County. Located in the heart of West Texas oil country, Monahans requires specialized emergency roofing services for both residential properties and industrial facilities serving the energy sector.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Monahans's unique community - from historic downtown properties to modern oil industry facilities and growing residential areas. Our team understands the challenges of providing emergency roofing services in this important energy hub.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Extended Range Response</h3>
                <p className="text-gray-700 mb-4">Our Amarillo headquarters extends emergency coverage to Monahans and Ward County, approximately 2.5 hours south. Despite the distance, we maintain rapid response capabilities through strategic logistics and pre-positioned emergency supplies for the Permian Basin region.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Emergency contact: (806) 622-6041</li>
                  <li>• Response commitment: Under 3 hours</li>
                  <li>• Ward County coverage area</li>
                  <li>• Oil industry facility expertise</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Permian Basin Weather</h3>
                <p className="text-gray-700 mb-4">Monahans's location in the Permian Basin presents unique weather challenges requiring specialized emergency response:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Intense hailstorms and microbursts</li>
                  <li>• High winds exceeding 60 mph</li>
                  <li>• Flash flooding during heavy rains</li>
                  <li>• Extreme heat and UV exposure</li>
                  <li>• Dust storms and sandblasting effects</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Specialized Emergency Services for Monahans</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Industrial Facility Emergency Response</h3>
                <p className="text-gray-700">Specialized emergency services for Monahans's oil industry facilities, including chemical-resistant materials and safety protocols for petroleum operations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Residential Community Protection</h3>
                <p className="text-gray-700">Complete emergency services for Monahans's residential areas, from established neighborhoods to newer developments serving the growing energy workforce.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🚛</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Extended Range Operations</h3>
                <p className="text-gray-700">Coordinated emergency response ensuring our crews reach Monahans properties with all necessary equipment and materials for immediate protection.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Monahans Emergency Response Protocol</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                  <h4 className="font-bold text-brand-brown mb-2">Emergency Call</h4>
                  <p className="text-sm text-gray-700">Immediate emergency hotline response</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                  <h4 className="font-bold text-brand-brown mb-2">Rapid Mobilization</h4>
                  <p className="text-sm text-gray-700">Fully-equipped crew dispatched immediately</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                  <h4 className="font-bold text-brand-brown mb-2">On-Site Protection</h4>
                  <p className="text-sm text-gray-700">Immediate stabilization and assessment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                  <h4 className="font-bold text-brand-brown mb-2">Complete Resolution</h4>
                  <p className="text-sm text-gray-700">Permanent repair with warranty</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Monahans Trusts 5 Star Roofing for Emergency Repairs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Oil Industry Experience</h3>
                <p className="text-gray-700 mb-6">Monahans's role in the Permian Basin oil industry requires understanding industrial roofing needs and safety protocols. Our team is experienced with chemical-resistant materials and safety requirements for petroleum industry facilities.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Extended Service Capability</h3>
                <p className="text-gray-700 mb-6">While Monahans is at the southern edge of our service area, we maintain the same high standards of emergency response. Our commitment includes pre-positioned supplies and coordinated logistics to ensure effective service delivery.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Permian Basin Weather Expertise</h3>
                <p className="text-gray-700 mb-6">The Permian Basin's unique weather patterns require specialized emergency preparedness. We monitor regional weather systems and understand the particular challenges faced by properties in this oil-producing region.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Community Investment</h3>
                <p className="text-gray-700 mb-6">Despite the distance from our headquarters, we're committed to serving Monahans's growing community. Our investment in this energy hub includes maintaining emergency response capabilities that match the community's importance to the regional economy.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 3 hours for active leaks and storm damage throughout Monahans and Ward County. While Monahans is at the southern edge of our service area, we maintain emergency response capabilities with pre-positioned supplies and coordinated logistics. Emergency crews are available 24/7 year-round.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What emergency situations do you handle in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">In Monahans's oil industry environment, we handle active leaks, severe weather damage, hail punctures, chemical exposure damage to roofing materials, wind damage from Permian Basin weather systems, and any emergency compromising structural integrity of residential, commercial, or industrial facilities throughout Ward County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency services for oil industry facilities?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in emergency repairs for petroleum industry facilities including refineries, processing plants, storage facilities, and administrative buildings. Our team follows industry safety protocols and uses chemical-resistant materials appropriate for oil industry environments in Monahans.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle the extended distance from Amarillo?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We maintain emergency response capabilities for Monahans through strategic planning including pre-positioned supply caches, coordinated logistics, and fully-equipped mobile units. Our crews arrive with everything needed for immediate emergency protection, eliminating delays from material sourcing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are emergency repair costs in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Emergency repair costs in Monahans are competitive despite the extended service area. Most residential, commercial, and industrial insurance policies cover emergency repairs, especially weather-related damage. We provide free emergency assessments and work directly with insurance companies to ensure maximum coverage for all property types in Ward County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you assist with insurance claims in the Permian Basin?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we have extensive experience with insurance companies serving the Permian Basin region, including those specializing in oil industry properties. Our team provides comprehensive documentation, coordinates with adjusters familiar with industrial facilities, and ensures maximum coverage for both residential and commercial/industrial emergency repairs.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Monahans Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Monahans property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}