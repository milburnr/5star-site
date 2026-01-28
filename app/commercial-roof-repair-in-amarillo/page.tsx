import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roof Repair in AmarilloService | 5 Star',
  description: 'Roof Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Roof Repair",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109"
      },
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
    },
    "areaServed": [
      {"@type": "City", "name": "Amarillo"},
      {"@type": "City", "name": "Midland"},
      {"@type": "City", "name": "Odessa"}
    ],
    "description": "Professional commercial roof repair services in Amarillo and West Texas. Emergency leak repair, flat roof systems, preventive maintenance programs."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Commercial Roof Repair",
                      "url": "/commercial-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/commercial-roof-repair-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Commercial Roof Repair in Amarillo</h1>
      </FadeIn>

      {/* Post Meta */}
      <div className="text-gray-600 mb-6 flex gap-4">
        <time dateTime="2023-12-15">December 15, 2023</time>
        <span>By 5 Star Roofing</span>
      </div>

      {/* Featured Image */}
      <img
        src="/images/commercial-roof-repair-amarillo.jpg"
        alt="Commercial Roof Repair in Amarillo"
        className="w-full max-w-2xl h-auto mb-8 rounded-lg shadow-lg"
      />

      {/* Content */}
      <div className="prose max-w-none">
        <p>
          When it comes to <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing in Amarillo</a>, it's important to choose a roofing contractor
          who can provide a wide range of services, including <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roof repair</a>, roof leak repair, roof maintenance,
          and flat roof repair to address any roofing issue. From <strong>roof leak repair</strong> to{" "}
          <strong>roof maintenance</strong> and <strong>flat roof repair</strong>, finding a contractor who
          can handle all of your <strong>commercial roofing</strong> needs is crucial. We also service surrounding areas including <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a> and <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">Odessa</a>.
        </p>

        <p>
          One of the key factors to consider when selecting a <strong>roofing contractor</strong> is their{" "}
          <strong>experience and reputation</strong>.
        </p>

        <p>
          A contractor with years of experience in <strong>commercial roof repair</strong> will have the
          knowledge and expertise to effectively diagnose and fix any <strong>roofing problem</strong>.
        </p>

        <p>
          A contractor with a positive reputation in the community is more likely to provide reliable and
          high-quality services. In Amarillo, it's especially important to choose a contractor who uses{" "}
          <strong>high-quality materials</strong>.
        </p>

        <p>
          The harsh climate in the area requires durable and long-lasting roofing solutions that can
          withstand extreme weather conditions including hail, wind, and temperature fluctuations.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Commercial Roofing Services</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Roof Leak Repair:</strong> Fast response to emergency leaks and water intrusion</li>
          <li><strong>Flat Roof Repair:</strong> Specialized in TPO, EPDM, and modified bitumen systems</li>
          <li><strong>Roof Maintenance:</strong> Preventive maintenance programs to extend roof life</li>
          <li><strong>Commercial Roof Replacement:</strong> Complete tear-off and new installation</li>
          <li><strong>Storm Damage Assessment:</strong> Insurance claim support and documentation</li>
          <li><strong>Roof Coating Systems:</strong> Extend roof life with reflective coatings</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose 5 Star for Commercial Roofing?</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Minimal business disruption during repairs</li>
          <li>Night and weekend work available</li>
          <li>Licensed and fully insured commercial roofing specialists</li>
          <li>Experience with all commercial roofing systems</li>
          <li>Direct insurance billing and claims assistance</li>
          <li>Warranty-backed workmanship</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Commercial Roofing Problems in Amarillo</h2>

        <p>
          Amarillo's commercial buildings face unique roofing challenges:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ponding Water:</strong> Flat roofs require proper drainage to prevent water damage</li>
          <li><strong>Hail Damage:</strong> Impact from hailstorms can compromise membrane integrity</li>
          <li><strong>Wind Damage:</strong> High winds can lift membrane edges and flashings</li>
          <li><strong>UV Degradation:</strong> Intense sun exposure breaks down roofing materials over time</li>
          <li><strong>Thermal Expansion:</strong> Temperature swings cause expansion and contraction</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Preventive Maintenance Programs</h2>

        <p>
          Protect your investment with our commercial roof maintenance programs:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Bi-annual professional inspections</li>
          <li>Priority emergency service for maintenance customers</li>
          <li>Detailed inspection reports with photos</li>
          <li>Minor repairs included in maintenance agreement</li>
          <li>Extended warranty protection</li>
          <li>Budget-friendly monthly payment plans</li>
        </ul>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-brand-gold/20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-brand-brown">Need Commercial Roof Repair in Amarillo?</h2>
        <p className="mb-6 text-gray-700">
          Contact 5 Star Commercial Roofing for fast, professional commercial roof repair and maintenance.
          We offer free estimates and emergency service for commercial properties.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="tel:8066226041"
            className="btn-primary-hero"
          >
            📞 Call (806) 622-6041
          </a>
          <a
            href="/contact/"
            className="bg-white border-2 border-brand-gold text-brand-brown hover:bg-brand-gold px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Request Free Estimate
          </a>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/commercial-roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Commercial Roofing</h3>
            <p className="text-sm text-gray-600">Complete commercial roofing solutions</p>
          </a>
          <a href="/roof-repair-services-in-amarillo/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Roof Repair Services</h3>
            <p className="text-sm text-gray-600">Expert roof repairs for all roof types</p>
          </a>
          <a href="/hail-damage-repair-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
            <p className="text-sm text-gray-600">Insurance claims and storm damage restoration</p>
          </a>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Serving West Texas</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">• Amarillo Roofing</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
