import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roofing Contractor Odessa TX | 5 Star',
  description: 'Commercial and industrial roofing in Odessa. Permian Basin experts. Specialized systems for manufacturing and oil & gas facilities.',
  keywords: "Odessa roofing, Odessa roofer, roofing contractor Odessa TX, hail damage Odessa, metal roofing Odessa, commercial roofing Odessa",
  openGraph: {
    title: "Roofing in Odessa TX | Commercial & Industrial Specialists | 24/7 Service",
    description: "Expert roofing services for Odessa homes and businesses. Hail damage specialists, oil industry facility roofing, 24/7 emergency service.",
    type: "website",
    locale: "en_US",
  },
};

export default function OdessaRoofingPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Service Areas",
                      "url": "/service-areas/"
              },
              {
                      "name": "Odessa",
                      "url": "/odessa-tx-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Odessa&apos;s Premier Roofing Contractor
            </h1>
            <p className="hero-subtitle">
              Protecting Permian Basin Homes & Industrial Facilities Since 2010
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">
                Free Roof Inspection
              </a>
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


      <div className="container-custom">
        {/* Introduction */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Trusted Roofing Partner for Odessa&apos;s Homes and Oil Industry
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Located in the heart of the Permian Basin, Odessa faces unique roofing challenges that demand
                specialized expertise. With a population of 123,000 and a thriving oil and gas industry, Odessa
                properties must withstand brutal summer heat exceeding 105°F, destructive hail storms, powerful
                winds, and the demanding requirements of industrial facilities. Since 2010, we&apos;ve been protecting
                Odessa&apos;s residential neighborhoods, commercial buildings, and oil industry infrastructure with
                premium roofing systems engineered for West Texas extremes.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                From the historic Globe Theatre district to the sprawling industrial parks along I-20, from the
                family homes in Sherwood to the commercial developments near the University of Texas Permian Basin,
                we understand what Odessa roofs endure. Our team specializes in both residential hail damage repair
                and heavy-duty commercial roofing systems that protect your most valuable assets.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Odessa Property Owners Trust 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <InteractiveCard>
                <div className="text-center">
                  <div className="text-5xl mb-4">🛢️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Oil Industry Specialists</h3>
                  <p className="text-gray-600">
                    Expert roofing for refineries, warehouses, office buildings, and industrial facilities
                    throughout the Permian Basin. We understand the unique demands of oil industry infrastructure.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-center">
                  <div className="text-5xl mb-4">⛈️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Damage Experts</h3>
                  <p className="text-gray-600">
                    Odessa averages 6-8 hail events annually with stones exceeding 2 inches. We specialize in
                    rapid storm response, damage assessment, and complete insurance claim management.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-center">
                  <div className="text-5xl mb-4">🔥</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Heat-Resistant Systems</h3>
                  <p className="text-gray-600">
                    Premium roofing materials rated for extreme temperatures. Reflective coatings and proper
                    ventilation reduce cooling costs by up to 30% in Odessa&apos;s scorching summers.
                  </p>
                </div>
              </InteractiveCard>
            </div>
          </section>
        </FadeIn>

        {/* Comprehensive Services Section */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Complete Roofing Services Throughout Odessa</h2>
            <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              From emergency storm repairs to planned replacements, from residential homes to large industrial
              complexes, we provide comprehensive roofing solutions tailored to Odessa&apos;s demanding climate.
            </p>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage Repair */}
            <FadeIn delay={0.1}>
              <InteractiveCard className="border-l-4 border-red-500">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/hail-damage-3.jpg" alt="Hail damage roof repair services in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Roof Repair
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold">ODESSA&apos;S #1 ROOFING THREAT</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong>Hail is the single greatest threat to Odessa roofs.</strong> Located in the heart
                      of &quot;Hail Alley,&quot; Odessa experiences an average of 6-8 significant hail events annually,
                      with many producing stones 2-4 inches in diameter. The devastating May 2019 storm that hit
                      Odessa dropped baseball to softball-sized hail, causing over $100 million in property damage
                      across residential and commercial properties.
                    </p>
                    <p className="text-gray-600 mb-4">
                      We provide comprehensive hail damage services including free post-storm inspections with
                      drone photography, detailed damage documentation for insurance claims, direct communication
                      with adjusters from State Farm, Allstate, USAA, and local providers like Permian Basin
                      Insurance, and complete roof replacement using Class 4 impact-resistant shingles that can
                      reduce future insurance premiums by up to 35%.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Critical timing:</strong> Texas law gives you up to 2 years to file hail damage claims,
                      but waiting allows hidden damage to worsen. After any hail event in Odessa, get a professional
                      inspection within 72 hours to protect your insurance rights and prevent water infiltration.
                    </p>
                    <a
                      href="/hail-damage-roof-repair-odessa-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2 text-lg"
                    >
                      Expert Hail Damage Services in Odessa →
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </FadeIn>

            {/* Residential Roofing */}
            <FadeIn delay={0.2}>
              <InteractiveCard>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/ResidentialServices.jpeg" alt="Residential roofing services in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Odessa homeowners in neighborhoods like Sherwood, Stonegate, Mission Dorado, Ridgemont,
                      Parkview Estates, Woodson Heights, and Dos Amigos need roofing systems that can survive
                      the city&apos;s extreme climate challenges. We install premium asphalt shingles rated for
                      130+ mph winds, impact-resistant metal roofing, and energy-efficient systems that reduce
                      cooling costs in Odessa&apos;s brutal summers.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Our residential services include complete roof replacement with manufacturer warranties up
                      to 50 years, storm damage repair and insurance coordination, proper attic ventilation to
                      combat heat buildup (critical when roof surface temperatures exceed 170°F), ridge vent and
                      soffit installation to extend shingle life, and energy-efficient reflective shingles that
                      meet or exceed Texas energy codes.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Odessa homeowner advantage:</strong> We understand local building codes, HOA
                      requirements in planned communities, and work with all major insurance providers serving
                      the Permian Basin. Most residential roof replacements are completed in 1-2 days with
                      minimal disruption.
                    </p>
                    <a
                      href="/residential-roofing-odessa-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Residential Roofing Solutions →
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </FadeIn>

            {/* Commercial & Industrial Roofing */}
            <FadeIn delay={0.3}>
              <InteractiveCard className="bg-blue-50 border-2 border-blue-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/TPO1.jpg" alt="Commercial and industrial roofing services in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial & Industrial Roofing
                    </h3>
                    <p className="text-sm text-blue-700 font-semibold">OIL INDUSTRY SPECIALIST</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Odessa&apos;s economy runs on oil and gas, and we specialize in protecting that
                      infrastructure.</strong> From refineries and processing plants to warehouses, office buildings,
                      retail centers along East 42nd Street, and industrial facilities throughout the I-20 corridor,
                      we provide commercial roofing systems built for the unique demands of Permian Basin operations.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our commercial roofing expertise includes TPO single-ply membrane systems (white reflective
                      surfaces ideal for reducing cooling costs), EPDM rubber roofing for long-lasting waterproofing,
                      PVC membrane systems for chemical-resistant applications (critical for oil industry facilities),
                      built-up roofing (BUR) systems providing multi-layer protection for industrial facilities,
                      modified bitumen for high-traffic roof areas, spray polyurethane foam (SPF) roofing with superior
                      insulation values, and silicone roof coatings to extend existing roof life by 10-15 years.
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Industrial facility advantages:</strong> We schedule work around your operations to
                      minimize downtime, provide 24/7 emergency service for critical facilities, understand safety
                      protocols and OSHA requirements, and offer preventive maintenance programs that identify problems
                      before they become costly emergencies.
                    </p>
                    <a
                      href="/commercial-roofing-odessa-texas/"
                      className="text-blue-700 font-semibold hover:text-blue-800 inline-flex items-center gap-2"
                    >
                      Commercial Roofing Services →
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </FadeIn>

            {/* Metal Roofing */}
            <FadeIn delay={0.4}>
              <InteractiveCard>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/TPO1.jpg" alt="Metal roof installation services in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Metal Roof Installation
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong>Metal roofing is the smart choice for Odessa&apos;s extreme climate.</strong> When
                      summer temperatures regularly exceed 100°F and roof surfaces reach 170°F+, metal roofing
                      outperforms traditional asphalt shingles in every category: longevity (50+ years vs 15-20),
                      energy efficiency (reflects up to 70% of solar radiation), wind resistance (rated for 140+ mph),
                      hail resistance (superior impact resistance), and fire safety (Class A fire rating).
                    </p>
                    <p className="text-gray-600 mb-4">
                      We install standing seam metal roofing with concealed fasteners for maximum weather protection,
                      corrugated metal panels ideal for shops and agricultural buildings, stone-coated metal shingles
                      that combine metal durability with traditional aesthetics, and commercial metal roof systems for
                      warehouses and industrial facilities. Available in numerous colors and finishes to match any
                      Odessa property.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Energy savings:</strong> Metal roofing can reduce cooling costs by 20-30% compared to
                      dark asphalt shingles. Many Odessa homeowners see ROI within 10-15 years through energy savings
                      and reduced maintenance costs.
                    </p>
                    <a
                      href="/metal-roof-installation-odessa-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Metal Roofing Installation →
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </FadeIn>

            {/* Emergency Services */}
            <FadeIn delay={0.5}>
              <InteractiveCard className="bg-red-50 border-2 border-red-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/storm-damage-roof-repair.jpg" alt="24/7 emergency roof repair services in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      24/7 Emergency Roof Repair
                    </h3>
                    <p className="text-sm text-red-600 font-semibold">RAPID RESPONSE TEAM</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Roofing emergencies strike without warning in Odessa.</strong> When severe
                      thunderstorms roll across the Permian Basin, when high winds tear off shingles, when hail
                      punctures your roof, or when you discover an active leak threatening your property, you need
                      immediate professional response. We provide 24/7 emergency roofing services throughout Odessa
                      and surrounding communities.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our emergency services include immediate response typically within 1-2 hours, emergency
                      tarping to prevent water damage and secure your property, temporary leak repairs to stop
                      active water intrusion, storm damage assessment and documentation, debris removal and site
                      cleanup, and coordination with your insurance company for emergency services coverage.
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Don&apos;t wait:</strong> Every minute of water infiltration causes exponentially
                      more damage to insulation, ceilings, walls, and contents. Call{" "}
                      <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">
                        (806) 622-6041
                      </a>{" "}
                      immediately for 24/7 emergency assistance anywhere in Odessa.
                    </p>
                    <a
                      href="/emergency-roof-repair-odessa-texas/"
                      className="text-red-700 font-semibold hover:text-red-800 inline-flex items-center gap-2 text-lg"
                    >
                      24/7 Emergency Services →
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </FadeIn>
          </div>
        </section>

        {/* Odessa-Specific Climate Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Understanding Odessa&apos;s Extreme Roofing Climate
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
              Odessa&apos;s location in the Permian Basin creates one of the most challenging roofing environments
              in North America. Your roof must withstand multiple extreme conditions simultaneously.
            </p>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-brown mb-2">⛈️ Severe Hail Storms - The Primary Threat</h3>
                <p className="text-gray-700">
                  Odessa sits directly in &quot;Hail Alley,&quot; experiencing 6-8 significant hail events annually.
                  The National Weather Service documents that Ector County receives some of Texas&apos;s most
                  destructive hailstorms, with stones frequently exceeding 2 inches (golf ball size) and occasionally
                  reaching 4+ inches (softball size). The May 23, 2019 supercell storm that devastated Odessa
                  produced hail up to 4.5 inches, destroying thousands of roofs in a single afternoon. Hail damage
                  isn&apos;t always immediately visible but causes granule loss, seal failure, and cracking that
                  leads to premature roof failure and leaks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌡️ Extreme Temperature Swings</h3>
                <p className="text-gray-700">
                  Odessa&apos;s annual temperature range exceeds 120 degrees Fahrenheit. Summer highs regularly
                  reach 105-110°F, with roof surface temperatures exceeding 170°F on dark shingles. Winter can
                  bring arctic blasts dropping temperatures below 10°F. This 120+ degree annual swing causes
                  constant thermal expansion and contraction—materials expand in extreme heat, contract in extreme
                  cold—creating tremendous stress on roofing materials, sealants, and fasteners. This daily and
                  seasonal cycling accelerates aging and causes premature failure of inferior roofing products.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-brown mb-2">☀️ Intense UV Radiation and Heat</h3>
                <p className="text-gray-700">
                  At Odessa&apos;s elevation and latitude, UV radiation is intense year-round. Combined with
                  temperatures exceeding 100°F for 80-100 days annually, asphalt shingles age rapidly. The UV
                  radiation breaks down asphalt binders, causes granule loss (reducing reflectivity and protection),
                  makes shingles brittle and prone to cracking, and can reduce expected roof life by 30-40% without
                  proper materials. We only install premium shingles with enhanced UV protection and reflective
                  granules specifically rated for extreme heat environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-brown mb-2">💨 Sustained High Winds</h3>
                <p className="text-gray-700">
                  The Permian Basin experiences persistent winds averaging 12-15 mph, with frequent gusts exceeding
                  40 mph. During spring and fall severe weather, straight-line winds can reach 70-80 mph.
                  Thunderstorm outflows produce sudden, powerful wind gusts. These conditions lift improperly
                  installed shingles, tear membrane seams on flat commercial roofs, damage flashing and trim, and
                  turn loose debris into projectiles. We use enhanced fastening schedules exceeding minimum code
                  requirements, specifically designed for high-wind regions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-brown mb-2">🏭 Industrial Environment Challenges</h3>
                <p className="text-gray-700">
                  Odessa&apos;s oil and gas industry creates unique roofing challenges. Refineries, processing plants,
                  and industrial facilities expose roofs to chemical fumes, higher thermal loads from equipment,
                  vibration from machinery, increased foot traffic for maintenance access, and the need for minimal
                  downtime during repairs. We provide specialized commercial roofing systems with chemical-resistant
                  membranes, reinforced walkway pads, and preventive maintenance programs that keep critical facilities
                  operational.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-brown mb-2">💧 Flash Flooding and Water Management</h3>
                <p className="text-gray-700">
                  While Odessa averages only 14 inches of annual rainfall, precipitation comes in intense bursts.
                  Thunderstorms can dump 2-3 inches in under an hour, overwhelming inadequate drainage systems.
                  Flat commercial roofs must have properly designed drainage with adequate scuppers and internal
                  drains. Ponding water (standing water lasting 48+ hours) accelerates membrane deterioration and
                  leads to premature roof failure. We design proper slopes and drainage for all commercial installations.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Areas Served in Odessa */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Neighborhoods and Districts We Serve in Odessa</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                Comprehensive roofing services throughout all Odessa neighborhoods, commercial districts, and
                surrounding Ector County communities:
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                <div>
                  <h4 className="font-bold text-brand-brown mb-3">North Odessa</h4>
                  <ul className="space-y-2">
                    <li>✓ Sherwood</li>
                    <li>✓ Stonegate</li>
                    <li>✓ Parkview Estates</li>
                    <li>✓ Mission Dorado</li>
                    <li>✓ Ridgemont</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-3">Central & West Odessa</h4>
                  <ul className="space-y-2">
                    <li>✓ Downtown Odessa</li>
                    <li>✓ Globe Theatre District</li>
                    <li>✓ Woodson Heights</li>
                    <li>✓ Dos Amigos</li>
                    <li>✓ West Odessa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-3">Commercial & Industrial</h4>
                  <ul className="space-y-2">
                    <li>✓ UTPB Area</li>
                    <li>✓ East 42nd Street corridor</li>
                    <li>✓ Andrews Highway</li>
                    <li>✓ JBS Parkway area</li>
                    <li>✓ I-20 industrial corridor</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8 text-lg">
                We also serve all surrounding Ector County communities and provide service throughout the
                Permian Basin region.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Local Landmarks & Map */}
        <FadeIn>
          <section className="section bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Serving All of Odessa and Surrounding Communities
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Odessa Landmarks We Serve Near:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">🎭</span>
                    <span><strong>Globe Theatre</strong> - Historic downtown landmark and cultural center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">🏫</span>
                    <span><strong>University of Texas Permian Basin</strong> - Growing campus area with residential development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">🏟️</span>
                    <span><strong>Ratliff Stadium</strong> - Home of Friday Night Lights legacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">🏛️</span>
                    <span><strong>Presidential Museum</strong> - Downtown museum district</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">🛍️</span>
                    <span><strong>Music City Mall</strong> - Major commercial center on East 42nd Street</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✈️</span>
                    <span><strong>Odessa-Schlemeyer Field</strong> - Airport area business district</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Service Area Coverage:</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">
                    <strong>Primary Service Area:</strong> All of Odessa and Ector County, including residential
                    neighborhoods, commercial districts, and industrial facilities throughout the Permian Basin.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Response Times:</strong> Emergency service typically within 1-2 hours anywhere in Odessa.
                    Scheduled inspections and installations available throughout the week.
                  </p>
                  <p className="text-gray-700">
                    <strong>Nearby Communities:</strong> We also serve Midland (20 miles east), Gardendale, Goldsmith,
                    and surrounding Permian Basin communities.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Insurance & Local Providers */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Insurance Claim Assistance for Odessa Homeowners</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-xl text-gray-600 mb-8">
                We work directly with all major insurance companies serving Odessa and the Permian Basin:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-brand-brown mb-3">National Insurance Providers:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ State Farm Insurance</li>
                    <li>✓ Allstate Insurance</li>
                    <li>✓ USAA (military families)</li>
                    <li>✓ Farmers Insurance</li>
                    <li>✓ Liberty Mutual</li>
                    <li>✓ Progressive Insurance</li>
                    <li>✓ Nationwide Insurance</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-brand-brown mb-3">Local & Regional Providers:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Permian Basin Insurance</li>
                    <li>✓ Texas Farm Bureau</li>
                    <li>✓ Germania Insurance</li>
                    <li>✓ Local independent agents</li>
                    <li>✓ Regional insurance agencies</li>
                    <li>✓ Oil industry coverage providers</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                <h3 className="text-lg font-bold text-brand-brown mb-3">Our Insurance Assistance Includes:</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li>✓ Free damage assessment and documentation</li>
                  <li>✓ Comprehensive photo evidence with drone imagery</li>
                  <li>✓ Detailed written estimates for adjusters</li>
                  <li>✓ Direct communication with insurance adjusters</li>
                  <li>✓ Supplement negotiation for full coverage</li>
                  <li>✓ Guidance through the claims process</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Why Act Now */}
        <FadeIn>
          <section className="section bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <h2 className="text-3xl font-bold text-center mb-6 text-red-800">
              Why Odessa Homeowners Should Act Now
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
              <p className="text-lg">
                <strong>Texas law gives you 2 years to file hail damage claims,</strong> but waiting is costly.
                Hidden hail damage allows water infiltration that destroys insulation, creates mold, damages
                ceilings and walls, and can void your insurance coverage if deemed &quot;lack of maintenance.&quot;
              </p>
              <p className="text-lg">
                <strong>After any hail event in Odessa, get a professional inspection within 72 hours.</strong>
                We provide free inspections with no obligation. If we find damage, we document everything and
                help you file. If your roof is fine, you have peace of mind—and our inspection is still free.
              </p>
              <p className="text-lg">
                <strong>Impact-resistant shingles can reduce your insurance premiums by up to 35%</strong> in
                Odessa. Many homeowners recover the upgrade cost through insurance savings within 5-7 years while
                gaining superior protection against future hail events.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protect Your Odessa Property with Expert Roofing</h2>
            <p className="cta-text">
              From hail damage repair to complete roof replacement, from residential homes to industrial facilities,
              we&apos;re Odessa&apos;s trusted roofing partner. Free inspections, comprehensive warranties, and
              financing available. Serving the Permian Basin since 2010.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041 Now
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg border-2 border-brand-brown">
                Schedule Free Inspection
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Nearby Cities Links */}
        <FadeIn>
          <section className="section pb-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              Also Serving Nearby Permian Basin Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a href="/midland-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Midland
              </a>
              <span className="text-gray-400">•</span>
              <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Amarillo
              </a>
              <span className="text-gray-400">•</span>
              <a href="/lubbock-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Lubbock
              </a>
              <span className="text-gray-400">•</span>
              <a href="/service-areas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                View All Service Areas
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Related Blog Content */}
        <FadeIn>
          <section className="section bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              Helpful Roofing Resources for Odessa Homeowners
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/blog/hail-damage-roof-repair-guide/" className="block p-4 bg-white rounded-lg hover:shadow-lg transition-all">
                <h3 className="font-bold text-brand-brown mb-2">Hail Damage Repair Guide</h3>
                <p className="text-sm text-gray-600">Complete guide to identifying and repairing hail damage</p>
              </a>
              <a href="/blog/choosing-right-roofing-material/" className="block p-4 bg-white rounded-lg hover:shadow-lg transition-all">
                <h3 className="font-bold text-brand-brown mb-2">Choosing Roofing Materials</h3>
                <p className="text-sm text-gray-600">Best roofing materials for West Texas climate</p>
              </a>
              <a href="/blog/roof-insurance-claims/" className="block p-4 bg-white rounded-lg hover:shadow-lg transition-all">
                <h3 className="font-bold text-brand-brown mb-2">Insurance Claim Process</h3>
                <p className="text-sm text-gray-600">Navigating roof insurance claims in Texas</p>
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
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/odessa-texas-roofing/",
            "name": "5 Star Commercial Roofing - Odessa",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Premier roofing contractor serving Odessa, Texas and the Permian Basin. Specialists in hail damage repair, commercial roofing, metal roofing, and emergency services for residential and industrial properties.",
            "telephone": "+18066226041",
            "email": "admin@5starroofingpros.com",
            "url": "https://5starroofingpros.com/odessa-texas-roofing/",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Odessa",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Odessa",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "AdministrativeArea",
                "name": "Ector County"
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "31.8457",
              "longitude": "-102.3676"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roofing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hail Damage Roof Repair",
                    "description": "Expert hail damage assessment, documentation, and repair for Odessa's frequent severe storms. Insurance claim assistance included."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing",
                    "description": "Commercial and industrial roofing systems including TPO, EPDM, PVC, and metal roofing for oil industry facilities and businesses."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Installation",
                    "description": "Standing seam and corrugated metal roofing systems ideal for Odessa's extreme heat and hail conditions."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete roof replacement and repair services for Odessa homes using impact-resistant and energy-efficient materials."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Roof Repair",
                    "description": "24/7 emergency roofing services throughout Odessa for storm damage, leaks, and urgent repairs."
                  }
                }
              ]
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "127"
            }
          })
        }}
      />
    </div>
  );
}
