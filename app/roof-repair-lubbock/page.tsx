import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Repair Lubbock TX | South Plains Expert Service | Free Inspection",
  description: "Professional roof repair in Lubbock TX. South Plains weather specialists, dust storm damage experts, 24/7 emergency service. Call (806) 622-6041",
};

export default function RoofRepairLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Repair", url: "/roof-repair/" },
        { name: "Lubbock", url: "/roof-repair-lubbock/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-lubbock/#localbusiness",
        "name": "5 Star Commercial Roofing - Lubbock Roof Repair",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/roof-repair-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-repair-lubbock/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": [
          { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" }},
          { "@type": "AdministrativeArea", "name": "Lubbock County", "containedInPlace": { "@type": "State", "name": "Texas" }}
        ],
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof repair in Lubbock TX serving South Plains communities with dust storm damage expertise and Tech Terrace specialists."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Roof Repair",
        "provider": {
          "@type": "RoofingContractor", 
          "name": "5 Star Roofing",
          "url": "https://5starroofingpros.com"
        },
        "areaServed": [
          {"@type": "City", "name": "Lubbock", "containedInPlace": {"@type": "State", "name": "Texas"}},
          {"@type": "AdministrativeArea", "name": "Lubbock County", "containedInPlace": {"@type": "State", "name": "Texas"}}
        ],
        "description": "Comprehensive roof repair services for Lubbock's 1980s+ housing stock, addressing South Plains dust storm damage and university district needs."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type":"Question","name":"How do dust storms damage roofs in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"South Plains haboobs create sandblasting effects that strip granules from shingles, clog gutters with fine particles, and accelerate UV degradation. The abrasive action of windborne particles can reduce shingle life by 20-30% compared to other regions."}},
          {"@type":"Question","name":"What makes Tech Terrace neighborhood roofing unique?","acceptedAnswer":{"@type":"Answer","text":"Tech Terrace homes, built primarily in the 1950s-1970s near Texas Tech, often feature original composition shingles and inadequate attic ventilation. Student rental properties may have deferred maintenance, requiring comprehensive inspections for hidden damage."}},
          {"@type":"Question","name":"Are roof repairs more expensive in Lubbock than other South Plains cities?","acceptedAnswer":{"@type":"Answer","text":"Lubbock repairs average 5-10% higher than smaller South Plains towns due to higher labor costs and material demand. Minor repairs: $350-850, moderate damage: $850-2,600, extensive repairs: $2,600-6,200. University area properties may cost more due to access challenges."}},
          {"@type":"Question","name":"When do spring supercells typically damage Lubbock roofs?","acceptedAnswer":{"@type":"Answer","text":"Peak storm season runs March through June, with wind gusts of 60-77 mph common. These supercells force rain beneath flashing and lift shingle tabs. Post-storm inspections are crucial as damage may not be immediately visible from ground level."}},
          {"@type":"Question","name":"What permits are required for roof repairs in Lubbock city limits?","acceptedAnswer":{"@type":"Answer","text":"Minor repairs under $500 typically don't need permits. Structural work, section replacements, or repairs affecting load-bearing elements require city permits. We handle all paperwork and ensure compliance with Lubbock's building codes."}},
          {"@type":"Question","name":"How does Lubbock's flat terrain affect roofing challenges?","acceptedAnswer":{"@type":"Answer","text":"The flat South Plains landscape offers no wind protection, creating consistent stress on roofing materials. Homes face greater wind uplift forces and more UV exposure without natural shade. Metal roofing performs especially well in these conditions."}}
        ]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/roof-repair-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Repair in <span className="text-brand-gold-light">Lubbock</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">South Plains Dust Storm Specialists</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Expert roof repair for Lubbock's unique South Plains challenges. Serving Texas Tech area, historic neighborhoods, and modern developments with specialized solutions for dust damage, wind stress, and university district properties.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">41</div><div className="text-brand-brown font-semibold text-lg">Median Home Age</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">75+</div><div className="text-brand-brown font-semibold text-lg">MPH Wind Gusts</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">0</div><div className="text-brand-brown font-semibold text-lg">Wind Protection</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">🌪️💨🏜️</div><div className="text-brand-brown font-semibold text-lg">Dust Storms</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Lubbock Roofs Face Unique Challenges</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Lubbock's position in the heart of the South Plains creates distinct roofing challenges. With a median home construction year of 1983, the city's housing stock includes many 1980s-1990s developments that are reaching the typical roof replacement age, compounded by severe environmental stressors.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">The flat South Plains landscape offers no natural wind protection, subjecting roofs to consistent stress from prevailing winds. Notorious dust storms (haboobs) can reduce visibility to near zero and sandblast exposed surfaces with fine particulates, accelerating material degradation. Spring supercells sweep through with wind gusts of 60-77 mph, forcing rain beneath flashing and lifting shingle tabs.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">University District Challenges</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Tech Terrace: 1950s-1970s homes with original composition shingles</li>
                  <li>• Student rentals with deferred maintenance issues</li>
                  <li>• North Overton: Dense housing with access challenges</li>
                  <li>• Medical District: Professional buildings requiring specialized care</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">South Plains Environmental Damage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Dust storm abrasion stripping shingle granules</li>
                  <li>• Constant wind stress with no terrain protection</li>
                  <li>• Supercell damage from rotating storms</li>
                  <li>• Extreme UV exposure on flat landscape</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Lubbock Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-8">Each Lubbock neighborhood presents unique roofing challenges based on construction era, proximity to Texas Tech, and exposure to South Plains weather patterns.</p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">University Area</h3>
                <p className="text-gray-600 mb-4">Historic neighborhoods near Texas Tech campus</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tech Terrace - 1950s brick homes, student rentals</li>
                  <li>• North Overton - Dense housing, accessibility challenges</li>
                  <li>• South Overton - Mixed residential, aging roof systems</li>
                  <li>• Maxey Park Area - Medical district professionals</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Southwest Lubbock</h3>
                <p className="text-gray-600 mb-4">1980s-2000s family neighborhoods</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Shadow Hills - Executive homes, complex rooflines</li>
                  <li>• Oakwood - 1980s construction, architectural shingles</li>
                  <li>• Westridge - Suburban development, standard maintenance</li>
                  <li>• Caprock - Higher elevation, wind exposure</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Newer Developments</h3>
                <p className="text-gray-600 mb-4">2000s+ communities with modern systems</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• The Reserve - Luxury homes, premium materials</li>
                  <li>• Vintage Township - Energy-efficient construction</li>
                  <li>• Stone Gate - Golf course community</li>
                  <li>• Kelsey Park - Contemporary designs, metal roofing</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">Our South Plains-Specific Repair Process</h2>
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Dust Damage Assessment</h3>
                <p className="text-gray-700">Specialized inspection for granule loss from haboob sandblasting, gutter clogging, and accelerated UV degradation unique to South Plains conditions.</p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">💨</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Wind Uplift Analysis</h3>
                <p className="text-gray-700">Comprehensive evaluation of wind damage in areas with no terrain protection, focusing on shingle tab lifting and fastener failure patterns.</p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">University District Expertise</h3>
                <p className="text-gray-700">Specialized knowledge of Tech Terrace and student housing challenges, including deferred maintenance issues and rental property requirements.</p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Response Team</h3>
                <p className="text-gray-700">Rapid deployment after supercell events, with expertise in documenting wind and hail damage for insurance claims throughout Lubbock County.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Common Lubbock Roof Repairs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Environmental Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Dust Storm Abrasion:</strong> Granule loss from windborne particles reducing shingle protection</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Supercell Wind Damage:</strong> Tab lifting and fastener failure from 60+ mph gusts</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Gutter Clogging:</strong> Fine dust accumulation creating drainage issues</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Accelerated UV Aging:</strong> Rapid deterioration on flat, exposed landscape</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Structural & Age Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Tech Terrace Ventilation:</strong> Inadequate airflow in 1950s-1970s construction</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Student Property Neglect:</strong> Deferred maintenance in rental properties</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>1980s Shingle Failure:</strong> Original materials reaching end of life</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Flashing Deterioration:</strong> Wind-driven rain penetration around penetrations</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">Lubbock Roofing Investment Guide</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">Lubbock's roofing costs reflect both university town dynamics and South Plains environmental challenges. Prices average 5-10% higher than smaller regional cities due to labor demand and material requirements.</p>
              
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Minor Repairs</h3>
                  <p className="text-3xl font-bold text-green-800 mb-2">$350-850</p>
                  <p className="text-gray-600">Granule restoration, minor leak fixes, gutter cleaning</p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-2">Moderate Damage</h3>
                  <p className="text-3xl font-bold text-yellow-800 mb-2">$850-2,600</p>
                  <p className="text-gray-600">Wind damage repair, section replacement, ventilation upgrades</p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-red-700 mb-2">Extensive Repairs</h3>
                  <p className="text-3xl font-bold text-red-800 mb-2">$2,600-6,200</p>
                  <p className="text-gray-600">Storm restoration, structural work, complete system overhaul</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Lubbock Market Considerations</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• University area properties may require additional safety measures increasing costs</li>
                  <li>• Spring storm season creates high demand and potential material shortages</li>
                  <li>• Tech Terrace historic properties may need specialized restoration techniques</li>
                  <li>• Metal roofing gaining popularity due to superior wind and dust resistance</li>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do dust storms damage roofs in Lubbock?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">South Plains haboobs create sandblasting effects that strip granules from shingles, clog gutters with fine particles, and accelerate UV degradation. The abrasive action of windborne particles can reduce shingle life by 20-30% compared to other regions.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What makes Tech Terrace neighborhood roofing unique?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Tech Terrace homes, built primarily in the 1950s-1970s near Texas Tech, often feature original composition shingles and inadequate attic ventilation. Student rental properties may have deferred maintenance, requiring comprehensive inspections for hidden damage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Are roof repairs more expensive in Lubbock than other South Plains cities?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Lubbock repairs average 5-10% higher than smaller South Plains towns due to higher labor costs and material demand. Minor repairs: $350-850, moderate damage: $850-2,600, extensive repairs: $2,600-6,200. University area properties may cost more due to access challenges.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When do spring supercells typically damage Lubbock roofs?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Peak storm season runs March through June, with wind gusts of 60-77 mph common. These supercells force rain beneath flashing and lift shingle tabs. Post-storm inspections are crucial as damage may not be immediately visible from ground level.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What permits are required for roof repairs in Lubbock city limits?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Minor repairs under $500 typically don't need permits. Structural work, section replacements, or repairs affecting load-bearing elements require city permits. We handle all paperwork and ensure compliance with Lubbock's building codes.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does Lubbock's flat terrain affect roofing challenges?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">The flat South Plains landscape offers no wind protection, creating consistent stress on roofing materials. Homes face greater wind uplift forces and more UV exposure without natural shade. Metal roofing performs especially well in these conditions.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Emergency Storm Repair</h3>
                <p className="text-gray-600 mb-4">24/7 response for supercell damage throughout Lubbock County</p>
                <a href="/emergency-roof-repair-lubbock/" className="text-brand-gold font-semibold hover:underline">Learn More →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Damage Repair</h3>
                <p className="text-gray-600 mb-4">Specialized restoration for South Plains hailstorm damage</p>
                <a href="/hail-damage-roof-repair-lubbock-texas/" className="text-brand-gold font-semibold hover:underline">Learn More →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Metal Roofing Installation</h3>
                <p className="text-gray-600 mb-4">Superior wind and dust resistance for South Plains homes</p>
                <a href="/metal-roofing-lubbock/" className="text-brand-gold font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving the Hub City</h2>
            <p className="text-center text-gray-600 mb-8">Proudly serving Lubbock and surrounding South Plains communities with expert roofing solutions.</p>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Lubbock Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let South Plains weather compromise your home's protection. Expert roof repair with dust storm damage expertise and comprehensive warranties for Lubbock County properties.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}