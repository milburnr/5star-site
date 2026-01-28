import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Snow & Ice Damage Roof Repair in Amarillo',
  description: 'Snow and ice damage roof emergency in Amarillo? We respond 24/7. Ice dam removal, freeze-thaw damage repair, and emergency tarping. Same-day inspections.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Snow and Ice Damage Roof Repair",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
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
    "description": "Professional snow and ice damage roof repair in Amarillo and Texas Panhandle. Ice dam removal, freeze-thaw damage repair, winter storm restoration."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Snow And Ice Damage",
                      "url": "/roof-snow-and-ice-damage/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-snow-and-ice-damage-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Roof Snow and Ice Damage Repair in Amarillo & the Texas Panhandle</h1>
      </FadeIn>


      <div className="content-block">
        <h2 className="content-block-title">Winter Storm Damage in the Texas Panhandle</h2>
        <p className="text-lg">
          While the <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a> is better known for <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail</a> and high winds, winter storms can cause severe <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roof damage</a>—especially during freeze-thaw cycles common in Amarillo, <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">Canyon</a>, and surrounding areas. When temperatures drop below freezing for days at a time (as happened during Winter Storm Uri in 2021), snow accumulation, ice dams, and rapid temperature changes can compromise even well-maintained roofs.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in identifying and repairing winter <a href="/roof-storm-damage-in-amarillo/" className="text-brand-gold hover:underline">storm damage</a> across the Texas Panhandle. From ice dam removal to freeze-thaw damage repair, we help homeowners and businesses recover from winter weather events and prevent future cold-weather problems. For severe damage, we also provide <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">complete roof replacement</a> services.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Types of Snow & Ice Damage</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Ice Dam Formation</h3>
            <p className="mb-3">
              When attic heat melts snow on the upper roof, water runs down and refreezes at the colder eaves, creating an ice dam. This dam traps water behind it, forcing it under shingles and into the home.
            </p>
            <p className="text-sm text-gray-600"><strong>Signs:</strong> Icicles along gutters, water stains on exterior walls, interior leaks near roof edges</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Freeze-Thaw Cycling</h3>
            <p className="mb-3">
              Amarillo experiences frequent temperature swings from below freezing at night to above freezing during the day. Water enters small roof gaps, freezes and expands, then thaws and penetrates deeper—gradually widening cracks.
            </p>
            <p className="text-sm text-gray-600"><strong>Signs:</strong> Cracked or lifted shingles, damaged flashing, separated roof seams</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Heavy Snow Load</h3>
            <p className="mb-3">
              While rare, heavy wet snow can accumulate on flat or low-slope commercial roofs. Snow weighs 10-20 pounds per cubic foot when wet, potentially exceeding roof load capacity on older structures.
            </p>
            <p className="text-sm text-gray-600"><strong>Signs:</strong> Sagging roof deck, cracking sounds, doors/windows that suddenly stick</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Gutter and Downspout Damage</h3>
            <p className="mb-3">
              Ice accumulation in gutters can weigh hundreds of pounds, tearing gutters away from the roofline and damaging fascia boards. Frozen downspouts prevent drainage, causing water backup.
            </p>
            <p className="text-sm text-gray-600"><strong>Signs:</strong> Sagging gutters, separated downspouts, ice formations on exterior walls</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Flashing Contraction</h3>
            <p className="mb-3">
              Metal flashing contracts in extreme cold, potentially pulling away from roof penetrations (chimneys, vents, skylights) and creating gaps where water can enter when snow melts.
            </p>
            <p className="text-sm text-gray-600"><strong>Signs:</strong> Gaps around chimneys/vents, lifted flashing edges, interior leaks near roof penetrations</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Condensation Damage</h3>
            <p className="mb-3">
              Poor attic ventilation combined with cold exterior temperatures causes warm indoor air to condense on cold roof decking, leading to moisture damage, mold growth, and wood rot.
            </p>
            <p className="text-sm text-gray-600"><strong>Signs:</strong> Frost on attic rafters, musty odors, water stains on attic decking</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Winter Storm Uri: A Case Study</h2>
      <div className="card mb-8">
        <div className="card-body">
          <p className="mb-4">
            In February 2021, Winter Storm Uri brought unprecedented cold and snow to the Texas Panhandle, with temperatures plunging to -20°F in Amarillo and sustained below-freezing conditions for over a week. The storm caused widespread roof damage across the region:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Ice dam formation on thousands of homes due to inadequate attic insulation</li>
            <li>Burst pipes in attics causing water damage to ceilings and roofs</li>
            <li>Freeze-thaw damage to flashing and shingles as temperatures fluctuated</li>
            <li>Commercial flat roof collapses from excessive snow accumulation</li>
            <li>Condensation damage from poor ventilation during extended cold period</li>
          </ul>
          <p className="font-semibold">
            Many homeowners didn't discover roof damage until spring thaw revealed leaks and structural issues. That's why post-winter roof inspections are critical in the Texas Panhandle.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Winter Damage Repair Process</h2>
      <div className="space-y-3 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h5 className="step-title">Emergency Ice Dam Removal</h5>
            <p className="step-text">Safe removal of ice dams using specialized equipment—never hammers or picks that can damage shingles. We create drainage channels to relieve water backup.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h5 className="step-title">Interior Damage Assessment</h5>
            <p className="step-text">Inspect attic and interior spaces for water damage, insulation saturation, and structural issues caused by leaks or condensation.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h5 className="step-title">Exterior Roof Inspection</h5>
            <p className="step-text">Complete evaluation of shingles, flashing, vents, and roof deck for freeze-thaw damage, ice dam damage, and structural integrity issues.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h5 className="step-title">Ventilation & Insulation Evaluation</h5>
            <p className="step-text">Assess attic ventilation and insulation to identify the root cause of ice dam formation and prevent future winter damage.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h5 className="step-title">Permanent Repairs & Prevention</h5>
            <p className="step-text">Fix all winter storm damage and implement preventive measures including improved ventilation, additional insulation, and ice/water shield installation at eaves.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Preventing Winter Roof Damage</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="check-item">
          <span className="check-icon text-2xl">🌡️</span>
          <div>
            <h3 className="font-bold mb-2">Proper Attic Insulation</h3>
            <p className="text-gray-600">Maintain R-38 to R-49 insulation in Texas Panhandle attics to prevent heat loss that causes ice dams</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">💨</span>
          <div>
            <h3 className="font-bold mb-2">Adequate Ventilation</h3>
            <p className="text-gray-600">Ridge and soffit vents keep attic temperature close to outdoor temperature, preventing snow melt on upper roof</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🛡️</span>
          <div>
            <h3 className="font-bold mb-2">Ice & Water Shield</h3>
            <p className="text-gray-600">Install ice/water barrier at eaves (first 3-6 feet) to prevent water intrusion from ice dams</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🔥</span>
          <div>
            <h3 className="font-bold mb-2">Heat Cables (Commercial)</h3>
            <p className="text-gray-600">For flat commercial roofs, consider heat cables along valleys and drains to prevent ice buildup</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="font-bold mb-3">❄️ Post-Winter Roof Inspection</h3>
        <p>After severe winter weather in the Texas Panhandle, schedule a professional <a href="/roof-inspections-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">roof inspection</a> even if you don't see obvious damage. Freeze-thaw cycling and ice dam damage may not become apparent until spring rains reveal compromised areas.</p>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle</h2>
        <p className="text-lg mb-4">
          Winter storm damage services for <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial</a> properties:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Winter Damage</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Ice Damage</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Snow Damage</a>
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
