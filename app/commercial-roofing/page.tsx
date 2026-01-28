import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import { OptimizedImage } from "@/components/OptimizedImage";

export const metadata: Metadata = {
  title: 'Commercial Roofing in Amarillo TX| TPO, PVC, EPDM | 5 Star',
  description: 'commercial roofing in Amarillo. TPO, PVC, EPDM, and built-up roofing systems. Call for a free quote!',
};

export default function Page() {
  // JSON-LD Schema for Commercial Service
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Roofing Services",
    "provider": {
      "@type": "RoofingContractor",
      "name": "5 Star Commercial Roofing",
      "telephone": "+1-806-622-6041",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Serving West Texas",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Amarillo",
        "address": { "@type": "PostalAddress", "addressRegion": "TX" }
      },
      {
        "@type": "City",
        "name": "Midland",
        "address": { "@type": "PostalAddress", "addressRegion": "TX" }
      },
      {
        "@type": "City",
        "name": "Odessa",
        "address": { "@type": "PostalAddress", "addressRegion": "TX" }
      },
      {
        "@type": "City",
        "name": "Lubbock",
        "address": { "@type": "PostalAddress", "addressRegion": "TX" }
      }
    ],
    "description": "Expert commercial roofing services in Amarillo and West Texas. Specializing in TPO, PVC, EPDM, built-up roofing, modified bitumen, and standing seam metal for commercial buildings.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TPO Roofing Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PVC Roofing Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Built-Up Roofing (BUR)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modified Bitumen Roofing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Hail Damage Repair"
          }
        }
      ]
    }
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Commercial Roofing",
                      "url": "/commercial-roofing/"
              }
      ]} />


      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Commercial Roofing Services in Amarillo</h1>

      {/* Hero Image */}
      <img
        src="/photos/Large_commercial_flat_roof_installation3.png"
        alt="Commercial roofing services Midland Odessa Texas - Flat roof TPO installation on business building - 5 Star Commercial Roofing"
        className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg mb-6 md:mb-8"
      />

      <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-brand-brown mb-4">Protect Your Business Investment</h2>
        <p className="text-lg">
          Your commercial roof is one of your business's most critical assets. At 5 Star Commercial Roofing,
          we specialize in commercial roofing systems designed to withstand West Texas weather—including severe
          hail storms that can cause significant damage to your property.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Commercial Roofing Systems We Install</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1} direction="left">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img
              src="/photos/Large_commercial_flat_roof_installation0.png"
              alt="TPO commercial roofing installation Midland TX - White membrane heat-welded seams - 5 Star Commercial Roofing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">TPO Roofing</h3>
              <p className="mb-3">
                Thermoplastic Polyolefin (TPO) is one of the fastest-growing commercial roofing materials.
                Heat-welded seams create a watertight barrier that stands up to Amarillo's extreme weather.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Energy-efficient white reflective surface</li>
                <li>Excellent hail resistance</li>
                <li>Cost-effective long-term solution</li>
                <li>15-20 year lifespan</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="right">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img
              src="/photos/tpo-sunset1.jpg"
              alt="PVC commercial roofing membrane Odessa TX - Chemical resistant flat roof system - 5 Star Commercial Roofing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">PVC Roofing</h3>
              <p className="mb-3">
                PVC (Polyvinyl Chloride) roofing offers superior durability and chemical resistance,
                making it ideal for restaurants, manufacturing facilities, and other commercial properties.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Most durable single-ply membrane</li>
                <li>Excellent hail impact resistance</li>
                <li>Fire-resistant properties</li>
                <li>20-30 year lifespan</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="left">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">EPDM Roofing</h3>
              <p className="mb-3">
                Ethylene Propylene Diene Monomer (EPDM) is a proven rubber roofing system that has
                protected commercial buildings for decades.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Highly durable rubber membrane</li>
                <li>Proven long-term performance</li>
                <li>Budget-friendly option</li>
                <li>15-25 year lifespan</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} direction="right">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Built-Up Roofing (BUR)</h3>
              <p className="mb-3">
                Multiple layers of bitumen and reinforcing fabrics create an extremely durable,
                weatherproof system ideal for low-slope commercial buildings.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Multiple waterproof layers</li>
                <li>Excellent hail protection</li>
                <li>Fire-resistant when graveled</li>
                <li>20-30 year lifespan</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8 mt-6">
        <FadeIn delay={0.1} direction="left">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Modified Bitumen Roofing</h3>
              <p className="mb-3">
                Modified bitumen combines the proven performance of built-up roofing with modern polymer technology for enhanced flexibility and durability. Available in torch-applied, cold-applied, and self-adhered systems.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>APP and SBS modified systems</li>
                <li>Excellent for extreme temperature fluctuations</li>
                <li>Superior puncture resistance</li>
                <li>15-20 year lifespan</li>
                <li>Ideal for high-traffic roof areas</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="right">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Standing Seam Metal Roofing</h3>
              <p className="mb-3">
                For commercial buildings requiring superior durability and modern aesthetics, standing seam metal roofing provides unmatched longevity and hail resistance. Popular for office buildings, retail centers, and modern industrial facilities.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>26-gauge and 24-gauge steel options</li>
                <li>Concealed fasteners prevent leaks</li>
                <li>Exceptional hail and wind resistance</li>
                <li>Energy-efficient cool roof options</li>
                <li>40-50 year lifespan</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Commercial Hail Damage Services</h2>

      <div className="mb-6">
        <img
          src="/photos/Large_commercial_flat_roof_installation3.png"
          alt="Large commercial flat roof installation in Amarillo TX - TPO membrane system for warehouse and industrial buildings - 5 Star Commercial Roofing"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <p className="mb-4">
        West Texas hailstorms can devastate commercial roofs, causing leaks, membrane punctures, and
        equipment damage. Our <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline font-semibold">commercial hail damage specialists</a> are ready 24/7 to protect your business:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>Emergency Storm Response:</strong> Available 24/7 for <a href="/storm-damage-roof-repair-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">emergency leak repairs</a> and tarping</li>
        <li><strong>Comprehensive Damage Assessment:</strong> Detailed documentation for insurance claims with drone inspections</li>
        <li><strong>Insurance Claim Assistance:</strong> We work directly with your adjuster to ensure full coverage—95% claim approval rate</li>
        <li><strong>Minimal Business Disruption:</strong> Strategic scheduling to keep your operations running during installation</li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-4">Commercial Projects We've Completed</h2>
      <p className="mb-4">
        We've installed and repaired commercial roofing systems across West Texas for businesses of all types. Here are some examples of our work:
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Retail Centers</h3>
          <p className="text-sm text-gray-600 mb-2">I-40 corridor shopping centers in <a href="/roofing-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">Amarillo</a></p>
          <p className="text-xs text-gray-500">45,000 sq ft TPO white membrane replacement after 2023 hail storm</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Industrial Warehouses</h3>
          <p className="text-sm text-gray-600 mb-2">Oil & gas facilities in <a href="/midland-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">Midland</a> and <a href="/odessa-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">Odessa</a></p>
          <p className="text-xs text-gray-500">100,000+ sq ft modified bitumen and standing seam metal installations</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Office Buildings</h3>
          <p className="text-sm text-gray-600 mb-2">Downtown Amarillo professional offices</p>
          <p className="text-xs text-gray-500">PVC roofing with 30-year warranty for multi-tenant buildings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Restaurants</h3>
          <p className="text-sm text-gray-600 mb-2">Quick-service and sit-down restaurants</p>
          <p className="text-xs text-gray-500">PVC chemical-resistant systems ideal for grease exhaust areas</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Apartment Complexes</h3>
          <p className="text-sm text-gray-600 mb-2">Multi-family housing across the Panhandle</p>
          <p className="text-xs text-gray-500">Built-up roofing and TPO systems for large-scale residential properties</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Manufacturing</h3>
          <p className="text-sm text-gray-600 mb-2">Production facilities and processing plants</p>
          <p className="text-xs text-gray-500">Standing seam metal for high-durability applications</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">ROI & Energy Efficiency Benefits</h2>
      <div className="bg-brand-gold-light p-6 rounded-lg mb-8">
        <p className="mb-4">
          A new commercial roof isn't just an expense—it's an investment that can reduce operating costs and increase property value. Here's how:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-brand-brown mb-2">Energy Savings</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>White TPO and PVC membranes reflect up to 85% of solar heat</li>
              <li>Reduce cooling costs by 20-30% in Texas summers</li>
              <li>ENERGY STAR® rated systems available</li>
              <li>Cool roof tax credits and rebates may apply</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-brand-brown mb-2">Long-Term Value</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Prevents interior damage from leaks (mold, ceiling tiles, inventory)</li>
              <li>Increases property value and curb appeal</li>
              <li>Reduces maintenance costs over roof lifespan</li>
              <li>Insurance premium discounts for hail-resistant systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Commercial Before/After Examples */}
      <h3 className="text-xl font-bold mt-8 mb-6">Commercial Roof Transformations</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h4 className="font-bold mb-3 text-brand-brown text-xl">TPO Replacement - Midland Retail Center</h4>
            <p className="text-gray-600 mb-2">25,000 sq ft white TPO membrane with 20-year warranty</p>
            <p className="text-sm text-gray-500">Complete commercial roof replacement for retail complex along I-20 corridor</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h4 className="font-bold mb-3 text-brand-brown text-xl">Warehouse Restoration - Odessa Industrial Park</h4>
            <p className="text-gray-600 mb-2">Complete EPDM system replacement after hail damage</p>
            <p className="text-sm text-gray-500">Storm damage restoration for industrial facility in Permian Basin</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose 5 Star for Commercial Roofing?</h2>

      <div className="mb-6">
        <OptimizedImage
        src="/photos/Professional_roofing_crew_on_Texas_residential_home"
        alt="Professional 5 Star roofing crew installing commercial roof in Texas"
        className="w-full h-64 object-cover rounded-lg"
        priority={true}
        sizes="100vw"
      />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl mb-2">⚡</div>
          <h3 className="font-bold mb-2">Fast Response</h3>
          <p className="text-sm text-gray-600">Emergency service available when you need it most</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl mb-2">💼</div>
          <h3 className="font-bold mb-2">Business-Focused</h3>
          <p className="text-sm text-gray-600">We minimize disruption to your operations</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl mb-2">🛡️</div>
          <h3 className="font-bold mb-2">Fully Licensed & Insured</h3>
          <p className="text-sm text-gray-600">Comprehensive coverage for your protection</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Commercial Properties We Serve</h2>
      <p className="mb-4">
        From small retail shops to large industrial warehouses, we provide expert commercial roofing services for all property types across <a href="/service-areas/" className="text-brand-brown hover:text-brand-gold underline">West Texas</a>:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">Retail Buildings</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">Warehouses</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">Office Buildings</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">Restaurants</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">Hotels & Motels</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">Apartment Complexes</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">Manufacturing Facilities</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">Churches & Schools</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">How long does a commercial roof installation take?</h3>
          <p className="text-gray-700">
            Timeline depends on roof size and complexity. A typical 10,000-15,000 sq ft retail building takes 3-5 days for TPO or PVC installation. Larger warehouses (50,000+ sq ft) may take 2-3 weeks. We work with your schedule to minimize business disruption, including after-hours and weekend installations when needed.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">What's the best commercial roofing system for West Texas?</h3>
          <p className="text-gray-700">
            For hail-prone areas like Amarillo, Midland, and Odessa, we recommend TPO or PVC membranes for their excellent hail resistance and energy efficiency. For metal buildings or structures requiring maximum longevity, standing seam metal is ideal. Modified bitumen works well for buildings with heavy rooftop traffic. We'll assess your specific needs during a free inspection. Learn more about our <a href="/commercial-roofing-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">Amarillo commercial roofing services</a>.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">Will insurance cover commercial roof hail damage?</h3>
          <p className="text-gray-700">
            Most commercial property insurance policies cover hail damage roof replacement, minus your deductible. We provide comprehensive damage documentation including drone aerial photos, infrared moisture scans, and detailed reports that insurance adjusters require. Our team has achieved a 95%+ claim approval rate. Contact us for a <a href="/roof-inspections-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">free damage assessment</a>.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">How much does commercial roofing cost in Texas?</h3>
          <p className="text-gray-700">
            Commercial roofing costs typically range from $4-$12 per square foot installed, depending on the system selected. TPO averages $5-$7/sq ft, PVC runs $6-$9/sq ft, and standing seam metal costs $8-$12/sq ft. A 15,000 sq ft building would range from $60,000-$135,000. We provide detailed, transparent estimates with no hidden fees.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">Do you service Midland, Odessa, and Lubbock?</h3>
          <p className="text-gray-700">
            Yes! We provide full commercial roofing services throughout West Texas including <a href="/hail-damage-repair-midland-tx/" className="text-brand-brown hover:text-brand-gold underline">Midland</a>, <a href="/hail-damage-repair-odessa-tx/" className="text-brand-brown hover:text-brand-gold underline">Odessa</a>, <a href="/lubbock-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">Lubbock</a>, and surrounding areas. Our crews are familiar with local building codes and weather patterns in each city we serve.
          </p>
        </div>
      </div>
    

      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">
          Contact 5 Star Commercial Roofing for a free inspection and estimate.
          We're here to help Amarillo homeowners and businesses with all their roofing needs.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="tel:8066226041" className="btn-primary bg-white text-brand-brown hover:bg-gray-100">
            Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown">
            Request Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
