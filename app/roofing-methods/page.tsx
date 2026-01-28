import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'Roofing Methods & Installation in Amarillo| Hail-Resistan...',
  description: 'Modern roofing methods for Texas Panhandle homes and businesses. Impact-resistant shingles, standing seam metal, TPO systems. hail damage prevention.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roofing Installation Methods",
    "provider": {
      "@type": "RoofingContractor",
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
    "description": "Advanced roofing installation methods for Texas Panhandle climate. Impact-resistant shingles, metal roofing, TPO/PVC membranes, and proper ventilation systems."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roofing Methods",
                      "url": "/roofing-methods/"
              }
      ]} />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Advanced Roofing Methods for the Texas Panhandle</h1>
      </FadeIn>


      <div className="content-block">
        <h2 className="content-block-title">Roofing Technology Built for Amarillo's Extreme Weather</h2>
        <p className="text-lg">
          Not all roofing methods are created equal—especially in the <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a>. The region sits in America's hail belt, experiencing an average of <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">8-12 hailstorms per year</a>, combined with extreme temperature swings, intense UV exposure, and severe weather including hail, high winds, and occasional ice storms, means your roof needs to be engineered for survival, not just aesthetics.
        </p>
        <p className="text-lg mt-4">
          At <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">5 Star Commercial Roofing</a>, we specialize in modern roofing methods specifically designed for Amarillo's challenging climate, with a focus on hail resistance and long-term durability for both <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial properties</a>.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Impact-Resistant Asphalt Shingle Installation</h2>
      <div className="card mb-8">
        <img src="/images/asphaltshingles.jpg" alt="Roofing services in Amarillo, TX - Class 4 impact-resistant asphalt shingles - Hail protection roofing - 5 Star Commercial Roofing" className="card-image" />
        <div className="card-body">
          <h3 className="text-xl font-semibold text-brand-brown mb-3">The Texas Panhandle Standard</h3>
          <p className="mb-4">
            After the devastating hailstorms that hit Amarillo in recent years, <a href="/asphalt-roofing-in-amarillo/" className="text-brand-gold hover:underline">impact-resistant shingles</a> have become the gold standard for <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> in the Panhandle. These aren't your grandfather's asphalt shingles.
          </p>

          <h4 className="font-bold mb-2">UL 2218 Class 4 Impact Rating</h4>
          <p className="mb-4">
            Class 4 shingles are tested to withstand 2-inch steel balls dropped from 20 feet—simulating golf-ball sized hail. In Amarillo, where hail this size is common, Class 4 shingles often mean the difference between a <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a> and minor cosmetic damage.
          </p>

          <h4 className="font-bold mb-2">Our Installation Method</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Synthetic Underlayment:</strong> Superior to felt paper, won't tear in West Texas winds</li>
            <li><strong>6-Nail Pattern:</strong> Exceeds code for high-wind resistance (120+ mph)</li>
            <li><strong>Proper Ventilation:</strong> Ridge and soffit vents reduce attic temperatures (critical in Texas heat)</li>
            <li><strong>Ice & Water Shield:</strong> Along valleys and eaves for maximum leak protection</li>
            <li><strong>Architectural Shingles:</strong> Thicker, more durable than 3-tab, better hail resistance</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-brand-gold p-4 mb-4">
            <p className="font-semibold">Insurance Savings:</p>
            <p className="text-sm">Many insurance companies offer 10-30% discounts on premiums for homes with Class 4 impact-resistant shingles in hail-prone areas like Amarillo.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Standing Seam Metal Roof Installation</h2>
      <div className="card mb-8">
        <img src="/images/SteelRoofing.jpg" alt="Roofing services in Amarillo, TX - Standing seam metal roof - Ultimate hail protection - 5 Star Commercial Roofing" className="card-image" />
        <div className="card-body">
          <h3 className="text-xl font-semibold text-brand-brown mb-3">Ultimate Hail Protection</h3>
          <p className="mb-4">
            Standing seam metal roofing is rapidly gaining popularity in the Texas Panhandle—and for good reason. It's the most hail-resistant residential roofing system available, with lifespans exceeding 50 years even in Amarillo's harsh climate.
          </p>

          <h4 className="font-bold mb-2">Why Standing Seam Excels in Amarillo</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Hail Impact Resistance:</strong> Dents may occur but system remains watertight—no replacement needed</li>
            <li><strong>Wind Resistance:</strong> Concealed fasteners withstand 140+ mph winds</li>
            <li><strong>Thermal Movement:</strong> Clips allow metal to expand/contract with temperature swings</li>
            <li><strong>Cool Roof Technology:</strong> Reflective coatings reduce attic temperatures by 30-50°F</li>
            <li><strong>Fire Resistance:</strong> Class A fire rating for insurance benefits</li>
          </ul>

          <h4 className="font-bold mb-2">Our Standing Seam Installation Process</h4>
          <div className="space-y-3">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h5 className="step-title">Deck Preparation</h5>
                <p className="step-text">Install synthetic underlayment over solid deck or purlins for commercial</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h5 className="step-title">Panel Installation</h5>
                <p className="step-text">Vertical panels with concealed clip system—no exposed fasteners to leak</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h5 className="step-title">Seam Sealing</h5>
                <p className="step-text">Mechanical seaming creates waterproof connection between panels</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h5 className="step-title">Trim & Flashing</h5>
                <p className="step-text">Custom metal trim at ridges, valleys, and penetrations—no caulk to fail</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">TPO & PVC Single-Ply Membrane Installation</h2>
      <div className="card mb-8">
        <img src="/images/TPO1.jpg" alt="Roofing services in Amarillo, TX - TPO commercial roofing installation - White membrane flat roof system - 5 Star Commercial Roofing" className="card-image" />
        <div className="card-body">
          <h3 className="text-xl font-semibold text-brand-brown mb-3">Commercial Flat Roof Solutions</h3>
          <p className="mb-4">
            For commercial and industrial buildings in Amarillo, single-ply membranes offer the best combination of hail resistance, longevity, and cost-effectiveness for flat or low-slope roofs.
          </p>

          <h4 className="font-bold mb-2">Heat-Welded Seam Technology</h4>
          <p className="mb-4">
            Unlike older EPDM systems that rely on glued seams, TPO and PVC use hot-air welding to fuse seams together. This creates a monolithic (single-piece) roof surface that's virtually impossible to separate—critical for withstanding Amarillo's high winds and hail.
          </p>

          <h4 className="font-bold mb-2">Installation Methods</h4>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded">
              <h5 className="font-bold mb-2">Fully Adhered</h5>
              <p className="text-sm">Membrane glued directly to insulation. Best for high-wind areas like Amarillo.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h5 className="font-bold mb-2">Mechanically Attached</h5>
              <p className="text-sm">Membrane fastened through insulation to deck. Faster installation, lower cost.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h5 className="font-bold mb-2">Ballasted</h5>
              <p className="text-sm">Loose-laid with rock ballast. Good for roofs that can't support fasteners.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Proper Roof Ventilation for Texas Panhandle Climate</h2>
      <p className="mb-4">
        One of the most overlooked aspects of roofing in Amarillo is ventilation. With summer attic temperatures exceeding 160°F, proper ventilation isn't optional—it's critical for roof longevity and energy efficiency.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="font-bold mb-3">Ridge Vent Systems</h3>
            <p>Continuous ridge vents along the peak allow hot air to escape naturally. We install high-quality ridge vents on every shingle and metal roof project.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="font-bold mb-3">Soffit Intake Vents</h3>
            <p>Proper intake at soffits creates airflow. We ensure 1:300 ventilation ratio (1 sq ft vent per 300 sq ft attic space) as minimum.</p>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          Advanced roofing methods and professional installation throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing Installation</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Commercial Systems</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Metal Roofing</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing Methods</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Get Your Free Roof Assessment Today</h2>
        <p className="cta-text">
          Serving Amarillo and the entire Texas Panhandle with expert roofing services and hail damage repair.
          Most homeowners insurance policies in the Texas Panhandle cover hail damage, and we work directly with all major insurance companies to ensure you receive the full coverage you deserve
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary bg-white text-brand-brown hover:bg-gray-100 text-lg">
            📞 Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown text-lg">
            Request Free Inspection
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
