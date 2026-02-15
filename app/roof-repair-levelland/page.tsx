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
  alternates: { canonical: 'https://5starroofingpros.com/roof-repair-levelland/' },
  title: "Roof Repair Levelland TX | 5 Star Commercial Roofing",
  description: "Professional roof repair services in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairLevellandPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Repair",
                      "url": "/roof-repair/"
              },
              {
                      "name": "Levelland",
                      "url": "/roof-repair-levelland/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5873, "longitude": -102.3779 },
        "url": "https://5starroofingpros.com/roof-repair-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Levelland, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Repair",
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
            "description": "Professional roof repair services in Levelland TX. South Plains experiences 7-10 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-odessa-8-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-orange-900/75 to-amber-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Repair in <span className="text-brand-gold-light">Levelland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                South Plains Roof Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof repair services in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041
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
              Levelland's Premier Roof Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Levelland, positioned at 3,514 feet elevation on the South Plains of Texas, faces some of the state's most severe weather conditions. This Hockley County seat experiences 7-10 devastating hailstorms annually, with the Llano Estacado plateau creating perfect conditions for supercell development. Combined with sustained winds often exceeding 70 mph, temperature extremes from -10°F to 115°F, and intense High Plains UV radiation, Levelland properties demand specialized roofing expertise.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected over 350 properties throughout Levelland and Hockley County with premium materials engineered for South Plains conditions. From historic buildings downtown near the Hockley County Courthouse to modern facilities along Highway 114, we understand the unique intersection of agricultural heritage and extreme weather that defines Levelland's roofing challenges.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Levelland's South Plains Weather Challenges</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Levelland sits in the heart of "Hail Alley," where the flat topography of the South Plains creates ideal conditions for severe thunderstorm development. The city's position on the Llano Estacado plateau means storms can intensify rapidly with little geographic interference, leading to some of Texas's most destructive hail events and tornado activity.
            </p>
            
            <div className="bg-amber-50 p-8 rounded-xl mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Levelland Weather Extremes:</h4>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>• <strong>Hail Frequency:</strong> 7-10 severe storms annually, peak April-June</li>
                <li>• <strong>Hail Size Records:</strong> Softball-size hail recorded multiple times</li>
                <li>• <strong>Wind Exposure:</strong> Open plains allow sustained 20-25 mph with 80+ mph gusts</li>
                <li>• <strong>Temperature Swings:</strong> Daily fluctuations up to 60°F common</li>
                <li>• <strong>Tornado Activity:</strong> Multiple EF3+ tornadoes within 20 miles since 2000</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Comprehensive South Plains Roof Repair</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our Levelland repair specialists understand the complete range of weather damage patterns unique to the South Plains. From hail impact craters to wind uplift damage, thermal stress fractures to agricultural dust infiltration, we provide comprehensive solutions tailored to this challenging environment.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Hail Damage Specialists</h4>
                <p className="text-gray-600 mb-3">Expert repair of South Plains hail damage patterns and impact effects.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Impact crater assessment</li>
                  <li>• Granule loss documentation</li>
                  <li>• Structural integrity evaluation</li>
                  <li>• Insurance-grade damage reports</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">High Plains Wind Damage</h4>
                <p className="text-gray-600 mb-3">Specialized repairs for sustained high wind and gust damage.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Wind uplift reinforcement</li>
                  <li>• Edge metal restoration</li>
                  <li>• Fastener pattern upgrades</li>
                  <li>• Debris impact repairs</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Levelland Communities We Serve</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our comprehensive Levelland roof repair services reach throughout the city and surrounding Hockley County areas. From the established neighborhoods near Mahan Elementary to the growing areas around South Plains College, we've built lasting relationships through consistent quality and dependable service across all of Levelland's diverse communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">College District</h4>
                <p className="text-gray-600 text-sm mb-3">Properties near South Plains College requiring enhanced durability.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Student housing maintenance</li>
                  <li>• High-traffic area durability</li>
                  <li>• Budget-conscious solutions</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Agricultural Areas</h4>
                <p className="text-gray-600 text-sm mb-3">Rural properties and farm buildings with specialized needs.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Agricultural building repairs</li>
                  <li>• Dust and debris resistance</li>
                  <li>• Large-span roof systems</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Residential Neighborhoods</h4>
                <p className="text-gray-600 text-sm mb-3">Family homes throughout Levelland's established communities.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Single-family home focus</li>
                  <li>• Neighborhood aesthetic matching</li>
                  <li>• Energy efficiency upgrades</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Seasonal Roofing Challenges</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Levelland's position on the High Plains creates distinct seasonal challenges that require specialized knowledge. Spring brings the most dangerous weather as dry lines form along the Caprock, creating explosive thunderstorm development. Summer's intense heat and UV radiation at elevation accelerate material aging, while winter brings unique freeze-thaw challenges.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Year-Round Roofing Challenges</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Spring Storm Season</h5>
                  <p className="text-sm text-gray-600 mb-3">Peak severe weather with supercells and large hail events.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Large hail damage assessment</li>
                    <li>• Tornado debris cleanup</li>
                    <li>• Weatherproofing</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Summer High Plains Heat</h5>
                  <p className="text-sm text-gray-600 mb-3">Extreme temperatures and elevation-intensified UV exposure.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Thermal stress management</li>
                    <li>• UV damage prevention</li>
                    <li>• Cooling efficiency optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Levelland-Proven Roofing Materials</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A decade of experience in Hockley County has taught us which materials and methods deliver long-term performance in Levelland's extreme conditions. We specify only products that have proven themselves against South Plains weather patterns, with installation techniques refined through hundreds of local projects.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Class 4 Impact Systems</h4>
                <p className="text-gray-600 mb-2">Maximum hail protection for South Plains conditions, tested to withstand softball-size impact.</p>
                <p className="text-sm text-gray-500">Significant insurance discounts available for Hockley County properties.</p>
              </div>
              
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">High-Wind Metal Roofing</h4>
                <p className="text-gray-600 mb-2">Standing seam systems engineered for High Plains wind exposure with specialized fastening.</p>
                <p className="text-sm text-gray-500">Tested to withstand sustained winds over 100 mph.</p>
              </div>
            </div>
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
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Levelland Roof Repair FAQ</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  Why is Levelland particularly prone to hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Levelland sits in the heart of "Hail Alley" on the South Plains where flat topography allows storms to intensify without geographic interference. The Llano Estacado plateau's elevation and open terrain create perfect conditions for supercell development, leading to some of Texas's largest recorded hailstones. The combination of strong updrafts and minimal wind shear allows hailstones to grow to destructive sizes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What should I do immediately after a hailstorm in Levelland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  First, ensure your safety and check for interior leaks. Document any visible damage with photos for insurance purposes. Contact us for a professional inspection within 48-72 hours - early detection prevents secondary damage. Don't climb on your roof, but check gutters for granule accumulation and look for damaged outdoor equipment. We provide tarping if needed while insurance processes your claim.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  How do South Plains winds affect roofing systems?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  The open geography of the South Plains creates sustained high winds that test roofing systems differently than occasional gusts. Constant wind pressure can gradually lift shingles, loosen fasteners, and stress flashing systems. We use enhanced fastening patterns and wind-rated materials specifically designed for High Plains conditions to ensure long-term performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What roofing materials perform best in Levelland's climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  For Levelland, we recommend Class 4 impact-resistant shingles for maximum hail protection, standing seam metal with enhanced wind ratings, and TPO membrane systems for commercial properties. These materials are specifically engineered to withstand large hail impact, sustained high winds, and extreme temperature fluctuations common to the South Plains region.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Your Levelland Roofing Partner</h2>
            
            <div className="bg-amber-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Levelland Commitment</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌪️</div>
                  <h4 className="font-bold mb-2 text-brand-brown">Storm-Ready Service</h4>
                  <p className="text-sm text-gray-600">Specialized for South Plains severe weather</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🛡️</div>
                  <h4 className="font-bold mb-2 text-brand-brown">Premium Protection</h4>
                  <p className="text-sm text-gray-600">Materials proven in Hail Alley conditions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🤝</div>
                  <h4 className="font-bold mb-2 text-brand-brown">Community Focus</h4>
                  <p className="text-sm text-gray-600">Invested in Levelland's long-term success</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Levelland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free comprehensive inspections for Levelland property owners. Expert roof repair designed for South Plains conditions with extensive warranties and complete insurance assistance.
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
