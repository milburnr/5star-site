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
  alternates: { canonical: 'https://5starroofingpros.com/roof-replacement/' },
  title: 'Roof Replacement West Texas | 5 Star Roofing',
  description: "Full roof replacement across West Texas. Shingles, metal, TPO, and flat roof options with financing and insurance claim coordination. Free estimates.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Replacement Services",
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
    "description": "Complete roof replacement services across West Texas. Asphalt shingle, metal, TPO, and flat roof systems with full tear-off, material selection, and warranty coverage.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Replacement Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shingle Roof Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metal Roof Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flat Roof Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tear-Off and Re-Roof" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a full roof replacement cost in West Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A full roof replacement in West Texas typically costs between $8,000 and $25,000 for residential homes, depending on roof size, pitch, and materials selected. Asphalt architectural shingles average $4.50-$6.50 per square foot installed, while standing seam metal runs $9-$14 per square foot. Most homeowners pay between $12,000 and $18,000 for a standard 2,000-square-foot home. We provide free written estimates with transparent line-item pricing."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a roof replacement take from start to finish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential roof replacements take 1-3 days once materials arrive on site. The full process from initial inspection to completed installation typically spans 1-2 weeks, accounting for material ordering and scheduling. Larger or more complex roofs with steep pitches, multiple valleys, or specialty materials may take 3-5 days of active work. Weather delays are common in West Texas, so we build buffer time into every project schedule."
        }
      },
      {
        "@type": "Question",
        "name": "Should I replace my roof before selling my home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A new roof can increase your home's value by $12,000-$15,000 on average and significantly speeds up the sale process. Buyers in West Texas are especially cautious about roof condition due to frequent hail storms, and many mortgage lenders require roofs to be in good condition before approving loans. If your roof is over 15 years old or has visible damage, replacing it before listing typically yields a strong return on investment."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best roofing material for West Texas weather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For West Texas, Class 4 impact-resistant architectural shingles like GAF Timberline HDZ offer the best balance of hail protection, wind resistance (up to 130 mph), and value. Standing seam metal roofing is the premium choice, lasting 40-50 years with superior hail and wind performance. For flat roofs, TPO and EPDM membranes handle the extreme temperature swings from summer highs above 100 degrees to winter freezes below 20 degrees."
        }
      },
      {
        "@type": "Question",
        "name": "Can a new roof be installed over existing shingles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Texas building codes allow up to two layers of asphalt shingles on a roof, so an overlay is sometimes possible if your existing layer is in reasonable condition. However, we generally recommend a full tear-off because it lets us inspect and repair the roof deck underneath, ensures proper underlayment installation, and provides a longer-lasting result. Overlays can also mask hidden moisture damage and void certain manufacturer warranties."
        }
      },
      {
        "@type": "Question",
        "name": "What warranties come with a new roof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "New roofs come with two types of warranties. Manufacturer warranties cover material defects and typically last 25-50 years depending on the product selected. GAF offers a 50-year non-prorated warranty on their Timberline HDZ line. Our workmanship warranty covers installation quality and lasts 5-10 years depending on the system. We are a GAF-certified installer, which qualifies your project for enhanced warranty coverage beyond what standard installers can offer."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose between asphalt shingles and metal roofing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asphalt shingles cost less upfront ($8,000-$15,000 for a typical home) and last 20-30 years with Class 4 impact-rated products. Metal roofing costs more initially ($15,000-$30,000) but lasts 40-50 years with virtually no maintenance. Metal also reduces cooling costs by 20-25% by reflecting solar heat. If you plan to stay in your home long-term, metal roofing often has a lower total cost of ownership. For shorter-term situations, quality architectural shingles deliver excellent protection at a lower entry price."
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
        { name: "Roof Replacement", url: "/roof-replacement/" }
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
        Roof Replacement Services Across West Texas
      </h1>

      <img
        src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-20-1280w.webp"
        alt="Completed roof replacement in West Texas - new architectural shingles installed on residential home"
        className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg mb-6 md:mb-8"
      />

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">When Is It Time for a Full Roof Replacement?</h2>
          <p className="text-lg mb-4">
            Not every roof problem requires a full replacement, but certain signs point to a roof that has reached the end of its useful life. Knowing when to invest in a new roof saves you from escalating repair costs and protects your home from water damage, mold, and structural issues.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Age Thresholds</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Asphalt shingles:</strong> 20-25 years is the typical lifespan in West Texas, often shorter due to intense UV exposure and hail</li>
                <li><strong>Metal roofing:</strong> 40-50 years before panels need replacing, though fasteners and sealants may need attention sooner</li>
                <li><strong>Flat roofs (TPO/EPDM):</strong> 15-20 years depending on maintenance and membrane quality</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Other Warning Signs</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Multiple repair bills in the same year adding up to more than half the cost of replacement</li>
                <li>Storm damage that affects more than 30% of the roof surface</li>
                <li>Granule loss exposing bare asphalt on shingle roofs</li>
                <li>Sagging or uneven roof lines indicating deck deterioration</li>
                <li>Rising energy bills from lost insulation value</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">What Roofing Materials Are Available for Replacement?</h2>
        <p className="mb-6">
          Choosing the right roofing material depends on your budget, how long you plan to stay in the home, and what level of storm protection you need. We install every major roofing system available and help you weigh the trade-offs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Asphalt Shingles</h3>
              <p className="mb-3">
                The most popular residential roofing choice in Texas. Available in three tiers to match different budgets and performance needs.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li><strong>3-Tab shingles:</strong> Entry-level, flat profile, 15-20 year warranty</li>
                <li><strong>Architectural (dimensional):</strong> Thicker, layered look, 25-30 year warranty, better wind resistance</li>
                <li><strong>Designer shingles:</strong> Premium appearance mimicking slate or wood shake, 30-50 year warranty</li>
                <li>Class 4 impact-rated options available for hail-prone areas</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Metal Roofing</h3>
              <p className="mb-3">
                Premium durability for homeowners who want a roof that outlasts the mortgage. Increasingly popular across West Texas for its hail resistance and energy savings.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li><strong>Standing seam:</strong> Concealed fasteners, clean modern lines, 40-50 year lifespan</li>
                <li><strong>Corrugated metal:</strong> Budget-friendly with proven performance for decades</li>
                <li>Reflects solar heat, reducing cooling costs by 20-25%</li>
                <li>Wind rated to 140+ mph</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">TPO, PVC, and EPDM (Flat Roofs)</h3>
              <p className="mb-3">
                Single-ply membrane systems designed for low-slope and flat roofs common on commercial buildings and some residential additions.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li><strong>TPO:</strong> White reflective surface, heat-welded seams, energy efficient</li>
                <li><strong>PVC:</strong> Superior chemical resistance, ideal for restaurants and industrial buildings</li>
                <li><strong>EPDM:</strong> Proven rubber membrane, flexible in temperature extremes</li>
                <li>15-20 year lifespan with proper maintenance</li>
                <li>Excellent choice for patio covers, garages, and home additions</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Built-Up Roofing (BUR)</h3>
              <p className="mb-3">
                Multiple-layer systems that have protected flat-roofed buildings for over a century. Built-up roofing stacks alternating layers of bitumen and reinforcing fabric.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>3-5 alternating layers create a thick, durable membrane</li>
                <li>Gravel surface adds fire resistance and UV protection</li>
                <li>20-30 year lifespan with minimal maintenance</li>
                <li>Well-suited for buildings with heavy rooftop equipment</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-brand-brown">Roof Replacement Material Comparison</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-brand-gold text-white">
                <th className="p-4 text-left">Material</th>
                <th className="p-4 text-left">Lifespan</th>
                <th className="p-4 text-left">Cost per Sq Ft</th>
                <th className="p-4 text-left">Best Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Asphalt Shingles</td>
                <td className="p-4">20-30 years</td>
                <td className="p-4">$4.50-$7.50</td>
                <td className="p-4">Most residential homes, budget-friendly</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Standing Seam Metal</td>
                <td className="p-4">40-50 years</td>
                <td className="p-4">$9-$14</td>
                <td className="p-4">Long-term homes, maximum durability</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">TPO / PVC Membrane</td>
                <td className="p-4">15-30 years</td>
                <td className="p-4">$5-$10</td>
                <td className="p-4">Flat and low-slope commercial roofs</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">EPDM Rubber</td>
                <td className="p-4">15-25 years</td>
                <td className="p-4">$4-$7</td>
                <td className="p-4">Budget flat roofs, proven reliability</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Built-Up (BUR)</td>
                <td className="p-4">20-30 years</td>
                <td className="p-4">$5-$9</td>
                <td className="p-4">Heavy-traffic roofs, industrial buildings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">What Happens During a Roof Replacement?</h2>
        <p className="mb-6">
          A roof replacement is one of the largest home improvement projects you can undertake. Knowing what happens at each stage helps you plan around the disruption and make informed decisions along the way.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-brand-gold mb-2">1</div>
            <h3 className="font-bold text-brand-brown mb-2">Inspection</h3>
            <p className="text-sm text-gray-600">
              Thorough roof and attic inspection to document current condition, identify deck damage, and determine the scope of work needed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-brand-gold mb-2">2</div>
            <h3 className="font-bold text-brand-brown mb-2">Estimate and Material Selection</h3>
            <p className="text-sm text-gray-600">
              Detailed written estimate with material options, color samples, and timeline. We walk you through the trade-offs so you choose with confidence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-brand-gold mb-2">3</div>
            <h3 className="font-bold text-brand-brown mb-2">Tear-Off and Installation</h3>
            <p className="text-sm text-gray-600">
              Complete removal of old roofing, deck inspection and repair, ice and water shield application, underlayment, and new roof installation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-brand-gold mb-2">4</div>
            <h3 className="font-bold text-brand-brown mb-2">Cleanup and Final Inspection</h3>
            <p className="text-sm text-gray-600">
              Magnetic nail sweep of your yard and driveway, debris hauled off-site, and a final walkthrough to confirm everything meets our standards.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">How Do Financing and Insurance Work for Roof Replacement?</h2>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="mb-4">
            A roof replacement is a significant investment, and we work to make the process as manageable as possible. Whether you are paying out of pocket or filing an insurance claim, we have experience guiding homeowners through the financial side.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Payment Options</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Free detailed estimates with no obligation</li>
                <li>Flexible payment scheduling</li>
                <li>No payment required until work is completed</li>
                <li>Financing referrals available for qualified homeowners</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Insurance Claim Coordination</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Free storm damage documentation for your claim</li>
                <li>We meet with your insurance adjuster on-site</li>
                <li>Supplemental claim filing for missed damage</li>
                <li>Direct billing to insurance when applicable</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Free Estimates</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>No-pressure written estimates within 48 hours</li>
                <li>Line-item pricing with no hidden fees</li>
                <li>Side-by-side material comparisons</li>
                <li>Honest recommendation on repair vs. replace</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Roof Replacement Across West Texas</h2>
          <p className="mb-4">
            We provide roof replacement services throughout the Texas Panhandle, Permian Basin, and South Plains. Select your city for local details and scheduling.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map(city => (
              <a
                key={city.slug}
                href={`/roof-replacement-${city.slug}/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <span className="font-semibold text-brand-brown">
                  Roof Replacement in {city.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </FadeIn>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions About Roof Replacement</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-1">
            <AccordionTrigger>How much does a full roof replacement cost in West Texas?</AccordionTrigger>
            <AccordionContent>
              A full roof replacement in West Texas typically costs between $8,000 and $25,000 for residential homes, depending on roof size, pitch, and materials selected. Asphalt architectural shingles average $4.50-$6.50 per square foot installed, while standing seam metal runs $9-$14 per square foot. Most homeowners pay between $12,000 and $18,000 for a standard 2,000-square-foot home. We provide free written estimates with transparent line-item pricing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>How long does a roof replacement take from start to finish?</AccordionTrigger>
            <AccordionContent>
              Most residential roof replacements take 1-3 days once materials arrive on site. The full process from initial inspection to completed installation typically spans 1-2 weeks, accounting for material ordering and scheduling. Larger or more complex roofs with steep pitches, multiple valleys, or specialty materials may take 3-5 days of active work. Weather delays are common in West Texas, so we build buffer time into every project schedule.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>Should I replace my roof before selling my home?</AccordionTrigger>
            <AccordionContent>
              A new roof can increase your home&apos;s value by $12,000-$15,000 on average and significantly speeds up the sale process. Buyers in West Texas are especially cautious about roof condition due to frequent hail storms, and many mortgage lenders require roofs to be in good condition before approving loans. If your roof is over 15 years old or has visible damage, replacing it before listing typically yields a strong return on investment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>What is the best roofing material for West Texas weather?</AccordionTrigger>
            <AccordionContent>
              For West Texas, Class 4 impact-resistant architectural shingles like GAF Timberline HDZ offer the best balance of hail protection, wind resistance (up to 130 mph), and value. Standing seam metal roofing is the premium choice, lasting 40-50 years with superior hail and wind performance. For flat roofs, TPO and EPDM membranes handle the extreme temperature swings from summer highs above 100 degrees to winter freezes below 20 degrees.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>Can a new roof be installed over existing shingles?</AccordionTrigger>
            <AccordionContent>
              Texas building codes allow up to two layers of asphalt shingles on a roof, so an overlay is sometimes possible if your existing layer is in reasonable condition. However, we generally recommend a full tear-off because it lets us inspect and repair the roof deck underneath, ensures proper underlayment installation, and provides a longer-lasting result. Overlays can also mask hidden moisture damage and void certain manufacturer warranties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>What warranties come with a new roof?</AccordionTrigger>
            <AccordionContent>
              New roofs come with two types of warranties. Manufacturer warranties cover material defects and typically last 25-50 years depending on the product selected. GAF offers a 50-year non-prorated warranty on their Timberline HDZ line. Our workmanship warranty covers installation quality and lasts 5-10 years depending on the system. We are a GAF-certified installer, which qualifies your project for enhanced warranty coverage beyond what standard installers can offer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-7">
            <AccordionTrigger>How do I choose between asphalt shingles and metal roofing?</AccordionTrigger>
            <AccordionContent>
              Asphalt shingles cost less upfront ($8,000-$15,000 for a typical home) and last 20-30 years with Class 4 impact-rated products. Metal roofing costs more initially ($15,000-$30,000) but lasts 40-50 years with virtually no maintenance. Metal also reduces cooling costs by 20-25% by reflecting solar heat. If you plan to stay in your home long-term, metal roofing often has a lower total cost of ownership. For shorter-term situations, quality architectural shingles deliver excellent protection at a lower entry price.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get Your Free Roof Replacement Estimate</h2>
        <p className="mb-6 text-lg">
          Whether your roof has aged out, suffered storm damage, or you are planning ahead for a home sale, we provide honest assessments and transparent pricing. Call us or schedule your free inspection online.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="tel:8066226041" className="btn-primary bg-white text-brand-brown hover:bg-gray-100">
            Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown">
            Schedule Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
