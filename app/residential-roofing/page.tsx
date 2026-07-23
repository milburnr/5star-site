import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import { MaterialBrands } from "@/components/MaterialBrands";
import { Check, Trophy, Zap } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/residential-roofing/" },
  title: "Residential Roofing in Amarillo | 5 Star Roofing",
  description: "Residential roofing in Amarillo. Asphalt shingles, metal roofing, and hail damage repair. Call for a free quote! Class 4 hail-rated options. Free inspections available.",
  openGraph: {
    title: "Residential Roofing in Amarillo | 5 Star Roofing",
    description:
      "Residential roofing in Amarillo. Asphalt shingles, metal roofing, and hail damage repair. Call for a free quote!",
    url: "https://5starroofingpros.com/residential-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  // JSON-LD Schema for Service
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Residential Roofing Services",
    provider: {
      "@type": ["LocalBusiness", "RoofingContractor"],
      name: "5 Star Roofing",
      telephone: "(806) 622-6041",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Serving West Texas",
        addressLocality: "Amarillo",
        addressRegion: "TX",
        addressCountry: "US",
      },
      parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Amarillo",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Midland",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Odessa",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Lubbock",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
    ],
    description:
      "Expert residential roofing services in Amarillo and West Texas. Specializing in asphalt shingle installation, metal roofing, hail damage repair, and insurance claim assistance for homeowners.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Asphalt Shingle Roofing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Metal Roofing Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hail Damage Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Replacement",
          },
        },
      ],
    },
  };

  return (
    <>
      <InteriorHeroSection
        heroVariant="service"
        service="Residential Roofing"
        h1="Residential Roofing in West Texas"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential.jpg"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Residential Roofing", url: "/residential-roofing/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Residential Roofing across the Texas Panhandle and West Texas, including Amarillo, Lubbock, Midland, and Odessa.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Approach: every job uses material and labor warranties so the workmanship is protected, not just the manufacturer&apos;s product.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Service area: based in Amarillo since 2014, serving 25+ Panhandle and West Texas cities.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Residential Roofing Services in Amarillo
      </h2>
      {/* Hero Image — decorative residential roofing hero */}
      
      <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-brand-brown mb-4">
          Protecting West Texas Homes for Over 10 Years
        </h2>
        <p className="text-lg">
          Your home is your biggest investment. At 5 Star Commercial Roofing, we provide Amarillo,
          Midland, and Odessa homeowners with high-quality residential roofing services,
          specializing in{" "}
          <a
            href="/hail-damage-repair-amarillo/"
            className="text-brand-brown hover:text-brand-gold underline font-semibold"
          >
            hail damage repair
          </a>{" "}
          and insurance claim assistance. The Texas Panhandle experiences 8-12 hailstorms
          annually—trust our expertise to protect your home with{" "}
          <a
            href="/asphalt-shingle-roofing-amarillo/"
            className="text-brand-brown hover:text-brand-gold underline font-semibold"
          >
            Class 4 impact-resistant shingles
          </a>
          . View our complete{" "}
          <a
            href="/amarillo-homes-roofing-services/"
            className="text-brand-brown hover:text-brand-gold underline font-semibold"
          >
            Amarillo homes roofing services
          </a>{" "}
          for local options.
        </p>
      </div>
      {/* Phase 12 Stream C (12.15): residential material brand strip */}
      <div className="-mx-4 md:-mx-8 mb-8">
        <MaterialBrands variant="residential" />
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Residential Roofing Systems</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1} direction="left">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img
              src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-midland-1-1280w.jpg"
              alt="Class 4 impact-resistant asphalt shingles on Amarillo home - Architectural style residential roofing - 5 Star Commercial Roofing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Asphalt Shingles</h3>
              <p className="mb-3">
                The most popular roofing choice for Amarillo homes.{" "}
                <a
                  href="/asphalt-shingle-roofing-amarillo/"
                  className="text-brand-brown hover:text-brand-gold underline"
                >
                  Modern impact-resistant shingles
                </a>
                provide excellent hail protection while maintaining curb appeal. Learn more about
                our{" "}
                <a
                  href="/roofing-methods/"
                  className="text-brand-brown hover:text-brand-gold underline"
                >
                  installation methods
                </a>
                .
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
              src="/images/materials/standing-seam-metal.jpg"
              alt="Close-up of gray standing seam metal roof panels with raised vertical seams &mdash; hail-resistant residential roofing by 5 Star Roofing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Metal Roofing</h3>
              <p className="mb-3">
                Superior durability and hail resistance. Metal roofing stands up to West Texas
                weather better than any other residential roofing material.
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

        <FadeIn delay={0.3} direction="right">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img
              src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/TPO1-1280w.webp"
              alt="Modern flat roof system on contemporary Amarillo home - TPO membrane residential roofing - 5 Star Commercial Roofing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Flat Roof Systems</h3>
              <p className="mb-3">
                Modern homes with flat or low-slope sections require specialized roofing systems. We
                install TPO, PVC, and modified bitumen for residential flat roofs.
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

      {/* auto-link:pass-2 */}
      <aside className="container-custom mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Residential Roofing by City</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/residential-roofing-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Amarillo residential roofing</a></li>
            <li><a href="/residential-roofing-lubbock/" className="text-brand-brown hover:text-brand-gold underline">Lubbock residential roofing</a></li>
            <li><a href="/residential-roofing-midland/" className="text-brand-brown hover:text-brand-gold underline">Midland residential roofing</a></li>
            <li><a href="/residential-roofing-odessa/" className="text-brand-brown hover:text-brand-gold underline">Odessa residential roofing</a></li>
            <li><a href="/residential-roofing-canyon/" className="text-brand-brown hover:text-brand-gold underline">Canyon residential roofing</a></li>
            <li><a href="/residential-roofing-borger/" className="text-brand-brown hover:text-brand-gold underline">Borger residential roofing</a></li>
            <li><a href="/residential-roofing-pampa/" className="text-brand-brown hover:text-brand-gold underline">Pampa residential roofing</a></li>
            <li><a href="/residential-roofing-dumas/" className="text-brand-brown hover:text-brand-gold underline">Dumas residential roofing</a></li>
          </ul>
        </div>
      </aside>
      {/* /auto-link */}
      <aside className="container-custom mt-2 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Homeowner Roofing Guides</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/blog/roof-vent/" className="text-brand-brown hover:text-brand-gold underline">Roof vents &amp; attic ventilation explained</a></li>
            <li><a href="/blog/3-tab-shingles/" className="text-brand-brown hover:text-brand-gold underline">3-tab shingles: what homeowners should know</a></li>
            <li><a href="/blog/standing-seam-metal-roof-cost-canyon/" className="text-brand-brown hover:text-brand-gold underline">Standing seam metal roof cost in Canyon, TX</a></li>
          </ul>
        </div>
      </aside>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Hail Damage? We Can Help</h2>
      <p className="mb-4">
        Amarillo and the Texas Panhandle sit in Hail Alley, and once granules are stripped or
        shingles are bruised, water can work its way to the decking and into ceilings. We document
        the damage with photos and measurements that State Farm, Allstate, USAA, and Texas Farm
        Bureau adjusters work from. Our hail damage services include:
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-2">Free Inspection</h3>
          <p className="text-gray-600 mb-4">
            A roof-level walk of every slope, photos of granule loss and bruising, hail-size
            reference shots, and chalked test squares. The report is delivered before the adjuster
            meeting so State Farm, USAA, or Texas Farm Bureau has the documentation they need to
            scope the claim.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Insurance Claim Assistance</h3>
          <p className="text-gray-600 mb-4">
            We meet the adjuster on site, walk the roof together, and submit supplements when scope
            is missed. We work claims regularly with State Farm, Allstate, USAA, Farmers, and Texas
            Farm Bureau so you receive the coverage your policy actually allows.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Quality Repairs</h3>
          <p className="text-gray-600 mb-4">
            We restore your roof to pre-storm condition using Class 4 impact-rated asphalt shingles
            from GAF, CertainTeed, or Owens Corning, with new synthetic underlayment, ice-and-water
            shield at the eaves, and full re-flashing around penetrations.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Warranty Protection</h3>
          <p className="text-gray-600 mb-4">
            All repairs and replacements come with comprehensive warranties covering both materials
            and workmanship.
          </p>
        </div>
      </div>
      {/* Before/After Residential Examples */}
      <h3 className="text-xl font-bold mt-12 mb-6">Residential Roof Transformations</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 bg-gray-200">
            <img
              src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-odessa-5-1280w.jpg"
              alt="Amarillo home before roof replacement - Old weathered shingles affecting curb appeal - 5 Star Commercial Roofing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h4 className="font-bold mb-2 text-sm">Aged Roof Replacement</h4>
            <p className="text-xs text-gray-600">
              Beautiful architectural shingles enhance home value
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 bg-gray-200">
            <img
              src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-perryton-6-1280w.jpg"
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
              src="/images/materials/standing-seam-metal.jpg"
              alt="Premium standing seam metal roof installed on a Texas home &mdash; 5 Star Roofing"
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
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>
          <div>
            <h3 className="font-bold mb-1">Free Inspection & Estimate</h3>
            <p className="text-gray-600">
              We walk every slope, photograph granule loss and bruising, check attic ventilation,
              and write up a no-obligation estimate with line-item pricing for materials and labor.
              Schedule your{" "}
              <a
                href="/roof-inspections-amarillo/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                free roof inspection
              </a>{" "}
              in Amarillo, Canyon, or anywhere across the Texas Panhandle.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
            2
          </div>
          <div>
            <h3 className="font-bold mb-1">Insurance Coordination</h3>
            <p className="text-gray-600">
              If filing a claim, we work with your adjuster to document damage and maximize
              coverage. Learn more about our{" "}
              <a
                href="/hail-damage-repair-amarillo/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                insurance claim assistance
              </a>{" "}
              process.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
            3
          </div>
          <div>
            <h3 className="font-bold mb-1">Material Selection</h3>
            <p className="text-gray-600">
              Pick from architectural asphalt shingles, Class 4 impact-rated shingles, standing
              seam metal, or R-panel metal in colors that match your neighborhood. We carry GAF,
              CertainTeed, and Owens Corning lines so you can compare warranties and price points.
              Explore our{" "}
              <a href="/services/" className="text-brand-brown hover:text-brand-gold underline">
                complete roofing services
              </a>{" "}
              and materials.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
            4
          </div>
          <div>
            <h3 className="font-bold mb-1">Professional Installation</h3>
            <img
              src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-amarillo-12-1280w.jpg"
              alt="Professional roofing crew installing residential shingles in Amarillo TX at sunset"
              className="w-full h-64 object-cover rounded-lg my-4"
              loading="lazy"
            />
            <p className="text-gray-600">
              Tear-off, deck inspection, ice-and-water shield at eaves and valleys, synthetic
              underlayment, then shingles or metal panels installed to the GAF, CertainTeed, or
              Owens Corning spec. Crews work the roof in sections so the home stays dry if weather
              turns. See our{" "}
              <a
                href="/roofing-methods/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                proven installation methods
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
            5
          </div>
          <div>
            <h3 className="font-bold mb-1">Final Inspection & Cleanup</h3>
            <p className="text-gray-600">
              Final walk of every slope, magnetic nail sweep around the foundation and driveway,
              gutter debris cleared, and warranty paperwork registered with the manufacturer. Every
              project carries written workmanship coverage from 5 Star plus the GAF, CertainTeed,
              or Owens Corning material warranty.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-4">Serving Amarillo Neighborhoods & Beyond</h2>
      <p className="mb-4">
        We proudly serve homeowners throughout Amarillo and the surrounding Texas Panhandle region.
        Our local roofing crews are familiar with the unique challenges each neighborhood faces,
        from wind exposure to hail patterns.
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
            <li>
              •{" "}
              <a href="/canyon-texas-roofing/" className="hover:text-brand-gold underline">
                Canyon roofing
              </a>
            </li>
            <li>
              •{" "}
              <a href="/bushland-tx-roofing/" className="hover:text-brand-gold underline">
                Bushland roofing
              </a>
            </li>
            <li>
              •{" "}
              <a href="/claude-tx-roofing/" className="hover:text-brand-gold underline">
                Claude roofing
              </a>
            </li>
            <li>
              •{" "}
              <a href="/wildorado-tx-roofing/" className="hover:text-brand-gold underline">
                Wildorado roofing
              </a>
            </li>
            <li>
              •{" "}
              <a href="/vega-tx-roofing/" className="hover:text-brand-gold underline">
                Vega roofing
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-brand-brown mb-2">Regional Service</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              •{" "}
              <a href="/midland-tx-roofing/" className="hover:text-brand-gold underline">
                Midland roofing
              </a>
            </li>
            <li>
              •{" "}
              <a href="/odessa-tx-roofing/" className="hover:text-brand-gold underline">
                Odessa roofing
              </a>
            </li>
            <li>
              •{" "}
              <a href="/lubbock-tx-roofing/" className="hover:text-brand-gold underline">
                Lubbock roofing
              </a>
            </li>
            <li>
              •{" "}
              <a href="/service-areas/" className="hover:text-brand-gold underline">
                View all areas
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-4">Comprehensive Warranty Protection</h2>
      <p className="mb-4">
        Every residential project includes two layers of coverage. The manufacturer covers the
        materials, with GAF, CertainTeed, Owens Corning, and IKO warranties running 20 to 50 years
        depending on the shingle line you choose. We cover the workmanship, with a written labor
        warranty registered to your address at project closeout.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-gold-light p-6 rounded-lg">
          <h3 className="text-xl font-bold text-brand-brown mb-3">Manufacturer Warranties</h3>
          <p className="mb-3">
            All roofing materials come with manufacturer warranties ranging from 20 to 50 years,
            depending on the product selected. We only use premium materials from trusted
            manufacturers like:
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
            Our labor warranty covers everything our crew touches on your home. If a leak or
            install defect traces back to our work, we come back and make it right at no cost. The
            warranty applies to the install details that matter most on Texas Panhandle roofs:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Step flashing, valley flashing, and ridge ventilation</li>
            <li>Shingle alignment and six-nail pattern for High Plains wind</li>
            <li>Leak-free roof penetrations around plumbing vents and HVAC curbs</li>
            <li>Magnetic-sweep cleanup and full debris haul-off</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-4">Why Amarillo Homeowners Choose 5 Star</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <div className="text-4xl mb-3">
            <Trophy className="w-6 h-6 inline-block" />
          </div>
          <h3 className="font-bold mb-2 text-brand-brown">Class 4 Hail-Rated</h3>
          <p className="text-sm text-gray-600">
            UL 2218 impact-resistant shingles — the highest rating available, qualifying most
            homeowners for insurance discounts
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <div className="text-4xl mb-3">
            <Zap className="w-6 h-6 inline-block" />
          </div>
          <h3 className="font-bold mb-2 text-brand-brown">Hail Alley Specialists</h3>
          <p className="text-sm text-gray-600">
            Based in Amarillo — we install for the climate we live in, not the one a storm-chaser
            crew drove in for
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <div className="text-4xl mb-3">
            <Check className="w-5 h-5 text-brand-gold inline-block" />
          </div>
          <h3 className="font-bold mb-2 text-brand-brown">95%+ Insurance Approval</h3>
          <p className="text-sm text-gray-600">
            Expert claim documentation and adjuster coordination
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            How long does a residential roof installation take?
          </h3>
          <p className="text-gray-700">
            Most residential asphalt shingle roofs can be completed in 1-2 days, weather permitting.
            Larger homes or complex roof designs may take 3-4 days. Metal roofing installations
            typically take 2-3 days. We'll provide a specific timeline during your free estimate.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Will my insurance cover hail damage roof repair?
          </h3>
          <p className="text-gray-700">
            In most cases, yes! If your roof was damaged by hail within the past 2-3 years, your
            homeowner's insurance policy typically covers the replacement cost minus your
            deductible. We provide detailed documentation including photos, measurements, and damage
            reports to support your claim. Read our{" "}
            <a
              href="/blog/how-to-file-hail-damage-insurance-claim/"
              className="text-brand-brown hover:text-brand-gold underline"
            >
              guide on filing hail damage claims
            </a>
            .
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            What are Class 4 impact-resistant shingles?
          </h3>
          <p className="text-gray-700">
            Class 4 (UL 2218 rated) shingles are the highest impact-resistance rating available.
            These shingles are designed to withstand hail up to 2 inches in diameter. Many insurance
            companies offer premium discounts (10-35%) for homes with Class 4 roofs. Given
            Amarillo's frequent hail storms, we strongly recommend impact-resistant shingles for all
            residential installations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            How much does a new residential roof cost in Amarillo?
          </h3>
          <p className="text-gray-700">
            The cost varies based on roof size, pitch, material selection, and complexity. On
            average, Amarillo homeowners can expect to pay $8,000-$15,000 for asphalt shingle
            replacement on a typical 2,000 sq ft home. Metal roofing ranges from $12,000-$25,000.
            Read our guide on{" "}
            <a
              href="/budgeting-for-roof-replacement-expenses/"
              className="text-brand-brown hover:text-brand-gold underline"
            >
              budgeting for roof replacement expenses
            </a>{" "}
            or check out our detailed{" "}
            <a
              href="/blog/roof-replacement-cost-texas-2025/"
              className="text-brand-brown hover:text-brand-gold underline"
            >
              2025 roofing cost guide
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
      {/* Residential Roofing by City */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Residential Roofing by City</h2>
        <p className="text-gray-600 mb-6">
          We provide expert residential roofing services across 14 cities in the Texas Panhandle and
          Permian Basin. Select your city for local service details:
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: "Amarillo", slug: "amarillo" },
            { name: "Andrews", slug: "andrews" },
            { name: "Big Spring", slug: "big-spring" },
            { name: "Borger", slug: "borger" },
            { name: "Canyon", slug: "canyon" },
            { name: "Dumas", slug: "dumas" },
            { name: "Levelland", slug: "levelland" },
            { name: "Lubbock", slug: "lubbock" },
            { name: "Midland", slug: "midland" },
            { name: "Monahans", slug: "monahans" },
            { name: "Odessa", slug: "odessa" },
            { name: "Pampa", slug: "pampa" },
            { name: "Perryton", slug: "perryton" },
            { name: "Snyder", slug: "snyder" },
          ].map((city) => (
            <a
              key={city.slug}
              href={`/residential-roofing-${city.slug}/`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
            >
              <span className="font-semibold text-brand-brown">
                Residential Roofing in {city.name}
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">
          Contact 5 Star Commercial Roofing for a free inspection and estimate. We're here to help
          Amarillo homeowners and businesses with all their roofing needs.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="tel:8066226041"
            className="btn-primary bg-white text-brand-brown hover:bg-gray-100"
          >
            Call (806) 622-6041
          </a>
          <a
            href="/contact/"
            className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown"
          >
            Request Free Inspection
          </a>
        </div>
      </section>
      <RelatedArticles pageSlug="residential-roofing" />
      </div>
    </>
  );
}
