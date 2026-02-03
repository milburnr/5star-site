import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Damaged Roof Replacement Amarillo TX | 5 Star',
  description: "Professional damaged roof replacement in Amarillo TX. Storm damage, hail damage, and emergency repairs. Insurance claim assistance. Free inspections. Call 5 Star Roofing (806) 622-6041.",
};

export default function Page() {
  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Damaged Roof Replacement",
                      "url": "/damaged-roof-replacement/"
              },
              {
                      "name": "Amarillo",
                      "url": "/damaged-roof-replacement-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/damaged-roof-replacement-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roof Replacement",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/damaged-roof-replacement-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof replacement services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Amarillo",
            "description": "Professional roof replacement services in Amarillo, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Amarillo",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roof Replacement Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />


      <h1 className="text-4xl font-bold mb-6">Damaged Roof Replacement in Amarillo</h1>

      {/* Post Meta */}
      <div className="text-gray-600 mb-6 flex gap-4">
        <time dateTime="2023-12-15">December 15, 2023</time>
        <span>By 5 Star Roofing</span>
      </div>

      {/* Featured Image */}
      <img
        src="/images/damaged-roof-replacement-amarillo.jpg"
        alt="Damaged Roof Replacement in Amarillo"
        className="w-full max-w-2xl h-auto mb-8 rounded-lg shadow-lg"
      />

      {/* Content */}
      <div className="prose max-w-none">
        <p>
          Replacing a damaged roof in Amarillo is a crucial decision that requires careful consideration,
          especially when opting for a professional roof repair service. Whether you need <strong>roof repair</strong>,{" "}
          <strong>restoration</strong>, <strong>renovation</strong>, or <strong>reconstruction</strong>,
          finding a reliable <strong>roof fixing service</strong> in Amarillo should be your top priority.
        </p>

        <p>
          Opting for professional assistance ensures that your damaged roof is replaced using high-quality
          materials that align with your budget and preferences.
        </p>

        <p>
          One of the significant advantages of replacing your damaged roof with modern, energy-efficient
          materials is the improved energy efficiency it brings to your home.
        </p>

        <p>
          This upgrade can result in reduced utility bills, saving you money in the long run. A new roof
          can significantly enhance the curb appeal of your property, instantly increasing its overall value.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Signs Your Roof Needs Replacement</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Age:</strong> Roofs older than 20-25 years often need replacement</li>
          <li><strong>Missing Shingles:</strong> Multiple missing or loose shingles indicate serious problems</li>
          <li><strong>Granule Loss:</strong> Excessive granules in gutters signal shingle deterioration</li>
          <li><strong>Water Damage:</strong> Stains on ceilings or walls indicate leaks</li>
          <li><strong>Sagging:</strong> Visible sagging indicates structural damage</li>
          <li><strong>Daylight Through Roof:</strong> Light visible in attic means holes or gaps</li>
          <li><strong>Storm Damage:</strong> Hail or wind damage may require full replacement</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Repair vs. Replacement: Making the Right Choice</h2>

        <p>
          Not every damaged roof requires complete replacement. Our experts will assess your roof and
          provide honest recommendations:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">When Repair Is Sufficient:</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Isolated damage in small areas</li>
          <li>Roof is less than 15 years old</li>
          <li>Only minor leaks or missing shingles</li>
          <li>Damage limited to flashing or ventilation</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">When Replacement Is Necessary:</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Widespread damage across entire roof</li>
          <li>Multiple leaks in different areas</li>
          <li>Structural damage to roof decking</li>
          <li>Roof approaching or past its expected lifespan</li>
          <li>Repairs would cost more than 50% of replacement</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Benefits of Professional Roof Replacement</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Energy Efficiency:</strong> Modern materials improve insulation and reduce energy costs</li>
          <li><strong>Increased Home Value:</strong> New roof adds significant resale value</li>
          <li><strong>Better Protection:</strong> Advanced materials resist hail, wind, and UV damage</li>
          <li><strong>Warranty Coverage:</strong> Manufacturer and labor warranties protect your investment</li>
          <li><strong>Insurance Discounts:</strong> Impact-resistant materials may qualify for discounts</li>
          <li><strong>Peace of Mind:</strong> No worrying about leaks or storm damage</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Roof Replacement Process</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Free Inspection:</strong> Thorough assessment of your damaged roof</li>
          <li><strong>Detailed Estimate:</strong> Transparent pricing with all costs included</li>
          <li><strong>Material Selection:</strong> Choose from quality, weather-resistant options</li>
          <li><strong>Insurance Coordination:</strong> We handle all claim paperwork</li>
          <li><strong>Professional Installation:</strong> Expert crews with quality workmanship</li>
          <li><strong>Final Inspection:</strong> Ensure everything meets our high standards</li>
          <li><strong>Cleanup:</strong> Complete site cleanup and debris removal</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose 5 Star for Roof Replacement?</h2>

        <p>
          To address any questions or concerns about the damaged roof replacement process, it is highly
          recommended to contact a reputable roofing contractor in Amarillo. We possess the expertise
          and experience needed to handle damaged roof replacements professionally and efficiently.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>10+ years serving Amarillo and the Texas Panhandle</li>
          <li>Licensed, bonded, and fully insured</li>
          <li>Free inspections and detailed estimates</li>
          <li>Quality materials from trusted manufacturers</li>
          <li>Expert insurance claim assistance</li>
          <li>Satisfaction guaranteed</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Serving West Texas and the Panhandle</h2>

        <p>
          5 Star Commercial Roofing provides expert damaged roof replacement services throughout the Texas
          Panhandle and West Texas region. While we're based in <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">Amarillo</a>,
          our experienced team also serves <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Odessa</a>, Lubbock, and surrounding communities.
        </p>

        <p>
          We understand the unique challenges that damaged roofs face in this region, from intense summer heat
          and severe <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">hail storms</a> to
          high winds and rapid temperature fluctuations. Our team has the local knowledge and experience to
          recommend the best roofing solutions for your specific location and climate conditions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Causes of Roof Damage in Amarillo</h2>

        <p>
          Understanding what causes roof damage can help you identify problems early and prevent more extensive
          damage to your home or business.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Hail Damage:</strong> The Texas Panhandle is in "Hail Alley," experiencing frequent severe hailstorms that can damage shingles, create cracks, and compromise roof integrity</li>
          <li><strong>Wind Damage:</strong> High winds can lift and tear shingles, damage flashing, and allow water intrusion</li>
          <li><strong>Age and Weathering:</strong> Years of UV exposure, temperature extremes, and weather cycles gradually deteriorate roofing materials</li>
          <li><strong>Poor Installation:</strong> Improper installation can lead to premature failure and costly repairs</li>
          <li><strong>Lack of Maintenance:</strong> Neglected roofs develop small problems that grow into major issues requiring replacement</li>
          <li><strong>Ice and Snow:</strong> Winter weather can cause ice dams and excessive weight stress on roofing structures</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Roofing Materials for Amarillo Climate</h2>

        <p>
          Choosing the right roofing material is crucial for long-term performance in the harsh Amarillo climate.
          We offer several premium options:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Asphalt Shingles</h3>
        <p>
          The most popular choice for <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">residential roofing</a> in
          Amarillo. Modern architectural shingles offer excellent durability, impact resistance, and value.
          Impact-rated shingles qualify for insurance discounts and provide superior hail protection.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Metal Roofing</h3>
        <p>
          Metal roofs excel in extreme weather conditions, offering 50+ year lifespans with minimal maintenance.
          They reflect heat to reduce cooling costs and provide excellent wind and fire resistance.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">TPO and EPDM (Commercial)</h3>
        <p>
          For <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">commercial properties</a>,
          TPO and EPDM single-ply membranes offer superior performance on flat and low-slope roofs. These systems
          provide excellent weather resistance and energy efficiency.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Insurance Claims for Damaged Roofs</h2>

        <p>
          Most homeowner's insurance policies cover roof damage from storms, hail, wind, and other covered perils.
          Our team has extensive experience working with insurance companies to ensure you receive fair compensation
          for your damaged roof replacement.
        </p>

        <p>
          We provide comprehensive documentation, detailed damage assessments, and direct communication with
          insurance adjusters. Our goal is to make the claims process as smooth as possible while protecting your
          interests and ensuring quality repairs.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Insurance Claim Process:</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Contact us for a free inspection immediately after discovering damage</li>
          <li>We document all damage with photos and detailed reports</li>
          <li>File your claim with your insurance company</li>
          <li>We meet with the insurance adjuster to review damage</li>
          <li>Receive approval and payment from insurance</li>
          <li>We complete your roof replacement with quality materials</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Emergency Services Available</h2>

        <p>
          Roof damage doesn't wait for business hours. That's why we offer 24/7 emergency response for severe
          damage situations. Whether it's a storm-damaged roof allowing water intrusion or structural damage
          from high winds, we can provide immediate temporary repairs to prevent further damage while planning
          your complete roof replacement.
        </p>

        <p>
          Call <strong>(806) 622-6041</strong> anytime for emergency roof services in Amarillo and the surrounding
          Texas Panhandle region.
        </p>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-brand-gold/20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-brand-brown">Need Damaged Roof Replacement in Amarillo?</h2>
        <p className="mb-6 text-gray-700">
          Contact 5 Star Commercial Roofing for a free inspection and honest assessment. We'll help you
          determine whether repair or replacement is the best solution for your damaged roof.
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
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/roof-replacement-in-amarillo/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Roof Replacement</h3>
            <p className="text-sm text-gray-600">Complete roof replacement services in Amarillo</p>
          </a>
          <a href="/roof-repair-services-in-amarillo/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Roof Repair</h3>
            <p className="text-sm text-gray-600">Expert repairs for damaged roofs</p>
          </a>
          <a href="/hail-damage-repair-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Storm Damage</h3>
            <p className="text-sm text-gray-600">Insurance claims and storm damage assessment</p>
          </a>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Damaged Roof Replacement in Amarillo",
            "datePublished": "2023-12-15",
            "dateModified": "2023-12-15",
            "author": {
              "@type": "Organization",
              "name": "5 Star Commercial Roofing"
            },
            "publisher": {
              "@type": "Organization",
              "name": "5 Star Commercial Roofing",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "logo": {
                "@type": "ImageObject",
                "url": "https://5starroofingpros.com/images/5-star-with-letters-1.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://5starroofingpros.com/damaged-roof-replacement-in-amarillo/"
            },
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "telephone": "+18066226041",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2909 S Western St",
                "addressLocality": "Amarillo",
                "addressRegion": "TX",
                "postalCode": "79109",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.1768,
                "longitude": -101.8590
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "84",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            }
          })
        }}
      />
    </div>
  );
}
