import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Breadcrumb } from "@/components/Breadcrumb";
import { OptimizedImage } from "@/components/OptimizedImage";

export const metadata: Metadata = {
  title: 'About 5 Star Commercial Roofing | Amarillo, Midland, Odes...',
  description: 'Over 10 years serving Amarillo, Midland, Odessa and West Texas. Call for a free quote!',
};

export default function Page() {
  // JSON-LD Schema for Organization
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "5 Star Commercial Roofing",
    "alternateName": "5 Star Roofing",
    "url": "https://5starroofingpros.com",
    "logo": "https://5starroofingpros.com/logo.png",
    "telephone": "+1-806-622-6041",
    "email": "info@5starroofingpros.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving West Texas",
      "addressLocality": "Amarillo",
      "addressRegion": "TX",
      "postalCode": "79101",
      "addressCountry": "US"
    },
    "description": "Licensed and insured roofing contractor serving Amarillo, Midland, Odessa, and West Texas since 2014. Specializing in hail damage repair, storm restoration, and insurance claim assistance.",
    "foundingDate": "2014",
    "areaServed": [
      "Amarillo, TX",
      "Midland, TX",
      "Odessa, TX",
      "Lubbock, TX",
      "Texas Panhandle",
      "West Texas"
    ],
    "knowsAbout": [
      "Hail Damage Repair",
      "Commercial Roofing",
      "Residential Roofing",
      "Storm Damage Restoration",
      "Insurance Claims",
      "TPO Roofing",
      "PVC Roofing",
      "Metal Roofing"
    ]
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "About Us",
                      "url": "/about/"
              }
      ]} />


      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <FadeIn>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">About 5 Star Commercial Roofing</h1>
      </FadeIn>

      {/* Team/Company Hero Image */}
      <FadeIn delay={0.2}>
        <div className="relative mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <OptimizedImage
        src="/photos/Professional_roofing_crew_on_Texas_residential_home"
        alt="5 Star Commercial Roofing team in Amarillo Texas - Professional roofing contractors and crew - Locally owned and operated"
        className="w-full h-48 sm:h-64 md:h-96 object-cover"
        priority={true}
        sizes="100vw"
      />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
      </FadeIn>

      {/* Stats Section */}
      <FadeIn delay={0.3}>
        <section className="mb-16 py-12 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.15),transparent_40%)]"></div>
          <div className="relative z-10 grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="p-3 md:p-6">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-1 md:mb-2">
                <AnimatedCounter to={10} suffix="+" />
              </div>
              <div className="text-sm sm:text-base md:text-xl font-semibold text-brand-brown">Years Experience</div>
              <p className="text-gray-600 mt-1 md:mt-2 text-xs sm:text-sm md:text-base hidden sm:block">Serving West Texas</p>
            </div>
            <div className="p-3 md:p-6">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-1 md:mb-2">
                <AnimatedCounter to={1000} suffix="+" />
              </div>
              <div className="text-sm sm:text-base md:text-xl font-semibold text-brand-brown">Projects Done</div>
              <p className="text-gray-600 mt-1 md:mt-2 text-xs sm:text-sm md:text-base hidden sm:block">Homes & Businesses</p>
            </div>
            <div className="p-3 md:p-6">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-1 md:mb-2">
                <AnimatedCounter to={100} suffix="%" />
              </div>
              <div className="text-sm sm:text-base md:text-xl font-semibold text-brand-brown">Satisfaction</div>
              <p className="text-gray-600 mt-1 md:mt-2 text-xs sm:text-sm md:text-base hidden sm:block">Guaranteed</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="prose max-w-none">
        <FadeIn delay={0.4}>
          <div className="bg-gradient-to-br from-brand-gold-light to-amber-100 p-10 rounded-2xl mb-12 shadow-lg border border-brand-gold/20">
            <h2 className="text-3xl font-bold text-brand-brown mb-4">West Texas Hail Damage Specialists</h2>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              For over 10 years, 5 Star Commercial Roofing has been the trusted partner for <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline font-semibold">hail damage repair</a>
              and storm damage restoration throughout <a href="/roofing-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">Odessa</a>, and the entire Texas Panhandle.
              We understand the unique challenges that West Texas weather brings to your roof.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the frequent hailstorms that batter the Panhandle (8-12 annually) to the intense weather
              patterns affecting the Permian Basin, our teams have seen it all and know how to protect your
              investment with expert repairs and Class 4 impact-resistant <a href="/residential-roofing/" className="text-brand-brown hover:text-brand-gold underline">residential</a> and <a href="/commercial-roofing/" className="text-brand-brown hover:text-brand-gold underline">commercial roofing systems</a>.
            </p>
          </div>
        </FadeIn>

        <h2 className="text-3xl font-bold mt-12 mb-8 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">Why Choose 5 Star?</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <FadeIn delay={0.1} direction="left">
            <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h3 className="text-2xl font-semibold text-brand-brown mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span> Hail Damage Experts
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We specialize in identifying and repairing hail damage. Our team knows exactly what insurance adjusters
                look for and how to document damage properly for successful claims.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h3 className="text-2xl font-semibold text-brand-brown mb-4 flex items-center gap-3">
                <span className="text-3xl">📋</span> Insurance Claim Help
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We work directly with your insurance company to ensure you get the coverage you deserve.
                From initial inspection to final approval, we handle the paperwork and communication.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="left">
            <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h3 className="text-2xl font-semibold text-brand-brown mb-4 flex items-center gap-3">
                <span className="text-3xl">⚡</span> Fast Response
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After a storm, time is critical. We offer free emergency inspections and can typically
                begin repairs within days of insurance approval.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="right">
            <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h3 className="text-2xl font-semibold text-brand-brown mb-4 flex items-center gap-3">
                <span className="text-3xl">🏡</span> Local & Licensed
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We're based right here in Amarillo, TX. Fully licensed, insured, and committed to
                serving our West Texas community with integrity and quality workmanship.
              </p>
            </div>
          </FadeIn>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Services</h2>
        <ul className="space-y-2 mb-8">
          <li><strong>Hail Damage Repair:</strong> Expert assessment and repair of hail-damaged roofs</li>
          <li><strong>Storm Damage Restoration:</strong> Wind, rain, and weather-related roof repairs</li>
          <li><strong>Insurance Claims:</strong> Complete assistance with filing and managing claims</li>
          <li><strong>Residential Roofing:</strong> New installations, replacements, and repairs for homes</li>
          <li><strong>Commercial Roofing:</strong> TPO, PVC, and built-up roofing systems for businesses</li>
          <li><strong>Free Inspections:</strong> No-obligation roof assessments and damage documentation</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Serving All of West Texas</h2>
        <p className="mb-4">
          We proudly serve Amarillo and the entire Texas Panhandle, plus Midland, Odessa, Lubbock, and
          surrounding West Texas communities. Our team understands the specific roofing challenges that come
          with our region's climate—from severe hailstorms and high winds to extreme temperature fluctuations
          and intense UV exposure.
        </p>

        {/* Company Trucks/Equipment Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <FadeIn delay={0.1} direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img
                src="/photos/tpo/tpo-after2.jpg"
                alt="5 Star Commercial Roofing company truck in Amarillo TX - Professional roofing equipment and materials ready for service"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 to-transparent"></div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img
                src="/photos/in-progress/working1.jpg"
                alt="Professional roofing crew installing roof in Amarillo Texas - Quality craftsmanship and safety equipment - 5 Star Commercial Roofing"
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
              <p className="text-gray-600">Amarillo, Canyon, Borger, Pampa, Dumas, and surrounding communities</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h4 className="font-bold text-brand-brown text-xl mb-3">Permian Basin</h4>
              <p className="text-gray-600">Midland, Odessa, Big Spring and West Texas oil & gas region</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
              <h4 className="font-bold text-brand-brown text-xl mb-3">South Plains</h4>
              <p className="text-gray-600">Lubbock, Plainview, Levelland and agricultural communities</p>
            </div>
          </FadeIn>
        </div>

        <p className="mb-8">
          When you choose 5 Star Commercial Roofing, you're choosing a company that will be here
          for the long term. We stand behind our work with comprehensive warranties and a commitment to
          customer satisfaction across all of West Texas.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Our Promise</h3>
          <p className="mb-4">
            We treat every roof like it's our own. From the initial free inspection to the final nail,
            we're committed to quality workmanship, honest pricing, and exceptional customer service.
          </p>
          <p className="text-brand-brown font-semibold">
            Don't wait until a small problem becomes a big one. Call us today for your free roof inspection.
          </p>
        </div>
      </div>

      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">
          Free inspections. Expert repairs. Insurance claim assistance.
          Contact us today to see why Amarillo, Midland, Odessa and all of West Texas trusts 5 Star Commercial Roofing.
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
