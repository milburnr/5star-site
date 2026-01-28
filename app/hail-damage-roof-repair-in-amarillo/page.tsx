import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair in Amarillo | 5 Star',
  description: 'Hail Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hail Damage Roof Repair",
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
    "description": "Professional hail damage roof repair services in Amarillo, Texas. Free inspections, insurance claim assistance, and Class 4 impact-resistant shingle installation."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Hail Damage Roof Repair",
                      "url": "/hail-damage-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/hail-damage-roof-repair-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Hail Damage Roof Repair in Amarillo, TX</h1>
      </FadeIn>

      <img
        alt="Severe hail damage on Amarillo TX roof - Granule loss and shingle damage - Insurance claim documentation - 5 Star Commercial Roofing"
        className="w-full h-96 object-cover rounded-lg mb-8"
      />


      <div className="content-block">
        <h2 className="content-block-title">Amarillo's Hail Damage Roofing Specialists</h2>
        <p className="text-lg">
          The <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a> sits in America's hail belt, experiencing an average of 8-12 severe hailstorms per year. If you're reading this after a storm, you're not alone—thousands of Amarillo homeowners deal with <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage</a> annually. The good news? Most homeowners insurance policies in the Texas Panhandle cover hail damage. We work directly with all major insurance companies to maximize your coverage, and we handle the entire process for you. For severe damage requiring complete replacement, we provide comprehensive <a href="/hail-damage-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement services</a>.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Signs Your Roof Has Hail Damage</h2>
      <p className="mb-4">Hail damage isn't always obvious from the ground. Here's what our inspectors look for:</p>

      {/* Visual Damage Examples */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Hail damage granule loss on Amarillo roof - Dark spots indicating shingle damage - 5 Star Commercial Roofing"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">Granule Loss</h3>
            <p className="text-sm text-gray-600">Dark spots or circles where protective granules have been knocked off by hail impact.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Hail damage bruising on asphalt shingles - Compression damage inspection - 5 Star Commercial Roofing"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">Shingle Bruising</h3>
            <p className="text-sm text-gray-600">Soft spots and indentations from hail strikes that compromise the shingle's integrity.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Cracked and broken shingles from hail damage - Texas Panhandle storm damage - 5 Star Commercial Roofing"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">Cracked Shingles</h3>
            <p className="text-sm text-gray-600">Large hailstones can crack or break shingles completely, requiring immediate replacement.</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card-body bg-white rounded shadow">
          <h3 className="font-bold mb-3">Asphalt Shingle Damage</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Missing granules (dark spots or circles)</li>
            <li>✓ Dented or cracked shingles</li>
            <li>✓ Bruising on shingle surface</li>
            <li>✓ Exposed fiberglass mat</li>
            <li>✓ Cracked or broken shingles</li>
          </ul>
        </div>
        <div className="card-body bg-white rounded shadow">
          <h3 className="font-bold mb-3">Other Roof Damage</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Dented metal vents, flashing, or gutters</li>
            <li>✓ Cracked or broken roof vents</li>
            <li>✓ Damaged chimney caps</li>
            <li>✓ Dents in AC units or skylights</li>
            <li>✓ Granules in gutters and downspouts</li>
          </ul>
        </div>
      </div>

      {/* Hail Size Comparison */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <div className="flex gap-6 items-center">
          <img
            alt="Hail size comparison chart - Amarillo Texas typical hailstorm sizes - 5 Star Commercial Roofing"
            className="w-48 h-48 object-contain rounded"
          />
          <div>
            <h3 className="font-bold text-lg mb-2">🌨️ Amarillo Hail Sizes</h3>
            <p className="mb-2">The Texas Panhandle experiences hail ranging from pea-size to softball-size:</p>
            <ul className="space-y-1 text-sm">
              <li><strong>¾" (Pea)</strong> - Minor damage possible</li>
              <li><strong>1" (Quarter)</strong> - Granule loss begins</li>
              <li><strong>1¾" (Golf Ball)</strong> - Significant damage likely</li>
              <li><strong>2" (Hen Egg)</strong> - Severe damage guaranteed</li>
              <li><strong>2¾"+ (Baseball)</strong> - Catastrophic roof damage</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Hail Damage Repair Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Free Inspection Within 24-48 Hours</h3>
            <p className="step-text">We document all damage with photos and detailed measurements. You'll receive a comprehensive report showing exactly what the insurance adjuster will see.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Insurance Claim Filing</h3>
            <p className="step-text">We help you file your claim and provide all documentation. Our reports are accepted by every major insurance company operating in Texas.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Adjuster Meeting</h3>
            <p className="step-text">We meet with your insurance adjuster on-site to ensure all damage is documented. We know exactly what adjusters look for and won't let anything be missed.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Approval & Scheduling</h3>
            <p className="step-text">Once your claim is approved, we schedule your roof replacement at your convenience. Most Amarillo homes can be completed in 1-2 days.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">Professional Installation</h3>
            <p className="step-text">We install <a href="/asphalt-roofing-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Class 4 impact-resistant shingles</a> or <a href="/roofing-methods/" className="text-brand-brown hover:text-brand-gold underline">standing seam metal</a>—whichever you choose. All work includes comprehensive warranties.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <h3 className="text-xl font-bold mb-3">⚠️ Don't Wait to File Your Claim</h3>
        <p className="mb-2">Texas law requires insurance companies to accept hail damage claims within a reasonable timeframe, but waiting too long can complicate your claim. Most policies require claims within 1 year of the storm.</p>
        <p className="font-semibold text-brand-brown">Call us today for a free inspection: (806) 622-6041</p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Upgrade to Impact-Resistant Shingles?</h2>
      <p className="mb-4">After hail damage, you have an opportunity to upgrade to Class 4 impact-resistant shingles—often at no additional cost through your insurance claim.</p>

      {/* Impact-Resistant Shingle Diagram */}
      <div className="mb-8">
        <img
          alt="Class 4 impact-resistant shingle cross-section diagram - UL 2218 construction layers explained - 5 Star Commercial Roofing"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />
        <p className="text-center text-sm text-gray-600 mt-2">Cross-section showing reinforced impact-resistant layer that protects against hail damage</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="feature-box">
          <div className="feature-icon">🛡️</div>
          <h3 className="feature-title">UL 2218 Class 4 Rating</h3>
          <p className="feature-text">Tested to withstand 2-inch hail—the most common size in Amarillo storms</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">💰</div>
          <h3 className="feature-title">Insurance Discounts</h3>
          <p className="feature-text">Save 10-30% on annual premiums with impact-resistant shingles</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">📅</div>
          <h3 className="feature-title">Extended Warranties</h3>
          <p className="feature-text">50-year warranties available on premium impact-resistant shingles</p>
        </div>
      </div>

      {/* Before/After Hail Damage Repair */}
      <h2 className="text-2xl font-bold mt-12 mb-6">Real Amarillo Hail Damage Repairs</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 bg-gray-200">
            {/* TODO: Replace with before/after slider component */}
            <img
              alt="Amarillo home roof before hail damage repair - Insurance claim documentation - 5 Star Commercial Roofing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">Severe Hail Damage - Golf Ball Size</h3>
            <p className="text-sm text-gray-600">Complete roof replacement with Class 4 shingles after May 2024 hailstorm.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 bg-gray-200">
            <img
              alt="Amarillo commercial building before hail damage repair - Insurance claim assessment - 5 Star Commercial Roofing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">Commercial Hail Damage - Downtown Amarillo</h3>
            <p className="text-sm text-gray-600">25,000 sq ft TPO membrane replacement after April 2024 hailstorm.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">What Does Insurance Cover?</h2>
      <p className="mb-4">Typical hail damage claims in Amarillo cover:</p>
      <ul className="list-disc list-inside space-y-2 mb-8 ml-4">
        <li>Complete roof replacement (shingles, underlayment, starter strips)</li>
        <li>Damaged roof vents, boots, and flashing</li>
        <li>Damaged gutters and downspouts</li>
        <li>Soffit and fascia damage</li>
        <li>Damaged window screens</li>
        <li>AC unit covers and outdoor equipment</li>
        <li>Fence and siding damage (if applicable)</li>
      </ul>
    

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Amarillo & West Texas</h2>
        <p className="text-lg mb-4">
          We provide <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing</a> services throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Roofing</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roofing</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Expert Roofing Service in Amarillo?</h2>
        <p className="cta-text">
          Free inspections, insurance claim assistance, and professional installation. Serving the Texas Panhandle for over 10 years.
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
