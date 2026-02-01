import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Levelland TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Levelland TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairLevellandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Levelland", url: "/emergency-roof-repair-levelland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland Emergency Roof Repair",
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Levelland TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Levelland?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Levelland. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Levelland. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/emergency-repair-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Levelland</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">24/7 emergency roof repair throughout Levelland and Hockley County. Located 90 minutes southwest of our Amarillo headquarters via Highway 385, we respond within 2 hours for emergency storm damage and active leaks. Emergency tarping, leak mitigation, and permanent repairs available around the clock.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Levelland's Emergency Roof Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Levelland and Hockley County. As home to South Plains College and a thriving agricultural community, Levelland requires emergency roofing services that understand both educational facilities and rural property needs in West Texas conditions.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Levelland's diverse community - from the college campus and historic downtown to cotton farming operations and residential neighborhoods. Our strategic response from Amarillo ensures rapid emergency protection for all property types.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Strategic Regional Response</h3>
                <p className="text-gray-700 mb-4">From our Amarillo headquarters, we provide the most efficient emergency response to Levelland and Hockley County via Highway 114. This direct route enables our crews to reach Levelland properties within 90 minutes for immediate emergency protection.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Emergency hotline: (806) 622-6041</li>
                  <li>• Response time: Under 90 minutes</li>
                  <li>• Hockley County service area</li>
                  <li>• College and agricultural facility expertise</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">South Plains Weather Patterns</h3>
                <p className="text-gray-700 mb-4">Levelland's position on the South Plains exposes properties to intense weather systems requiring comprehensive emergency preparation:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Severe hailstorms (especially spring months)</li>
                  <li>• High winds up to 70+ mph</li>
                  <li>• Tornado activity during peak season</li>
                  <li>• Flash flooding potential</li>
                  <li>• Cotton harvest weather challenges</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Comprehensive Emergency Services for Levelland</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎓</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Educational Facility Emergency Response</h3>
                <p className="text-gray-700">Specialized emergency services for South Plains College and Levelland's schools, ensuring minimal disruption to educational operations during roof emergencies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏘️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Residential Community Protection</h3>
                <p className="text-gray-700">Complete residential emergency services for Levelland's neighborhoods, from historic homes near downtown to modern developments throughout the city.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌾</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Emergency Services</h3>
                <p className="text-gray-700">Emergency protection for cotton farms, grain storage, and agricultural processing facilities critical to Levelland's agricultural economy.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Levelland Emergency Response Protocol</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                  <h4 className="font-bold text-brand-brown mb-2">24/7 Emergency Contact</h4>
                  <p className="text-sm text-gray-700">Immediate response to emergency calls</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                  <h4 className="font-bold text-brand-brown mb-2">Rapid Mobilization</h4>
                  <p className="text-sm text-gray-700">Emergency crew dispatched within 20 minutes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                  <h4 className="font-bold text-brand-brown mb-2">Emergency Mitigation</h4>
                  <p className="text-sm text-gray-700">Immediate damage control and assessment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                  <h4 className="font-bold text-brand-brown mb-2">Complete Restoration</h4>
                  <p className="text-sm text-gray-700">Permanent repair with warranty protection</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Levelland Chooses 5 Star Roofing for Emergency Repairs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Educational Institution Expertise</h3>
                <p className="text-gray-700 mb-6">Levelland's status as a college town requires specialized understanding of educational facility needs. We provide emergency services that minimize disruption to classes and campus operations while ensuring student and staff safety.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Agricultural Community Support</h3>
                <p className="text-gray-700 mb-6">Serving Hockley County's cotton farming community requires understanding agricultural timing and priorities. Our emergency services protect both residential properties and critical agricultural infrastructure during severe weather events.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">South Plains Weather Expertise</h3>
                <p className="text-gray-700 mb-6">The South Plains region experiences unique weather patterns requiring specialized emergency preparedness. We monitor regional forecasts and maintain emergency supplies specifically for rapid deployment to the Levelland area.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Community-Centered Service</h3>
                <p className="text-gray-700 mb-6">Levelland's close-knit community deserves personalized emergency service. Our team understands local priorities and works efficiently to restore normalcy to homes, businesses, and educational facilities throughout Hockley County.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Levelland Cotton Country Emergency Response
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Levelland serves as the hub of one of Texas's most productive cotton-growing regions, requiring emergency roofing services that understand the unique demands of cotton farming operations, ginning facilities, and agricultural storage buildings that support the South Plains cotton industry. Hockley County produces over 200,000 bales annually, making agricultural facility protection critical to regional economics.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Levelland Emergency Response Timeline</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>0-20 minutes:</strong> Emergency dispatch from Amarillo, route planning via Highway 114</li>
                <li><strong>20-75 minutes:</strong> Travel time to Levelland, equipment and materials prepared</li>
                <li><strong>75-90 minutes:</strong> On-site arrival, immediate assessment and safety evaluation</li>
                <li><strong>90-180 minutes:</strong> Emergency protection installed, cotton facility coordination if needed</li>
                <li><strong>3-6 hours:</strong> Comprehensive damage documentation, insurance coordination, permanent repair planning</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Cotton ginning facilities in Levelland operate under strict timelines during harvest season, typically September through November, when emergency repairs must account for continuous operations and cotton quality protection. Moisture intrusion during ginning operations can contaminate thousands of bales, making immediate emergency response critical for facility protection.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Agricultural chemical storage and application facilities throughout Hockley County require specialized emergency protocols due to herbicide, pesticide, and fertilizer storage that creates unique safety considerations. Emergency crews maintain chemical-resistant equipment and safety protocols for agricultural facility operations throughout the cotton-growing region.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">South Plains Weather Challenges and Emergency Preparedness</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Levelland's position on the South Plains creates exposure to severe weather patterns that approach from multiple directions, with storm systems developing over New Mexico's mountains and intensifying as they move across the flat terrain of Hockley County. The area experiences frequent supercell thunderstorms with large hail, high winds, and tornadoes during spring and early summer months.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Levelland Severe Weather Patterns</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Hail Season:</strong> March-June with peak activity in April-May, baseball-sized hail common</li>
                <li><strong>Tornado Activity:</strong> Enhanced risk during La Niña years, F2-F3 tornadoes documented</li>
                <li><strong>High Winds:</strong> Frequent straight-line winds exceeding 70 mph, especially during cotton harvest</li>
                <li><strong>Flash Flooding:</strong> Draws and low-lying areas prone to rapid flooding during heavy rainfall events</li>
                <li><strong>Dust Storms:</strong> Agricultural dust and debris creating hazardous conditions and material challenges</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dust storm activity in Levelland can precede severe thunderstorms, creating hazardous conditions that affect emergency response timing and techniques. High winds carrying agricultural dust and debris require specialized tarping and emergency protection methods designed for sustained high-wind conditions and abrasive particulate environments.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Winter weather emergency challenges include ice storms and blizzard conditions that can isolate Levelland from regional resources, requiring pre-positioned emergency materials and equipment. South Plains winter storms often develop rapidly and can deposit significant ice accumulation that exceeds structural design limits for agricultural buildings.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Cotton Industry Emergency Protection Protocols
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency response in Levelland's cotton-producing region requires understanding of ginning operations, cotton storage requirements, and seasonal demands that create critical timing for facility protection. Cotton gins typically operate 24 hours during harvest season, making emergency repairs complex when continuous operations are essential for regional agricultural productivity.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Coordination with cotton marketing cooperatives and ginning facilities requires understanding of delivery schedules, quality requirements, and financial implications of emergency downtime. Cotton facilities may need emergency protection completed within hours to prevent contract defaults and commodity quality degradation that affects farmer income and regional economic stability.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency material selection for cotton facilities accounts for lint and dust accumulation that can create fire hazards and equipment interference. Materials must be compatible with cotton processing environments and resistant to static buildup that could create ignition sources in cotton storage and processing areas.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Educational Facility Emergency Response at South Plains College</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              South Plains College in Levelland requires specialized emergency response protocols that account for student safety, educational continuity, and protection of specialized equipment including laboratories, technology centers, and athletic facilities. Dormitory emergencies require immediate response to protect student housing and prevent displacement during academic sessions.
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">SPC Emergency Response Priorities</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Student Housing:</strong> Immediate protection for dormitories to prevent student displacement</li>
                <li><strong>Academic Buildings:</strong> Classroom and laboratory protection to maintain educational operations</li>
                <li><strong>Technology Centers:</strong> Specialized protection for expensive equipment and computer systems</li>
                <li><strong>Athletic Facilities:</strong> Gymnasium and sports complex protection for community and student use</li>
                <li><strong>Administrative Buildings:</strong> Protection of student records and administrative operations</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency coordination with South Plains College facilities management includes communication with academic departments, student services, and residential life staff to ensure emergency repairs minimize disruption to educational activities. Summer break provides opportunities for extensive repairs, while academic sessions require careful timing and temporary measures.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Student safety protocols during emergency operations include coordination with campus security, notification systems for building evacuations, and temporary relocation procedures for residential students. Emergency repairs in dormitories must account for continuous occupancy and student safety requirements throughout the repair process.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Levelland Community and Economic Considerations
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Levelland's economy depends heavily on both agricultural production and educational services provided by South Plains College, creating interconnected emergency response needs that affect multiple sectors simultaneously. Major storm events can impact cotton operations, college facilities, and residential areas, requiring coordinated response that prioritizes community resilience and economic recovery.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Healthcare facilities in Levelland, including Covenant Hospital Levelland and medical clinics, require priority emergency response to maintain continuous healthcare services for both local residents and the broader Hockley County area. Medical facility downtime during emergencies can force residents to seek care in distant communities, creating additional hardship during crisis situations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Municipal services and government facilities, including city hall, police and fire departments, and public works facilities, need rapid emergency protection to maintain community services during and after severe weather events. Emergency response coordination includes these critical facilities to ensure continued public safety and municipal operations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Insurance and Regional Economic Recovery</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Insurance considerations for Levelland properties include specialized agricultural coverage for cotton operations, educational institution policies for South Plains College, and business interruption coverage for facilities that serve the broader regional economy. Emergency response documentation must meet varied insurance requirements while ensuring rapid property protection.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Regional economic impact assessments consider the interconnected nature of Levelland's agricultural and educational economy, where cotton production supports local businesses that also serve college students and staff. Emergency response prioritization accounts for facilities with broader economic importance to Hockley County's stability and growth.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Long-term community preparedness includes partnerships with agricultural extension services, college emergency management, and regional planning organizations to strengthen overall resilience and reduce the frequency and severity of emergency situations. These collaborations enhance both individual property protection and community-wide emergency response capabilities.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Levelland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 90 minutes for active leaks and storm damage throughout Levelland and Hockley County. Our Amarillo headquarters provides direct access via Highway 114, ensuring rapid emergency response to residential, educational, and agricultural properties. Emergency crews are available 24/7 year-round.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What emergency situations do you handle in Levelland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">In Levelland's diverse environment, we handle active leaks, severe weather damage, hail punctures, wind damage to educational and agricultural facilities, cotton farming equipment protection, and any emergency compromising structural integrity of residential, commercial, or institutional properties throughout Hockley County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency services for South Plains College?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in emergency repairs for educational facilities including dormitories, classrooms, administrative buildings, and athletic facilities. Our team coordinates with college maintenance staff to minimize disruption to campus operations while ensuring student and faculty safety during emergency repairs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle agricultural facility emergencies?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We understand cotton farming operations and agricultural timing are critical in Levelland. Our emergency services provide immediate protection for grain storage, processing facilities, and farm buildings while coordinating repairs to minimize impact on agricultural operations and protect valuable equipment and crops.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are emergency repair costs in Levelland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Emergency repair costs vary based on property type and damage extent. Most residential, commercial, and institutional insurance policies cover emergency repairs, especially weather-related damage. We provide free emergency assessments and work directly with insurance companies to ensure maximum coverage for all property types in Hockley County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you coordinate with local authorities during severe weather?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. During severe weather events affecting Levelland, we coordinate with city emergency services, the college administration, and Hockley County authorities to prioritize emergency responses based on public safety needs. This coordination ensures critical facilities receive immediate attention while maintaining overall community safety.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Levelland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Levelland property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}