import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Asphalt Shingle Roofing Odessa TX | 5 Star Roofing',
  description: "Industrial-grade asphalt shingle roofing in Odessa TX. Chemical-resistant materials for petrochemical environment. Budget-friendly to premium options. Call (806) 622-6041",
};

export default function AsphaltShingleRoofingOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Asphalt Shingle Roofing", url: "/asphalt-shingle-roofing/" },
        { name: "Odessa", url: "/asphalt-shingle-roofing-odessa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-odessa/#localbusiness",
        "name": "5 Star Commercial Roofing - Odessa Asphalt Shingle Roofing",
        "image": "https://5starroofingpros.com/images/asphalt-shingles-2.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.8457, "longitude": -102.3676 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-odessa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "94", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Industrial-grade asphalt shingle roofing in Odessa TX. Chemical-resistant materials for petrochemical environment.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "serviceArea": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 31.8457, "longitude": -102.3676}, "geoRadius": "50000"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Odessa Industrial Asphalt Shingle Roofing",
        "description": "Chemical-resistant asphalt shingle installation for Odessa's petrochemical environment",
        "provider": {"@id": "https://5starroofingpros.com/#organization"},
        "areaServed": "Odessa, Texas",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Odessa Roofing Services",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Chemical-Resistant Shingle Systems"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Budget-Friendly Architectural Shingles"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Working Family Roof Financing"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Industrial Air Quality Roofing"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Permian Basin Storm Protection"}}
          ]
        }
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type":"Question","name":"How do petrochemicals affect asphalt shingles in Odessa?","acceptedAnswer":{"@type":"Answer","text":"Odessa's petrochemical emissions can accelerate shingle deterioration. We use chemical-resistant granules and enhanced sealants designed for industrial exposure. Proper ventilation prevents chemical accumulation in attic spaces."}},
          {"@type":"Question","name":"What's the most affordable asphalt shingle option for Odessa homes?","acceptedAnswer":{"@type":"Answer","text":"Quality architectural shingles start at $10,000-$14,000 in Odessa. We offer financing options for working families. Standard architectural provides 20+ years with proper installation and is much better than basic 3-tab for local conditions."}},
          {"@type":"Question","name":"Do Odessa homes need special air quality protection in roofing?","acceptedAnswer":{"@type":"Answer","text":"Yes! Enhanced attic ventilation and sealed roofing systems prevent industrial pollutants from entering living spaces. We install air barriers and filtration systems as standard practice in Odessa's industrial environment."}},
          {"@type":"Question","name":"How much does asphalt shingle roofing cost in Odessa?","acceptedAnswer":{"@type":"Answer","text":"Odessa pricing: Architectural $10,000-$14,000, chemical-resistant premium $12,500-$17,500, Class 4 impact-resistant $15,000-$21,000. We offer financing and work with insurance for storm damage claims."}},
          {"@type":"Question","name":"What shingle colors hide Odessa's industrial dust best?","acceptedAnswer":{"@type":"Answer","text":"Medium tones like Desert Beige, Weathered Wood, and Oyster Shell hide industrial dust while reflecting heat. Avoid pure white (shows dirt immediately) and very dark colors (excessive heat in desert climate)."}},
          {"@type":"Question","name":"How do I protect my Odessa home from industrial air pollution?","acceptedAnswer":{"@type":"Answer","text":"Sealed roofing systems with enhanced ventilation and filtration. We install synthetic underlayment barriers, sealed penetrations, and properly designed attic airflow to maintain indoor air quality in industrial environments."}}
        ]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/asphalt-shingles-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Asphalt Shingle Roofing in <span className="text-brand-gold-light">Odessa</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Industrial Tough & Family Affordable</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional asphalt shingle roofing built for Odessa's petrochemical environment. Chemical-resistant materials, budget-friendly options, and financing available for working families.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Free Estimate</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">💯</div><div className="text-brand-brown font-semibold text-lg">Chemical Resistant</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={200} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Odessa Homes</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">$0</div><div className="text-brand-brown font-semibold text-lg">Down Financing</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">🏭</div><div className="text-brand-brown font-semibold text-lg">Industrial Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Understanding Odessa's Industrial Environment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Petrochemical Challenges</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Odessa's position as a petrochemical processing center creates unique roofing challenges that require specialized solutions:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Chemical emissions:</strong> Airborne petrochemicals affecting material integrity</li>
                  <li>• <strong>Industrial particulates:</strong> Fine particles from processing operations</li>
                  <li>• <strong>Air quality concerns:</strong> Need for enhanced home sealing</li>
                  <li>• <strong>Desert heat:</strong> 105°F+ summers with intense UV exposure</li>
                  <li>• <strong>Economic considerations:</strong> Working-family budgets requiring value</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Odessa Approach</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Over 200 installations in Odessa have taught us to balance performance with affordability:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chemical-resistant shingle materials at competitive prices</li>
                  <li>• Enhanced air sealing to protect indoor air quality</li>
                  <li>• Flexible financing options for working families</li>
                  <li>• Industrial-grade installation techniques</li>
                  <li>• Value-focused solutions without compromising quality</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Asphalt Shingle Options for Every Odessa Family</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">BEST VALUE</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Quality Architectural</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$10,000-$14,000</div>
                <p className="text-gray-700 mb-6">Solid performance for working families. Chemical-resistant granules and proper installation for 20+ years.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 20-25 year performance in Odessa climate</li>
                  <li>• Chemical-resistant granule coating</li>
                  <li>• Class A fire rating for industrial areas</li>
                  <li>• Financing available ($0 down options)</li>
                  <li>• Basic color selection</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-brand-gold relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Industrial Premium</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$12,500-$17,500</div>
                <p className="text-gray-700 mb-6">Enhanced chemical protection and air quality features. Recommended for families near industrial operations.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 25-30 year lifespan with warranties</li>
                  <li>• Enhanced chemical and UV protection</li>
                  <li>• Superior air barrier systems</li>
                  <li>• Extended color palette</li>
                  <li>• Better insurance coverage</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">PREMIUM</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Class 4 Impact-Resistant</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$15,000-$21,000</div>
                <p className="text-gray-700 mb-6">Maximum protection for investment properties and families wanting the best performance.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 30+ year performance guarantee</li>
                  <li>• Military-grade impact protection</li>
                  <li>• 25-35% insurance premium savings</li>
                  <li>• Complete air quality protection</li>
                  <li>• Designer color options</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Financing Options for Odessa Families</h3>
              <p className="text-lg mb-4">We understand roofing is a major investment for working families. Our flexible financing makes quality roofing affordable without compromising protection.</p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <strong>Financing Benefits:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• $0 down payment options available</li>
                    <li>• 12-84 month payment plans</li>
                    <li>• Competitive interest rates</li>
                    <li>• Same-day approval for qualified applicants</li>
                  </ul>
                </div>
                <div>
                  <strong>Insurance Support:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Storm damage claim assistance</li>
                    <li>• Documentation and photo evidence</li>
                    <li>• Supplement negotiation support</li>
                    <li>• Direct insurance billing when possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Chemical Resistance & Air Quality Protection</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Protecting Your Family's Health</h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-xl font-bold mb-3 text-blue-800">Enhanced Air Sealing</h4>
                    <ul className="space-y-2">
                      <li><strong>Synthetic Barriers:</strong> Prevent chemical infiltration into living spaces</li>
                      <li><strong>Sealed Penetrations:</strong> All roof penetrations properly weatherproofed</li>
                      <li><strong>Enhanced Ventilation:</strong> Balanced airflow to maintain indoor air quality</li>
                      <li><strong>Air Filtration:</strong> Integrated filtration in ventilation systems</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="text-xl font-bold mb-3 text-green-800">Chemical-Resistant Materials</h4>
                    <ul className="space-y-2 text-green-700">
                      <li><strong>Protected Granules:</strong> Chemical-resistant coating prevents deterioration</li>
                      <li><strong>Enhanced Adhesives:</strong> Industrial-grade sealants resist chemical exposure</li>
                      <li><strong>Premium Underlayment:</strong> Chemical barrier protection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Odessa Color & Style Recommendations</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-brand-brown">Recommended Colors for Industrial Areas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Desert Beige:</strong> Hides industrial dust, reflects heat efficiently</li>
                      <li><strong>Weathered Wood:</strong> Natural appearance, excellent dirt concealment</li>
                      <li><strong>Oyster Shell:</strong> Light color with good stain hiding</li>
                      <li><strong>Antique Silver:</strong> Modern look with practical benefits</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <h4 className="text-lg font-bold mb-3 text-yellow-800">Working Family Considerations</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Choose colors that age gracefully and hide dirt</li>
                      <li>• Medium tones balance heat reflection with maintenance</li>
                      <li>• Avoid pure white (shows every speck) or very dark (excessive heat)</li>
                      <li>• Consider neighborhood standards for resale value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Odessa Environmental Impact Data</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">8.2</div>
                  <div className="text-sm text-gray-700">Air Quality Index<br/>(moderate days/year)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">106°F</div>
                  <div className="text-sm text-gray-700">Average summer<br/>high temperature</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">42</div>
                  <div className="text-sm text-gray-700">Petrochemical<br/>facilities nearby</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">3.6</div>
                  <div className="text-sm text-gray-700">Annual hail<br/>events</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Industrial Environment Installation</h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Pre-Installation Assessment</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                      <span><strong>Air Quality Evaluation:</strong> Assessing proximity to industrial operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                      <span><strong>Chemical Exposure Analysis:</strong> Determining optimal material specifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                      <span><strong>Ventilation Planning:</strong> Designing healthy airflow systems</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Enhanced Protection Installation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                      <span><strong>Air Barrier Systems:</strong> Complete envelope sealing against infiltration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">5</span>
                      <span><strong>Chemical-Resistant Materials:</strong> Premium sealants and barriers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">6</span>
                      <span><strong>Enhanced Ventilation:</strong> Balanced fresh air with filtration</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Installation Timeline & Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 1</h4>
                    <p className="text-sm text-gray-600">Tear-off, air quality assessment, and deck preparation.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 2</h4>
                    <p className="text-sm text-gray-600">Air barrier installation and enhanced underlayment.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 2-3</h4>
                    <p className="text-sm text-gray-600">Chemical-resistant shingle installation with sealed fastening.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">✓</div>
                    <h4 className="font-bold text-brand-brown mb-2">Final</h4>
                    <p className="text-sm text-gray-600">Ventilation installation, sealing verification, and quality control.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Odessa Installation Considerations</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-blue-700 text-sm">
                  <li>• Work schedule coordinated around air quality conditions</li>
                  <li>• Enhanced safety protocols for industrial environment</li>
                  <li>• Complete debris containment and removal</li>
                  <li>• Air quality testing and verification</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Maintenance in Industrial Environment</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Industrial Environment Maintenance</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">Quarterly Inspection Schedule</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li><strong>Spring:</strong> Chemical residue assessment and cleaning</li>
                      <li><strong>Summer:</strong> Heat stress and UV damage evaluation</li>
                      <li><strong>Fall:</strong> Air quality system maintenance</li>
                      <li><strong>Winter:</strong> Seal integrity and ventilation check</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="text-lg font-bold text-red-800 mb-2">Chemical Exposure Monitoring</h4>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li>• Surface cleaning when chemical residue appears</li>
                      <li>• Air filtration system maintenance</li>
                      <li>• Seal inspection for chemical degradation</li>
                      <li>• Professional assessment annually</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Family-Friendly Maintenance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-brand-brown">Simple DIY Monitoring</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Monthly visual inspection from ground level</li>
                      <li>• Check gutters for excessive buildup after storms</li>
                      <li>• Monitor indoor air quality and unusual odors</li>
                      <li>• Document any changes for professional evaluation</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="text-lg font-bold mb-2 text-brand-brown">Professional Services</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Annual comprehensive inspection included</li>
                      <li>• Priority scheduling for working families</li>
                      <li>• Affordable maintenance programs available</li>
                      <li>• Emergency response for storm damage</li>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do petrochemicals affect asphalt shingles in Odessa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Odessa's petrochemical emissions can accelerate shingle deterioration. We use chemical-resistant granules and enhanced sealants designed for industrial exposure. Proper ventilation prevents chemical accumulation in attic spaces.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the most affordable asphalt shingle option for Odessa homes?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Quality architectural shingles start at $10,000-$14,000 in Odessa. We offer financing options for working families. Standard architectural provides 20+ years with proper installation and is much better than basic 3-tab for local conditions.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do Odessa homes need special air quality protection in roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes! Enhanced attic ventilation and sealed roofing systems prevent industrial pollutants from entering living spaces. We install air barriers and filtration systems as standard practice in Odessa's industrial environment.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does asphalt shingle roofing cost in Odessa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Odessa pricing: Architectural $10,000-$14,000, chemical-resistant premium $12,500-$17,500, Class 4 impact-resistant $15,000-$21,000. We offer financing and work with insurance for storm damage claims.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What shingle colors hide Odessa's industrial dust best?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Medium tones like Desert Beige, Weathered Wood, and Oyster Shell hide industrial dust while reflecting heat. Avoid pure white (shows dirt immediately) and very dark colors (excessive heat in desert climate).</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I protect my Odessa home from industrial air pollution?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Sealed roofing systems with enhanced ventilation and filtration. We install synthetic underlayment barriers, sealed penetrations, and properly designed attic airflow to maintain indoor air quality in industrial environments.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Odessa Family Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Chemical-resistant asphalt shingle roofing designed for Odessa's industrial environment. Family-affordable options with financing available. Quality installation protecting your home and health.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Get Free Estimate</a>
          </div>
        </section>
      </div>
    </>
  );
}