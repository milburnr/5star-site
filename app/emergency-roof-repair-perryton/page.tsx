import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Perryton TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Perryton TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairPerrytonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Perryton", url: "/emergency-roof-repair-perryton/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-perryton/#localbusiness",
        "name": "5 Star Commercial Roofing - Perryton Emergency Roof Repair",
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-perryton/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas", "name": "Perryton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Perryton TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Perryton?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Perryton. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Perryton. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/emergency-repair-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Perryton</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">24/7 emergency roof repair throughout Perryton and Ochiltree County. Located 2 hours north of our Amarillo headquarters via Highway 83, we respond within 2.5 hours for emergency storm damage and active leaks. Emergency tarping, leak mitigation, and permanent repairs available around the clock.</p>
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
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Perryton's Emergency Roof Repair Specialists</h2>
<FadeIn>
  <section className="mb-16 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-brand-brown">Perryton's Emergency Roof Repair Specialists</h2>
    <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Perryton and Ochiltree County. Located in the heart of the northern Texas Panhandle, Perryton requires specialized emergency roofing services for agricultural operations, residential communities, and commercial facilities in this important farming and energy hub.</p>
    <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Perryton's unique community - from established agricultural operations to growing residential areas and commercial districts. Our strategic response from Amarillo ensures comprehensive emergency protection for all property types throughout Ochiltree County.</p>
    
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold mb-4 text-brand-brown">Northern Panhandle Coverage</h3>
        <p className="text-gray-700 mb-4">From our Amarillo headquarters, we provide dedicated emergency coverage to Perryton and northern Ochiltree County via Highway 83. This route enables our crews to reach Perryton properties within 90 minutes for immediate emergency response.</p>
        <ul className="text-gray-700 space-y-2">
          <li>• Emergency hotline: (806) 622-6041</li>
          <li>• Response time: Under 90 minutes</li>
          <li>• Ochiltree County service area</li>
          <li>• Agricultural and residential expertise</li>
        </ul>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold mb-4 text-brand-brown">Northern Plains Weather</h3>
        <p className="text-gray-700 mb-4">Perryton's position in the northern Texas Panhandle exposes properties to intense weather systems:</p>
        <ul className="text-gray-700 space-y-2">
          <li>• Severe hailstorms and supercells</li>
          <li>• High winds exceeding 75 mph</li>
          <li>• Tornado activity during peak seasons</li>
          <li>• Extreme temperature variations</li>
          <li>• Agricultural weather challenges</li>
        </ul>
      </div>
    </div>
  </section>
</FadeIn>

<FadeIn>
  <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
    <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Comprehensive Emergency Services for Perryton</h2>
    
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="text-center">
        <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-white">🌾</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Emergency Response</h3>
        <p className="text-gray-700">Specialized emergency services for Perryton's farming operations, including grain storage facilities, equipment buildings, and processing centers critical to the agricultural economy.</p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-white">🏘️</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-brand-brown">Residential Community Protection</h3>
        <p className="text-gray-700">Complete emergency services for Perryton's residential neighborhoods, from established areas near downtown to newer developments throughout the city.</p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-white">🏢</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-brand-brown">Commercial Facility Emergency Response</h3>
        <p className="text-gray-700">Emergency protection for Perryton's commercial district, industrial facilities, and public buildings serving Ochiltree County residents and businesses.</p>
      </div>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-brand-brown">Perryton Emergency Response Protocol</h3>
      
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
          <h4 className="font-bold text-brand-brown mb-2">Emergency Call</h4>
          <p className="text-sm text-gray-700">24/7 emergency response availability</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
          <h4 className="font-bold text-brand-brown mb-2">Rapid Deployment</h4>
          <p className="text-sm text-gray-700">Emergency crew dispatched within 20 minutes</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
          <h4 className="font-bold text-brand-brown mb-2">Emergency Protection</h4>
          <p className="text-sm text-gray-700">Immediate stabilization and damage control</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
          <h4 className="font-bold text-brand-brown mb-2">Complete Resolution</h4>
          <p className="text-sm text-gray-700">Full repair with warranty protection</p>
        </div>
      </div>
    </div>
  </section>
</FadeIn>

<FadeIn>
  <section className="mb-16 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Perryton Trusts 5 Star Roofing for Emergency Repairs</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-brand-brown">Agricultural Community Expertise</h3>
        <p className="text-gray-700 mb-6">Perryton's role as an agricultural center requires understanding farming operations, grain storage needs, and seasonal timing. Our emergency services protect both agricultural assets and residential properties throughout Ochiltree County.</p>
        
        <h3 className="text-xl font-bold mb-4 text-brand-brown">Northern Panhandle Weather Monitoring</h3>
        <p className="text-gray-700 mb-6">We actively monitor weather patterns affecting the northern Texas Panhandle and maintain emergency supplies specifically for rapid deployment to the Perryton area during severe weather seasons.</p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4 text-brand-brown">Community-Focused Service</h3>
        <p className="text-gray-700 mb-6">Perryton's close-knit agricultural community deserves personalized emergency service. We understand local priorities and work efficiently to restore normalcy to homes, farms, and businesses throughout Ochiltree County.</p>
        
        <h3 className="text-xl font-bold mb-4 text-brand-brown">Comprehensive Insurance Support</h3>
        <p className="text-gray-700 mb-6">Our experienced team works with insurance companies serving agricultural and rural properties, ensuring comprehensive coverage for both residential and agricultural emergency repairs throughout the northern Panhandle.</p>
      </div>
    </div>
  </section>
</FadeIn>

<FadeIn>
  <section className="mb-16 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-brand-brown">
      Perryton Panhandle Emergency Response Protocols
    </h2>
    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
      Perryton's location in the far northern Texas Panhandle creates unique emergency roofing challenges as the region experiences some of the most extreme weather in Texas, including severe blizzards, ice storms, and intense summer thunderstorms. As Ochiltree County's seat, Perryton serves agricultural, oil, and gas operations that require specialized emergency response capabilities.
    </p>
    <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
      <h4 className="text-xl font-bold mb-3 text-brand-brown">Perryton Emergency Response Timeline</h4>
      <ul className="space-y-2 text-gray-700">
        <li><strong>0-25 minutes:</strong> Emergency dispatch from Amarillo, weather conditions assessed</li>
        <li><strong>25-90 minutes:</strong> Travel time via Highway 83 north, cold-weather equipment loaded</li>
        <li><strong>90-120 minutes:</strong> On-site arrival, extreme weather damage assessment</li>
        <li><strong>120-240 minutes:</strong> Emergency protection using cold-weather rated materials</li>
        <li><strong>3-6 hours:</strong> Documentation, agricultural and energy facility coordination</li>
      </ul>
    </div>
    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
      Natural gas processing and agricultural facilities throughout Ochiltree County require immediate emergency response to prevent production shutdowns and environmental hazards. Emergency operations account for extreme northern Panhandle weather including blizzard conditions, ice storms, and severe temperature fluctuations.
    </p>
  </section>
</FadeIn>

<FadeIn>
  <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
    <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible className="max-w-4xl mx-auto">
      <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
        <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Perryton?</AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">We respond within 90 minutes for active leaks and storm damage throughout Perryton and Ochiltree County. Our Amarillo headquarters provides direct access via Highway 83, ensuring rapid emergency response to agricultural, residential, and commercial properties. Emergency crews are available 24/7 year-round.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
        <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What emergency situations do you handle in Perryton?</AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">In Perryton's agricultural environment, we handle active leaks, severe weather damage, hail punctures, wind damage to farming operations, grain storage facility emergencies, and any emergency compromising structural integrity of residential, commercial, or agricultural properties throughout Ochiltree County.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
        <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency services for agricultural facilities?</AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in emergency repairs for agricultural operations including grain elevators, storage facilities, processing buildings, and farm structures. We understand agricultural timing is critical and coordinate repairs to minimize disruption to farming operations while protecting valuable crops and equipment.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
        <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you coordinate with farming operations during emergencies?</AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">We understand agricultural timing is critical in Perryton. Our emergency services provide immediate protection while coordinating repair scheduling to minimize impact on planting, growing, or harvest operations. We prioritize emergency protection to prevent crop loss while planning permanent repairs at optimal times.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
        <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are emergency repair costs in Perryton?</AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">Emergency repair costs vary based on property type and damage extent. Most agricultural, residential, and commercial insurance policies cover emergency repairs, especially weather-related damage. We provide free emergency assessments and work directly with insurance companies to ensure maximum coverage for all property types in Ochiltree County.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
        <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you assist with insurance claims for agricultural properties?</AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. We have extensive experience with insurance companies serving agricultural markets, including those specializing in farm and crop insurance. Our team provides comprehensive documentation for both agricultural and residential claims, ensuring maximum coverage for emergency repairs throughout the northern Panhandle.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
</FadeIn>
        <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Perryton property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}
