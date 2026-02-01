import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Dumas TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Dumas TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairDumasPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Dumas", url: "/emergency-roof-repair-dumas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas Emergency Roof Repair",
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Dumas TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Dumas?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Dumas. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Dumas. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/emergency-repair-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Dumas</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">24/7 emergency roof repair throughout Dumas and Moore County. Located 45 minutes north of our Amarillo headquarters via Highway 287, we respond within 60 minutes for emergency storm damage. Emergency tarping, leak mitigation, and permanent repairs available around the clock for immediate protection.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Dumas's Emergency Roof Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Dumas and Moore County. As the county seat and agricultural hub of the Texas Panhandle, Dumas requires specialized roofing services that understand both rural and urban property needs in extreme weather conditions.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Dumas's diverse property types - from historic courthouse area buildings to modern agricultural facilities and residential developments. Our rapid response from Amarillo ensures Dumas properties receive immediate emergency protection.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Optimal Amarillo Connection</h3>
                <p className="text-gray-700 mb-4">Our Amarillo headquarters provides direct access to Dumas via Highway 287, enabling our emergency crews to reach Moore County properties within 60 minutes. This strategic positioning ensures the fastest professional roofing response in the region.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Emergency response: (806) 622-6041</li>
                  <li>• Average response time: 45-60 minutes</li>
                  <li>• Complete Moore County service area</li>
                  <li>• Agricultural facility expertise</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Panhandle Weather Challenges</h3>
                <p className="text-gray-700 mb-4">Dumas experiences the full force of Texas Panhandle weather systems, requiring comprehensive emergency preparedness:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Severe hailstorms and supercells</li>
                  <li>• High winds up to 75+ mph</li>
                  <li>• Tornado activity during peak season</li>
                  <li>• Extreme temperature variations</li>
                  <li>• Agricultural dust and debris damage</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Comprehensive Emergency Services for Dumas</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌾</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Facility Emergency Response</h3>
                <p className="text-gray-700">Specialized emergency services for Dumas's agricultural operations, including grain elevators, processing facilities, and farm buildings requiring immediate weather protection.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Historic Building Preservation</h3>
                <p className="text-gray-700">Expert emergency care for Dumas's historic structures, including the courthouse area and older commercial buildings, maintaining architectural integrity during repairs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Response Coordination</h3>
                <p className="text-gray-700">Coordinated emergency response with local authorities during severe weather events, ensuring rapid deployment to the most critical damage areas first.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Dumas Emergency Response Timeline</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                  <h4 className="font-bold text-brand-brown mb-2">Emergency Call</h4>
                  <p className="text-sm text-gray-700">Immediate connection to emergency dispatch</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                  <h4 className="font-bold text-brand-brown mb-2">Rapid Response</h4>
                  <p className="text-sm text-gray-700">Crew en route from Amarillo within 15 minutes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                  <h4 className="font-bold text-brand-brown mb-2">Emergency Stabilization</h4>
                  <p className="text-sm text-gray-700">Immediate protection and damage assessment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                  <h4 className="font-bold text-brand-brown mb-2">Complete Restoration</h4>
                  <p className="text-sm text-gray-700">Full repair with comprehensive warranty</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Dumas Trusts 5 Star Roofing for Emergency Repairs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Agricultural Community Understanding</h3>
                <p className="text-gray-700 mb-6">Serving Moore County's agricultural hub requires understanding the unique needs of farming operations, grain storage facilities, and rural properties. Our emergency services protect both agricultural assets and residential properties throughout the Dumas area.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">County Seat Expertise</h3>
                <p className="text-gray-700 mb-6">As Moore County's seat, Dumas has a rich architectural heritage requiring specialized emergency care. We balance modern emergency techniques with respect for historic structures and established neighborhoods throughout the community.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Regional Weather Monitoring</h3>
                <p className="text-gray-700 mb-6">We actively monitor Texas Panhandle weather patterns and maintain pre-positioned emergency supplies during severe weather seasons. This proactive approach ensures rapid response when storms impact the Dumas area.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Complete Insurance Partnership</h3>
                <p className="text-gray-700 mb-6">Our experienced team works directly with insurance companies serving rural and agricultural properties, ensuring comprehensive coverage for both residential and commercial emergency repairs throughout Moore County.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 60 minutes for active leaks and storm damage throughout Dumas and Moore County. Our Amarillo headquarters provides direct Highway 287 access, ensuring the fastest professional roofing response to county seat and rural properties. Emergency crews are available 24/7 year-round.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What emergency situations do you handle in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">In Dumas's agricultural environment, we handle active leaks, severe weather damage, hail punctures, wind damage to agricultural facilities, debris impact from farming operations, and any situation compromising structural integrity of residential, commercial, or agricultural properties throughout Moore County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency services for agricultural buildings?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in emergency repairs for agricultural facilities including grain elevators, processing buildings, storage facilities, and farm structures. Our team understands the critical nature of protecting agricultural assets and can provide immediate emergency protection for both crops and equipment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle historic building emergencies in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Dumas's historic courthouse area and older commercial buildings receive specialized emergency care. We use appropriate materials and techniques that respect architectural heritage while providing effective weather protection. Our emergency repairs maintain the character and value of historic properties while ensuring immediate safety and security.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are emergency repair costs in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Emergency repair costs vary based on property type and damage extent. Most agricultural, commercial, and homeowner's insurance policies cover emergency repairs, especially weather-related damage. We provide free emergency assessments and work directly with insurance companies to ensure maximum coverage for both rural and urban properties.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you coordinate with agricultural operations during emergencies?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. We understand agricultural timing is critical and coordinate emergency repairs to minimize disruption to farming operations. During harvest season or critical agricultural periods, we prioritize emergency protection to prevent crop loss and equipment damage while scheduling permanent repairs at optimal times.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Dumas property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}