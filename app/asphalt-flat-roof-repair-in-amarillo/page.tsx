import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Flat Roof Repair Amarillo TX | BUR & Asphalt',
  description: 'Roof Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Asphalt Flat Roof Repair",
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
    "description": "Professional asphalt flat roof repair in Amarillo and West Texas. Built-up roofing (BUR) and modified bitumen repair services for commercial buildings."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Asphalt Flat Roof Repair",
                      "url": "/asphalt-flat-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/asphalt-flat-roof-repair-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-flat-roof-repair-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/asphalt-flat-roof-repair-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Asphalt Flat Roof Repair in Amarillo & West Texas</h1>
      </FadeIn>


      <div className="content-block">
        <h2 className="content-block-title">Professional Asphalt Flat Roof Repair Services</h2>
        <p className="text-lg">
          Asphalt-based flat roofing systems—including built-up roofing (BUR) and modified bitumen—are common on older <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial buildings</a> in <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">Odessa</a>, and throughout West Texas. While these systems are durable, they require proper maintenance and timely <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">repairs</a> to prevent leaks and extend their lifespan in our harsh climate where <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hailstorms</a> occur 6-12 times annually.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in repairing all types of asphalt flat roofing systems. Whether you have traditional tar-and-gravel built-up roofing or modern modified bitumen, our experienced team provides fast, reliable repairs that restore your roof's waterproof integrity. For severe damage, we also provide complete <a href="/commercial-roofing/" className="text-brand-gold hover:underline">commercial roof replacement</a> services.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Types of Asphalt Flat Roofing We Repair</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Built-Up Roofing (BUR)</h3>
            <p className="mb-3">
              Traditional "tar and gravel" roofs with multiple layers of asphalt-saturated felt alternating with hot tar. Common on buildings built 1950s-1990s. Very durable but requires specialized repair techniques.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>3-5 ply felt and asphalt layers</li>
              <li>Gravel or mineral cap sheet surface</li>
              <li>Heavy, durable construction</li>
              <li>20-30 year lifespan when maintained</li>
              <li>Excellent hail and fire resistance</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Modified Bitumen</h3>
            <p className="mb-3">
              Modern evolution of BUR using polymer-modified asphalt in factory-fabricated rolls. Easier to install and repair than traditional BUR. Popular for commercial buildings 1990s-present.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>SBS (rubber) or APP (plastic) modified</li>
              <li>Torch-applied or cold-adhesive installation</li>
              <li>Granulated or smooth surface</li>
              <li>15-25 year lifespan in Texas</li>
              <li>Good UV and weather resistance</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Asphalt Flat Roof Problems</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="check-item">
          <span className="check-icon text-2xl">🌡️</span>
          <div>
            <h3 className="font-bold mb-2">Thermal Splitting</h3>
            <p className="text-gray-600">Temperature cycling causes asphalt to expand/contract, creating cracks—common in West Texas with extreme temperature swings</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">💧</span>
          <div>
            <h3 className="font-bold mb-2">Blister Formation</h3>
            <p className="text-gray-600">Moisture trapped between layers creates bubbles that rupture, allowing water infiltration</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🌀</span>
          <div>
            <h3 className="font-bold mb-2">Hail Punctures</h3>
            <p className="text-gray-600">Baseball-sized hail can puncture asphalt membranes, especially in areas where gravel is sparse</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🏠</span>
          <div>
            <h3 className="font-bold mb-2">Flashing Failures</h3>
            <p className="text-gray-600">Metal flashing separates from membrane over time, creating leak points at parapets and penetrations</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🌊</span>
          <div>
            <h3 className="font-bold mb-2">Ponding Water</h3>
            <p className="text-gray-600">Poor drainage causes standing water that degrades asphalt and accelerates aging</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">☀️</span>
          <div>
            <h3 className="font-bold mb-2">UV Degradation</h3>
            <p className="text-gray-600">Intense West Texas sun breaks down exposed asphalt, causing brittleness and cracking</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Asphalt Flat Roof Repair Process</h2>
      <div className="space-y-3 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h5 className="step-title">Leak Detection & Assessment</h5>
            <p className="step-text">We use infrared moisture scanning to identify all wet areas—not just visible damage. This prevents callbacks by catching hidden problems.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h5 className="step-title">Remove Damaged Materials</h5>
            <p className="step-text">Cut out blistered, cracked, or punctured sections of membrane down to dry substrate. We remove all wet insulation to prevent mold and structural damage.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h5 className="step-title">Prepare Substrate</h5>
            <p className="step-text">Ensure roof deck and remaining membrane are clean, dry, and properly prepared for new materials. This is critical for adhesion.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h5 className="step-title">Install Repair Materials</h5>
            <p className="step-text">For BUR: Apply new layers of felt and hot asphalt. For modified bitumen: Torch-apply or cold-adhere new membrane. We match existing systems for seamless repair.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h5 className="step-title">Seal & Protect</h5>
            <p className="step-text">Apply flood coat of asphalt and replace gravel (for BUR) or granulated cap sheet (for modified bitumen). Proper surface protection extends repair life.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h5 className="step-title">Quality Inspection</h5>
            <p className="step-text">Final inspection ensures watertight integrity. We warranty all repairs and schedule follow-up inspections after next rainstorm.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Repair vs. Replace Your Asphalt Flat Roof</h2>
      <div className="card mb-8">
        <div className="card-body">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-gold mb-3">Repair Makes Sense:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Roof is less than 15 years old</li>
                <li>Damage is localized (under 20% of roof)</li>
                <li>No widespread blistering or cracking</li>
                <li>Substrate is dry and sound</li>
                <li>Budget requires short-term solution</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-gold mb-3">Replacement Makes Sense:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Roof is over 20 years old</li>
                <li>Multiple leak points across entire roof</li>
                <li>Widespread cracking or brittleness</li>
                <li>Wet insulation throughout</li>
                <li>Want to upgrade to modern materials (TPO/PVC)</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 font-semibold">
            We provide honest recommendations. If your roof can be repaired cost-effectively, we'll repair it. If replacement is more economical long-term, we'll explain why and provide detailed estimates.
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <h3 className="font-bold mb-3">⚠️ Don't Delay Asphalt Roof Repairs</h3>
        <p>
          Small leaks in asphalt roofing systems quickly become major problems. Water infiltration saturates insulation (adding thousands of pounds to roof load), promotes mold growth, and causes structural wood rot. A $2,000 repair today can prevent a $50,000 replacement next year.
        </p>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving West Texas</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Asphalt Repair</a>
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Flat Roofing</a>
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
