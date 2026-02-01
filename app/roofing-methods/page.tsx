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
          Not all roofing methods are created equal—especially in the <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a>. The region sits squarely in America's "Hail Alley," experiencing an average of <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">8-12 significant hailstorms per year</a>. Combined with extreme temperature swings (from below zero to over 110°F), intense UV exposure at high altitude, and severe weather including tornadoes, high winds, and occasional ice storms, your roof needs to be engineered for survival in one of the nation's most challenging climates.
        </p>
        <p className="text-lg mt-4">
          At <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">5 Star Commercial Roofing</a>, we specialize in advanced roofing methods specifically engineered for the Texas Panhandle's unique challenges. Our focus extends beyond basic weather protection to comprehensive solutions that provide maximum hail resistance, energy efficiency, and long-term durability for both <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial properties</a>.
        </p>
        <p className="text-lg mt-4">
          Modern roofing technology has evolved dramatically in response to climate challenges like those found in Amarillo. Today's premium roofing systems incorporate impact-resistant materials, enhanced wind resistance, thermal barriers, and moisture management features that were unavailable just a decade ago. Understanding and properly implementing these advanced methods is the difference between a roof that survives and one that thrives in West Texas conditions.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Climate-Specific Engineering Approach</h3>
        <p className="text-lg mt-4">
          Successful roofing in Amarillo requires understanding the specific ways that local weather patterns stress building materials. Rapid temperature changes cause thermal expansion and contraction that can crack inferior materials. High-altitude UV exposure breaks down organic compounds in standard roofing products. Wind-driven debris impacts test material durability beyond normal design parameters.
        </p>
        <p className="text-lg mt-4">
          Our roofing methods account for these local stressors through material selection, installation techniques, and system design that exceeds basic building code requirements. We implement enhanced fastening patterns for high-wind resistance, thermal expansion joints for temperature cycling, and impact-resistant materials tested specifically for hail resistance.
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

          <h4 className="font-bold mb-2">Advanced Installation Methods for Maximum Performance</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Premium Synthetic Underlayment:</strong> High-strength synthetic materials that resist tearing in 70+ mph winds common during Texas thunderstorms</li>
            <li><strong>Enhanced 6-Nail Pattern:</strong> Exceeds building code requirements with strategic placement for 120+ mph wind resistance and optimal load distribution</li>
            <li><strong>Engineered Ventilation Systems:</strong> Ridge and soffit vents calculated to provide 1:300 ventilation ratio, reducing attic temperatures by 30-50°F in Texas heat</li>
            <li><strong>Self-Adhering Ice & Water Shield:</strong> Applied to valleys, eaves, and penetration areas for maximum leak protection during ice storms and wind-driven rain</li>
            <li><strong>Architectural Grade Shingles:</strong> Minimum 30-year dimensional shingles with enhanced thickness and hail resistance ratings</li>
            <li><strong>Thermal Barrier Technology:</strong> Reflective roofing materials and cool roof coatings to reduce cooling costs by up to 25%</li>
            <li><strong>Advanced Flashing Systems:</strong> Multi-piece metal flashing at all roof transitions, designed to accommodate thermal expansion and prevent water infiltration</li>
          </ul>

          <h4 className="font-bold mb-2">Quality Control and Installation Standards</h4>
          <p className="mb-4">
            Our installation process includes multiple quality checkpoints to ensure every shingle installation meets manufacturer specifications and exceeds local building codes. Material delivery inspection verifies impact ratings and manufacturing dates. Installation progress monitoring ensures proper nail placement, alignment, and sealing. Final inspection includes leak testing and warranty documentation.
          </p>
          <p className="mb-4">
            Weather monitoring during installation is critical in Amarillo's unpredictable climate. We track wind speeds, temperature, and precipitation to ensure optimal installation conditions. Materials are not installed during extreme temperatures, high winds, or precipitation that could compromise adhesion or placement accuracy.
          </p>

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

      <h2 className="text-2xl font-bold mt-8 mb-4">Modified Bitumen and Built-Up Roofing Systems</h2>
      <div className="card mb-8">
        <img src="/images/commercial-roofing-2.jpg" alt="Modified bitumen roofing installation - Commercial flat roof systems - 5 Star Commercial Roofing Amarillo" className="card-image" />
        <div className="card-body">
          <h3 className="text-xl font-semibold text-brand-brown mb-3">Heavy-Duty Commercial Solutions</h3>
          <p className="mb-4">
            For commercial and industrial buildings requiring maximum durability, modified bitumen and built-up roofing (BUR) systems provide time-tested performance in extreme conditions. These multi-layer systems create redundant waterproofing that can withstand mechanical damage, thermal cycling, and severe weather events.
          </p>

          <h4 className="font-bold mb-2">Modified Bitumen Installation Methods</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Torch-Applied Systems:</strong> Heat-activated adhesion creates permanent bonds between membrane layers</li>
            <li><strong>Self-Adhering Membranes:</strong> Cold-applied systems ideal for buildings with fire restrictions or sensitive contents</li>
            <li><strong>Hot Asphalt Application:</strong> Traditional hot mopping provides maximum adhesion and longevity</li>
            <li><strong>Granulated Cap Sheets:</strong> UV-resistant mineral granules protect against solar degradation</li>
          </ul>

          <h4 className="font-bold mb-2">Built-Up Roofing (BUR) Advantages</h4>
          <p className="mb-4">
            BUR systems consist of multiple plies of roofing felt or fabric laminated with hot asphalt or cold adhesive, creating a monolithic waterproof membrane. The redundant layers provide backup protection if one layer is damaged, making BUR systems particularly suitable for high-traffic commercial applications.
          </p>
          <p className="mb-4">
            Gravel ballast or mineral cap sheets provide additional protection against mechanical damage, UV exposure, and fire. These heavy-duty systems routinely achieve 20-30 year service lives with proper maintenance, making them cost-effective for large commercial buildings.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Insulation Integration Methods</h2>
      <div className="card mb-8">
        <div className="card-body">
          <h3 className="text-xl font-semibold text-brand-brown mb-3">Energy Efficiency Through Proper Insulation Design</h3>
          <p className="mb-4">
            Modern roofing methods integrate advanced insulation systems that dramatically improve energy performance while providing additional structural benefits. Proper insulation installation is critical in Amarillo's climate where cooling costs can represent 40-60% of total energy expenses.
          </p>

          <h4 className="font-bold mb-2">Polyisocyanurate (Polyiso) Insulation</h4>
          <p className="mb-4">
            Polyiso insulation boards provide the highest R-value per inch of common roofing insulations, making them ideal for commercial applications where roof thickness is limited. These rigid boards also provide structural benefits, creating a smooth surface for membrane application and additional puncture resistance.
          </p>

          <h4 className="font-bold mb-2">Tapered Insulation Systems</h4>
          <p className="mb-4">
            Custom-designed tapered insulation creates positive drainage on flat roofs, eliminating ponding water that can lead to premature membrane failure. Computer-designed taper plans ensure water flows efficiently to drains while maintaining adequate insulation thickness throughout the roof area.
          </p>

          <h4 className="font-bold mb-2">Vapor Barrier Integration</h4>
          <p className="mb-4">
            Proper vapor barrier installation prevents moisture migration from building interiors into roofing systems. In Amarillo's climate, where interior humidity control is challenging, vapor barriers prevent condensation within roof assemblies that can cause insulation degradation and structural damage.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Cool Roof Technology and Energy Management</h2>
      <div className="card mb-8">
        <div className="card-body">
          <h3 className="text-xl font-semibold text-brand-brown mb-3">Reducing Energy Costs Through Reflective Technology</h3>
          <p className="mb-4">
            Cool roof technology represents one of the most cost-effective building improvements available in hot climates like Amarillo. Reflective roofing materials can reduce roof surface temperatures by 50-70°F compared to traditional dark roofing, translating to substantial energy savings and extended equipment life.
          </p>

          <h4 className="font-bold mb-2">Solar Reflectance Index (SRI) Performance</h4>
          <p className="mb-4">
            Cool roof materials are rated using Solar Reflectance Index (SRI) values that measure both reflectance and emittance properties. High SRI materials stay cooler under solar loading, reducing heat transfer to building interiors and decreasing cooling demands.
          </p>

          <h4 className="font-bold mb-2">Cool Roof Coating Systems</h4>
          <p className="mb-4">
            Liquid-applied cool roof coatings can transform existing dark roofing into high-performance reflective systems. These coatings provide additional waterproofing while dramatically improving energy performance. Properly applied coatings can extend roof life by 10-15 years while providing immediate energy savings.
          </p>

          <h4 className="font-bold mb-2">ENERGY STAR Compliance and Incentives</h4>
          <p className="mb-4">
            Many cool roof materials qualify for ENERGY STAR certification, making them eligible for utility rebates and tax incentives. These programs can offset upgrade costs while providing ongoing energy savings that continue throughout the roof's service life.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Comprehensive Roof Ventilation Systems for Texas Panhandle Climate</h2>
      <p className="mb-4">
        Proper roof ventilation represents one of the most critical yet overlooked aspects of roofing performance in Amarillo. With summer attic temperatures routinely exceeding 160°F and potential for ice dam formation during winter weather events, ventilation isn't optional—it's essential for roof longevity, energy efficiency, and indoor comfort.
      </p>
      <p className="mb-6">
        Inadequate ventilation accelerates shingle aging, increases cooling costs, promotes ice dam formation, and creates moisture problems that can damage structural components. Our ventilation design process calculates exact airflow requirements based on attic square footage, roof configuration, and local climate conditions to ensure optimal performance year-round.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="font-bold mb-3">Ridge Vent Systems</h3>
            <p className="mb-3">Continuous ridge vents along the roof peak provide natural exhaust for heated attic air. We install professional-grade ridge vents with external baffles that prevent weather intrusion while maximizing airflow capacity.</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Wind-powered ventilation increases efficiency</li>
              <li>Weather-resistant construction prevents leaks</li>
              <li>Insect screening blocks pest intrusion</li>
              <li>Seamless integration with roofing materials</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="font-bold mb-3">Soffit Intake Ventilation</h3>
            <p className="mb-3">Balanced intake ventilation at soffits creates the airflow necessary for ridge vent function. We ensure minimum 1:300 ventilation ratio (1 square foot of vent area per 300 square feet of attic space) with proper intake/exhaust balance.</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Continuous soffit vents maximize intake area</li>
              <li>Proper baffle installation prevents insulation blocking</li>
              <li>Insect screening protects against pest entry</li>
              <li>Corrosion-resistant materials ensure longevity</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Advanced Ventilation Solutions</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-bold mb-3">Powered Exhaust Fans</h4>
            <p className="text-sm">Solar or electric-powered exhaust fans provide supplemental ventilation for challenging roof configurations or extreme climate conditions.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="font-bold mb-3">Turbine Vents</h4>
            <p className="text-sm">Wind-powered turbine vents create enhanced exhaust capacity for attics requiring additional airflow beyond standard ridge venting.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="font-bold mb-3">Hip Roof Ventilation</h4>
            <p className="text-sm">Specialized ventilation solutions for hip roofs where traditional ridge venting is limited, using combinations of ridge, turbine, and powered vents.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Quality Control and Installation Standards</h2>
      <div className="card mb-8">
        <div className="card-body">
          <h3 className="text-xl font-semibold text-brand-brown mb-3">Ensuring Installation Excellence</h3>
          <p className="mb-4">
            Our quality control process ensures every roofing method is implemented according to manufacturer specifications and industry best practices. Multiple inspection checkpoints throughout installation verify material quality, installation technique, and adherence to design specifications.
          </p>

          <h4 className="font-bold mb-2">Material Verification and Testing</h4>
          <p className="mb-4">
            All roofing materials undergo inspection upon delivery to verify impact ratings, manufacturing dates, and specification compliance. Materials showing damage, aging, or specification deviations are rejected and replaced before installation begins.
          </p>

          <h4 className="font-bold mb-2">Installation Progress Monitoring</h4>
          <p className="mb-4">
            Experienced supervisors monitor installation progress to ensure proper fastening patterns, material placement, and technique compliance. Regular quality checkpoints catch potential issues before they become problems, ensuring consistent excellence throughout the project.
          </p>

          <h4 className="font-bold mb-2">Final Inspection and Testing</h4>
          <p className="mb-4">
            Completed installations undergo comprehensive final inspection including leak testing where applicable, fastening verification, and warranty documentation preparation. Our final walkthrough with property owners ensures complete satisfaction before project completion.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Maintenance and Longevity Planning</h2>
      <div className="card mb-8">
        <div className="card-body">
          <h3 className="text-xl font-semibold text-brand-brown mb-3">Maximizing Roof System Performance and Lifespan</h3>
          <p className="mb-4">
            Proper maintenance planning begins during installation with system design that accommodates routine maintenance activities. Our maintenance recommendations are tailored to specific roofing methods, local climate conditions, and building usage patterns.
          </p>

          <h4 className="font-bold mb-2">Preventive Maintenance Programs</h4>
          <p className="mb-4">
            Regular maintenance extends roof life and prevents minor issues from becoming major problems. Our maintenance programs include annual inspections, cleaning, minor repairs, and documentation that preserves warranty coverage while identifying potential issues early.
          </p>

          <h4 className="font-bold mb-2">Storm Damage Assessment and Response</h4>
          <p className="mb-4">
            Post-storm inspections are critical in hail-prone areas like Amarillo. Our rapid response team can assess storm damage, provide temporary protection if needed, and coordinate with insurance adjusters to ensure proper claim documentation and repair authorization.
          </p>

          <h4 className="font-bold mb-2">Long-Term Performance Monitoring</h4>
          <p className="mb-4">
            Understanding how roofing systems perform over time helps optimize future installations and maintenance planning. Our long-term monitoring includes performance tracking, wear pattern analysis, and recommendations for system improvements or replacements.
          </p>
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
