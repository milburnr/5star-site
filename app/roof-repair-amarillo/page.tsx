import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "Roof Repair Amarillo TX | Expert Service | Free Inspection",
  description: "Professional roof repair in Amarillo TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Repair", url: "/roof-repair/" },
        { name: "Amarillo", url: "/roof-repair-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roof Repair",
        "image": "https://5starroofingpros.com/images/roof-repair-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-repair-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "description": "Professional roof repair in Amarillo TX. Expert installation, warranties, and insurance assistance."
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
          {"@type": "City", "name": "Amarillo", "containedInPlace": {"@type": "State", "name": "Texas"}},
          {"@type": "AdministrativeArea", "name": "Potter County", "containedInPlace": {"@type": "State", "name": "Texas"}}
        ],
        "description": "Comprehensive roof repair services for Amarillo homes built from 1950s-2020s, addressing climate-related damage from Texas Panhandle weather extremes."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type":"Question","name":"Why do Amarillo roofs fail more often than other Texas cities?","acceptedAnswer":{"@type":"Answer","text":"Amarillo's location in the Texas Panhandle creates unique stresses: extreme temperature swings from -10°F to 105°F cause expansion/contraction damage, constant 15+ mph winds loosen shingles, and frequent hailstorms damage roofing materials. The median home age of 52 years means many roofs are past their prime lifespan."}},
          {"@type":"Question","name":"What roof repairs are most common in historic Wolflin and Paramount Terrace?","acceptedAnswer":{"@type":"Answer","text":"These 1940s-1960s neighborhoods typically need: deteriorated wood decking replacement, failed flashing around brick chimneys, worn composite shingle replacement, and gutter system upgrades. Many homes still have original cedar shakes requiring specialized restoration techniques."}},
          {"@type":"Question","name":"How much does roof repair cost in Amarillo compared to Dallas or Houston?","acceptedAnswer":{"@type":"Answer","text":"Amarillo roof repairs average 15-20% less than major metro areas. Minor repairs: $400-900, moderate damage: $900-2,800, extensive repairs: $2,800-6,500. However, material costs are rising due to frequent hail damage creating supply shortages across the Panhandle."}},
          {"@type":"Question","name":"When is the best time to schedule roof repairs in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Late fall through early spring (October-March) offers the most stable weather. Avoid summer heat stress repairs and spring hail season scheduling. Emergency repairs are available year-round, but planned work should avoid the peak storm months of April-July."}},
          {"@type":"Question","name":"Do I need special permits for roof repairs in Potter County?","acceptedAnswer":{"@type":"Answer","text":"Minor repairs under $1,000 typically don't require permits. Structural repairs, complete sections, or work involving electrical/plumbing need City of Amarillo permits. We handle all permit applications and ensure compliance with local wind load requirements for the Texas Panhandle."}},
          {"@type":"Question","name":"What roofing materials work best in Amarillo's climate extremes?","acceptedAnswer":{"@type":"Answer","text":"Impact-resistant asphalt shingles (Class 3-4) perform best against hail. Metal roofing excels in high winds and temperature extremes. Avoid standard 3-tab shingles which fail quickly. Clay tiles work but require structural reinforcement for wind uplift in this region."}}
        ]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/roof-repair-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Repair in <span className="text-brand-gold-light">Amarillo</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Texas Panhandle Weather Specialists</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Expert roof repair for Amarillo's unique climate challenges. Serving Potter County's historic homes and modern developments with specialized solutions for extreme weather, aging housing stock, and insurance claims.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">52</div><div className="text-brand-brown font-semibold text-lg">Median Home Age</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={115} suffix="°" /></div><div className="text-brand-brown font-semibold text-lg">Temperature Range</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">15+</div><div className="text-brand-brown font-semibold text-lg">MPH Avg Winds</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⚡🌪️❄️</div><div className="text-brand-brown font-semibold text-lg">Extreme Weather</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Amarillo Roofs Need Specialized Care</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Amarillo's position in the Texas Panhandle creates one of the most challenging roofing environments in the state. With a median home construction year of 1972, over 40% of the city's housing stock faces age-related roofing issues compounded by extreme weather conditions.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Our climate presents unique challenges: temperature swings from -10°F to 105°F cause severe expansion and contraction stress, constant winds averaging 15+ mph accelerate material degradation, and frequent hailstorms create both visible and hidden damage. These conditions demand specialized repair techniques and materials engineered for Texas Panhandle extremes.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Historic Housing Challenges</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 1950s-1970s homes with original wood shake and asphalt roofs</li>
                  <li>• Deteriorated roof decking in Potter County's older neighborhoods</li>
                  <li>• Inadequate attic ventilation in mid-century construction</li>
                  <li>• Failing flashing around brick chimneys and skylights</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Climate-Related Damage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Hail damage from Panhandle supercells</li>
                  <li>• Wind uplift from sustained 25+ mph gusts</li>
                  <li>• UV degradation accelerated by high altitude exposure</li>
                  <li>• Freeze-thaw cycles damaging flashing and gutters</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Amarillo Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-8">Each Amarillo neighborhood presents unique roofing challenges based on construction era, architectural style, and exposure to prevailing winds.</p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Historic Districts</h3>
                <p className="text-gray-600 mb-4">1940s-1960s construction requiring specialized restoration</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Wolflin - Historic brick homes, original wood shakes</li>
                  <li>• Paramount Terrace - Mid-century modern, flat roof challenges</li>
                  <li>• North Heights - 1950s construction, composition shingles</li>
                  <li>• Olsen Park - Post-war homes, gutter system upgrades</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Established Areas</h3>
                <p className="text-gray-600 mb-4">1970s-1990s developments with aging roofing systems</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Westover Hills - 1980s construction, architectural shingles</li>
                  <li>• River Road - Executive homes, complex rooflines</li>
                  <li>• Sleepy Hollow - Ranch-style homes, ventilation issues</li>
                  <li>• Tascosa - Suburban development, standard maintenance needs</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Newer Communities</h3>
                <p className="text-gray-600 mb-4">2000s+ construction with modern roofing systems</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• The Colonies - Impact-resistant shingles, warranty repairs</li>
                  <li>• Ridgecrest - Modern construction, hail damage claims</li>
                  <li>• Quail Creek - Energy-efficient homes, proper ventilation</li>
                  <li>• Westcliff - Contemporary designs, metal roofing options</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">Our Comprehensive Repair Process</h2>
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Detailed Inspection</h3>
                <p className="text-gray-700">Comprehensive assessment of visible and hidden damage, structural integrity, and climate-related wear patterns specific to Amarillo conditions.</p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Insurance Documentation</h3>
                <p className="text-gray-700">Professional damage documentation for insurance claims, with expertise in Potter County wind and hail damage requirements.</p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">🔨</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Expert Repairs</h3>
                <p className="text-gray-700">Precision repairs using materials rated for Texas Panhandle extremes, with techniques adapted to Amarillo's unique climate challenges.</p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Quality Assurance</h3>
                <p className="text-gray-700">Final inspection ensuring all repairs meet wind load requirements and provide long-term protection against future weather events.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Common Roof Repairs in Amarillo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Weather-Related Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Hail Damage:</strong> Impact craters, granule loss, and cracked shingles from frequent Panhandle storms</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Wind Uplift:</strong> Loose or missing shingles from sustained high winds and gusts</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Temperature Stress:</strong> Expansion/contraction damage from extreme temperature swings</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>UV Degradation:</strong> Accelerated aging from intense high-altitude sun exposure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Age-Related Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Deteriorated Decking:</strong> Rotted plywood in 1970s construction lacking proper ventilation</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Failed Flashing:</strong> Corroded metal around chimneys and penetrations in older homes</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Gutter Failure:</strong> Ice damage and wind stress on aging gutter systems</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Ventilation Problems:</strong> Inadequate airflow in mid-century ranch designs</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">Amarillo Roofing Costs & Value</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">Amarillo's roofing costs are generally 15-20% below major metropolitan areas, but frequent weather damage creates unique market conditions.</p>
              
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Minor Repairs</h3>
                  <p className="text-3xl font-bold text-green-800 mb-2">$400-900</p>
                  <p className="text-gray-600">Shingle replacement, flashing repair, minor leak fixes</p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-2">Moderate Damage</h3>
                  <p className="text-3xl font-bold text-yellow-800 mb-2">$900-2,800</p>
                  <p className="text-gray-600">Section replacement, decking repair, multi-area fixes</p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-red-700 mb-2">Extensive Repairs</h3>
                  <p className="text-3xl font-bold text-red-800 mb-2">$2,800-6,500</p>
                  <p className="text-gray-600">Major storm damage, structural work, complex restoration</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Amarillo Market Factors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Material costs rising due to frequent hail damage creating regional shortages</li>
                  <li>• Labor availability affected by seasonal demand spikes after storm events</li>
                  <li>• Insurance claims common - most repairs covered under comprehensive policies</li>
                  <li>• Historic homes may require specialized materials increasing costs 20-30%</li>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Why do Amarillo roofs fail more often than other Texas cities?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Amarillo's location in the Texas Panhandle creates unique stresses: extreme temperature swings from -10°F to 105°F cause expansion/contraction damage, constant 15+ mph winds loosen shingles, and frequent hailstorms damage roofing materials. The median home age of 52 years means many roofs are past their prime lifespan.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roof repairs are most common in historic Wolflin and Paramount Terrace?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">These 1940s-1960s neighborhoods typically need: deteriorated wood decking replacement, failed flashing around brick chimneys, worn composite shingle replacement, and gutter system upgrades. Many homes still have original cedar shakes requiring specialized restoration techniques.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof repair cost in Amarillo compared to Dallas or Houston?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Amarillo roof repairs average 15-20% less than major metro areas. Minor repairs: $400-900, moderate damage: $900-2,800, extensive repairs: $2,800-6,500. However, material costs are rising due to frequent hail damage creating supply shortages across the Panhandle.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When is the best time to schedule roof repairs in Amarillo?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Late fall through early spring (October-March) offers the most stable weather. Avoid summer heat stress repairs and spring hail season scheduling. Emergency repairs are available year-round, but planned work should avoid the peak storm months of April-July.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do I need special permits for roof repairs in Potter County?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Minor repairs under $1,000 typically don't require permits. Structural repairs, complete sections, or work involving electrical/plumbing need City of Amarillo permits. We handle all permit applications and ensure compliance with local wind load requirements for the Texas Panhandle.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in Amarillo's climate extremes?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Impact-resistant asphalt shingles (Class 3-4) perform best against hail. Metal roofing excels in high winds and temperature extremes. Avoid standard 3-tab shingles which fail quickly. Clay tiles work but require structural reinforcement for wind uplift in this region.</AccordionContent>
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
                <p className="text-gray-600 mb-4">24/7 response for hail and wind damage throughout Potter County</p>
                <a href="/emergency-roof-repair-amarillo/" className="text-brand-gold font-semibold hover:underline">Learn More →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Damage Repair</h3>
                <p className="text-gray-600 mb-4">Specialized restoration for Panhandle hailstorm damage</p>
                <a href="/hail-damage-roof-repair-amarillo-texas/" className="text-brand-gold font-semibold hover:underline">Learn More →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Full Roof Replacement</h3>
                <p className="text-gray-600 mb-4">Complete roofing systems for Amarillo's climate challenges</p>
                <a href="/roof-replacement-amarillo/" className="text-brand-gold font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
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
          <h2 className="text-4xl font-bold mb-6">Protect Your Amarillo Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let Texas Panhandle weather compromise your home's protection. Expert roof repair with comprehensive warranties and insurance assistance for Potter County properties.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}