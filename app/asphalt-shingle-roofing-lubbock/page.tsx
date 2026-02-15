import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/asphalt-shingle-roofing-lubbock/' },
  title: 'Asphalt Shingle Roofing Lubbock TX | 5 Star Roofing',
  description: "Professional asphalt shingle installation in Lubbock TX. Wind-rated systems for South Plains weather. Class 4 hail protection. 25-year warranties. Call (806) 622-6041",
};

export default function AsphaltShingleRoofingLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Asphalt Shingle Roofing", url: "/asphalt-shingle-roofing/" },
        { name: "Lubbock", url: "/asphalt-shingle-roofing-lubbock/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-lubbock/#localbusiness",
        "name": "5 Star Commercial Roofing - Lubbock Asphalt Shingle Roofing",
        "image": "https://5starroofingpros.com/images/asphalt-shingles-2.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5779, "longitude": -101.8552 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-lubbock/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "156", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional asphalt shingle roofing in Lubbock TX. Wind-rated systems designed for South Plains weather conditions.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "serviceArea": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 33.5779, "longitude": -101.8552}, "geoRadius": "50000"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Lubbock Asphalt Shingle Roofing",
        "description": "Wind-rated asphalt shingle installation and replacement services in Lubbock, Texas",
        "provider": {"@id": "https://5starroofingpros.com/#organization"},
        "areaServed": "Lubbock, Texas",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "South Plains Asphalt Shingle Services",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "High-Wind Architectural Shingle Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Class 4 Impact-Resistant Shingles"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "South Plains Wind Damage Repair"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cotton Dust Resistant Shingle Systems"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lubbock Storm Damage Assessment"}}
          ]
        }
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type":"Question","name":"How do asphalt shingles perform in Lubbock's high winds?","acceptedAnswer":{"@type":"Answer","text":"Lubbock's average 13.5 mph winds require enhanced installation. We use wind-rated architectural shingles with 6-nail fastening patterns and premium starter strips, providing 110-130 mph wind resistance versus standard 60-70 mph ratings."}},
          {"@type":"Question","name":"What's the best asphalt shingle type for Lubbock cotton dust?","acceptedAnswer":{"@type":"Answer","text":"Architectural shingles with enhanced granule adhesion resist cotton dust better than 3-tab. We recommend impact-resistant shingles with sealed tabs and proper attic ventilation to prevent dust accumulation affecting performance."}},
          {"@type":"Question","name":"How much does asphalt shingle roofing cost in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Lubbock pricing: Standard architectural $9,500-$14,500, premium wind-rated $12,000-$17,000, Class 4 impact-resistant $14,000-$20,000. South Plains installations require enhanced fastening, affecting material costs."}},
          {"@type":"Question","name":"Do Lubbock homes need special ventilation with asphalt shingles?","acceptedAnswer":{"@type":"Answer","text":"Yes! Lubbock's hot summers and cotton dust require enhanced attic ventilation. We install ridge vents, soffit vents, and proper insulation baffles to prevent moisture buildup and extend shingle life in South Plains conditions."}},
          {"@type":"Question","name":"What shingle colors work best in Lubbock's agricultural environment?","acceptedAnswer":{"@type":"Answer","text":"Light colors like Antique Silver, Weathered Wood, and Driftwood hide cotton dust and reflect South Plains heat. Avoid pure white (shows dirt) and dark colors (excessive heat absorption in 100°+ summers)."}},
          {"@type":"Question","name":"How often should Lubbock asphalt shingles be inspected?","acceptedAnswer":{"@type":"Answer","text":"Inspect after each major windstorm (4+ times annually), after hail events, and bi-annually for cotton dust buildup. Lubbock's agricultural environment and frequent high winds require more frequent monitoring than typical climates."}}
        ]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-2-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Asphalt Shingle Roofing in <span className="text-brand-gold-light">Lubbock</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">South Plains Wind & Weather Experts</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional asphalt shingle roofing designed for Lubbock's unique South Plains conditions. Wind-rated installations, cotton dust resistance, and superior storm protection for Hub City properties.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">130</div><div className="text-brand-brown font-semibold text-lg">MPH Wind Rating</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={300} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Lubbock Installs</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">25</div><div className="text-brand-brown font-semibold text-lg">Year Warranty</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">🌪️</div><div className="text-brand-brown font-semibold text-lg">Storm Specialists</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Understanding Lubbock's Unique Roofing Challenges</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">South Plains Climate Factors</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Lubbock's location in the heart of the South Plains creates distinctive weather patterns that demand specialized roofing solutions:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Persistent high winds:</strong> Average 13.5 mph, frequently exceeding 25 mph</li>
                  <li>• <strong>Cotton dust exposure:</strong> Agricultural particles affecting roof performance</li>
                  <li>• <strong>Temperature extremes:</strong> From 10°F winters to 105°F summers</li>
                  <li>• <strong>Severe storm corridor:</strong> Supercells bringing hail and destructive winds</li>
                  <li>• <strong>Low humidity:</strong> Accelerated UV degradation of roofing materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Lubbock Expertise</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Over 300 successful installations in Lubbock have taught us exactly what works in South Plains conditions:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enhanced wind-rated fastening systems exceeding code requirements</li>
                  <li>• Dust-resistant shingle selections with superior granule retention</li>
                  <li>• Proper attic ventilation for agricultural environment</li>
                  <li>• Insurance expertise for frequent wind and hail claims</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Asphalt Shingle Solutions for South Plains Weather</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Standard Architectural</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$9,500-$14,500</div>
                <p className="text-gray-700 mb-6">Good performance in Lubbock with enhanced installation. Minimum recommendation for South Plains wind exposure.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 20-25 year lifespan in Lubbock climate</li>
                  <li>• 90-110 mph wind resistance when properly installed</li>
                  <li>• Basic cotton dust resistance</li>
                  <li>• Limited color options</li>
                  <li>• Moderate insurance benefits</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-brand-gold relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">High-Wind Architectural</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$12,000-$17,000</div>
                <p className="text-gray-700 mb-6">Enhanced wind performance for Lubbock's persistent high winds. Superior granule retention against dust.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 25-30 year lifespan with proper maintenance</li>
                  <li>• 110-130 mph wind resistance rating</li>
                  <li>• Enhanced dust and debris resistance</li>
                  <li>• Extended color palette</li>
                  <li>• Better insurance protection</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">BEST VALUE</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Class 4 Impact-Resistant</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$14,000-$20,000</div>
                <p className="text-gray-700 mb-6">Maximum protection for Lubbock's severe weather. Optimal for frequent storm exposure.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 30+ year lifespan in harsh conditions</li>
                  <li>• 130+ mph wind resistance</li>
                  <li>• UL 2218 Class 4 hail protection</li>
                  <li>• 20-35% insurance premium savings</li>
                  <li>• Premium color and style options</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Why Wind-Rated Installation Matters in Lubbock</h3>
              <p className="text-lg mb-4">Standard installation methods fail in Lubbock's persistent winds. Our enhanced techniques prevent the common failure modes we see after storms.</p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <strong>Enhanced Fastening:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• 6 nails per shingle (vs standard 4)</li>
                    <li>• Hand-sealed tabs in high-exposure areas</li>
                    <li>• Premium starter strips with enhanced adhesive</li>
                    <li>• Ring shank nails for superior holding power</li>
                  </ul>
                </div>
                <div>
                  <strong>Wind Protection Details:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Upgraded drip edge and rake edge materials</li>
                    <li>• Enhanced hip and ridge cap installation</li>
                    <li>• Proper nail placement for wind uplift resistance</li>
                    <li>• Quality control inspection at completion</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Lubbock-Specific Design Considerations</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Optimal Colors for Cotton Country</h3>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="text-xl font-bold mb-3 text-green-800">Recommended Colors</h4>
                    <ul className="space-y-2">
                      <li><strong>Antique Silver:</strong> Excellent dust concealment while reflecting heat</li>
                      <li><strong>Weathered Wood:</strong> Natural appearance that ages gracefully</li>
                      <li><strong>Driftwood:</strong> Complements South Plains architecture</li>
                      <li><strong>Sandy Beige:</strong> Blends with agricultural landscape</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="text-xl font-bold mb-3 text-red-700">Colors to Avoid in Lubbock</h4>
                    <ul className="space-y-2 text-red-700">
                      <li><strong>Pure White:</strong> Shows cotton dust and dirt immediately</li>
                      <li><strong>Black/Charcoal:</strong> Extreme heat absorption (unsafe in summer)</li>
                      <li><strong>Bright Blues/Greens:</strong> Fade rapidly in intense UV</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Ventilation for Agricultural Environment</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-brand-brown">Enhanced Ventilation Requirements</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Continuous ridge venting to exhaust heated air</li>
                      <li>• Soffit vents with filters to reduce dust infiltration</li>
                      <li>• Proper insulation baffles maintaining airflow</li>
                      <li>• Gable vents for cross-ventilation in cotton season</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold mb-3 text-blue-800">Cotton Harvest Considerations</h4>
                    <p className="text-blue-700 mb-3">During cotton harvest (September-November), airborne particles increase dramatically. Proper ventilation prevents:</p>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Dust accumulation in attic spaces</li>
                      <li>• Moisture retention from temperature variations</li>
                      <li>• Premature aging of underlayment materials</li>
                      <li>• Indoor air quality issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Lubbock Weather Performance Data</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">13.5</div>
                  <div className="text-sm text-gray-700">Average wind speed<br/>(mph)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">58</div>
                  <div className="text-sm text-gray-700">Annual days<br/>with 25+ mph winds</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">4.1</div>
                  <div className="text-sm text-gray-700">Average annual<br/>hail days</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">263</div>
                  <div className="text-sm text-gray-700">Annual sunny<br/>days</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">South Plains Installation Process</h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Pre-Installation Assessment</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                      <span><strong>Wind Exposure Analysis:</strong> Documenting prevailing wind patterns and exposure zones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                      <span><strong>Storm Damage Documentation:</strong> Identifying previous wind and hail damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                      <span><strong>Ventilation Evaluation:</strong> Assessing current airflow and dust infiltration</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Enhanced Wind Installation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                      <span><strong>Premium Deck Preparation:</strong> Synthetic underlayment rated for high winds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">5</span>
                      <span><strong>Enhanced Edge Details:</strong> Upgraded starter strips and drip edge systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">6</span>
                      <span><strong>6-Nail Fastening:</strong> Ring shank nails with precise placement patterns</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Installation Timeline</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 1</h4>
                    <p className="text-sm text-gray-600">Tear-off, deck inspection, and weather protection installation.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 2</h4>
                    <p className="text-sm text-gray-600">Synthetic underlayment, drip edge, and enhanced starter course.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 2-3</h4>
                    <p className="text-sm text-gray-600">Shingle installation with wind-rated fastening patterns.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">✓</div>
                    <h4 className="font-bold text-brand-brown mb-2">Final</h4>
                    <p className="text-sm text-gray-600">Ridge caps, ventilation installation, and quality inspection.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">Lubbock Installation Considerations</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-yellow-700 text-sm">
                  <li>• Work schedule adjusted for high wind days</li>
                  <li>• Enhanced temporary protection during installation</li>
                  <li>• Extra attention to dust control and cleanup</li>
                  <li>• Quality control inspection with wind resistance focus</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Maintenance for South Plains Conditions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Lubbock-Specific Maintenance Schedule</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Seasonal Inspections</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li><strong>Spring:</strong> Post-winter storm damage assessment</li>
                      <li><strong>Summer:</strong> Heat stress and UV damage evaluation</li>
                      <li><strong>Fall:</strong> Cotton harvest dust accumulation check</li>
                      <li><strong>Winter:</strong> Wind damage and loose shingle inspection</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="text-lg font-bold text-green-800 mb-2">After-Storm Protocol</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Immediate visual inspection from ground level</li>
                      <li>• Professional assessment within 48 hours</li>
                      <li>• Documentation for potential insurance claims</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Cotton Dust Management</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-brand-brown">Harvest Season Care (Sept-Nov)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Monthly gutter cleaning during cotton harvest</li>
                      <li>• Attic ventilation filter inspection and replacement</li>
                      <li>• Roof surface debris removal after high winds</li>
                      <li>• Check for shingle tab lifting from dust accumulation</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="text-lg font-bold mb-2 text-brand-brown">Year-Round Protection</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Proper attic insulation and ventilation</li>
                      <li>• Regular gutter and downspout maintenance</li>
                      <li>• Tree trimming to reduce debris accumulation</li>
                      <li>• Professional cleaning every 2-3 years</li>
                    </ul>
                  </div>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do asphalt shingles perform in Lubbock's high winds?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Lubbock's average 13.5 mph winds require enhanced installation. We use wind-rated architectural shingles with 6-nail fastening patterns and premium starter strips, providing 110-130 mph wind resistance versus standard 60-70 mph ratings.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the best asphalt shingle type for Lubbock cotton dust?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Architectural shingles with enhanced granule adhesion resist cotton dust better than 3-tab. We recommend impact-resistant shingles with sealed tabs and proper attic ventilation to prevent dust accumulation affecting performance.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does asphalt shingle roofing cost in Lubbock?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Lubbock pricing: Standard architectural $9,500-$14,500, premium wind-rated $12,000-$17,000, Class 4 impact-resistant $14,000-$20,000. South Plains installations require enhanced fastening, affecting material costs.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do Lubbock homes need special ventilation with asphalt shingles?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes! Lubbock's hot summers and cotton dust require enhanced attic ventilation. We install ridge vents, soffit vents, and proper insulation baffles to prevent moisture buildup and extend shingle life in South Plains conditions.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What shingle colors work best in Lubbock's agricultural environment?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Light colors like Antique Silver, Weathered Wood, and Driftwood hide cotton dust and reflect South Plains heat. Avoid pure white (shows dirt) and dark colors (excessive heat absorption in 100°+ summers).</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How often should Lubbock asphalt shingles be inspected?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Inspect after each major windstorm (4+ times annually), after hail events, and bi-annually for cotton dust buildup. Lubbock's agricultural environment and frequent high winds require more frequent monitoring than typical climates.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Lubbock Property Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Expert asphalt shingle roofing designed for South Plains conditions. Wind-rated installations, cotton dust resistance, and comprehensive storm protection. Serving the Hub City with pride.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}