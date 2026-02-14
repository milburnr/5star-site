import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roof-replacement-perryton/' },
  title: 'Roof Replacement Perryton TX | 5 Star Roofing',
  description: "Professional roof replacement in Perryton TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementPerrytonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Perryton", url: "/roof-replacement-perryton/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-perryton/#localbusiness",
        "name": "5 Star Commercial Roofing - Perryton Roof Replacement",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-perryton/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas", "name": "Perryton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Perryton TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Perryton",
            "description": "Professional roof replacement services in Perryton, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Perryton",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roof Replacement Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"When should I replace my Perryton roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in North Texas Panhandle?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles, metal roofing, and TPO handle Perryton's severe hail, high winds, and temperature extremes best."}},{"@type":"Question","name":"How does agricultural dust affect roofing in Perryton?","acceptedAnswer":{"@type":"Answer","text":"Grain dust and agricultural particulates can accelerate roof wear. Regular cleaning and maintenance help extend roof life in farming communities."}},{"@type":"Question","name":"Will a new roof increase my home value in Perryton?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI and are especially valuable in Perryton's stable agricultural economy. Class 4 roofs add premium value."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-39-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Perryton, Texas</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Agricultural Community Roofing Excellence</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Perryton and Ochiltree County. Specializing in agricultural and residential roofing systems engineered for North Texas Panhandle weather extremes. Expert installation, comprehensive warranties, and  for America's wheat capital.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">Fast</div><div className="text-brand-brown font-semibold text-lg">Response Time</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={15} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">1-3</div><div className="text-brand-brown font-semibold text-lg">Days to Complete</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Perryton's Premier Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">Known as the "Wheatheart of the Nation," Perryton presents unique roofing challenges that require agricultural and weather expertise. This Ochiltree County seat sits in the heart of America's most productive wheat region, where extreme Panhandle weather meets intensive farming operations. Our team understands Perryton's specific environmental factors and provides roof replacement services engineered for both severe weather and agricultural conditions.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Agricultural Community Challenges</h3>
                <ul className="text-gray-700 space-y-3">
                  <li>• <strong>Grain Dust Exposure:</strong> Fine wheat dust accelerates roof wear</li>
                  <li>• <strong>Fertilizer & Chemical Spray:</strong> Agricultural chemicals affect roof coatings</li>
                  <li>• <strong>Severe Hail Events:</strong> Prime location in "Hail Alley"</li>
                  <li>• <strong>High Wind Exposure:</strong> Open farmland offers no wind protection</li>
                  <li>• <strong>Equipment Vibration:</strong> Heavy machinery causes structural stress</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Agricultural Expertise</h3>
                <ul className="text-gray-700 space-y-3">
                  <li>• <strong>Chemical-Resistant Materials:</strong> Coatings designed for agricultural exposure</li>
                  <li>• <strong>Enhanced Ventilation:</strong> Prevents moisture from grain dust accumulation</li>
                  <li>• <strong>Reinforced Systems:</strong> Extra support for equipment vibration</li>
                  <li>• <strong>Quick Installation:</strong> Minimal disruption during planting/harvest</li>
                  <li>• <strong>Ochiltree County Knowledge:</strong> Local code and permit expertise</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Perryton's farming families, agribusiness operations, and community members with expert installations, comprehensive warranties, and outstanding customer service. We understand the critical timing of agricultural seasons and work efficiently to protect your investment without disrupting operations.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Specialized Roofing for Agricultural Operations</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Grain Storage Facilities</h3>
                <p className="text-gray-700 mb-4">Protecting your harvest investment with specialized systems:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Metal roofing for maximum durability</li>
                  <li>• Moisture barrier systems</li>
                  <li>• Structural reinforcement options</li>
                  <li>• Ventilation for grain preservation</li>
                  <li>• Fast installation during off-season</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Farm Residential Properties</h3>
                <p className="text-gray-700 mb-4">Home protection engineered for rural conditions:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Class 4 hail-resistant shingles</li>
                  <li>• Enhanced wind uplift protection</li>
                  <li>• Dust and chemical-resistant coatings</li>
                  <li>• Energy-efficient insulation packages</li>
                  <li>• Agricultural building matching</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Agribusiness Buildings</h3>
                <p className="text-gray-700 mb-4">Commercial solutions for agricultural businesses:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• TPO and EPDM membrane systems</li>
                  <li>• Chemical-resistant coatings</li>
                  <li>• Large-span structural support</li>
                  <li>• Loading dock protection</li>
                  <li>• Equipment access considerations</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-amber-50 to-yellow-50 p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Serving Greater Perryton Area</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">Our roof replacement services extend throughout Ochiltree County and the surrounding agricultural communities. We're familiar with local building codes, agricultural zoning requirements, and the specific challenges faced by rural property owners.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Primary Service Communities:</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>• Perryton</div>
                  <div>• Booker</div>
                  <div>• Farnsworth</div>
                  <div>• Waka</div>
                  <div>• Huntoon</div>
                  <div>• Wolf Creek</div>
                  <div>• Ochiltree County</div>
                  <div>• Lipscomb County</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Agricultural Expertise</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Understanding of farming cycles and timing</li>
                  <li>• Experience with grain elevator operations</li>
                  <li>• Knowledge of agricultural building codes</li>
                  <li>• Relationships with local feed/seed suppliers</li>
                  <li>• Flexible scheduling around harvest seasons</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">North Panhandle Weather Extremes</h2>
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">Perryton's location in the northern Texas Panhandle exposes the community to some of the most severe weather in North America. The city sits directly in the convergence zone where warm, moist air from the Gulf of Mexico meets cold, dry air from Canada, creating explosive storm development.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Spring Storm Fury (March-June)</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>Supercell Development:</strong> Perfect conditions for severe storms</li>
                    <li>• <strong>Giant Hail:</strong> Baseball to softball-sized hail common</li>
                    <li>• <strong>Violent Tornadoes:</strong> F4/F5 tornado corridor</li>
                    <li>• <strong>Devastating Winds:</strong> 80-120 mph straight-line winds</li>
                    <li>• <strong>Flash Flooding:</strong> Rapid runoff overwhelms systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Year-Round Extremes</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>Arctic Invasions:</strong> Temperatures can drop to -20°F</li>
                    <li>• <strong>Scorching Heat:</strong> Summer highs often exceed 105°F</li>
                    <li>• <strong>Relentless Wind:</strong> 20+ mph average wind speeds</li>
                    <li>• <strong>Ice Storms:</strong> Freezing rain devastating to structures</li>
                    <li>• <strong>Dust Storms:</strong> Reduce visibility and damage buildings</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl border border-red-300">
                <h3 className="text-xl font-bold mb-4 text-red-800">Our Weather-Warrior Solutions</h3>
                <p className="text-red-700 leading-relaxed">We combat these extreme conditions with the most advanced roofing materials available. Our systems feature UL 2218 Class 4 impact resistance, ASTM D3161 Class F wind ratings, and specialized coatings designed for agricultural environments. Every installation includes emergency weather protection and rapid storm response capabilities.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">The Perryton Agricultural Roofing Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Farm-Friendly Installation</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Agricultural Impact Assessment</h4>
                      <p className="text-gray-600">Evaluate storm damage while considering dust, chemical, and equipment-related wear patterns.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Seasonal Timing Coordination</h4>
                      <p className="text-gray-600">Schedule around planting and harvest seasons to minimize disruption to farming operations.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Rural Permit & Code Compliance</h4>
                      <p className="text-gray-600">Navigate Ochiltree County requirements and agricultural building considerations.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Weather-Window Installation</h4>
                      <p className="text-gray-600">Efficient installation using agricultural-grade materials during optimal weather conditions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Agricultural Site Restoration</h4>
                      <p className="text-gray-600">Complete cleanup respecting farm property and agricultural operations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-brown text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Why Perryton Farmers Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Agricultural community understanding</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Flexible seasonal scheduling</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Chemical-resistant materials</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Extreme weather protection</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Licensed and insured in Texas</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>emergency storm response</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Ochiltree County expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Supporting Perryton's Agricultural Economy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200">
                <h3 className="text-2xl font-bold mb-4 text-yellow-800">Wheat Production Support</h3>
                <p className="text-yellow-700 mb-4">Protecting the infrastructure that feeds America:</p>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Grain elevator maintenance and repairs</li>
                  <li>• Storage facility weatherization</li>
                  <li>• Equipment shed roof replacements</li>
                  <li>• Farmhouse protection for workers</li>
                  <li>• Emergency harvest-season repairs</li>
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Cattle Ranch Operations</h3>
                <p className="text-green-700 mb-4">Roofing solutions for livestock operations:</p>
                <ul className="text-green-700 space-y-2">
                  <li>• Barn and stable roof replacements</li>
                  <li>• Feed storage facility protection</li>
                  <li>• Ranch home weatherization</li>
                  <li>• Equipment shelter upgrades</li>
                  <li>• Corral shelter installations</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Community Business Support</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Perryton's downtown and commercial district depend on reliable roofing systems to support the agricultural economy. We provide specialized services for:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Agricultural Supply Businesses</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Feed and seed stores</li>
                    <li>• Equipment dealerships</li>
                    <li>• Chemical supply facilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Processing Facilities</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Grain processing plants</li>
                    <li>• Meat processing facilities</li>
                    <li>• Food manufacturing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Community Services</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Schools and public buildings</li>
                    <li>• Healthcare facilities</li>
                    <li>• Religious institutions</li>
                  </ul>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Perryton roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 15-20 years in severe weather zones, multiple leaks, extensive granule loss, chemical deterioration from agricultural exposure, or when maintenance costs exceed 25% of replacement value.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in North Texas Panhandle?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 impact-resistant shingles, standing seam metal roofing, and TPO membrane systems are ideal for Perryton's severe hail, high winds, and temperature extremes. Agricultural properties benefit from chemical-resistant coatings and enhanced ventilation systems.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does agricultural dust affect roofing in Perryton?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Grain dust and agricultural particulates can accelerate roof wear by abrading surfaces and clogging drainage systems. Regular cleaning, proper ventilation, and dust-resistant coatings help extend roof life. We recommend semi-annual inspections for properties near grain operations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can you work around farming schedules?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. We understand the critical nature of planting and harvest seasons. We schedule installations during agricultural downtime and can provide emergency repairs during busy farming periods. Our team coordinates with your operation schedule to minimize disruption.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will a new roof increase my home value in Perryton?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. New roofs provide 60-70% ROI and are especially valuable in Perryton's stable agricultural economy. Class 4 impact-resistant roofs add premium value with insurance discounts, reduced maintenance, and enhanced storm protection crucial for this severe weather area.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to storm damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide prompt response throughout Ochiltree County, typically arriving within 2-4 hours for severe damage. During major storm events, we deploy additional crews to serve the agricultural community quickly, understanding that weather protection is critical for farming operations.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Perryton and Ochiltree County agricultural and residential properties. Expert roof replacement engineered for North Panhandle weather extremes and agricultural conditions. Comprehensive warranties and specialized insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}