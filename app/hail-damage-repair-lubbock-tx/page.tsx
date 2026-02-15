import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/hail-damage-repair-lubbock-tx/' },
  title: 'Hail Damage Roof Repair in Lubbock | 5 Star',
  description: "Expert hail damage roof repair in Lubbock TX. , insurance claim help, quality roofing materials. Free inspections. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairLubbockPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Lubbock", url: "/hail-damage-repair-lubbock-tx/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-lubbock-tx/#localbusiness",
        "name": "5 Star Commercial Roofing - Lubbock Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5779, "longitude": -101.8552 },
        "url": "https://5starroofingpros.com/hail-damage-repair-lubbock-tx/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Lubbock, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      {/* Hero Section - Conversion-Optimized */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-lubbock-45-1280w.webp)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Free Hail Damage Inspection - We Handle Your Insurance Claim
            </h1>
            <p className="hero-subtitle">
              273 Hail Events Last Year • Same-Day Response • 300+ Approved Claims
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero">
                📞 Call (806) 622-6041
              </a>
              <a href="#lead-form" className="btn-secondary-hero">
                Get Free Inspection
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom">
        {/* Lead Form - Above the Fold */}
        <FadeIn>
          <section id="lead-form" className="section -mt-16 relative z-20">
            <div className="max-w-2xl mx-auto">
              <HighLevelForm
                title="Get Your Free Hail Damage Inspection"
                subtitle="No Obligation. We Handle Insurance Claims & Approvals. Fill out the form and we'll respond within 24 hours."
              />
            </div>
          </section>
        </FadeIn>

        {/* Trust Signal */}
        <FadeIn>
          <section className="section">
            <div className="text-center mb-8">
              <div className="text-5xl mb-3">⭐⭐⭐⭐⭐</div>
              <h2 className="text-2xl font-bold mb-2">300+ Successful Insurance Claims</h2>
              <p className="text-lg text-gray-600">Lubbock&apos;s Most Trusted Hail Damage Experts Since 2010</p>
            </div>
          </section>
        </FadeIn>

        {/* Introduction */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Lubbock's Hail Damage Roofing Specialists Since 2010
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                If you own property in Lubbock, Texas, hail damage isn't a question of "if" - it's a question of "when." Lubbock sits dead center in "Hail Alley," experiencing more severe hail than virtually any other major Texas city. In the past 12 months alone, Lubbock County recorded 273 separate hail reports. That's almost one hail event every single day. From Tech Terrace to Shadow Hills, from Arnett Benson to Whisperwood, no neighborhood is immune.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                5 Star Commercial Roofing has navigated Lubbock's brutal hail environment for over a decade. We've processed over 300 Lubbock insurance claims, worked with every major carrier operating in the Hub City, secured hundreds of City of Lubbock building permits, and installed countless Class 4 impact-resistant roofing systems specifically engineered for our region's catastrophic hail patterns. We don't just repair hail damage - we protect Lubbock properties from the next inevitable storm.
              </p>
              <div className="bg-brand-gold-light p-6 rounded-lg border-l-4 border-brand-gold">
                <p className="text-lg font-semibold text-brand-brown mb-2">
                  Why Lubbock Property Owners Trust 5 Star:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>273 hail events tracked last year</strong> - we know every storm pattern</li>
                  <li>✓ <strong>Lubbock licensed contractor</strong> - fully bonded, insured, City of Lubbock approved</li>
                  <li>✓ <strong>300+ successful insurance claims</strong> - we get approvals others miss</li>
                  <li>✓ <strong>Same-day inspections</strong> after major storms throughout Lubbock County</li>
                  <li>✓ <strong>Property manager accounts available</strong> - serving Texas Tech area landlords</li>
                  <li>✓ <strong>We navigate Lubbock building codes</strong> - permits, inspections, compliance handled</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 2023: Lubbock's Record Hail Year */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="section-title">2023: Lubbock's Historic Hail Year - What Happened</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                2023 will go down in Lubbock history as one of the most destructive hail years on record. According to National Weather Service data from the Lubbock office, the South Plains region experienced <strong>141 days with large hail</strong> - the most since comprehensive hail tracking began in 2003. To put that in perspective, that's hail nearly 40% of all days in the year. Several events produced catastrophic damage:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">June 1, 2023: Woodrow Softball Hail</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    The worst single event of 2023 occurred on June 1st when a supercell thunderstorm tracked northeast across Lubbock County. Near Woodrow (east of Lubbock), trained storm spotters and law enforcement reported hailstones <strong>measuring 4 inches in diameter</strong> - official softball size. These massive hailstones fell for nearly 15 minutes, completely destroying hundreds of roofs in eastern Lubbock neighborhoods.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Damage scope:</strong> Every roof in the storm's path sustained severe damage. Asphalt shingles were shredded down to bare decking. Siding was punctured. Vehicles were totaled. We personally inspected 47 properties in Arnett Benson and Monterey neighborhoods following this storm - 100% required complete roof replacement. Insurance claims exceeded $50 million across eastern Lubbock.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">May 12-13, 2023: Repeated Hail Events</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    In a particularly cruel pattern, Lubbock was hit by two separate severe hail storms within 24 hours. The first event on May 12th evening brought golf ball-sized hail (1.75 inches) across central Lubbock, damaging roofs from Tech Terrace through downtown to Loop 289. Before property owners could even assess damage, a second storm the following afternoon produced baseball-sized hail (2.75 inches) that tracked across similar areas.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Compounding damage:</strong> This double-hit scenario is particularly devastating. Roofs already compromised by the first storm sustained catastrophic damage from the second. We documented properties where the first storm removed protective granules and the second storm punched completely through shingle layers. Every major insurance carrier in Lubbock was overwhelmed with claims.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">March Through October: Relentless Pattern</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Beyond these headline events, Lubbock experienced dozens of "smaller" hail storms throughout spring, summer, and fall 2023. Quarter to golf ball-sized hail fell regularly across different parts of Lubbock County. While individual storms may not have caused immediate catastrophic damage, the cumulative effect was severe - repeated hail impacts gradually destroying shingle integrity across the entire city.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-lg border-2 border-red-300">
                <h3 className="text-xl font-bold text-red-700 mb-3">The Climate Reality: This Is Our New Normal</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Meteorologists and climate scientists studying South Plains weather patterns have reached a sobering conclusion: severe hail events are intensifying in frequency and size. The collision of warm, moist Gulf air with dry air from the Rockies - the exact atmospheric setup that creates Lubbock's hailstorms - is occurring more often as global temperatures rise. The National Weather Service Lubbock office has documented increasing hail frequency every decade since 1990.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  What this means for Lubbock property owners: Standard asphalt shingles are inadequate. Class 4 impact-resistant roofing systems are no longer optional - they're essential protection for your largest investment. And most insurance companies now offer premium discounts for Class 4 installations, offsetting much of the additional cost.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* May 2024 Update */}
        <FadeIn delay={0.2}>
          <section className="section">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
                May 2024: The Pattern Continues
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Just when Lubbock property owners hoped 2023 was an anomaly, May 2024 brought another series of devastating hail events to the South Plains. Multiple supercell thunderstorms tracked across the region, with particularly severe events near Whiteface and Levelland (west of Lubbock) producing <strong>record-breaking hailstones measured at 4.5+ inches</strong> - larger than softballs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While the largest hail narrowly missed central Lubbock, suburbs and western neighborhoods still experienced golf to baseball-sized hail. Shadow Hills, Lakeridge, and southwest Lubbock properties sustained significant damage. We completed 62 inspections in the 10 days following the May 2024 storms, with approximately 70% requiring complete roof replacement.
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-700 leading-relaxed font-semibold mb-3">
                  Did your property experience the May 2024 storms?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Even if you didn't notice obvious damage, hail impacts can compromise your roof's integrity without creating immediate visible leaks. Granule loss, bruising on shingle backing, and micro-fractures in sealant all reduce your roof's protective capability and lifespan. Insurance companies have specific time limits for filing hail damage claims - typically one year from the storm date. Don't wait until you have leaks to discover your roof was damaged months ago.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Our Hail Damage Process */}
        <FadeIn delay={0.3}>
          <section className="section bg-brand-gold-light p-12 rounded-lg">
            <h2 className="section-title">Our Complete Hail Damage Restoration Process</h2>
            <div className="max-w-4xl mx-auto space-y-8">

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-brand-gold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown mb-3">Free Comprehensive Inspection</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We start with a thorough inspection using professional-grade equipment including drone technology with 4K cameras to capture damage invisible from ground level. Our inspectors are trained to identify even subtle hail damage patterns - test impacts on ridge caps, shingle bruising on backing material, granule displacement patterns, compromised sealant strips, and fractured flashing.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>What we document:</strong> GPS-tagged photographs of every damage location, detailed measurements of hail impact size and density (impacts per 10'x10' section), professional damage assessment report formatted to insurance company standards, inspection of gutters, vents, flashing, and all roof penetrations, and attic interior moisture check for previous leak damage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-brand-gold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Claim Assistance</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      With over 300 successful Lubbock insurance claims processed, we know exactly what every major carrier requires for approval. We work with State Farm (Jason Grisham, Peter Griffith, Chris Prather, Ana Borrego), Farmers (Rebecca Craycraft, Cassandra Hernandez, Scott Fillingim), Allstate (Patrick Bailey), USAA, Nationwide, Liberty Mutual, and all other carriers operating in Lubbock.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>We provide:</strong> Complete damage documentation package meeting carrier-specific requirements, professional photographs and drone imagery, detailed scope of work with material specifications, assistance scheduling adjuster inspection, presence during adjuster visit to point out all damage, supplemental claims for additional damage missed in initial assessment, and negotiation with carriers when initial estimates are inadequate.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold text-brand-brown">
                      Important: Most hail damage claims in Lubbock are covered 100% by insurance minus your deductible. We've successfully helped homeowners get full roof replacements approved when they initially thought they only had minor damage. Don't assume your damage isn't covered - let us inspect and document professionally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-brand-gold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown mb-3">City of Lubbock Permits & Code Compliance</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      All roof replacements in Lubbock require building permits from the City of Lubbock Building Inspection Division. Their office is located at 1314 Avenue K (downtown Lubbock civic center) and can be reached at <strong>(806) 775-2673</strong>. We handle the entire permitting process so you don't have to navigate city bureaucracy.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Permit requirements we manage:</strong> Complete permit application with contractor license verification, approved engineering calculations for wind load (Lubbock is in a high-wind zone requiring enhanced fastening), materials specification showing code-compliant products, building department plan review and approval, scheduled inspections during installation, and final inspection sign-off for insurance and resale documentation.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Lubbock Building Codes:</strong> The City of Lubbock has adopted the 2021 International Residential Code (IRC) with local amendments for West Texas conditions. This includes requirements for wind-rated shingles (minimum 110 mph rating), enhanced fastening patterns (6 nails per shingle in high-wind zones), Class 4 impact-resistant materials in hail-prone areas, proper attic ventilation (critical for Lubbock's extreme heat), and ice/water shield at vulnerable areas despite our climate (code requirement).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-brand-gold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown mb-3">Professional Installation with Premium Materials</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Once your claim is approved and permits are secured, we schedule installation at your convenience. Most Lubbock residential roofs are completed in 1-2 days depending on size and complexity. We use only premium materials specifically rated for Lubbock's extreme climate conditions.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Materials we recommend for Lubbock:</strong>
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-6 mb-3">
                      <li>• <strong>Class 4 Impact-Resistant Shingles:</strong> GAF Timberline HDZ RS, Owens Corning Duration Storm, CertainTeed NorthGate Class 4 - all tested to withstand 2-inch steel balls dropped from 20 feet (simulating severe hail)</li>
                      <li>• <strong>High-Wind Rated:</strong> Minimum 130 mph wind rating with proper installation (standard shingles are only rated 60-80 mph)</li>
                      <li>• <strong>UV-Stabilized:</strong> Enhanced granule adhesion and UV-resistant compounds for Lubbock's intense sun at 3,256' elevation</li>
                      <li>• <strong>Reflective Options:</strong> "Cool roof" colors that reflect heat, reducing attic temperatures by 20-30 degrees and cutting cooling costs</li>
                      <li>• <strong>Extended Warranties:</strong> Manufacturer warranties up to 50 years plus our 10-year workmanship guarantee</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Installation standards:</strong> Complete tear-off to decking (no layovers - Lubbock codes prohibit this anyway), decking inspection and repair of any storm damage, ice/water shield at all valleys and penetrations, synthetic underlayment (far superior to felt paper in heat), proper drip edge installation, enhanced fastening pattern (6 nails per shingle), ridge vent installation for optimal attic ventilation, and complete cleanup with magnetic sweep for nails.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-brand-gold">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown mb-3">Final Inspection & Warranty Documentation</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We schedule the City of Lubbock final building inspection and ensure everything passes the first time. You'll receive complete documentation including permit closure paperwork, manufacturer warranty registration, our workmanship warranty certificate, and professional photographs of your completed roof.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      This documentation is essential for insurance records, future claims, and property resale. We also provide maintenance recommendations specific to Lubbock's climate and schedule optional annual inspections to ensure your roof continues protecting your property for decades.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* Texas Tech Area Properties */}
        <FadeIn delay={0.4}>
          <section className="section">
            <h2 className="section-title">Texas Tech Area Properties: Special Considerations</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Texas Tech University is the economic and cultural heart of Lubbock, and the neighborhoods surrounding campus - particularly Tech Terrace, North Overton, and South Overton - present unique roofing challenges and opportunities. With over 40,000 students and thousands of rental properties, this area demands specialized expertise.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <InteractiveCard>
                  <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-midland-6-1280w.jpg" alt="Property management roofing services in Lubbock TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-brand-brown mb-4">Property Managers & Landlords</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you own multiple rental properties near Texas Tech, we offer property management accounts with benefits designed for your business:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Volume pricing</strong> for multiple properties</li>
                    <li>✓ <strong>Expedited service</strong> - we understand vacancy costs</li>
                    <li>✓ <strong>Flexible scheduling</strong> around tenant move-out/move-in dates</li>
                    <li>✓ <strong>Consolidated billing</strong> for entire portfolios</li>
                    <li>✓ <strong>Annual inspection programs</strong> to catch problems before they become emergencies</li>
                    <li>✓ <strong>Direct communication</strong> with dedicated account manager</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We currently work with several Lubbock property management companies maintaining 50+ rental properties each. Our Class 4 roofing systems reduce future damage and insurance premiums while our rapid response minimizes vacancy time when storms hit.
                  </p>
                </InteractiveCard>

                <InteractiveCard>
                  <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-perryton-7-1280w.jpg" alt="Historic home roofing in Tech Terrace Lubbock TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-brand-brown mb-4">Tech Terrace Historic Character</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tech Terrace (officially the U.N.I.T. historic district) is Lubbock's first designated suburb, developed in the 1920s-1930s with distinctive architecture and tree-lined streets. These beautiful older homes require special attention:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Original roof decking</strong> often requires reinforcement or replacement</li>
                    <li>✓ <strong>Ventilation upgrades</strong> - many older homes lack adequate attic ventilation</li>
                    <li>✓ <strong>Structural considerations</strong> - some original framing needs assessment before heavy materials</li>
                    <li>✓ <strong>Architectural matching</strong> - we help select materials that complement historic character</li>
                    <li>✓ <strong>Tree protection</strong> - mature trees require careful material delivery and installation</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We've completed over 100 roof replacements in Tech Terrace and understand both the architectural beauty and structural challenges these properties present. Our team works carefully to protect landscaping, minimize disruption, and maintain neighborhood character.
                  </p>
                </InteractiveCard>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Student Housing Insurance Considerations</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Rental properties near Texas Tech often have unique insurance situations. Many landlords carry commercial property insurance rather than residential policies, which can have different claim procedures and coverage limits. We work with both residential and commercial insurance carriers and understand the distinctions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Additionally, if you have tenants in place when hail damage occurs, we coordinate repairs to minimize disruption. In some cases, we can complete roof replacement while tenants remain in place (with proper notification and protection measures). In other situations, we work with you to schedule around lease terms and academic calendar.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Working with Lubbock's Active Insurance Market */}
        <FadeIn delay={0.5}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="section-title">Working with Lubbock's Active Insurance Market</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Given Lubbock's position in Hail Alley with 273 hail reports last year alone, insurance adjusters are extremely active in our market. The Hub City has one of the highest claim frequencies in Texas, which means adjusters are experienced, but also scrutinize claims carefully. This is actually good news for property owners - carriers know Lubbock hail is real, severe, and frequent.
              </p>

              <h3 className="text-2xl font-bold text-brand-brown mb-4">Major Insurance Carriers in Lubbock</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-brand-brown mb-3">State Farm - Multiple Lubbock Agents</h4>
                  <p className="text-gray-700 mb-2">We work regularly with:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Jason Grisham - 5217 82nd St #107</li>
                    <li>• Peter Griffith - 4601 66th St</li>
                    <li>• Chris Prather - 6602 Slide Rd</li>
                    <li>• Ana Borrego - 5109 82nd St</li>
                  </ul>
                  <p className="text-gray-700 mt-3 text-sm">
                    State Farm is Lubbock's largest home insurance carrier. They're familiar with regional hail patterns and generally process claims efficiently when properly documented.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-brand-brown mb-3">Farmers Insurance - Lubbock Agents</h4>
                  <p className="text-gray-700 mb-2">Local agents include:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Rebecca Craycraft - 3620 50th St</li>
                    <li>• Cassandra Hernandez - 4630 50th St #12</li>
                    <li>• Scott Fillingim - 6419 University Ave</li>
                  </ul>
                  <p className="text-gray-700 mt-3 text-sm">
                    Farmers has strong presence in Lubbock and we've successfully processed hundreds of claims through their local adjusters.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-brand-brown mb-3">Allstate Insurance</h4>
                  <p className="text-gray-700 mb-2">
                    Patrick Bailey and other Lubbock Allstate agents
                  </p>
                  <p className="text-gray-700 mt-3 text-sm">
                    Allstate adjusters are thorough but fair. We ensure documentation meets their specific requirements for approval.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-brand-brown mb-3">Other Major Carriers</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>USAA</strong> - Common with Dyess AFB connections</li>
                    <li>• <strong>Nationwide</strong> - Growing Lubbock presence</li>
                    <li>• <strong>Liberty Mutual</strong> - Active in commercial sector</li>
                    <li>• <strong>Progressive</strong> - Increasingly common</li>
                    <li>• <strong>Texas Farm Bureau</strong> - Rural Lubbock County</li>
                  </ul>
                  <p className="text-gray-700 mt-3 text-sm">
                    We've successfully worked with every major carrier operating in the Lubbock market.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Common Insurance Claim Mistakes to Avoid</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>❌ Waiting too long to file:</strong> Most policies require notification within one year of the storm. Some carriers require notification within days. Don't wait for leaks - damage exists even without visible interior problems.
                  </li>
                  <li>
                    <strong>❌ Accepting inadequate initial estimates:</strong> Adjusters often miss damage on first inspection. We provide supplemental documentation to ensure complete coverage.
                  </li>
                  <li>
                    <strong>❌ Using non-professional documentation:</strong> Smartphone photos from the ground are insufficient. Carriers require professional documentation showing damage patterns, density, and severity.
                  </li>
                  <li>
                    <strong>❌ Not understanding depreciation vs. replacement cost:</strong> Most policies pay depreciated value initially, then replacement cost after work is completed. We help you understand the payment schedule.
                  </li>
                  <li>
                    <strong>❌ Attempting DIY repairs before adjuster inspection:</strong> Never make repairs before the adjuster documents damage. Temporary tarping is fine - permanent repairs void claims.
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-3">How We Maximize Your Claim Approval</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our 300+ successful Lubbock insurance claims aren't luck - they're the result of systematic professional documentation and carrier relationship management:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Professional drone photography</strong> - 4K imagery showing damage invisible from ground level</li>
                  <li>✓ <strong>Hail impact density mapping</strong> - we document number of impacts per test square, meeting carrier standards</li>
                  <li>✓ <strong>Multiple damage types identified</strong> - shingles, flashing, vents, gutters, siding all documented</li>
                  <li>✓ <strong>Presence during adjuster inspection</strong> - we point out damage adjusters might miss</li>
                  <li>✓ <strong>Supplemental claims filed</strong> when initial estimates are inadequate</li>
                  <li>✓ <strong>Code upgrade documentation</strong> - ensuring coverage for required code compliance items</li>
                  <li>✓ <strong>Direct communication with carrier</strong> - we speak their language and provide what they need</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                  Result: The vast majority of our Lubbock hail damage inspections result in approved claims for full roof replacement. We find damage and secure coverage that other contractors miss.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Lubbock Building Permits & Code Requirements */}
        <FadeIn delay={0.6}>
          <section className="section">
            <h2 className="section-title">Lubbock Building Permits & Code Requirements</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                All roof replacements in Lubbock require building permits issued by the City of Lubbock Building Inspection Division. While this adds a step to the process, permits ensure your roof meets code requirements and provides documentation valuable for insurance and resale. We handle the entire permitting process - you won't need to visit City Hall or navigate bureaucracy.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-brand-brown mb-4">City of Lubbock Building Inspection Division</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Office Location:</strong></p>
                    <p className="text-gray-700 mb-4">
                      1314 Avenue K<br />
                      Lubbock, TX 79401<br />
                      (Downtown Lubbock Civic Center)
                    </p>
                    <p className="text-gray-700 mb-2"><strong>Phone:</strong></p>
                    <p className="text-gray-700 mb-4">
                      <a href="tel:8067752673" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">
                        (806) 775-2673
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Office Hours:</strong></p>
                    <p className="text-gray-700 mb-4">
                      Monday - Friday<br />
                      8:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-700 mb-2"><strong>Online Portal:</strong></p>
                    <p className="text-gray-700">
                      City of Lubbock maintains online permit tracking at mylubbock.us
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-brown mb-4">Permit Requirements & Process</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">1. Permit Application</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We submit complete permit application including property address, owner information, contractor license verification (we're fully licensed with the City of Lubbock), scope of work description, and materials specifications. The Building Inspection Division reviews applications typically within 24-48 hours.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">2. Plan Review (if required)</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Most residential re-roofing permits don't require formal plan review. However, if structural modifications are needed (additional decking support, truss reinforcement, etc.), we provide engineering calculations and stamped drawings. Lubbock's high-wind zone classification sometimes triggers additional review for enhanced fastening patterns.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">3. Permit Issuance</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Once approved, we pay permit fees (typically $150-300 for residential roof depending on square footage) and receive permit placard. This placard must be visible from the street during all work - we post it prominently. Permit fees are included in our estimates so there are no surprise costs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">4. Installation & Inspection</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We complete installation to code, then schedule final inspection with the Building Inspection Division. An inspector visits the property to verify proper installation, code compliance, and material specifications. Our installations pass inspection the first time - we know exactly what inspectors check and ensure compliance.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">5. Permit Closure</h4>
                  <p className="text-gray-700 leading-relaxed">
                    After passing inspection, the permit is officially closed and you receive documentation confirming the work meets all Lubbock building codes. This paperwork is essential for insurance records, future claims, and property sale disclosures.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-brown mb-4">Lubbock Building Code Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The City of Lubbock has adopted the 2021 International Residential Code (IRC) with local amendments specific to West Texas environmental conditions. Key requirements for roofing include:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">High-Wind Zone Classification</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Lubbock is classified as a high-wind zone requiring minimum 110 mph wind-rated shingles. We typically install 130 mph rated materials for additional safety margin. Enhanced fastening patterns are required - 6 nails per shingle (versus standard 4) in most applications, with specific placement requirements along shingle edges and in the adhesive strip area.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">Class 4 Impact Resistance Recommendations</h4>
                  <p className="text-gray-700 leading-relaxed">
                    While not universally required by code, the City of Lubbock strongly recommends Class 4 impact-resistant roofing materials given the region's severe hail history. Many insurance companies now mandate Class 4 materials as a condition of coverage renewal in Lubbock. We recommend Class 4 on virtually every installation - the minimal cost difference is justified by superior hail protection and insurance discounts.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">Ventilation Requirements</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Proper attic ventilation is critical in Lubbock's extreme heat. Code requires minimum 1 square foot of ventilation per 150 square feet of attic space (or 1:300 with balanced intake/exhaust). We typically install continuous ridge vent systems combined with soffit vents for optimal airflow. This reduces attic temperatures by 30-40 degrees, extending shingle life and reducing cooling costs.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">Underlayment & Ice/Water Shield</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Despite Lubbock's semi-arid climate, code requires ice/water shield membrane at all valleys, around all penetrations, and along eaves. We use synthetic underlayment throughout (superior to traditional felt paper in heat and UV exposure) with rubberized ice/water shield at critical areas. This provides redundant water protection if shingles are compromised by future hail.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">Fire Ratings</h4>
                  <p className="text-gray-700 leading-relaxed">
                    All roofing materials must carry Class A fire rating (highest rating). This is standard on modern asphalt shingles but important to verify, especially with specialty products. Class A rating provides critical protection in Lubbock's dry, windy conditions where wildfire risk exists, particularly in areas near open South Plains land.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300 mt-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Why Professional Permit Handling Matters</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Some roofing contractors skip permits or encourage homeowners to "save money" by avoiding the permit process. This is a serious mistake that can result in:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Insurance claim denial</strong> - many policies require permitted work</li>
                  <li>✓ <strong>Code violations</strong> - unpermitted work can be ordered removed</li>
                  <li>✓ <strong>Resale complications</strong> - unpermitted improvements must be disclosed and can kill sales</li>
                  <li>✓ <strong>Future claim problems</strong> - next hail event may be denied due to unpermitted previous work</li>
                  <li>✓ <strong>Safety concerns</strong> - permits ensure work meets minimum safety standards</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                  We handle all permitting as standard practice, included in our pricing. You get peace of mind knowing your roof is fully legal, documented, and won't create problems down the road.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Neighborhoods Most Affected */}
        <FadeIn delay={0.7}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="section-title">Lubbock Neighborhoods Most Affected by Hail</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While hail can strike anywhere in Lubbock County, analysis of the past five years of storm tracking shows certain neighborhoods experience disproportionately frequent and severe hail events. Understanding these patterns helps property owners in high-risk areas prioritize Class 4 roofing systems and maintain vigilant storm monitoring.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Tech Terrace & University Area</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Why it's vulnerable:</strong> Located in central Lubbock, Tech Terrace sits directly in the path of storms tracking northeast from the Caprock escarpment. The neighborhood's mature tree canopy (one of its greatest assets) can hide hail damage from ground-level observation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Recent impacts:</strong> The May 2023 double-hit event caused widespread damage throughout Tech Terrace. The June 2023 Woodrow storm's western edge impacted eastern portions of the area. Many properties in Tech Terrace have been re-roofed 2-3 times in the past decade due to hail.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Shadow Hills & Golf Course Areas</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Why it's vulnerable:</strong> Shadow Hills and neighborhoods near the Shadow Hills Golf Course in southwest Lubbock are exposed to storms approaching from the west and southwest - the most common severe weather direction in the South Plains.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Recent impacts:</strong> The May 2024 storms that produced record hail near Levelland and Whiteface tracked across southwest Lubbock, with Shadow Hills experiencing golf to baseball-sized hail. High property values in this area make Class 4 roofing systems especially important for asset protection.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Arnett Benson & East Lubbock</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Why it's vulnerable:</strong> Arnett Benson and eastern Lubbock neighborhoods lie directly in the path of storms tracking from Slaton/Woodrow area toward Idalou/New Deal. Supercells often reach peak intensity in this corridor.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Recent impacts:</strong> The June 2023 Woodrow softball hail event devastated eastern Lubbock. Arnett Benson and Monterey neighborhoods experienced some of the worst damage in Lubbock history, with 100% of roofs in the direct path requiring replacement. tarping services were overwhelmed for weeks following this event.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Whisperwood & Northwest Lubbock</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Why it's vulnerable:</strong> Northwest Lubbock neighborhoods like Whisperwood experience hail from multiple storm track directions. Properties near Loop 289 and Milwaukee Avenue have sustained repeated hits over the past several years.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Recent impacts:</strong> Multiple events in 2023-2024 tracked across northwest Lubbock. While individual storms may have been less severe than the Woodrow event, cumulative damage from repeated quarter to golf ball-sized hail has shortened roof lifespans throughout the area.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mt-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Storm Tracking & Warning Systems</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lubbock property owners should maintain awareness of approaching severe weather through multiple channels:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>National Weather Service Lubbock</strong> - Official warnings and storm updates (weather.gov/lub)</li>
                  <li>• <strong>KAMC/KLBK Storm Team</strong> - Local television meteorologists provide excellent South Plains coverage</li>
                  <li>• <strong>NOAA Weather Radio</strong> - Automatic alerts for Lubbock County severe weather</li>
                  <li>• <strong>City of Lubbock Alert System</strong> - Emergency notifications via mylubbock.us</li>
                  <li>• <strong>Smartphone apps</strong> - RadarScope, Weather Underground, local news apps with push notifications</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  When severe thunderstorm warnings are issued for Lubbock County, move vehicles under cover if possible and document your property's condition before the storm. Post-storm photographs (even if you don't see obvious damage) create documentation timeline valuable for insurance claims.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQs */}
        <FadeIn delay={0.8}>
          <section className="section">
            <h2 className="section-title">Lubbock Hail Damage Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  How do I know if my Lubbock roof has hail damage?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Hail damage isn't always obvious from ground level. Common signs include: visible divots or bruising on shingle surfaces, granule loss exposing black asphalt backing, dents on metal roof vents/flashing/gutters, cracked or split shingles, and damaged or missing ridge cap shingles. However, significant damage can exist without creating immediate leaks. After any hail event in Lubbock (even "minor" quarter-sized hail), professional inspection is recommended. We provide free inspections with drone photography to identify damage invisible from the ground. Given Lubbock's 273 hail events last year, most roofs have sustained cumulative damage even if individual storms seemed small.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  Will insurance cover my hail damage in Lubbock?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Most Lubbock homeowners insurance policies cover hail damage as a covered peril, typically paying for roof replacement minus your deductible. Given Lubbock's extreme hail frequency, insurance companies are very familiar with regional storm patterns and generally approve legitimate claims when properly documented. The key is professional documentation - smartphone photos from the ground are insufficient. We provide comprehensive damage reports with drone imagery, hail impact density mapping, and detailed photographs meeting carrier standards. We've successfully processed over 300 Lubbock insurance claims with State Farm, Farmers, Allstate, USAA, Nationwide, and all other major carriers. Important: Most policies require claim filing within one year of the storm date. Don't wait until you have leaks - damage exists even without interior problems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  What are Class 4 impact-resistant shingles and do I need them in Lubbock?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Class 4 (also called IR or impact-resistant) shingles are roofing materials tested to withstand severe hail impacts. They're rated by Underwriters Laboratories using a standardized test - a 2-inch steel ball dropped from 20 feet onto the shingle surface. Class 4 shingles survive this test without tearing or cracking, simulating resistance to baseball-sized hail. Given Lubbock's position in Hail Alley with 273 hail events last year including softball-sized hail, Class 4 shingles aren't optional - they're essential. Standard asphalt shingles can be destroyed by golf ball-sized hail in minutes. Class 4 shingles significantly increase survival probability. Additional benefits: most insurance companies offer 10-30% premium discounts for Class 4 installations, often offsetting the modest additional material cost within 3-5 years. Many carriers now require Class 4 materials for policy renewal in Lubbock. We recommend Class 4 on virtually every Lubbock installation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  How long does roof replacement take in Lubbock?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Most residential roof replacements in Lubbock are completed in 1-2 days depending on size and complexity. A typical 2,000 square foot home takes one full day with our experienced crew. Larger homes (3,000+ square feet) or complex roof designs with multiple valleys, dormers, and penetrations may require two days. The timeline includes: complete tear-off of existing materials to decking, decking inspection and repair if needed, installation of ice/water shield and synthetic underlayment, shingle installation with enhanced fastening, ridge vent installation, and complete cleanup. We schedule around weather (obviously - can't roof in rain or extreme conditions) and coordinate with City of Lubbock building inspection for final sign-off. Total timeline from insurance approval to completion typically runs 2-3 weeks including permit processing and material ordering.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  Do I need a building permit for roof replacement in Lubbock?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, all roof replacements in Lubbock require building permits from the City of Lubbock Building Inspection Division (806-775-2673, located at 1314 Avenue K). We handle the entire permitting process including application submission, fee payment (typically $150-300 for residential roofs), plan review coordination if required, inspection scheduling, and permit closure documentation. Permits ensure work meets Lubbock building codes (2021 IRC with local amendments), provide legal documentation for insurance and resale, and verify proper installation by licensed contractors. Never skip permits - unpermitted work can void insurance claims, create resale problems, and result in code violations requiring removal. Some contractors avoid permits to cut costs or hide unlicensed work. We include all permitting as standard practice. You get peace of mind knowing your roof is fully legal and documented.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  What makes Lubbock roofing different from other Texas cities?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lubbock's roofing environment is uniquely challenging compared to most Texas cities. We face: (1) Extreme hail frequency - 273 reports last year versus 20-30 in most Texas metros. Lubbock sits in "Hail Alley" with conditions that produce supercell thunderstorms regularly. (2) Sustained high winds - Lubbock ranks among America's windiest cities with average wind speeds over 12 mph and frequent 50+ mph gusts. Flat South Plains topography provides zero wind breaks. (3) Massive temperature swings - 120+ degree annual variation from sub-zero winter nights to 100°F+ summer days, causing extreme material stress. (4) Intense UV exposure at 3,256 feet elevation - UV degradation happens faster than sea-level cities. (5) Semi-arid climate with occasional intense rainfall - roofs must handle both drought and downpours. These factors demand premium materials (Class 4 shingles, high-wind rated products, UV-stabilized compounds), enhanced installation techniques (6-nail fastening patterns, reinforced flashing), and contractors with specific regional expertise. Generic roofing approaches that work in Houston or Dallas will fail prematurely in Lubbock's harsh environment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  I own rental properties near Texas Tech - do you work with landlords?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. We work extensively with property managers and landlords throughout the Texas Tech area including Tech Terrace, North Overton, and South Overton neighborhoods. We understand the unique requirements of rental properties: (1) Expedited timelines - vacancy costs are real, we work quickly to minimize lost rent. (2) Flexible scheduling around academic calendar and tenant move dates. (3) Volume pricing for multiple properties - we offer discounted rates for landlords with portfolios. (4) Durable materials appropriate for rental properties. (5) Clear communication with property managers and tenants. (6) Consolidated billing for accounting simplicity. (7) Annual inspection programs to catch problems before they become expensive emergencies. We currently work with several Lubbock property management companies maintaining 50+ rental units each. Our Class 4 roofing systems reduce future damage and insurance premiums while our rapid response minimizes disruption when storms hit. Contact us for property manager account setup and portfolio pricing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  What should I do immediately after a hail storm in Lubbock?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Follow these steps after any significant hail event in Lubbock: (1) Document the storm - note date, time, approximate hail size, and duration. Take photos of hail on the ground if possible. (2) Inspect for obvious damage - look at gutters, downspouts, air conditioning units, vehicles, and lawn furniture. Damage to these items correlates with roof damage. (3) Check your attic for leaks - water stains or dripping indicate roof penetration requiring prompt service. (4) Don't climb on your roof - this is dangerous and can cause additional damage. Wait for professional inspection. (5) Call us for free inspection - we provide same-day service after major Lubbock storms. (6) Document interior condition - photograph ceilings and walls before any leaks occur. This establishes pre-existing condition for insurance. (7) Notify your insurance company - most policies require prompt notification, though you don't need to file formal claim until damage is confirmed. (8) Beware of storm chasers - out-of-state contractors flood Lubbock after major events. Verify licensing, local presence, and references before signing contracts. We're locally based, licensed, and established with permanent Lubbock presence.
                </p>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* Service Links */}
        <FadeIn delay={0.9}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="section-title">Related Lubbock Roofing Services</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <InteractiveCard href="/lubbock-tx-roofing/">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Lubbock Roofing Services
                  </h3>
                  <p className="text-gray-700">
                    Complete roofing contractor services throughout Lubbock and the South Plains. Residential, commercial, metal roofing, and more.
                  </p>
                </InteractiveCard>

                <InteractiveCard href="/residential-roofing-lubbock-texas/">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Residential Roofing Lubbock
                  </h3>
                  <p className="text-gray-700">
                    Expert residential roof replacement and repair for Lubbock homes. From Tech Terrace to Shadow Hills.
                  </p>
                </InteractiveCard>

                <InteractiveCard href="/commercial-roofing-lubbock-texas/">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Commercial Roofing Lubbock
                  </h3>
                  <p className="text-gray-700">
                    TPO, EPDM, and flat roof systems for Lubbock businesses. Texas Tech campus specialist.
                  </p>
                </InteractiveCard>

                <InteractiveCard href="/metal-roofing-lubbock-texas/">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Metal Roofing Lubbock
                  </h3>
                  <p className="text-gray-700">
                    Standing seam metal roofs engineered for Lubbock's extreme wind and hail. Superior storm protection.
                  </p>
                </InteractiveCard>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protect Your Lubbock Property From Hail Damage</h2>
            <p className="cta-text max-w-3xl mx-auto">
              With 273 hail events in the past year and intensifying storm patterns, Lubbock property owners can't afford to wait. Whether you need free hail damage inspection, insurance claim assistance, prompt repairs, or Class 4 roof replacement, we're here to help. Licensed Lubbock contractor. Over 300 successful insurance claims. Same-day inspections after storms. We navigate City of Lubbock permits and building codes for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">
                Call (806) 622-6041 Now
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">
                Schedule Free Hail Inspection
              </a>
            </div>
          </section>
        </FadeIn>

      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://5starroofingpros.com/hail-damage-repair-lubbock-tx/",
            "serviceType": "Hail Damage Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "image": "https://5starroofingpros.com/logo.png",
              "telephone": "+18066226041",
              "email": "admin@5starroofingpros.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lubbock",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.5779",
                "longitude": "-101.8552"
              },
              "areaServed": {
                "@type": "City",
                "name": "Lubbock",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              "priceRange": "$$"
            },
            "description": "Expert hail damage roof repair in Lubbock, TX. 273 hail events last year. We handle insurance claims, City of Lubbock permits, and Class 4 impact-resistant installations. Texas Tech area specialist.",
            "areaServed": [
              {
                "@type": "City",
                "name": "Lubbock"
              },
              {
                "@type": "Place",
                "name": "Tech Terrace"
              },
              {
                "@type": "Place",
                "name": "Shadow Hills"
              },
              {
                "@type": "Place",
                "name": "Arnett Benson"
              },
              {
                "@type": "Place",
                "name": "Whisperwood"
              }
            ],
            "offers": {
              "@type": "Offer",
              "description": "Free hail damage inspection and insurance claim assistance"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I know if my Lubbock roof has hail damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hail damage isn't always obvious from ground level. Common signs include visible divots or bruising on shingle surfaces, granule loss exposing black asphalt backing, dents on metal roof vents/flashing/gutters, and cracked or split shingles. Professional inspection with drone photography is recommended after any hail event in Lubbock."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover my hail damage in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Lubbock homeowners insurance policies cover hail damage as a covered peril, typically paying for roof replacement minus your deductible. The key is professional documentation. We've successfully processed over 300 Lubbock insurance claims with State Farm, Farmers, Allstate, USAA, Nationwide, and all other major carriers."
                }
              },
              {
                "@type": "Question",
                "name": "What are Class 4 impact-resistant shingles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 shingles are tested to withstand severe hail impacts - a 2-inch steel ball dropped from 20 feet. Given Lubbock's 273 hail events last year including softball-sized hail, Class 4 shingles are essential. Most insurance companies offer 10-30% premium discounts for Class 4 installations."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a building permit for roof replacement in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all roof replacements in Lubbock require building permits from the City of Lubbock Building Inspection Division (806-775-2673). We handle the entire permitting process including application, fees, inspections, and closure documentation."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do immediately after a hail storm in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Document the storm with date, time, and hail size. Inspect for obvious damage to gutters, AC units, and vehicles. Check your attic for leaks. Don't climb on your roof. Call for professional inspection. Notify your insurance company promptly. We provide same-day inspections after major Lubbock storms."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
