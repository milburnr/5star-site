import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/metal-roofing-odessa/' },
  title: "Metal Roofing Odessa TX | Expert Service | Free Inspection",
  description: "Professional metal roofing in Odessa TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function MetalRoofingOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Metal Roofing", url: "/metal-roofing/" },
        { name: "Odessa", url: "/metal-roofing-odessa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/metal-roofing-odessa/#localbusiness",
        "name": "5 Star Commercial Roofing - Odessa Metal Roofing",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/SteelRoofing.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/metal-roofing-odessa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional metal roofing in Odessa TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Metal Roofing Installation",
            "name": "Metal Roofing in Odessa",
            "description": "Professional metal roofing services in Odessa, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Odessa",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Metal Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metal Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metal Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How long does metal roofing last in Odessa?","acceptedAnswer":{"@type":"Answer","text":"Metal roofing lasts 50+ years in Texas climate. Standing seam systems with proper installation can last 70 years with minimal maintenance."}},{"@type":"Question","name":"Is metal roofing noisy during rain and hail?","acceptedAnswer":{"@type":"Answer","text":"No. Proper insulation and underlayment make metal roofs as quiet as asphalt shingles. Modern installations are acoustically dampened."}},{"@type":"Question","name":"Does metal roofing increase home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. Metal roofs provide 85-95% ROI, excellent curb appeal, energy savings up to 25%, and appeal to buyers seeking low-maintenance, durable roofing."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-odessa-4-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Metal Roofing in <span className="text-brand-gold-light">Odessa</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional metal roofing throughout Odessa. Expert installation, comprehensive warranties, and . Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Odessa's Metal Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional metal roofing throughout Odessa and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Odessa with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-brown">Built for Oil Country's Toughest Conditions</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Odessa sits at the epicenter of America's oil production, creating the most challenging roofing environment in Texas. Heavy industrial activity, petrochemical processing, and constant drilling operations demand roofing systems engineered for extreme durability.</p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Our metal roofing installations are specifically designed for oil field environments. We use premium corrosion-resistant materials, enhanced fastening systems, and industrial-grade coatings that withstand chemical exposure, hydrogen sulfide emissions, and the relentless dust and debris of active drilling operations.</p>
                <div className="bg-black text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Oil Field Durability Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span> H2S-resistant coatings and substrates</li>
                    <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span> Hydrocarbon emission protection</li>
                    <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span> Enhanced vibration resistance</li>
                    <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span> Heavy-duty structural connections</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Industrial Metal Systems</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold">Petrochemical Grade Steel</h4>
                    <p className="text-gray-300">G90 galvanization with additional protective layers for chemical resistance and longevity.</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold">PVDF Industrial Coatings</h4>
                    <p className="text-gray-300">Fluoropolymer finishes engineered to resist oil field chemicals and maintain appearance.</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold">Reinforced Panel Design</h4>
                    <p className="text-gray-300">Heavy-gauge substrates with enhanced rib profiles for maximum structural integrity.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-yellow-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Extreme Wind Performance for Oil Country</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Odessa's position in the open plains makes it susceptible to severe wind events, while industrial activity creates additional structural challenges. Our systems exceed all requirements.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-black text-yellow-400 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">150</div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">mph Wind Rating</h3>
                  <p className="text-gray-600">Extreme weather protection</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-black text-yellow-400 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">20</div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Gauge Steel</h3>
                  <p className="text-gray-600">Heavy-duty construction</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-black text-yellow-400 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">4"</div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Fastener Spacing</h3>
                  <p className="text-gray-600">Maximum connection density</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-black text-yellow-400 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">UL</div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Listed</h3>
                  <p className="text-gray-600">Commercial certification</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Industrial Wind Resistance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Structural attachment every 4 inches on-center</li>
                    <li>• Enhanced perimeter and corner reinforcement</li>
                    <li>• Vibration-dampening connection systems</li>
                    <li>• Equipment load accommodation design</li>
                    <li>• High-strength mechanical seaming</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Environmental Protection</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Chemical-resistant fastener coatings</li>
                    <li>• Sealed connection systems</li>
                    <li>• Corrosion monitoring access points</li>
                    <li>• Emergency repair accessibility features</li>
                    <li>• Heavy equipment clearance design</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Petrochemical Environment Challenges</h2>
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">Odessa's massive oil production creates unique environmental stressors that standard roofing materials cannot withstand. Our specialized systems address these specific challenges.</p>
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">🛢️</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Chemical Exposure</h3>
                  <p className="mb-4">Hydrogen sulfide, hydrocarbon vapors, and processing chemicals require specialized protection.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• NACE-compliant corrosion protection</li>
                    <li>• Chemical-resistant elastomeric seals</li>
                    <li>• Non-reactive coating formulations</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">🌪️</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Industrial Vibration</h3>
                  <p className="mb-4">Constant drilling, pumping, and processing equipment creates structural vibration.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Isolation mounting systems available</li>
                    <li>• Flexible connection design</li>
                    <li>• Fatigue-resistant fastener systems</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">🔥</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Fire & Explosion Risk</h3>
                  <p className="mb-4">Enhanced fire resistance requirements for oil field proximity installations.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Class A fire rating standard</li>
                    <li>• Non-combustible insulation systems</li>
                    <li>• Emergency access integration</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown text-center">Odessa Environmental Data</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">8,000+</div>
                    <p className="text-sm text-gray-600">Active Oil Wells</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">365</div>
                    <p className="text-sm text-gray-600">Days/Year Operation</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">2,900</div>
                    <p className="text-sm text-gray-600">Elevation (feet)</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">120°F</div>
                    <p className="text-sm text-gray-600">Peak Heat Index</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-yellow-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Maximum Energy Efficiency for Hot Climate</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">Odessa's combination of industrial heat sources and desert climate creates extreme cooling demands. Our metal roofing systems provide maximum energy efficiency.</p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Advanced Cooling Technology</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-black text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                      <div>
                        <h4 className="font-bold text-brand-brown">Ultra-High Reflectance</h4>
                        <p className="text-gray-600">Premium cool roof coatings reflect 80%+ of solar radiation, critical in Odessa's intense heat environment.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-black text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                      <div>
                        <h4 className="font-bold text-brand-brown">Radiant Barrier Integration</h4>
                        <p className="text-gray-600">Reflective underlayment systems prevent radiant heat transfer into living spaces.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-black text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                      <div>
                        <h4 className="font-bold text-brand-brown">Strategic Ventilation</h4>
                        <p className="text-gray-600">Engineered airflow systems remove heat buildup and reduce HVAC loads significantly.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-brand-brown text-center">Odessa Energy Savings</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2">40%</div>
                      <p className="text-gray-700">Peak Cooling Load Reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2">50°F</div>
                      <p className="text-gray-700">Surface Temperature Difference</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2">$1,000+</div>
                      <p className="text-gray-700">Annual Savings Potential</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center"><strong>Based on:</strong> Odessa climate extremes, industrial heat island effects, and current AEP energy rates. Larger savings for industrial properties.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Odessa Properties Demand Metal Roofing</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">⚗️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Chemical Resistance</h3>
                  <p className="text-gray-700">Essential protection against H2S emissions, hydrocarbon vapors, and processing chemicals common in America's oil capital. Premium coatings resist corrosion and maintain integrity.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🔧</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Industrial Durability</h3>
                  <p className="text-gray-700">Built to withstand constant vibration from drilling equipment, heavy traffic, and industrial operations. Reinforced connections prevent fatigue failure.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🌡️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Extreme Heat Protection</h3>
                  <p className="text-gray-700">Superior performance in Odessa's combined natural and industrial heat. Reflective systems reduce cooling costs by 30-40% compared to dark roofing.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🔥</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Fire Safety</h3>
                  <p className="text-gray-700">Class A fire rating crucial for oil field proximity. Non-combustible construction provides maximum protection in high-risk environments.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">💎</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Low Maintenance</h3>
                  <p className="text-gray-700">Critical for busy oil workers and industry professionals. Minimal upkeep required despite harsh conditions. Smooth surfaces shed industrial dust and debris.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🏭</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Equipment Compatibility</h3>
                  <p className="text-gray-700">Designed to accommodate industrial equipment, communications gear, and safety systems required in oil field environments.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does metal roofing handle Odessa's oil field environment?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Our metal roofing systems are specifically engineered for oil country conditions. We use PVDF coatings that resist H2S emissions, hydrocarbon vapors, and chemical exposure. Enhanced galvanization and specialized fasteners provide long-term protection against corrosion from industrial pollutants common in Odessa's petrochemical environment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What energy savings are possible in Odessa's extreme heat?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Odessa properties can save 30-40% on cooling costs with high-reflectance metal roofing. The combination of desert heat and industrial heat islands makes energy efficiency critical. Surface temperatures can be 50°F cooler than dark asphalt, resulting in annual savings exceeding $1,000 for many homes. Industrial heat sources make cool roof technology especially valuable.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can metal roofing withstand vibration from drilling operations?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, our industrial-grade systems are designed for vibration resistance. We use reinforced structural connections, isolation mounting options, and fatigue-resistant fastener systems. The continuous operation of drilling equipment, pumping stations, and processing facilities requires specialized engineering that our installations provide.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What wind resistance is needed in oil country?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Our Odessa installations achieve 150+ mph wind ratings with enhanced fastening every 4 inches on-center. The open plains location combined with industrial structures creates complex wind patterns requiring superior uplift resistance. We exceed local building codes with commercial-grade attachment systems.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you address fire safety concerns near oil operations?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">All our systems meet Class A fire ratings with non-combustible construction. We integrate emergency access features, use fire-resistant insulation, and coordinate with local fire safety requirements. Metal roofing provides maximum protection in high-risk environments common throughout Odessa's oil field areas.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What about equipment mounting for industrial properties?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We design systems to accommodate HVAC equipment, communications gear, safety systems, and monitoring equipment common in oil field properties. Structural calculations include equipment loads, and we provide proper mounting points with weatherproof penetration sealing for industrial applications.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long will metal roofing last in Odessa's harsh conditions?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">With proper material selection and installation, our metal roofing lasts 50-70 years even in Odessa's challenging environment. Premium PVDF coatings resist chemical exposure, enhanced galvanization prevents corrosion, and heavy-gauge substrates withstand industrial stresses. Regular inspection and minimal maintenance ensure maximum lifespan.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide specialized systems for different oil field applications?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we offer customized solutions for various applications including residential properties near oil fields, industrial facilities, equipment buildings, and commercial structures. Each installation is engineered for specific environmental exposures, equipment requirements, and safety considerations based on proximity to drilling operations.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-black text-white p-12 rounded-3xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Odessa Installation Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-bold mb-2">Industrial Assessment</h3>
                  <p className="text-sm opacity-90">Environmental exposure evaluation and chemical resistance requirements</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-bold mb-2">Custom Engineering</h3>
                  <p className="text-sm opacity-90">Structural design for wind loads, equipment, and environmental factors</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-bold mb-2">Professional Installation</h3>
                  <p className="text-sm opacity-90">Industrial-grade installation with enhanced safety protocols</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h3 className="font-bold mb-2">Performance Certification</h3>
                  <p className="text-sm opacity-90">Quality verification and industrial warranty activation</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-yellow-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance & Safety Benefits for Oil Country</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">Odessa properties face unique insurance challenges due to industrial exposure and fire risk. Metal roofing provides significant benefits.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Insurance Advantages</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="text-black mr-2 mt-1">•</span> <span><strong>Fire Rating Discounts:</strong> Class A ratings reduce premiums for oil field proximity</span></li>
                    <li className="flex items-start"><span className="text-black mr-2 mt-1">•</span> <span><strong>Chemical Resistance:</strong> Lower claims risk from industrial exposure</span></li>
                    <li className="flex items-start"><span className="text-black mr-2 mt-1">•</span> <span><strong>Wind Certification:</strong> Enhanced ratings for extreme weather protection</span></li>
                    <li className="flex items-start"><span className="text-black mr-2 mt-1">•</span> <span><strong>Reduced Maintenance Claims:</strong> Lower frequency of weather-related damage</span></li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Safety Features</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="text-black mr-2 mt-1">•</span> <span><strong>Non-Combustible:</strong> Critical protection in oil field environments</span></li>
                    <li className="flex items-start"><span className="text-black mr-2 mt-1">•</span> <span><strong>Lightning Protection:</strong> Compatible with surge protection systems</span></li>
                    <li className="flex items-start"><span className="text-black mr-2 mt-1">•</span> <span><strong>Emergency Access:</strong> Designed for first responder requirements</span></li>
                    <li className="flex items-start"><span className="text-black mr-2 mt-1">•</span> <span><strong>Equipment Integration:</strong> Safety system mounting capabilities</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-black text-white p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Comprehensive Protection for Oil Country Living</h3>
                <p>Our installations meet the unique safety and insurance requirements of America's oil capital, providing peace of mind for homeowners and businesses.</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Odessa property owners. Expert metal roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}