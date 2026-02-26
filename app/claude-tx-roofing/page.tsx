import { FadeIn } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/claude-tx-roofing/' },
  title: 'Roofing Claude TX | Hail Damage Specialists | 5 Star Roofing',
  description: "Roofing services in Claude, Texas Panhandle. Just 25 miles east of Amarillo on US-287. Hail damage repair, residential & commercial roofing. Call (806) 622-6041",
  openGraph: {
    title: "Roofing Claude TX | Hail Damage Specialists | 5 Star Roofing",
    description: "Roofing services in Claude, Texas Panhandle. Just 25 miles east of Amarillo on US-287. Hail damage repair, residential & commercial roofing. Call (806) 622-6041",
    url: "https://5starroofingpros.com/claude-tx-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ClaudeRoofingPage() {
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
                      "name": "Claude",
                      "url": "/claude-tx-roofing/"
              }
      ]} />


      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-morton-41-1280w.webp)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Roofing Services in Claude, Texas
            </h1>
            <p className="hero-subtitle">
              Proudly Serving Claude from Our Amarillo Location - 25 Miles West on US-287
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">
                Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary text-lg px-8 py-4">
                Get Free Inspection
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom">
        {/* Introduction */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Your Trusted Roofing Partner in Claude, TX
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                From our Amarillo headquarters at 2909 S Western St, 5 Star Commercial Roofing provides
                comprehensive roofing services to Claude, Texas - a charming community of 1,200 residents
                along US Highway 287 in Armstrong County. Just 25 miles east of Amarillo, we're close
                enough for fast service while understanding the unique character of rural Texas communities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Claude sits at the gateway to Palo Duro Canyon and faces the full spectrum of Texas Panhandle
                weather: severe hail storms, powerful straight-line winds, dramatic temperature swings, and
                intense sunshine. Your roof is your first line of defense, and we're here to keep it strong.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Claude */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Claude Residents Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🛣️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Easy Access via US-287</h3>
                <p className="text-gray-600">
                  Just 25 miles from Claude on US Highway 287. We make the drive regularly and can
                  reach you within 30 minutes for appointments or emergencies.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Small Town Values</h3>
                <p className="text-gray-600">
                  We understand Claude's tight-knit community. Our reputation is built on honesty,
                  quality work, and treating customers like neighbors.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Specialists</h3>
                <p className="text-gray-600">
                  Armstrong County sees frequent severe weather. We specialize in hail damage detection,
                  insurance claim documentation, and rapid storm response.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Roofing Services */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Complete Roofing Services for Claude, TX</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage */}
            <FadeIn delay={0.1}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-17-1280w.jpg" alt="Roof replacement completed after hail damage near Channing TX - New shingles installed" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Claude is no stranger to severe hail storms. Located in Hail Alley with minimal
                      storm protection, the area experiences frequent damaging hail events. From the
                      historic downtown to homes along FM 1260, we've helped countless Claude residents
                      recover from hail damage.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Our comprehensive service:</strong> Free post-storm inspections, detailed
                      photo documentation showing hail impact points, granule loss analysis, insurance
                      claim assistance, and complete roof replacement when necessary. We handle the
                      paperwork so you don't have to.
                    </p>
                    <a
                      href="/hail-damage-repair-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Learn About Hail Damage Repair →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Residential */}
            <FadeIn delay={0.2}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-18-1280w.jpg" alt="Residential shingle roof replacement completed in Amarillo area - Quality craftsmanship" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Whether you own a historic home near Claude's downtown square, a ranch property
                      along Tule Creek, or a newer home by Claude ISD, we provide complete residential
                      roofing services tailored to your needs. We understand the mix of architectural
                      styles in Claude and work with materials that match your home's character.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Residential services:</strong> Complete roof replacement, asphalt shingle
                      installation (including impact-resistant options), architectural shingles, roof
                      repair and maintenance, attic ventilation upgrades, and comprehensive warranties.
                    </p>
                    <a
                      href="/residential-roofing-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Explore Residential Roofing →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Commercial */}
            <FadeIn delay={0.3}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-amarillo-5-1280w.jpg" alt="Commercial flat roof project in Amarillo TX with EPDM membrane - 5 Star Roofing" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Claude's business community - from Main Street shops to agricultural facilities -
                      relies on durable commercial roofing. We specialize in flat roof systems, metal
                      buildings, and low-slope roofs common in small-town Texas commercial construction.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Commercial expertise:</strong> TPO single-ply roofing, EPDM rubber roofing,
                      modified bitumen systems, metal roof installation and repair, roof coating for
                      extending roof life, preventive maintenance plans, and .
                    </p>
                    <a
                      href="/commercial-roofing-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      View Commercial Roofing →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Metal Roofing */}
            <FadeIn delay={0.4}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-amarillo-40-1280w.webp" alt="Standing seam metal roof on Claude TX area property - Durable hail-resistant roofing" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Metal Roofing Systems
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Metal roofing is increasingly popular in Claude for good reason. It handles West
                      Texas weather exceptionally well - high winds don't lift it, hail typically doesn't
                      penetrate it, and it can last 50+ years with minimal maintenance. Perfect for both
                      homes and agricultural buildings.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Metal roofing options:</strong> Standing seam metal roofs, corrugated
                      metal panels, stone-coated steel shingles, R-panel and U-panel systems, and
                      custom metal fabrication. Energy-efficient colors available.
                    </p>
                    <a
                      href="/metal-roofing-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Discover Metal Roofing →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Free Inspections */}
            <FadeIn delay={0.5}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-san-angelo-21-1280w.jpg" alt="Completed roofing project in San Angelo TX demonstrating quality inspection standards" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Free Roof Inspections
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Don't wait for a leak to discover roof damage. Our free, no-obligation roof
                      inspections can catch problems early - especially after Armstrong County's
                      frequent hail storms. We'll assess your roof's condition and provide an honest
                      evaluation.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Inspection includes:</strong> Complete exterior roof assessment, shingle
                      condition analysis, flashing inspection, ventilation check, gutter evaluation,
                      detailed photo report, and written recommendations. 100% free with no pressure.
                    </p>
                    <a
                      href="/roof-inspections-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Schedule Free Inspection →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Storm Services */}
            <FadeIn delay={0.6}>
              <div className="card-hover p-8 bg-red-50 border-2 border-red-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-22-1280w.jpg" alt="Emergency roof repair work completed near Perryton TX after severe storm damage" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>roofing issues don't keep business hours.</strong> Whether it's
                      2am after a hailstorm or Sunday afternoon with water pouring in, we provide
                      professional roofing services to Claude. tarping, leak repairs,
                      and storm damage mitigation available anytime.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a>
                      {" "}now for immediate professional assistance. We'll be on the road to Claude within minutes.
                    </p>
                    <a
                      href="/roof-repair-amarillo/"
                      className="text-red-700 font-semibold hover:text-red-800 inline-flex items-center gap-2"
                    >
                      s →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Claude's Roofing Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges Specific to Claude, TX
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌪️ Severe Thunderstorms & Hail</h3>
                <p className="text-gray-700">
                  Claude sits in the heart of Hail Alley where warm, moist air from the Gulf collides
                  with cool, dry air from the Rockies. This creates explosive thunderstorms from March
                  through September, often producing baseball-sized hail. Impact-resistant shingles are
                  strongly recommended for all Claude properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">💨 Powerful Straight-Line Winds</h3>
                <p className="text-gray-700">
                  Armstrong County's open terrain allows wind to build tremendous speed. Sustained winds
                  of 40+ mph are common, with gusts exceeding 70 mph during severe weather. Proper roof
                  securement with high-wind rated materials is critical - standard installation methods
                  simply won't hold up.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌡️ Extreme Temperature Variation</h3>
                <p className="text-gray-700">
                  Claude experiences some of Texas' most dramatic temperature swings. Summer days regularly
                  hit 100°F while winter nights can drop below zero. This 100+ degree temperature range
                  causes constant expansion and contraction, stressing shingles, flashing, and fasteners.
                  We use materials engineered for these extremes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">☀️ Intense UV Radiation</h3>
                <p className="text-gray-700">
                  At nearly 3,000 feet elevation with over 265 days of sunshine annually, Claude roofs
                  face relentless UV exposure that degrades organic materials. Asphalt shingles without
                  UV inhibitors can fail prematurely. We recommend UV-stabilized shingles or metal roofing
                  for maximum longevity.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Areas We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Complete Coverage Throughout Claude</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                We serve all of Claude and surrounding Armstrong County areas, including:
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 mb-8">
                <ul className="space-y-2">
                  <li>✓ Downtown Claude</li>
                  <li>✓ Claude ISD area</li>
                  <li>✓ US Highway 287 corridor</li>
                  <li>✓ FM 1260 properties</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Tule Creek area</li>
                  <li>✓ Rural ranch properties</li>
                  <li>✓ Commercial Main Street</li>
                  <li>✓ Surrounding Armstrong County</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4 text-center">
                  Fast Service from Amarillo
                </h3>
                <p className="text-gray-700 text-center mb-4">
                  <strong>5 Star Commercial Roofing</strong><br />
                  2909 S Western St, Amarillo, TX 79109<br />
                  25 miles west of Claude via US Highway 287 (30-minute drive)
                </p>
                <p className="text-gray-700 text-center">
                  <strong>Call anytime:</strong>{" "}
                  <a href="tel:8066226041" className="text-brand-gold font-bold hover:text-brand-gold-vibrant">
                    (806) 622-6041
                  </a>
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Related Services */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              More Roofing Services Near Claude
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <a href="/amarillo-texas-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Amarillo Roofing Services</h3>
                <p className="text-gray-600 text-sm">Complete roofing services in Amarillo (25 miles west)</p>
              </a>
              <a href="/canyon-texas-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Canyon Roofing</h3>
                <p className="text-gray-600 text-sm">Roofing services in Canyon near Palo Duro Canyon</p>
              </a>
              <a href="/hail-damage-repair-amarillo/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Hail Damage Repair</h3>
                <p className="text-gray-600 text-sm">Expert hail damage assessment and insurance claims</p>
              </a>
              <a href="/residential-roofing-amarillo/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Residential Roofing</h3>
                <p className="text-gray-600 text-sm">Complete home roofing services</p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Claude Roofing FAQs
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="faq-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does Claude&apos;s small population affect roofing contractor availability?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  With only about 1,200 residents, Claude does not have local roofing contractors. Many residents rely on companies from Amarillo, which is 25 miles west on US-287. We make the drive regularly and can typically reach Claude within 30 minutes. Our familiarity with Armstrong County means we understand the specific building styles and weather patterns that affect roofing decisions here.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing challenges are unique to Claude&apos;s Armstrong County location?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Claude sits at the gateway to Palo Duro Canyon, where the landscape transitions from flat plains to rugged canyon terrain. This creates unique wind patterns as air flows between the open plains and the canyon. Armstrong County also experiences extreme isolation from major supply chains, so we bring all materials and equipment in a single trip to minimize project delays and additional travel costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you roof historic buildings near Claude&apos;s downtown square?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Claude&apos;s historic downtown includes buildings dating back to the early 1900s, including structures around the Armstrong County Courthouse. We have experience working with older construction methods and can install modern roofing systems that respect the architectural character while providing superior weather protection. We use materials that complement historic aesthetics, including architectural shingles and stone-coated steel that mimic traditional profiles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you handle ranch and agricultural roofing for properties along Tule Creek?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, ranch and agricultural roofing is common in Claude and Armstrong County. Properties along Tule Creek and FM 1260 often include cattle barns, equipment storage buildings, hay storage structures, and ranch headquarters. We install metal roofing systems designed for agricultural use, including corrugated panels, R-panel, and standing seam systems with enhanced corrosion resistance for livestock environments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does the proximity to Palo Duro Canyon affect roofing in Claude?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Palo Duro Canyon, located just south of Claude, creates unique microclimate effects. The canyon acts as a channel for winds, and storms approaching from the southwest can intensify as they interact with the canyon&apos;s topography. Properties on the south side of Claude facing the canyon experience more turbulent wind patterns than those on the north side. We account for these directional wind effects when selecting materials and planning installation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What UV protection is needed for roofs at Claude&apos;s elevation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  At nearly 3,000 feet elevation with over 265 days of sunshine annually, Claude roofs receive intense UV radiation that accelerates shingle degradation. Standard asphalt shingles rated for 25-30 years may only last 15-20 years here. We recommend UV-stabilized architectural shingles with enhanced granule adhesion, or metal roofing with reflective coatings that resist UV damage and reduce cooling costs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protect Your Claude Property Today</h2>
            <p className="cta-text">
              From our Amarillo location, we're proud to serve the Claude community with honest,
              professional roofing services. Whether you need a free inspection, hail damage
              assessment, or prompt repairs, we're just a quick drive east on US-287.
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

        {/* Service Area Links */}
        <FadeIn>
          <section className="section pb-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              Serving the Entire Texas Panhandle
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Amarillo
              </a>
              <span className="text-gray-400">•</span>
              <a href="/canyon-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Canyon
              </a>
              <span className="text-gray-400">•</span>
              <a href="/bushland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Bushland
              </a>
              <span className="text-gray-400">•</span>
              <a href="/vega-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Vega
              </a>
              <span className="text-gray-400">•</span>
              <a href="/hereford-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Hereford
              </a>
              <span className="text-gray-400">•</span>
              <a href="/service-areas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                View All Areas
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
            "@id": "https://5starroofingpros.com/claude-tx-roofing/",
            "name": "5 Star Roofing",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
            "description": "Professional roofing contractor serving Claude, Texas from our Amarillo location. Expert hail damage repair, residential and commercial roofing services.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2909 S Western St",
              "addressLocality": "Amarillo",
              "addressRegion": "TX",
              "postalCode": "79109",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.1859",
              "longitude": "-101.8313"
            },
            "telephone": "(806) 622-6041",
            "email": "admin@5starroofingpros.com",
            "url": "https://5starroofingpros.com",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "City",
                "name": "Claude",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Amarillo",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
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
                    "description": "Expert hail damage repair for Claude properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete residential roofing services in Claude"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing",
                    "description": "Commercial and agricultural roofing services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Installation",
                    "description": "Durable metal roofing systems"
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
              {"@type":"Question","name":"How does Claude's small population affect roofing contractor availability?","acceptedAnswer":{"@type":"Answer","text":"With only about 1,200 residents, Claude does not have local roofing contractors. Many residents rely on companies from Amarillo, which is 25 miles west on US-287. We make the drive regularly and can typically reach Claude within 30 minutes. Our familiarity with Armstrong County means we understand the specific building styles and weather patterns that affect roofing decisions here."}},
              {"@type":"Question","name":"What roofing challenges are unique to Claude's Armstrong County location?","acceptedAnswer":{"@type":"Answer","text":"Claude sits at the gateway to Palo Duro Canyon, where the landscape transitions from flat plains to rugged canyon terrain. This creates unique wind patterns as air flows between the open plains and the canyon. Armstrong County also experiences extreme isolation from major supply chains, so we bring all materials and equipment in a single trip to minimize project delays and additional travel costs."}},
              {"@type":"Question","name":"Can you roof historic buildings near Claude's downtown square?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Claude's historic downtown includes buildings dating back to the early 1900s, including structures around the Armstrong County Courthouse. We have experience working with older construction methods and can install modern roofing systems that respect the architectural character while providing superior weather protection."}},
              {"@type":"Question","name":"Do you handle ranch and agricultural roofing for properties along Tule Creek?","acceptedAnswer":{"@type":"Answer","text":"Yes, ranch and agricultural roofing is common in Claude and Armstrong County. Properties along Tule Creek and FM 1260 often include cattle barns, equipment storage buildings, hay storage structures, and ranch headquarters. We install metal roofing systems designed for agricultural use, including corrugated panels, R-panel, and standing seam systems with enhanced corrosion resistance for livestock environments."}},
              {"@type":"Question","name":"How does the proximity to Palo Duro Canyon affect roofing in Claude?","acceptedAnswer":{"@type":"Answer","text":"Palo Duro Canyon, located just south of Claude, creates unique microclimate effects. The canyon acts as a channel for winds, and storms approaching from the southwest can intensify as they interact with the canyon's topography. Properties on the south side of Claude facing the canyon experience more turbulent wind patterns than those on the north side. We account for these directional wind effects when selecting materials and planning installation."}},
              {"@type":"Question","name":"What UV protection is needed for roofs at Claude's elevation?","acceptedAnswer":{"@type":"Answer","text":"At nearly 3,000 feet elevation with over 265 days of sunshine annually, Claude roofs receive intense UV radiation that accelerates shingle degradation. Standard asphalt shingles rated for 25-30 years may only last 15-20 years here. We recommend UV-stabilized architectural shingles with enhanced granule adhesion, or metal roofing with reflective coatings that resist UV damage and reduce cooling costs."}}
            ]
          })
        }}
      />
    </div>
  );
}
