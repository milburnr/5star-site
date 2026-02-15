import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/tpo-roofing-levelland/' },
  title: "TPO Roofing Levelland TX | 5 Star Commercial Roofing",
  description: "Expert TPO roofing installation in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingLevellandPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "TPO Roofing",
                      "url": "/tpo-roofing/"
              },
              {
                      "name": "Levelland",
                      "url": "/tpo-roofing-levelland/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland TPO Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5873, "longitude": -102.3779 },
        "url": "https://5starroofingpros.com/tpo-roofing-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert tpo roofing services in Levelland, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "telephone": "(806) 622-6041",
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
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Levelland",
              "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert TPO roofing installation in Levelland TX. South Plains experiences 7-10 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-7-1920w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                TPO Roofing in <span className="text-brand-gold-light">Levelland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                South Plains TPO Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert TPO roofing installation in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-10</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Levelland's TPO Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Levelland's location in Hockley County creates unique roofing challenges. The South Plains experiences 7-10 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Levelland and Hockley County with premium materials and expert installation. From properties near South Plains College to buildings throughout Levelland, we understand South Plains weather patterns, local building codes, and the specific needs of Hockley County property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Levelland, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.38!3d33.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sLevelland%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Levelland, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Choose TPO Roofing for Your Levelland Property?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Superior Weather Resistance</h3>
                <p className="text-gray-700 leading-relaxed">
                  TPO (Thermoplastic Polyolefin) roofing systems are specifically engineered to withstand the harsh South Plains climate. With UV resistance, hail impact ratings, and wind uplift resistance up to 120 mph, TPO provides unmatched protection against Levelland's severe weather patterns.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Energy Efficiency</h3>
                <p className="text-gray-700 leading-relaxed">
                  TPO's highly reflective white membrane reduces cooling costs by up to 30% during Levelland's hot summers. The ENERGY STAR qualified roofing system helps commercial properties maintain comfortable indoor temperatures while reducing HVAC strain and operating expenses.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Durability & Longevity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quality TPO roofing systems can last 20-30 years with proper installation and maintenance. Heat-welded seams create a completely waterproof barrier that won't deteriorate under Hockley County's temperature extremes ranging from sub-freezing winters to 100°F+ summers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Cost-Effective Investment</h3>
                <p className="text-gray-700 leading-relaxed">
                  TPO offers the best value in commercial roofing with lower installation costs compared to modified bitumen or EPDM systems. Combined with energy savings and minimal maintenance requirements, TPO delivers exceptional long-term return on investment.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Levelland Climate Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Severe Hailstorms</h3>
                <p className="text-gray-700">
                  The South Plains experiences 7-10 hailstorms annually, with hail sizes reaching golf ball to softball diameter. TPO's impact resistance protects against costly roof damage that plague other roofing materials.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Temperature Extremes</h3>
                <p className="text-gray-700">
                  Levelland experiences temperature swings from below 0°F in winter to over 105°F in summer. TPO's thermal stability prevents cracking, splitting, and membrane degradation from thermal cycling.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">High Winds</h3>
                <p className="text-gray-700">
                  Sustained winds of 40-60 mph are common, with gusts exceeding 80 mph during storms. Our mechanically fastened TPO systems provide superior wind uplift resistance compared to fully adhered alternatives.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">South Plains Weather Data</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">7-10</div>
                  <div className="text-sm text-gray-600">Annual Hailstorms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">65°F</div>
                  <div className="text-sm text-gray-600">Average Temperature Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">19"</div>
                  <div className="text-sm text-gray-600">Annual Rainfall</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">300+</div>
                  <div className="text-sm text-gray-600">Sunny Days/Year</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Our TPO Installation Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Comprehensive Inspection & Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our certified roofing specialists conduct a thorough inspection of your existing roof structure, insulation, and drainage systems. We evaluate load-bearing capacity, identify any structural issues, and assess the current roof's condition to develop a customized TPO roofing solution for your Levelland property.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Precise Measurements & Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Using advanced laser measurement technology, we create detailed roof plans that account for equipment, penetrations, and drainage requirements. Our design process ensures optimal membrane layout, minimizes waste, and maximizes the roof's performance and lifespan.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Substrate Preparation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We prepare the roof substrate by installing high-performance insulation boards, ensuring proper slopes for drainage, and creating a smooth, clean surface for membrane installation. This critical step ensures long-term performance and prevents common installation issues.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Professional TPO Installation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our factory-trained installers use hot-air welding equipment to create seamless, watertight seams between TPO membrane sheets. Each seam is tested for integrity, and all penetrations are sealed with compatible materials to ensure a completely weatherproof installation.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Control & Final Inspection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every installation undergoes rigorous quality control testing including electronic leak detection, seam pull tests, and comprehensive visual inspection. We provide detailed documentation and warranty registration to ensure your investment is fully protected.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="lifespan" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How long does TPO roofing last in Levelland's climate?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Quality TPO roofing systems typically last 20-30 years in Levelland's climate when properly installed and maintained. The membrane's UV resistance and thermal stability make it ideal for the South Plains' intense sun exposure and temperature extremes. With regular inspections and minor maintenance, many TPO roofs exceed their expected lifespan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="hail-resistance" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can TPO roofing withstand Hockley County hailstorms?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, TPO roofing offers excellent hail resistance. Premium TPO membranes meet UL 2218 Class 4 impact resistance standards, protecting against hail up to 2 inches in diameter. The membrane's flexibility allows it to absorb impact without cracking, unlike brittle roofing materials. Many insurance companies offer discounts for Class 4 impact-resistant roofing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="energy-savings" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How much can I save on energy costs with TPO roofing?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  TPO roofing can reduce cooling costs by 20-30% compared to traditional dark roofing materials. The highly reflective white surface reflects 80-85% of solar radiation, significantly reducing heat transfer into the building. In Levelland's hot summers, property owners typically see substantial savings on HVAC costs, often paying for the roof upgrade within 5-7 years.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="maintenance" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  What maintenance does TPO roofing require?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  TPO roofing requires minimal maintenance. Bi-annual inspections, keeping drains clear of debris, and occasional cleaning to maintain reflectivity are the primary requirements. We recommend professional inspections after severe weather events common in Hockley County. Unlike modified bitumen systems, TPO doesn't require recoating or extensive maintenance programs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="warranty" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  What warranties are available for TPO roofing in Levelland?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  We offer comprehensive warranty packages including 15-30 year manufacturer material warranties and our exclusive 10-year labor warranty. Many TPO systems qualify for extended warranties up to 30 years when installed by certified contractors. Our warranty covers wind uplift up to 120 mph and includes hail damage coverage in most cases.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cost" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How does TPO roofing cost compare to other commercial roofing options?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  TPO offers the best value in commercial roofing. Initial installation costs are 15-25% lower than modified bitumen and significantly less than metal roofing. When factoring in energy savings, minimal maintenance requirements, and extended lifespan, TPO provides the lowest total cost of ownership. Many Levelland properties see positive ROI within the first decade.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Commercial Properties We Serve in Levelland
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold text-brand-brown mb-2">Manufacturing Facilities</h3>
                <p className="text-gray-600 text-sm">Industrial buildings, warehouses, production facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="font-bold text-brand-brown mb-2">Office Buildings</h3>
                <p className="text-gray-600 text-sm">Professional offices, business centers, corporate facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="font-bold text-brand-brown mb-2">Retail Centers</h3>
                <p className="text-gray-600 text-sm">Strip malls, shopping centers, standalone retail stores</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="font-bold text-brand-brown mb-2">Healthcare Facilities</h3>
                <p className="text-gray-600 text-sm">Medical offices, clinics, assisted living facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="font-bold text-brand-brown mb-2">Educational Buildings</h3>
                <p className="text-gray-600 text-sm">Schools, colleges, training centers, libraries</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🛠️</div>
                <h3 className="font-bold text-brand-brown mb-2">Agricultural Buildings</h3>
                <p className="text-gray-600 text-sm">Equipment storage, processing facilities, grain elevators</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From South Plains College facilities to agricultural operations throughout Hockley County, our TPO roofing systems protect diverse commercial properties across Levelland and surrounding areas.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              storm response & Insurance Claims
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold text-red-700 mb-4">Storm Damage Response</h3>
                <p className="text-gray-700 mb-4">
                  Severe weather doesn't wait for business hours. Our storm response team is available to secure your Levelland property after hail damage, wind damage, or storm events. We provide tarping, temporary repairs, and immediate damage assessment.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-red-700 mb-2">Storm Damage Services Include:</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Prompt leak repairs and tarping</li>
                    <li>• Rapid damage assessment and documentation</li>
                    <li>• Temporary weatherproofing</li>
                    <li>• Water damage mitigation</li>
                    <li>• Debris removal and site securing</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Insurance Claim Assistance</h3>
                <p className="text-gray-700 mb-4">
                  Navigating insurance claims can be complex. Our team works directly with insurance adjusters to ensure fair settlements and proper documentation. We've successfully handled hundreds of storm damage claims throughout Hockley County.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Claim Services Include:</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Detailed damage documentation with photos</li>
                    <li>• Insurance adjuster meeting coordination</li>
                    <li>• Scope of work development</li>
                    <li>• Supplement negotiation when needed</li>
                    <li>• Direct insurance company billing available</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Levelland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Levelland property owners. Expert TPO roofing with comprehensive warranties and insurance claim assistance. Protect your investment with the South Plains' most trusted commercial roofing contractor.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
