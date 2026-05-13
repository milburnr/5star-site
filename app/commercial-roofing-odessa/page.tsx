import { FadeIn } from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Phone, Star } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-roofing-odessa/" },
  title: "Commercial Roofing Odessa TX | 5 Star Roofing",
  description:
    "Professional commercial roofing in Odessa TX. TPO, EPDM, and metal roofing systems for businesses. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Commercial Roofing Odessa TX | 5 Star Roofing",
    description:
      "Professional commercial roofing in Odessa TX. TPO, EPDM, and metal roofing systems for businesses. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/commercial-roofing-odessa/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Commercial metal roof installation on industrial facility in West Texas — 5 Star Roofing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofingOdessaPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/commercial-roofing-odessa/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-1-1280w.jpg",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 35.1768,
              longitude: -101.859,
            },
            url: "https://5starroofingpros.com/commercial-roofing-odessa/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas",
              name: "Odessa",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
            description:
              "Professional commercial roofing in Odessa TX. TPO, EPDM, and metal roofing systems for businesses. Free inspections. Call (806) 622-6041",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Roofing Services",
            name: "Commercial Roofing in Odessa",
            description:
              "Professional commercial roofing services in Odessa, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Odessa",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Commercial Roofing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Commercial Roofing Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Commercial Roofing Repair" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Free Roof Inspection" },
                },
              ],
            },
          }),
        }}
      />


            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="odessa"
        city="Odessa"
        service="Commercial Roofing"
        h1="Commercial Roofing in Odessa, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-21-1280w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing/" },
          { name: "Odessa", url: "/commercial-roofing-odessa/" },
        ]}
    />

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Flex</div>
                <div className="text-brand-brown font-semibold text-lg">After-Hours Available</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Class 4</div>
                <div className="text-brand-brown font-semibold text-lg">Hail-Rated</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">
                  <span className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </span>
                </div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing serves Odessa's commercial and industrial market with TPO, EPDM, metal, and PVC
              systems designed for the Permian Basin's chemical exposure, extreme heat, and high-wind environment.
              Free inspections. After-hours scheduling available to minimize operational disruption.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">← Commercial Roofing Hub</a>
              <a href="/commercial-roofing-midland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Midland</a>
              <a href="/tpo-roofing-odessa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">TPO Roofing Odessa</a>
              <a href="/odessa-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">All Odessa Services</a>
            </div>
          </section>
        </FadeIn>

        {/* Author byline */}
        <FadeIn>
          <div className="mb-8 max-w-5xl mx-auto flex items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-4">
            <div className="w-8 h-8 rounded-full bg-brand-brown flex items-center justify-center text-white text-xs font-bold flex-shrink-0">BT</div>
            <span>
              Written by <span className="font-semibold text-gray-700">Ben Terhune</span>, Owner — 5 Star Roofing, Amarillo TX
              &nbsp;·&nbsp; Reviewed {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Makes Odessa a Top Choice for Roof Repair?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Expert commercial roofing for Odessa businesses serving the Permian Basin's energy
              sector. TPO, EPDM, and metal roofing systems engineered for harsh weather and
              industrial environments. Minimize operational disruption with our after-hours
              installation.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              We've served Odessa with expert commercial roofing installations for oil
              and gas facilities, manufacturing operations, educational institutions, and healthcare
              facilities. We handle all permits, insurance claims, and warranty documentation. Free
              inspections and estimates available.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Odessa's role as a major petroleum industry center creates unique commercial roofing
              challenges requiring specialized expertise in chemical-resistant materials, large-span
              applications, and industrial safety protocols. Our certified teams understand the
              complex requirements of Permian Basin commercial operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Does Commercial Roofing for Odessa's Petroleum Industry Involve?
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa serves as a major hub for Permian Basin petroleum operations, housing drilling
              contractors, oilfield service companies, and industrial manufacturers serving the
              energy sector. These facilities require commercial roofing systems designed for
              exposure to petroleum byproducts, industrial chemicals, and the extreme weather
              conditions common in West Texas energy operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Major contractors including Nabors Industries, Patterson-UTI, and Unit Corporation
              operate large industrial facilities requiring specialized roofing systems that
              accommodate heavy equipment storage, chemical processing areas, and maintenance
              operations. These installations demand chemical-resistant materials and enhanced
              safety protocols for working near petroleum industry operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Oilfield equipment manufacturing and repair facilities throughout Odessa need roofing
              systems that withstand welding operations, heavy machinery movement, and chemical
              exposure while providing adequate ventilation for industrial processes. These
              applications often require fire-resistant materials and specialized drainage systems
              that prevent environmental contamination.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">
              Industrial Manufacturing Commercial Roofing Solutions
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa's manufacturing sector supporting petroleum operations requires commercial
              roofing systems for steel fabrication, equipment manufacturing, and specialized
              service providers that operate continuously during peak drilling seasons. These
              facilities need roofing systems that accommodate overhead crane systems, welding
              operations, and heavy equipment assembly while protecting valuable industrial
              equipment and work-in-progress materials.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Chemical processing and storage facilities require roofing systems that meet EPA and
              OSHA requirements for hazardous material handling while providing containment
              capabilities that prevent environmental contamination. These installations often
              require specialized ventilation integration and drainage access that affects
              roofing design and material selection for industrial safety compliance.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Metal fabrication and machining operations serving the petroleum industry require
              roofing systems that accommodate precision manufacturing equipment while providing
              adequate natural lighting and climate control for quality manufacturing processes.
              Specialized insulation and acoustical control become important for facilities
              operating sensitive manufacturing equipment continuously.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Does Educational Institution Commercial Roofing Excellence Involve?
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The University of Texas Permian Basin represents Odessa's largest educational
              facility, requiring specialized commercial roofing systems for academic buildings,
              research facilities, and student housing that accommodate modern educational
              technology while providing energy-efficient environments for year-round academic
              operations. University buildings often include specialized laboratory facilities
              requiring superior environmental control and chemical-resistant roofing materials.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Ector County Independent School District facilities including Odessa High School and
              Permian High School require cost-effective roofing solutions that accommodate large
              assembly spaces, athletic facilities, and specialized educational programs while
              providing energy efficiency that controls operational costs for large student
              populations in the challenging West Texas climate.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Petroleum industry training facilities including specialized welding schools and
              technical training centers require roofing systems that accommodate industrial
              training equipment, safety systems, and specialized ventilation for technical
              education programs that prepare workers for careers in the Permian Basin energy
              sector.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">
              Healthcare and Medical Facility Commercial Roofing
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Medical Center Hospital and associated healthcare facilities require specialized
              commercial roofing systems that support critical medical operations including prompt
              services, surgical facilities, and diagnostic equipment that demands consistent
              environmental conditions. Hospital roofing must accommodate medical gas systems,
              backup power equipment, and helicopter landing zones while maintaining infection
              control standards essential for patient safety.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Specialized medical facilities including cancer treatment centers and outpatient
              surgery centers need roofing systems that provide electromagnetic shielding for
              sensitive medical equipment while maintaining sterile environments. These
              installations often require coordination with medical equipment manufacturers and
              specialized contractors familiar with healthcare facility requirements and infection
              control protocols.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Behavioral health and rehabilitation facilities serving petroleum industry workers
              require roofing systems that provide quiet, comfortable therapeutic environments while
              supporting specialized equipment and privacy requirements essential for effective
              treatment programs. Energy efficiency becomes critical for controlling operational
              costs while maintaining therapeutic environment standards required for patient
              comfort.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Does Retail and Commercial Center roof system Involve?
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Music City Mall and major retail corridors throughout Odessa serve petroleum industry
              workers and their families, requiring commercial roofing systems that accommodate
              large retail spaces, restaurants, and entertainment facilities while maintaining
              comfortable shopping environments during extreme West Texas weather conditions. These
              facilities often experience heavy traffic during shift changes and industry boom
              periods that create unique operational demands.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Automotive dealerships and service facilities serving petroleum industry fleet
              operations require roofing systems that accommodate vehicle sales areas, service bays,
              and parts storage while providing comfortable environments for customers and
              employees. These facilities often include specialized equipment for servicing
              industrial vehicles and heavy equipment used throughout the Permian Basin.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Restaurant and hospitality businesses serving petroleum industry workers require
              roofing systems that accommodate specialized kitchen equipment, dining areas, and
              entertainment systems while providing year-round weather protection for facilities
              that often operate extended hours to serve industry shift schedules common in
              petroleum operations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">
              Transportation and Logistics Commercial Roofing
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa-Schlemeyer Field and associated aviation facilities require specialized
              commercial roofing for aircraft maintenance operations, cargo handling, and passenger
              services that support petroleum industry transportation needs. These facilities demand
              large-span roofing systems that accommodate aircraft movement while providing weather
              protection for sensitive aviation equipment and flight operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Trucking and logistics facilities supporting petroleum industry transportation require
              roofing systems that accommodate loading dock operations, truck maintenance bays, and
              cargo storage areas while providing protection for petroleum industry equipment and
              supplies transported throughout the Permian Basin. These facilities often operate
              continuously during peak drilling and completion activities.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Railroad facilities serving petroleum industry transportation need roofing systems for
              maintenance shops, cargo handling facilities, and administrative buildings that
              support critical transportation infrastructure for petroleum products, drilling
              equipment, and industrial supplies moved throughout the region and to refineries and
              markets worldwide.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Does Government and Public Safety Commercial Roofing Involve?
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Ector County facilities including the courthouse, sheriff's department, and
              administrative buildings require commercial roofing systems that meet government
              specifications for durability, security, and energy efficiency while accommodating
              public safety equipment and emergency communication systems. These projects often
              involve complex procurement procedures and specialized security requirements that
              affect contractor selection and installation protocols.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency services facilities including fire stations and EMS facilities require
              roofing systems that support emergency communication equipment, vehicle storage, and
              rapid deployment capabilities while providing reliable weather protection during
              severe weather events and critical petroleum industry operations in the region.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Federal facilities including border patrol and homeland security installations require
              roofing systems that meet federal specifications and security standards while
              providing long-term durability and minimal maintenance requirements. These projects
              require specialized contractor certifications and extensive background checks for
              installation personnel working on secure federal facilities.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">
              Energy Efficiency and Environmental Compliance for Odessa Commercial Buildings
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa's extreme climate with summer temperatures regularly exceeding 100°F creates
              enormous cooling demands for commercial buildings throughout the petroleum industry
              sector. High-reflectance roofing systems reduce cooling loads by 25-35% while
              protecting petroleum industry equipment and commercial operations from heat-related
              failures during extended summer operation periods that coincide with peak petroleum
              industry activity.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Environmental compliance requirements for petroleum industry facilities affect roofing
              material selection, installation procedures, and waste management protocols. Storm
              water management, chemical containment, and air quality protection require specialized
              construction practices that exceed standard commercial building requirements while
              ensuring full compliance with EPA and state environmental regulations for
              petroleum industry operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Solar-ready roofing installations provide petroleum industry companies with
              opportunities for renewable energy integration that can offset high operational energy
              costs while supporting corporate sustainability initiatives. Structural assessments
              and electrical integration planning during roof installation create cost-effective
              pathways for future photovoltaic installations on petroleum industry and commercial
              facilities throughout Odessa.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Does Commercial Roofing Systems and Technology for Permian Basin Operations
              Involve?
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              TPO (Thermoplastic Polyolefin) membrane systems provide superior performance for
              Odessa's challenging environment with chemical resistance essential for petroleum
              industry applications, energy efficiency that reduces operational costs, and
              durability that withstands extreme weather conditions common throughout the Permian
              Basin. Heat-welded seams create permanently fused joints that eliminate potential
              failure points common in adhesive-based systems.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              EPDM (Ethylene Propylene Diene Monomer) rubber roofing systems offer cost-effective
              solutions for large commercial buildings with excellent weather resistance, ease of
              repair and maintenance, and proven long-term performance in petroleum industry
              environments. These systems accommodate thermal movement and provide superior puncture
              resistance for buildings subject to maintenance traffic and equipment installations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              PVC membrane systems provide premium chemical resistance essential for facilities
              exposed to petroleum industry chemicals while offering superior durability and energy
              efficiency. These systems prove especially important for facilities handling
              hydrocarbons, completion chemicals, and other petroleum industry materials that can
              rapidly deteriorate standard roofing systems through chemical attack and vapor
              exposure.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Metal roofing systems using standing seam construction provide 50+ year service life
              with minimal maintenance requirements while accommodating the thermal expansion and
              industrial loading common in petroleum industry facilities. Advanced coating systems
              resist chemical exposure while maintaining reflectivity and color stability throughout
              extended service lives in Odessa's challenging petroleum industry environment.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">
              Weather Protection and Maintenance Services for Critical Operations
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Petroleum industry environments require specialized safety equipment and coordination
              with facility protocols. Our commercial roofing crews are experienced working near
              active industrial sites and schedule installations to minimize operational disruption
              during drilling, completion, and production activities.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Preventive maintenance programs designed for Odessa's industrial environment include
              quarterly inspections with chemical resistance testing, thermal imaging for equipment
              protection, and scheduled maintenance that coordinates with petroleum industry
              operational cycles to minimize disruption during critical business periods that affect
              regional energy production and economic activity.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Predictive maintenance using advanced diagnostic techniques helps identify potential
              failure points before they compromise petroleum industry operations or damage valuable
              equipment. Early detection systems prevent minor issues from becoming major failures
              that could impact critical petroleum operations, equipment protection, and business
              continuity during volatile energy market conditions that affect Permian Basin
              operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does commercial roof replacement cost in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Commercial roofing costs vary by building size, roof type, and complexity. Typical
                  TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per
                  square foot. EPDM is most budget-friendly at $3-$6 per square foot. We provide
                  free detailed estimates with transparent pricing and financing options for
                  qualified businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work after hours to minimize business disruption?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We schedule commercial installations during evenings, weekends, or planned
                  closure periods to minimize operational impact. Many Odessa businesses prefer
                  after-hours work for retail locations or facilities that cannot shut down during
                  business hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes TPO roofing ideal for Odessa's commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  TPO's white reflective membrane is Energy Star rated and dramatically reduces
                  cooling costs. The heat-welded seams create watertight bonds that withstand high
                  winds and hail. TPO offers excellent durability (15-25 year warranties) at a
                  competitive price point.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Visit Our Amarillo Location
            </h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="odessa" currentService="commercial-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Odessa property owners. Expert commercial roofing with
            comprehensive warranties.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:8066226041"
              className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg"
            >
              Call (806) 622-6041
            </a>
            <a
              href="/contact/"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg"
            >
              Schedule Free Inspection
            </a>
          </div>
        </section>
        <RelatedArticles pageSlug="commercial-roofing-odessa" />
      </div>
    </>
  );
}
