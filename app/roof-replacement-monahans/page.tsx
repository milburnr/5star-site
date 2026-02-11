import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Monahans TX | 5 Star Roofing',
  description: "Professional roof replacement in Monahans TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementMonahansPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Monahans", url: "/roof-replacement-monahans/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-monahans/#localbusiness",
        "name": "5 Star Commercial Roofing - Monahans Roof Replacement",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-monahans/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas", "name": "Monahans", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Monahans TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Monahans",
            "description": "Professional roof replacement services in Monahans, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Monahans",
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
        "mainEntity": [{"@type":"Question","name":"When should I replace my Monahans roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in West Texas?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles, metal roofing, and TPO are ideal for Monahans' desert climate, handling extreme heat, wind, and occasional hail."}},{"@type":"Question","name":"How does Monahans climate affect roof lifespan?","acceptedAnswer":{"@type":"Answer","text":"Desert conditions with temperature swings, UV exposure, and windblown sand reduce roof lifespan. Quality materials and proper installation are critical."}},{"@type":"Question","name":"Will a new roof increase my home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI. Class 4 roofs add premium value with insurance discounts and reduced maintenance."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-7-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Monahans, Texas</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Desert Climate Roofing Solutions</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Monahans and West Texas. Specializing in desert climate roofing systems engineered for extreme heat, windblown sand, and temperature fluctuations. Expert installation, comprehensive warranties, and 24/7 emergency service.</p>
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
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Monahans Desert Climate Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">Located in the heart of West Texas, Monahans presents unique roofing challenges that require specialized expertise. As the county seat of Ward County and home to the famous Monahans Sandhills State Park, this oil and gas industry hub experiences some of the most demanding desert climate conditions in Texas. Our team understands the specific environmental factors affecting Monahans roofs and provides solutions engineered for long-term performance.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Why Monahans Roofs Need Special Attention</h3>
                <ul className="text-gray-700 space-y-3">
                  <li>• <strong>Extreme Temperature Swings:</strong> Summer highs often exceed 105°F, winter lows can drop to 20°F</li>
                  <li>• <strong>Intense UV Radiation:</strong> High altitude desert sun degrades roofing materials rapidly</li>
                  <li>• <strong>Windblown Sand:</strong> Constant abrasion from sand particles wears protective coatings</li>
                  <li>• <strong>Sudden Weather Changes:</strong> Flash storms can bring hail, high winds, and temperature drops</li>
                  <li>• <strong>Low Humidity:</strong> Causes material shrinkage and cracking in inferior products</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Monahans-Specific Approach</h3>
                <ul className="text-gray-700 space-y-3">
                  <li>• <strong>Desert-Rated Materials:</strong> UV-resistant, thermal expansion compatible</li>
                  <li>• <strong>Enhanced Underlayment:</strong> Superior protection against wind-driven rain</li>
                  <li>• <strong>Proper Ventilation:</strong> Critical for managing extreme heat buildup</li>
                  <li>• <strong>Quality Fasteners:</strong> Corrosion-resistant hardware for longevity</li>
                  <li>• <strong>Local Code Compliance:</strong> Familiar with Ward County building requirements</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Monahans homeowners and business owners with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available throughout Ward County.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Monahans Roofing Materials That Perform</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Impact-Resistant Asphalt Shingles</h3>
                <p className="text-gray-700 mb-4">Class 4 impact-resistant shingles are ideal for Monahans homes. These premium shingles feature:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Advanced polymer-modified asphalt</li>
                  <li>• Superior granule adhesion</li>
                  <li>• Enhanced wind resistance (up to 130 mph)</li>
                  <li>• Insurance premium discounts available</li>
                  <li>• 25-30 year manufacturer warranties</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Metal Roofing Systems</h3>
                <p className="text-gray-700 mb-4">Perfect for Monahans' extreme conditions, offering:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Superior heat reflection and energy efficiency</li>
                  <li>• Excellent hail and wind resistance</li>
                  <li>• 40-70 year lifespan in desert climates</li>
                  <li>• Low maintenance requirements</li>
                  <li>• Available in multiple profiles and colors</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">TPO Commercial Roofing</h3>
                <p className="text-gray-700 mb-4">For Monahans businesses, TPO provides:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Outstanding UV resistance</li>
                  <li>• Energy Star qualified white membrane</li>
                  <li>• Chemical and puncture resistance</li>
                  <li>• Heat-welded seams for durability</li>
                  <li>• 15-20 year manufacturer warranties</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Serving Greater Monahans Area</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">Our roof replacement services extend throughout Ward County and surrounding areas. We're familiar with local building codes, permitting requirements, and the specific challenges faced by property owners in each community.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Service Areas Include:</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>• Monahans</div>
                  <div>• Wickett</div>
                  <div>• Pyote</div>
                  <div>• Grandfalls</div>
                  <div>• Barstow</div>
                  <div>• Thorntonville</div>
                  <div>• Ward County</div>
                  <div>• Pecos County</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Local Expertise Matters</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Familiar with Ward County building codes</li>
                  <li>• Understanding of local insurance requirements</li>
                  <li>• Knowledge of area weather patterns</li>
                  <li>• Established relationships with local suppliers</li>
                  <li>• Quick response times throughout the region</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">The Monahans Roof Replacement Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Step-by-Step Excellence</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Free Inspection & Assessment</h4>
                      <p className="text-gray-600">Comprehensive evaluation of your current roof condition, including hidden damage often found in desert climates.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Material Selection & Design</h4>
                      <p className="text-gray-600">Choose from desert-appropriate materials with detailed estimates and warranty information.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Permitting & Insurance</h4>
                      <p className="text-gray-600">We handle all Ward County permit applications and assist with insurance claim documentation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Expert Installation</h4>
                      <p className="text-gray-600">Professional installation by certified technicians using best practices for desert climates.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Final Inspection & Cleanup</h4>
                      <p className="text-gray-600">Thorough quality inspection and complete site cleanup, leaving your property pristine.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-brown text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Why Monahans Chooses Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Licensed and insured in Texas</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Specialized desert climate expertise</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Comprehensive manufacturer warranties</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>24/7 emergency response</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Insurance claim assistance</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Local Ward County knowledge</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Upfront pricing with no surprises</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Understanding Monahans Weather Impact</h2>
            <div className="bg-amber-50 p-8 rounded-xl">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">Monahans' location in the Permian Basin creates a unique microclimate that significantly impacts roofing systems. Understanding these local conditions is crucial for proper material selection and installation techniques.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Summer Challenges</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Extreme Heat:</strong> Surface temperatures can exceed 140°F</li>
                    <li>• <strong>Thermal Cycling:</strong> Daily 40-50°F temperature swings</li>
                    <li>• <strong>UV Intensity:</strong> High altitude increases radiation exposure</li>
                    <li>• <strong>Wind Erosion:</strong> Constant sand abrasion from nearby dunes</li>
                    <li>• <strong>Low Humidity:</strong> Causes material shrinkage and cracking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Winter & Storm Concerns</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Temperature Drops:</strong> Rapid cooling causes material contraction</li>
                    <li>• <strong>Ice Formation:</strong> Rare but damaging freeze-thaw cycles</li>
                    <li>• <strong>Spring Hail:</strong> Severe thunderstorms with large hail</li>
                    <li>• <strong>High Winds:</strong> 50+ mph winds during weather fronts</li>
                    <li>• <strong>Flash Flooding:</strong> Intense rain overwhelms drainage systems</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Our Desert Climate Solutions</h3>
                <p className="text-gray-700 leading-relaxed">We select and install roofing systems specifically designed for these challenging conditions. Our materials feature enhanced UV protection, superior thermal cycling resistance, and advanced wind uplift ratings. Proper installation techniques include upgraded fastener schedules, enhanced edge details, and improved ventilation systems to manage extreme heat buildup.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Monahans roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 15-20 years in desert climates, multiple leaks, extensive granule loss, curling shingles from heat damage, or failed previous repairs. Desert conditions accelerate aging.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in West Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 impact-resistant shingles, metal roofing, and TPO are ideal for Monahans' desert climate. These materials handle extreme heat, UV exposure, wind, temperature swings, and occasional hail better than standard products.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does Monahans climate affect roof lifespan?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Desert conditions with extreme temperature swings, intense UV exposure, and windblown sand significantly reduce roof lifespan. Standard materials may last only 12-15 years compared to 20-25 in milder climates. Quality desert-rated materials and proper installation are critical for longevity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do I need special permits for roof replacement in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, Ward County requires building permits for roof replacement. We handle all permit applications, ensure compliance with local codes, and coordinate inspections. Permits typically cost $50-200 depending on project scope.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will a new roof increase my home value in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. New roofs provide 60-70% ROI and are especially valuable in Monahans' competitive real estate market. Class 4 impact-resistant roofs add premium value with insurance discounts and reduced maintenance. Energy-efficient materials also reduce cooling costs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does a roof replacement take in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most residential roof replacements take 1-3 days depending on size and complexity. We schedule around weather conditions and work efficiently to minimize disruption. Commercial projects may take 3-7 days. We provide detailed timelines during the estimate process.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Emergency Roof Replacement in Monahans</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                <h3 className="text-2xl font-bold mb-4 text-red-800">When You Need Emergency Replacement</h3>
                <ul className="text-red-700 space-y-3">
                  <li>• Severe storm damage exposing interior</li>
                  <li>• Large hail causing widespread damage</li>
                  <li>• High wind uplift tearing off sections</li>
                  <li>• Fire or other disaster damage</li>
                  <li>• Structural damage compromising safety</li>
                  <li>• Multiple active leaks in severe weather</li>
                </ul>
                <div className="mt-6 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-800 font-bold">Call (806) 622-6041 for 24/7 emergency response</p>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Emergency Response</h3>
                <ul className="text-blue-700 space-y-3">
                  <li>• Immediate damage assessment</li>
                  <li>• Emergency tarping and weatherization</li>
                  <li>• Rapid material procurement</li>
                  <li>• Expedited permitting when possible</li>
                  <li>• Insurance claim documentation</li>
                  <li>• Priority scheduling for replacement</li>
                </ul>
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-blue-800 font-bold">Average emergency response time: Under 2 hours</p>
                </div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Monahans Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Monahans and Ward County property owners. Expert roof replacement with desert climate expertise, comprehensive warranties, and insurance assistance. Don't let West Texas weather destroy your investment.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}