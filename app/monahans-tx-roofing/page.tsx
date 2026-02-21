import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/monahans-tx-roofing/' },
  title: 'Roofing in Monahans TX | 5 Star Roofing',
  description: "Roofing in Monahans. Ward County heat and wind experts. Residential and commercial roofing for Permian Basin properties. Call (806) 622-6041",
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

const faqItems = [
  {
    question: "How does Monahans' extreme heat affect roofing?",
    answer: "Monahans regularly exceeds 105 degrees in summer, with roof surfaces reaching 170 degrees. This extreme heat softens asphalt, accelerates UV degradation, and causes thermal expansion stress on all roofing materials. Reflective metal or white membrane roofing systems significantly reduce heat absorption and last longer in Monahans' desert climate than standard products."
  },
  {
    question: "Does windblown sand from the Sandhills damage roofs?",
    answer: "Yes, Monahans' proximity to Monahans Sandhills State Park means windblown sand is a constant presence. Fine sand particles sandblast exposed roofing surfaces, erode protective granules and coatings, clog gutters and valleys, and infiltrate beneath shingle edges. Smooth-surface roofing like standing seam metal and welded membrane systems resist sand damage far better than traditional shingles. Regular maintenance and gutter cleaning are essential for all Monahans properties."
  },
  {
    question: "Do you roof oil field facilities in Ward County?",
    answer: "Yes, we provide specialized roofing for oil and gas facilities throughout Ward County including pump stations, compressor buildings, pipe yards, and maintenance shops. We install chemical-resistant PVC membranes and heavy-duty metal roofing designed for industrial environments, and we understand the safety protocols, access requirements, and scheduling constraints of oil field projects."
  },
  {
    question: "What is the best roofing material for Monahans homes?",
    answer: "Standing seam metal roofing is the top choice for Monahans residential properties due to its superior heat reflection, wind resistance, sand abrasion resistance, and 50+ year lifespan. For homeowners preferring shingles, Class 4 impact-resistant products with enhanced UV stabilization provide the best protection against Monahans' extreme heat and occasional hail."
  },
  {
    question: "How do blue northers affect Monahans roofs?",
    answer: "Blue northers bring rapid temperature drops of 40 degrees or more within hours as cold fronts sweep through Ward County. This extreme thermal shock causes roofing materials to contract suddenly, stressing seams, adhesives, and membrane welds. Roofs already weakened by Monahans' intense summer heat are particularly vulnerable to cracking and splitting during blue norther events. Materials rated for extreme thermal cycling are essential in Monahans."
  },
  {
    question: "How fast can you respond to roof emergencies in Monahans?",
    answer: "We provide same-day emergency response for roof leaks and storm damage in Monahans and throughout Ward County. Our crews carry tarps, sealants, and emergency repair materials to stop active leaks and prevent further interior damage while permanent repairs are planned. Monahans' location along I-20 provides direct access for our service crews."
  },
  {
    question: "Why does Monahans need different roofing than Midland or Odessa?",
    answer: "While all three cities share Permian Basin weather, Monahans faces unique challenges from the Sandhills. Windblown sand creates abrasion damage that Midland and Odessa properties don't experience to the same degree. Monahans also records some of the highest summer temperatures in the Permian Basin, exceeding 105 degrees regularly. These factors mean roofing systems for Monahans need enhanced sand resistance and heat tolerance beyond what standard Permian Basin specifications require."
  }
];

export default function MonahansRoofingPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { "name": "Home", "url": "/" },
        { "name": "Service Areas", "url": "/service-areas/" },
        { "name": "Monahans", "url": "/monahans-tx-roofing/" }
      ]} />

      <StickyContactBar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-7-1280w.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Monahans Roofing Built for Extreme Permian Basin Heat
            </h1>
            <p className="hero-subtitle">
              Ward County&apos;s Trusted Roofing Contractor for Oil Field &amp; Residential Properties
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
                Your Trusted Roofing Partner in Monahans, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Monahans, located in Ward County with approximately 8,000 residents, is a Permian Basin community known for Monahans Sandhills State Park and a robust oil and gas economy. Situated along I-20 between Odessa and Pecos, Monahans serves as a service hub for the surrounding oil field operations. 5 Star Commercial Roofing provides comprehensive roofing services throughout Monahans and Ward County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Permian Basin oil boom has brought growth and investment to Monahans, with new residential developments, commercial facilities, and oilfield infrastructure expanding the city&apos;s footprint. The iconic Monahans Sandhills State Park, featuring towering sand dunes up to 70 feet high, draws visitors from across Texas, while the oil and gas sector provides the economic backbone for Ward County. Both residential and commercial properties in Monahans require roofing systems engineered for one of Texas&apos;s most extreme climates.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Monahans endures some of the harshest weather in West Texas. Summer temperatures regularly exceed 105 degrees, making it one of the hottest cities in the state. Roof surface temperatures can reach 170 degrees or higher, placing extreme stress on all roofing materials. The desert climate brings intense UV radiation, windblown sand from the surrounding dune fields, and occasional severe thunderstorms with damaging hail. Low humidity accelerates the drying and cracking of petroleum-based roofing products. Winter brings its own challenges with rapid temperature drops of 40 degrees or more when blue northers sweep through. These conditions demand premium, heat-rated materials and expert installation techniques.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Monahans</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout Monahans and Ward County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-monahans/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">
                  {service.name} in Monahans
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Monahans-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Monahans &amp; Ward County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Extreme Heat &amp; UV Exposure</h3>
                <p className="text-gray-700 leading-relaxed">
                  Monahans is one of the hottest cities in Texas, with summer highs regularly exceeding 105 degrees. Roof surface temperatures can reach 170 degrees, causing asphalt shingles to soften, blister, and lose granules prematurely. UV radiation at Monahans&apos;s low humidity and desert elevation is especially intense, breaking down petroleum-based compounds in roofing materials much faster than in more humid climates. Reflective metal roofing and white membrane systems are particularly effective for reducing cooling costs and extending roof life in Monahans.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Sandhills Sand Abrasion</h3>
                <p className="text-gray-700 leading-relaxed">
                  The proximity of Monahans Sandhills State Park means windblown sand is a constant presence. Fine sand particles can sandblast exposed roofing surfaces, erode protective coatings, accumulate in gutters and valleys, and infiltrate beneath shingle edges. Regular maintenance and gutter cleaning are essential for Monahans properties. Roofing systems with smooth, sealed surfaces like standing seam metal and welded membrane systems resist sand infiltration better than traditional shingle products.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Oil Field Facility Roofing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ward County&apos;s oil and gas operations include pump stations, compressor facilities, pipe yards, and maintenance shops that require specialized roofing. Chemical-resistant PVC membranes protect against oil mist and hydrocarbon exposure. Heavy-gauge metal roofing handles the vibration from nearby equipment. We understand the safety requirements, access protocols, and scheduling constraints that oil field roofing projects demand.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Monahans City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Monahans: Sandhills Gateway &amp; Oil Country Hub</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Monahans Sandhills &amp; Tourism</h3>
                <p className="text-gray-600 mb-4">
                  Monahans Sandhills State Park features sand dunes reaching 70 feet high, covering 3,840 acres of Shin Oak sand dunes. The park draws visitors year-round for sand surfing, hiking, and camping, supporting local hotels, restaurants, and retail businesses along I-20. These tourism-dependent commercial properties need roofing that withstands the constant sand exposure unique to Monahans -- a challenge no other city in our service area faces.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">I-20 Corridor &amp; Oil Economy</h3>
                <p className="text-gray-600 mb-4">
                  Monahans sits on I-20 between Odessa (40 miles east) and Pecos (30 miles west), serving as a critical logistics point for Permian Basin oil operations. The corridor features truck stops, equipment yards, industrial facilities, and commercial developments that require heavy-duty roofing. Ward County oil production supports the local economy with well-paying jobs that drive residential construction and home improvement investment.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Downtown Monahans</h4>
                <p className="text-sm text-gray-600">Ward County Courthouse area and Main Street commercial buildings serving the local community and oil field workforce</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">I-20 Commercial Strip</h4>
                <p className="text-sm text-gray-600">Hotels, truck stops, restaurants, and service businesses along the interstate serving travelers and oil field crews</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Residential Neighborhoods</h4>
                <p className="text-sm text-gray-600">Established family neighborhoods and newer developments housing Ward County&apos;s oil and gas workforce</p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Monahans Roofing FAQs
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`} className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready to Protect Your Monahans Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, storm damage assessment, emergency repairs, or a complete roof replacement, 5 Star Commercial Roofing serves Monahans with expert craftsmanship and honest pricing. We understand Permian Basin roofing better than anyone.
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
              <a href="/odessa-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Odessa</a>
              <span className="text-gray-400">&bull;</span>
              <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Midland</a>
              <span className="text-gray-400">&bull;</span>
              <a href="/andrews-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Andrews</a>
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
            "@id": "https://5starroofingpros.com/monahans-tx-roofing/",
            "name": "5 Star Roofing",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Professional roofing contractor serving Monahans, Texas and Ward County. Heat-resistant roofing, oil field facility specialist, Permian Basin residential and commercial services.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Monahans",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "31.5943",
              "longitude": "-102.8927"
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
              "name": "Monahans",
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
            "mainEntity": faqItems.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />
    </div>
  );
}
