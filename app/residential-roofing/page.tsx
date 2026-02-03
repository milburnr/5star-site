import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import { OptimizedImage } from "@/components/OptimizedImage";

export const metadata: Metadata = {
  title: 'Residential Roofing in Amarillo | 5 Star',
  description: 'residential roofing in Amarillo. Asphalt shingles, metal roofing, and hail damage repair. Call for a free quote!',
};

export default function Page() {
  // JSON-LD Schema for Service
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Roofing Services",
    "provider": {
      "@type": "RoofingContractor",
      "name": "5 Star Commercial Roofing",
      "telephone": "+1-806-622-6041",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Serving West Texas",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Amarillo",
        "address": { "@type": "PostalAddress", "addressRegion": "TX" }
      },
      {
        "@type": "City",
        "name": "Midland",
        "address": { "@type": "PostalAddress", "addressRegion": "TX" }
      },
      {
        "@type": "City",
        "name": "Odessa",
        "address": { "@type": "PostalAddress", "addressRegion": "TX" }
      },
      {
        "@type": "City",
        "name": "Lubbock",
        "address": { "@type": "PostalAddress", "addressRegion": "TX" }
      }
    ],
    "description": "Expert residential roofing services in Amarillo and West Texas. Specializing in asphalt shingle installation, metal roofing, hail damage repair, and insurance claim assistance for homeowners.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Residential Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asphalt Shingle Roofing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metal Roofing Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hail Damage Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Replacement"
          }
        }
      ]
    }
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Residential Roofing",
                      "url": "/residential-roofing/"
              }
      ]} />


      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Residential Roofing Services in Amarillo</h1>

      {/* Hero Image */}
      <OptimizedImage
        src="/images/cover-background-roofing-sunset"
        alt="Residential roofing services Amarillo Texas - Professional crew installing architectural shingles at sunset - 5 Star Commercial Roofing"
        className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg mb-6 md:mb-8"
        priority={true}
        sizes="100vw"
      />

      <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-brand-brown mb-4">Protecting West Texas Homes for Over 10 Years</h2>
        <p className="text-lg">
          Your home is your biggest investment. At 5 Star Commercial Roofing, we provide Amarillo, Midland, and Odessa homeowners
          with high-quality residential roofing services, specializing in <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline font-semibold">hail damage repair</a> and insurance
          claim assistance. The Texas Panhandle experiences 8-12 hailstorms annually—trust our expertise to protect your home with <a href="/asphalt-roofing-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline font-semibold">Class 4 impact-resistant shingles</a>.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Residential Roofing Systems</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1} direction="left">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img
              src="/images/ResidentialServices.jpg"
              alt="Class 4 impact-resistant asphalt shingles on Amarillo home - Architectural style residential roofing - 5 Star Commercial Roofing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Asphalt Shingles</h3>
              <p className="mb-3">
                The most popular roofing choice for Amarillo homes. <a href="/asphalt-roofing-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Modern impact-resistant shingles</a>
                provide excellent hail protection while maintaining curb appeal. Learn more about our <a href="/roofing-methods/" className="text-brand-brown hover:text-brand-gold underline">installation methods</a>.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>3-tab and architectural styles</li>
                <li>UL 2218 Class 4 impact-resistant rating</li>
                <li>Wide range of colors</li>
                <li>20-50 year warranties</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="right">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img
              src="/images/ResidentialServices.jpg"
              alt="Standing seam metal roofing on Texas Panhandle home - Durable hail-resistant residential roof - 5 Star Commercial Roofing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Metal Roofing</h3>
              <p className="mb-3">
                Superior durability and hail resistance. Metal roofing stands up to West Texas weather
                better than any other residential roofing material.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Standing seam and metal shingle styles</li>
                <li>Excellent hail resistance</li>
                <li>Energy-efficient reflective coatings</li>
                <li>40-70 year lifespan</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="left">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img
              src="/images/ResidentialServices.jpg"
              alt="Concrete tile roofing on Amarillo Mediterranean-style home - Premium residential roof - 5 Star Commercial Roofing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Tile Roofing</h3>
              <p className="mb-3">
                Concrete and clay tiles offer distinctive style and exceptional durability.
                Perfect for Mediterranean and Spanish-style homes.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Concrete and clay options</li>
                <li>Superior hail resistance</li>
                <li>Fire-resistant</li>
                <li>50+ year lifespan</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} direction="right">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img
              src="/images/TPO2.jpg"
              alt="Modern flat roof system on contemporary Amarillo home - TPO membrane residential roofing - 5 Star Commercial Roofing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Flat Roof Systems</h3>
              <p className="mb-3">
                Modern homes with flat or low-slope sections require specialized roofing systems.
                We install TPO, PVC, and modified bitumen for residential flat roofs.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>TPO and PVC membranes</li>
                <li>Modified bitumen</li>
                <li>Proper drainage design</li>
                <li>15-25 year lifespan</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Hail Damage? We Can Help</h2>
      <p className="mb-4">
        If your roof was damaged in a recent storm, don't wait. Water intrusion can lead to
        expensive interior damage. Our hail damage services include:
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-2">Free Inspection</h3>
          <p className="text-gray-600 mb-4">
            We'll conduct a thorough roof inspection and provide detailed documentation of all damage—
            complete with photos and measurements that insurance adjusters need.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Insurance Claim Assistance</h3>
          <p className="text-gray-600 mb-4">
            We work directly with your insurance company to ensure your claim is processed correctly
            and you receive the full coverage you're entitled to.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Quality Repairs</h3>
          <p className="text-gray-600 mb-4">
            Our experienced team will restore your roof to pre-storm condition using high-quality
            materials and proven installation methods.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Warranty Protection</h3>
          <p className="text-gray-600 mb-4">
            All repairs and replacements come with comprehensive warranties covering both
            materials and workmanship.
          </p>
        </div>
      </div>

      {/* Before/After Residential Examples */}
      <h3 className="text-xl font-bold mt-12 mb-6">Residential Roof Transformations</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 bg-gray-200">
            <img
              src="/images/danage.jpg"
              alt="Amarillo home before roof replacement - Old weathered shingles affecting curb appeal - 5 Star Commercial Roofing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h4 className="font-bold mb-2 text-sm">Aged Roof Replacement</h4>
            <p className="text-xs text-gray-600">Beautiful architectural shingles enhance home value</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 bg-gray-200">
            <img
              src="/images/hail-damage-3.jpg"
              alt="Amarillo home roof before hail damage repair - Insurance claim documentation - 5 Star Commercial Roofing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h4 className="font-bold mb-2 text-sm">Hail Damage Repair</h4>
            <p className="text-xs text-gray-600">Class 4 impact-resistant shingles installed</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 bg-gray-200">
            <img
              src="/images/Alluminumroofing.jpg"
              alt="Texas home before metal roof upgrade - Transitioning from shingles to metal - 5 Star Commercial Roofing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h4 className="font-bold mb-2 text-sm">Metal Roof Upgrade</h4>
            <p className="text-xs text-gray-600">Premium standing seam metal roofing installed</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Residential Roofing Process</h2>
      <div className="space-y-4 mb-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">1</div>
          <div>
            <h3 className="font-bold mb-1">Free Inspection & Estimate</h3>
            <p className="text-gray-600">We assess your roof condition and provide a detailed, no-obligation estimate. Schedule your <a href="/roof-inspections-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">free roof inspection</a> today.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">2</div>
          <div>
            <h3 className="font-bold mb-1">Insurance Coordination</h3>
            <p className="text-gray-600">If filing a claim, we work with your adjuster to document damage and maximize coverage. Learn more about our <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">insurance claim assistance</a> process.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">3</div>
          <div>
            <h3 className="font-bold mb-1">Material Selection</h3>
            <p className="text-gray-600">Choose from our wide selection of colors and styles that fit your home and budget. Explore our <a href="/services/" className="text-brand-brown hover:text-brand-gold underline">complete roofing services</a> and materials.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">4</div>
          <div>
            <h3 className="font-bold mb-1">Professional Installation</h3>
            <OptimizedImage
        src="/images/cover-background-roofing-sunset"
        alt="Professional roofing crew installing residential shingles in Amarillo TX at sunset"
        className="w-full h-64 object-cover rounded-lg my-4"
        priority={true}
        sizes="100vw"
      />
            <p className="text-gray-600">Our experienced crew completes your roof efficiently with attention to detail and quality. We follow manufacturer specifications and use <a href="/roofing-methods/" className="text-brand-brown hover:text-brand-gold underline">proven installation methods</a>.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">5</div>
          <div>
            <h3 className="font-bold mb-1">Final Inspection & Cleanup</h3>
            <p className="text-gray-600">We inspect our work, clean up thoroughly, and ensure you're 100% satisfied. Every project includes a comprehensive warranty for your peace of mind.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Serving Amarillo Neighborhoods & Beyond</h2>
      <p className="mb-4">
        We proudly serve homeowners throughout Amarillo and the surrounding Texas Panhandle region. Our local roofing crews are familiar with the unique challenges each neighborhood faces, from wind exposure to hail patterns.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Amarillo Areas</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Wolflin neighborhood</li>
            <li>• Sleepy Hollow</li>
            <li>• Tascosa area</li>
            <li>• San Jacinto Heights</li>
            <li>• Paramount Terrace</li>
            <li>• Olsen Park area</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Nearby Cities</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <a href="/canyon-tx-roofing/" className="hover:text-brand-gold underline">Canyon roofing</a></li>
            <li>• <a href="/bushland-tx-roofing/" className="hover:text-brand-gold underline">Bushland roofing</a></li>
            <li>• <a href="/claude-tx-roofing/" className="hover:text-brand-gold underline">Claude roofing</a></li>
            <li>• <a href="/wildorado-tx-roofing/" className="hover:text-brand-gold underline">Wildorado roofing</a></li>
            <li>• <a href="/vega-tx-roofing/" className="hover:text-brand-gold underline">Vega roofing</a></li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Regional Service</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <a href="/midland-tx-roofing/" className="hover:text-brand-gold underline">Midland roofing</a></li>
            <li>• <a href="/odessa-tx-roofing/" className="hover:text-brand-gold underline">Odessa roofing</a></li>
            <li>• <a href="/lubbock-tx-roofing/" className="hover:text-brand-gold underline">Lubbock roofing</a></li>
            <li>• <a href="/service-areas/" className="hover:text-brand-gold underline">View all areas</a></li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Comprehensive Warranty Protection</h2>
      <p className="mb-4">
        Every residential roofing project from 5 Star Commercial Roofing includes industry-leading warranty coverage to protect your investment:
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-gold-light p-6 rounded-lg">
          <h3 className="text-xl font-bold text-brand-brown mb-3">Manufacturer Warranties</h3>
          <p className="mb-3">
            All roofing materials come with manufacturer warranties ranging from 20 to 50 years, depending on the product selected. We only use premium materials from trusted manufacturers like:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Owens Corning - Duration Series shingles</li>
            <li>GAF - Timberline HDZ series</li>
            <li>CertainTeed - Landmark series</li>
            <li>IKO - Nordic series (impact-resistant)</li>
          </ul>
        </div>
        <div className="bg-brand-gold-light p-6 rounded-lg">
          <h3 className="text-xl font-bold text-brand-brown mb-3">Workmanship Guarantee</h3>
          <p className="mb-3">
            Our labor warranty covers installation quality and craftsmanship. If any issues arise due to installation errors, we'll make it right at no cost to you. This includes:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Proper flashing and ventilation</li>
            <li>Correct shingle alignment and nailing</li>
            <li>Leak-free roof penetrations</li>
            <li>Complete cleanup and disposal</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Why Amarillo Homeowners Choose 5 Star</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="font-bold mb-2 text-brand-brown">10+ Years Experience</h3>
          <p className="text-sm text-gray-600">Hundreds of satisfied homeowners across West Texas</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="font-bold mb-2 text-brand-brown">24/7 Emergency Service</h3>
          <p className="text-sm text-gray-600">Storm damage? We respond quickly to protect your home</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <div className="text-4xl mb-3">✓</div>
          <h3 className="font-bold mb-2 text-brand-brown">95%+ Insurance Approval</h3>
          <p className="text-sm text-gray-600">Expert claim documentation and adjuster coordination</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">How long does a residential roof installation take?</h3>
          <p className="text-gray-700">
            Most residential asphalt shingle roofs can be completed in 1-2 days, weather permitting. Larger homes or complex roof designs may take 3-4 days. Metal roofing installations typically take 2-3 days. We'll provide a specific timeline during your free estimate.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">Will my insurance cover hail damage roof repair?</h3>
          <p className="text-gray-700">
            In most cases, yes! If your roof was damaged by hail within the past 2-3 years, your homeowner's insurance policy typically covers the replacement cost minus your deductible. We provide detailed documentation including photos, measurements, and damage reports to support your claim. Read our <a href="/blog/how-to-file-hail-damage-insurance-claim/" className="text-brand-brown hover:text-brand-gold underline">guide on filing hail damage claims</a>.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">What are Class 4 impact-resistant shingles?</h3>
          <p className="text-gray-700">
            Class 4 (UL 2218 rated) shingles are the highest impact-resistance rating available. These shingles are designed to withstand hail up to 2 inches in diameter. Many insurance companies offer premium discounts (10-35%) for homes with Class 4 roofs. Given Amarillo's frequent hail storms, we strongly recommend impact-resistant shingles for all residential installations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">How much does a new residential roof cost in Amarillo?</h3>
          <p className="text-gray-700">
            The cost varies based on roof size, pitch, material selection, and complexity. On average, Amarillo homeowners can expect to pay $8,000-$15,000 for asphalt shingle replacement on a typical 2,000 sq ft home. Metal roofing ranges from $12,000-$25,000. Check out our detailed <a href="/blog/roof-replacement-cost-texas-2025/" className="text-brand-brown hover:text-brand-gold underline">2025 roofing cost guide</a> for more information.
          </p>
        </div>
      </div>
    

      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">
          Contact 5 Star Commercial Roofing for a free inspection and estimate.
          We're here to help Amarillo homeowners and businesses with all their roofing needs.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="tel:8066226041" className="btn-primary bg-white text-brand-brown hover:bg-gray-100">
            Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown">
            Request Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
