import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roofing in Midland TX | Oil & Gas Industry Specialists',
  description: 'roofing in Midland including commercial and industrial. Permian Basin specialists. Chemical-resistant PVC systems for oil & gas facilities.',
  keywords: "Midland roofing, Midland TX roofer, Permian Basin roofing, hail damage Midland, commercial roofing Midland, oil industry roofing",
};

export default function MidlandRoofingPage() {
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
                      "name": "Midland",
                      "url": "/midland-tx-roofing/"
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
              Midland&apos;s Premier Roofing Contractor
            </h1>
            <p className="hero-subtitle">
              Protecting the Tall City&apos;s Homes and Businesses Since 2010
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Your Trusted Roofing Partner in the Heart of the Permian Basin
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Midland, Texas—known as the &quot;Tall City&quot; for its distinctive skyline visible across the
                flat Permian Basin landscape—is home to over 146,000 residents and serves as the economic heart
                of America&apos;s most productive oil field. This unique position brings unique roofing challenges
                that demand specialized expertise.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At 5 Star Commercial Roofing, we&apos;ve protected Midland&apos;s homes and businesses for over a decade.
                From the historic Petroleum Building downtown to modern developments in Grassland Estates, from
                industrial facilities serving the oil industry to family homes throughout Green Tree Country Club
                Estates, we understand what Midland roofs face: devastating hail storms, extreme temperature swings
                exceeding 100 degrees annually, relentless UV exposure, and high winds that sweep across the open plains.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need emergency hail damage repair after a Permian Basin supercell, a commercial flat roof
                system for your oil and gas facility, or residential roofing that can withstand another decade of
                West Texas extremes, we deliver expert craftsmanship backed by industry-leading warranties.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Midland */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Midland Chooses 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <InteractiveCard>
                <div className="text-center">
                  <div className="text-5xl mb-4">🏭</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Oil Industry Specialists</h3>
                  <p className="text-gray-600">
                    Extensive experience with commercial roofing for petroleum facilities, warehouses, and
                    industrial buildings throughout the Permian Basin. We understand the demanding requirements
                    of energy sector infrastructure.
                  </p>
                </div>
              </InteractiveCard>
              <InteractiveCard>
                <div className="text-center">
                  <div className="text-5xl mb-4">⛈️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Alley Experts</h3>
                  <p className="text-gray-600">
                    Midland averages 144 severe weather warnings annually with documented hail reports throughout
                    the year. We specialize in rapid storm response, comprehensive damage assessment, and seamless
                    insurance claim support.
                  </p>
                </div>
              </InteractiveCard>
              <InteractiveCard>
                <div className="text-center">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Extreme Climate Engineering</h3>
                  <p className="text-gray-600">
                    Our roofing systems are engineered specifically for Midland&apos;s brutal conditions: summer
                    temperatures exceeding 105°F, winter freezes, UV exposure at 2,779 feet elevation, and
                    70+ mph wind events.
                  </p>
                </div>
              </InteractiveCard>
            </div>
          </section>
        </FadeIn>

        {/* Comprehensive Services Section */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Complete Roofing Services in Midland, TX</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              From emergency storm repairs to planned commercial installations, we deliver comprehensive
              roofing solutions tailored to the Permian Basin&apos;s demanding environment.
            </p>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage Repair */}
            <FadeIn delay={0.1}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/hail-damage-3.jpg" alt="Hail damage roof repair in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong>Midland sits squarely in Hail Alley, experiencing some of Texas&apos;s most severe hailstorms.</strong>
                      Recent events have produced hailstones exceeding 6 inches in diameter—the third-largest ever recorded
                      in Texas—smashing through metal roofs and causing catastrophic damage throughout the Permian Basin.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Spring and early summer bring violent thunderstorms with baseball to softball-sized hail that can
                      destroy a roof in minutes. From Grassland Estates to Club Estates, we&apos;ve assessed and repaired
                      thousands of hail-damaged roofs. We identify even subtle granule loss, document every impact for
                      maximum insurance coverage, and coordinate seamlessly with adjusters from State Farm, Allstate,
                      and local agents throughout Midland.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Our hail damage service includes:</strong> Free emergency inspections within hours of storms,
                      comprehensive photo documentation with drone imagery, detailed damage reports for insurance claims,
                      direct communication with adjusters, temporary emergency repairs to prevent further damage, and complete
                      roof replacement with impact-resistant materials rated for Midland&apos;s severe weather.
                    </p>
                    <a
                      href="/hail-damage-roof-repair-midland-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Complete Hail Damage Services in Midland →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Commercial Roofing */}
            <FadeIn delay={0.2}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/CommercialRoofing.jpeg" alt="Commercial roofing services in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial Roofing Services
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      As the economic capital of the Permian Basin oil and gas industry, Midland demands commercial roofing
                      systems that can withstand not just extreme weather, but also the rigors of industrial environments.
                      We&apos;ve installed and maintained roofs on petroleum facilities, warehouses, office buildings, retail
                      centers, and industrial complexes throughout Midland County.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Our commercial expertise extends from the historic Petroleum Building and modern offices near the
                      Bush Convention Center to sprawling industrial facilities near Midland International Air and Space Port.
                      We specialize in flat and low-slope roofing systems that deliver decades of reliable performance with
                      minimal maintenance requirements—critical for operations that can&apos;t afford downtime.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Commercial services include:</strong> TPO single-ply membrane systems (white reflective surfaces
                      reduce cooling costs by up to 30% in Midland&apos;s heat), EPDM rubber roofing for superior weather
                      resistance, PVC membrane installations for chemical-resistant applications, standing seam metal roofing
                      for office buildings and retail centers (exceptional hail resistance and 40-50 year lifespan), modified
                      bitumen systems, built-up roofing (BUR), roof coating and restoration to extend existing roof life,
                      preventive maintenance programs, emergency leak repairs, and comprehensive roof asset management.
                    </p>
                    <a
                      href="/commercial-roofing-midland-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Explore Commercial Roofing in Midland →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Residential Roofing */}
            <FadeIn delay={0.3}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/ResidentialServices.jpeg" alt="Residential roofing services in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Midland homeowners face some of the most challenging roofing conditions in Texas. Your roof must
                      withstand summer temperatures regularly exceeding 100°F, winter freezes, severe hailstorms, high
                      winds, and relentless UV exposure at nearly 2,800 feet elevation. Standard roofing materials simply
                      don&apos;t last in this environment without proper installation and the right products.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Whether you live in the established neighborhoods of Green Tree Country Club Estates, the newer
                      developments of Grassland Estates, the prestigious homes of Club Estates, or anywhere throughout
                      Midland County, we install residential roofing systems engineered for longevity. We use only premium,
                      impact-resistant shingles with Class 4 hail ratings, superior wind resistance ratings, and enhanced
                      UV protection specifically designed for West Texas conditions.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Residential services include:</strong> Complete roof replacement with tear-off and disposal,
                      architectural shingle installation (designer colors and styles), impact-resistant shingles with insurance
                      discounts, roof repair and partial replacements, ventilation system upgrades (critical for Midland&apos;s
                      heat), gutter installation and replacement, insurance claim assistance and documentation, and free
                      inspections with detailed condition reports.
                    </p>
                    <a
                      href="/residential-roofing-midland-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Residential Roofing Solutions in Midland →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Flat Roof Repair */}
            <FadeIn delay={0.4}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/photos/Large_commercial_flat_roof_installation2.png" alt="Flat roof repair and replacement in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Flat Roof Repair & Replacement
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Most commercial buildings in Midland feature flat or low-slope roofing systems. These require
                      specialized expertise, materials, and installation techniques completely different from residential
                      pitched roofs. Flat roofs face unique challenges in Midland&apos;s climate: ponding water after rare
                      but intense rainfall, seam failures from thermal cycling, and wind uplift on large expanses.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      We&apos;re Midland&apos;s flat roofing specialists, with extensive experience in TPO, EPDM, PVC,
                      modified bitumen, and built-up roofing systems. Our installations include proper drainage design,
                      robust attachment systems for high winds, and reflective surfaces to reduce the intense heat load
                      on Midland buildings. We also offer roof coating systems that can extend the life of existing flat
                      roofs by 10-15 years at a fraction of replacement cost.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Flat roof expertise includes:</strong> Advanced leak detection (including infrared scanning),
                      ponding water solutions and drainage improvements, seam repair and reinforcement, membrane patching
                      and replacement, flashing repair and upgrades, roof coating applications, complete tear-off and
                      replacement, and customized maintenance programs.
                    </p>
                    <a
                      href="/flat-roof-repair-midland-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Flat Roof Services in Midland →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Emergency Roof Repair */}
            <FadeIn delay={0.5}>
              <div className="card-hover p-8 bg-red-50 border-2 border-red-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/shutterstock_162724754.jpg" alt="24/7 emergency roof repair in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      24/7 Emergency Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>When a Permian Basin storm strikes, roof damage doesn&apos;t wait for business hours.</strong>
                      Severe thunderstorms can develop rapidly in West Texas, bringing destructive hail, high winds, and
                      torrential rain that cause immediate, catastrophic damage. Water intrusion can destroy inventory,
                      damage equipment, ruin interiors, and halt business operations within hours.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Our 24/7 emergency response team is available any time, day or night, throughout Midland and
                      surrounding communities. We provide emergency tarping to prevent further water damage, temporary
                      leak repairs, storm damage assessment and documentation, emergency board-up services, and coordination
                      with your insurance company—all designed to minimize damage and get you back to normal as quickly
                      as possible.
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Don&apos;t wait when you have a roofing emergency.</strong> Call{" "}
                      <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">
                        (806) 622-6041
                      </a>{" "}
                      now for immediate assistance anywhere in Midland, 24 hours a day, 7 days a week.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Midland-Specific Roofing Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Why Midland Roofs Face Extreme Challenges
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">⛈️ Severe Hail Storms and Hail Alley</h3>
                <p className="text-gray-700 leading-relaxed">
                  Midland sits directly in &quot;Hail Alley,&quot; making it one of the most hail-prone locations in the
                  United States. The city experiences an average of 144 severe weather warnings annually, with documented
                  hail events throughout the year. The most intense activity occurs from April through June, when violent
                  supercell thunderstorms develop across the flat Permian Basin landscape.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Recent years have seen record-breaking hailstones, including a 7.25-inch stone in 2024—the largest ever
                  recorded in Texas—and multiple 6+ inch hailstones capable of punching through metal roofs, shattering
                  skylights, and completely destroying asphalt shingles. Even smaller hail causes significant granule loss,
                  compromising the waterproofing layer and dramatically reducing roof lifespan. <strong>This is the number
                  one roofing threat in Midland.</strong>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">🌡️ Extreme Temperature Swings</h3>
                <p className="text-gray-700 leading-relaxed">
                  Midland experiences a semi-arid climate with brutal extremes. Summer temperatures routinely exceed 100°F,
                  with the mercury sometimes climbing above 105°F. In winter, hard freezes and occasional ice storms bring
                  temperatures well below freezing. This creates an annual temperature swing exceeding 100 degrees.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Roofing materials expand in heat and contract in cold. This constant thermal cycling—sometimes experiencing
                  40-degree daily swings—stresses every component of your roof: shingles crack and curl, membrane seams pull
                  apart, fasteners loosen, and flashing separates from penetrations. Materials not engineered for these extremes
                  fail prematurely, which is why we only install products specifically rated for West Texas conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">☀️ Intense UV Exposure and Solar Radiation</h3>
                <p className="text-gray-700 leading-relaxed">
                  At an elevation of 2,779 feet with over 260 days of sunshine annually, Midland roofs face relentless
                  ultraviolet radiation. The thin atmosphere at this elevation provides less UV filtering, meaning more
                  damaging rays reach your roof surface. This intense solar exposure breaks down organic materials, causes
                  asphalt shingles to dry out and become brittle, fades colors, and accelerates the aging of all roofing materials.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Proper material selection is critical. We specify UV-stabilized products with enhanced solar reflectance,
                  impact-resistant shingles that maintain flexibility despite sun exposure, and light-colored commercial roofing
                  membranes that reflect rather than absorb solar radiation—reducing building cooling costs by up to 30%.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">💨 High Winds Across Open Plains</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Texas Panhandle and Permian Basin are among the windiest regions in the United States. With minimal
                  topographic relief, winds sweep unobstructed across hundreds of miles of open plains. Sustained winds of
                  25-35 mph are common, with gusts frequently exceeding 60 mph. Severe thunderstorms can produce straight-line
                  winds above 70 mph.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  High winds create enormous uplift forces on roofs, particularly at edges, corners, and ridges. Improperly
                  installed shingles lift and tear off. Membrane seams peel back. Flashing pulls away from walls and chimneys.
                  Our installations exceed standard fastening requirements, using enhanced attachment patterns and wind-rated
                  materials to ensure your roof stays intact during the next windstorm.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">🏭 Oil Industry and Industrial Environment</h3>
                <p className="text-gray-700 leading-relaxed">
                  As the economic heart of the Permian Basin petroleum industry, Midland presents unique roofing challenges
                  beyond weather. Industrial facilities require roofs that can withstand chemical exposure, accommodate heavy
                  rooftop equipment, provide access for frequent maintenance, and meet stringent safety standards. Many buildings
                  require specialized systems like vapor barriers, ventilation for hazardous materials, or fire-resistant assemblies.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Commercial operations can&apos;t afford extended downtime for roof work. We specialize in phased installations
                  that allow businesses to continue operating, weekend and after-hours work to minimize disruption, and rapid
                  emergency response to keep critical operations running.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Midland Neighborhoods and Areas We Serve</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                We provide comprehensive roofing services throughout all of Midland and surrounding communities:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700 mb-8">
                <ul className="space-y-2">
                  <li>✓ Grassland Estates</li>
                  <li>✓ Green Tree Country Club Estates</li>
                  <li>✓ Club Estates</li>
                  <li>✓ Saddle Club South</li>
                  <li>✓ Heritage Oaks</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Abell-Hanger Estates</li>
                  <li>✓ Legends Park</li>
                  <li>✓ Fairmont Park</li>
                  <li>✓ Trinity West</li>
                  <li>✓ Goddard Heights</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Crestgate</li>
                  <li>✓ Downtown Midland</li>
                  <li>✓ North Midland</li>
                  <li>✓ West Midland</li>
                  <li>✓ All Midland County areas</li>
                </ul>
              </div>
              <p className="text-center text-gray-600 mt-6">
                Whether you&apos;re near the Bush Convention Center downtown, the Permian Basin Petroleum Museum on
                I-20, Midland International Air and Space Port, or anywhere along Loop 250, we serve your area with
                fast, professional roofing services. We also serve industrial and commercial facilities throughout
                the Permian Basin oil fields.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* About Midland Section */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing in Midland: The Tall City
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
              <p className="leading-relaxed">
                Known as the &quot;Tall City&quot; for its distinctive downtown skyline that rises prominently from
                the flat Permian Basin landscape, Midland is a city of approximately 146,000 residents and serves as
                the economic capital of American oil and gas production. The city&apos;s nickname originated from its
                impressive collection of high-rise buildings—unusual for a city of its size—built during various oil
                booms, particularly the iconic 12-story Petroleum Building constructed in 1930.
              </p>
              <p className="leading-relaxed">
                Midland&apos;s economy revolves around petroleum. By 1928, the city had established itself as the
                administrative center of the Permian Basin oil fields. Today, over 215 oil and gas companies maintain
                offices in Midland, managing operations across the basin that produces 57% of Texas oil—approximately
                430 million barrels annually. This represents 14% of the entire nation&apos;s crude production, making
                the Permian Basin the most productive oil field in the United States.
              </p>
              <p className="leading-relaxed">
                The city experiences population growth tied to energy sector activity, with an 8.1% increase since 2020.
                This growth has fueled residential development in neighborhoods like Grassland Estates (median home price
                $445,000) and the prestigious Green Tree Country Club Estates (median $698,000), while commercial and
                industrial construction continues to expand throughout the metro area.
              </p>
              <p className="leading-relaxed">
                Cultural landmarks include the Permian Basin Petroleum Museum (60,000 square feet dedicated to oil industry
                history), the Bush Convention Center (a 76,949-square-foot facility named for President George H.W. Bush
                and First Lady Barbara Bush), and Centennial Park in the heart of downtown. The 27-hole Green Tree Country
                Club serves as a recreational centerpiece for the community.
              </p>
              <p className="leading-relaxed">
                For roofing contractors, Midland presents a unique market requiring expertise in both high-end residential
                construction and demanding commercial/industrial applications. The combination of severe weather, extreme
                climate conditions, and industrial requirements means roofing systems must meet the highest standards of
                durability and performance.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Working with Insurance Section */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Working with Midland Insurance Companies</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hail damage is so common in Midland that most homeowners will file multiple roof claims during their
                time living here. We have extensive experience working with all major insurance companies and local
                agents serving the Midland area, making the claims process as smooth as possible.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-brand-brown mb-3">Insurance Companies We Work With:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ State Farm (multiple Midland agents)</li>
                    <li>✓ Allstate Insurance</li>
                    <li>✓ Farmers Insurance</li>
                    <li>✓ USAA</li>
                    <li>✓ Liberty Mutual</li>
                    <li>✓ Nationwide</li>
                    <li>✓ Progressive</li>
                    <li>✓ All major carriers</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-brand-brown mb-3">Our Insurance Assistance:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Free damage assessments</li>
                    <li>✓ Comprehensive documentation</li>
                    <li>✓ Direct adjuster communication</li>
                    <li>✓ Damage photo reports</li>
                    <li>✓ Scope of work preparation</li>
                    <li>✓ Supplement negotiation</li>
                    <li>✓ Claims advocacy</li>
                    <li>✓ Deductible assistance programs</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Notable Midland State Farm agents include Roy Nelson (11+ years experience, (432) 682-2251), Eddy Ohlenburg
                (55+ years with State Farm, (432) 682-3456), Lara Sandlin (23+ years experience, (432) 687-1820), and
                Abraham Gutierrez (serving since 1998, (432) 522-1313). We maintain professional relationships with these
                and other local agents to facilitate smooth claim processing for our customers.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Google Map Section */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Serving Midland and the Permian Basin</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-4">Contact Information</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Company:</strong><br />
                        5 Star Commercial Roofing
                      </p>
                      <p>
                        <strong>Phone:</strong><br />
                        <a href="tel:8066226041" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold text-lg">
                          (806) 622-6041
                        </a>
                      </p>
                      <p>
                        <strong>Email:</strong><br />
                        <a href="mailto:admin@5starroofingpros.com" className="text-brand-gold hover:text-brand-gold-vibrant">
                          admin@5starroofingpros.com
                        </a>
                      </p>
                      <p>
                        <strong>Hours:</strong><br />
                        Monday - Sunday: 9:00 AM - 5:00 PM<br />
                        <span className="text-red-600 font-semibold">24/7 Emergency Service Available</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown mb-4">Service Area</h3>
                    <p className="text-gray-700 mb-4">
                      We provide comprehensive roofing services throughout Midland, Midland County, and surrounding
                      Permian Basin communities. Our central Texas Panhandle location allows us to respond quickly
                      to emergency calls anywhere in the region.
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Our service radius includes:</strong> All of Midland proper, Odessa, Stanton, Garden City,
                      and throughout Midland, Ector, Martin, and Glasscock Counties.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '450px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.5!2d-102.0780!3d32.0100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMidland%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Midland, TX Roofing Service Area"
                ></iframe>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="section-title">Frequently Asked Questions About Midland Roofing</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-brand-brown mb-3">
                  How often should I have my roof inspected in Midland?
                </h3>
                <p className="text-gray-700">
                  Due to Midland&apos;s severe hail storms and extreme weather, we recommend professional roof inspections
                  at least twice per year—once in early spring before hail season and once in fall after summer heat. You
                  should also schedule an inspection after any severe storm with large hail or high winds. Many hail damage
                  claims are denied because homeowners wait too long to report damage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-brand-brown mb-3">
                  What type of roofing material lasts longest in Midland&apos;s climate?
                </h3>
                <p className="text-gray-700">
                  For residential applications, impact-resistant architectural shingles with Class 4 hail ratings provide
                  the best balance of cost, durability, and insurance discounts. Metal roofing offers superior longevity
                  (50+ years) and excellent hail resistance when properly installed. For commercial flat roofs, TPO and
                  PVC membranes perform exceptionally well in Midland&apos;s heat and UV exposure, while EPDM offers proven
                  durability in temperature extremes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-brand-brown mb-3">
                  Will my insurance cover hail damage to my Midland roof?
                </h3>
                <p className="text-gray-700">
                  Most homeowners and commercial property insurance policies in Texas cover hail damage, as it&apos;s
                  considered a sudden, unexpected event (a covered peril). However, you must document the damage promptly
                  and file a claim within the timeframe specified in your policy. We provide free inspections after storms,
                  comprehensive photo documentation, and work directly with your insurance adjuster to ensure you receive
                  fair compensation for all damage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-brand-brown mb-3">
                  How long does a typical roof replacement take in Midland?
                </h3>
                <p className="text-gray-700">
                  A standard residential roof replacement typically takes 1-3 days depending on size, complexity, and weather.
                  Commercial projects vary widely based on building size and system type—a small commercial building might
                  take a week, while large industrial facilities could require several weeks with phased installation to
                  minimize business disruption. We work efficiently to protect your property and restore your roof as quickly
                  as possible while maintaining our quality standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-brand-brown mb-3">
                  Do you offer financing for roof replacement in Midland?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer flexible financing options for both residential and commercial roofing projects. We understand
                  that roof replacement is a significant investment, and we work with multiple lending partners to provide
                  competitive rates and terms that fit your budget. Contact us to discuss financing options for your specific
                  project.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-brand-brown mb-3">
                  What makes roofing in Midland different from other Texas cities?
                </h3>
                <p className="text-gray-700">
                  Midland&apos;s location in the Permian Basin creates a perfect storm of extreme conditions: it&apos;s in
                  Hail Alley with some of the largest hailstones ever recorded, experiences over 100-degree annual temperature
                  swings, faces relentless UV exposure at 2,779 feet elevation, and endures high winds across open plains.
                  Additionally, the oil industry creates unique commercial roofing requirements for chemical resistance, heavy
                  loads, and minimal downtime. These factors demand specialized expertise and premium materials that many
                  contractors don&apos;t provide.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Related Resources */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Helpful Roofing Resources</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <a href="/blog/how-to-file-hail-damage-insurance-claim/" className="card-hover p-6 block">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  How to File a Hail Damage Insurance Claim
                </h3>
                <p className="text-gray-600">
                  Step-by-step guide to documenting damage and working with insurance adjusters for maximum claim approval.
                </p>
              </a>
              <a href="/blog/best-roofing-materials-texas-2025/" className="card-hover p-6 block">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Best Roofing Materials for Texas Climate
                </h3>
                <p className="text-gray-600">
                  Compare roofing materials for durability, cost, and performance in extreme West Texas conditions.
                </p>
              </a>
              <a href="/blog/roof-maintenance-checklist-texas/" className="card-hover p-6 block">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Texas Roof Maintenance Checklist
                </h3>
                <p className="text-gray-600">
                  Essential maintenance tasks to extend roof life and prevent costly repairs in harsh climates.
                </p>
              </a>
              <a href="/blog/roof-replacement-cost-texas-2025/" className="card-hover p-6 block">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Roof Replacement Cost Guide for Texas
                </h3>
                <p className="text-gray-600">
                  Understand pricing factors, material costs, and what to expect when replacing your Midland roof.
                </p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protect Your Midland Property Today</h2>
            <p className="cta-text">
              Whether you need emergency hail damage repair, a complete commercial roof replacement, or a residential
              roofing system engineered for the Permian Basin&apos;s extreme conditions, 5 Star Commercial Roofing
              delivers expert craftsmanship backed by industry-leading warranties. Free inspections throughout Midland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041 Now
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">
                Schedule Free Inspection
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Nearby Cities */}
        <FadeIn>
          <section className="section pb-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              Also Serving Nearby Permian Basin Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a href="/odessa-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Odessa
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
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "RoofingContractor",
                "@id": "https://5starroofingpros.com/midland-texas-roofing/#roofingcontractor",
                "name": "5 Star Commercial Roofing - Midland",
                "parentOrganization": {
                  "@id": "https://5starroofingpros.com/#organization"
                },
                "image": "https://5starroofingpros.com/logo.png",
                "description": "Premier roofing contractor serving Midland, Texas and the Permian Basin. Specialists in commercial roofing, hail damage repair, flat roof systems, and residential roofing for extreme West Texas conditions.",
                "telephone": "+18066226041",
                "email": "admin@5starroofingpros.com",
                "url": "https://5starroofingpros.com/midland-texas-roofing/",
                "priceRange": "$$",
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Midland",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Texas"
                    }
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Midland County"
                  },
                  {
                    "@type": "Place",
                    "name": "Permian Basin"
                  }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Roofing Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Hail Damage Roof Repair",
                        "description": "Expert hail damage assessment, documentation, and repair for Midland's severe Hail Alley storms",
                        "areaServed": "Midland, TX"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Commercial Roofing",
                        "description": "TPO, EPDM, PVC, and flat roof systems for oil industry facilities and commercial buildings",
                        "areaServed": "Midland, TX"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Residential Roofing",
                        "description": "Impact-resistant shingles and roofing systems engineered for Permian Basin extremes",
                        "areaServed": "Midland, TX"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Flat Roof Repair",
                        "description": "Specialized flat roof repair, replacement, and maintenance for commercial buildings",
                        "areaServed": "Midland, TX"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Emergency Roof Repair",
                        "description": "24/7 emergency roofing services for storm damage and urgent repairs",
                        "areaServed": "Midland, TX"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "200"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://5starroofingpros.com/midland-texas-roofing/#localbusiness",
                "name": "5 Star Commercial Roofing - Midland",
                "image": "https://5starroofingpros.com/logo.png",
                "telephone": "+18066226041",
                "email": "admin@5starroofingpros.com",
                "url": "https://5starroofingpros.com",
                "priceRange": "$$",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "09:00",
                    "closes": "17:00"
                  }
                ],
                "areaServed": {
                  "@type": "City",
                  "name": "Midland",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Texas"
                  }
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://5starroofingpros.com/midland-texas-roofing/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How often should I have my roof inspected in Midland?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Due to Midland's severe hail storms and extreme weather, we recommend professional roof inspections at least twice per year—once in early spring before hail season and once in fall after summer heat. You should also schedule an inspection after any severe storm with large hail or high winds."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What type of roofing material lasts longest in Midland's climate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For residential applications, impact-resistant architectural shingles with Class 4 hail ratings provide the best balance of cost, durability, and insurance discounts. Metal roofing offers superior longevity (50+ years) and excellent hail resistance. For commercial flat roofs, TPO and PVC membranes perform exceptionally well in Midland's heat and UV exposure."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will my insurance cover hail damage to my Midland roof?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most homeowners and commercial property insurance policies in Texas cover hail damage, as it's considered a covered peril. However, you must document the damage promptly and file a claim within the timeframe specified in your policy. We provide free inspections, comprehensive documentation, and work directly with insurance adjusters."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes roofing in Midland different from other Texas cities?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Midland's location in the Permian Basin creates extreme conditions: it's in Hail Alley with record-breaking hailstones, experiences over 100-degree annual temperature swings, faces intense UV exposure at 2,779 feet elevation, and endures high winds. The oil industry also creates unique commercial roofing requirements for chemical resistance and minimal downtime."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </div>
  );
}
