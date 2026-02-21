import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/levelland-tx-roofing/' },
  title: 'Roofing in Levelland TX | 5 Star Roofing',
  description: "Roofing in Levelland. Hockley County hail damage experts. Residential and commercial services near South Plains College. Call (806) 622-6041",
};

const services = [
  { name: "Residential Roofing", slug: "residential-roofing", icon: "🏠" },
  { name: "Commercial Roofing", slug: "commercial-roofing", icon: "🏢" },
  { name: "Hail Damage Repair", slug: "hail-damage-repair", icon: "🌨️" },
  { name: "Storm Damage Repair", slug: "storm-damage-repair", icon: "🌪️" },
  { name: "Wind Damage Repair", slug: "wind-damage-repair", icon: "💨" },
  { name: "Roof Replacement", slug: "roof-replacement", icon: "🔄" },
  { name: "Roof Repair", slug: "roof-repair", icon: "🔧" },
  { name: "Roof Inspections", slug: "roof-inspections", icon: "🔍" },
  { name: "TPO Roofing", slug: "tpo-roofing", icon: "🏗️" },
  { name: "Metal Roofing", slug: "metal-roofing", icon: "🔩" },
  { name: "Asphalt Shingle Roofing", slug: "asphalt-shingle-roofing", icon: "🏘️" },
];

export default function LevellandRoofingPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { "name": "Home", "url": "/" },
        { "name": "Service Areas", "url": "/service-areas/" },
        { "name": "Levelland", "url": "/levelland-tx-roofing/" }
      ]} />

      <StickyContactBar />

      {/* Hero Section */}
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
              Levelland Roofing Services You Can Trust
            </h1>
            <p className="hero-subtitle">
              Hockley County Hail Damage Experts &amp; Full-Service Roofing Contractor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero">
                Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary-hero">
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Your Trusted Roofing Partner in Levelland, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Levelland, the Hockley County seat, is a thriving South Plains community of approximately 14,000 residents. Home to South Plains College and surrounded by cotton fields and oil operations, Levelland faces the same punishing weather patterns that challenge roofs across the South Plains region. 5 Star Commercial Roofing provides comprehensive roofing services throughout Levelland and Hockley County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Located just 30 miles west of Lubbock on US-385, Levelland sits on the Llano Estacado at approximately 3,500 feet elevation. The city&apos;s agricultural economy revolves around cotton, grain sorghum, and sunflowers, with a growing oil and gas sector supporting the local community. South Plains College, established in 1957, draws students from across the region and creates demand for quality roofing on campus buildings, student housing, and faculty residences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The South Plains prairie is wide open to severe weather systems that sweep across from the Rockies and the Gulf. Levelland regularly experiences hailstorms between March and September, with supercell thunderstorms producing golf ball to baseball-sized hail that can total a roof in minutes. Wind gusts exceeding 60 mph are common during spring storms, and the flat terrain offers no natural windbreaks. Summer temperatures routinely exceed 100 degrees, while winter brings occasional ice storms and sub-zero wind chills. These extreme conditions demand roofing materials and installation techniques specifically engineered for the South Plains climate.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Levelland</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout Levelland and Hockley County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-levelland/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">
                  {service.name} in Levelland
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Levelland-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Levelland &amp; Hockley County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Prairie Hailstorms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Levelland&apos;s position on the open South Plains makes it vulnerable to supercell thunderstorms that produce large hail. The May 2024 storm near Whiteface, just west of Levelland, brought record-breaking hailstones to the area. These storms can appear rapidly and cause widespread damage to residential and commercial roofs across Hockley County. Impact-resistant Class 4 shingles and reinforced commercial membranes are essential for Levelland properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Agricultural Dust and Wind</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cotton farming and oil field activity generate significant dust that accumulates on roofs and in gutters. Combined with sustained winds averaging 12-15 mph and frequent gusts over 50 mph, Levelland roofs face constant stress from windborne debris, granule erosion, and material fatigue. Proper ventilation and wind-rated installation are critical for roof longevity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Temperature Extremes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Levelland&apos;s semi-arid climate brings scorching summers with temperatures above 100 degrees and cold winters with occasional ice storms. The 100+ degree annual temperature range causes continuous thermal cycling that stresses roofing materials, leading to cracking, curling, and premature failure of standard-grade products. UV exposure at 3,500 feet elevation accelerates degradation further.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready to Protect Your Levelland Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection after a hailstorm, emergency storm repairs, or a complete roof replacement, 5 Star Commercial Roofing is here to help Levelland homeowners and businesses. Most hail damage repairs are covered by insurance.
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
              Also Serving Nearby Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Lubbock</a>
              <span className="text-gray-400">&bull;</span>
              <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Midland</a>
              <span className="text-gray-400">&bull;</span>
              <a href="/snyder-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Snyder</a>
              <span className="text-gray-400">&bull;</span>
              <a href="/big-spring-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Big Spring</a>
              <span className="text-gray-400">&bull;</span>
              <a href="/service-areas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">View All Service Areas</a>
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
            "@id": "https://5starroofingpros.com/levelland-tx-roofing/",
            "name": "5 Star Roofing",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Professional roofing contractor serving Levelland, Texas and Hockley County. Hail damage repair, residential and commercial roofing, South Plains College area specialist.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Levelland",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.5873",
              "longitude": "-102.3781"
            },
            "telephone": "(806) 622-6041",
            "email": "admin@5starroofingpros.com",
            "url": "https://5starroofingpros.com",
            "priceRange": "$$",
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "09:00",
              "closes": "17:00"
            }],
            "areaServed": [{
              "@type": "City",
              "name": "Levelland",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            }]
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
                "name": "How often does Levelland get hail damage?",
                "acceptedAnswer": { "@type": "Answer", "text": "Levelland and Hockley County experience multiple severe hailstorms each year, typically between March and September. The South Plains region sits in Hail Alley, where warm Gulf moisture collides with dry Rockies air to produce supercell thunderstorms with large hail. The May 2024 event near Whiteface produced record-breaking stones west of Levelland." }
              },
              {
                "@type": "Question",
                "name": "What roofing materials work best in Levelland's climate?",
                "acceptedAnswer": { "@type": "Answer", "text": "For residential properties, Class 4 impact-resistant asphalt shingles or standing seam metal roofing perform best against Levelland's hail, wind, and UV exposure. For commercial buildings, TPO and PVC membranes offer excellent hail resistance and energy efficiency. All materials should be rated for high wind and extreme temperature cycling." }
              },
              {
                "@type": "Question",
                "name": "Do you serve South Plains College campus buildings?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide commercial roofing services for institutional buildings, student housing, and faculty residences in the South Plains College area. We understand the scheduling requirements and access considerations that campus projects demand." }
              },
              {
                "@type": "Question",
                "name": "How quickly can you respond to storm damage in Levelland?",
                "acceptedAnswer": { "@type": "Answer", "text": "We provide same-day emergency response for storm damage in Levelland and throughout Hockley County. Our crews can arrive with tarps and emergency materials to prevent further water intrusion while permanent repairs are scheduled." }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover hail damage to my Levelland roof?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. We provide comprehensive damage documentation including photographs, measurements, and detailed reports that meet insurance adjuster requirements. Our team has a 95%+ claim approval rate." }
              }
            ]
          })
        }}
      />
    </div>
  );
}
