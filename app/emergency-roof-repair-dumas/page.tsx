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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Emergency Roofing Services",
            "name": "Emergency Roof Repair in Dumas",
            "description": "Professional emergency roof repair services in Dumas, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Dumas",
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
        "mainEntity": [{"@type":"Question","name":"How fast can you respond to emergencies in Dumas?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Dumas. 24/7 emergency crews available year-round."}},{"@type":"Question","name":"What qualifies as a roofing emergency?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior damage, missing shingles after storms, holes from hail/debris, collapsed sections, or severe storm damage requiring immediate protection."}},{"@type":"Question","name":"Do you provide emergency tarping?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping in Dumas. We install waterproof tarps within hours to prevent further damage while processing insurance claims."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-dumas-36-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Agricultural Emergency Response in Moore County
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dumas serves as the agricultural epicenter of Moore County, with vast farming operations, grain storage facilities, and livestock operations that require specialized emergency roofing response. The city's economy depends heavily on agricultural productivity, making emergency protection of farming infrastructure critical to both individual operations and the broader regional economy.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Grain elevators and storage facilities in Dumas represent millions of dollars in agricultural commodities that can be destroyed within hours by roof failure and weather exposure. Emergency response for these facilities requires understanding of grain storage requirements, moisture control systems, and specialized materials that prevent contamination while providing immediate weather protection.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Livestock operations throughout Moore County depend on immediate emergency response to protect cattle, feed supplies, and milking operations from weather exposure. Dairy facilities cannot tolerate extended downtime without significant economic losses and animal welfare concerns. Our emergency protocols prioritize agricultural operations based on livestock welfare and economic impact.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Seasonal Agricultural Emergency Considerations</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency response timing in Dumas must account for agricultural seasons, with harvest periods requiring enhanced emergency readiness and rapid response capabilities. During wheat harvest in late spring and corn harvest in fall, equipment and crop storage facilities need immediate protection from weather damage that could destroy an entire year's production.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Emergency Priority Schedule for Dumas</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Spring (March-May):</strong> Planting season preparation, seed storage protection, severe weather preparedness</li>
                <li><strong>Early Summer (June-July):</strong> Wheat harvest protection, grain elevator emergency readiness, hail damage response</li>
                <li><strong>Late Summer (August-September):</strong> Crop protection, irrigation equipment shelters, livestock facility maintenance</li>
                <li><strong>Fall (October-December):</strong> Corn harvest operations, cattle feeding preparation, winter facility preparations</li>
                <li><strong>Winter (January-February):</strong> Livestock shelter protection, feed storage security, cold weather facility maintenance</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Coordination with agricultural cooperatives and grain handling facilities requires understanding of commodity trading schedules, delivery requirements, and financial implications of emergency downtime. Grain elevators may need emergency repairs completed within hours to prevent contract defaults and commodity losses worth hundreds of thousands of dollars.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Specialized Equipment for Agricultural Emergency Response</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Agricultural facilities in Dumas often feature large-span roofing systems, tall grain storage structures, and specialized ventilation requirements that demand unique emergency response equipment. Our emergency response fleet includes extended reach equipment, heavy-duty tarping systems, and materials specifically designed for agricultural building protection.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Grain dust and agricultural particulates create specialized fire and explosion hazards that require non-sparking tools and static-safe materials for emergency operations. All emergency equipment used in grain handling facilities meets agricultural safety standards and includes grounding systems to prevent static electricity buildup during emergency operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency communication systems for rural Moore County include satellite backup capabilities for areas where cellular coverage may be limited during severe weather events. Coordination with agricultural operations requires direct communication with farm managers, cooperative personnel, and livestock operation supervisors during emergency response.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Dumas Weather Patterns and Emergency Preparedness
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dumas experiences some of the most severe weather in the Texas Panhandle, with its location in Moore County placing it directly in the path of major storm systems moving across the Great Plains. The city's elevation of 3,671 feet and open prairie exposure create conditions where storm systems can intensify rapidly, producing devastating hail, tornadoes, and straight-line winds exceeding 80 mph.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Dumas Severe Weather Emergency Statistics</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Annual Hail Events:</strong> 4-6 significant storms with hail larger than golf ball size</li>
                <li><strong>Tornado Risk:</strong> High probability zone with F2-F3 tornadoes documented historically</li>
                <li><strong>High Wind Events:</strong> 8-12 annual events with sustained winds exceeding 60 mph</li>
                <li><strong>Temperature Extremes:</strong> Annual range from -15°F to 108°F creating material stress challenges</li>
                <li><strong>Ice Storm Frequency:</strong> 2-3 significant ice accumulation events per decade</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The Canadian River valley south of Dumas creates unique microclimate effects that can channel and intensify storm systems as they approach the city. Emergency weather monitoring includes real-time river valley wind monitoring and coordination with National Weather Service spotters positioned along the storm approach corridors from the west and southwest.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Spring severe weather season in Dumas typically begins in March and extends through June, with peak activity in April and May when atmospheric conditions combine warm, moist air from the Gulf of Mexico with cold, dry air from the Rocky Mountains. These conditions create supercell thunderstorms that produce large hail and tornadoes with little advance warning.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Emergency Response Weather Monitoring Systems</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our Dumas emergency response includes access to specialized agricultural weather monitoring networks that track moisture levels, wind patterns, and storm development specifically for farming operations. This enhanced monitoring allows emergency crews to anticipate severe weather impacts on agricultural facilities and pre-position resources for rapid response.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Real-time hail detection systems throughout Moore County provide immediate notification of hail size and storm intensity, enabling emergency crews to assess damage potential and prioritize response areas. Doppler radar integration tracks storm movement and intensity changes as systems approach Dumas from the primary storm development areas to the southwest.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Winter weather monitoring focuses on ice storm development, blizzard conditions, and extreme cold events that can affect emergency response capabilities. Ice storms in Dumas can accumulate over one inch of ice on horizontal surfaces, creating structural loads that exceed design capacity for many buildings and requiring immediate emergency assessment and protection.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              County Seat Emergency Coordination and Historic Preservation
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              As Moore County's seat, Dumas maintains significant government facilities, courthouse operations, and historic buildings that require specialized emergency response coordination. The Moore County Courthouse and surrounding historic district include structures dating from the early 1900s with unique architectural features that complicate emergency repairs while requiring preservation of historic character.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency response in the courthouse district requires coordination with county officials, court schedule considerations, and protection of government records and operations that cannot be interrupted during emergency events. Emergency repairs to government buildings may require compliance with state procurement procedures even during crisis situations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Historic preservation requirements for downtown Dumas emergency repairs include consultation with preservation specialists and use of period-appropriate materials that maintain the integrity of historic districts. Emergency repairs must balance immediate weather protection with long-term preservation of architectural heritage that defines Dumas's character as a county seat community.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Emergency Response Resource Coordination</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dumas emergency response benefits from coordination with Moore County emergency management, fire departments from surrounding rural areas, and regional mutual aid agreements that can bring additional resources during major storm events. County-wide emergency communication systems ensure coordinated response across both urban and rural areas of Moore County.
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-brand-brown">Dumas Emergency Response Coordination Timeline</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>0-15 minutes:</strong> Emergency dispatch, damage assessment, resource allocation planning</li>
                <li><strong>15-45 minutes:</strong> Crew deployment from Amarillo, coordination with county emergency services</li>
                <li><strong>45-75 minutes:</strong> On-site arrival, safety assessment, emergency protection initiation</li>
                <li><strong>75-120 minutes:</strong> Initial emergency stabilization, priority facility protection completed</li>
                <li><strong>2-4 hours:</strong> Comprehensive assessment, documentation, permanent repair planning</li>
                <li><strong>4-24 hours:</strong> Extended emergency protection, resource coordination for major events</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Regional resource sharing with surrounding counties enables enhanced response capacity during widespread emergency events that may affect multiple communities simultaneously. Moore County's agricultural economy requires rapid restoration of farming infrastructure to prevent economic impacts that extend beyond individual property damage.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency shelter coordination for displaced residents includes cooperation with county social services, American Red Cross regional operations, and community organizations that provide temporary housing during extended repair periods. Agricultural workers and their families may require specialized assistance during major emergency events.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Insurance and Economic Impact Considerations for Dumas
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Insurance considerations for Dumas properties include specialized agricultural coverage, historic building preservation requirements, and business interruption policies that recognize the interconnected nature of Moore County's agricultural economy. Emergency response documentation must meet requirements for both standard homeowner's policies and complex agricultural business coverage.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Agricultural facility insurance often includes commodity protection, equipment coverage, and business interruption provisions that require immediate emergency response to minimize claim amounts. Grain storage facilities may carry specialized coverage for commodity contamination that requires pristine emergency protection to prevent policy exclusions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Economic impact assessments for major emergency events in Dumas consider ripple effects throughout the agricultural supply chain, including impacts on trucking, processing facilities, and export operations that depend on Moore County agricultural production. Emergency response prioritization accounts for facilities with broader economic importance to the regional economy.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Long-Term Preparedness and Community Resilience</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Community preparedness programs in Dumas include partnerships with agricultural extension services, farmer cooperatives, and rural fire departments to provide comprehensive emergency preparedness education. Agricultural operators receive specialized training on emergency procedures for livestock protection, grain storage security, and equipment preservation during severe weather events.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Preventive maintenance programs for Dumas properties account for the accelerated wear patterns caused by agricultural dust, high winds, and extreme temperature variations. Regular inspections and maintenance can prevent many emergency situations and reduce the severity of storm damage when severe weather occurs.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Regional coordination with agricultural research institutions and extension services provides ongoing education about weather-resistant building design, emergency preparedness planning, and recovery strategies that minimize agricultural economic losses. These partnerships strengthen community resilience and reduce the frequency and severity of emergency situations.
            </p>
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