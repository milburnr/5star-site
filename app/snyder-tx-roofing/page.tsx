import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/snyder-tx-roofing/' },
  title: 'Roofing in Snyder TX | 5 Star Roofing',
  description: "Roofing in Snyder. Scurry County wind and hail experts. Residential and commercial services near Western Texas College. Call (806) 622-6041",
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

export default function SnyderRoofingPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { "name": "Home", "url": "/" },
        { "name": "Service Areas", "url": "/service-areas/" },
        { "name": "Snyder", "url": "/snyder-tx-roofing/" }
      ]} />

      <StickyContactBar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-perryton-14-1280w.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Snyder Roofing Services Built for West Texas Weather
            </h1>
            <p className="hero-subtitle">
              Scurry County Wind &amp; Hail Damage Experts Since 2010
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
                Your Trusted Roofing Partner in Snyder, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Snyder, the Scurry County seat with approximately 11,000 residents, is a resilient West Texas community built on oil, agriculture, and wind energy. Home to Western Texas College and situated along US-84 between Lubbock and Abilene, Snyder serves as a regional hub for Scurry County and surrounding rural areas. 5 Star Commercial Roofing provides comprehensive roofing services throughout Snyder and Scurry County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Snyder&apos;s history is deeply rooted in the oil boom of the late 1940s when the Canyon Reef formation discovery transformed the county. Today, while oil remains important, the city has diversified with wind energy becoming a major economic driver. The Snyder area hosts multiple wind farm operations, and Western Texas College provides workforce training for the energy sector. These commercial and industrial operations require reliable roofing systems that withstand the region&apos;s demanding weather conditions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sitting at approximately 2,300 feet elevation in the rolling plains, Snyder occupies a weather corridor between the South Plains and the Permian Basin. Severe thunderstorms track through Scurry County regularly from spring through fall, bringing damaging hail, straight-line winds, and occasional tornadoes. The wind energy corridor that makes Snyder attractive for turbines also means residential and commercial roofs face relentless wind stress year-round. Summer temperatures climb above 100 degrees, and winter ice storms can coat roofs with damaging weight. These conditions demand properly engineered roofing systems and expert installation.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Snyder</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout Snyder and Scurry County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-snyder/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">
                  {service.name} in Snyder
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Snyder-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Snyder &amp; Scurry County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Wind Energy Corridor Exposure</h3>
                <p className="text-gray-700 leading-relaxed">
                  The same sustained winds that power Snyder&apos;s wind farms create constant stress on residential and commercial roofs. Sustained winds averaging 12-15 mph with frequent gusts exceeding 50 mph test shingle adhesion, flashing integrity, and membrane seams daily. Roofing materials must be rated for high wind uplift, and installation techniques must account for the relentless wind pressure that Scurry County roofs endure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Severe Storm Corridor</h3>
                <p className="text-gray-700 leading-relaxed">
                  Snyder sits in a weather corridor that channels severe thunderstorms between the Caprock and the rolling plains. These storms produce large hail, damaging straight-line winds, and occasional tornadoes. Multiple storms per year can bring quarter-sized to golf ball-sized hail across Scurry County, requiring impact-resistant roofing materials and rapid post-storm inspection and repair services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Oil Field &amp; Agricultural Roofing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Snyder&apos;s economy relies on oil operations and agriculture, both of which create specialized roofing demands. Oil field facilities need chemical-resistant, heavy-duty roofing systems. Agricultural buildings, barns, and equipment storage require cost-effective metal roofing solutions that handle large spans and heavy wind loads. We have extensive experience with both types of properties throughout Scurry County.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready to Protect Your Snyder Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, wind or hail damage assessment, emergency storm repairs, or a complete roof replacement, 5 Star Commercial Roofing is here to help Snyder homeowners and businesses. Most storm damage repairs are covered by insurance.
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
              <a href="/big-spring-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Big Spring</a>
              <span className="text-gray-400">&bull;</span>
              <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Lubbock</a>
              <span className="text-gray-400">&bull;</span>
              <a href="/levelland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Levelland</a>
              <span className="text-gray-400">&bull;</span>
              <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Midland</a>
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
            "@id": "https://5starroofingpros.com/snyder-tx-roofing/",
            "name": "5 Star Roofing",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Professional roofing contractor serving Snyder, Texas and Scurry County. Wind and hail damage repair, residential and commercial roofing, wind energy corridor specialist.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Snyder",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.7179",
              "longitude": "-100.9177"
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
              "name": "Snyder",
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
                "name": "Does Snyder get a lot of wind damage to roofs?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, Snyder sits in a wind energy corridor with sustained winds averaging 12-15 mph and frequent gusts over 50 mph. This constant wind pressure tests shingle adhesion and flashing integrity. Wind-rated materials and proper installation techniques are essential for Snyder roofs to prevent wind uplift damage." }
              },
              {
                "@type": "Question",
                "name": "What roofing works best for Snyder's wind and hail?",
                "acceptedAnswer": { "@type": "Answer", "text": "For residential properties, Class 4 impact-resistant shingles with enhanced wind ratings or standing seam metal roofing provide the best protection. For commercial buildings, mechanically attached TPO or PVC membranes resist wind uplift while providing hail resistance. Metal roofing is also popular for agricultural and industrial buildings in Scurry County." }
              },
              {
                "@type": "Question",
                "name": "Do you work on agricultural buildings and barns near Snyder?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, we install and repair metal roofing on agricultural buildings, barns, equipment storage facilities, and livestock shelters throughout Scurry County. We use heavy-gauge metal panels designed for large spans and high wind loads common in agricultural applications." }
              },
              {
                "@type": "Question",
                "name": "How quickly can you get to Snyder for emergency repairs?",
                "acceptedAnswer": { "@type": "Answer", "text": "We provide same-day emergency response for storm damage in Snyder and throughout Scurry County. After major storms, our crews prioritize tarping and temporary waterproofing to prevent further damage while permanent repairs are scheduled." }
              },
              {
                "@type": "Question",
                "name": "Does insurance cover wind damage in Snyder?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most homeowner and commercial insurance policies cover wind and hail damage to roofs minus your deductible. We provide detailed documentation including photographs, wind speed data from nearby weather stations, and comprehensive damage reports that insurance adjusters require for claim approval." }
              }
            ]
          })
        }}
      />
    </div>
  );
}
