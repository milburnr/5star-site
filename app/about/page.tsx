import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import { ClipboardList, Home, Target, Zap } from "lucide-react";
import { ReviewsSection } from "@/components/page-sections/ReviewsSection";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/about/" },
  title: "About 5 Star Roofing | West Texas Roofers",
  description:
    "Over 10 years serving Amarillo, Midland, Odessa and West Texas. Call for a free quote!",
  openGraph: {
    title: "About 5 Star Roofing | West Texas Roofers",
    description:
      "Over 10 years serving Amarillo, Midland, Odessa and West Texas. Call for a free quote!",
    url: "https://5starroofingpros.com/about/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/services-hero.jpg",
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
  // JSON-LD Schema for Organization
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "5 Star Roofing",
    alternateName: "5 Star Roofing",
    url: "https://5starroofingpros.com",
    logo: "https://5starroofingpros.com/logo.png",
    telephone: "(806) 622-6041",
    email: "admin@5starroofingpros.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Serving West Texas",
      addressLocality: "Amarillo",
      addressRegion: "TX",
      postalCode: "79101",
      addressCountry: "US",
    },
    description:
      "Licensed and insured roofing contractor serving Amarillo, Midland, Odessa, and West Texas serving the Texas Panhandle. Specializing in hail damage repair, storm restoration, and insurance claim assistance.",
    foundingDate: "2014",
    areaServed: [
      "Amarillo, TX",
      "Midland, TX",
      "Odessa, TX",
      "Lubbock, TX",
      "Texas Panhandle",
      "West Texas",
    ],
    knowsAbout: [
      "Hail Damage Repair",
      "Commercial Roofing",
      "Residential Roofing",
      "Storm Damage Restoration",
      "Insurance Claims",
      "TPO Roofing",
      "PVC Roofing",
      "Metal Roofing",
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Person Schema - Business Owner */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Owner",
            jobTitle: "Owner",
            worksFor: {
              "@type": "Organization",
              name: "5 Star Roofing",
              "@id": "https://5starroofingpros.com/#organization",
            },
            knowsAbout: [
              "Roofing",
              "Commercial Roofing",
              "Residential Roofing",
              "Storm Damage Repair",
            ],
          }),
        }}
      />
      <InteriorHeroSection
        heroVariant="service"
        service="About Us"
        h1="About 5 Star Commercial Roofing"
        image="/images/heroes/cities/amarillo-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about/" },
        ]}
      />
    <div className="container-custom py-12">
      {/* Stats Section */}
      <FadeIn delay={0.3}>
        <section className="mb-16 py-12 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.15),transparent_40%)]"></div>
          <div className="relative z-10 grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="p-3 md:p-6">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-1 md:mb-2">
                Class 4
              </div>
              <div className="text-sm sm:text-base md:text-xl font-semibold text-brand-brown">
                Hail-Rated
              </div>
              <p className="text-gray-600 mt-1 md:mt-2 text-xs sm:text-sm md:text-base hidden sm:block">
                UL 2218 Impact-Resistant
              </p>
            </div>
            <div className="p-3 md:p-6">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-1 md:mb-2">
                Free
              </div>
              <div className="text-sm sm:text-base md:text-xl font-semibold text-brand-brown">
                Roof Inspections
              </div>
              <p className="text-gray-600 mt-1 md:mt-2 text-xs sm:text-sm md:text-base hidden sm:block">
                No-Obligation Assessment
              </p>
            </div>
            <div className="p-3 md:p-6">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-1 md:mb-2">
                Since 2014
              </div>
              <div className="text-sm sm:text-base md:text-xl font-semibold text-brand-brown">
                Texas Panhandle
              </div>
              <p className="text-gray-600 mt-1 md:mt-2 text-xs sm:text-sm md:text-base hidden sm:block">
                Headquartered in Amarillo
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
      <div className="prose max-w-none">
        <FadeIn delay={0.4}>
          <div className="bg-gradient-to-br from-brand-gold-light to-amber-100 p-10 rounded-2xl mb-12 shadow-lg border border-brand-gold/20">
            <h2 className="text-3xl font-bold text-brand-brown mb-4">
              West Texas Hail Damage Specialists
            </h2>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              For over 10 years, 5 Star Commercial Roofing has been the trusted partner for{" "}
              <a
                href="/hail-damage-repair-amarillo/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                hail damage repair
              </a>
              and storm damage restoration throughout{" "}
              <a
                href="/amarillo-tx-roofing/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                Amarillo
              </a>
              ,{" "}
              <a
                href="/midland-tx-roofing/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                Midland
              </a>
              ,{" "}
              <a
                href="/odessa-tx-roofing/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                Odessa
              </a>
              , and the entire Texas Panhandle. We understand the unique challenges that West Texas
              weather brings to your roof.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the frequent hailstorms that batter the Panhandle (8-12 annually) to the intense
              weather patterns affecting the Permian Basin, our teams have seen it all and know how
              to protect your investment with expert repairs and Class 4 impact-resistant{" "}
              <a
                href="/residential-roofing/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                residential
              </a>{" "}
              and{" "}
              <a
                href="/commercial-roofing/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                commercial roofing systems
              </a>
              .
            </p>
          </div>
        </FadeIn>

        <h2 className="text-3xl font-bold mt-12 mb-8 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">
          Why Choose 5 Star?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <FadeIn delay={0.1} direction="left">
            <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h3 className="text-2xl font-semibold text-brand-brown mb-4 flex items-center gap-3">
                <span className="text-3xl">
                  <Target className="w-6 h-6 inline-block" />
                </span>{" "}
                Hail Damage Experts
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We work hail damage every spring across the Texas Panhandle, where Amarillo sits
                squarely in Hail Alley. Our crews know what State Farm, Allstate, USAA, Farmers,
                and Texas Farm Bureau adjusters look for on UL 2218 Class 4 impact-rated shingles
                and how to document a damage map that supports the claim.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h3 className="text-2xl font-semibold text-brand-brown mb-4 flex items-center gap-3">
                <span className="text-3xl">
                  <ClipboardList className="w-6 h-6 inline-block" />
                </span>{" "}
                Insurance Claim Help
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We work directly with State Farm, Allstate, USAA, Farmers, and Texas Farm Bureau
                to make sure the scope of loss reflects the actual damage on the roof. From the
                first free inspection in Amarillo or Lubbock through final payment approval, we
                handle the photo packets, scope sheets, and adjuster meetings on your behalf.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="left">
            <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h3 className="text-2xl font-semibold text-brand-brown mb-4 flex items-center gap-3">
                <span className="text-3xl">
                  <Zap className="w-6 h-6 inline-block" />
                </span>{" "}
                Fast Response
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After a Panhandle hail line moves through Amarillo or a wind event hits Lubbock,
                we offer free damage inspections across our 14-city service area. Most repairs
                begin within days of carrier approval, with crews dispatched from our Amarillo
                yard.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="right">
            <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h3 className="text-2xl font-semibold text-brand-brown mb-4 flex items-center gap-3">
                <span className="text-3xl">
                  <Home className="w-6 h-6 inline-block" />
                </span>{" "}
                Local & Licensed
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We're based right here in Amarillo, TX. Fully licensed, insured, and committed to
                serving our West Texas community with integrity and quality workmanship.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-brown">Our Services</h2>
            <ul className="space-y-2">
              <li>
                <strong>Hail Damage Repair:</strong> Expert assessment and repair of hail-damaged
                roofs
              </li>
              <li>
                <strong>Storm Damage Restoration:</strong> Wind, rain, and weather-related roof
                repairs
              </li>
              <li>
                <strong>Insurance Claims:</strong> Complete assistance with filing and managing
                claims
              </li>
              <li>
                <strong>Residential Roofing:</strong> New installations, replacements, and repairs
                for homes
              </li>
              <li>
                <strong>Commercial Roofing:</strong> TPO, PVC, and built-up roofing systems for
                businesses
              </li>
              <li>
                <strong>Free Inspections:</strong> No-obligation roof assessments and damage
                documentation
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-brown">Serving All of West Texas</h2>
            <p>
              We proudly serve Amarillo and the entire Texas Panhandle, plus Midland, Odessa,
              Lubbock, and surrounding West Texas communities. Our team understands the specific
              roofing challenges that come with our region's climate—from severe hailstorms and
              high winds to extreme temperature fluctuations and intense UV exposure.
            </p>
          </div>
        </FadeIn>

        {/* Company Trucks/Equipment Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <FadeIn delay={0.1} direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img
                src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-stinnett-16-1280w.webp"
                alt="5 Star Roofing crew installing a red R-panel metal roof on a West Texas residential property"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 to-transparent"></div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img
                src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-29-1280w.webp"
                alt="5 Star Roofing crew working on a residential roof replacement with ladders and safety equipment in West Texas"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 to-transparent"></div>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <FadeIn delay={0.1} direction="up">
            <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h4 className="font-bold text-brand-brown text-xl mb-3">Texas Panhandle</h4>
              <p className="text-gray-600">
                Amarillo, Canyon, Borger, Pampa, Dumas, and surrounding communities
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h4 className="font-bold text-brand-brown text-xl mb-3">Permian Basin</h4>
              <p className="text-gray-600">
                Midland, Odessa, Big Spring and West Texas oil & gas region
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h4 className="font-bold text-brand-brown text-xl mb-3">South Plains</h4>
              <p className="text-gray-600">
                Lubbock, Plainview, Levelland and agricultural communities
              </p>
            </div>
          </FadeIn>
        </div>

        <p className="mb-8">
          When you choose 5 Star Commercial Roofing, you're choosing a company that will be here for
          the long term. We stand behind our work with comprehensive warranties and a commitment to
          customer satisfaction across all of West Texas.
        </p>

        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
            <h3 className="text-2xl font-bold mb-3 text-brand-brown">Our Promise</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We treat every roof in Amarillo, Canyon, Lubbock, Midland, and the rest of our
              14-city West Texas service area like it&apos;s our own. From the first free
              inspection through the last GAF or CertainTeed ridge cap nail, we install to UL
              2218 Class 4 hail and UL 580 wind uplift standards. The estimate stays honest, the
              warranty stays in writing, and the crew shows up when we said they would.
            </p>
            <p className="text-brand-brown font-semibold">
              Address issues before a small problem becomes a big one. Call us today for your free
              roof inspection.
            </p>
          </div>
        </FadeIn>
      </div>
      <ReviewsSection heading="What our customers say" />
      <section className="mt-12 bg-gradient-to-br from-brand-gold to-brand-gold-vibrant text-white p-8 md:p-12 rounded-3xl shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 text-lg md:text-xl text-white/95 max-w-3xl">
          Free inspections. Expert repairs. Insurance claim assistance. Contact us today to see why
          Amarillo, Midland, Odessa and all of West Texas trusts 5 Star Commercial Roofing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <a href="tel:8066226041" className="btn-primary-hero">
            Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary-hero">
            Request Free Inspection
          </a>
        </div>
      </section>
    </div>
    </>
  );
}
