import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/amarillo-homes-roofing-services/' },
  title: 'Amarillo Homes Roofing| Expert Residential Services',
  description: 'Amarillo Homes Roofing Services is here to cater to all your roofing needs. We guarantee exceptional results. Free inspections available.',
  openGraph: {
    title: "Amarillo Homes Roofing | Expert Residential Roofing Services",
    description: "Professional residential roofing services in Amarillo, TX. Free inspections, hail damage repair, and complete roof replacements. Call (806) 622-6041",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="container-custom py-12">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Amarillo Homes", url: "/amarillo-homes-roofing-services/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/amarillo-homes-roofing-services/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/amarillo-homes-roofing-services/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roofing services in Amarillo, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
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
            "areaServed": [
              {
                "@type": "City",
                "name": "Amarillo",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "TX"
                }
              },
              {
                "@type": "City",
                "name": "Midland",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "TX"
                }
              },
              {
                "@type": "City",
                "name": "Odessa",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "TX"
                }
              },
              {
                "@type": "City",
                "name": "Lubbock",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "TX"
                }
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Residential Roofing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Replacement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hail Damage Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Inspections"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                  }
                }
              ]
            }
          })
        }}
      />

      <h1 className="text-4xl font-bold mb-6">Amarillo Homes Roofing Services</h1>

      {/* Post Meta */}
      <div className="text-gray-600 mb-6 flex gap-4">
        <time dateTime="2023-12-15">December 15, 2023</time>
        <span>By 5 Star Roofing</span>
      </div>

      {/* Featured Image */}
      <img
        src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-3-1280w.jpg"
        alt="Amarillo Homes Roofing"
        className="w-full max-w-2xl h-auto mb-8 rounded-lg shadow-lg"
      />

      {/* Content */}
      <div className="prose max-w-none">
        <p>
          When it comes to roofing services, 5 Star Commercial Roofing is the top choice for all your
          residential roofing needs in Amarillo. Our team of experienced professionals understands the
          unique challenges that homeowners face when it comes to their roofs, especially in the Texas Panhandle
          where severe weather conditions can take a toll on your home's protection.
        </p>

        <p>
          At 5 Star Roofing, we offer a wide range of services to address all your <strong>roofing needs</strong>.
          From minor repairs to complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacements in Amarillo</a>,
          we have the expertise and equipment to handle any residential roofing project throughout West Texas.
        </p>

        <p>
          Whether you need a minor repair or a complete <strong>roof installation</strong>, our skilled
          and knowledgeable team can handle it all. We serve homeowners throughout Amarillo, Canyon, Borger,
          and the entire Texas Panhandle region with professional roofing solutions tailored to withstand
          the unique climate challenges of our area.
        </p>

        <p>
          We believe in open communication and prompt response to all your questions and concerns.
          Our dedicated team will guide you through the entire process, ensuring that your
          <strong> roofing needs</strong> are met efficiently and effectively. Call us today at
          <strong> (806) 622-6041</strong> for a free inspection of your Amarillo home.
        </p>

        <p>
          Customer satisfaction is our top priority. We strive to provide exceptional services to
          every homeowner we work with. Our commitment to quality has made us one of the most trusted
          <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline"> residential roofing contractors in Amarillo</a>.
        </p>

        <p>
          If you're looking for reliable <strong>roofing services</strong> in Amarillo, contact
          5 Star Commercial Roofing today for a free consultation and estimate. We offer same-day
          prompt services for storm damage and provide comprehensive insurance claim assistance.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comprehensive Roofing Solutions for Texas Panhandle Homes</h2>

        <p>
          Living in the Texas Panhandle means dealing with extreme weather conditions year-round. From severe
          hailstorms in spring and summer to strong winds and temperature fluctuations throughout the year, your
          roof needs to be built to last. At 5 Star Commercial Roofing, we specialize in installing and repairing
          roofing systems specifically designed to withstand West Texas weather.
        </p>

        <p>
          Our residential roofing services extend beyond Amarillo to include <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a>,
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline"> Odessa</a>, and Lubbock.
          We understand that each home is unique, which is why we offer personalized roofing solutions that match
          your budget, style preferences, and long-term protection needs.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Expert Hail Damage Assessment and Repair</h2>

        <p>
          Hail damage is one of the most common roofing issues in Amarillo and the surrounding Texas Panhandle region.
          Even seemingly minor hail can cause significant damage that compromises your roof's integrity. Our expert
          team provides thorough <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage inspections and repairs</a> to
          ensure your home remains protected.
        </p>

        <p>
          We work directly with your insurance company to streamline the claims process, documenting all damage
          with detailed reports and photographs. Our team has helped hundreds of Amarillo homeowners successfully
          navigate insurance claims, ensuring they receive the coverage they deserve for quality repairs or
          full roof replacements.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Residential Roofing Services</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">Complete Roof Replacement</a></li>
          <li><a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">Hail Damage Repair</a></li>
          <li><a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">Free Roof Inspections</a></li>
          <li><a href="/asphalt-roofing-in-amarillo/" className="text-brand-gold hover:underline">Asphalt Shingle Installation</a></li>
          <li><a href="/metal-roof-installation-odessa-texas/" className="text-brand-gold hover:underline">Metal Roofing</a></li>
          <li>Insurance Claim Assistance</li>
          <li>Storm Damage Roof Repairs</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose 5 Star Roofing for Your Amarillo Home?</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Local Expertise:</strong> We understand West Texas weather and roofing challenges</li>
          <li><strong>Quality Materials:</strong> We use only premium, hail-resistant roofing materials</li>
          <li><strong>Licensed & Insured:</strong> Fully certified to work in Amarillo and surrounding areas</li>
          <li><strong>Free Inspections:</strong> No-obligation roof assessments</li>
          <li><strong>Insurance Help:</strong> We handle all the paperwork for your claim</li>
          <li><strong>10+ Years Experience:</strong> Trusted by Amarillo homeowners since 2013</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Service Process: From Inspection to Completion</h2>

        <p>
          At 5 Star Commercial Roofing, we follow a proven process to ensure your residential roofing project
          is completed efficiently and to the highest standards:
        </p>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Free Inspection:</strong> We start with a comprehensive roof inspection to assess the
            condition of your roof and identify any issues. This inspection is completely free with no obligation.
          </li>
          <li>
            <strong>Detailed Estimate:</strong> Based on our findings, we provide a detailed written estimate
            that outlines the scope of work, materials to be used, and project timeline.
          </li>
          <li>
            <strong>Insurance Assistance:</strong> If your roof damage is covered by insurance, we'll work
            directly with your insurance adjuster to document the damage and ensure your claim is properly filed.
          </li>
          <li>
            <strong>Material Selection:</strong> We'll help you choose the best roofing materials for your home,
            considering factors like durability, aesthetics, energy efficiency, and budget.
          </li>
          <li>
            <strong>Professional Installation:</strong> Our experienced crews complete the installation using
            industry best practices, ensuring minimal disruption to your daily routine.
          </li>
          <li>
            <strong>Quality Inspection:</strong> Before we consider the job complete, we conduct a final inspection
            to ensure everything meets our high standards and your expectations.
          </li>
          <li>
            <strong>Cleanup & Warranty:</strong> We thoroughly clean your property and provide you with warranty
            documentation for both materials and workmanship.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pricing and Insurance Information</h2>

        <p>
          The cost of residential roofing in Amarillo varies depending on several factors, including the size
          of your roof, the materials selected, the extent of any damage, and the complexity of the installation.
          At 5 Star Commercial Roofing, we provide transparent, competitive pricing with no hidden fees.
        </p>

        <p>
          Most homeowners insurance policies cover roof repairs or replacement when damage is caused by covered
          events such as hail, wind, or storms. We're experts at working with insurance companies and can help
          you understand your policy coverage. Our team will document all damage thoroughly and provide the
          necessary evidence to support your claim. Visit our <a href="/contact/" className="text-brand-gold hover:underline">contact page</a> to
          schedule a free insurance claim inspection.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Serving the Entire Texas Panhandle Region</h2>

        <p>
          While Amarillo is our home base, our residential roofing services extend throughout the Texas Panhandle
          and West Texas. We're proud to serve homeowners in Canyon, Borger, Dumas, Hereford, and all surrounding
          communities. Our service area also includes major cities like Lubbock, Midland, and Odessa, ensuring
          that quality roofing services are available throughout the region.
        </p>

        <p>
          For comprehensive <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">roofing services in Amarillo</a> and
          the surrounding areas, trust the experts at 5 Star Commercial Roofing. We combine local knowledge,
          premium materials, and exceptional craftsmanship to deliver roofing solutions that protect your home
          for decades to come.
        </p>

        <p>
          Ready to get started? Call us today at <strong>(806) 622-6041</strong> to schedule your free roof
          inspection. We offer flexible scheduling, including evening and weekend appointments, and provide
          same-day prompt services for storm damage. Don't wait until minor issues become major problems—
          contact us today for a free estimate.
        </p>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-brand-gold/20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-brand-brown">Need Roofing Help for Your Amarillo Home?</h2>
        <p className="mb-6 text-gray-700">
          Contact 5 Star Commercial Roofing for expert residential roofing service in Amarillo and
          surrounding areas. Free inspections and same-day storm response available.
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
            Request Free Inspection
          </a>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/residential-roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Residential Roofing</h3>
            <p className="text-sm text-gray-600">Complete residential roofing solutions for Amarillo homes</p>
          </a>
          <a href="/hail-damage-repair-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Hail Damage Repair</h3>
            <p className="text-sm text-gray-600">Expert hail damage assessment and insurance claims</p>
          </a>
          <a href="/roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Amarillo Roofing</h3>
            <p className="text-sm text-gray-600">All roofing services for Amarillo, TX</p>
          </a>
        </div>
      </section>
    </div>
  );
}
