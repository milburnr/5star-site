import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "Amarillo's Best Roofer | Free Inspection Today | Top-Rated Company",
  description: "Need a reliable roofing company in Amarillo? Amarillo's Best Roofer is the top choice for all your roofing needs with exceptional customer service. Free inspections available. Call today (806) 622-6041",
  openGraph: {
    title: "Amarillo's Best Roofer | 5 Star Commercial Roofing",
    description: "Top-rated roofing contractor in Amarillo, TX. Free inspections, hail damage experts. Call (806) 622-6041",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="container-custom py-12">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Amarillo", url: "/amarillo-texas-roofing/" },
        { name: "Best Roofer", url: "/amarillos-best-roofer/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "5 Star Commercial Roofing",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "/images/amarillo-roofing-company.jpg",
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
              "latitude": 35.1844,
              "longitude": -101.8313
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            "areaServed": [
              {"@type": "City", "name": "Amarillo"},
              {"@type": "City", "name": "Midland"},
              {"@type": "City", "name": "Odessa"},
              {"@type": "City", "name": "Lubbock"}
            ]
          })
        }}
      />

      <h1 className="text-4xl font-bold mb-6">Amarillo's Best Roofer</h1>

      {/* Post Meta */}
      <div className="text-gray-600 mb-6 flex gap-4">
        <time dateTime="2023-12-15">December 15, 2023</time>
        <span>By 5 Star Roofing</span>
      </div>

      {/* Featured Image */}
      <img
        src="/images/amarillo-roofing-company.jpg"
        alt="Amarillo Roofing Company"
        className="w-full max-w-2xl h-auto mb-8 rounded-lg shadow-lg"
      />

      {/* Content */}
      <div className="prose max-w-none">
        <p>
          Finding the best roofing contractor in Amarillo is a crucial decision for homeowners looking for
          top-notch roofing services. It's not just about finding a <strong>reliable</strong> and{" "}
          <strong>experienced</strong> roofer - pricing and affordability also play a significant role.
          At 5 Star Commercial Roofing, we've earned our reputation as Amarillo's premier roofing contractor
          through over a decade of exceptional service to the Texas Panhandle.
        </p>

        <p>
          Nobody wants to break the bank when it comes to fixing their roof, but quality should never be
          compromised. That's why we offer competitive pricing, transparent estimates, and work directly
          with your insurance company to ensure you get the coverage you deserve. Call us at{" "}
          <strong>(806) 622-6041</strong> for a <strong>free inspection</strong> and estimate.
        </p>

        <p>
          When looking for Amarillo's best roofer, it's important to consider several factors. You need a
          contractor who understands the unique challenges of <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">roofing in Amarillo</a> and
          the broader West Texas region, from severe hailstorms to extreme temperature fluctuations.
        </p>

        <p>
          First and foremost, <strong>experience</strong> matters. A roofer with years of experience will
          have the knowledge and expertise to handle any roofing job efficiently and effectively. Our team
          has been serving Amarillo, Midland, Odessa, and Lubbock since 2013, completing thousands of
          successful roofing projects.
        </p>

        <p>
          Next, consider the range of services offered by the roofer. A <strong>top roofing company</strong>{" "}
          should be able to provide a wide range of services, including inspections, repairs, replacements,
          and installations. We handle everything from <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> to
          <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline"> commercial projects</a>,
          ensuring comprehensive solutions for all our clients.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What Makes 5 Star Roofing the Best Choice?</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>10+ Years of Experience:</strong> Serving Amarillo and the Texas Panhandle since 2013</li>
          <li><strong>Licensed & Insured:</strong> Fully certified and bonded for your protection</li>
          <li><strong>Local Expertise:</strong> Deep understanding of West Texas weather challenges</li>
          <li><strong>5-Star Reviews:</strong> Consistently rated highest by Amarillo homeowners</li>
          <li><strong>Free Inspections:</strong> No-obligation roof assessments</li>
          <li><strong>Insurance Specialists:</strong> We handle all claim paperwork and negotiations</li>
          <li><strong>Quality Materials:</strong> Only premium, hail-resistant roofing products</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Comprehensive Roofing Services</h2>

        <p>
          As Amarillo's premier roofing contractor, we offer complete roofing solutions for residential
          and commercial properties:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">Complete Roof Replacement</a></li>
          <li><a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">Hail Damage Repair & Claims</a></li>
          <li><a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">Emergency Roof Repairs</a></li>
          <li><a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">Residential Roofing</a></li>
          <li><a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">Commercial Roofing</a></li>
          <li>Roof Inspections & Maintenance</li>
          <li>Storm Damage Assessment</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Affordable Pricing Without Compromise</h2>

        <p>
          We believe quality roofing should be accessible. That's why we offer competitive pricing,
          flexible financing options, and work directly with insurance companies to maximize your claim.
          Get a free, no-pressure estimate today by calling <strong>(806) 622-6041</strong> or visiting
          our <a href="/contact/" className="text-brand-gold hover:underline">contact page</a>.
        </p>

        <p>
          Our transparent pricing model means you'll never encounter surprise charges or hidden fees. We
          provide detailed written estimates that break down all costs, from materials to labor, so you
          know exactly what you're paying for. Many of our clients are able to have their entire roof
          replacement or repair covered by insurance, and we're experts at helping homeowners navigate
          the claims process.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Amarillo Homeowners Trust Us</h2>

        <p>
          Our reputation speaks for itself. We've built our business on honest communication, quality
          workmanship, and standing behind our work. When you choose 5 Star Roofing, you're choosing:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Transparent pricing with detailed written estimates</li>
          <li>Quality workmanship backed by manufacturer warranties</li>
          <li>Same-day emergency response for urgent repairs</li>
          <li>Clean job sites and professional crews</li>
          <li>Direct communication throughout your project</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Specialized Hail Damage Expertise</h2>

        <p>
          Living in the Texas Panhandle means dealing with frequent hailstorms. Our team specializes in
          <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline"> hail damage repair</a> and
          insurance claims assistance. We'll thoroughly inspect your roof after any storm, document all
          damage with detailed reports and photographs, and work directly with your insurance adjuster
          to ensure you receive fair compensation.
        </p>

        <p>
          We understand the stress and confusion that can come with filing an insurance claim. That's why
          we handle all the paperwork and communication with your insurance company, making the process
          as smooth and stress-free as possible for you. Our goal is to restore your roof to perfect
          condition while maximizing your insurance settlement.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Service Areas Throughout West Texas</h2>

        <p>
          While Amarillo is our home, we proudly serve the entire Texas Panhandle and West Texas region.
          Our service area includes <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a>,
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline"> Odessa</a>, Lubbock, Canyon,
          Borger, Pampa, Dumas, and all surrounding communities. No matter where you're located in West Texas,
          you can count on us for prompt, professional roofing services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Emergency Roofing Services Available</h2>

        <p>
          Roof damage doesn't wait for business hours, and neither do we. We offer same-day emergency
          services for storm damage, leaks, and other urgent roofing issues. Our team is available 24/7
          to respond to emergencies, providing temporary repairs to protect your property until permanent
          repairs can be completed.
        </p>

        <p>
          Don't let a damaged roof put your home or business at risk. Contact us immediately at{" "}
          <strong>(806) 622-6041</strong> if you're experiencing a roofing emergency. We'll dispatch
          a crew to your location as quickly as possible to assess the damage and implement emergency
          protective measures.
        </p>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-brand-gold/20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-brand-brown">Ready to Work with Amarillo's Best Roofer?</h2>
        <p className="mb-6 text-gray-700">
          Contact 5 Star Commercial Roofing today for a free inspection and estimate. Experience the
          difference that quality, expertise, and customer service make.
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
            Get Free Estimate
          </a>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/residential-roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Residential Roofing</h3>
            <p className="text-sm text-gray-600">Expert home roofing services for Amarillo residents</p>
          </a>
          <a href="/commercial-roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Commercial Roofing</h3>
            <p className="text-sm text-gray-600">Professional roofing solutions for businesses</p>
          </a>
          <a href="/hail-damage-repair-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Hail Damage Repair</h3>
            <p className="text-sm text-gray-600">Insurance claim assistance and expert repairs</p>
          </a>
        </div>
      </section>
    </div>
  );
}
