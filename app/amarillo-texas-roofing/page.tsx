import { FadeIn } from "@/components/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Hero, HeroLocalityAccent } from "@/components/page-sections/Hero";
import { AlertTriangle, Building2, CloudHail, Home, Phone, Search, Star, Sun, Thermometer, Tornado, Wind, Wrench, Zap } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/amarillo-texas-roofing/' },
  title: 'Amarillo Texas Roofing | 5 Star Roofing',
  description: "Trusted roofing contractor serving Amarillo, Texas. hail damage repair, residential & commercial roofing, metal roofs, and free inspections.",
  openGraph: {
    title: "Amarillo Texas Roofing | 5 Star Roofing",
    description: "Trusted roofing contractor serving Amarillo, Texas. hail damage repair, residential & commercial roofing, metal roofs, and free inspections.",
    url: "https://5starroofingpros.com/amarillo-texas-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AmarilloRoofingPage() {
  const faqItems = [
    {
      question: "Why is Amarillo considered 5 Star Roofing's primary service area?",
      answer: "Amarillo is the largest city in the Texas Panhandle with a metro population exceeding 200,000, and our office is located at 2909 S Western St in Amarillo. This central location allows us to reach any Amarillo neighborhood within 30 minutes. We have more completed projects in Amarillo than any other city in our service area, giving us deep expertise with local building codes, HOA requirements, and the specific weather patterns that affect Potter and Randall County properties."
    },
    {
      question: "When is hail season in Amarillo and how often does it hit?",
      answer: "Amarillo's primary hail season runs from March through September, with peak activity in May and June. Potter and Randall Counties experience an average of 8-12 significant hail events per year, with baseball-sized hail occurring multiple times annually. The city's position in 'Hail Alley' means severe thunderstorms frequently produce damaging hail, making impact-resistant roofing materials essential for protecting Amarillo properties."
    },
    {
      question: "How does the insurance claim process work for Amarillo homeowners after a hail storm?",
      answer: "After a hail event, contact your insurance company to file a claim, then schedule a free inspection with us. We document all damage with detailed photographs, measurements, and a comprehensive written assessment. When your insurance adjuster visits, we meet them on-site to ensure all damage is identified and properly documented. We handle the entire process from initial assessment through final payment, ensuring Amarillo homeowners receive full coverage for all storm-related damage."
    },
    {
      question: "What are the differences between residential and commercial roofing needs in Amarillo?",
      answer: "Amarillo residential roofs typically use asphalt shingles or metal panels on sloped structures, requiring impact resistance and wind rating for Panhandle conditions. Commercial buildings usually have flat or low-slope roofs using TPO, EPDM, or modified bitumen membranes that must handle ponding water and large surface areas. Commercial projects also involve stricter code requirements, longer warranty expectations, and often require working around business operations. We handle both types throughout Amarillo with specialized crews for each."
    },
    {
      question: "What building codes and permit requirements apply to roofing in Amarillo?",
      answer: "Amarillo follows the International Building Code with Texas amendments. Residential re-roofing typically requires a permit from the City of Amarillo Building Safety Division. The code limits roof coverings to two layers maximum, requires proper underlayment, and mandates wind-rated installation methods appropriate for the Panhandle's high wind zone. We handle all permit applications and inspections as part of our Amarillo roofing projects, ensuring full compliance."
    },
    {
      question: "How fast can 5 Star Roofing respond to emergency roof damage within Amarillo city limits?",
      answer: "For active roof emergencies within Amarillo city limits, we typically arrive within 30-60 minutes during business hours with tarps and emergency repair materials. After hours, our emergency line connects you with our on-call team for response within 2 hours. Being headquartered in Amarillo means we do not have travel delays that contractors based in other cities face, allowing us to secure your property faster and prevent secondary water damage."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <Hero
        bgClassName="hero-home"
        photoTone="aspirational"
        titleLead="Amarillo"
        titleAccent="Roofing Experts"
        body={
          <>
            <HeroLocalityAccent>Amarillo</HeroLocalityAccent>&apos;s
            trusted roofing contractor — same-day storm response, hail
            damage repair, and insurance-claim help across the Texas
            Panhandle. 30-60 minute emergency response within city limits.
          </>
        }
        primaryCTA={{ tel: "8066226041", display: "(806) 622-6041" }}
        secondaryCTA={{ href: "#lead-form", label: "Free Inspection" }}
        breadcrumb={
          <Breadcrumb
            bare
            tone="on-photo"
            items={[
              { name: "Home", url: "/" },
              { name: "Service Areas", url: "/service-areas/" },
              { name: "Amarillo", url: "/amarillo-texas-roofing/" },
            ]}
          />
        }
      />

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
                Your Local Roofing Partner in Amarillo, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Located at 2909 S Western St in Amarillo, 5 Star Commercial Roofing has been protecting
                homes and businesses throughout the Texas Panhandle for over a decade. From the historic
                neighborhoods of Wolflin to the growing developments near Coulter Street, we understand
                Amarillo&apos;s unique roofing challenges. Compare <a href="/roofing-methods-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">roofing methods suited for Amarillo</a> to find the right solution for your property.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Amarillo */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Amarillo Residents Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4"><Building2 className="w-6 h-6 inline-block" /></div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Local Amarillo Office</h3>
                <p className="text-gray-600">
                  Based right here in Amarillo on South Western Street. We&apos;re your neighbors,
                  not a fly-by-night contractor.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4"><Zap className="w-6 h-6 inline-block" /></div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Fast Response</h3>
                <p className="text-gray-600">
                  30-minute storm response time throughout Amarillo. We know every neighborhood
                  from Soncy Road to Loop 335.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4"><Tornado className="w-6 h-6 inline-block" /></div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Storm Experts</h3>
                <p className="text-gray-600">
                  Amarillo gets hit hard by hail storms. We specialize in hail damage detection,
                  documentation, and insurance claims.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Services in Amarillo */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Comprehensive Roofing Services in Amarillo</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage Repair */}
            <FadeIn delay={0.1}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4"><CloudHail className="w-6 h-6 inline-block" /></div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Amarillo experiences some of the most severe hail storms in Texas. From the Wolflin
                      neighborhood to Southwest Amarillo, we&apos;ve repaired thousands of hail-damaged roofs.
                      Our experts can spot even subtle granule loss and help you document damage for your
                      insurance claim.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>What we do:</strong> Free hail damage inspections, comprehensive photo documentation,
                      insurance claim assistance, and full roof replacement if needed. We work with all major
                      insurance companies.
                    </p>
                    <a
                      href="/hail-damage-repair-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Learn More About Hail Damage Repair in Amarillo →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Residential Roofing */}
            <FadeIn delay={0.2}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4"><Home className="w-6 h-6 inline-block" /></div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Whether you own a historic home near San Jacinto or a new build in Sleepy Hollow,
                      we provide complete residential roofing services. From asphalt shingle replacement
                      to complete tear-offs, we handle projects of all sizes throughout Amarillo.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Services include:</strong> Roof replacement, roof repair, shingle installation,
                      ventilation upgrades, and warranty work. We use only premium materials designed for
                      Amarillo&apos;s extreme weather.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Explore our full range of <a href="/amarillo-homes-roofing-services/" className="text-brand-gold hover:text-brand-gold-vibrant underline">roofing services for Amarillo homes</a>, or learn why homeowners call us <a href="/amarillos-best-roofer/" className="text-brand-gold hover:text-brand-gold-vibrant underline">Amarillo&apos;s best roofer</a>.
                    </p>
                    <a
                      href="/residential-roofing-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Explore Residential Roofing in Amarillo →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Commercial Roofing */}
            <FadeIn delay={0.3}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4"><Building2 className="w-6 h-6 inline-block" /></div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Serving Amarillo&apos;s business community from the Amarillo Medical Center to industrial
                      facilities near the airport. We specialize in flat roof systems, TPO, EPDM, and modified
                      bitumen installations that stand up to Amarillo&apos;s harsh climate.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Commercial expertise:</strong> Flat roof repair and replacement, preventive maintenance
                      programs, prompt repairs, and roof coating systems. Minimal disruption to your business.
                    </p>
                    <a
                      href="/commercial-roofing-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      View Commercial Roofing Services in Amarillo →
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
                    <div className="text-6xl mb-4"><Wrench className="w-6 h-6 inline-block" /></div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Metal Roof Installation
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Metal roofing is an excellent choice for Amarillo homes. It handles our extreme temperature
                      swings, high winds, and hail better than traditional shingles. Plus, it can last 50+ years
                      with minimal maintenance.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Metal roofing options:</strong> Standing seam, corrugated panels, metal shingles,
                      and commercial metal roofing systems. Energy-efficient and beautiful.
                    </p>
                    <a
                      href="/metal-roofing-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Discover Metal Roofing in Amarillo →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Roof Inspections */}
            <FadeIn delay={0.5}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4"><Search className="w-6 h-6 inline-block" /></div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Free Roof Inspections
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Don&apos;t wait for a leak to find out your roof is damaged. Our free roof inspections
                      throughout Amarillo can catch problems early, saving you thousands in repair costs.
                      We&apos;ll check for hail damage, wind damage, and normal wear.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Inspection includes:</strong> Complete roof assessment, attic ventilation check,
                      shingle condition analysis, flashing inspection, and detailed photo report. 100% free,
                      no obligation.
                    </p>
                    <a
                      href="/roof-inspections-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Schedule Your Free Inspection →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Storm Repairs */}
            <FadeIn delay={0.6}>
              <div className="card-hover p-8 bg-red-50 border-2 border-red-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4"><AlertTriangle className="w-6 h-6 inline-block text-red-600" /></div>
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      Storm Damage Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Available for roofing issues in Amarillo.</strong> Roof leaks, storm
                      damage, or structural issues can&apos;t wait. We provide tarping, leak repairs,
                      and temporary solutions to protect your property until permanent repairs can be made.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a>
                      {" "}now for immediate assistance anywhere in Amarillo.
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

        {/* Understanding Amarillo Homeowners */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
                Understanding Amarillo&apos;s Roofing Landscape
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Amarillo metropolitan area has a population exceeding 200,000 across Potter and Randall Counties. As the largest city in the Texas Panhandle and a regional hub for healthcare, agriculture, and energy, Amarillo has diverse housing stock ranging from historic early-1900s homes near downtown to modern construction in master-planned communities along Coulter Road and Soncy Road.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At 3,605 feet elevation with over 260 days of sunshine annually, Amarillo roofs face UV exposure significantly more intense than lower-elevation Texas cities. This is compounded by temperature swings from 100&deg;F+ summer days to below-zero winter nights&mdash;sometimes within the same week. Standard shingles rated for 25&ndash;30 year lifespans typically last 15&ndash;20 years in Amarillo&apos;s demanding climate. Proper material selection and expert installation are the difference between a roof that fails prematurely and one that delivers its full expected lifespan.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-brand-brown mb-2">Potter &amp; Randall Counties</h3>
                  <p className="text-sm text-gray-600">200,000+ metro population spanning two counties, with Amarillo&apos;s city limits crossing both. Building codes and permit requirements differ by county&mdash;we handle both.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-brand-brown mb-2">Housing Age Mix</h3>
                  <p className="text-sm text-gray-600">From historic San Jacinto Heights homes built in the 1920s to newer Sleepy Hollow and Bishopsgate developments. Each era presents different roofing challenges.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-brand-brown mb-2">HOA Requirements</h3>
                  <p className="text-sm text-gray-600">Many Amarillo neighborhoods including Bishopsgate, Barrington Place, and the Colonies have HOA guidelines for roofing materials and colors. We ensure compliance.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail Events in Potter &amp; Randall Counties
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-2">May 18, 2023 &mdash; 2.5-Inch Hail North of Amarillo</h3>
                <p className="text-gray-700">
                  Severe hail measuring 2.50 inches struck 14 miles north of Amarillo in Potter County, with additional 2-inch hail near Pantex in Carson County. NWS damage reports documented windows blown out on the north side of homes and trees stripped by the storm system. Multiple Potter County locations reported hail ranging from 1 to 2.5 inches.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">May 20, 2019 &mdash; Hail Hits Sleepy Hollow</h3>
                <p className="text-gray-700">
                  Quarter-sized hail struck multiple Amarillo neighborhoods on May 20, 2019, with NWS storm reports specifically documenting hail in the Sleepy Hollow neighborhood. Randall County recorded 1.27-inch hail near Timbercreek Canyon, while multiple locations across both Potter and Randall Counties reported quarter-sized stones throughout the evening.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">June 17, 2019 &mdash; Golf Ball Hail in Potter County</h3>
                <p className="text-gray-700">
                  Hail measuring 1.75 inches struck northern Potter County, adding to what was already a severe 2019 hail season for the Amarillo metro area. The Texas Panhandle&apos;s position in &quot;Hail Alley&quot; means these events recur regularly between March and September.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Texas leads the nation with 900+ reported hail events annually. The Panhandle&apos;s position in &quot;Hail Alley&quot; means Potter and Randall Counties experience significant hail events every 1&ndash;3 years.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Amarillo-Specific Roofing Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Common Roofing Issues in Amarillo, Texas
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2"><Tornado className="w-6 h-6 inline-block" /> Severe Hail Storms</h3>
                <p className="text-gray-700">
                  Amarillo sits in &quot;Hail Alley&quot; and experiences frequent severe thunderstorms from March through
                  September. The May 2023 storm brought 2.5-inch hail north of the city, while the May 2019 event hit the Sleepy Hollow neighborhood directly. Even quarter-sized hail can cause significant granule
                  loss on asphalt shingles, leading to premature aging and leaks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2"><Wind className="w-6 h-6 inline-block" /> High Winds</h3>
                <p className="text-gray-700">
                  The Texas Panhandle is one of the windiest regions in the United States. Sustained winds of
                  30-40 mph and gusts over 60 mph can lift shingles, tear off flashing, and damage roof edges.
                  Proper installation with wind-rated materials is critical.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2"><Thermometer className="w-6 h-6 inline-block" /> Extreme Temperature Swings</h3>
                <p className="text-gray-700">
                  Amarillo can see 100°F summer days and below-zero winter nights, sometimes within the same week.
                  This expansion and contraction puts tremendous stress on roofing materials, accelerating wear
                  and causing cracking. Winter conditions also create risk for <a href="/roof-snow-and-ice-damage-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">snow and ice damage</a>, while moisture intrusion can lead to <a href="/roof-rot-damage-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">roof rot</a> if left unchecked.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2"><Sun className="w-6 h-6 inline-block" /> Intense UV Exposure</h3>
                <p className="text-gray-700">
                  At 3,605 feet elevation with over 260 days of sunshine annually, Amarillo roofs face intense
                  UV radiation that breaks down organic materials. This is why we recommend impact-resistant,
                  UV-stabilized shingles for maximum longevity.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Amarillo Neighborhoods We Proudly Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From historic neighborhoods near downtown to new developments along Soncy Road, we provide expert roofing services throughout Amarillo:
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Historic &amp; Established</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Wolflin</li>
                    <li>&#10003; San Jacinto Heights</li>
                    <li>&#10003; Paramount Terrace</li>
                    <li>&#10003; North Heights</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Upscale Communities</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Sleepy Hollow</li>
                    <li>&#10003; Bishopsgate</li>
                    <li>&#10003; Barrington Place</li>
                    <li>&#10003; The Colonies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Growing Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Southwest Amarillo</li>
                    <li>&#10003; Soncy Road corridor</li>
                    <li>&#10003; Coulter Road area</li>
                    <li>&#10003; Bell Street area</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">All Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Tascosa</li>
                    <li>&#10003; Prospect Park</li>
                    <li>&#10003; Downtown / Route 66</li>
                    <li>&#10003; All Potter &amp; Randall County</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Wolflin&apos;s tree-lined streets and mid-century homes require different roofing approaches than the newer two-story construction in Bishopsgate or Barrington Place. San Jacinto Heights features some of Amarillo&apos;s oldest homes, many with original roofing structures that demand specialized repair. We understand the unique requirements of every Amarillo neighborhood.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Customer Reviews */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="section-title">What Amarillo Residents Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4"><span className="flex gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />))}</span></div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;After the May hail storm damaged half of Wolflin, 5 Star was at our house within hours.
                  They handled everything with our insurance company and had us back under a new roof in two weeks.
                  Highly recommend!&quot;
                </p>
                <p className="font-semibold text-brand-brown">— Sarah M., Wolflin</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4"><span className="flex gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />))}</span></div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;Our commercial building near I-40 needed a complete flat roof replacement. 5 Star worked
                  around our business hours and finished on budget. No leaks and great warranty.&quot;
                </p>
                <p className="font-semibold text-brand-brown">— James R., Commercial Property Owner</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4"><span className="flex gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />))}</span></div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;We called at 9pm with water pouring into our living room. They were here by 9:30pm with tarps
                  and stopped the leak. That&apos;s the kind of service you can&apos;t put a price on.&quot;
                </p>
                <p className="font-semibold text-brand-brown">— Mike T., Southwest Amarillo</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/reviews/" className="text-brand-gold font-semibold hover:text-brand-gold-vibrant text-lg">
                Read More Reviews →
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Map Section */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Visit Our Amarillo Office</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-4">5 Star Commercial Roofing</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Address:</strong><br />
                        2909 S Western St<br />
                        Amarillo, TX 79109
                      </p>
                      <p>
                        <strong>Phone:</strong><br />
                        <a href="tel:8066226041" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">
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
                    <h3 className="text-xl font-bold text-brand-brown mb-4">Serving All of Amarillo</h3>
                    <p className="text-gray-700 mb-4">
                      Located on South Western Street, we&apos;re centrally positioned to serve all of Amarillo
                      quickly. From the northern neighborhoods near Tascosa to South Amarillo near I-27,
                      we typically arrive within 30 minutes.
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Our service radius includes:</strong> All of Amarillo proper, Canyon,
                      Bushland, and surrounding Potter and Randall County areas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.0!2d-101.8313!3d35.1859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870148d5b7d3e54f%3A0x0!2s2909%20S%20Western%20St%2C%20Amarillo%2C%20TX%2079109!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="5 Star Commercial Roofing Location in Amarillo, TX"
                ></iframe>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Amarillo Roofing FAQs
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <AccordionItem key={`faq-${index + 1}`} value={`faq-${index + 1}`} className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready to Protect Your Amarillo Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, or prompt repairs,
              we&apos;re here to help. Serving Amarillo with honesty, integrity, and expert craftsmanship
              since 2010.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">
                <Phone className="w-5 h-5 inline-block" /> Call (806) 622-6041 Now
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
              Also Serving Nearby Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a href="/canyon-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Canyon
              </a>
              <span className="text-gray-400">•</span>
              <a href="/plainview-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Plainview
              </a>
              <span className="text-gray-400">•</span>
              <a href="/hereford-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Hereford
              </a>
              <span className="text-gray-400">•</span>
              <a href="/borger-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Borger
              </a>
              <span className="text-gray-400">•</span>
              <a href="/pampa-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Pampa
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
            "@id": "https://5starroofingpros.com/amarillo-texas-roofing/",
            "name": "5 Star Roofing",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            "description": "Professional roofing contractor serving Amarillo, Texas. Expert hail damage repair, residential and commercial roofing services.",
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
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "name": "Amarillo",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
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
                    "description": "Expert hail damage assessment, documentation, and repair services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete residential roof replacement and repair services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing",
                    "description": "Commercial flat roof systems, TPO, EPDM, and maintenance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Installation",
                    "description": "Standing seam and metal roofing systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Roof Inspections",
                    "description": "Comprehensive roof inspections with no obligation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "description": "professional roofing services for urgent situations"
                  }
                }
              ]
            },
            "aggregateRating": {"@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "25", "bestRating": "5", "worstRating": "1"}
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />
    <RelatedArticles pageSlug="amarillo-texas-roofing" />
    </div>
  );
}
