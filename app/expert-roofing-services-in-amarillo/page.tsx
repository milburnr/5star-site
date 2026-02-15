import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/expert-roofing-services-in-amarillo/' },
  title: 'Amarillo TX Roofing Services | 5 Star Roofing',
  description: "Choose 5 Star Roofing for top-notch residential and commercial roofing services in Amarillo. Quality materials, expert service, and unbeatable reliability.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Expert Roofing Services",
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
    "description": "Expert roofing services in Amarillo, Texas. Professional residential and commercial roofing, storm damage repair, and roof replacement."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Expert Roofing Services",
                      "url": "/expert-roofing-services/"
              },
              {
                      "name": "Amarillo",
                      "url": "/expert-roofing-services-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/expert-roofing-services-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/expert-roofing-services-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roofing services in Amarillo, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Amarillo Roofer – 5 Star Roofing</h1>
      </FadeIn>

      {/* Post Meta */}
      <div className="text-gray-600 mb-6 flex gap-4">
        <time dateTime="2023-12-15">December 15, 2023</time>
        <span>By 5 Star Roofing</span>
      </div>

      {/* Featured Image */}
      <img
        src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-24-1280w.jpg"
        alt="Roofing Services in Amarillo"
        className="w-full max-w-2xl h-auto mb-8 rounded-lg shadow-lg"
      />

      {/* Content */}
      <div className="prose max-w-none">
        <p>
          5 Star Commercial Roofing stands as Amarillo's premier <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">roofing contractor</a>, specializing in comprehensive
          residential and commercial roofing services throughout the Texas Panhandle. Since 2014, we have established ourselves as the region's most trusted roofing professionals, serving homeowners and businesses with unparalleled expertise in all aspects of roofing installation, repair, and maintenance.
        </p>

        <p>
          Our comprehensive services encompass <strong>roof repair</strong>, <strong>residential roofing</strong>,{" "}
          <strong>commercial roofing</strong>, <strong>roof installation</strong>, and specialized <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">prompt services</a>. We provide <a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">free roof inspections</a> and work directly with all major insurance companies to streamline <a href="/roof-storm-damage-in-amarillo/" className="text-brand-gold hover:underline">storm damage claims</a>, ensuring our clients receive the maximum coverage they deserve.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-brand-brown">What Sets 5 Star Commercial Roofing Apart in Amarillo</h2>

        <p>
          Our unwavering commitment to quality distinguishes us from other roofing contractors in the Texas Panhandle. Every project receives meticulous attention to detail, from initial consultation through final inspection, ensuring flawless execution that exceeds industry standards and customer expectations.
        </p>

        <p>
          We exclusively use premium materials specifically engineered for Amarillo's challenging climate conditions, including extreme hail, high winds, temperature fluctuations, and intense UV exposure. This commitment to quality materials, combined with superior installation techniques, guarantees long-lasting, durable roofing solutions that protect your investment for decades.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Amarillo Weather Expertise</h3>

        <p>
          Living and working in Amarillo for over a decade, our team understands the unique challenges posed by Texas Panhandle weather. The region experiences some of the most severe hailstorms in the United States, with hail damage occurring multiple times per year. Our expertise in hail-resistant roofing systems and <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage assessment</a> ensures your property receives maximum protection.
        </p>

        <p>
          Amarillo's location in "Hail Alley" means property owners face constant threats from severe weather. Our roofing systems are specifically designed and installed to withstand golf-ball to baseball-sized hail, winds exceeding 70 mph, and rapid temperature changes that can stress inferior roofing materials. We install Class 4 impact-resistant shingles as standard practice, not an upgrade.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Local Knowledge and Community Commitment</h3>

        <p>
          As Amarillo natives, we understand more than just the weather—we know the neighborhoods, local building codes, permit requirements, and insurance company practices specific to the Texas Panhandle. This local knowledge translates into faster project completion, proper permit handling, and smoother insurance claim processing.
        </p>

        <p>
          Our commitment to the Amarillo community extends beyond individual projects. We support local suppliers, employ local craftsmen, and maintain relationships with area insurance adjusters and building officials. This network ensures our clients receive priority service and expert advocacy throughout their roofing project.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-brand-brown">Comprehensive Roofing Solutions for Every Need</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Advanced Diagnostic and Assessment Services</h3>

        <p>
          Every roofing project begins with a comprehensive assessment using advanced diagnostic tools and techniques. Our <a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">certified roof inspections</a> include drone photography, thermal imaging for leak detection, and detailed documentation that satisfies insurance requirements and provides you with complete understanding of your roof's condition.
        </p>

        <p>
          Our inspection process identifies not just obvious damage, but potential problem areas that could develop into expensive issues. We examine flashing, ventilation, structural integrity, and material condition to provide a complete picture of your roofing system's health and remaining lifespan.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Insurance Claims Expertise</h3>

        <p>
          Navigating insurance claims for roof damage can be complex and frustrating. Our team includes specialists trained in insurance claim procedures, documentation requirements, and negotiation techniques that ensure you receive fair compensation for legitimate damage. We work directly with adjusters, provide detailed damage reports, and advocate for complete repairs rather than band-aid fixes.
        </p>

        <p>
          We understand that most Amarillo homeowners will file multiple hail damage claims during their time in the Texas Panhandle. Our claims expertise ensures each interaction with your insurance company results in proper coverage and quality repairs that restore your home's protection and value.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Comprehensive Roofing Services</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Residential Roofing Excellence:</h3>

        <p>
          Our <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing services</a> encompass every aspect of home roof protection, from minor repairs to complete system replacement. We understand that your home is your largest investment, and our roofing solutions are designed to protect that investment while enhancing your property's value and curb appeal.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li><strong><a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">Complete Roof Replacement & Installation</a>:</strong> Full system replacement using Class 4 impact-resistant shingles, premium underlayment, and enhanced ventilation systems designed for Texas climate</li>
          <li><strong><a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">Expert Roof Repairs & Maintenance</a>:</strong> Precision repairs using matching materials and techniques that blend seamlessly with existing roofing while restoring full weather protection</li>
          <li><strong><a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">Hail & Storm Damage Restoration</a>:</strong> Comprehensive damage assessment, insurance claim assistance, and complete restoration using impact-resistant materials</li>
          <li><strong>Premium Asphalt Shingle Installation:</strong> Architectural and dimensional shingles with enhanced wind resistance and hail protection ratings</li>
          <li><strong>Standing Seam Metal Roofing Systems:</strong> Ultimate durability with 50+ year lifespans, superior hail resistance, and energy-efficient cool roof technology</li>
          <li><strong>Comprehensive Roof Inspections:</strong> Annual maintenance inspections with detailed reports and preventive maintenance recommendations</li>
          <li><strong>Ventilation System Optimization:</strong> Ridge vents, soffit ventilation, and attic fans to reduce energy costs and prevent ice dam formation</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Commercial Roofing Solutions:</h3>

        <p>
          Our <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing division</a> serves businesses throughout the Texas Panhandle with specialized systems designed for commercial and industrial applications. We understand that business operations cannot be disrupted for extended periods, so our commercial projects are planned and executed to minimize downtime while maximizing long-term performance.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li><strong>Flat Roof Installation & Repair:</strong> TPO, EPDM, and PVC single-ply membrane systems with heat-welded seams and enhanced puncture resistance</li>
          <li><strong>Built-Up Roofing (BUR) Systems:</strong> Multi-layer systems with hot asphalt or cold adhesive application for maximum durability in high-traffic applications</li>
          <li><strong>Modified Bitumen Roofing:</strong> Self-adhering and torch-applied systems offering excellent flexibility and weather resistance</li>
          <li><strong>Storm Damage Roof Repairs:</strong> Rapid response for storm damage, equipment impact, and sudden leaks that threaten business operations</li>
          <li><strong>Roof Coating & Restoration:</strong> Liquid-applied systems that extend roof life, improve energy efficiency, and provide cost-effective alternatives to replacement</li>
          <li><strong>Green Roof Systems:</strong> Vegetated roof systems for sustainability goals and stormwater management</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-brand-brown">Material Selection and Quality Standards</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Impact-Resistant Roofing Materials</h3>

        <p>
          Given Amarillo's position in America's "Hail Alley," we prioritize impact-resistant materials that can withstand repeated hail impacts without requiring replacement. Our standard residential installations use Class 4 impact-resistant shingles that have been tested to withstand 2-inch steel balls dropped from 20 feet—equivalent to golf ball-sized hail traveling at terminal velocity.
        </p>

        <p>
          These specialized shingles incorporate modified asphalt formulations, reinforced mat materials, and protective granules that absorb and disperse impact energy rather than cracking or splitting. The result is roofing that maintains its protective qualities and aesthetic appearance even after severe hailstorms that would destroy conventional shingles.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Premium Underlayment Systems</h3>

        <p>
          The foundation of any quality roofing system is the underlayment—the waterproof barrier between your roof deck and the final roofing material. We exclusively use synthetic underlayment products that offer superior tear resistance, UV protection, and installation characteristics compared to traditional felt paper.
        </p>

        <p>
          Our synthetic underlayment systems remain stable in high winds during installation, resist tearing during application, and provide extended UV exposure tolerance if installation is delayed by weather. These premium underlayment products are essential for Texas Panhandle installations where high winds and intense sun can compromise inferior materials.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Advanced Ventilation Technology</h3>

        <p>
          Proper roof ventilation is critical in Amarillo's climate, where summer attic temperatures can exceed 150°F without adequate airflow. Our ventilation systems combine intake vents at the soffits with exhaust vents at the ridge to create continuous airflow that removes hot air and moisture from attic spaces.
        </p>

        <p>
          We calculate ventilation requirements based on attic square footage and install balanced systems that meet or exceed building code requirements. Proper ventilation extends shingle life, reduces energy costs, and prevents ice dam formation during occasional winter weather events.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-brand-brown">The 5 Star Commercial Roofing Advantage</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Certified Excellence and Professional Credentials</h3>

        <p>
          Our commitment to professional excellence is demonstrated through our extensive certifications and industry affiliations. We maintain manufacturer certifications with all major roofing material producers, ensuring access to the latest products, installation techniques, and warranty programs. These certifications require ongoing training and quality standards that benefit every client.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li><strong>Expert Craftsmanship:</strong> Master-level installation teams with decades of combined experience in Texas Panhandle roofing challenges</li>
          <li><strong>Premium Material Partnerships:</strong> Authorized dealer relationships with Owens Corning, GAF, CertainTeed, and other leading manufacturers</li>
          <li><strong>Local Weather Expertise:</strong> Specialized knowledge of Amarillo's unique climate challenges and optimal roofing solutions</li>
          <li><strong>Customer-Centric Service:</strong> Dedicated project managers ensure clear communication and complete satisfaction on every installation</li>
          <li><strong>Licensed & Fully Insured:</strong> Comprehensive general liability and workers' compensation coverage protects your property and our team</li>
          <li><strong>Extended Warranty Protection:</strong> Material and workmanship warranties up to 50 years with transferable coverage for resale value</li>
          <li><strong>Transparent Pricing:</strong> Detailed estimates with no hidden costs and flexible financing options</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Quality Control and Safety Standards</h3>

        <p>
          Every 5 Star Commercial Roofing project follows strict quality control protocols designed to ensure consistent excellence and complete safety. Our quality control process begins with material delivery inspection and continues through final cleanup and warranty documentation.
        </p>

        <p>
          Safety is paramount in our operations, with comprehensive safety training, proper equipment maintenance, and adherence to OSHA guidelines. Our safety record reflects our commitment to protecting both our team members and your property throughout every phase of the roofing project.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-brand-brown">Project Management and Timeline Excellence</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Streamlined Project Coordination</h3>

        <p>
          Our project management system ensures efficient coordination from initial contact through final inspection. Each client is assigned a dedicated project manager who serves as the primary point of contact and coordinates all aspects of the installation process.
        </p>

        <p>
          We understand that roofing projects can be disruptive to daily routines, so our scheduling system prioritizes efficiency and clear communication. Weather monitoring, material coordination, and crew scheduling are managed to minimize delays and keep projects on track.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Insurance Coordination and Claims Management</h3>

        <p>
          Our insurance coordination services take the stress out of storm damage claims and ensure you receive the full coverage available under your policy. We work directly with insurance adjusters, provide detailed documentation, and advocate for complete repairs rather than temporary fixes.
        </p>

        <p>
          Many Amarillo property owners are surprised to learn that their insurance claims were under-settled or didn't include necessary upgrades to current building codes. Our claims specialists review adjuster reports, identify missed damages, and ensure your claim reflects the true cost of proper restoration.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-brand-brown">Our Proven Installation Process</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Phase 1: Comprehensive Assessment and Planning</h3>

        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Initial Consultation:</strong> In-depth discussion of your roofing needs, concerns, timeline, and budget considerations with experienced project managers</li>
          <li><strong>Professional Inspection:</strong> Complete roof assessment using drone technology, thermal imaging for leak detection, and detailed structural evaluation</li>
          <li><strong>Material Selection Guidance:</strong> Expert recommendations based on your specific needs, local climate conditions, and long-term value considerations</li>
          <li><strong>Detailed Project Estimate:</strong> Transparent pricing breakdown including materials, labor, permits, disposal, and warranty coverage with no hidden costs</li>
          <li><strong>Insurance Coordination:</strong> Claims assistance, adjuster meetings, and documentation support to maximize coverage and minimize out-of-pocket expenses</li>
        </ol>

        <h3 className="text-2xl font-bold mt-8 mb-4">Phase 2: Preparation and Installation Excellence</h3>

        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Permit Acquisition:</strong> Handle all necessary building permits and ensure compliance with local building codes and manufacturer specifications</li>
          <li><strong>Material Delivery Coordination:</strong> Schedule material delivery and site preparation to ensure efficient installation workflow</li>
          <li><strong>Property Protection:</strong> Comprehensive site protection including landscaping covers, magnetic debris cleanup, and driveway protection</li>
          <li><strong>Professional Installation:</strong> Certified installation crews using manufacturer-approved techniques and premium materials designed for Texas climate</li>
          <li><strong>Quality Control Inspections:</strong> Multiple inspection points throughout installation to ensure adherence to specifications and quality standards</li>
        </ol>

        <h3 className="text-2xl font-bold mt-8 mb-4">Phase 3: Completion and Ongoing Support</h3>

        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Final Quality Walkthrough:</strong> Complete inspection with the property owner to ensure 100% satisfaction and address any concerns</li>
          <li><strong>Comprehensive Cleanup:</strong> Thorough site cleanup including magnetic nail sweeps, debris removal, and property restoration</li>
          <li><strong>Warranty Documentation:</strong> Complete warranty package including material and workmanship coverage with clear terms and contact information</li>
          <li><strong>Maintenance Guidance:</strong> Detailed maintenance recommendations and schedules to maximize roof lifespan and preserve warranty coverage</li>
          <li><strong>Ongoing Support:</strong> Continued availability for maintenance, inspections, and any questions or concerns about your roofing system</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-brand-brown">Technical Expertise and Innovation</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Advanced Installation Techniques</h3>

        <p>
          Our installation techniques go beyond basic industry standards to provide superior performance in Amarillo's challenging climate. We use enhanced fastening patterns designed for high-wind areas, premium sealants for extreme temperature cycling, and advanced flashing details that prevent water intrusion at critical connection points.
        </p>

        <p>
          Every installation includes thermal barrier improvements, enhanced ventilation calculations, and moisture management systems that address the specific challenges of Texas Panhandle weather. Our techniques are continuously updated based on industry research, manufacturer recommendations, and our extensive field experience in local conditions.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Energy Efficiency and Sustainability</h3>

        <p>
          Modern roofing systems offer significant opportunities for energy savings and environmental benefits. Our cool roof technologies, enhanced insulation techniques, and high-performance ventilation systems can reduce cooling costs by 20-40% while extending equipment life and improving indoor comfort.
        </p>

        <p>
          We offer solar-ready roofing installations, energy-efficient material selections, and sustainable disposal practices that minimize environmental impact while maximizing long-term value. Our energy consultations help property owners understand available rebates, tax incentives, and utility programs that offset upgrade costs.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-brand-brown">Serving Amarillo with Local Pride and Expertise</h2>

        <p>
          As Amarillo's premier roofing contractor, we understand the unique challenges that Texas Panhandle weather presents to property owners. From devastating hailstorms that can destroy roofs in minutes to extreme temperature fluctuations that stress building materials, your roof needs to be engineered for survival in one of America's most challenging climates.
        </p>

        <p>
          Our deep roots in the Amarillo community extend beyond business relationships—we live here, our families are here, and our reputation is built on the quality of every installation we complete. This local commitment ensures that every project receives the attention to detail and quality workmanship that reflects our community standing.
        </p>

        <p>
          We've built our reputation through hundreds of successful projects, thousands of satisfied customers, and consistent quality that stands the test of time and weather. When you choose 5 Star Commercial Roofing, you're not just hiring a contractor—you're partnering with Amarillo's roofing specialists who understand your needs and stand behind their work with comprehensive warranties and ongoing support.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Community Involvement and Industry Leadership</h3>

        <p>
          Our commitment to excellence extends beyond individual projects to industry leadership and community involvement. We participate in continuing education programs, maintain relationships with local building officials and insurance professionals, and stay current with evolving building codes and material technologies.
        </p>

        <p>
          This industry involvement ensures our clients benefit from the latest innovations, most effective techniques, and strongest warranty programs available. Our community involvement includes supporting local charities, participating in disaster relief efforts, and providing educational resources that help property owners make informed decisions about their roofing investments.
        </p>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-brand-gold/20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-brand-brown">Ready for Expert Roofing Services?</h2>
        <p className="mb-6 text-gray-700">
          Contact 5 Star Commercial Roofing today for professional roofing services in Amarillo. We offer
          free inspections, competitive pricing, and quality workmanship guaranteed.
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
            Request Free Estimate
          </a>
        </div>
      </section>

      {/* Service Areas */}
      <section className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Serving Amarillo & Surrounding Areas</h2>
        <p className="text-lg mb-4">
          Professional roofing services throughout the Texas Panhandle and West Texas:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing Services</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Commercial Roofing</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roof Repair</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Popular Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/residential-roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Residential Roofing</h3>
            <p className="text-sm text-gray-600">Complete home roofing solutions</p>
          </a>
          <a href="/commercial-roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Commercial Roofing</h3>
            <p className="text-sm text-gray-600">Professional business roofing services</p>
          </a>
          <a href="/hail-damage-repair-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Storm Damage</h3>
            <p className="text-sm text-gray-600">Expert storm and hail damage repair</p>
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
