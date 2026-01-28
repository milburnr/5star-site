import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Inspections Amarillo TX | 5 Star Roofing',
  description: 'Roof Inspections in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Inspection",
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
    "description": "Free professional roof inspections in Amarillo, Texas. Storm damage assessment, hail damage detection, insurance documentation, and detailed inspection reports."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Inspections",
                      "url": "/roof-inspections/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-inspections-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Professional Roof Inspections in Amarillo</h1>
      </FadeIn>

      


      <div className="content-block">
        <h2 className="content-block-title">Comprehensive Roof Inspections for Texas Panhandle Homes</h2>
        <p className="text-lg">
          Given <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo's</a> position in the hail belt and exposure to severe weather, regular roof inspections aren't optional—they're essential. Most homeowners don't notice <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roof damage</a> until leaks appear inside, by which time significant (and expensive) interior damage has occurred.
        </p>
        <p className="text-lg mt-4">
          Our free roof inspections identify problems early, document <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage</a> for <a href="/contact/" className="text-brand-gold hover:underline">insurance claims</a>, and help you make informed decisions about <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">repairs or replacement</a>. We provide <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial</a> roof inspections throughout the Texas Panhandle.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Schedule a Roof Inspection</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="font-bold mb-3">🌩️ After Any Storm Event</h3>
            <p className="mb-2">Schedule within 48 hours of:</p>
            <ul className="space-y-1 text-sm">
              <li>• Hail (any size)</li>
              <li>• High winds (50+ mph)</li>
              <li>• Heavy rain or flooding</li>
              <li>• Tornado warnings in your area</li>
            </ul>
            <p className="mt-3 text-sm font-semibold text-brand-brown">Even if you see no obvious damage, hidden issues may exist</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="font-bold mb-3">📅 Routine Maintenance</h3>
            <p className="mb-2">Annual inspections recommended for:</p>
            <ul className="space-y-1 text-sm">
              <li>• Roofs 10+ years old</li>
              <li>• Before buying/selling a home</li>
              <li>• After winter (check for ice damage)</li>
              <li>• Before storm season (May-September)</li>
            </ul>
            <p className="mt-3 text-sm font-semibold text-brand-brown">Catch small problems before they become expensive</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Professional Inspection Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Exterior Roof Surface Inspection</h3>
            <p className="step-text">We walk every square foot of your roof, examining shingles, flashing, vents, and penetrations. Photos document all findings.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Attic Interior Inspection</h3>
            <p className="step-text">Check for water stains, damaged decking, inadequate ventilation, and insulation problems that affect roof performance.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Gutter and Drainage Assessment</h3>
            <p className="step-text">Clogged or damaged gutters accelerate roof deterioration. We check all drainage components.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Detailed Written Report</h3>
            <p className="step-text">You receive a comprehensive report with photos, damage locations, severity ratings, and repair/replacement recommendations.</p>
          </div>
        </div>
      </div>

      <div className="bg-brand-gold-light p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-3">What We Look For During Inspections:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Hail Damage Indicators:</h4>
            <ul className="text-sm space-y-1">
              <li>✓ Granule loss (dark spots)</li>
              <li>✓ Shingle bruising or fractures</li>
              <li>✓ Dented vents, flashing, gutters</li>
              <li>✓ Cracked or broken shingles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">General Wear Issues:</h4>
            <ul className="text-sm space-y-1">
              <li>✓ Missing or curling shingles</li>
              <li>✓ Cracked or deteriorated flashing</li>
              <li>✓ Damaged or missing ridge caps</li>
              <li>✓ Inadequate ventilation</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Insurance Claim Documentation</h2>
      <p className="mb-4">
        If our inspection finds storm damage, we provide insurance-ready documentation:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-8 ml-4">
        <li><strong>Photo Evidence:</strong> Close-up shots of every damaged area with measurements</li>
        <li><strong>Detailed Report:</strong> Written description of all damage in insurance-friendly language</li>
        <li><strong>Test Square Documentation:</strong> Standard format adjusters expect to see</li>
        <li><strong>Comparative Analysis:</strong> Before/after photos if you have them</li>
        <li><strong>Repair Estimate:</strong> Detailed scope of work and cost breakdown</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <h3 className="text-lg font-bold mb-2">⚠️ We Never Charge for Inspections</h3>
        <p className="mb-2">Unlike some companies, we never charge inspection fees—even if you don't proceed with repairs. Why?</p>
        <ul className="text-sm space-y-1 mt-3">
          <li>✓ You shouldn't pay to discover if you need our services</li>
          <li>✓ Inspections help homeowners make informed decisions</li>
          <li>✓ We're confident in our work—if repairs are needed, you'll choose us based on merit</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Drone Roof Inspections</h2>
      <p className="mb-4">
        For steep or dangerous roofs, we use drone technology to capture high-resolution photos and video without risking safety:
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="feature-box">
          <div className="feature-icon">📸</div>
          <h3 className="feature-title">4K Photo & Video</h3>
          <p className="feature-text">Crystal-clear documentation of all roof areas</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">🎯</div>
          <h3 className="feature-title">Hard-to-Reach Areas</h3>
          <p className="feature-text">Inspect steep slopes and high peaks safely</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">📊</div>
          <h3 className="feature-title">Insurance Preferred</h3>
          <p className="feature-text">Adjusters love detailed aerial documentation</p>
        </div>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Inspections</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Inspections</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Inspections</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Inspections</a>
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
