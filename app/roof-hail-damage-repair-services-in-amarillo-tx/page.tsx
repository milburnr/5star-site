import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair Amarillo | 5 Star Roofing',
  description: 'Premier hail damage roof repair services in Amarillo TX. Hail Alley specialists with 25+ years experience. Free inspections, insurance claim assistance, Class 4 impact-resistant upgrades. Licensed, bonded, insured. Emergency response available throughout Potter & Randall Counties.',
};

export default function Page() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Hail Damage Repair Services",
                      "url": "/roof-hail-damage-repair-services/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-hail-damage-repair-services-in-amarillo-tx/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-hail-damage-repair-services-in-amarillo-tx/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/roof-hail-damage-repair-services-in-amarillo-tx/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-22-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Roof Hail Damage Repair Services in Amarillo TX</h1>
            <p className="hero-subtitle">Hail Alley Specialists - Free Inspections & Insurance Assistance</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Hail Inspection</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Lead Form - Above the Fold */}
      <div className="container-custom">
        <FadeIn>
          <section id="lead-form" className="section -mt-16 relative z-20">
            <div className="max-w-2xl mx-auto">
              <HighLevelForm
                title="Get Your Free Roof Inspection"
                subtitle="Fill out the form below and we'll contact you within 24 hours. No obligation."
              />
            </div>
          </section>
        </FadeIn>
      </div>


      <div className="container-custom py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl text-gray-700 mb-6">
              <strong>Amarillo sits in the heart of Hail Alley.</strong> When homeowners in Amarillo TX find themselves faced with the aftermath of a hailstorm, addressing <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">roof hail damage</a> promptly becomes their top priority. The Texas Panhandle experiences some of the most severe hail storms in the United States, with baseball to softball-sized hail damaging thousands of roofs every year.
            </p>
            <p className="text-xl text-gray-600">
              At 5 Star Commercial Roofing, we specialize in efficient roof hail damage repair services throughout Amarillo TX and surrounding areas. Our team provides swift and professional <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing</a> services with expert care and top-notch craftsmanship. We handle everything from free inspections to complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof restoration</a>, working directly with your insurance company to maximize your claim.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Our Hail Damage Repair Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Free Hail Damage Inspections</h3>
                <p className="text-gray-700 mb-4">After any Amarillo hail storm, we provide completely free, no-obligation inspections. Our certified roofing contractors use professional techniques to identify all hail damage—including hidden damage invisible to untrained eyes.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 100% free, no obligation</li>
                  <li>✓ Professional photo documentation</li>
                  <li>✓ Insurance-ready damage reports</li>
                  <li>✓ Comprehensive roof assessment</li>
                  <li>✓ Same-day or next-day scheduling</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Claim Assistance</h3>
                <p className="text-gray-700 mb-4">Navigating insurance claims can be overwhelming. We handle all the paperwork, documentation, and communication with your insurance company to ensure you receive the maximum coverage you deserve.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Complete claim documentation</li>
                  <li>✓ Meet with insurance adjusters</li>
                  <li>✓ Professional damage photography</li>
                  <li>✓ Detailed repair estimates</li>
                  <li>✓ Maximize your claim approval</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔨</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Expert Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Our skilled team specializes in repairing all types of hail damage using high-quality materials and proven techniques. We restore your roof to peak condition with comprehensive warranties on all work.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Shingle bruising and granule loss repair</li>
                  <li>✓ Metal roofing dent repair</li>
                  <li>✓ Flashing and vent replacement</li>
                  <li>✓ Complete roof restoration</li>
                  <li>✓ Quality materials built for Hail Alley</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Emergency Repair Services</h3>
                <p className="text-gray-700 mb-4">Severe hail can create immediate leaks and damage. We offer emergency roof repair services to prevent further water damage to your home or business while we work on your insurance claim.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 24/7 emergency response</li>
                  <li>✓ Temporary leak repairs</li>
                  <li>✓ Tarp installation if needed</li>
                  <li>✓ Prevent interior water damage</li>
                  <li>✓ Fast response times</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-yellow-50 border-l-4 border-brand-gold -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Why Choose Us for Hail Damage Repair?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail Alley Experts</h3>
                <p className="text-gray-700">Over 10 years specializing in Texas Panhandle hail damage. We know exactly what to look for and what insurance companies require for full claim approval.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Specialists</h3>
                <p className="text-gray-700">We work directly with all major insurance companies. Our proper documentation and expert negotiation maximize your coverage and minimize out-of-pocket costs.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Craftsmanship</h3>
                <p className="text-gray-700">Premium Class 4 impact-resistant materials from top manufacturers. Comprehensive warranties protect your investment for decades.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Recognizing Hail Damage on Your Roof</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔵 Shingle Bruising & Granule Loss</h3>
                <p className="text-gray-700">Hail impacts create dark spots where granules are knocked off, exposing the asphalt layer underneath. This accelerates aging and leads to leaks within months if not repaired.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💢 Cracked or Broken Shingles</h3>
                <p className="text-gray-700">Large hail can crack shingles completely, creating immediate leak points. Even small cracks allow water penetration during heavy rains.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🎯 Dented Roof Vents & Flashing</h3>
                <p className="text-gray-700">Metal components show obvious dents from hail impacts. These are easy indicators that your shingles likely have hidden damage too.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💧 Water Stains Inside</h3>
                <p className="text-gray-700">Interior water stains or ceiling discoloration after a hail storm indicate roof penetration requiring immediate attention.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">The Hail Damage Repair Process in Amarillo</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Free Inspection & Documentation</h3>
                  <p className="text-gray-700">We conduct a thorough inspection, photographing all damage and creating a comprehensive report. This typically takes 30-60 minutes and is always free.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Insurance Claim Filing</h3>
                  <p className="text-gray-700">We help you file your claim with detailed documentation, photos, and estimates. We can also meet with your adjuster to ensure all damage is recognized.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Claim Approval & Scheduling</h3>
                  <p className="text-gray-700">Once your claim is approved, we schedule your repair or replacement. Most projects are completed in 1-3 days depending on size and weather.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Professional Repair & Restoration</h3>
                  <p className="text-gray-700">Our certified crews complete all repairs using premium materials. We conduct a final inspection and cleanup, leaving your property spotless.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Warranty & Follow-Up</h3>
                  <p className="text-gray-700">All work comes with comprehensive warranties. We follow up after completion to ensure your complete satisfaction.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance Coverage for Hail Damage</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                Most homeowners and commercial insurance policies in Texas cover hail damage 100% (minus your deductible). Insurance companies recognize Amarillo as Hail Alley and expect frequent claims.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">✓ What's Typically Covered:</h3>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Complete roof replacement if damage is severe</li>
                    <li>Repair of damaged shingles, vents, and flashing</li>
                    <li>Code upgrades required by current building standards</li>
                    <li>Matching shingles (or full replacement if match unavailable)</li>
                    <li>Removal and disposal of damaged materials</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">⚠️ Important Deadlines:</h3>
                  <p className="text-gray-700 ml-4">Most insurance policies require claims to be filed within 1 year of the hail event. Don't wait—schedule your free inspection as soon as possible after any hail storm.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Hail Damage Repair Pricing - Amarillo Market 2025</h2>
          <p className="text-lg mb-8 text-center text-gray-600">
            Comprehensive pricing guide for hail damage repairs in Amarillo. Most customers pay only their insurance deductible when damage qualifies for coverage.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Minor Hail Damage</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$2,500-$6,200</div>
              <p className="text-sm text-gray-600 mb-4">Light to moderate granule loss • Scattered impacts</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Spot shingle replacement</li>
                <li>✓ Granule loss repair</li>
                <li>✓ Minor flashing adjustment</li>
                <li>✓ Vent cap replacement</li>
                <li>✓ Gutter system inspection</li>
              </ul>
            </div>
            
            <div className="pricing-card border-2 border-brand-gold rounded-lg p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold">MOST COMMON</div>
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Moderate Hail Damage</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$8,500-$18,500</div>
              <p className="text-sm text-gray-600 mb-4">Significant impacts • Multiple damaged areas</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Extensive shingle replacement</li>
                <li>✓ Metal component repair/replace</li>
                <li>✓ Enhanced flashing work</li>
                <li>✓ Ventilation system upgrade</li>
                <li>✓ Partial roof section rebuild</li>
              </ul>
            </div>
            
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Severe Hail Damage</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$15,000-$35,000+</div>
              <p className="text-sm text-gray-600 mb-4">Complete roof replacement • Structural damage</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Complete roof tear-off</li>
                <li>✓ Full system replacement</li>
                <li>✓ Deck repair if damaged</li>
                <li>✓ Upgrade to Class 4 materials</li>
                <li>✓ Enhanced warranty coverage</li>
              </ul>
            </div>
            
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Commercial Hail Repair</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$8,500-$75,000+</div>
              <p className="text-sm text-gray-600 mb-4">Flat roof systems • Membrane repair/replacement</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ TPO/EPDM membrane repair</li>
                <li>✓ Metal roof restoration</li>
                <li>✓ HVAC unit protection</li>
                <li>✓ Drainage system overhaul</li>
                <li>✓ Emergency leak mitigation</li>
              </ul>
            </div>
            
            <div className="pricing-card border-2 border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Emergency Response</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">$450-$2,850</div>
              <p className="text-sm text-gray-600 mb-4">Immediate leak stoppage • Property protection</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ 24/7 emergency response</li>
                <li>✓ Emergency tarping service</li>
                <li>✓ Immediate leak mitigation</li>
                <li>✓ Interior damage prevention</li>
                <li>✓ Temporary weatherproofing</li>
              </ul>
            </div>
            
            <div className="pricing-card border-2 border-green-500 rounded-lg p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">INSURANCE COVERED</div>
              <h3 className="text-xl font-bold mb-3 text-brand-brown">Insurance Claim Work</h3>
              <div className="text-3xl font-bold text-brand-gold mb-4">Deductible Only</div>
              <p className="text-sm text-gray-600 mb-4">Full claim management • Maximum coverage</p>
              <ul className="text-left space-y-2 text-sm">
                <li>✓ Complete damage documentation</li>
                <li>✓ Insurance company negotiation</li>
                <li>✓ Adjuster meeting coordination</li>
                <li>✓ Supplement claim assistance</li>
                <li>✓ Code upgrade coverage help</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 rounded">
            <h4 className="font-bold mb-3">⛈️ Amarillo Hail Damage Cost Factors:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li><strong>Hail Size Impact:</strong> Golf ball+ hail typically qualifies for full replacement</li>
                <li><strong>Age of Roof:</strong> Roofs over 10 years more susceptible to insurance approval</li>
                <li><strong>Impact Density:</strong> 8+ hits per test square = replacement approved</li>
                <li><strong>Material Type:</strong> Standard shingles more prone to damage than Class 4</li>
              </ul>
              <ul className="space-y-2">
                <li><strong>Claim Timeline:</strong> File within 1 year of storm date for coverage</li>
                <li><strong>Upgrade Options:</strong> Insurance often covers Class 4 upgrade costs</li>
                <li><strong>Emergency Response:</strong> Immediate tarping prevents claim denial</li>
                <li><strong>Documentation:</strong> Professional photos essential for claim success</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Amarillo Hail Patterns & Historical Data</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-brown">Hail Season Patterns in Amarillo</h3>
              <ul className="space-y-3">
                <li><strong>Peak Season:</strong> April through June with 68% of annual hail events</li>
                <li><strong>Average Annual Events:</strong> 35+ days with hail, 8-12 significant storms</li>
                <li><strong>Typical Hail Size:</strong> Quarter to golf ball size, with softball-sized events 2-3x annually</li>
                <li><strong>Damage Frequency:</strong> Major insurance events every 3-5 years historically</li>
                <li><strong>Geographic Impact:</strong> Southwest Amarillo receives 15% more hail than downtown</li>
                <li><strong>Time of Day:</strong> 70% of severe hail occurs between 4PM-9PM</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-brown">Recent Major Hail Events</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded shadow">
                  <h4 className="font-bold mb-2">May 2024 Supercell</h4>
                  <p className="text-sm text-gray-600">Tennis ball to softball sized hail • $127M in damage • 15,000+ claims filed</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                  <h4 className="font-bold mb-2">April 2023 Outbreak</h4>
                  <p className="text-sm text-gray-600">Golf ball hail across Amarillo • $89M in damage • 12,400+ claims</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                  <h4 className="font-bold mb-2">June 2022 Event</h4>
                  <p className="text-sm text-gray-600">Baseball sized hail in Wolflin area • $56M in damage • 8,900+ claims</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                  <h4 className="font-bold mb-2">May 2021 Storm</h4>
                  <p className="text-sm text-gray-600">Multiple hail shafts across Potter County • $78M in damage • 11,200+ claims</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Advanced Hail Damage Assessment Techniques</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Professional Inspection Methods</h3>
              <ul className="text-sm space-y-2">
                <li>• Drone photography for comprehensive coverage</li>
                <li>• Test square measurement and documentation</li>
                <li>• Impact damage density calculations</li>
                <li>• Hidden damage detection techniques</li>
                <li>• Granule loss percentage assessment</li>
                <li>• Metal component impact evaluation</li>
                <li>• Thermal imaging for moisture detection</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Insurance-Grade Documentation</h3>
              <ul className="text-sm space-y-2">
                <li>• High-resolution damage photography</li>
                <li>• Detailed measurement reports</li>
                <li>• Impact density mapping</li>
                <li>• Material degradation analysis</li>
                <li>• Code compliance assessments</li>
                <li>• Comparison photo documentation</li>
                <li>• Professional damage sketches</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Class 4 Upgrade Analysis</h3>
              <ul className="text-sm space-y-2">
                <li>• Current vs. impact-resistant comparison</li>
                <li>• Insurance discount calculations</li>
                <li>• Long-term cost benefit analysis</li>
                <li>• Performance upgrade recommendations</li>
                <li>• Warranty enhancement options</li>
                <li>• Energy efficiency improvements</li>
                <li>• Property value impact assessment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Customer Success Stories - Hail Damage Claims</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">Southwest Amarillo Hail Event - May 2024</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Property:</strong> 3,100 sq ft two-story home with architectural shingles (2019 installation)
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Damage:</strong> Tennis ball sized hail created 14 impacts per test square, extensive granule loss, damaged gutters and vents
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Our Process:</strong> Complete documentation, adjuster meeting, supplement negotiation for code upgrades
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Insurance Settlement:</strong> $34,750 approved with Class 4 upgrade coverage
              </p>
              <p className="text-sm font-semibold text-green-600">Customer Result: $2,000 deductible payment • GAF Timberline HDZ upgrade • 5-year workmanship warranty</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-3 text-brand-brown">North Heights Historic Home - April 2023</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Property:</strong> 1,850 sq ft 1940s home with original clay tiles requiring historic preservation compliance
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Challenge:</strong> Golf ball hail damaged irreplaceable historic tiles, insurance initially denied claim
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Our Advocacy:</strong> Extensive documentation, expert testimony, supplement filing for specialty materials
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Final Settlement:</strong> $28,500 approved after appeal with specialty tile sourcing covered</p>
              <p className="text-sm font-semibold text-green-600">Outcome: Historic character preserved • Modern performance achieved • $1,500 customer investment beyond deductible</p>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">🌩️ Recent Hail Storm in Amarillo?</h2>
            <p className="text-lg text-gray-800 mb-6">
              Don't wait to assess the damage. Even if you don't see obvious problems, hidden hail damage can lead to expensive leaks and interior damage over time. Our free inspection takes less than an hour and provides peace of mind.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl font-bold text-blue-800 mb-2">📞 Schedule Your Free Hail Damage Inspection</p>
              <p className="text-gray-700">Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> or <a href="/contact/" className="text-brand-gold font-bold">request online</a>. We'll inspect your roof within 24-48 hours—completely free with no obligation.</p>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded">
                  <div className="text-2xl mb-2">⏱️</div>
                  <p className="font-bold">24-48 Hour Response</p>
                  <p className="text-sm text-gray-600">Fast scheduling after any hail event</p>
                </div>
                <div className="p-4 bg-blue-50 rounded">
                  <div className="text-2xl mb-2">💯</div>
                  <p className="font-bold">100% Free Inspection</p>
                  <p className="text-sm text-gray-600">No cost, no obligation assessment</p>
                </div>
                <div className="p-4 bg-blue-50 rounded">
                  <div className="text-2xl mb-2">📸</div>
                  <p className="font-bold">Professional Documentation</p>
                  <p className="text-sm text-gray-600">Insurance-ready damage reports</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Expert Hail Damage Repair in Amarillo TX</h2>
            <p className="cta-text">Hail Alley specialists with over 10 years experience. Free inspections, insurance assistance, and quality repairs backed by comprehensive warranties.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Free Hail Inspection</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">Related Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Roof Replacement</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Roof Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/contact/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Contact Us</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Hail Damage Repair","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"telephone":"+18066226041","address":{"@type":"PostalAddress","streetAddress":"2909 S Western St","addressLocality":"Amarillo","addressRegion":"TX","postalCode":"79109","addressCountry":"US"}},"areaServed":[{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Odessa","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Lubbock","containedInPlace":{"@type":"State","name":"Texas"}}],"offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free hail damage inspections"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Hail Damage Repair Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Free Hail Damage Inspections"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Insurance Claim Assistance"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Hail Damage Repair"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Emergency Repair Services"}}]}})}}/>
    </div>
  );
}
