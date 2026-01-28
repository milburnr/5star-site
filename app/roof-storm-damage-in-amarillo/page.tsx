import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Storm Damage Roof Repair in Amarillo | 5 Star',
  description: 'Storm Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Storm Damage Roof Repair",
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
    "description": "Professional storm damage roof repair in Amarillo, Texas. Hail, wind, and rain damage restoration. Insurance claim assistance and emergency repairs."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Storm Damage",
                      "url": "/roof-storm-damage/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-storm-damage-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Roof Storm Damage Repair in Amarillo, TX</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Expert Storm Damage Restoration for Amarillo Roofs</h2>
        <p className="text-lg">
          The <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a> experiences some of the nation's most severe weather—from baseball-sized <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail</a> to sustained winds over 70 mph, heavy rain, and even tornadoes. At 5 Star Commercial Roofing, we specialize in comprehensive storm damage assessment, <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">emergency repairs</a>, and insurance claim assistance for both <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial</a> properties throughout Amarillo.
        </p>
        <p className="text-lg mt-4">
          After every major storm, our phones ring constantly from homeowners discovering roof damage. Most insurance policies in the Texas Panhandle cover storm damage—and we handle all paperwork, meet with adjusters, and ensure you receive full coverage. For severe damage, complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a> may be covered at only the cost of your deductible.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Types of Storm Damage We Repair</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🌨️ Hail Damage</h3>
            <p className="text-gray-600 mb-3">
              Amarillo averages 8-12 hailstorms per year, with some producing baseball to softball-sized hail. Hail causes granule loss, bruising, cracked shingles, and damaged flashing.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Shingle granule loss and bruising</li>
              <li>✓ Cracked or punctured shingles</li>
              <li>✓ Dented metal vents and flashing</li>
              <li>✓ Damaged gutters and downspouts</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">💨 Wind Damage</h3>
            <p className="text-gray-600 mb-3">
              Sustained winds of 50+ mph and microbursts can rip off shingles, lift roof edges, and damage flashing. Wind often causes progressive damage that worsens over time.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Missing or blown-off shingles</li>
              <li>✓ Lifted shingle edges and tabs</li>
              <li>✓ Damaged or displaced flashing</li>
              <li>✓ Debris impact damage</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">☔ Heavy Rain Damage</h3>
            <p className="text-gray-600 mb-3">
              Flash flooding and sustained heavy rain can overwhelm drainage systems, create leaks through compromised areas, and cause water damage to roof decking and interiors.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Active leaks and water intrusion</li>
              <li>✓ Saturated insulation</li>
              <li>✓ Interior ceiling damage</li>
              <li>✓ Overwhelmed drainage systems</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🌪️ Tornado & Severe Wind</h3>
            <p className="text-gray-600 mb-3">
              Tornado touchdowns and downbursts can cause catastrophic damage including complete roof loss, structural damage, and extensive debris impacts requiring emergency repairs.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Extensive shingle loss</li>
              <li>✓ Structural roof deck damage</li>
              <li>✓ Tree and debris impacts</li>
              <li>✓ Complete roof system failure</li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-red-800">🚨 24/7 Emergency Storm Damage Service</h3>
        <p className="mb-4">
          When severe storms hit Amarillo, we provide emergency response to prevent further damage to your home or business. Our emergency services include:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>Emergency tarping for active leaks</div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>24/7 phone answering during storms</div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>2-hour response time in Amarillo area</div>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>Temporary repairs to secure property</div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>Board-up services for exposed areas</div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>Debris removal and cleanup</div>
            </li>
          </ul>
        </div>
        <p className="text-center font-bold mt-4">
          <a href="tel:8066226041" className="text-red-800 hover:underline">Call (806) 622-6041 Now for Emergency Service</a>
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Storm Damage Assessment Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Free Storm Damage Inspection</h3>
            <p className="step-text">Complete roof inspection with drone photography and detailed damage documentation. We create comprehensive reports accepted by all major insurance companies.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Insurance Claim Filing</h3>
            <p className="step-text">We handle all insurance paperwork, file your claim, and provide detailed damage reports with photos and measurements.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Adjuster Meeting</h3>
            <p className="step-text">We meet with your insurance adjuster on-site to ensure all damage is properly documented and covered. We fight for the maximum coverage you deserve.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Professional Repair or Replacement</h3>
            <p className="step-text">Once approved, we complete all repairs or full replacement using premium materials. Most Amarillo homeowners pay only their insurance deductible.</p>
          </div>
        </div>
      </div>

      <div className="bg-brand-gold-light p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-3">⏰ Don't Wait to File Your Claim</h3>
        <p className="mb-2">
          Texas insurance policies typically require storm damage claims within 1 year of the event. However, waiting too long can complicate your claim as damage worsens and it becomes harder to prove the original storm caused it.
        </p>
        <p className="font-semibold">
          Schedule your free inspection within 48 hours of any major storm for best results with insurance claims.
        </p>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Amarillo & Texas Panhandle</h2>
        <p className="text-lg mb-4">
          Emergency storm damage services available throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Storm Damage</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Storm Damage</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Storm Damage</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Storm Damage</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Storm Damage Repair in Amarillo?</h2>
        <p className="cta-text">
          Free storm damage inspections and insurance claim assistance. 24/7 emergency service available during severe weather.
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
