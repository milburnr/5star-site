import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Asphalt Roofing Amarillo TX | 5 Star Roofing',
  description: 'asphalt shingle installation in Amarillo, Midland, Odessa. Class 4 impact-resistant shingles for hail protection. Free inspections available.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Asphalt Shingle Roofing",
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
    "description": "Professional asphalt shingle roofing installation in Amarillo and West Texas. Class 4 impact-resistant shingles for maximum hail protection."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Asphalt Roofing",
                      "url": "/asphalt-roofing/"
              },
              {
                      "name": "Amarillo",
                      "url": "/asphalt-roofing-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-roofing-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Asphalt Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/asphalt-roofing-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert asphalt roofing services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Asphalt Shingle Roofing in Amarillo & West Texas</h1>
      </FadeIn>

      {/* Hero Image */}
      <img
        alt="Class 4 impact-resistant asphalt shingles for Amarillo Texas - Architectural and premium roofing shingles display - 5 Star Commercial Roofing"
        className="w-full h-96 object-cover rounded-lg mb-8"
      />

      <div className="content-block">
        <h2 className="content-block-title">Asphalt Shingles: The Texas Panhandle Standard</h2>
        <p className="text-lg">
          Asphalt shingles are the most popular roofing material in <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">Odessa</a>, and throughout West Texas—and for good reason. Modern impact-resistant asphalt shingles offer the best combination of <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail protection</a>, affordability, and proven performance in our extreme climate. With 8-12 hailstorms per year, choosing the right asphalt shingle system isn't just about aesthetics—it's about survival.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in Class 4 impact-resistant asphalt shingle installations designed specifically for the Texas Panhandle and West Texas weather. Our shingles come with manufacturer warranties up to 50 years and qualify for significant insurance premium discounts.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Types of Asphalt Shingles for West Texas</h2>

      {/* Technical Diagram */}
      <div className="mb-8">
        <img
          alt="Class 4 impact-resistant shingle cross-section diagram - UL 2218 construction layers explained - 5 Star Commercial Roofing"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
        />
        <p className="text-center text-sm text-gray-600 mt-2">Cross-section of Class 4 impact-resistant shingle showing reinforced layers for hail protection</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <img
            alt="Class 4 impact-resistant asphalt shingles installed on Amarillo home - Hail-resistant roofing system - 5 Star Commercial Roofing"
            className="card-image"
          />
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Class 4 Impact-Resistant Shingles</h3>
            <p className="mb-3">
              These are the gold standard for hail-prone areas like Amarillo, Midland, and Odessa. Class 4 shingles are tested to withstand 2-inch steel balls dropped from 20 feet—simulating baseball-sized hail impacts. They feature reinforced construction with modified asphalt formulations and impact-resistant granules.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>UL 2218 Class 4 impact rating</li>
              <li>10-30% insurance premium discounts</li>
              <li>30-50 year manufacturer warranties</li>
              <li>Superior hail and wind resistance (130+ mph)</li>
              <li>Enhanced UV protection for Texas sun</li>
            </ul>
            <p className="text-sm font-semibold">Best For: All homes in Texas Panhandle and West Texas</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Architectural (Dimensional) Shingles</h3>
            <p className="mb-3">
              Also called laminate shingles, these feature multiple layers of material for increased thickness and durability. They're heavier than 3-tab shingles and offer better wind resistance—critical for West Texas where sustained winds average 12-14 mph.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Two or three layers of material</li>
              <li>Enhanced dimensional appearance</li>
              <li>Better wind resistance than 3-tab</li>
              <li>20-30 year lifespan in Texas climate</li>
              <li>Available in Class 4 impact-resistant versions</li>
            </ul>
            <p className="text-sm font-semibold">Best For: Homeowners seeking enhanced curb appeal with durability</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">3-Tab Shingles</h3>
            <p className="mb-3">
              Traditional single-layer shingles with uniform appearance. While less expensive upfront, they're NOT recommended for Amarillo, Midland, or Odessa due to inferior hail and wind resistance. Most insurance companies no longer offer full coverage for 3-tab shingles in hail-prone areas.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Lowest cost option</li>
              <li>Flat, uniform appearance</li>
              <li>15-20 year lifespan in Texas</li>
              <li>Minimal hail resistance</li>
              <li>Higher replacement frequency</li>
            </ul>
            <p className="text-sm font-semibold text-red-600">⚠️ NOT Recommended: Poor performance in West Texas hailstorms</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Luxury/Designer Shingles</h3>
            <p className="mb-3">
              High-end architectural shingles that mimic the appearance of slate, wood shake, or premium materials. Available in Class 4 impact-resistant formulations, these offer maximum curb appeal combined with superior hail protection for luxury homes in West Texas.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Premium aesthetic appearance</li>
              <li>Extra-thick construction</li>
              <li>Highest wind ratings (150+ mph)</li>
              <li>50-year limited warranties</li>
              <li>Class 4 impact resistance available</li>
            </ul>
            <p className="text-sm font-semibold">Best For: High-value homes requiring maximum protection and aesthetics</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Asphalt Shingle Installation Process</h2>
      <div className="space-y-3 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h5 className="step-title">Roof Deck Inspection & Repair</h5>
            <p className="step-text">We inspect all plywood/OSB decking for rot, moisture damage, or structural issues. Any compromised decking is replaced before new shingles are installed—critical for long-term performance.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h5 className="step-title">Synthetic Underlayment Installation</h5>
            <p className="step-text">We use synthetic underlayment (not felt paper) that won't tear in West Texas winds and provides superior waterproofing. This is your roof's first line of defense.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h5 className="step-title">Ice & Water Shield at Critical Areas</h5>
            <p className="step-text">Self-sealing ice/water barrier installed along eaves, valleys, and roof penetrations to prevent water intrusion in vulnerable areas.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h5 className="step-title">Drip Edge Installation</h5>
            <p className="step-text">Metal drip edge along eaves and rakes directs water into gutters and protects fascia boards from moisture damage.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h5 className="step-title">6-Nail Shingle Installation</h5>
            <p className="step-text">We exceed code requirements by using 6 nails per shingle (not 4) for maximum wind resistance. Each nail is driven to proper depth—not overdriven, which weakens shingles.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h5 className="step-title">Ridge Vent Installation</h5>
            <p className="step-text">Continuous ridge vent along entire peak allows hot air to escape from attic. Combined with soffit vents, this creates proper airflow that extends shingle life by reducing attic temperatures.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">7</div>
          <div className="step-content">
            <h5 className="step-title">Flashing & Penetration Sealing</h5>
            <p className="step-text">Metal flashing around chimneys, vents, and skylights prevents water intrusion. We use high-quality sealants rated for extreme Texas temperature swings.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">8</div>
          <div className="step-content">
            <h5 className="step-title">Final Inspection & Cleanup</h5>
            <p className="step-text">Complete magnetic sweep of property to remove all nails, thorough cleanup, and final walkthrough to ensure you're 100% satisfied.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Asphalt Shingles Excel in West Texas</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="feature-box">
          <h3 className="font-bold mb-2">💰 Affordability</h3>
          <p className="text-sm">Lowest cost per square foot of quality roofing material—important when replacing hail-damaged roofs</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">⚡ Fast Installation</h3>
          <p className="text-sm">Most residential roofs completed in 1-2 days, minimizing disruption to your home</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">🛡️ Hail Protection</h3>
          <p className="text-sm">Class 4 impact-resistant versions withstand baseball-sized hail common in Texas Panhandle</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">💨 Wind Resistance</h3>
          <p className="text-sm">Modern shingles rated for 130+ mph winds—critical for West Texas wind events</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">🎨 Color Selection</h3>
          <p className="text-sm">Dozens of colors and styles to match any home aesthetic</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">🔧 Easy Repairs</h3>
          <p className="text-sm">Individual damaged shingles can be replaced without full roof replacement</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">📜 Proven Track Record</h3>
          <p className="text-sm">Decades of performance data in Texas climate—known quantity for homeowners</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">💵 Insurance Friendly</h3>
          <p className="text-sm">Class 4 shingles qualify for 10-30% premium discounts from most insurers</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">♻️ Recyclable</h3>
          <p className="text-sm">Old asphalt shingles can be recycled into paving materials</p>
        </div>
      </div>

      <div className="bg-brand-gold-light p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-3">Insurance Savings with Class 4 Shingles</h3>
        <p className="mb-4">
          Most insurance companies in Texas offer significant premium discounts for homes with Class 4 impact-resistant shingles:
        </p>
        <ul className="space-y-2">
          <li><strong>State Farm:</strong> Up to 25% discount</li>
          <li><strong>Allstate:</strong> Up to 30% discount</li>
          <li><strong>USAA:</strong> Up to 20% discount</li>
          <li><strong>Farmers:</strong> Up to 15% discount</li>
        </ul>
        <p className="mt-4 font-semibold">
          On a $2,000/year insurance policy, a 20% discount saves you $400 annually—$4,000 over 10 years. The premium for Class 4 shingles pays for itself through insurance savings alone!
        </p>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Roofing Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/residential-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">• Residential Roof Replacement</a>
          <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">• Residential Roofing Services</a>
          <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">• Commercial Roofing</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Get Your Free Roof Assessment Today</h2>
        <p className="cta-text">
          Serving Amarillo and the entire Texas Panhandle, plus Midland, Odessa, and surrounding West Texas communities. Most homeowners insurance policies in Texas cover storm damage, and we work directly with all major insurance companies to ensure you receive the full coverage you deserve.
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
