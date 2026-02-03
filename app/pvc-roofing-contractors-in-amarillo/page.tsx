import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'PVC Roofing in Amarillo, TX| Commercial Experts | 5 Star',
  description: 'PVC roofing installation in Amarillo, Midland, Odessa. Heat-welded seams, Class A fire rating, 20+ year warranties. Commercial roofing specialists.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "PVC Roofing Installation",
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
      {"@type": "City", "name": "Midland"},
      {"@type": "City", "name": "Odessa"}
    ],
    "description": "Professional PVC roofing installation for commercial buildings in Amarillo and West Texas. Heat-welded seams, Class A fire rating, 20-30 year warranties."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Pvc Roofing Contractors",
                      "url": "/pvc-roofing-contractors/"
              },
              {
                      "name": "Amarillo",
                      "url": "/pvc-roofing-contractors-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/pvc-roofing-contractors-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/pvc-roofing-contractors-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roofing services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">PVC Roofing Contractors in Amarillo, Midland & Odessa</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">PVC Roofing: Premium Commercial Roof Solution for West Texas</h2>
        <p className="text-lg">
          PVC (Polyvinyl Chloride) roofing is the premium choice for <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial and industrial buildings</a> in <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">Odessa</a>, and throughout West Texas. With superior <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail resistance</a>, fire protection, and chemical resistance, PVC roofing systems offer unmatched durability in the harsh West Texas climate where hailstorms occur 6-12 times annually.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in PVC membrane installation for flat and low-slope commercial roofs. Our heat-welded seam technology creates a monolithic (single-piece) roof surface that's virtually indestructible, with manufacturer warranties extending up to 30 years.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why PVC Roofing Excels in Amarillo, Midland & Odessa</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Superior Hail Resistance</h3>
            <p className="mb-4">
              PVC membranes are more impact-resistant than TPO or EPDM. The flexible material absorbs hail impacts without puncturing—critical in West Texas where baseball-sized hail is common during spring and summer storms.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>UL 2218 Class 4 impact rating available</li>
              <li>Flexible membrane absorbs hail energy</li>
              <li>No cracking or shattering like rigid materials</li>
              <li>Proven performance in Texas hailstorms</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Class A Fire Rating</h3>
            <p className="mb-4">
              PVC is inherently fire-resistant and self-extinguishing. This is critical for oil and gas facilities in Midland-Odessa, warehouses, and any commercial building where fire safety is paramount.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Class A fire rating (highest available)</li>
              <li>Self-extinguishing material</li>
              <li>Lowers insurance premiums significantly</li>
              <li>Required for many industrial applications</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Chemical & Grease Resistance</h3>
            <p className="mb-4">
              Unlike TPO, PVC membranes resist damage from oils, greases, and chemicals. This makes PVC ideal for restaurants, oil/gas facilities in Midland-Odessa, and industrial buildings where chemical exposure occurs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Resists oils and animal fats</li>
              <li>Withstands industrial chemicals</li>
              <li>Perfect for restaurant roof exhausts</li>
              <li>Long lifespan in harsh environments</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Extreme Temperature Performance</h3>
            <p className="mb-4">
              West Texas experiences temperature swings from below 0°F in winter to over 100°F in summer. PVC membranes remain flexible in cold and don't degrade in heat—maintaining watertight seals year-round.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Flexible in extreme cold (below 0°F)</li>
              <li>Stable in extreme heat (160°F+ attics)</li>
              <li>Heat-welded seams don't separate</li>
              <li>20-30 year lifespan in Texas climate</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our PVC Roofing Installation Process</h2>
      <div className="space-y-3 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h5 className="step-title">Roof Deck Inspection & Repair</h5>
            <p className="step-text">Complete evaluation of existing roof deck, insulation, and drainage. We identify and repair any structural issues before installing new PVC membrane.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h5 className="step-title">Insulation Installation</h5>
            <p className="step-text">Install ISO board or polyiso insulation to meet or exceed R-30 requirements for Texas commercial buildings. Proper insulation reduces energy costs and extends membrane life.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h5 className="step-title">Membrane Installation</h5>
            <p className="step-text">Roll out PVC membrane in large sections, minimizing seams. We use fully-adhered or mechanically-attached methods depending on your building's wind exposure and structural capacity.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h5 className="step-title">Heat-Welded Seam Technology</h5>
            <p className="step-text">Use hot-air welding equipment to fuse membrane seams together at molecular level. This creates seams stronger than the membrane itself—impossible to pull apart and virtually leak-proof.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h5 className="step-title">Flashing & Penetration Details</h5>
            <p className="step-text">Custom fabricate PVC flashing for all roof penetrations, HVAC units, and parapet walls. Every detail is heat-welded for complete waterproofing.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h5 className="step-title">Quality Assurance Testing</h5>
            <p className="step-text">Test every seam with electronic or probe testing to ensure 100% watertight installation. Any defects are identified and corrected before final inspection.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">PVC vs. TPO: Which is Better for West Texas?</h2>
      <div className="card mb-8">
        <div className="card-body">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-gold mb-3">Choose PVC When:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>You need Class A fire rating (oil/gas, warehouses)</li>
                <li>Your roof has chemical or grease exposure (restaurants)</li>
                <li>You want maximum hail resistance</li>
                <li>Your building is high-value and needs premium protection</li>
                <li>You're in a high-wind area (Amarillo averages 12-14 mph)</li>
                <li>You want longest possible warranty (30 years)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-gold mb-3">Choose TPO When:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Budget is primary concern</li>
                <li>Roof has no chemical exposure</li>
                <li>You need good (but not maximum) hail resistance</li>
                <li>Building is lower-value warehouse or storage</li>
                <li>20-year warranty is sufficient</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 font-semibold">
            For most commercial buildings in Amarillo, Midland, and Odessa, PVC is worth the 15-20% premium over TPO due to superior longevity and lower lifetime maintenance costs.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Commercial Buildings We Serve</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="feature-box">
          <p className="font-semibold">Office Buildings</p>
        </div>
        <div className="feature-box">
          <p className="font-semibold">Warehouses</p>
        </div>
        <div className="feature-box">
          <p className="font-semibold">Restaurants</p>
        </div>
        <div className="feature-box">
          <p className="font-semibold">Retail Centers</p>
        </div>
        <div className="feature-box">
          <p className="font-semibold">Schools</p>
        </div>
        <div className="feature-box">
          <p className="font-semibold">Medical Facilities</p>
        </div>
        <div className="feature-box">
          <p className="font-semibold">Industrial Plants</p>
        </div>
        <div className="feature-box">
          <p className="font-semibold">Oil & Gas Facilities</p>
        </div>
      </div>

      <div className="bg-brand-gold-light p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-3">PVC Roofing Warranties</h3>
        <p className="mb-4">
          We install PVC membranes from leading manufacturers with comprehensive warranties:
        </p>
        <ul className="space-y-2">
          <li><strong>Material Warranty:</strong> 20-30 years from manufacturer</li>
          <li><strong>Workmanship Warranty:</strong> 10 years from 5 Star Commercial Roofing</li>
          <li><strong>System Warranty:</strong> Full roof system coverage available</li>
          <li><strong>Hail Coverage:</strong> Optional hail warranty up to 2.5 inches</li>
        </ul>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Commercial Roofing Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/pvc-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">• PVC Roof Replacement</a>
          <a href="/pvc-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">• PVC Roof Repair</a>
          <a href="/commercial-roofing/" className="text-brand-gold hover:underline">• Commercial Roofing Services</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Get Your Free Roof Assessment Today</h2>
        <p className="cta-text">
          Serving Amarillo and the entire Texas Panhandle, plus Midland, Odessa, and surrounding West Texas communities. Most commercial insurance policies in Texas cover storm damage, and we work directly with all major insurance companies to ensure you receive the full coverage you deserve.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg">
            📞 Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary-hero border-2 border-white hover:bg-white hover:text-brand-brown text-lg">
            Request Free Inspection
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
