import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Borger TX | 5 Star Roofing',
  description: "Professional emergency roof repair in Borger TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function EmergencyRoofRepairBorgerPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Borger", url: "/emergency-roof-repair-borger/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/emergency-roof-repair-borger/#localbusiness",
        "name": "5 Star Commercial Roofing - Borger Emergency Roof Repair",
        "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/emergency-roof-repair-borger/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Borger,_Texas", "name": "Borger", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional emergency roof repair in Borger TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Emergency Roofing Services",
            "name": "Emergency Roof Repair in Borger",
            "description": "Professional emergency roof repair services in Borger, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Borger",
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
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Borger?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Borger. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Borger. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-stinnett-23-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Emergency Roof Repair in <span className="text-brand-gold-light">Borger</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">24/7 emergency roof repair throughout Borger and Hutchinson County. When Texas Panhandle storms strike - hail, high winds, or severe weather - we respond within 90 minutes from our Amarillo headquarters. Emergency tarping, leak mitigation, and permanent repairs available around the clock for immediate protection.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Borger's Emergency Roof Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional emergency roof repair throughout Borger and Hutchinson County. Serving the Texas Panhandle's industrial and residential properties with roofing solutions engineered for extreme weather conditions including severe hailstorms, high winds, and temperature variations.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Borger's unique community - from historic downtown properties to modern residential areas near Phillips University. Our team understands the roofing challenges faced by this important refinery town and industrial center.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Close Proximity Response</h3>
                <p className="text-gray-700 mb-4">Located just 45 minutes from Borger, our Amarillo headquarters provides the closest professional emergency roofing response in the Texas Panhandle. We understand Borger's industrial environment and residential community needs.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• 24/7 emergency line: (806) 622-6041</li>
                  <li>• Response time: Under 1.5 hours</li>
                  <li>• Complete Hutchinson County coverage</li>
                  <li>• Industrial and residential expertise</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Borger Weather Challenges</h3>
                <p className="text-gray-700 mb-4">Borger's Texas Panhandle location exposes properties to severe weather patterns requiring specialized emergency response:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Severe hailstorms (peak April-June)</li>
                  <li>• High winds exceeding 65 mph</li>
                  <li>• Tornado activity in spring/early summer</li>
                  <li>• Extreme temperature swings (0°F to 105°F)</li>
                  <li>• Industrial pollution and corrosion factors</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Emergency Services for Borger Properties</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏭</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Industrial Facility Emergency Response</h3>
                <p className="text-gray-700">Specialized emergency services for Borger's industrial facilities, including chemical-resistant materials and safety protocols for industrial environments.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Residential Emergency Repair</h3>
                <p className="text-gray-700">Complete residential emergency services for Borger's neighborhoods, from older homes near downtown to newer developments throughout the city.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Rapid Response Protocol</h3>
                <p className="text-gray-700">Immediate dispatch system ensures emergency crews reach Borger properties within 90 minutes of your call, day or night.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Borger Emergency Response Process</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                  <h4 className="font-bold text-brand-brown mb-2">Emergency Call Received</h4>
                  <p className="text-sm text-gray-700">24/7 hotline connects you directly to our dispatch</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                  <h4 className="font-bold text-brand-brown mb-2">Immediate Dispatch</h4>
                  <p className="text-sm text-gray-700">Crew dispatched from Amarillo within 20 minutes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                  <h4 className="font-bold text-brand-brown mb-2">On-Site Assessment</h4>
                  <p className="text-sm text-gray-700">Complete evaluation and emergency protection</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                  <h4 className="font-bold text-brand-brown mb-2">Complete Resolution</h4>
                  <p className="text-sm text-gray-700">Permanent repair with full warranty coverage</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Borger Residents and Businesses Trust 5 Star Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Industrial Environment Expertise</h3>
                <p className="text-gray-700 mb-6">Borger's industrial heritage requires specialized roofing knowledge. Our team understands the unique challenges posed by industrial emissions, chemical exposure, and the corrosive environment that can affect roofing materials in the refinery area.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Panhandle Weather Specialists</h3>
                <p className="text-gray-700 mb-6">The Texas Panhandle's extreme weather requires emergency preparedness year-round. We monitor regional weather patterns and maintain emergency supplies specifically for rapid deployment to Borger and Hutchinson County properties.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Community-Focused Service</h3>
                <p className="text-gray-700 mb-6">As a close-knit community, Borger deserves personalized service. Our team takes pride in serving both long-time residents and newcomers, ensuring every property receives the same level of professional care and attention.</p>
                
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Complete Insurance Support</h3>
                <p className="text-gray-700 mb-6">We streamline the insurance claims process for Borger property owners, providing detailed documentation and working directly with adjusters to ensure you receive full coverage for emergency repairs and replacements.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Borger Industrial Emergency Response Protocols
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's position as a major industrial center in the Texas Panhandle creates unique emergency roofing challenges that require specialized knowledge and equipment. The Phillips 66 Borger Refinery and associated petrochemical operations create an environment where roofing materials face accelerated degradation from chemical exposure, temperature extremes, and industrial particulates that don't affect other communities.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our emergency response protocols for Borger account for industrial safety requirements, hazardous material considerations, and the critical nature of maintaining weather protection for facilities that operate 24/7. Refinery operations cannot tolerate extended weather exposure without risking equipment damage, environmental impacts, and operational shutdowns that affect the entire regional economy.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency repairs in Borger's industrial district require coordination with facility safety personnel, compliance with OSHA industrial construction standards, and use of materials compatible with chemical environments. Our crews maintain current OSHA 30-hour certification and specialized training for industrial emergency operations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Chemical-Resistant Emergency Materials for Borger</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's industrial atmosphere contains sulfur compounds, petrochemical vapors, and other airborne chemicals that can rapidly degrade standard emergency roofing materials. Our emergency supply inventory includes chemical-resistant tarping materials, corrosion-resistant fasteners, and sealants specifically formulated for petrochemical environments.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Specialized Emergency Materials for Industrial Borger</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Chemical-Resistant Tarps:</strong> EPDM and Hypalon materials resistant to sulfur compounds and petrochemicals</li>
                <li><strong>Corrosion-Resistant Fasteners:</strong> 316 stainless steel and exotic alloy fasteners for industrial environments</li>
                <li><strong>Industrial Sealants:</strong> Chemical-resistant urethanes and silicones designed for refinery applications</li>
                <li><strong>Safety Equipment:</strong> Gas monitors, emergency escape respirators, anti-static materials for volatile environments</li>
                <li><strong>Communication Systems:</strong> Explosion-proof radios and emergency communication equipment</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency material selection for Borger properties accounts for both immediate weather protection and long-term compatibility with local atmospheric conditions. Standard emergency tarps may degrade within weeks in Borger's industrial environment, requiring premium materials for extended temporary protection during insurance processing and permanent repair planning.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Industrial Safety and Emergency Coordination Protocols</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency roofing operations in Borger's industrial areas require pre-clearance with facility security, coordination with plant emergency response teams, and compliance with hot work permits and confined space protocols. Our crews maintain current industrial safety certifications and undergo annual updates on refinery emergency procedures.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Coordinating emergency repairs during refinery operations requires understanding of plant schedules, maintenance windows, and emergency shutdown procedures. Some emergency repairs may need to be delayed or modified based on active industrial operations, requiring flexibility in response timing and approach while maintaining property protection.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Wind direction monitoring is critical for emergency operations near industrial facilities, as prevailing winds can carry chemical vapors and particulates that affect worker safety and material application. Our emergency crews monitor real-time atmospheric conditions and maintain gas detection equipment for volatile environments.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Borger Weather Patterns and Emergency Preparedness
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's location in the heart of the Texas Panhandle creates a convergence of weather patterns that produce some of the most challenging emergency roofing conditions in North Texas. The city's elevation of 3,000 feet and open prairie location expose properties to unobstructed wind patterns that can exceed 80 mph during severe thunderstorms and winter blizzards.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Borger Seasonal Weather Emergency Patterns</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Spring (March-May):</strong> Peak severe weather season with supercell thunderstorms, baseball-sized hail, and tornado activity</li>
                <li><strong>Summer (June-August):</strong> Extreme heat (105°F+), sudden severe downbursts, and UV degradation of roofing materials</li>
                <li><strong>Fall (September-November):</strong> Rapid temperature swings, early ice storms, and high winds from pressure system changes</li>
                <li><strong>Winter (December-February):</strong> Ice storms, blizzard conditions, extreme cold (-10°F), and snow load accumulation</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The Texas Panhandle's notorious hail corridor passes directly through Hutchinson County, with Borger experiencing an average of 3-4 significant hail events annually. Hailstones larger than golf balls occur regularly, creating widespread roof damage that overwhelms local repair capacity and requires coordinated regional emergency response.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Winter ice storms in Borger create unique emergency challenges as ice accumulation can exceed one inch on horizontal surfaces, creating dangerous roof loads and extensive damage when ice melts and refreezes. Emergency repairs during ice events require specialized equipment and cold-weather techniques not needed in warmer climates.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Enhanced Weather Monitoring for Industrial Operations</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Industrial facilities in Borger require advance warning of severe weather to safely shut down operations and protect equipment from weather damage. Our emergency response system includes direct feeds from National Weather Service Doppler radar and automated notification systems that alert facility managers and emergency responders of approaching severe weather.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Microclimate monitoring around industrial facilities detects temperature inversions, chemical plume movement, and local wind patterns that can affect emergency repair operations. Industrial heat islands and thermal updrafts can intensify local weather conditions, creating wind shear and downdraft effects that require modified emergency procedures.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency response timing in Borger accounts for industrial shift schedules, with enhanced readiness during evening and night shifts when fewer personnel are available for facility coordination. Weekend emergency response requires coordination with skeleton crews and on-call plant personnel for industrial facility access and safety oversight.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Borger Residential and Commercial Emergency Response
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's residential communities include everything from historic homes in the original townsite to modern developments near Lake Meredith, each presenting unique emergency response challenges. Older homes in downtown Borger often feature architectural details and roofing systems that require specialized emergency repair techniques to preserve historical character while providing weather protection.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The city's proximity to Lake Meredith creates seasonal humidity variations that affect emergency repair material performance and drying times. High humidity during summer months can extend emergency tarping requirements, while winter dry periods may cause emergency materials to become brittle and require enhanced anchoring systems.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Commercial properties in Borger include retail businesses, medical facilities, and service companies that serve both local residents and industrial facility workers. Business continuity during emergency repairs is critical for maintaining essential services during weather events that may isolate Borger from regional support services.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Emergency Response Logistics and Resource Management</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's distance from major supply centers requires strategic pre-positioning of emergency materials and equipment to ensure rapid response capability. Our Amarillo warehouse maintains dedicated Borger emergency supplies including industrial-grade materials, standard residential repair items, and specialized equipment for the unique challenges of Hutchinson County emergency operations.
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Borger Emergency Response Timeline</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>0-20 minutes:</strong> Emergency call received, damage assessment conducted, crew dispatched from Amarillo</li>
                <li><strong>20-50 minutes:</strong> Travel time to Borger via Highway 136, equipment and materials loaded</li>
                <li><strong>50-75 minutes:</strong> On-site arrival, safety assessment, industrial coordination if applicable</li>
                <li><strong>75-180 minutes:</strong> Emergency protection installed, initial damage documentation completed</li>
                <li><strong>3-6 hours:</strong> Complete assessment, insurance documentation, permanent repair planning initiated</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency equipment for Borger operations includes mobile generators for power outage conditions, heated storage for cold-weather materials, and specialized lifting equipment for industrial facility emergency access. Communications equipment includes satellite backup systems for situations when cellular networks are compromised during severe weather events.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Resource coordination for major emergency events includes mutual aid agreements with regional roofing contractors and material suppliers throughout the Texas Panhandle. Large-scale damage events may exceed local capacity, requiring coordinated response from Amarillo, Lubbock, and other regional centers to ensure all Borger properties receive timely emergency protection.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Insurance and Documentation for Borger Properties
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Insurance considerations for Borger properties often involve specialized industrial coverage, environmental liability policies, and business interruption insurance that requires detailed documentation of emergency response timing and effectiveness. Our emergency response documentation meets requirements for both standard homeowner's policies and complex industrial insurance programs.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Industrial facility insurance claims may require environmental impact assessments, regulatory compliance documentation, and coordination with multiple insurance carriers covering different aspects of facility operations. Emergency repairs must be documented to demonstrate immediate response to prevent environmental releases or equipment damage that could trigger additional liability.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Residential insurance in Borger benefits from our comprehensive documentation of regional weather patterns, hail frequency data, and wind damage statistics that support claim approval for weather-related damage. Historical weather data specific to Hutchinson County strengthens insurance claims and demonstrates the necessity of premium roofing materials for the region's extreme conditions.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Long-Term Maintenance and Community Preparedness</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's industrial environment and extreme weather require proactive maintenance programs that go beyond standard residential roof care. Industrial particulates and chemical exposure accelerate normal wear patterns, requiring more frequent inspections and preventive maintenance to avoid emergency situations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Community preparedness programs for Borger include partnerships with local emergency management, industrial facility emergency coordinators, and regional weather services to provide early warning systems and coordinated emergency response. Public education programs focus on recognizing emergency damage signs and proper emergency contact procedures.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Seasonal preparedness campaigns target the unique challenges of each weather season in Borger, from spring severe weather preparation to winter ice storm readiness. Material pre-positioning and crew preparation ensure Borger receives priority response during regional emergency events that may affect multiple communities simultaneously.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you respond to emergencies in Borger?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We respond within 90 minutes for active leaks and storm damage throughout Borger and Hutchinson County. Our Amarillo headquarters is perfectly positioned to serve Borger quickly via Highway 136. Emergency crews are available 24/7 year-round with pre-positioned supplies for immediate deployment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What emergency situations do you handle in Borger?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">In Borger's industrial environment, we handle active leaks, storm damage, hail punctures, wind-torn sections, industrial chemical damage to roofing materials, and any situation compromising structural integrity. We're experienced with both residential and industrial facility emergencies throughout the refinery area and surrounding neighborhoods.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency tarping in Borger's high-wind conditions?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in emergency tarping for Texas Panhandle wind conditions. Our tarps are heavy-duty, wind-resistant, and installed using reinforced anchoring systems designed for Borger's frequent high winds. We understand local wind patterns and use installation techniques that ensure tarps remain secure during the repair process.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle industrial facility emergency repairs?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Our team is trained in industrial safety protocols and uses materials resistant to chemical exposure common in Borger's industrial environment. We coordinate with facility safety personnel and follow all industrial site requirements while providing rapid, effective emergency repairs that maintain facility operations and safety standards.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the cost of emergency repairs in Borger?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Emergency repair costs vary based on damage extent and property type. Most homeowner's and commercial insurance policies cover emergency repairs, especially weather-related damage. We provide free emergency assessments and work directly with insurance companies to maximize coverage. Our transparent pricing ensures no surprises during emergency situations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you assist with insurance claims for Borger properties?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. We have extensive experience with insurance companies serving the Borger market, including those specializing in industrial properties. Our team provides comprehensive documentation, meets with adjusters, and ensures you receive full coverage for necessary repairs. We understand both residential and commercial claim processes.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Borger property owners. Expert emergency roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}