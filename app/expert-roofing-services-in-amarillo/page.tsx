import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Amarillo TX Roofing Services | 5 Star Roofing',
  description: "Choose 5 Star Roofing for top-notch residential and commercial roofing services in Amarillo. Quality materials, expert service, and unbeatable reliability.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Expert Roofing Services",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109"
      }
    },
    "areaServed": [
      {"@type": "City", "name": "Amarillo"},
      {"@type": "City", "name": "Canyon"},
      {"@type": "City", "name": "Bushland"}
    ],
    "description": "Expert roofing services in Amarillo, Texas. Professional residential and commercial roofing, storm damage repair, and roof replacement."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Expert Roofing Services",
                      "url": "/expert-roofing-services/"
              },
              {
                      "name": "Amarillo",
                      "url": "/expert-roofing-services-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Amarillo Roofer – 5 Star Roofing</h1>
      </FadeIn>

      {/* Post Meta */}
      <div className="text-gray-600 mb-6 flex gap-4">
        <time dateTime="2023-12-15">December 15, 2023</time>
        <span>By 5 Star Roofing</span>
      </div>

      {/* Featured Image */}
      <img
        src="/images/roofing-services-amarillo.jpg"
        alt="Roofing Services in Amarillo"
        className="w-full max-w-2xl h-auto mb-8 rounded-lg shadow-lg"
      />

      {/* Content */}
      <div className="prose max-w-none">
        <p>
          5 Star Roofing is a highly respected <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo roofing contractor</a> specializing in residential
          and commercial roofing services in Amarillo, Texas. With a diverse range of services, they have
          become a go-to choice for all kinds of <strong>roofing</strong> needs throughout the <a href="/service-areas/" className="text-brand-gold hover:underline">Texas Panhandle</a>.
        </p>

        <p>
          Whether it's <strong>roof repair</strong>, <strong>residential roofing</strong>,{" "}
          <strong>commercial roofing</strong>, or <strong>roof installation</strong>, they have the
          expertise to handle it all. We also provide <a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">free roof inspections</a> and work directly with insurance companies for <a href="/roof-storm-damage-in-amarillo/" className="text-brand-gold hover:underline">storm damage claims</a>.
        </p>

        <p>
          What sets them apart is their unwavering commitment to quality.
        </p>

        <p>
          They pay meticulous attention to detail, ensuring that every project is executed flawlessly.
          Their dedication to customer satisfaction has earned them an impeccable reputation in the industry.
        </p>

        <p>
          One notable aspect of their service is the use of only the finest materials. This focus on
          high-quality materials guarantees long-lasting, durable roofing solutions that can withstand
          Amarillo's challenging weather conditions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Comprehensive Roofing Services</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Residential Roofing:</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">Complete Residential Roofing Solutions</a></li>
          <li><a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">Roof Replacement & Installation</a></li>
          <li><a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">Roof Repairs & Maintenance</a></li>
          <li><a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">Hail & Storm Damage Repair</a></li>
          <li>Asphalt Shingle Installation</li>
          <li>Metal Roofing Systems</li>
          <li>Free Roof Inspections</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Commercial Roofing:</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">Complete Commercial Roofing</a></li>
          <li>Flat Roof Installation & Repair</li>
          <li>TPO & EPDM Roofing Systems</li>
          <li>Commercial Roof Maintenance Programs</li>
          <li>Emergency Roof Repairs</li>
          <li>Roof Coating & Restoration</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose 5 Star Roofing?</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Expert Craftsmanship:</strong> Skilled professionals with years of experience</li>
          <li><strong>Quality Materials:</strong> Only premium, weather-resistant roofing products</li>
          <li><strong>Local Expertise:</strong> Deep understanding of Amarillo weather challenges</li>
          <li><strong>Customer Focus:</strong> Dedicated to complete satisfaction on every project</li>
          <li><strong>Licensed & Insured:</strong> Fully certified and bonded for your protection</li>
          <li><strong>Warranty Protection:</strong> Comprehensive warranties on materials and workmanship</li>
          <li><strong>Free Estimates:</strong> No-obligation, detailed project quotes</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Process</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Free Consultation:</strong> Discuss your roofing needs and concerns</li>
          <li><strong>Thorough Inspection:</strong> Professional assessment of your roof's condition</li>
          <li><strong>Detailed Estimate:</strong> Transparent pricing with all costs clearly outlined</li>
          <li><strong>Quality Installation:</strong> Expert crews using proven techniques</li>
          <li><strong>Final Walkthrough:</strong> Ensure you're completely satisfied</li>
          <li><strong>Ongoing Support:</strong> Available for any questions or future needs</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Serving Amarillo with Pride</h2>

        <p>
          As a local Amarillo roofing company, we understand the unique challenges that West Texas weather
          presents. From intense hailstorms to high winds and extreme temperature fluctuations, your roof
          needs to be built to withstand it all. That's why we use only the highest quality materials and
          employ proven installation techniques.
        </p>

        <p>
          Our reputation in the Amarillo community speaks for itself. We've built our business on honest
          communication, fair pricing, and quality workmanship that lasts. When you choose 5 Star Roofing,
          you're choosing a partner who cares about protecting your home or business.
        </p>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-brand-gold/20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-brand-brown">Ready for Expert Roofing Services?</h2>
        <p className="mb-6 text-gray-700">
          Contact 5 Star Commercial Roofing today for professional roofing services in Amarillo. We offer
          free inspections, competitive pricing, and quality workmanship guaranteed.
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

      {/* Service Areas */}
      <section className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Serving Amarillo & Surrounding Areas</h2>
        <p className="text-lg mb-4">
          Professional roofing services throughout the Texas Panhandle and West Texas:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing Services</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Commercial Roofing</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roof Repair</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Popular Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/residential-roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Residential Roofing</h3>
            <p className="text-sm text-gray-600">Complete home roofing solutions</p>
          </a>
          <a href="/commercial-roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Commercial Roofing</h3>
            <p className="text-sm text-gray-600">Professional business roofing services</p>
          </a>
          <a href="/hail-damage-repair-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Storm Damage</h3>
            <p className="text-sm text-gray-600">Expert storm and hail damage repair</p>
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
