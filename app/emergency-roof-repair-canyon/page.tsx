import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Canyon TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Canyon TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairCanyonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Canyon", url: "/emergency-roof-repair-canyon/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-canyon/#localbusiness",
        "name": "5 Star Commercial Roofing - Canyon Emergency Roof Repair",
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-canyon/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Canyon TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Emergency Roofing Services",
            "name": "Emergency Roof Repair in Canyon",
            "description": "Professional emergency roof repair services in Canyon, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Canyon",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Emergency Roof Repair Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Roof Repair Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Roof Repair Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Canyon?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Canyon. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Canyon. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-28-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Canyon</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">24/7 emergency roof repair throughout Canyon and Randall County. Located just 15 minutes south of our Amarillo headquarters, Canyon receives our fastest response times - under 30 minutes for emergency calls. Emergency tarping, leak mitigation, and permanent repairs available around the clock.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Canyon's Emergency Roof Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Canyon and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Canyon with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Emergency Roofing Services for Canyon's University Community
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Canyon's identity revolves around West Texas A&M University (WTAMU), creating unique emergency roofing challenges that blend residential, commercial, and institutional needs. The university's 42,000+ students, faculty, and staff create a dynamic community requiring specialized emergency response capabilities that account for academic schedules, student housing operations, and critical research facilities.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Storm systems approaching Canyon often intensify as they encounter the Caprock Escarpment just east of the city, creating sudden severe weather events that catch residents and university officials unprepared. Our emergency response protocols specifically account for the university's unique needs, including coordination with campus facilities management, student housing operations, and emergency services.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Palo Duro Canyon State Park area to the southeast creates unique wind pattern effects that can intensify storm damage in certain Canyon neighborhoods. Properties near the canyon rim experience downdrafts and wind shear effects that increase roof damage potential. Our emergency crews understand these geographical influences when assessing storm damage and prioritizing emergency responses.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Priority Response for Educational and Critical Facilities</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              West Texas A&M University facilities receive priority emergency response due to their critical role in the community and potential impact on thousands of students and staff. Research laboratories containing sensitive equipment and experiments require immediate protection from water intrusion. Emergency repairs to dormitories and student housing affect hundreds of students who may need immediate relocation assistance.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The WTAMU campus includes specialized facilities like the Panhandle-Plains Historical Museum, veterinary teaching hospital, and agricultural research centers that require unique emergency response approaches. Museum collections need protection from humidity and water damage, while laboratory facilities may contain temperature-sensitive research materials requiring immediate climate protection.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Canyon's healthcare facilities, including Harrington Cancer Center and medical offices, require rapid emergency response to maintain continuous patient care capabilities. Medical equipment, pharmaceutical storage, and patient records need immediate protection from water damage. Our emergency crews coordinate with medical facilities to ensure uninterrupted healthcare services during roof emergency situations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Student Housing and Residential Emergency Response
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Canyon's large student population creates unique emergency roofing challenges in both on-campus housing and off-campus rental properties. Many students lack experience with Texas weather patterns and may not recognize early signs of roof damage or water intrusion. Our emergency response includes educational components that help students understand when to seek immediate assistance and how to prevent secondary damage.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Off-campus student housing, particularly in the areas near 4th Avenue and 23rd Street, includes numerous rental properties that may defer maintenance or emergency repairs. We work with property management companies and individual landlords to provide rapid response services that protect both property investments and student safety. Many of these properties require emergency coordination with academic schedules to minimize student displacement.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fraternity and sorority houses near the WTAMU campus require specialized emergency response due to their occupancy patterns and historic building characteristics. Many Greek life facilities occupy older buildings with unique architectural features that complicate emergency repairs. Our crews maintain expertise in emergency solutions that preserve historic character while providing immediate weather protection.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Seasonal Emergency Patterns and Academic Calendar Coordination</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Canyon's emergency roofing needs follow distinct seasonal patterns that correlate with both weather systems and academic activities. Spring semester coincides with peak severe weather season, creating high emergency demand when students and faculty are most active. Summer break provides opportunities for extensive repairs but also reduces local population and available housing alternatives for displaced residents.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Football season at WTAMU brings increased visitor traffic and demands on local accommodations, making emergency housing more challenging during roof damage events. Homecoming and other major university events create periods when emergency repairs must account for increased activity levels and limited alternative housing availability. We maintain enhanced emergency response capabilities during these peak activity periods.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Winter weather in Canyon can create unique emergency situations when ice storms damage roofing systems and low temperatures prevent immediate permanent repairs. Our emergency winterization procedures include specialized materials and techniques for sub-freezing weather emergency protection. Heated work areas and cold-weather adhesives enable emergency repairs during extreme cold events.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Agricultural and Rural Emergency Response in Canyon Area
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Canyon's location in the heart of Texas Panhandle agriculture creates emergency roofing demands for farms, ranches, and agricultural facilities throughout Randall County. Cattle operations, grain storage facilities, and equipment barns require rapid emergency response to protect livestock, crops, and expensive agricultural machinery from weather exposure.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dairy operations and livestock facilities cannot tolerate extended weather exposure without significant animal welfare and economic consequences. Emergency repairs to milking parlors, feed storage buildings, and animal housing receive priority response to prevent livestock stress and production losses. Our emergency crews maintain specialized equipment for large-span agricultural buildings common in Canyon's rural areas.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Grain elevator and storage facilities in Canyon's agricultural district require immediate emergency response to prevent commodity losses worth hundreds of thousands of dollars. Weather intrusion into grain storage can destroy entire harvests and create health hazards from mold and contamination. Our emergency procedures include coordination with agricultural insurance adjusters and commodity handlers to minimize crop losses.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Wind Patterns and Weather Challenges Specific to Canyon</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Canyon's position near the Caprock Escarpment creates unique wind patterns that intensify storm systems and create challenging conditions for emergency roof repairs. Downdrafts from the escarpment can double wind speeds in certain areas of town, particularly affecting properties in the Prairie Dog Town Fork valley. These microclimates require specialized emergency response techniques.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Palo Duro Canyon's proximity creates thermal updrafts and wind shear conditions that can extend storm damage beyond initial impact areas. Emergency assessments must account for these local weather effects when determining damage extent and repair priorities. Properties on the west side of Canyon often experience different wind loading than those in the valley bottom.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dust storms and high winds preceding thunderstorm systems can compromise emergency repair materials and techniques. Our crews maintain dust-resistant emergency supplies and modified application procedures for high-wind conditions common during spring weather patterns. Emergency tarping procedures use enhanced anchor systems designed for sustained high winds.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Coordination with Local Emergency Services and University Resources
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency roofing response in Canyon requires close coordination with multiple agencies including WTAMU police, Canyon fire department, Randall County emergency management, and university facilities personnel. Major storm events can overwhelm local resources, making inter-agency coordination essential for effective emergency response. We maintain communication protocols with all relevant emergency services.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              West Texas A&M University maintains its own emergency management capabilities and specialized equipment that can assist with community-wide emergency response. University resources include heavy equipment, emergency generators, and temporary shelter facilities that can support extended emergency operations. Our emergency response plans incorporate university resource availability when planning large-scale emergency operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Panhandle Regional Planning Commission coordinates emergency resources across the Texas Panhandle, providing additional support during major storm events. Regional mutual aid agreements can bring emergency roofing resources from Amarillo and other nearby communities when local capacity is exceeded. We participate in regional emergency response planning and maintain communication with regional emergency management authorities.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Insurance Coordination for University Town Properties</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Insurance claim processing in Canyon often involves multiple property types and coverage situations unique to university communities. Student rental properties may have different coverage requirements than permanent residential properties, while university facilities may carry specialized institutional coverage. Our emergency response documentation accommodates these varied insurance requirements.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Many Canyon rental properties targeting students carry landlord insurance policies with specific emergency repair coverage limitations. Emergency repairs may require pre-authorization from insurance carriers before proceeding with temporary protection measures. We maintain relationships with insurance adjusters familiar with Canyon's unique property ownership patterns and coverage requirements.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              University property insurance often requires specialized documentation and approval processes that differ from residential and commercial claims. WTAMU facilities may require compliance with state property insurance procedures and coordination with university risk management personnel. Our emergency response procedures accommodate institutional insurance requirements while providing immediate property protection.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Canyon Emergency Response Protocols and Timeline
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our Canyon emergency response follows a meticulously planned protocol designed to minimize damage and protect property within the critical first hours following storm damage. Initial response begins with our 24/7 emergency hotline, staffed by experienced dispatchers who can assess damage severity and deploy appropriate emergency crews based on weather conditions and damage reports.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Emergency Response Timeline for Canyon</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>0-15 minutes:</strong> Emergency call received and logged, initial damage assessment via phone, crew dispatched from Amarillo headquarters</li>
                <li><strong>15-45 minutes:</strong> Emergency crew en route to Canyon location, equipment loaded including tarping materials, safety gear, and emergency lighting</li>
                <li><strong>45-90 minutes:</strong> On-site arrival and initial damage assessment, safety perimeter established, immediate threat mitigation begun</li>
                <li><strong>90 minutes-3 hours:</strong> Emergency tarping or temporary repairs completed, property secured against further weather damage</li>
                <li><strong>3-24 hours:</strong> Comprehensive damage assessment, insurance documentation, permanent repair scheduling and material ordering</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Weather conditions significantly impact our response protocols in Canyon. During active storm systems, crews may need to wait for wind speeds to drop below 25 mph before beginning emergency work on elevated surfaces. Lightning activity requires crews to seek shelter and resume emergency operations only after lightning has cleared the immediate area for at least 30 minutes.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ice storms and freezing conditions common in Canyon's winter weather require modified emergency protocols using cold-weather adhesives and heated application equipment. Emergency tarping during sub-freezing conditions uses specialized materials that remain flexible at low temperatures and attachment methods that account for thermal expansion and contraction cycles.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Canyon Weather Monitoring and Predictive Response</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our Canyon emergency response capabilities include advanced weather monitoring systems that track approaching storm systems across the Texas Panhandle. Doppler radar integration allows us to predict storm intensity and timing, enabling pre-positioning of emergency crews and materials in Canyon when severe weather approaches from the west or southwest.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Spring severe weather season typically runs from March through June in Canyon, with peak activity in April and May. During these months, we maintain enhanced readiness with additional crew capacity and pre-positioned emergency materials throughout the region. Hail season coincides with severe weather season, requiring rapid response capabilities for widespread roof damage events.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Canyon's elevation and position relative to the Caprock Escarpment creates unique weather challenges including sudden temperature drops, flash flooding potential, and enhanced wind speeds during storm events. Our emergency crews monitor National Weather Service alerts specific to Randall County and maintain communication with WTAMU emergency management for campus-related weather impacts.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Emergency Equipment and Material Specifications for Canyon
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency response in Canyon requires specialized equipment capable of operating in extreme weather conditions common to the Texas Panhandle. Our emergency vehicles carry high-wind tarping systems, emergency lighting for nighttime operations, and communication equipment for coordination with local emergency services during major storm events.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Emergency Equipment Inventory for Canyon Operations</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Tarping Systems:</strong> Wind-rated to 60+ mph, UV-resistant polyethylene, cold-weather flexible materials</li>
                <li><strong>Fastening Equipment:</strong> Pneumatic nail guns, concrete anchors, specialized screws for metal roofing common in Canyon</li>
                <li><strong>Safety Equipment:</strong> Fall protection systems, emergency lighting, high-visibility gear for roadside operations</li>
                <li><strong>Assessment Tools:</strong> Moisture meters, infrared thermometers, digital cameras for insurance documentation</li>
                <li><strong>Weather Monitoring:</strong> Portable weather stations, wind meters, lightning detection equipment</li>
                <li><strong>Communication:</strong> Two-way radios, satellite communication backup, emergency contact databases</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Material selection for Canyon emergency repairs accounts for extreme temperature variations and high UV exposure common to the region. Emergency tarping materials use reinforced polyethylene with UV stabilizers to prevent degradation during extended temporary applications. Attachment hardware uses corrosion-resistant materials suitable for alkaline soils common in Canyon's geology.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency response vehicles maintain heated storage compartments for adhesives and sealants that must remain workable in sub-freezing conditions. Backup power systems enable emergency operations during power outages that commonly follow severe storm events. Generator systems include both portable units for work site power and vehicle-mounted systems for equipment operation.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Quality Assurance and Documentation Protocols</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency repairs in Canyon follow strict quality assurance protocols that ensure temporary measures provide effective weather protection while avoiding interference with permanent repair operations. Photo documentation begins immediately upon arrival and continues through completion of emergency measures, providing comprehensive records for insurance processing and quality verification.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Digital measurement tools create precise documentation of damage extent and repair areas, enabling accurate material estimates and permanent repair planning. GPS coordinates and timestamped photography provide verification of response times and work completion for insurance claims processing. Weather conditions at time of repair are documented to validate material selection and application procedures.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Customer communication during emergency operations includes regular updates on repair progress, timeline estimates, and next steps in the permanent repair process. Emergency contact information for insurance claims assistance and permanent repair scheduling is provided before crews depart the property. Follow-up inspections verify temporary repair effectiveness and identify any needed adjustments.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Post-Emergency Services and Permanent Repair Coordination
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Following emergency stabilization, our Canyon service includes comprehensive permanent repair planning and insurance claim support. We maintain detailed documentation from emergency response through permanent repair completion, ensuring seamless transitions and maximum insurance coverage for property damage restoration.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency repairs in Canyon typically require follow-up within 48-72 hours to assess temporary measure effectiveness and begin permanent repair planning. Insurance adjuster coordination often requires on-site meetings and additional documentation to support claim processing. Our project managers handle all insurance communication and documentation requirements.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Permanent repair scheduling accounts for seasonal weather windows, material availability, and property access requirements. University properties may require coordination with academic schedules, while agricultural properties need scheduling around planting and harvest seasons. We provide timeline estimates and regular progress updates throughout the permanent repair process.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Ongoing Maintenance and Prevention Programs</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Canyon property owners benefit from our preventive maintenance programs designed to minimize emergency repair needs through regular inspections and proactive maintenance. Pre-storm season inspections identify potential failure points and enable preventive repairs before severe weather events. These programs are particularly valuable for university facilities and agricultural operations with critical weather protection needs.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Annual maintenance agreements include priority emergency response for participating properties, ensuring fastest possible response times during peak demand periods. Maintenance history documentation helps identify recurring issues and enables targeted improvements to reduce future emergency incidents. Seasonal maintenance schedules account for Canyon's specific weather patterns and building use cycles.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Educational programs for Canyon property owners include weather preparedness seminars, emergency contact procedures, and basic damage assessment training. University residence hall staff receive specialized training on recognizing roof damage signs and emergency contact procedures. Property management companies serving Canyon's rental market receive resources for tenant education and emergency response coordination.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 2 hours for active leaks and storm damage throughout Canyon. 24/7 emergency crews available year-round.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What qualifies as a roofing emergency?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency tarping?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, 24/7 emergency tarping in Canyon. We install waterproof tarps within hours to prevent further damage while processing insurance claims.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Canyon property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}