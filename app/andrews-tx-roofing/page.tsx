import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/andrews-tx-roofing/' },
  title: 'Roofing in Andrews TX | 5 Star Roofing',
  description: "Roofing in Andrews. Andrews County Permian Basin experts. Residential and commercial roofing for oil country properties. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Andrews TX | 5 Star Roofing",
    description: "Roofing in Andrews. Andrews County Permian Basin experts. Residential and commercial roofing for oil country properties. Call (806) 622-6041",
    url: "https://5starroofingpros.com/andrews-tx-roofing/",
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
    question: "Does Andrews get severe hail damage?",
    answer: "Yes, Andrews County sits in a severe weather corridor where spring and summer thunderstorms regularly produce golf ball-sized hail and straight-line winds exceeding 70 mph. The flat Permian Basin terrain provides no natural storm protection, making impact-resistant roofing essential for Andrews properties."
  },
  {
    question: "What roofing works best for new construction in Andrews?",
    answer: "For new residential construction in Andrews, Class 4 impact-resistant shingles or standing seam metal roofing provide the best long-term value against the Permian Basin climate. For commercial buildings, TPO or PVC membranes offer excellent heat reflection and hail resistance. Investing in premium materials from the start avoids premature replacement in Andrews' demanding weather."
  },
  {
    question: "Do you work on oil field buildings in Andrews County?",
    answer: "Yes, we provide commercial and industrial roofing for oil field facilities throughout Andrews County, including maintenance shops, office buildings, pipe yards, and equipment storage. We install chemical-resistant PVC membranes and heavy-duty metal roofing designed for industrial environments. We understand the safety protocols and access requirements of oil field properties."
  },
  {
    question: "How quickly can you get to Andrews for emergency roof repairs?",
    answer: "We provide same-day emergency response for storm damage and active roof leaks in Andrews and throughout Andrews County. Our crews arrive with tarps, sealants, and emergency materials to stop water intrusion while permanent repairs are planned and scheduled."
  },
  {
    question: "Will insurance cover storm damage to my Andrews roof?",
    answer: "Most homeowner and commercial property insurance policies cover hail and wind damage to roofs minus your deductible. We provide comprehensive damage documentation including photographs, measurements, and detailed reports that meet insurance adjuster requirements. Our team has achieved a 95%+ claim approval rate across the Permian Basin."
  },
  {
    question: "How does Andrews' distance from Midland-Odessa affect roofing service?",
    answer: "Andrews is 85 miles northwest of Midland-Odessa, which means many roofing contractors based in the metro area charge travel surcharges or deprioritize Andrews projects. 5 Star Commercial Roofing serves Andrews as a core part of our Permian Basin coverage area with no hidden travel fees. We stage materials locally and schedule crews to maximize efficiency for Andrews County projects."
  },
  {
    question: "What causes roofs to fail faster in Andrews than in other parts of Texas?",
    answer: "Andrews' combination of extreme summer heat above 100 degrees, intense UV radiation at semi-arid elevation, constant windblown sand from oil field operations and rangelands, and severe hailstorms creates one of the most demanding roofing environments in Texas. Standard roofing materials rated for coastal or eastern Texas degrade 30-40% faster in Andrews' climate. UV-stabilized, impact-resistant materials are essential for achieving normal roof lifespans."
  }
];

export default function AndrewsRoofingPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { "name": "Home", "url": "/" },
        { "name": "Service Areas", "url": "/service-areas/" },
        { "name": "Andrews", "url": "/andrews-tx-roofing/" }
      ]} />

      <StickyContactBar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-amarillo-5-1280w.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Andrews Roofing Contractor Trusted by Permian Basin Families
            </h1>
            <p className="hero-subtitle">
              Andrews County&apos;s Full-Service Roofing Company for Homes &amp; Businesses
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
                Your Trusted Roofing Partner in Andrews, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Andrews, the county seat of Andrews County with approximately 18,000 residents, is one of the Permian Basin&apos;s most important oil-producing communities. Located northwest of Midland-Odessa on US-385, Andrews has experienced significant growth driven by the energy sector, bringing new housing developments, commercial construction, and infrastructure investment. 5 Star Commercial Roofing provides comprehensive roofing services throughout Andrews and Andrews County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Andrews County is one of the top oil-producing counties in Texas, and the Permian Basin boom has transformed the city over the past decade. New residential subdivisions, hotels, restaurants, and commercial facilities have expanded rapidly to support the growing workforce. The Andrews Independent School District has built new facilities, and the local hospital and medical services have expanded. All of this new construction, along with the city&apos;s established residential neighborhoods, requires quality roofing that can withstand the demanding climate.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Andrews sits in the severe weather corridor of the southern Permian Basin, where spring and summer thunderstorms can produce damaging hail, high winds, and dust storms. The flat, open terrain provides no protection from storm systems that sweep across the basin. Summer temperatures frequently exceed 100 degrees, and the intense UV radiation at Andrews&apos;s semi-arid elevation degrades roofing materials faster than in coastal or eastern Texas. Windblown sand and dust from the surrounding oil fields and rangelands add additional wear on roof surfaces. These challenging conditions require roofing professionals who understand the specific demands of the Permian Basin climate.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Andrews</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout Andrews and Andrews County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-andrews/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">
                  {service.name} in Andrews
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Andrews-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Andrews &amp; Andrews County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Severe Weather Corridor</h3>
                <p className="text-gray-700 leading-relaxed">
                  Andrews County sits in a severe weather corridor where spring and summer thunderstorms can produce golf ball-sized hail and straight-line winds exceeding 70 mph. The flat, open terrain of the Permian Basin provides zero natural wind protection, meaning storms hit Andrews with full force. Properties need impact-resistant roofing rated for high wind uplift to withstand these regular weather events.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Rapid Growth &amp; New Construction</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Permian Basin oil boom has driven rapid residential and commercial construction in Andrews. New homes, hotels, and commercial buildings need quality roofing from the start to avoid premature failures in the harsh climate. We work with builders and developers on new construction projects as well as homeowners and businesses needing repairs or replacements on existing properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Heat, Dust &amp; UV Exposure</h3>
                <p className="text-gray-700 leading-relaxed">
                  Andrews&apos; semi-arid climate brings blistering summer heat above 100 degrees, intense UV radiation, and constant exposure to windblown dust and sand from oil field operations and rangelands. These conditions accelerate the aging of all roofing materials. White reflective membranes for commercial buildings and UV-stabilized shingles or metal for residential homes provide the best long-term value in Andrews&apos; climate.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Andrews City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Andrews: Oil Country Roofing Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Andrews County Economy</h3>
                <p className="text-gray-600 mb-4">
                  Andrews County consistently ranks among the top oil-producing counties in Texas. The Permian Basin energy boom has brought thousands of workers, families, and businesses to Andrews, creating demand for everything from workforce housing to industrial facilities. Major operators maintain significant acreage positions in Andrews County, and the city serves as a logistics hub for drilling and completion operations across the northern Permian Basin.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Residential &amp; Commercial Growth</h3>
                <p className="text-gray-600 mb-4">
                  Andrews has seen new residential subdivisions spring up along the city&apos;s perimeter, along with hotels, restaurants, and retail developments along US-385. The Andrews ISD campus expansions, Andrews County Hospital upgrades, and new commercial construction all require roofing systems engineered for 100+ degree summers, severe hailstorms, and relentless wind. We provide roofing for both new construction and the established neighborhoods that make up Andrews&apos; core.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Oil Field Facilities</h4>
                <p className="text-sm text-gray-600">Maintenance shops, pipe yards, compressor stations, and office buildings serving Permian Basin operations across Andrews County</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Downtown Andrews</h4>
                <p className="text-sm text-gray-600">The Andrews County Courthouse, retail district, and established commercial buildings along NW Avenue A and Main Street</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">New Subdivisions</h4>
                <p className="text-sm text-gray-600">Growing residential areas on Andrews&apos; east and south sides housing Permian Basin workforce families</p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Andrews Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Andrews Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, emergency storm repairs, or a complete roof replacement, 5 Star Commercial Roofing serves Andrews with Permian Basin expertise and honest pricing. Most storm damage repairs are covered by insurance.
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
              <a href="/monahans-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Monahans</a>
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
            "@id": "https://5starroofingpros.com/andrews-tx-roofing/",
            "name": "5 Star Roofing",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
            "description": "Professional roofing contractor serving Andrews, Texas and Andrews County. Permian Basin residential and commercial roofing, oil field facility specialist, hail damage repair.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Andrews",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.3187",
              "longitude": "-102.5457"
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
              "name": "Andrews",
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
