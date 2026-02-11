import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "TPO Roofing Snyder TX | 5 Star Commercial Roofing",
  description: "Expert TPO roofing installation in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingSnyderPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "TPO Roofing",
                      "url": "/tpo-roofing/"
              },
              {
                      "name": "Snyder",
                      "url": "/tpo-roofing-snyder/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-snyder/#localbusiness",
        "name": "5 Star Commercial Roofing - Snyder TPO Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.7179, "longitude": -100.9176 },
        "url": "https://5starroofingpros.com/tpo-roofing-snyder/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas", "name": "Snyder", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert tpo roofing services in Snyder, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "telephone": "(806) 622-6041",
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
            },
            "areaServed": {
              "@type": "City",
              "name": "Snyder",
              "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert TPO roofing installation in Snyder TX. West Texas experiences 7-9 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-11-1920w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                TPO Roofing in <span className="text-brand-gold-light">Snyder</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas TPO Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert TPO roofing installation in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Snyder's TPO Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Snyder's location in Scurry County creates unique roofing challenges. The West Texas experiences 7-9 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Snyder and Scurry County with premium materials and expert installation. From properties near Scurry County Museum to buildings throughout Snyder, we understand West Texas weather patterns, local building codes, and the specific needs of Scurry County property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Snyder, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-100.92!3d32.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sSnyder%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Snyder, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Advanced TPO Roofing for West Texas Commercial Properties
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">West Texas Climate Mastery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Snyder's position in the Rolling Plains creates unique weather challenges with intense UV exposure, rapid temperature changes, and severe thunderstorms. Our TPO systems are specifically engineered to handle West Texas climate extremes while providing decades of reliable protection.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Agricultural Industry Solutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Scurry County's agricultural operations require roofing systems that resist chemical fertilizers, livestock odors, and equipment vibrations. TPO's chemical resistance and easy cleaning make it ideal for grain storage, livestock facilities, and agricultural processing buildings.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Superior Storm Protection</h3>
                <p className="text-gray-700 leading-relaxed">
                  West Texas supercells produce softball-sized hail and straight-line winds exceeding 80 mph. Our impact-resistant TPO membranes with reinforced attachment systems provide unmatched protection against the severe weather that regularly impacts Scurry County.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Economic Efficiency</h3>
                <p className="text-gray-700 leading-relaxed">
                  Small businesses and agricultural operations need cost-effective solutions. TPO offers the lowest total cost of ownership with minimal maintenance requirements, excellent energy efficiency, and the ability to withstand West Texas weather without constant repairs.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              West Texas Rolling Plains Climate
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Supercell Thunderstorms</h3>
                <p className="text-gray-700">
                  West Texas is prime supercell territory with storms producing giant hail, destructive winds, and heavy rainfall. TPO's impact resistance and wind uplift ratings protect against these powerful weather systems that regularly cross Scurry County.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Extreme Temperature Swings</h3>
                <p className="text-gray-700">
                  Snyder experiences rapid temperature changes with cold fronts dropping temperatures 40-50°F in hours. TPO's thermal stability prevents expansion/contraction damage that destroys brittle roofing materials during these dramatic weather shifts.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">☀️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Intense UV Radiation</h3>
                <p className="text-gray-700">
                  High elevation and clear skies mean intense UV exposure year-round. TPO's advanced UV stabilizers and reflective surface prevent degradation while reducing cooling costs by reflecting harmful solar radiation away from buildings.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Scurry County Weather Profile</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">7-9</div>
                  <div className="text-sm text-gray-600">Severe Storms/Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">105°F</div>
                  <div className="text-sm text-gray-600">Average Summer High</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">22"</div>
                  <div className="text-sm text-gray-600">Annual Precipitation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">2,400+</div>
                  <div className="text-sm text-gray-600">Elevation (ft)</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Specialized Installation for Agricultural Applications
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Agricultural Facility Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our agricultural roofing specialists evaluate unique factors like livestock ventilation needs, grain dust exposure, chemical storage requirements, and heavy equipment access. We design TPO systems that accommodate agricultural operations while maximizing durability and performance.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Enhanced Ventilation Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Agricultural buildings require extensive ventilation systems. We expertly integrate ridge vents, exhaust fans, and natural ventilation systems with TPO membranes, ensuring proper sealing while maintaining optimal airflow for livestock comfort and grain storage.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Heavy Load Accommodation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Agricultural facilities often support heavy equipment like grain handling systems, hay storage, and livestock equipment. Our TPO installations include reinforced attachment points and load distribution systems to handle these concentrated loads safely.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Chemical Resistant Installation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Agricultural chemicals, fertilizers, and livestock waste can damage standard roofing materials. We use chemical-resistant TPO formulations and specialized sealants that withstand exposure to ammonia, fertilizers, and other agricultural chemicals common in Scurry County operations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Simplified Maintenance Programs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Agricultural operations need low-maintenance roofing solutions. Our TPO installations include easy-access maintenance points, simplified drainage systems, and detailed maintenance schedules designed for busy agricultural managers with limited time for building maintenance.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Snyder TPO Roofing Questions & Answers
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="agricultural-suitability" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Is TPO roofing suitable for agricultural buildings in Scurry County?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Absolutely. TPO excels in agricultural applications due to its chemical resistance, easy cleaning, and durability. The membrane resists ammonia from livestock areas, fertilizer exposure, and can be power-washed for sanitary requirements. Many dairy operations, grain storage facilities, and livestock barns throughout West Texas use TPO successfully.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="storm-performance" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How does TPO perform against West Texas supercell storms?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  TPO provides excellent protection against supercell storms common in West Texas. Class 4 impact-resistant membranes withstand hail up to softball size, while mechanically fastened systems resist wind uplift exceeding 120 mph. The membrane's flexibility prevents cracking from thermal shock during rapid temperature changes associated with severe storms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="elevation-performance" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Does Snyder's elevation affect TPO roofing performance?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Snyder's 2,400+ foot elevation actually benefits TPO performance. Higher elevation means lower air density and reduced thermal stress on the membrane. The intense UV exposure at elevation is easily handled by TPO's advanced UV stabilizers. Cool winter temperatures at elevation don't affect TPO's flexibility like they do with other materials.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="dust-storms" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How does TPO handle West Texas dust storms?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  TPO's smooth, non-granulated surface sheds dust and debris much better than asphalt-based systems. The membrane won't degrade from sand abrasion, and dust can be easily removed with pressure washing. Regular cleaning maintains the membrane's reflective properties and prevents drain blockages from accumulated dust.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="rural-installation" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can TPO be installed on rural properties outside Snyder city limits?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, we regularly install TPO roofing on rural properties throughout Scurry County. Our mobile equipment allows us to work efficiently on remote agricultural and commercial buildings. We coordinate material delivery and equipment access for properties with limited accessibility, ensuring quality installation regardless of location.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="energy-savings-rural" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Do rural buildings benefit from TPO's energy efficiency?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Rural buildings often benefit more than urban properties from TPO's energy efficiency. Many rural properties rely on propane or electric heat pumps, making cooling cost savings more significant. Agricultural buildings with cooling needs for livestock or grain storage see substantial operational savings from TPO's reflective properties.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              West Texas Properties We Protect
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🌾</div>
                <h3 className="font-bold text-brand-brown mb-2">Agricultural Facilities</h3>
                <p className="text-gray-600 text-sm">Grain storage, livestock barns, equipment buildings</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="font-bold text-brand-brown mb-2">Main Street Businesses</h3>
                <p className="text-gray-600 text-sm">Retail stores, restaurants, service businesses</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="font-bold text-brand-brown mb-2">Educational Facilities</h3>
                <p className="text-gray-600 text-sm">Schools, training centers, community buildings</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="font-bold text-brand-brown mb-2">Healthcare Buildings</h3>
                <p className="text-gray-600 text-sm">Clinics, medical offices, care facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold text-brand-brown mb-2">Industrial Buildings</h3>
                <p className="text-gray-600 text-sm">Manufacturing, processing, storage facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-bold text-brand-brown mb-2">Government Buildings</h3>
                <p className="text-gray-600 text-sm">Municipal facilities, emergency services</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From the Scurry County Courthouse to agricultural operations throughout the Rolling Plains, our TPO roofing systems protect diverse properties across Snyder and surrounding rural areas.
              </p>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Snyder Property Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Scurry County property owners. Expert TPO roofing designed for West Texas climate challenges. Protect your agricultural, commercial, or industrial investment with proven roofing solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
