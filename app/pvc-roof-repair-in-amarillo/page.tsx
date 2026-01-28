import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'PVC Roof Repair Amarillo TX | 5 Star Roofing',
  description: 'Roof Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "PVC Roof Repair",
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
    "description": "Professional PVC membrane roof repair in Amarillo and West Texas. Emergency service available 24/7 for commercial buildings."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Pvc Roof Repair",
                      "url": "/pvc-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/pvc-roof-repair-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">PVC Roof Repair in Amarillo, Midland & West Texas</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Fast, Professional PVC Membrane Repair</h2>
        <p className="text-lg">
          PVC roofing systems are extremely durable, but even the best <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofs</a> can suffer damage from hailstorms, wind, or aging. When your PVC roof develops leaks or damage in <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">Odessa</a>, or surrounding areas, fast professional repair is critical to prevent interior damage to your building and inventory.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in PVC membrane repair using the same heat-welding technology used for new installations. Our repairs are permanent and watertight—not temporary patches that fail after the next storm.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common PVC Roof Problems in West Texas</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Hail Punctures</h3>
            <p className="mb-3">
              While PVC is highly hail-resistant, severe storms with baseball-sized <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail (common in West Texas)</a> can puncture membranes—especially if hail strikes edge details, seams, or areas over fasteners.
            </p>
            <p className="text-sm font-semibold text-gray-600">Repair Method: Heat-welded patch over damaged area</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Seam Separation</h3>
            <p className="mb-3">
              Poor initial installation or aging can cause heat-welded seams to separate. This is rare with properly installed PVC but can occur in roofs over 20 years old or with low-quality workmanship.
            </p>
            <p className="text-sm font-semibold text-gray-600">Repair Method: Re-weld separated seams or install cover strip</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Fastener Blow-Off</h3>
            <p className="mb-3">
              In mechanically-attached systems, high winds (common in Amarillo) can pull fasteners through the membrane, creating punctures. This typically occurs along roof edges and corners where wind uplift is strongest.
            </p>
            <p className="text-sm font-semibold text-gray-600">Repair Method: Replace fasteners with larger plates, patch membrane</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Shrinkage & Pulling</h3>
            <p className="mb-3">
              Older PVC membranes can shrink slightly over time, pulling away from flashing and creating gaps. Extreme temperature cycling in West Texas accelerates this process.
            </p>
            <p className="text-sm font-semibold text-gray-600">Repair Method: Install expansion strips or replace shrunk sections</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Flashing Failures</h3>
            <p className="mb-3">
              Flashing around HVAC units, drains, and parapet walls experiences more stress than field membrane. Failed flashing is the #1 source of leaks in otherwise healthy PVC roofs.
            </p>
            <p className="text-sm font-semibold text-gray-600">Repair Method: Fabricate and heat-weld new flashing details</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Ponding Water Damage</h3>
            <p className="mb-3">
              Poor drainage causes water to pond on flat roofs. While PVC resists ponding better than other materials, prolonged exposure (48+ hours) can degrade seams and accelerate aging.
            </p>
            <p className="text-sm font-semibold text-gray-600">Repair Method: Fix drainage issues, inspect/repair affected areas</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our PVC Repair Process</h2>
      <div className="space-y-3 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h5 className="step-title">Emergency Response (24/7)</h5>
            <p className="step-text">For active leaks, we provide same-day emergency tarping and temporary repairs to protect your building and inventory while permanent repairs are scheduled.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h5 className="step-title">Complete Roof Inspection</h5>
            <p className="step-text">We inspect the entire roof system—not just the visible damage. Our team uses moisture scans and seam probing to identify all problem areas, preventing future callbacks.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h5 className="step-title">Damage Documentation</h5>
            <p className="step-text">Drone photography and detailed reports document all damage for your insurance company. We work directly with adjusters to ensure full coverage.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h5 className="step-title">Professional Repair</h5>
            <p className="step-text">Using hot-air welding equipment, we make permanent repairs that are as strong as the original installation. All patches are heat-welded—never glued or taped.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h5 className="step-title">Quality Testing</h5>
            <p className="step-text">Every repair is tested with electronic or probe testing to verify watertight integrity before we leave your facility.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <h3 className="font-bold mb-3">🚨 Emergency PVC Roof Repair</h3>
        <p className="mb-4">
          Active roof leaks can cause tens of thousands of dollars in interior damage within hours. Don't wait—call for emergency service:
        </p>
        <ul className="space-y-2">
          <li><strong>24/7 Availability:</strong> We answer phones day and night during storm season</li>
          <li><strong>2-Hour Response:</strong> Emergency crews dispatched immediately in Amarillo area</li>
          <li><strong>Same-Day Tarping:</strong> Temporary protection while permanent repairs are scheduled</li>
          <li><strong>Insurance Documentation:</strong> We handle all paperwork for your claim</li>
        </ul>
        <p className="mt-4 text-center">
          <a href="tel:8066226041" className="btn-primary-hero inline-block">📞 Call (806) 622-6041 Now</a>
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Repair vs. Replace: When to Choose Each</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="font-bold text-brand-gold mb-3">Repair Makes Sense When:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Roof is less than 15 years old</li>
              <li>Damage is localized (&lt; 25% of roof area)</li>
              <li>Overall membrane is in good condition</li>
              <li>Budget is limited</li>
              <li>Damage is from sudden storm event (insurance pays)</li>
              <li>You need quick turnaround (1-2 days)</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="font-bold text-brand-gold mb-3">Replacement Makes Sense When:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Roof is over 20 years old</li>
              <li>Multiple repairs needed across entire roof</li>
              <li>Membrane shows widespread aging/shrinkage</li>
              <li>Insurance will cover full replacement</li>
              <li>You want to upgrade to newer technology</li>
              <li>Energy efficiency is a priority</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mb-8 font-semibold">
        Our team provides honest assessments—if your roof can be repaired, we'll repair it. If replacement is more cost-effective long-term, we'll explain why and provide detailed estimates for both options.
      </p>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Related PVC Roofing Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/pvc-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">• PVC Roof Replacement</a>
          <a href="/pvc-roofing-contractors-in-amarillo/" className="text-brand-gold hover:underline">• PVC Roofing Contractors</a>
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
