import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Repair Perryton TX | 5 Star Roofing',
  description: "Professional hail damage repair in Perryton TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function HailDamageRepairPerrytonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
        { name: "Perryton", url: "/hail-damage-repair-perryton/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-perryton/#localbusiness",
        "name": "5 Star Commercial Roofing - Perryton Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/hail-damage-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/hail-damage-repair-perryton/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas", "name": "Perryton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional hail damage repair in Perryton TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": { "@id": "https://5starroofingpros.com/#organization" }
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How do I know if my Perryton roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance."}},{"@type":"Question","name":"Will insurance cover hail damage in Perryton?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate."}},{"@type":"Question","name":"Should I upgrade to Class 4 shingles after hail damage?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/hail-damage-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">Hail Damage Repair in <span className="text-brand-gold-light">Perryton, TX</span></h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">Wheat Capital of the World's Roofing Experts</p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">Perryton—the county seat of Ochiltree County and Wheat Capital of the World—sits near the Oklahoma border in the heart of Texas's agricultural powerhouse. With $250 million in annual farming revenue and critical grain storage infrastructure, this community of 8,400+ needs specialized roofing protection. 5 Star Roofing has served Perryton's agricultural and residential needs since 2014.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Get Free Inspection</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">24/7</div><div className="text-brand-brown font-semibold text-lg">Emergency Service</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">$250M</div><div className="text-brand-brown font-semibold text-lg">Annual Ag Revenue</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Perryton Needs Expert Hail Damage Repair</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Perryton, with a 2020 population of 8,492 (currently estimated at 8,219), serves as the county seat of Ochiltree County in the northern Texas Panhandle near the Oklahoma border. Known as the "Wheat Capital of the World," this agricultural community sits approximately 89 miles from Amarillo, making it one of our most northern service areas in the Texas Panhandle.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Ochiltree County has a diverse economy based on agriculture, oil and gas, and other natural resources. Farming operations brought in $250 million in 2005, primarily from livestock, hogs, and grain production including wheat, sorghum, corn, and alfalfa. This agricultural foundation, combined with oil and natural gas operations throughout the county, creates unique roofing challenges for both residential and agricultural properties.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Perryton's location near the Oklahoma border puts it in the direct path of severe weather systems that develop across the Great Plains. The community's agricultural infrastructure—including grain elevators, livestock facilities, and processing operations—requires specialized roofing solutions capable of withstanding the region's intense storms, high winds, and frequent hail events.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Roofing has served Perryton and Ochiltree County with expert storm damage repairs and specialized agricultural roofing solutions. Our team understands the unique requirements of wheat storage facilities, livestock operations, and the residential needs of this close-knit agricultural community that feeds the world.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Perryton roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Perryton?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should I upgrade to Class 4 shingles after hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Perryton property owners. Expert hail damage repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}