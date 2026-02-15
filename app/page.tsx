import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export const metadata: Metadata = {
  title: 'Amarillo Hail Damage Roof Repair | 5 Star Roofing',
  description: "West Texas's trusted hail damage roofing specialists. Serving Amarillo, Midland, Odessa & Panhandle. Free inspections + insurance claims. Call (806) 622-6041",
  keywords: "amarillo roofing, hail damage repair, roof repair amarillo, midland roofing, odessa roofing, texas panhandle roofer, storm damage roof repair, insurance claims roofing",
  openGraph: {
    title: "Amarillo Hail Damage Roof Repair | 5 Star Roofing",
    description: "West Texas's trusted roofing contractor. 10+ years experience with hail damage repair and insurance claims.",
    url: "https://5starroofingpros.com",
    siteName: "5 Star Roofing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarillo Hail Damage Roof Repair | 5 Star Roofing",
    description: "West Texas roofing specialists. Free inspections & insurance help.",
  },
  alternates: {
    canonical: "https://5starroofingpros.com",
  },
};

export default function Page() {
  return (
    <>
      {/* Hero Section - Mobile optimized for above-the-fold CTA */}
      <section
        className="hero-home relative text-white py-8 sm:py-12 md:py-20 lg:py-28 min-h-0 md:min-h-[500px] lg:min-h-[600px] flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-br from-black/70 via-black/50 to-black/40 md:from-amber-900/60 md:via-orange-900/40 md:to-yellow-900/30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl md:backdrop-blur-sm md:bg-gradient-to-r md:from-black/40 md:to-transparent p-4 sm:p-6 md:p-8 lg:p-12 md:rounded-2xl md:border-l-4 md:border-brand-gold">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6 text-white leading-tight" style={{textShadow: '0 2px 8px rgba(0,0,0,0.9)'}}>
              West Texas Hail Damage <span className="text-brand-gold-light block sm:inline">Roofing Experts</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 font-semibold md:font-bold text-brand-gold-light" style={{textShadow: '0 2px 6px rgba(0,0,0,0.8)'}}>
              Amarillo • Midland • Odessa
            </p>
            <p className="hidden sm:block text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-white/90 leading-relaxed max-w-2xl" style={{textShadow: '0 1px 3px rgba(0,0,0,0.8)'}}>
              Free inspections & insurance claim assistance. 10+ years protecting West Texas homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <a href="tel:8066226041" className="bg-gradient-to-r from-brand-gold to-brand-gold-vibrant text-brand-brown hover:text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full font-bold shadow-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-all duration-300 flex items-center justify-center gap-2">
                <span className="text-lg sm:text-xl">📞</span> Call (806) 622-6041
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-xl border-2 border-brand-gold text-center">
                Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Compact on mobile */}
      <FadeIn>
        <section className="py-6 sm:py-10 md:py-16 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]"></div>
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 text-center">
              <FadeIn delay={0.1}>
                <a href="/about/" className="block bg-gradient-to-br from-white to-amber-50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20 cursor-pointer group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-3">
                    <AnimatedCounter to={10} suffix="+" />
                  </div>
                  <div className="text-brand-brown font-semibold text-xs sm:text-sm md:text-lg group-hover:text-brand-gold transition-colors">Years Experience</div>
                </a>
              </FadeIn>
              <FadeIn delay={0.2}>
                <a href="/contact/" className="block bg-gradient-to-br from-white to-amber-50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20 cursor-pointer group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-3">
                    <AnimatedCounter to={100} suffix="%" />
                  </div>
                  <div className="text-brand-brown font-semibold text-xs sm:text-sm md:text-lg group-hover:text-brand-gold transition-colors">Free Inspections</div>
                </a>
              </FadeIn>
              <FadeIn delay={0.3}>
                <a href="/hail-damage-repair-amarillo-tx/" className="block bg-gradient-to-br from-white to-amber-50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20 cursor-pointer group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-3">$50M+</div>
                  <div className="text-brand-brown font-semibold text-xs sm:text-sm md:text-lg group-hover:text-brand-gold transition-colors">Claims Helped</div>
                </a>
              </FadeIn>
              <FadeIn delay={0.4}>
                <a href="/reviews/" className="block bg-gradient-to-br from-white to-amber-50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20 cursor-pointer group">
                  <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 md:mb-3">⭐⭐⭐⭐⭐</div>
                  <div className="text-brand-brown font-semibold text-xs sm:text-sm md:text-lg group-hover:text-brand-gold transition-colors">5-Star Rated</div>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Definition Blocks - AI Overview / Featured Snippet Optimized */}
      <FadeIn>
        <section id="hail-damage-definitions" className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center">Understanding Hail Damage Roofing in West Texas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-brand-gold/20 shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">What Is Hail Damage Roof Repair?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hail damage roof repair is the process of restoring a roof after hailstones have compromised shingles, flashing, or underlayment. In West Texas, where severe storms frequently produce golf ball-sized hail or larger, repairs may range from replacing individual damaged shingles to full roof replacement. A professional inspection determines the extent of damage and appropriate repair scope.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-brand-gold/20 shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">What Is a Free Roof Inspection?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A free roof inspection is a no-cost assessment performed by a licensed roofing contractor to evaluate your roof's condition after a storm. In Amarillo, Midland, and Odessa, reputable contractors document hail impacts, cracked shingles, and granule loss with photos and measurements. This documentation supports insurance claims and helps homeowners understand whether repairs are needed.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-brand-gold/20 shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">What Is a Class 4 Impact-Resistant Shingle?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A Class 4 impact-resistant shingle is a roofing material rated to withstand the highest level of impact testing under UL 2218 standards. These shingles are engineered to resist cracking and splitting from hail up to 2 inches in diameter. Many Texas insurers offer premium discounts for Class 4 roofs, making them a practical choice for West Texas homeowners.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-brand-gold/20 shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">How the Roof Insurance Claim Process Works in Texas</h3>
                <p className="text-gray-700 leading-relaxed">
                  The roof insurance claim process in Texas typically involves four steps: (1) document the damage with photos immediately after the storm, (2) contact your insurance company to file a claim, (3) schedule a professional roof inspection to assess full damage, and (4) meet with your insurance adjuster on-site. Your roofing contractor can provide documentation and communicate directly with your adjuster.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Main Content */}
      <div className="container-custom py-12">

        {/* Services Grid */}
        <FadeIn direction="up">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Specialized Services</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1} direction="left">
              <a href="/hail-damage-roof-repair-in-amarillo/" className="flex flex-col h-full bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg" alt="Roofing services in Amarillo, TX - Severe hail damage on roof - Insurance claim documentation - 5 Star Commercial Roofing" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">🌨️ Hail Damage Repair</h3>
                <p className="text-gray-600 mb-4">
                  Expert assessment and repair of hail-damaged roofs. We know exactly what insurance adjusters look for.
                </p>
                <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">Learn More →</span>
              </div>
            </a>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <a href="/storm-damage-roof-repair-in-amarillo/" className="flex flex-col h-full bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-perryton-3-1280w.jpg" alt="Storm Damage Restoration" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">⛈️ Storm Damage Restoration</h3>
                <p className="text-gray-600 mb-4">
                  Wind, rain, and severe weather damage? We handle all types of storm-related roof repairs.
                </p>
                <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">Learn More →</span>
              </div>
            </a>
            </FadeIn>

            <FadeIn delay={0.3} direction="right">
              <a href="/roof-inspections-in-amarillo/" className="flex flex-col h-full bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-perryton-4-1280w.jpg" alt="Free Roof Inspections" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">🔍 Free Roof Inspections</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive roof assessments with detailed documentation for insurance claims.
                </p>
                <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">Learn More →</span>
              </div>
            </a>
            </FadeIn>

            <FadeIn delay={0.4} direction="left">
              <a href="/residential-roofing/" className="block bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-odessa-5-1280w.jpg" alt="Residential Roofing" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">🏠 Residential Roofing</h3>
                <p className="text-gray-600 mb-4">
                  Complete roofing solutions for homeowners. New installations, replacements, and repairs.
                </p>
                <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">Learn More →</span>
              </div>
            </a>
            </FadeIn>

            <FadeIn delay={0.5} direction="up">
              <a href="/commercial-roofing/" className="block bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-1-1280w.jpg" alt="Commercial Roofing" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">🏢 Commercial Roofing</h3>
                <p className="text-gray-600 mb-4">
                  TPO, PVC, and built-up roofing systems for businesses and commercial properties.
                </p>
                <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">Learn More →</span>
              </div>
            </a>
            </FadeIn>

            <FadeIn delay={0.6} direction="right">
              <a href="/contact/" className="block bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-2-1280w.jpg" alt="Insurance Claims Help" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">📋 Insurance Claims Help</h3>
                <p className="text-gray-600 mb-4">
                  We work directly with your insurance company to maximize your coverage.
                </p>
                <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">Learn More →</span>
              </div>
            </a>
            </FadeIn>
          </div>
        </section>
      </FadeIn>

        {/* Why Choose Us */}
        <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Amarillo Chooses 5 Star Roofing</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Local Hail Damage Specialists</h3>
                <p>We understand West Texas weather and know how to identify and <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">repair hail damage correctly</a>. The Texas Panhandle experiences 8-12 hailstorms annually—we've seen it all.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Insurance Claim Experts</h3>
                <p>We handle all the paperwork and work directly with adjusters to get you full coverage. From <a href="/roof-inspections-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">free roof inspections</a> to claim filing, we manage the entire process.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Fast storm response</h3>
                <p>After a storm, time is critical. We offer same-day inspections and rapid <a href="/storm-damage-roof-repair-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">storm damage repair</a> scheduling to minimize interior damage.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
                <p>Fully licensed in Texas with comprehensive insurance coverage for your protection. Serving <a href="/service-areas/" className="text-brand-brown hover:text-brand-gold underline">Amarillo, Midland, Odessa</a> and the entire Texas Panhandle.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Quality Workmanship</h3>
                <p>Over 10 years of experience delivering exceptional <a href="/residential-roofing/" className="text-brand-brown hover:text-brand-gold underline">residential</a> and <a href="/commercial-roofing/" className="text-brand-brown hover:text-brand-gold underline">commercial roofing</a> results across West Texas.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Comprehensive Warranties</h3>
                <p>We stand behind our work with industry-leading warranty protection. All <a href="/asphalt-roofing-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Class 4 impact-resistant shingles</a> include manufacturer warranties up to 50 years.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Transformations */}
        <section className="mb-16 py-16 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.08),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.08),transparent_40%)]"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">See Our Quality Work</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-600">
              Real results from Amarillo, Midland, and Odessa homeowners. Click any project to learn more about our services in that area.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Project 1 - Hail Damage */}
              <FadeIn delay={0.1}>
                <a href="/hail-damage-repair-amarillo/" className="flex flex-col h-full bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg overflow-hidden card-blur-bounce border border-brand-gold/20 group cursor-pointer">
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-2-1280w.jpg" alt="Amarillo home roof before hail damage repair - Insurance claim documentation - 5 Star Commercial Roofing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-brand-brown group-hover:text-brand-gold transition-colors">Hail Damage Restoration - Amarillo</h3>
                    <p className="text-gray-600">Complete roof replacement after severe hailstorm with Class 4 impact-resistant shingles.</p>
                  </div>
                </a>
              </FadeIn>

              {/* Project 2 - Storm Damage */}
              <FadeIn delay={0.2}>
                <a href="/wind-damage-repair-midland/" className="flex flex-col h-full bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg overflow-hidden card-blur-bounce border border-brand-gold/20 group cursor-pointer">
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-levelland-3-1280w.jpg" alt="Midland commercial roof before storm wind damage repair - Blown off shingles - 5 Star Commercial Roofing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-brand-brown group-hover:text-brand-gold transition-colors">Wind Damage Repair - Midland</h3>
                    <p className="text-gray-600">Storm damage restoration with upgraded wind-resistant materials.</p>
                  </div>
                </a>
              </FadeIn>

              {/* Project 3 - Roof Replacement */}
              <FadeIn delay={0.3}>
                <a href="/roof-replacement-odessa/" className="flex flex-col h-full bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg overflow-hidden card-blur-bounce border border-brand-gold/20 group cursor-pointer">
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-perryton-6-1280w.jpg" alt="Odessa home after roof replacement - Beautiful new architectural shingles - 5 Star Commercial Roofing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-brand-brown group-hover:text-brand-gold transition-colors">Roof Replacement - Odessa</h3>
                    <p className="text-gray-600">Complete upgrade with premium architectural shingles for enhanced curb appeal.</p>
                  </div>
                </a>
              </FadeIn>

              {/* Project 4 - Commercial TPO */}
              <FadeIn delay={0.4}>
                <a href="/tpo-roofing-midland/" className="flex flex-col h-full bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg overflow-hidden card-blur-bounce border border-brand-gold/20 group cursor-pointer">
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-3-1280w.jpg" alt="Midland commercial building after TPO roof installation - Energy-efficient white membrane roofing - 5 Star Commercial Roofing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-brand-brown group-hover:text-brand-gold transition-colors">Commercial TPO Installation - Midland</h3>
                    <p className="text-gray-600">Modern TPO system with 20-year warranty for commercial property.</p>
                  </div>
                </a>
              </FadeIn>
            </div>

            <div className="text-center">
              <a href="/gallery/" className="inline-block bg-gradient-to-r from-brand-gold to-brand-gold-vibrant text-white px-8 py-4 rounded-full font-bold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl">
                View Our Complete Gallery →
              </a>
            </div>
          </div>
        </section>

        {/* Texas Panhandle Hail Statistics */}
        <FadeIn>
          <section className="mb-16 py-16 bg-gradient-to-br from-gray-50 via-amber-50/40 to-gray-50 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_60%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">Why West Texas Needs Impact-Resistant Roofing</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <FadeIn delay={0.1}>
                  <div className="text-center p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/30">
                    <div className="text-6xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">8-12</div>
                    <div className="text-xl font-bold mb-3 text-brand-brown">Hailstorms Per Year</div>
                    <p className="text-gray-600">The Texas Panhandle sits in America's hail belt with frequent severe storms</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="text-center p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/30">
                    <div className="text-6xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">$10K+</div>
                    <div className="text-xl font-bold mb-3 text-brand-brown">Average Claim Value</div>
                    <p className="text-gray-600">Most hail damage repairs in Amarillo, Midland, and Odessa exceed $10,000</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="text-center p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/30">
                    <div className="text-6xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">72hrs</div>
                    <div className="text-xl font-bold mb-3 text-brand-brown">Inspection Window</div>
                    <p className="text-gray-600">Insurance companies require documentation within 72 hours of storm damage</p>
                  </div>
                </FadeIn>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-md">
                <h3 className="font-bold text-xl mb-3 text-brand-brown flex items-center gap-2">📍 Did You Know?</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Amarillo, Midland, and Odessa are among the top 20 cities in the U.S. for hail frequency.
                  Class 4 impact-resistant shingles can reduce hail damage by up to 90% and qualify you for
                  10-30% insurance premium discounts in West Texas.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Roofing Materials Section */}
        <section className="mb-16 py-16 bg-gradient-to-b from-white via-orange-50/20 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.06),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.06),transparent_50%)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">Premium Roofing Materials for West Texas</h2>
            <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 group">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-odessa-7-1280w.jpg" alt="Class 4 Impact Resistant Shingles" className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">Impact-Resistant Asphalt Shingles</h3>
              <p className="text-gray-600 mb-4">
                UL 2218 Class 4 rated shingles tested to withstand 2-inch hail strikes. Perfect for residential
                roofing in Amarillo, Midland, and Odessa. Available in architectural and luxury styles.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>20-50 year warranties</li>
                <li>Insurance premium discounts</li>
                <li>Multiple color options</li>
                <li>Wind resistance up to 130 mph</li>
              </ul>
              <a href="/asphalt-roofing-in-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 group">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-wichita-falls-1-1280w.jpg" alt="Standing Seam Metal Roofing" className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">Standing Seam Metal Roofing</h3>
              <p className="text-gray-600 mb-4">
                The ultimate hail protection. Metal roofing may dent but remains watertight even after severe
                hailstorms. Increasingly popular across the Texas Panhandle.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>50+ year lifespan</li>
                <li>Energy-efficient reflective coating</li>
                <li>Fire-resistant (Class A rating)</li>
                <li>Wind resistance 140+ mph</li>
              </ul>
              <a href="/roofing-methods/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 group">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-4-1280w.jpg" alt="TPO Commercial Roofing" className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">TPO Commercial Roofing</h3>
              <p className="text-gray-600 mb-4">
                Single-ply white membrane roofing for commercial flat roofs. Heat-welded seams create
                watertight protection for Midland-Odessa industrial facilities and Amarillo businesses.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>15-25 year warranties</li>
                <li>Energy Star rated</li>
                <li>Hail and puncture resistant</li>
                <li>Low maintenance</li>
              </ul>
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 group">
              <img src="/images/EPDM2-1280w.jpg" alt="EPDM Rubber Roofing" className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">EPDM Rubber Roofing</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective black rubber membrane for commercial and industrial applications.
                Excellent track record in West Texas's extreme temperature swings.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>15-30 year lifespan</li>
                <li>Excellent UV resistance</li>
                <li>Temperature stable (-40°F to 300°F)</li>
                <li>Budget-friendly option</li>
              </ul>
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">Learn More →</a>
            </div>
            </div>
          </div>
        </section>

        {/* Our Process Section - Visual Timeline */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 p-12 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(203,213,225,0.3),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Our Proven 6-Step Process</h2>
              <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-borger-8-1280w.jpg" alt="Professional roof inspection in Amarillo Texas - Free hail damage assessment - 5 Star Commercial Roofing" className="w-full h-64 object-cover rounded-lg mb-4" loading="lazy" />
              <div className="text-4xl font-bold text-brand-gold mb-2">1</div>
              <h3 className="text-xl font-bold mb-2">Free Inspection</h3>
              <p className="text-gray-600">
                We thoroughly inspect your roof for hail damage, wind damage, and other issues. Free, no-obligation assessment within 24-48 hours.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg" alt="Insurance claim documentation for roof damage in Midland Texas - Professional photo evidence - 5 Star Commercial Roofing" className="w-full h-64 object-cover rounded-lg mb-4" loading="lazy" />
              <div className="text-4xl font-bold text-brand-gold mb-2">2</div>
              <h3 className="text-xl font-bold mb-2">Documentation</h3>
              <p className="text-gray-600">
                We document all damage with photos and measurements for your insurance claim.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-wichita-falls-2-1280w.jpg" alt="Insurance adjuster meeting for roof claim in Odessa Texas - Expert representation - 5 Star Commercial Roofing" className="w-full h-64 object-cover rounded-lg mb-4" loading="lazy" />
              <div className="text-4xl font-bold text-brand-gold mb-2">3</div>
              <h3 className="text-xl font-bold mb-2">Insurance Claim</h3>
              <p className="text-gray-600">
                We handle all paperwork and meet with your insurance adjuster to maximize your coverage.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-odessa-9-1280w.jpg" alt="Professional roof installation in Amarillo Texas - Quality craftsmanship - 5 Star Commercial Roofing" className="w-full h-64 object-cover rounded-lg mb-4" loading="lazy" />
              <div className="text-4xl font-bold text-brand-gold mb-2">4</div>
              <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
              <p className="text-gray-600">
                Our experienced crew installs your new roof using premium materials and proven techniques.
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-perryton-10-1280w.jpg" alt="Final roof inspection quality control in West Texas - Warranty protection - 5 Star Commercial Roofing" className="w-full h-64 object-cover rounded-lg mb-4" loading="lazy" />
              <div className="text-4xl font-bold text-brand-gold mb-2">5</div>
              <h3 className="text-xl font-bold mb-2">Quality Inspection</h3>
              <p className="text-gray-600">
                We perform a final inspection to ensure everything meets our high standards.
              </p>
            </div>

            {/* Step 6 */}
            <div className="text-center">
              <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-6-1280w.jpg" alt="Satisfied roofing customer in Texas Panhandle - Completed project - 5 Star Commercial Roofing" className="w-full h-64 object-cover rounded-lg mb-4" loading="lazy" />
              <div className="text-4xl font-bold text-brand-gold mb-2">6</div>
              <h3 className="text-xl font-bold mb-2">Your Satisfaction</h3>
              <p className="text-gray-600">
                We walk you through the completed work and provide all warranty documentation.
              </p>
            </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Serving All of West Texas</h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
            We proudly serve Amarillo and the entire Texas Panhandle, plus Midland, Odessa, and surrounding
            West Texas communities with expert hail damage repair and roofing services.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-brand-gold-light rounded-lg hover:bg-brand-gold-vibrant/10 transition-all duration-300">
              <h3 className="font-bold text-xl mb-3">Texas Panhandle</h3>
              <div className="space-y-1 text-gray-700">
                <div><a href="/roofing-amarillo-tx/" className="hover:text-brand-gold hover:font-semibold transition-all">Amarillo</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Canyon</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Borger</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Pampa</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Dumas</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Hereford</a></div>
              </div>
            </div>
            <div className="text-center p-6 bg-brand-gold-light rounded-lg hover:bg-brand-gold-vibrant/10 transition-all duration-300">
              <h3 className="font-bold text-xl mb-3">West Texas</h3>
              <div className="space-y-1 text-gray-700">
                <div><a href="/contact/" className="hover:text-brand-gold hover:font-semibold transition-all">Midland</a></div>
                <div><a href="/contact/" className="hover:text-brand-gold hover:font-semibold transition-all">Odessa</a></div>
                <div><a href="/roofing-services-lubbock-tx/" className="hover:text-brand-gold hover:font-semibold transition-all">Lubbock</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Big Spring</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Plainview</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Levelland</a></div>
              </div>
            </div>
            <div className="text-center p-6 bg-brand-gold-light rounded-lg hover:bg-brand-gold-vibrant/10 transition-all duration-300">
              <h3 className="font-bold text-xl mb-3">Surrounding Areas</h3>
              <div className="space-y-1 text-gray-700">
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Childress</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Dalhart</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Perryton</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Tulia</a></div>
                <div><a href="/service-areas/" className="hover:text-brand-gold hover:font-semibold transition-all">Friona</a></div>
                <div><a href="/service-areas/" className="text-brand-brown hover:text-brand-gold underline font-semibold">View All →</a></div>
              </div>
            </div>
          </div>
        </section>

        {/* Hail Damage & Insurance FAQ Section */}
        <FadeIn>
          <section id="hail-damage-faq" className="mb-16 py-12 bg-gradient-to-b from-gray-50 to-white rounded-3xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Hail Damage &amp; Insurance FAQs for West Texas Homeowners</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Common questions about hail damage roof repair and insurance claims in Amarillo, Midland, Odessa, and the Texas Panhandle.
            </p>
            <div className="max-w-4xl mx-auto px-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How do I know if my roof has hail damage in Amarillo or West Texas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Look for dents or dings on metal vents, gutters, and air conditioning units—these indicate hail hit your property. On the roof itself, hail damage appears as circular cracks, bruised spots, or missing granules on shingles. However, many signs of hail damage are not visible from the ground. After any significant storm in the Texas Panhandle, schedule a <a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">professional roof inspection</a> to get an accurate assessment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How big does hail have to be to damage a roof?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Hail as small as 1 inch in diameter (quarter-sized) can damage asphalt shingles, especially older roofs or those already weathered by West Texas sun and wind. Hail 1.5 inches or larger often causes significant damage that may require full replacement. The Texas Panhandle regularly experiences hail in this range during spring and summer storm seasons, making timely inspections essential after any hail event.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    What should I do right after a hailstorm hits my roof?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    First, stay safe and do not climb on your roof. Document any visible damage from the ground with photos and video, including your gutters, siding, and outdoor equipment. Note the date and time of the storm. Then contact a local roofing contractor in Amarillo, Midland, or Odessa for a <a href="/contact/" className="text-brand-gold hover:underline">professional inspection</a> before filing your insurance claim—this ensures you have thorough documentation of all damage.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How long after a hailstorm can I file a roof insurance claim in Texas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Most Texas homeowner insurance policies require claims to be filed within one to two years of the storm date, but deadlines vary by policy. However, filing promptly is strongly recommended—waiting too long can make it harder to prove the damage occurred from a specific storm. Contact your insurance company within days of the hailstorm and schedule an inspection as soon as possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    Should I call my insurance company or a roofing contractor first?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    It's generally best to contact a reputable roofing contractor first. A professional inspection provides detailed documentation of the damage, which strengthens your insurance claim. Your contractor can identify damage that may not be obvious and prepare a comprehensive report before the adjuster arrives. In West Texas, experienced <a href="/storm-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">storm restoration contractors</a> understand local insurance processes and can help ensure nothing is overlooked.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How much does hail damage roof repair cost in West Texas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Hail damage roof repair costs in the Amarillo, Midland, and Odessa area typically range from $5,000 to $15,000 or more for a full replacement, depending on roof size, pitch, and material. Minor repairs may cost significantly less. Most homeowners with valid claims pay only their deductible, as insurance covers the remaining approved costs. A <a href="/contact/" className="text-brand-gold hover:underline">professional inspection</a> provides an accurate scope for your specific situation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How long does a hail damage roof replacement take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Once insurance approval is received, most residential roof replacements in West Texas take one to three days to complete, depending on the size and complexity of your roof. The overall timeline from storm to completion varies based on insurance processing speed, material availability, and contractor scheduling. During peak storm season, demand increases—scheduling your inspection early helps avoid delays.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    What is a Class 4 shingle and why is it good for West Texas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Class 4 shingles are <a href="/asphalt-roofing-in-amarillo/" className="text-brand-gold hover:underline">impact-resistant roofing materials</a> that have passed rigorous testing for hail resistance. They're engineered to withstand impacts from hail up to 2 inches in diameter without cracking. For West Texas homeowners, Class 4 shingles offer better protection against recurring hailstorms and may qualify for insurance premium discounts of 10% or more, depending on your carrier.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    Can small hail damage my roof even if I don't see leaks?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Yes. Small hail can cause granule loss and hairline fractures in shingles that weaken your roof over time without causing immediate leaks. This hidden damage shortens your roof's lifespan and leaves it vulnerable to future storms. In the Texas Panhandle, cumulative hail damage is common. A professional inspection after any hailstorm can identify issues before they become costly problems.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    What if my roof insurance claim is denied or underpaid?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    If your claim is denied or underpaid, you have options. Request a written explanation from your insurer and review it with your roofing contractor. You can file an appeal with additional documentation, request a re-inspection, or hire a public adjuster. In Texas, homeowners also have the right to invoke the appraisal clause in their policy to dispute the settlement amount through an independent process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Storm Damage? Don't Wait.</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            The sooner you address roof damage, the less costly repairs will be.
            Get your free inspection today and let us handle your insurance claim.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="btn-primary text-lg bg-white text-brand-brown hover:bg-gray-100 hover:scale-110 transition-all duration-300 hover:shadow-2xl">
              📞 Call (806) 622-6041
            </a>
            <a href="/contact/" className="btn-secondary text-lg border-2 border-white hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300">
              Request Free Inspection
            </a>
          </div>
        </section>
      </div>

      {/* Structured Data - Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            "name": "5 Star Commercial Roofing",
            "image": "https://5starroofingpros.com/logo.png",
            "@id": "https://5starroofingpros.com/#organization",
            "url": "https://5starroofingpros.com",
            "telephone": "(806) 622-6041",
            "email": "admin@5starroofingpros.com",
            "priceRange": "$$",
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
              "latitude": 35.1768,
              "longitude": -101.8590
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Amarillo",
                "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Midland",
                "@id": "https://en.wikipedia.org/wiki/Midland,_Texas",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Odessa",
                "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Lubbock",
                "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Canyon",
                "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Borger",
                "@id": "https://en.wikipedia.org/wiki/Borger,_Texas",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Pampa",
                "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Dumas",
                "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Perryton",
                "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
                "containedIn": {
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
                    "description": "Expert hail damage repair with free inspections and insurance claim assistance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete residential roofing services including asphalt shingles and metal roofing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing",
                    "description": "TPO, PVC, EPDM, and built-up roofing systems for commercial buildings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Storm Damage Repair",
                    "description": "storm damage repair and roof restoration services"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/5starroofingpros",
              "https://www.google.com/maps?cid=11430502439073045291"
            ]
          })
        }}
      />

      {/* FAQPage Schema for AI Overviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I know if my roof has hail damage in Amarillo or West Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Look for dents or dings on metal vents, gutters, and air conditioning units—these indicate hail hit your property. On the roof itself, hail damage appears as circular cracks, bruised spots, or missing granules on shingles. However, many signs of hail damage are not visible from the ground. After any significant storm in the Texas Panhandle, schedule a professional roof inspection to get an accurate assessment."
                }
              },
              {
                "@type": "Question",
                "name": "How big does hail have to be to damage a roof?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hail as small as 1 inch in diameter (quarter-sized) can damage asphalt shingles, especially older roofs or those already weathered by West Texas sun and wind. Hail 1.5 inches or larger often causes significant damage that may require full replacement. The Texas Panhandle regularly experiences hail in this range during spring and summer storm seasons, making timely inspections essential after any hail event."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do right after a hailstorm hits my roof?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "First, stay safe and do not climb on your roof. Document any visible damage from the ground with photos and video, including your gutters, siding, and outdoor equipment. Note the date and time of the storm. Then contact a local roofing contractor in Amarillo, Midland, or Odessa for a professional inspection before filing your insurance claim—this ensures you have thorough documentation of all damage."
                }
              },
              {
                "@type": "Question",
                "name": "How long after a hailstorm can I file a roof insurance claim in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Texas homeowner insurance policies require claims to be filed within one to two years of the storm date, but deadlines vary by policy. However, filing promptly is strongly recommended—waiting too long can make it harder to prove the damage occurred from a specific storm. Contact your insurance company within days of the hailstorm and schedule an inspection as soon as possible."
                }
              },
              {
                "@type": "Question",
                "name": "Should I call my insurance company or a roofing contractor first?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It's generally best to contact a reputable roofing contractor first. A professional inspection provides detailed documentation of the damage, which strengthens your insurance claim. Your contractor can identify damage that may not be obvious and prepare a comprehensive report before the adjuster arrives. In West Texas, experienced storm restoration contractors understand local insurance processes and can help ensure nothing is overlooked."
                }
              },
              {
                "@type": "Question",
                "name": "How much does hail damage roof repair cost in West Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hail damage roof repair costs in the Amarillo, Midland, and Odessa area typically range from $5,000 to $15,000 or more for a full replacement, depending on roof size, pitch, and material. Minor repairs may cost significantly less. Most homeowners with valid claims pay only their deductible, as insurance covers the remaining approved costs."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a hail damage roof replacement take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Once insurance approval is received, most residential roof replacements in West Texas take one to three days to complete, depending on the size and complexity of your roof. The overall timeline from storm to completion varies based on insurance processing speed, material availability, and contractor scheduling."
                }
              },
              {
                "@type": "Question",
                "name": "What is a Class 4 shingle and why is it good for West Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 shingles are impact-resistant roofing materials that have passed rigorous testing for hail resistance. They're engineered to withstand impacts from hail up to 2 inches in diameter without cracking. For West Texas homeowners, Class 4 shingles offer better protection against recurring hailstorms and may qualify for insurance premium discounts of 10% or more, depending on your carrier."
                }
              },
              {
                "@type": "Question",
                "name": "Can small hail damage my roof even if I don't see leaks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Small hail can cause granule loss and hairline fractures in shingles that weaken your roof over time without causing immediate leaks. This hidden damage shortens your roof's lifespan and leaves it vulnerable to future storms. In the Texas Panhandle, cumulative hail damage is common. A professional inspection after any hailstorm can identify issues before they become costly problems."
                }
              },
              {
                "@type": "Question",
                "name": "What if my roof insurance claim is denied or underpaid?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If your claim is denied or underpaid, you have options. Request a written explanation from your insurer and review it with your roofing contractor. You can file an appeal with additional documentation, request a re-inspection, or hire a public adjuster. In Texas, homeowners also have the right to invoke the appraisal clause in their policy to dispute the settlement amount through an independent process."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
