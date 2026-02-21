import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/metal-roofing/' },
  title: 'Metal Roofing West Texas | 5 Star Roofing',
  description: "Metal roofing installation and repair across West Texas. Standing seam, corrugated, and metal shingle options with 40-50 year lifespans and energy savings.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Metal Roofing Services",
    "provider": {
      "@type": ["LocalBusiness", "RoofingContractor"],
      "name": "5 Star Roofing",
      "telephone": "(806) 622-6041",
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
      { "@type": "City", "name": "Amarillo", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Andrews", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Big Spring", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Borger", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Canyon", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Dumas", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Levelland", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Lubbock", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Midland", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Monahans", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Odessa", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Pampa", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Perryton", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Snyder", "address": { "@type": "PostalAddress", "addressRegion": "TX" } }
    ],
    "description": "Metal roofing installation and repair across West Texas. Standing seam, corrugated, metal shingle, and R-panel systems for residential and commercial buildings.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Metal Roofing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standing Seam Metal Roofing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corrugated Metal Roofing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metal Shingle Roofing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "R-Panel Metal Roofing" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a metal roof last in West Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A properly installed metal roof in West Texas lasts 40-50 years, and some standing seam systems exceed 60 years with minimal maintenance. This is roughly double the lifespan of asphalt shingles in the same climate. Metal handles the region's intense UV exposure, temperature extremes (from below freezing to over 110 degrees), and high winds far better than asphalt or composite materials. The main maintenance items are periodic fastener tightening and sealant replacement, typically every 10-15 years."
        }
      },
      {
        "@type": "Question",
        "name": "Are metal roofs louder than shingle roofs during rain and hail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern metal roof installations are no louder than shingle roofs when properly installed with solid decking and underlayment beneath the panels. The metal sits on top of plywood sheathing and synthetic underlayment, which dampens sound effectively. Metal roofs installed directly over open purlins (common on older barns and agricultural buildings) are louder, but residential and commercial installations over solid deck are comparable to any other roofing material in terms of interior noise."
        }
      },
      {
        "@type": "Question",
        "name": "How much does metal roofing cost compared to asphalt shingles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Metal roofing typically costs $9-$14 per square foot installed for standing seam and $6-$9 per square foot for corrugated or R-panel systems. Compare that to $4.50-$6.50 per square foot for quality architectural shingles. For a 2,000-square-foot home, that means $18,000-$28,000 for standing seam metal versus $9,000-$13,000 for shingles. However, when you factor in the 40-50 year metal lifespan versus 20-25 years for shingles, plus lower cooling costs and insurance discounts, metal often costs less per year of service."
        }
      },
      {
        "@type": "Question",
        "name": "Can a metal roof be installed over existing shingles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, yes. Metal roofing can be installed over one layer of existing asphalt shingles using a batten or furring strip system that creates an air gap between the old shingles and the new metal. This approach saves on tear-off and disposal costs and can reduce the project cost by $1,000-$3,000. However, it only works if the existing deck is in sound condition and local building codes permit it. We inspect the existing roof structure before recommending an overlay versus a full tear-off."
        }
      },
      {
        "@type": "Question",
        "name": "Do metal roofs attract lightning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Metal roofing does not attract lightning any more than other roofing materials. Lightning strikes the highest point in an area regardless of material. In fact, metal roofing is one of the safest options during a lightning storm because it is non-combustible. If lightning does strike a metal roof, the energy disperses across the surface rather than concentrating at the impact point. Metal roofs carry the same lightning risk as asphalt, tile, or wood roofs on the same structure."
        }
      },
      {
        "@type": "Question",
        "name": "What colors and styles are available for metal roofing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Metal roofing is available in virtually any color you can imagine, from traditional earth tones and grays to bold reds, blues, and greens. Kynar 500 (PVDF) paint finishes resist fading for 30+ years. Style options include standing seam (clean, modern lines), corrugated (classic agricultural look), metal shingles (mimicking traditional shingle or slate appearance), and R-panel (economical ribbed profile for commercial use). We bring color samples and style guides to every estimate appointment."
        }
      },
      {
        "@type": "Question",
        "name": "Is metal roofing a good choice for flat commercial buildings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Metal roofing works well on low-slope commercial buildings when the slope meets minimum requirements, typically 1/4:12 or greater for standing seam systems with proper sealant. R-panel and standing seam are common on commercial warehouses, retail buildings, and agricultural structures throughout West Texas. For true flat roofs with slopes below 1/4:12, TPO or EPDM membrane systems are generally more appropriate. We assess your building's slope and recommend the best system for the specific application."
        }
      }
    ]
  };

  const cities = [
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
  ];

  return (
    <div className="container-custom py-12">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Metal Roofing", url: "/metal-roofing/" }
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Metal Roofing Installation and Repair Across West Texas
      </h1>

      <img
        src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-amarillo-40-1280w.webp"
        alt="Metal roofing installation in West Texas - standing seam panels on residential and commercial buildings"
        className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg mb-6 md:mb-8"
      />

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">Why Do West Texas Homeowners Choose Metal Roofing?</h2>
          <p className="text-lg mb-4">
            Metal roofing has moved from agricultural buildings and commercial warehouses into mainstream residential use across West Texas, and the reasons are practical. In a region where hail storms, high winds, and extreme heat test every roof, metal outperforms other materials on durability, energy efficiency, and long-term cost.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">40-50 Year Lifespan</h3>
              <p className="text-sm text-gray-600">
                Metal roofs last two to three times longer than asphalt shingles. Many standing seam installations from the 1970s and 1980s are still performing across the Panhandle with minimal maintenance.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">Hail Resistance</h3>
              <p className="text-sm text-gray-600">
                Standing seam and thick-gauge metal panels resist denting from all but the largest hailstones. While shingle roofs often need full replacement after a major hail event, metal roofs frequently survive with cosmetic damage only.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">Wind Resistance (140+ mph)</h3>
              <p className="text-sm text-gray-600">
                Interlocking standing seam panels resist wind uplift far beyond the 60-70 mph threshold where shingle tabs begin to lift. Metal roofing is rated for 140+ mph winds in most configurations.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">Energy Efficiency</h3>
              <p className="text-sm text-gray-600">
                Reflective metal surfaces bounce solar heat away from the building, reducing cooling costs by 20-25% in Texas summers. Light-colored metal roofs with Kynar 500 finishes maintain their reflectivity for decades.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">Low Maintenance</h3>
              <p className="text-sm text-gray-600">
                No granule loss, no shingle tabs to replace, and no moss or algae growth. The main maintenance items are periodic fastener checks and sealant replacement at penetrations, typically every 10-15 years.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">What Metal Roofing Options Are Available?</h2>
        <p className="mb-6">
          We install every major type of metal roofing system, each suited to different buildings, budgets, and aesthetic preferences. Here is how they compare.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Standing Seam (Premium)</h3>
              <p className="mb-3">
                The highest-performing metal roofing system available. Raised seams with concealed fasteners create a clean, modern profile that eliminates the most common failure points.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Concealed fastener system prevents leak points</li>
                <li>Thermal expansion and contraction handled by floating clips</li>
                <li>Available in 24-gauge and 26-gauge steel or aluminum</li>
                <li>Kynar 500 paint finish resists fading for 30+ years</li>
                <li>50+ year lifespan with proper installation</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Corrugated Metal (Budget-Friendly)</h3>
              <p className="mb-3">
                A proven, economical option with decades of performance history across Texas. The classic ribbed profile works on everything from homes and barns to commercial storage buildings.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Lowest cost per square foot of any metal roofing option</li>
                <li>Exposed fastener system makes installation straightforward</li>
                <li>Available in 26-gauge and 29-gauge steel</li>
                <li>Multiple color options with baked-on paint finishes</li>
                <li>30-40 year lifespan with periodic fastener maintenance</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Metal Shingles (Traditional Look)</h3>
              <p className="mb-3">
                Metal panels stamped to replicate the appearance of traditional shingles, slate, or wood shake. Ideal for homeowners who want metal durability without changing their home&apos;s curb appeal.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Interlocking panels create a seamless, traditional appearance</li>
                <li>Hidden fastener system for a clean finish</li>
                <li>Stone-coated options available for enhanced texture and color</li>
                <li>Class 4 impact rating standard on most products</li>
                <li>40-50 year lifespan with manufacturer warranties</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">R-Panel (Commercial)</h3>
              <p className="mb-3">
                The workhorse of commercial and agricultural metal roofing. R-panel systems offer reliable, economical performance for large-area coverage.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Wide panels cover large areas quickly, reducing labor costs</li>
                <li>Exposed fastener system with neoprene washers for weather seal</li>
                <li>Common on warehouses, retail buildings, and farm structures</li>
                <li>Available in 26-gauge steel with multiple color options</li>
                <li>35-45 year lifespan with proper fastener maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-brand-brown">Metal Roofing Specification Comparison</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-brand-gold text-white">
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Gauge</th>
                <th className="p-4 text-left">Lifespan</th>
                <th className="p-4 text-left">Cost/sq ft</th>
                <th className="p-4 text-left">Pros</th>
                <th className="p-4 text-left">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Standing Seam</td>
                <td className="p-4">24-26 ga</td>
                <td className="p-4">50+ years</td>
                <td className="p-4">$9-$14</td>
                <td className="p-4">Concealed fasteners, best wind/hail performance, modern look</td>
                <td className="p-4">Highest cost, requires skilled installers</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Corrugated</td>
                <td className="p-4">26-29 ga</td>
                <td className="p-4">30-40 years</td>
                <td className="p-4">$4-$7</td>
                <td className="p-4">Lowest cost, proven performance, fast installation</td>
                <td className="p-4">Exposed fasteners need periodic maintenance</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Stone-Coated Steel</td>
                <td className="p-4">26 ga</td>
                <td className="p-4">40-50 years</td>
                <td className="p-4">$8-$12</td>
                <td className="p-4">Traditional shingle/tile look, Class 4 impact rating</td>
                <td className="p-4">Higher cost than corrugated, heavier per panel</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">R-Panel</td>
                <td className="p-4">26 ga</td>
                <td className="p-4">35-45 years</td>
                <td className="p-4">$5-$8</td>
                <td className="p-4">Wide coverage, economical for large buildings</td>
                <td className="p-4">Exposed fasteners, less aesthetic for homes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">Is Metal Roofing a Good Choice for Commercial Buildings?</h2>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="mb-4">
            Commercial metal roofing is one of our core specialties. From Permian Basin warehouses to Panhandle retail centers, metal roofing systems deliver the durability and low maintenance that building owners and facility managers need.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Building Types</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li><strong>Warehouses:</strong> R-panel and corrugated for large footprints at low cost per square foot</li>
                <li><strong>Retail:</strong> Standing seam for modern appearance and concealed fasteners</li>
                <li><strong>Agricultural:</strong> Corrugated and R-panel for barns, equipment sheds, and livestock facilities</li>
                <li><strong>Flat-to-low-slope:</strong> Standing seam with proper slope (minimum 1/4:12) and sealant at laps</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Commercial Advantages</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Lower lifecycle cost than repeated membrane replacements</li>
                <li>Minimal disruption during installation compared to built-up roofing</li>
                <li>Insurance premium discounts for impact-resistant metal systems</li>
                <li>Energy savings reduce operating costs for climate-controlled buildings</li>
                <li>Metal panels can span long distances without interior support columns</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">How Do You Maintain and Repair a Metal Roof?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-brand-brown mb-2">Common Repairs</h3>
            <p className="text-gray-600 mb-3">
              Metal roofs require less repair than other systems, but they are not maintenance-free. The most common issues we address include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li><strong>Fastener tightening:</strong> Exposed fasteners loosen over time from thermal cycling and can allow water entry</li>
              <li><strong>Sealant replacement:</strong> Butyl tape and caulk at laps, penetrations, and transitions deteriorate after 10-15 years</li>
              <li><strong>Panel repair:</strong> Isolated dents from large hail or fallen branches can sometimes be repaired without full panel replacement</li>
              <li><strong>Rust treatment:</strong> Edge cuts, scratches, and fastener points on steel panels may develop rust spots that need treatment</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-brand-brown mb-2">Coating Refresh</h3>
            <p className="text-gray-600 mb-3">
              After 20-30 years, metal roof coatings can be refreshed to extend the system&apos;s life by another 10-15 years at a fraction of the replacement cost.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>Elastomeric roof coatings seal minor leaks and restore reflectivity</li>
              <li>Rust-inhibiting primers treat surface corrosion before recoating</li>
              <li>Silicone coatings provide UV protection and ponding water resistance</li>
              <li>A full roof coating costs 30-50% less than panel replacement</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Metal Roofing Across West Texas</h2>
          <p className="mb-4">
            We install and repair metal roofing systems for homes and businesses throughout the Texas Panhandle, Permian Basin, and South Plains. Select your city for local details.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map(city => (
              <a
                key={city.slug}
                href={`/metal-roofing-${city.slug}/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <span className="font-semibold text-brand-brown">
                  Metal Roofing in {city.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </FadeIn>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions About Metal Roofing</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-1">
            <AccordionTrigger>How long does a metal roof last in West Texas?</AccordionTrigger>
            <AccordionContent>
              A properly installed metal roof in West Texas lasts 40-50 years, and some standing seam systems exceed 60 years with minimal maintenance. This is roughly double the lifespan of asphalt shingles in the same climate. Metal handles the region&apos;s intense UV exposure, temperature extremes (from below freezing to over 110 degrees), and high winds far better than asphalt or composite materials. The main maintenance items are periodic fastener checks and sealant replacement at penetrations, typically every 10-15 years.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>Are metal roofs louder than shingle roofs during rain and hail?</AccordionTrigger>
            <AccordionContent>
              Modern metal roof installations are no louder than shingle roofs when properly installed with solid decking and underlayment beneath the panels. The metal sits on top of plywood sheathing and synthetic underlayment, which dampens sound effectively. Metal roofs installed directly over open purlins (common on older barns and agricultural buildings) are louder, but residential and commercial installations over solid deck are comparable to any other roofing material in terms of interior noise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>How much does metal roofing cost compared to asphalt shingles?</AccordionTrigger>
            <AccordionContent>
              Metal roofing typically costs $9-$14 per square foot installed for standing seam and $6-$9 per square foot for corrugated or R-panel systems. Compare that to $4.50-$6.50 per square foot for quality architectural shingles. For a 2,000-square-foot home, that means $18,000-$28,000 for standing seam metal versus $9,000-$13,000 for shingles. However, when you factor in the 40-50 year metal lifespan versus 20-25 years for shingles, plus lower cooling costs and insurance discounts, metal often costs less per year of service.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>Can a metal roof be installed over existing shingles?</AccordionTrigger>
            <AccordionContent>
              In many cases, yes. Metal roofing can be installed over one layer of existing asphalt shingles using a batten or furring strip system that creates an air gap between the old shingles and the new metal. This approach saves on tear-off and disposal costs and can reduce the project cost by $1,000-$3,000. However, it only works if the existing deck is in sound condition and local building codes permit it. We inspect the existing roof structure before recommending an overlay versus a full tear-off.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>Do metal roofs attract lightning?</AccordionTrigger>
            <AccordionContent>
              No. Metal roofing does not attract lightning any more than other roofing materials. Lightning strikes the highest point in an area regardless of material. In fact, metal roofing is one of the safest options during a lightning storm because it is non-combustible. If lightning does strike a metal roof, the energy disperses across the surface rather than concentrating at the impact point. Metal roofs carry the same lightning risk as asphalt, tile, or wood roofs on the same structure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>What colors and styles are available for metal roofing?</AccordionTrigger>
            <AccordionContent>
              Metal roofing is available in virtually any color you can imagine, from traditional earth tones and grays to bold reds, blues, and greens. Kynar 500 (PVDF) paint finishes resist fading for 30+ years. Style options include standing seam (clean, modern lines), corrugated (classic agricultural look), metal shingles (mimicking traditional shingle or slate appearance), and R-panel (economical ribbed profile for commercial use). We bring color samples and style guides to every estimate appointment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-7">
            <AccordionTrigger>Is metal roofing a good choice for flat commercial buildings?</AccordionTrigger>
            <AccordionContent>
              Metal roofing works well on low-slope commercial buildings when the slope meets minimum requirements, typically 1/4:12 or greater for standing seam systems with proper sealant. R-panel and standing seam are common on commercial warehouses, retail buildings, and agricultural structures throughout West Texas. For true flat roofs with slopes below 1/4:12, TPO or EPDM membrane systems are generally more appropriate. We assess your building&apos;s slope and recommend the best system for the specific application.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get a Free Metal Roofing Estimate</h2>
        <p className="mb-6 text-lg">
          Whether you are building new, replacing an aging roof, or exploring metal as an upgrade from shingles, we provide honest comparisons and transparent pricing. Call us or schedule your free consultation online.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="tel:8066226041" className="btn-primary bg-white text-brand-brown hover:bg-gray-100">
            Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown">
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
