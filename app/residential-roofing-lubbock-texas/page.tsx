import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/residential-roofing-lubbock-texas/' },
  title: 'Residential Roofing in Lubbock TX| Hail Damage Specialists',
  description: 'Residential Roofing in Lubbock, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function ResidentialLubbockPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Lubbock", url: "/residential-roofing-lubbock-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-lubbock-texas/#localbusiness",
        "name": "5 Star Commercial Roofing - Lubbock Residential Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5779, "longitude": -101.8552 },
        "url": "https://5starroofingpros.com/residential-roofing-lubbock-texas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert residential roofing services in Lubbock, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-2-1920w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Residential Roofing in Lubbock, TX</h1>
            <p className="hero-subtitle">Hail Alley Roofing Specialists</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Inspection</a>
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
              <strong>Lubbock sits in the heart of Hail Alley.</strong> The South Plains experiences some of Texas's most severe hail storms, with baseball to softball-sized hail common from March through September. Your home needs protection built for this reality.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> for Lubbock's unique challenges. Complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacements</a>, <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage repairs</a>, insurance claim assistance, and preventive maintenance—all with materials proven in Hail Alley conditions. We also serve <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:underline">Midland</a>, <a href="/residential-roofing-odessa-texas/" className="text-brand-gold hover:underline">Odessa</a>, and throughout West Texas.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Residential Roofing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">New Roof Installation</h3>
                <p className="text-gray-700 mb-4">Complete roof replacements using premium materials engineered for Lubbock's severe weather. Impact-resistant shingles, metal systems, and more.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Class 4 impact-resistant shingles</li>
                  <li>✓ Architectural shingles (30-50 year)</li>
                  <li>✓ Metal roofing systems</li>
                  <li>✓ Complete tear-off & replacement</li>
                  <li>✓ Comprehensive warranties</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Lubbock's frequent large hail demands expert damage detection and restoration. We handle everything from inspection to insurance to installation.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free hail damage inspections</li>
                  <li>✓ Professional photo documentation</li>
                  <li>✓ Insurance claim assistance</li>
                  <li>✓ Work directly with adjusters</li>
                  <li>✓ Complete restoration services</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Roof Repairs</h3>
                <p className="text-gray-700 mb-4">Fast, reliable repairs for leaks, storm damage, and normal wear. Quality materials and expert workmanship on every job.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection & repair</li>
                  <li>✓ Shingle replacement</li>
                  <li>✓ Flashing repairs</li>
                  <li>✓ Wind damage fixes</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Roof Inspections</h3>
                <p className="text-gray-700 mb-4">Thorough inspections for home purchases, insurance requirements, or after major storms. Detailed reports with photo documentation.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free inspections available</li>
                  <li>✓ Comprehensive written reports</li>
                  <li>✓ Professional photography</li>
                  <li>✓ Insurance-ready documentation</li>
                  <li>✓ Preventive maintenance plans</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Lubbock Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail Alley Experts</h3>
                <p className="text-gray-700">Over 10 years handling Lubbock's severe hail. We know what to look for and what insurance companies require.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Specialists</h3>
                <p className="text-gray-700">We work directly with your insurance company, maximizing coverage and minimizing your out-of-pocket costs.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Materials</h3>
                <p className="text-gray-700">Premium impact-resistant shingles and metal systems from top manufacturers. Comprehensive warranties on all work.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Lubbock Roofing Challenges</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🌪️ Severe Hail Storms</h3>
                <p className="text-gray-700">Lubbock is ground zero for hail. The South Plains experiences golf ball to baseball-sized hail regularly. Even new roofs can be destroyed in a single storm without proper impact resistance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💨 High Wind Events</h3>
                <p className="text-gray-700">Lubbock is one of America's windiest cities. High winds can lift hail-weakened shingles and cause blow-offs. Proper installation and high-wind rated materials are critical.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">☀️ UV & Heat Exposure</h3>
                <p className="text-gray-700">With 260+ days of sunshine and summer temps over 100°F, UV exposure rapidly ages roofing materials. Hail damage accelerates this by exposing asphalt layers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🏜️ Dust Storms</h3>
                <p className="text-gray-700">West Texas dust storms deposit debris that can clog drainage, damage shingles, and create leaks. Regular inspections catch these problems early.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Lubbock Housing Market & Roofing Insights</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🏡 Lubbock Housing Market Overview</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">Lubbock County's population of 310,000+ and its position as the economic hub of the South Plains creates steady demand for quality roofing services. The city's affordable housing market, anchored by Texas Tech University and strong agricultural/healthcare sectors, supports consistent property investment.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Median home value:</strong> $138,500</li>
                      <li>• <strong>Average home size:</strong> 1,780 sq ft</li>
                      <li>• <strong>Median home age:</strong> 38 years</li>
                      <li>• <strong>New construction permits:</strong> 680+ annually</li>
                      <li>• <strong>Homeownership rate:</strong> 58.2%</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">Lubbock's location in Hail Alley creates unique roofing replacement cycles. The city experiences major hail events every 3-5 years, leading to widespread roof damage and subsequent insurance-driven replacement projects.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Annual hail days:</strong> 7.4 (2nd highest in Texas)</li>
                      <li>• <strong>Average wind speed:</strong> 12.4 mph</li>
                      <li>• <strong>Roofing insurance claims:</strong> $89M annually</li>
                      <li>• <strong>Peak storm season:</strong> April-June</li>
                      <li>• <strong>Temperature range:</strong> -5°F to 102°F</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🏘️ Popular Lubbock Neighborhoods & Roofing Considerations</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Tech Terrace</h4>
                    <p className="text-gray-700 text-sm mb-2">Historic neighborhood near Texas Tech with homes from 1920s-1960s. Many feature original clay tile roofs requiring specialized replacement with modern materials.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $165,000 | Typical issues: aging clay tiles, inadequate ventilation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Monterey</h4>
                    <p className="text-gray-700 text-sm mb-2">Established residential area with homes built 1960s-1980s. Standard asphalt shingle roofs common, many reaching end-of-life and needing impact-resistant upgrades.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $125,000 | Typical issues: 20-25 year old shingles, wind damage</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Southwest Lubbock</h4>
                    <p className="text-gray-700 text-sm mb-2">Newer developments with homes from 1990s-2010s. Focus on proper installation of Class 4 impact-resistant systems and enhanced ventilation.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $180,000 | Typical issues: builder-grade materials, hail vulnerability</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">North Lubbock</h4>
                    <p className="text-gray-700 text-sm mb-2">Mix of older and newer homes. Common roofing issues include storm damage from frequent hail and wind events affecting the exposed northern areas of the city.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $115,000 | Typical issues: frequent storm damage, older systems</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Frenship</h4>
                    <p className="text-gray-700 text-sm mb-2">Growing suburban area with newer construction. Premium roofing materials and proper wind resistance critical due to exposure on the plains.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $195,000 | Typical issues: wind exposure, new construction warranty</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Westwind</h4>
                    <p className="text-gray-700 text-sm mb-2">Upscale neighborhood with larger homes requiring premium roofing systems. Metal roofing and architectural shingles popular for longevity and appearance.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $225,000 | Typical issues: complex roof lines, premium material needs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Detailed Residential Roofing Costs in Lubbock</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-semibold mb-4">2025 Lubbock Roof Replacement Pricing:</p>
                  <ul className="space-y-3">
                    <li><strong>Compact homes (1,000-1,400 sq ft):</strong> $6,500 - $9,200
                      <br /><span className="text-sm text-gray-600">Typical starter homes, 10-14 squares</span>
                    </li>
                    <li><strong>Standard homes (1,400-2,000 sq ft):</strong> $9,200 - $13,500
                      <br /><span className="text-sm text-gray-600">Ranch and small two-story, 14-20 squares</span>
                    </li>
                    <li><strong>Large homes (2,000-2,800 sq ft):</strong> $13,500 - $19,500
                      <br /><span className="text-sm text-gray-600">Two-story or complex ranch, 20-28 squares</span>
                    </li>
                    <li><strong>Premium homes (2,800-3,500 sq ft):</strong> $19,500 - $26,000
                      <br /><span className="text-sm text-gray-600">Large two-story, complex architecture, 28-35 squares</span>
                    </li>
                    <li><strong>Luxury homes (3,500+ sq ft):</strong> $26,000 - $40,000+
                      <br /><span className="text-sm text-gray-600">Custom homes, premium materials, 35+ squares</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-4">Material Upgrade Options:</p>
                  <ul className="space-y-3">
                    <li><strong>Standard Architectural Shingles:</strong> $90-$115/sq
                      <br /><span className="text-sm text-gray-600">25-30 year warranty, basic protection</span>
                    </li>
                    <li><strong>Class 4 Impact-Resistant:</strong> $110-$140/sq
                      <br /><span className="text-sm text-gray-600">ESSENTIAL for Lubbock, insurance discounts</span>
                    </li>
                    <li><strong>Premium Architectural:</strong> $130-$160/sq
                      <br /><span className="text-sm text-gray-600">50-year warranty, enhanced aesthetics</span>
                    </li>
                    <li><strong>Standing Seam Metal:</strong> $170-$260/sq
                      <br /><span className="text-sm text-gray-600">40-70 year life, excellent hail resistance</span>
                    </li>
                    <li><strong>Stone-Coated Steel:</strong> $185-$285/sq
                      <br /><span className="text-sm text-gray-600">Tile appearance, metal durability</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-brand-brown mb-4">💰 Lubbock-Specific Cost Factors</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">Hail Damage Replacement</p>
                    <p className="text-sm text-gray-600">Insurance typically covers 100% of replacement costs minus deductible. We handle all paperwork and adjuster meetings to maximize your claim value.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Wind Resistance Upgrades</p>
                    <p className="text-sm text-gray-600">Enhanced fastening and wind-rated materials add $2-4/sq but crucial for Lubbock's wind exposure. Required for optimal warranty coverage.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Multiple Layer Removal</p>
                    <p className="text-sm text-gray-600">Many Lubbock homes have 2+ layers requiring additional removal cost of $1.50-3/sq. Proper decking inspection essential after removal.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Ventilation Improvements</p>
                    <p className="text-sm text-gray-600">Critical for Lubbock's hot summers. Ridge vent and soffit upgrades add $2-4/linear foot but significantly extend roof life.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-brand-brown mb-2">💡 Insurance & Financing Information</p>
                <p className="text-gray-700">Lubbock's frequent hail means most roof replacements are insurance-covered. We offer 0% financing for 12-24 months and extended payment plans up to 144 months. Free estimates: <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a>.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Lubbock's Extreme Weather Impact on Roofs</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🌪️ Detailed Hail Analysis for Lubbock</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Historic Hail Events</h4>
                    <p className="text-gray-700 mb-3">Lubbock has experienced devastating hail events that have reshaped roofing standards across the South Plains. The city averages 7.4 hail days annually, with stones frequently exceeding 2 inches in diameter.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• May 2019: 4.25" hail caused $2.2B in damage</li>
                      <li>• June 2021: Golf ball sized hail, 80% roof damage rate</li>
                      <li>• April 2023: 3" hail with 60+ mph winds</li>
                      <li>• Average annual claims: $89 million</li>
                      <li>• Peak season: April-June (78% of events)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Hail Size Impact on Roofs</h4>
                    <p className="text-gray-700 mb-3">Understanding hail damage helps homeowners recognize when replacement is necessary versus minor repairs.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Pea-sized (0.25"):</strong> Minor granule loss</li>
                      <li>• <strong>Marble-sized (0.5"):</strong> Moderate damage, exposed mat</li>
                      <li>• <strong>Quarter-sized (1"):</strong> Significant impact marks, leaks</li>
                      <li>• <strong>Golf ball (1.75"):</strong> Cracked shingles, system damage</li>
                      <li>• <strong>Tennis ball (2.5"+):</strong> Total replacement required</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">💨 Wind Patterns & Roof Stress</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">Lubbock ranks among America's windiest cities, with average speeds of 12.4 mph and regular gusts exceeding 40 mph. This constant wind stress, combined with hail damage, creates premature roof failure.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Spring Wind Events</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Peak gust: 84 mph (March 2021)</li>
                        <li>• Average spring gusts: 45+ mph</li>
                        <li>• Direction: Southwest dominant</li>
                        <li>• Duration: 6-12 hour events common</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Dust Storm Impacts</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 15-20 major dust events annually</li>
                        <li>• Sandblasting effect on shingles</li>
                        <li>• Debris accumulation in valleys</li>
                        <li>• Accelerated granule loss</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Wind Load Requirements</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Building code: 90 mph rating</li>
                        <li>• Enhanced nailing patterns required</li>
                        <li>• Edge securement critical</li>
                        <li>• Regular inspection recommended</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions - Lubbock Roofing</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">When should I replace my roof after hail damage in Lubbock?</h3>
                <p className="text-gray-700">If hail was quarter-sized or larger and you see exposed mat or cracked shingles, replacement is typically needed. Even minor hail damage accelerates aging due to Lubbock's intense UV exposure. We provide free damage assessments and work with your insurance adjuster to document all damage.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">Are Class 4 impact-resistant shingles worth it in Lubbock?</h3>
                <p className="text-gray-700">Absolutely essential. Class 4 shingles can withstand 2" hail impacts and qualify for 20-35% insurance discounts on wind/hail coverage. Given Lubbock's hail frequency, they typically pay for themselves within 3-5 years through insurance savings alone.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">How long do roofs typically last in Lubbock?</h3>
                <p className="text-gray-700">Standard asphalt shingles last 15-20 years in Lubbock due to hail and extreme weather. Class 4 impact-resistant shingles extend this to 25-30 years, while quality metal roofs can last 40-50+ years despite frequent hail exposure.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">Do I need permits for roof replacement in Lubbock?</h3>
                <p className="text-gray-700">Yes, the City of Lubbock requires building permits for roof replacements. Current fees are $50 for residential projects. We handle all permitting, including structural plans if needed, and coordinate required inspections as part of our comprehensive service.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">What's the best roofing material for Lubbock's climate?</h3>
                <p className="text-gray-700">For maximum protection: Class 4 impact-resistant architectural shingles or standing seam metal. Metal offers the best long-term value despite higher upfront costs. For budget-conscious homeowners, Class 4 architectural shingles provide excellent protection with insurance discounts.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Best Roofing Materials for Lubbock</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Class 4 Impact-Resistant Shingles</h3>
                <p className="text-gray-700 mb-3">Non-negotiable for Lubbock homes. Class 4 shingles withstand large hail impacts and qualify for insurance discounts of 20-35%. Essential in Hail Alley.</p>
                <p className="text-gray-600 mb-2"><strong>Best For:</strong> Hail protection, insurance savings</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 30-50 years</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Metal Roofing</h3>
                <p className="text-gray-700 mb-3">Excellent for Lubbock. Metal roofs shed hail impacts, reflect heat (reducing cooling costs), and last 50-70 years. Initial cost pays for itself over time.</p>
                <p className="text-gray-600 mb-2"><strong>Best For:</strong> Long-term value, energy efficiency</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 40-70 years</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Protect Your Lubbock Home</h2>
            <p className="cta-text">Expert residential roofing built for Hail Alley. Free inspections and comprehensive insurance assistance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Schedule Inspection</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Lubbock Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/lubbock-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Lubbock Services</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-lubbock-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/metal-roof-installation-lubbock-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Metal Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Amarillo Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Midland Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/contact/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Contact Us</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Residential Roofing","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"address":{"@type":"PostalAddress","streetAddress":"2909 S Western St","addressLocality":"Amarillo","addressRegion":"TX","postalCode":"79109","addressCountry":"US"}},"areaServed":[{"@type":"City","name":"Lubbock","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Odessa","containedInPlace":{"@type":"State","name":"Texas"}}],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Residential Roofing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"New Roof Installation"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Hail Damage Repair"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Repairs"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Inspections"}}]}})}}/>
    </div>
  );
}
