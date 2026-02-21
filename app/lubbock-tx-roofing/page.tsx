import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/lubbock-tx-roofing/' },
  title: 'Roofing in Lubbock TX | 5 Star Roofing',
  description: "Roofing in Lubbock. South Plains weather experts. Residential and commercial services. Lubbock experiences 6-8 hailstorms annually. Call (806) 622-6041",
};

export default function LubbockRoofingPage() {
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
                      "name": "Lubbock",
                      "url": "/lubbock-tx-roofing/"
              }
      ]} />


      {/* Sticky Contact Bar */}
      <StickyContactBar />

      {/* Hero Section - Conversion-Optimized */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-19-1280w.webp)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Free Same-Day Lubbock Roof Inspections After Severe Hail
            </h1>
            <p className="hero-subtitle">
              We Handle Hail Damage &amp; Insurance Claims – No Sales Pressure. Local Storm Experts.
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
                title="Get Your Free Roof Inspection Today"
                subtitle="No Sales Pressure. We Handle Insurance Claims. Fill out the form below and we'll contact you within 24 hours."
              />
            </div>
          </section>
        </FadeIn>

        {/* Trust Signals - Social Proof Early */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="text-center mb-8">
              <div className="text-5xl mb-3">⭐⭐⭐⭐⭐</div>
              <h2 className="text-3xl font-bold mb-2">5.0 Rating • 150+ Happy Customers</h2>
              <p className="text-xl text-gray-600">Trusted by Lubbock Homeowners & Businesses Since 2010</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              <div className="testimonial-card-visual">
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "After the May storm damaged roofs all over Shadow Hills, 5 Star had our property inspected within 24 hours. They handled our insurance claim perfectly and we had a beautiful new impact-resistant roof in three weeks."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-author-info">
                    <p className="testimonial-author-name">David K.</p>
                    <p className="testimonial-author-location">Shadow Hills</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card-visual">
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "We own six rental properties near Texas Tech. 5 Star has replaced roofs on four of them now, always on schedule and on budget. They understand the rental market and work around our tenants&apos; schedules."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-author-info">
                    <p className="testimonial-author-name">Jennifer M.</p>
                    <p className="testimonial-author-location">Property Owner</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card-visual">
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "Call at 11pm with water pouring into our Tech Terrace home. They arrived by midnight with tarps and stopped the leak immediately. Permanent repairs done within a week."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-author-info">
                    <p className="testimonial-author-name">Robert & Susan T.</p>
                    <p className="testimonial-author-location">Tech Terrace</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Trust Badges */}
        <FadeIn delay={0.1}>
          <section className="section">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="trust-badge">
                <div className="trust-badge-icon">🎓</div>
                <h3 className="trust-badge-title">Texas Tech Specialists</h3>
                <p className="trust-badge-text">
                  Extensive experience with university area properties, student housing, and campus-adjacent buildings.
                </p>
              </div>
              <div className="trust-badge">
                <div className="trust-badge-icon">⚡</div>
                <h3 className="trust-badge-title">Same-Day Response</h3>
                <p className="trust-badge-text">
                  After major hail events, we provide same-day inspections throughout Lubbock County.
                </p>
              </div>
              <div className="trust-badge">
                <div className="trust-badge-icon">🌪️</div>
                <h3 className="trust-badge-title">Hail Alley Experts</h3>
                <p className="trust-badge-text">
                  Specialists in Class 4 impact-resistant systems, insurance documentation, and storm damage restoration.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Pain Points - Brief */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Your Trusted Roofing Partner in Lubbock&apos;s Harsh Climate
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Lubbock&apos;s position in "Hail Alley" means frequent severe hail storms, extreme temperature swings, and relentless wind. With 273 hail reports in the past year alone, your roof faces challenges few other Texas cities experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                5 Star Commercial Roofing has protected Lubbock homes and businesses for over a decade. We understand the unique roofing challenges of the South Plains and provide solutions built to last.
              </p>
            </div>
          </section>
        </FadeIn>


        {/* Services in Lubbock */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Comprehensive Roofing Services in Lubbock</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage Repair */}
            <FadeIn delay={0.1}>
              <InteractiveCard>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-25-1280w.jpg" alt="New roof installed after hail damage near Channing TX - Impact-resistant shingles" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Lubbock sits squarely in "Hail Alley" with 273 hail reports in the past year alone. From Tech Terrace to Whisperwood, from Arnett Benson to Lakeridge, we&apos;ve restored thousands of hail-damaged roofs across the Hub City. Recent major events include the May 2024 storm that brought record-breaking hailstones to the South Plains region, and the devastating June 2023 event with softball-sized hail near Woodrow.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>What sets us apart:</strong> We use drone technology and professional photography to document every impact mark, granule loss pattern, and compromised shingle. Our detailed reports meet the exact standards required by State Farm, Allstate, Farmers, and all major carriers operating in Lubbock. We&apos;ve successfully processed hundreds of claims and know how to get your roof replacement approved.
                    </p>
                    <p className="text-gray-600 mb-4">
                      With climate change intensifying hail patterns (2023 saw 141 days with large hail - more than any year since 2003), protecting your Lubbock property with Class 4 impact-resistant shingles isn&apos;t just smart - it&apos;s essential. These premium materials can withstand future storms and often qualify for insurance discounts.
                    </p>
                    <a
                      href="/hail-damage-repair-lubbock/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Learn More About Hail Damage Repair in Lubbock →
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
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-26-1280w.jpg" alt="Completed residential shingle roof with clean finish in West Texas - 5 Star Roofing" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Whether you own a charming 1930s home in historic Tech Terrace (Lubbock&apos;s first designated suburb), a family residence in the quiet streets of Whisperwood, an upscale property near the LakeRidge Country Club, or a student rental near Texas Tech University, we provide complete residential roofing services tailored to your property&apos;s unique needs.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Lubbock&apos;s residential neighborhoods each present distinct challenges. Tech Terrace&apos;s tree-lined streets and older construction require special attention to ventilation and structural integrity. Shadow Hills properties around the golf course demand aesthetics that match the neighborhood&apos;s prestige. North and South Overton homes - with Overton&apos;s transformation into one of Lubbock&apos;s trendiest areas - need modern, energy-efficient solutions that complement contemporary renovations.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Our residential services include:</strong> Complete roof replacement with premium architectural shingles, roof repair for storm damage, attic ventilation upgrades crucial for Lubbock&apos;s 100°F+ summers, energy-efficient cool roof systems that reduce cooling costs, and gutter installation/replacement to handle occasional heavy rains. Every project includes manufacturer warranties up to 50 years plus our workmanship guarantee.
                    </p>
                    <a
                      href="/residential-roofing-lubbock/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Explore Residential Roofing in Lubbock →
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </FadeIn>

            {/* Commercial Roofing */}
            <FadeIn delay={0.3}>
              <InteractiveCard>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-7-1280w.jpg" alt="Commercial EPDM flat roof on Lubbock area business building - Professional installation" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Serving Lubbock&apos;s diverse business community from downtown&apos;s historic Depot District (home to the iconic Buddy Holly Center) to modern facilities along the Marsha Sharp Freeway corridor, from retail centers near Loop 289 to Texas Tech University campus buildings. We&apos;ve installed and maintained commercial roofing systems on everything from the 140,000-square-foot Rawls College of Business to local restaurants in the revitalized North Overton district.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Texas Tech&apos;s campus presents unique commercial roofing challenges with buildings like Jones AT&T Stadium (capacity 60,000+, currently undergoing a $242 million renovation), the Student Union Building at 15th Street and Akron Avenue, and numerous academic facilities requiring minimal disruption during installations. We&apos;ve worked extensively with university-area properties and understand the scheduling, access, and quality requirements these projects demand.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Commercial expertise includes:</strong> TPO and EPDM flat roof systems engineered for Lubbock&apos;s extreme weather, PVC membrane systems for superior hail resistance and chemical applications, built-up roofing (BUR) providing multi-layer protection for industrial buildings, modified bitumen installations with enhanced UV resistance, metal roofing for warehouses and agricultural facilities common in the South Plains, preventive maintenance programs that extend roof life and prevent costly prompt repairs, and roof coating systems that restore aging commercial roofs at a fraction of replacement cost.
                    </p>
                    <a
                      href="/commercial-roofing-lubbock/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      View Commercial Roofing Services in Lubbock →
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
                    <div className="text-6xl mb-4">🔩</div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Metal Roof Installation
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Metal roofing is increasingly popular in Lubbock - and for excellent reasons. Lubbock&apos;s climate is uniquely challenging: sustained winds averaging 12+ mph with gusts frequently exceeding 50 mph (one of America&apos;s windiest cities), temperature swings from 100°F+ summer days to sub-zero winter nights, intense UV exposure at 3,256 feet elevation, and severe hail storms that can destroy conventional shingles in minutes.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Metal roofing handles all these conditions better than any other material. Standing seam metal roofs can withstand winds up to 120 mph when properly installed. Impact-resistant metal shingles can survive softball-sized hail that would total an asphalt roof. Metal&apos;s reflective properties reduce cooling costs significantly during Lubbock&apos;s brutal summers. And with minimal maintenance, metal roofs can last 50+ years - often outlasting the building itself.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Metal roofing options:</strong> Standing seam metal roofing (the gold standard for commercial and upscale residential), stone-coated metal shingles that look like traditional roofing, corrugated metal panels perfect for agricultural buildings, and commercial metal roofing systems with advanced coatings. All backed by industry-leading warranties and our expert installation guarantee.
                    </p>
                    <a
                      href="/metal-roofing-lubbock/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Discover Metal Roofing in Lubbock →
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </FadeIn>

            {/* Roof Inspections */}
            <FadeIn delay={0.5}>
              <InteractiveCard>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Free Roof Inspections
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      In Lubbock&apos;s severe weather environment, waiting for a leak to discover roof damage is costly. Hail impacts that seem minor can compromise your roof&apos;s integrity, leading to failures months or years later. Wind can lift shingles without you noticing from ground level. UV degradation happens gradually until suddenly your roof is failing prematurely.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Our free roof inspections throughout Lubbock use advanced technology including drone photography to spot damage invisible from the ground, infrared imaging to detect hidden moisture infiltration, and professional documentation that meets insurance company standards. We&apos;ll check for hail damage from recent storms, wind damage to shingles and flashing, proper attic ventilation (critical in Lubbock&apos;s extreme heat), and overall condition assessment with remaining lifespan estimates.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Inspection includes:</strong> Complete roof surface assessment, attic ventilation and insulation check, shingle condition and granule loss analysis, flashing and penetration inspection, gutter evaluation, and detailed photo report you can share with insurance companies. 100% free, no obligation, no pressure sales tactics.
                    </p>
                    <a
                      href="/roof-inspections-lubbock/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Schedule Your Free Lubbock Inspection →
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </FadeIn>

            {/* Storm Repairs */}
            <FadeIn delay={0.6}>
              <InteractiveCard className="bg-red-50 border-2 border-red-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      Storm Damage Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Available for roofing issues throughout Lubbock.</strong> Storm damage, roof leaks, wind damage, or structural issues can&apos;t wait. Water damage compounds rapidly - what starts as a small leak can cause thousands in interior damage within hours. We provide tarping, temporary leak repairs, storm damage assessment, and same-day solutions to protect your property until permanent repairs can be completed.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a>
                      {" "}now for immediate assistance anywhere in Lubbock - from Tech Terrace to Shadow Hills, from Arnett Benson to Whisperwood. Our our crews are standing by.
                    </p>
                    <a
                      href="/roof-repair-lubbock/"
                      className="text-red-700 font-semibold hover:text-red-800 inline-flex items-center gap-2"
                    >
                      s →
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </FadeIn>
          </div>
        </section>

        {/* Lubbock-Specific Roofing Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Understanding Lubbock&apos;s Unique Roofing Challenges
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌪️ Severe Hail in "Hail Alley"</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lubbock&apos;s location in the heart of "Hail Alley" means frequent, severe hail events. The South Plains region sees warm, moist Gulf air colliding with cooler, dry air from the Rockies - creating perfect conditions for supercell thunderstorms and large hail. In the past 12 months alone, Lubbock has had 273 hail reports. Recent devastating events include the May 2024 storm with record-breaking hailstones near Whiteface (west of Levelland), and the June 2023 event producing 4-inch softball-sized hail near Woodrow. Even quarter-sized hail can cause significant granule loss on standard asphalt shingles, leading to premature aging, compromised water resistance, and eventual leaks. Golf ball to baseball-sized hail - common in Lubbock - can total a roof in minutes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">💨 Relentless High Winds</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lubbock ranks among America&apos;s windiest cities with sustained winds averaging 12+ mph year-round and frequent gusts exceeding 50 mph. The flat South Plains topography provides zero wind breaks, allowing unobstructed airflow across the region. These persistent winds create constant uplift pressure on roofing materials, testing shingle adhesion and flashing integrity daily. Improperly installed shingles or materials not rated for high winds will fail prematurely. Wind can also drive rain horizontally under shingles and around flashing - a unique challenge requiring expert installation techniques and premium materials with enhanced wind ratings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌡️ Extreme Temperature Swings</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lubbock&apos;s continental climate produces some of Texas&apos; most extreme temperature variations. Summer days routinely exceed 100°F with roof surface temperatures reaching 160°F+. Winter nights can plunge below zero. These 120+ degree annual temperature swings cause continuous expansion and contraction in roofing materials - flexing, stressing, and eventually cracking shingles, sealants, and flashing. Lubbock can experience 40-50 degree temperature drops within 24 hours as cold fronts sweep through. This thermal cycling accelerates wear dramatically compared to moderate climates. Materials must be specifically rated for extreme temperature performance to survive Lubbock&apos;s climate.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">☀️ Intense UV Radiation</h3>
                <p className="text-gray-700 leading-relaxed">
                  At 3,256 feet elevation with over 260 days of sunshine annually, Lubbock roofs face UV exposure more intense than coastal Texas cities. UV radiation breaks down the petroleum-based compounds in asphalt shingles, causing brittleness, cracking, and accelerated granule loss. This is why standard shingles rated for 25-30 year lifespans often fail in 15-20 years in Lubbock. The solution: UV-stabilized shingles with enhanced granule adhesion and Class 4 impact-resistant materials designed specifically for harsh UV environments. These premium products cost slightly more upfront but last significantly longer in Lubbock&apos;s punishing sun.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌪️ South Plains Dust Storms</h3>
                <p className="text-gray-700 leading-relaxed">
                  The South Plains is notorious for dust storms that can reduce visibility to near zero and sandblast exposed surfaces with fine particulates. While less damaging than hail, persistent dust accumulation clogs gutters and valleys, traps moisture against roofing materials, and can accelerate wear on protective coatings. Dust in gutters creates weight and drainage issues, leading to overflow during Lubbock&apos;s occasional heavy rains. Proper gutter guards and regular maintenance are essential for Lubbock properties - something we emphasize with all our installations.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Lubbock Neighborhoods We Proudly Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From historic neighborhoods near Texas Tech to new developments on Lubbock&apos;s growing edges, we provide expert roofing services throughout the Hub City:
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">University Area</h3>
                  <ul className="space-y-2">
                    <li>✓ Tech Terrace (U.N.I.T.)</li>
                    <li>✓ North Overton</li>
                    <li>✓ South Overton</li>
                    <li>✓ Clapp Park</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Established Areas</h3>
                  <ul className="space-y-2">
                    <li>✓ Arnett Benson</li>
                    <li>✓ Whisperwood</li>
                    <li>✓ Wheelock</li>
                    <li>✓ Monterey</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Upscale Communities</h3>
                  <ul className="space-y-2">
                    <li>✓ Shadow Hills</li>
                    <li>✓ Lakeridge</li>
                    <li>✓ Windsor Park</li>
                    <li>✓ Preston Place</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">All Areas</h3>
                  <ul className="space-y-2">
                    <li>✓ Southwest Lubbock</li>
                    <li>✓ Northwest Lubbock</li>
                    <li>✓ Downtown/Depot District</li>
                    <li>✓ All Lubbock County</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Whether you&apos;re near the Buddy Holly Center in the historic Depot District, own property around the LakeRidge Country Club, live in the tree-lined streets of Tech Terrace, or anywhere else in Lubbock and surrounding communities like Shallowater, New Deal, or Wolfforth - we provide fast, professional roofing services throughout the entire region.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Texas Tech Specific Section */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Serving Texas Tech University &amp; Surrounding Properties
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6">
                Texas Tech University is central to Lubbock&apos;s identity and economy, and we&apos;ve built extensive expertise serving university-area properties. Whether you own student housing near campus, commercial property along University Avenue, or work with campus facilities, we understand the unique requirements these properties demand.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Notable Campus Buildings We&apos;ve Worked Near:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Jones AT&T Stadium</strong> - 60,000+ capacity football venue undergoing $242M renovation</li>
                    <li>✓ <strong>Rawls College of Business</strong> - 140,000 sq ft LEED Gold certified building on Flint Avenue</li>
                    <li>✓ <strong>Student Union Building</strong> - 15th Street &amp; Akron Avenue, heart of campus life</li>
                    <li>✓ <strong>Whitacre College of Engineering</strong> - Including Petroleum Engineering Research facilities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Student Housing &amp; Rental Properties:</h3>
                  <p className="text-gray-700 mb-3">
                    Tech Terrace and Overton neighborhoods contain hundreds of rental properties housing Texas Tech students. We work with property owners and management companies to provide:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Competitive pricing for multi-property portfolios</li>
                    <li>✓ Flexible scheduling around academic calendar</li>
                    <li>✓ Durable materials that handle high-traffic properties</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Insurance Companies Section */}
        <FadeIn>
          <section className="section mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Working with Lubbock Insurance Companies
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6">
                We work directly with all major insurance carriers serving Lubbock. Our detailed documentation, professional photography, and comprehensive damage reports meet the exact standards adjusters require. We&apos;ve successfully processed hundreds of claims with:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <p className="font-bold text-brand-brown">State Farm</p>
                  <p className="text-sm text-gray-600">Multiple Lubbock agents including Jason Grisham, Peter Griffith, Chris Prather, Ana Borrego</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <p className="font-bold text-brand-brown">Farmers Insurance</p>
                  <p className="text-sm text-gray-600">Local agents Rebecca Craycraft, Cassandra Hernandez, Scott Fillingim</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <p className="font-bold text-brand-brown">Allstate</p>
                  <p className="text-sm text-gray-600">Patrick Bailey and other Lubbock agents</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We also work with USAA, Nationwide, Liberty Mutual, Progressive, and all other major carriers. Our insurance claim expertise means you get maximum coverage for your damage - many clients are surprised to learn their roof damage qualifies for full replacement when they expected only repairs.
              </p>
            </div>
          </section>
        </FadeIn>


        {/* Map Section */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Serving Lubbock &amp; the South Plains</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-4">5 Star Commercial Roofing</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Serving:</strong><br />
                        Lubbock, TX and surrounding<br />
                        South Plains communities
                      </p>
                      <p>
                        <strong>Phone:</strong><br />
                        <a href="tel:8066226041" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold text-xl">
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
                        Monday - Sunday<br />
                        9:00 AM - 5:00 PM<br />
                        <span className="text-red-600 font-semibold"></span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown mb-4">Complete Lubbock Coverage</h3>
                    <p className="text-gray-700 mb-4">
                      We provide comprehensive roofing services throughout Lubbock and Lubbock County, including:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>✓ <strong>All Lubbock neighborhoods</strong> - from downtown to Loop 289</li>
                      <li>✓ <strong>Texas Tech University area</strong> - Tech Terrace, Overton, university properties</li>
                      <li>✓ <strong>Shallowater</strong> - 15-minute response</li>
                      <li>✓ <strong>New Deal, Wolfforth, Idalou</strong> - complete county coverage</li>
                      <li>✓ <strong>Commercial district</strong> - Depot District, Marsha Sharp Freeway corridor</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419875.5470997!2d-101.9897!3d33.5779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12add1dad94b%3A0x2a20f4a640654f2!2sLubbock%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="5 Star Commercial Roofing Service Area in Lubbock, TX"
                ></iframe>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Lubbock Roofing FAQs
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="faq-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does Lubbock&apos;s position in Hail Alley affect my insurance rates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lubbock&apos;s location in the heart of Hail Alley means insurance premiums are among the highest in Texas for wind and hail coverage. However, upgrading to Class 4 impact-resistant shingles can reduce your hail coverage premium by up to 35%. With 273 hail reports in the past year alone, this upgrade typically pays for itself within 5-7 years through insurance savings while providing superior protection.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you handle roofing for Texas Tech University area rental properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we work extensively with property owners and management companies in Tech Terrace, North and South Overton, and other university-area neighborhoods. We offer competitive pricing for multi-property portfolios, schedule work around the academic calendar to minimize tenant disruption, and install durable materials that withstand the higher traffic typical of student rental properties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the average cost of a roof replacement in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Roof replacement costs in Lubbock vary based on size, materials, and complexity. A typical 2,000 sq ft home with architectural shingles ranges from $8,000 to $15,000, while Class 4 impact-resistant shingles run $12,000 to $20,000. However, most hail damage replacements in Lubbock are covered by insurance, with homeowners only responsible for their deductible. We provide free inspections and detailed estimates before any work begins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why do roofs in Lubbock fail faster than in other Texas cities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lubbock roofs face a combination of factors that accelerate wear: intense UV radiation at 3,256 feet elevation with 260+ sunny days annually, sustained winds averaging 12+ mph that constantly stress shingle adhesion, extreme temperature swings exceeding 120 degrees annually, frequent hail impacts, and South Plains dust storms that clog gutters and trap moisture. Standard shingles rated for 25-30 years often fail in 15-20 years here. Premium UV-stabilized materials are essential.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How soon after a Lubbock hailstorm should I get my roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We recommend getting a professional inspection within 72 hours of any significant hail event. Texas law gives you up to 2 years to file a hail damage claim, but waiting allows hidden damage to worsen, potentially leading to leaks, mold growth, and interior damage. Early inspection also ensures your claim is documented while storm evidence is fresh. We provide free same-day inspections throughout Lubbock County after major storms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What neighborhoods in Lubbock do you serve?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We serve all Lubbock neighborhoods and surrounding communities including Tech Terrace, Shadow Hills, Whisperwood, Arnett Benson, Lakeridge, Monterey, North and South Overton, Clapp Park, Preston Place, Windsor Park, the Depot District, and all areas within Loop 289. We also serve Shallowater, New Deal, Wolfforth, Idalou, and all of Lubbock County.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready to Protect Your Lubbock Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, prompt repairs, or a complete roof replacement, we&apos;re here to help. Serving Lubbock with honesty, integrity, and expert craftsmanship for over a decade. Most hail damage repairs are covered 100% by insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">
                Call (806) 622-6041 Now
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
              Also Serving Nearby West Texas Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Amarillo
              </a>
              <span className="text-gray-400">•</span>
              <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Midland
              </a>
              <span className="text-gray-400">•</span>
              <a href="/odessa-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Odessa
              </a>
              <span className="text-gray-400">•</span>
              <a href="/service-areas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Abilene
              </a>
              <span className="text-gray-400">•</span>
              <a href="/plainview-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Plainview
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
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/lubbock-texas-roofing/",
            "name": "5 Star Roofing",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
            "description": "Professional roofing contractor serving Lubbock, Texas and the South Plains. Expert hail damage repair, residential and commercial roofing services, Texas Tech area specialist.",
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
            "telephone": "(806) 622-6041",
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
            "areaServed": [
              {
                "@type": "City",
                "name": "Lubbock",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
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
                "name": "Overton"
              },
              {
                "@type": "Place",
                "name": "Whisperwood"
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
                    "description": "Expert hail damage assessment, documentation, and repair services for Lubbock's severe hail storms"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete residential roof replacement and repair services throughout Lubbock neighborhoods"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing",
                    "description": "Commercial flat roof systems, TPO, EPDM, and maintenance for Lubbock businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Installation",
                    "description": "Standing seam and metal roofing systems designed for Lubbock's extreme weather"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Roof Inspections",
                    "description": "Comprehensive roof inspections with drone technology and no obligation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "description": "professional roofing services for urgent situations throughout Lubbock"
                  }
                }
              ]
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
              {"@type":"Question","name":"How does Lubbock's position in Hail Alley affect my insurance rates?","acceptedAnswer":{"@type":"Answer","text":"Lubbock's location in the heart of Hail Alley means insurance premiums are among the highest in Texas for wind and hail coverage. However, upgrading to Class 4 impact-resistant shingles can reduce your hail coverage premium by up to 35%. With 273 hail reports in the past year alone, this upgrade typically pays for itself within 5-7 years through insurance savings while providing superior protection."}},
              {"@type":"Question","name":"Do you handle roofing for Texas Tech University area rental properties?","acceptedAnswer":{"@type":"Answer","text":"Yes, we work extensively with property owners and management companies in Tech Terrace, North and South Overton, and other university-area neighborhoods. We offer competitive pricing for multi-property portfolios, schedule work around the academic calendar to minimize tenant disruption, and install durable materials that withstand the higher traffic typical of student rental properties."}},
              {"@type":"Question","name":"What is the average cost of a roof replacement in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Roof replacement costs in Lubbock vary based on size, materials, and complexity. A typical 2,000 sq ft home with architectural shingles ranges from $8,000 to $15,000, while Class 4 impact-resistant shingles run $12,000 to $20,000. However, most hail damage replacements in Lubbock are covered by insurance, with homeowners only responsible for their deductible. We provide free inspections and detailed estimates before any work begins."}},
              {"@type":"Question","name":"Why do roofs in Lubbock fail faster than in other Texas cities?","acceptedAnswer":{"@type":"Answer","text":"Lubbock roofs face a combination of factors that accelerate wear: intense UV radiation at 3,256 feet elevation with 260+ sunny days annually, sustained winds averaging 12+ mph that constantly stress shingle adhesion, extreme temperature swings exceeding 120 degrees annually, frequent hail impacts, and South Plains dust storms that clog gutters and trap moisture. Standard shingles rated for 25-30 years often fail in 15-20 years here."}},
              {"@type":"Question","name":"How soon after a Lubbock hailstorm should I get my roof inspected?","acceptedAnswer":{"@type":"Answer","text":"We recommend getting a professional inspection within 72 hours of any significant hail event. Texas law gives you up to 2 years to file a hail damage claim, but waiting allows hidden damage to worsen, potentially leading to leaks, mold growth, and interior damage. Early inspection also ensures your claim is documented while storm evidence is fresh. We provide free same-day inspections throughout Lubbock County after major storms."}},
              {"@type":"Question","name":"What neighborhoods in Lubbock do you serve?","acceptedAnswer":{"@type":"Answer","text":"We serve all Lubbock neighborhoods and surrounding communities including Tech Terrace, Shadow Hills, Whisperwood, Arnett Benson, Lakeridge, Monterey, North and South Overton, Clapp Park, Preston Place, Windsor Park, the Depot District, and all areas within Loop 289. We also serve Shallowater, New Deal, Wolfforth, Idalou, and all of Lubbock County."}}
            ]
          })
        }}
      />
    </div>
  );
}
