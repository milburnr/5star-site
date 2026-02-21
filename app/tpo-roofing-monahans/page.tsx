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
  alternates: { canonical: 'https://5starroofingpros.com/tpo-roofing-monahans/' },
  title: "TPO Roofing Monahans TX | 5 Star Roofing",
  description: "Expert TPO roofing installation in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingMonahansPage() {
  const faqItems = [
      {
          "question": "How does Monahans sand exposure affect TPO roofing?",
          "answer": "Monahans sits adjacent to the Monahans Sandhills, and wind-driven sand is a constant environmental factor. TPO membranes resist sand abrasion better than most flat roofing materials because the smooth, continuous surface provides no edges or seams for sand to catch and erode. However, sand accumulation in drainage areas requires regular cleaning to maintain proper water flow. Our maintenance programs for Monahans properties include sand removal as a standard service."
      },
      {
          "question": "How durable is TPO in Ward County's desert climate?",
          "answer": "TPO membranes perform exceptionally well in Ward County's hot, arid desert climate. The low humidity reduces biological growth that degrades roofing in wetter regions, while TPO's UV stabilizers protect against the intense solar radiation common at Monahans' semi-arid elevation. Properly installed TPO in Monahans' climate routinely achieves 20-25 year service life, often exceeding manufacturer warranty periods due to the favorable dry conditions."
      },
      {
          "question": "How often should TPO roofs be cleaned in Monahans due to dust?",
          "answer": "In Monahans, we recommend TPO roof cleaning every 6-12 months depending on proximity to the sandhills and oil field activity. Sand and dust accumulation reduces the membrane's reflective efficiency and can clog drains if left unchecked. A simple power washing restores full reflectivity and ensures drainage systems function properly. Our Monahans maintenance contracts include scheduled cleaning at intervals appropriate for each property's dust exposure level."
      },
      {
          "question": "Is TPO suitable for oil and gas facility roofing in Monahans?",
          "answer": "TPO works well for many oil and gas support buildings in Monahans, including offices, maintenance shops, and storage facilities. For buildings with direct exposure to petroleum products or heavy chemical environments, PVC membrane may be a better choice due to its superior chemical resistance. We assess each Monahans facility's specific chemical exposure before recommending TPO or PVC, ensuring the membrane selected provides optimal long-term performance for your particular application."
      },
      {
          "question": "Do heat-welded TPO seams hold up in Monahans' extreme temperatures?",
          "answer": "Heat-welded TPO seams create molecular bonds that are actually stronger than the membrane itself, and they perform exceptionally well in Monahans' temperature extremes. The seams expand and contract uniformly with the membrane during thermal cycling between nighttime lows and daytime highs exceeding 110 degrees. Unlike adhesive-based seams used in other systems, heat-welded TPO seams do not soften in extreme heat or become brittle in cold, making them ideal for Ward County's desert climate."
      },
      {
          "question": "What warranty considerations are specific to TPO roofing in Monahans?",
          "answer": "TPO manufacturers offer standard warranties for Monahans installations, but environmental factors like sand abrasion and extreme UV exposure make proper installation technique critical for warranty validity. We ensure all Monahans installations follow manufacturer specifications exactly, including proper seam welding temperatures, edge securement details, and drainage configurations. This attention to detail protects your warranty coverage and ensures any future claims are honored without dispute."
      }
  ];

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
                      "name": "Monahans",
                      "url": "/tpo-roofing-monahans/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Roofing",
            "provider": {
              "@type": ["LocalBusiness", "RoofingContractor"],
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Roofing",
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
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Monahans",
              "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert TPO roofing installation in Monahans TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-10-1920w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                TPO Roofing in <span className="text-brand-gold-light">Monahans</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin TPO Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert TPO roofing installation in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
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
              What Makes Our Monahans Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Monahans's location in Ward County creates unique roofing challenges. The Permian Basin experiences 6-8 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Monahans and Ward County with premium materials and expert installation. From properties near Monahans Sandhills State Park to buildings throughout Monahans, we understand Permian Basin weather patterns, local building codes, and the specific needs of Ward County property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Monahans, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.89!3d31.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sMonahans%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monahans, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="monahans" currentService="tpo-roofing" />
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              TPO Roofing in Monahans FAQs
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <AccordionItem key={`faq-${index + 1}`} value={`faq-${index + 1}`} className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </FadeIn>




        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Monahans Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Monahans property owners. Expert tpo roofing with comprehensive warranties and insurance claim assistance.
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
