import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Repair Services in Amarillo TXService | 5 Star',
  description: 'Roof Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Repair",
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
      {"@type": "City", "name": "Canyon"},
      {"@type": "City", "name": "Bushland"}
    ],
    "description": "Professional roof repair services in Amarillo, Texas. Emergency leak repair, hail damage repair, shingle replacement, and storm damage restoration."
  };

  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Repair Services",
                      "url": "/roof-repair-services/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-repair-services-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero-small">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Repair Services in Amarillo, TX</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Fast, reliable roof repair for Amarillo homes and businesses. Emergency service available 24/7.</p>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="content-block">
            <h2 className="content-block-title">Expert Roof Repair in Amarillo & West Texas</h2>
            <p className="text-lg mb-4">
              When your <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo roof</a> develops a leak, loses shingles in a windstorm, or suffers <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage</a>, fast professional repair is critical to prevent further damage to your home or business. At 5 Star Commercial Roofing, we've been Amarillo's trusted roof repair specialists for over 25 years, handling everything from emergency leak repairs to comprehensive storm damage restoration.
            </p>
            <p className="text-lg mb-4">
              The Texas Panhandle's extreme weather—severe hailstorms, high winds, temperature swings from below zero to over 100°F—takes a toll on even the highest-quality roofing systems. Our team understands the specific challenges Amarillo roofs face and provides repairs that last. Whether you need <a href="/residential-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">residential roof repair</a> or commercial roofing services, we respond quickly and get the job done right.
            </p>
            <p className="text-lg mb-6">
              We handle all insurance paperwork for <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">hail and storm damage claims</a>, meet with adjusters on-site, and fight for the coverage you deserve. Most Amarillo homeowners pay only their insurance deductible for major repairs.
            </p>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Common Roof Repairs in Amarillo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💧 Leak Repair</h3>
                <p className="text-gray-600 mb-3">Water stains on ceilings, drips during rain, or moisture in the attic indicate roof leaks that need immediate attention. We locate the source using moisture detection equipment and make permanent repairs—not temporary patches.</p>
                <p className="text-sm font-semibold">Common Causes: Damaged flashing, missing shingles, worn valleys, failed sealants</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🌨️ Hail Damage Repair</h3>
                <p className="text-gray-600 mb-3">Baseball-sized hail common in Amarillo can crack shingles, knock off granules, and create bruising that leads to leaks. Our certified inspectors document all damage for insurance claims and restore your roof to pre-storm condition.</p>
                <p className="text-sm font-semibold">Timeline: Most repairs completed in 1-2 days after approval</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💨 Wind Damage Repair</h3>
                <p className="text-gray-600 mb-3">High winds blow off shingles, lift roof edges, and damage flashing. Wind damage often goes unnoticed until leaks develop. We inspect your entire roof after windstorms and replace all damaged materials.</p>
                <p className="text-sm font-semibold">Prevention: Proper installation with 6-nail pattern prevents most wind damage</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🔧 Flashing Repair</h3>
                <p className="text-gray-600 mb-3">Flashing around chimneys, vents, skylights, and valleys is the #1 source of roof leaks. We fabricate custom metal flashing and install it properly with appropriate underlayment and sealants.</p>
                <p className="text-sm font-semibold">Materials: Galvanized steel, aluminum, or copper flashing depending on application</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">📏 Valley Repair</h3>
                <p className="text-gray-600 mb-3">Roof valleys channel massive amounts of water and wear out faster than field shingles. Cracked or separated valley material causes major leaks. We replace worn valleys with premium materials rated for Texas weather.</p>
                <p className="text-sm font-semibold">Upgrade Option: Metal valleys last 50+ years vs. 20 years for shingle valleys</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🏚️ Shingle Replacement</h3>
                <p className="text-gray-600 mb-3">Missing, cracked, or curling shingles compromise your roof's protection. We replace damaged shingles matching your existing roof color and style. For extensive damage, full <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">replacement</a> may be more economical.</p>
                <p className="text-sm font-semibold">Coverage: Individual shingle replacement or full sections as needed</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-red-50 rounded-lg p-8 mb-12 border-l-4 border-red-600">
            <h2 className="text-2xl font-bold mb-4 text-red-800">🚨 Emergency Roof Repair (24/7)</h2>
            <p className="text-lg mb-4">
              When severe storms hit Amarillo or your roof develops sudden leaks, every minute counts. Water damage to interiors, insulation, and possessions can cost thousands of dollars—far more than the roof repair itself.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-bold mb-2">We Provide:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <div>24/7 emergency phone answering during storm season</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <div>2-hour response time for emergencies in Amarillo area</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <div>Emergency tarping to stop active leaks immediately</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <div>Temporary repairs to protect property until permanent fix</div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Common Emergencies:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Active roof leaks during rainstorms</li>
                  <li>• Wind damage with exposed roof deck</li>
                  <li>• Tree damage from fallen branches</li>
                  <li>• Hail damage after severe storms</li>
                  <li>• Commercial roof failures affecting operations</li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-6">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4 inline-block">📞 Call (806) 622-6041 for Emergency Service</a>
            </p>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Our Roof Repair Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Free Inspection & Diagnosis</h3>
                <p className="text-gray-600">We thoroughly inspect your roof to identify all damage—not just obvious problems. Using moisture meters and drone photography when needed, we find every issue. Detailed written estimate provided free.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Insurance Documentation</h3>
                <p className="text-gray-600">For storm damage, we photograph all issues, create detailed reports, and file your insurance claim. We meet with adjusters on-site to ensure all damage is properly documented and covered.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Professional Repair</h3>
                <p className="text-gray-600">Our experienced crews complete repairs using premium materials from GAF, Owens Corning, and CertainTeed. We match existing materials whenever possible and warranty all workmanship for 10 years.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Quality Inspection & Cleanup</h3>
                <p className="text-gray-600">Final inspection ensures all work meets our standards. Magnetic sweepers remove nails, all debris is hauled away, and your property is left cleaner than we found it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Serving Amarillo & Surrounding Areas</h2>
          <p className="text-lg mb-4">
            While Amarillo is our home base, we provide expert roof repair services throughout the Texas Panhandle:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing</a>
            <a href="/bushland-tx-roofing/" className="text-brand-gold hover:underline">• Bushland Roofing</a>
            <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Roofing</a>
            <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roofing</a>
            <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
            <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Need Roof Repair in Amarillo?</h2>
            <p className="cta-text mb-6">
              Free inspections for all Amarillo homeowners and businesses. Emergency service available 24/7. Insurance claims assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4 inline-block bg-white text-brand-brown hover:bg-gray-100">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4 border-2 border-white hover:bg-white hover:text-brand-brown">Request Free Inspection</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
