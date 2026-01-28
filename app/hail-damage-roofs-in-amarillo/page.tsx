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
    "areaServed": {
      "@type": "City",
      "name": "Amarillo",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    "description": "Expert hail damage roof repair and restoration services in Amarillo, Texas. Insurance claim assistance and Class 4 impact-resistant roof installation."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Hail Damage Roofs",
                      "url": "/hail-damage-roofs/"
              },
              {
                      "name": "Amarillo",
                      "url": "/hail-damage-roofs-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Hail Damage Roofs in Amarillo</h1>

      {/* Post Meta */}
      <div className="text-gray-600 mb-6 flex gap-4">
        <time dateTime="2023-12-15">December 15, 2023</time>
        <span>By 5 Star Roofing</span>
      </div>

      {/* Featured Image */}
      <img
        src="/images/hail-damage-roofs-amarillo.jpg"
        alt="Hail Damage Roofs in Amarillo"
        className="w-full max-w-2xl h-auto mb-8 rounded-lg shadow-lg"
      />

      {/* Content */}
      <div className="prose max-w-none">
        <p>
          Dealing with <strong>hail damage repair roofs in Amarillo</strong> can be a stressful and costly
          situation for homeowners. The need to find a reliable <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo roofing contractor</a> for <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roof repair</a>
          due to the extensive Amarillo roof damage caused by the storm is paramount. By taking proactive
          measures and understanding your insurance coverage, you can effectively address the issue.
        </p>

        <p>
          One of the first steps in dealing with <strong>hail damage roofs</strong> is to contact your
          insurance provider promptly after a hailstorm.
        </p>

        <p>
          This will initiate the claims process and help determine whether you will be able to file a claim
          to cover the costs of <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">repairs or replacement</a>.
        </p>

        <p>
          Regular maintenance and inspections are key in preventing and addressing <strong>hail damage</strong>.
          Homeowners should keep an eye out for signs of damage, such as cracked or missing shingles, dents
          in metal roofs, or leaks in the attic.
        </p>

        <p>
          Promptly addressing any issues can help prevent further damage and costly repairs down the line.
        </p>

        <p>
          When it comes to repairing <strong>hail damage roofs</strong>, it is important to work with a
          reputable and experienced <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo roofing contractor</a> who specializes in storm damage restoration.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Signs of Hail Damage on Your Roof</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Dented or Cracked Shingles:</strong> Visible impact marks on asphalt shingles</li>
          <li><strong>Missing Granules:</strong> Bare spots where protective granules have been knocked off</li>
          <li><strong>Dented Vents & Flashing:</strong> Metal components showing impact damage</li>
          <li><strong>Cracked or Split Shingles:</strong> Shingles with fractures or breaks</li>
          <li><strong>Dented Gutters:</strong> Gutters and downspouts with visible dents</li>
          <li><strong>Damaged Siding:</strong> Impact marks on siding near the roofline</li>
          <li><strong>Interior Water Stains:</strong> Ceiling or wall stains indicating leaks</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Hail Damage Repair Process</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Free Inspection:</strong> Comprehensive roof assessment to document all damage</li>
          <li><strong>Insurance Documentation:</strong> Detailed photos and reports for your claim</li>
          <li><strong>Insurance Meeting:</strong> We meet with your adjuster to ensure proper coverage</li>
          <li><strong>Claim Assistance:</strong> We handle all paperwork and negotiations</li>
          <li><strong>Quality Repairs:</strong> Expert restoration using premium materials</li>
          <li><strong>Final Inspection:</strong> Ensure all work meets manufacturer standards</li>
          <li><strong>Warranty Protection:</strong> Comprehensive coverage on materials and labor</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Working with Your Insurance Company</h2>

        <p>
          We have extensive experience working with insurance companies on hail damage claims. Our team
          will:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Document all damage with detailed photos and measurements</li>
          <li>Provide comprehensive written estimates</li>
          <li>Meet with insurance adjusters on your behalf</li>
          <li>Ensure all damage is properly documented in the claim</li>
          <li>Negotiate for fair and complete coverage</li>
          <li>Handle all paperwork and communication</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Hail Damage Requires Immediate Attention</h2>

        <p>
          Even minor hail damage can lead to serious problems if left unaddressed:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Water Infiltration:</strong> Damaged shingles allow water to penetrate roof decking</li>
          <li><strong>Mold Growth:</strong> Moisture leads to mold and rot in attic spaces</li>
          <li><strong>Structural Damage:</strong> Ongoing leaks compromise roof structure</li>
          <li><strong>Decreased Energy Efficiency:</strong> Compromised insulation increases utility costs</li>
          <li><strong>Voided Warranties:</strong> Delayed repairs may void manufacturer warranties</li>
          <li><strong>Insurance Claim Deadlines:</strong> Most policies have time limits for filing claims</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Impact-Resistant Roofing for Hail-Prone Areas</h2>

        <p>
          Consider upgrading to <a href="/residential-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">Class 4 impact-resistant shingles</a> for superior hail protection:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Designed to withstand impacts from 2-inch hailstones</li>
          <li>May qualify for insurance discounts (up to 30% in some cases)</li>
          <li>Enhanced durability and longer lifespan</li>
          <li>Better protection for your home investment</li>
          <li>Manufacturer warranties specifically covering hail damage</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Don't Wait to Address Hail Damage</h2>

        <p>
          Amarillo is located in "Hail Alley" – one of the most hail-prone regions in the United States.
          After any significant hailstorm, it's crucial to have your roof inspected by professionals who
          know what to look for. Many homeowners don't realize they have damage until leaks develop months
          or even years later.
        </p>
      </div>
      </FadeIn>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-brand-gold/20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-brand-brown">Hail Damage? Get a Free Inspection Today</h2>
        <p className="mb-6 text-gray-700">
          Contact 5 Star Commercial Roofing for a comprehensive hail damage inspection. We'll work directly
          with your insurance company to ensure you get the coverage you deserve.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="tel:8066226041"
            className="btn-primary-hero"
          >
            📞 Call (806) 622-6041
          </a>
          <a
            href="/contact/"
            className="bg-white border-2 border-brand-gold text-brand-brown hover:bg-brand-gold px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Request Free Inspection
          </a>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <a href="/hail-damage-repair-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Hail Damage Repair</h3>
            <p className="text-sm text-gray-600">Expert hail damage assessment and repair</p>
          </a>
          <a href="/storm-damage-roof-repair-in-amarillo/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Storm Damage</h3>
            <p className="text-sm text-gray-600">Complete storm damage restoration</p>
          </a>
          <a href="/roof-replacement-in-amarillo/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Roof Replacement</h3>
            <p className="text-sm text-gray-600">Full roof replacement with impact-resistant materials</p>
          </a>
        </div>

        <h3 className="text-xl font-bold mb-3">Service Areas</h3>
        <div className="grid md:grid-cols-4 gap-3">
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland, TX</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa, TX</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock, TX</a>
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon, TX</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
