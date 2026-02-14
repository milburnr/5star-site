import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roof-replacement-pampa/' },
  title: "Roof Replacement Pampa TX | Expert Service | Free Inspection",
  description: "Professional roof replacement in Pampa TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementPampaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Pampa", url: "/roof-replacement-pampa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-pampa/#localbusiness",
        "name": "5 Star Commercial Roofing - Pampa Roof Replacement",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-pampa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas", "name": "Pampa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Pampa TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Pampa",
            "description": "Professional roof replacement services in Pampa, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Pampa",
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
        "mainEntity": [{"@type":"Question","name":"When should I replace my Pampa roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in Texas Panhandle?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles, metal roofing, and TPO handle Pampa's extreme hail, wind, and temperature swings best."}},{"@type":"Question","name":"How do Pampa oil field conditions affect roofing?","acceptedAnswer":{"@type":"Answer","text":"Industrial emissions, dust, and vibrations from energy operations can accelerate roof deterioration. Regular inspections and quality materials are essential."}},{"@type":"Question","name":"Will a new roof increase my home value in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI and are especially valuable in Pampa's stable energy-driven economy. Class 4 roofs add premium value."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-19-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Pampa, Texas</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Panhandle Energy Capital Roofing Solutions</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Pampa and the Texas Panhandle. Specializing in energy sector buildings and residential properties. Expert installation engineered for extreme weather, comprehensive warranties, and  for this vital energy community.</p>
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
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Pampa's Premier Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">As the "Top O' Texas Oil Capital," Pampa presents unique roofing challenges that require specialized expertise. This Gray County seat and major energy hub experiences some of the most severe weather in the Texas Panhandle, combined with industrial conditions that demand superior roofing solutions. Our team understands Pampa's specific environmental factors and provides roof replacement services engineered for long-term performance in this demanding climate.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Pampa's Unique Roofing Challenges</h3>
                <ul className="text-gray-700 space-y-3">
                  <li>• <strong>Severe Hail Corridor:</strong> Located in "Hail Alley" with frequent large hail events</li>
                  <li>• <strong>Extreme Wind:</strong> Open plains expose buildings to 70+ mph winds</li>
                  <li>• <strong>Industrial Environment:</strong> Oil field emissions and dust accelerate deterioration</li>
                  <li>• <strong>Temperature Extremes:</strong> From -10°F winters to 110°F summers</li>
                  <li>• <strong>Rapid Weather Changes:</strong> Blue northers can drop temperatures 40°F in hours</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Pampa-Specific Solutions</h3>
                <ul className="text-gray-700 space-y-3">
                  <li>• <strong>Impact-Resistant Systems:</strong> Class 4 materials for maximum hail protection</li>
                  <li>• <strong>High-Wind Ratings:</strong> Components rated for 130+ mph winds</li>
                  <li>• <strong>Industrial-Grade Materials:</strong> Chemical and emission resistant coatings</li>
                  <li>• <strong>Enhanced Fastening:</strong> Superior attachment for wind uplift resistance</li>
                  <li>• <strong>Gray County Compliance:</strong> Familiar with local building codes and permits</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Pampa's energy workers, families, and businesses with expert installations, comprehensive warranties, and outstanding customer service. We understand the critical nature of protecting your investment in this vital energy community. We handle all permits, insurance claims, and warranty documentation throughout Gray County.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Roofing Solutions for Pampa's Energy Industry</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Residential Energy Worker Housing</h3>
                <p className="text-gray-700 mb-4">Custom solutions for Pampa's energy sector workforce:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Class 4 impact-resistant shingles</li>
                  <li>• Enhanced wind uplift protection</li>
                  <li>• Rapid installation for shift workers</li>
                  <li>• Insurance claim expertise</li>
                  <li>• Energy-efficient cool roof options</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Industrial Facilities</h3>
                <p className="text-gray-700 mb-4">Specialized systems for energy operations:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Chemical-resistant TPO and EPDM</li>
                  <li>• Metal roofing for extreme durability</li>
                  <li>• Specialized coatings for emissions protection</li>
                  <li>• Fall protection system integration</li>
                  <li>• Maintenance access planning</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Commercial Downtown</h3>
                <p className="text-gray-700 mb-4">Solutions for Pampa's business district:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Historic building compatibility</li>
                  <li>• Energy-efficient upgrades</li>
                  <li>• Minimal business disruption</li>
                  <li>• City code compliance</li>
                  <li>• Aesthetic enhancement options</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Serving Greater Pampa Area</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">Our roof replacement services extend throughout Gray County and the surrounding Texas Panhandle communities. We're familiar with local building codes, weather patterns, and the specific challenges faced by property owners in each area.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Primary Service Areas:</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>• Pampa</div>
                  <div>• Lefors</div>
                  <div>• McLean</div>
                  <div>• White Deer</div>
                  <div>• Groom</div>
                  <div>• Alanreed</div>
                  <div>• Gray County</div>
                  <div>• Donley County</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Energy Corridor Expertise</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Familiar with Celanese plant operations</li>
                  <li>• Understanding of oil field schedules</li>
                  <li>• Knowledge of local safety requirements</li>
                  <li>• Established supplier relationships</li>
                  <li>• Quick emergency response capabilities</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Understanding Panhandle Weather Impact</h2>
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">Pampa's location in the heart of the Texas Panhandle places it directly in the path of some of North America's most severe weather systems. The city's position in "Hail Alley" and "Tornado Alley" creates unique challenges that require specialized roofing approaches.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Spring Storm Season (March-June)</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>Supercell Thunderstorms:</strong> Produce softball-sized hail</li>
                    <li>• <strong>Tornado Activity:</strong> Peak season with F3+ tornadoes</li>
                    <li>• <strong>Straight-line Winds:</strong> 70-100 mph microbursts</li>
                    <li>• <strong>Flash Flooding:</strong> Overwhelms drainage systems</li>
                    <li>• <strong>Rapid Temperature Changes:</strong> Blue northers drop temps 50°F</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Year-Round Challenges</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>Extreme Heat:</strong> Summer temperatures exceed 110°F</li>
                    <li>• <strong>Arctic Blasts:</strong> Winter lows can reach -15°F</li>
                    <li>• <strong>Constant Wind:</strong> 15-25 mph average speeds</li>
                    <li>• <strong>UV Intensity:</strong> High altitude increases radiation</li>
                    <li>• <strong>Dust Storms:</strong> Abrasive particles damage surfaces</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl border border-red-300">
                <h3 className="text-xl font-bold mb-4 text-red-800">Our Weather-Resistant Solutions</h3>
                <p className="text-red-700 leading-relaxed">We combat these extreme conditions with advanced materials engineered specifically for Panhandle weather. Our installations feature enhanced wind uplift ratings, impact-resistant materials tested to UL 2218 standards, and superior fastener systems that exceed local building code requirements. Every installation includes comprehensive weather protection designed to withstand Pampa's challenging climate.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">The Pampa Roof Replacement Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Engineered for Excellence</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Comprehensive Storm Damage Assessment</h4>
                      <p className="text-gray-600">Detailed evaluation including hidden hail impacts and wind damage often missed by other contractors.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Panhandle Climate Material Selection</h4>
                      <p className="text-gray-600">Choose from weather-tested materials with proven performance in extreme Panhandle conditions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Gray County Permitting</h4>
                      <p className="text-gray-600">Complete permit applications and coordinate with Gray County building officials for code compliance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Weather-Window Installation</h4>
                      <p className="text-gray-600">Strategic scheduling around Panhandle weather patterns for optimal installation conditions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Quality Assurance & Cleanup</h4>
                      <p className="text-gray-600">Final inspection, comprehensive cleanup, and documentation for warranty registration.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-brown text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Why Pampa Trusts Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Licensed and insured in Texas</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Panhandle weather expertise</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Energy industry experience</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>emergency storm response</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Comprehensive manufacturer warranties</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Insurance claim specialists</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Local Gray County knowledge</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Pampa's Energy Sector Roofing Needs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Celanese Industrial Complex</h3>
                <p className="text-blue-700 mb-4">Serving one of America's largest chemical plants requires specialized expertise:</p>
                <ul className="text-blue-700 space-y-2">
                  <li>• Chemical-resistant roofing systems</li>
                  <li>• High-temperature performance materials</li>
                  <li>• Explosion-resistant construction</li>
                  <li>• Environmental compliance standards</li>
                  <li>• Rapid repair capabilities for minimal downtime</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-800">Oil & Gas Operations</h3>
                <p className="text-amber-700 mb-4">Supporting Pampa's extensive energy infrastructure:</p>
                <ul className="text-amber-700 space-y-2">
                  <li>• Warehouse and storage facility roofing</li>
                  <li>• Administrative building solutions</li>
                  <li>• Equipment shelter replacements</li>
                  <li>• Emergency response capabilities</li>
                  <li>• Understanding of operational requirements</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Energy Worker Housing Solutions</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Pampa's energy workforce requires housing solutions that can withstand the demanding climate while providing energy efficiency and durability. We specialize in roofing systems for:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Man Camps & Workforce Housing</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Durable multi-family solutions</li>
                    <li>• Rapid installation schedules</li>
                    <li>• Cost-effective materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Executive Housing</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Premium architectural shingles</li>
                    <li>• Energy-efficient cool roofs</li>
                    <li>• Enhanced curb appeal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Established Neighborhoods</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Historic district compatibility</li>
                    <li>• Neighborhood matching</li>
                    <li>• Property value enhancement</li>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Pampa roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 15-20 years in severe weather areas, multiple leaks, extensive granule loss from wind and hail, curling from temperature extremes, or when repair costs exceed 25% of replacement cost.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in Texas Panhandle?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 impact-resistant shingles, standing seam metal roofing, and TPO membrane systems are ideal for Pampa's extreme hail, wind, and temperature conditions. These materials offer superior protection and longevity in Panhandle weather.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do Pampa oil field conditions affect roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Industrial emissions, airborne particulates, and ground vibrations from energy operations can accelerate roof deterioration. We use specialized coatings and materials designed to resist chemical exposure and recommend more frequent inspections for properties near industrial facilities.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do I need permits for roof replacement in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, Gray County requires building permits for roof replacement. We handle all permit applications, ensure compliance with local codes, and coordinate required inspections. Permits typically cost $75-300 depending on project size and complexity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will a new roof increase my home value in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. New roofs provide 60-70% ROI and are especially valuable in Pampa's stable energy-driven economy. Class 4 impact-resistant roofs add premium value with insurance discounts, reduced maintenance, and enhanced protection for this high-risk weather area.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to storm damage in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide prompt response throughout Gray County, typically arriving within 2-4 hours for severe storm damage. Our teams are positioned regionally to respond quickly to Panhandle storm events, with emergency tarping and temporary repairs available immediately.</AccordionContent>
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
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Pampa and Gray County property owners. Expert roof replacement engineered for Panhandle weather extremes, comprehensive warranties, and specialized insurance assistance for storm-damaged properties.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}