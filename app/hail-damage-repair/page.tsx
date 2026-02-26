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
  alternates: { canonical: "https://5starroofingpros.com/hail-damage-repair/" },
  title: "Hail Damage Roof Repair West Texas | 5 Star Roofing",
  description:
    "Free hail damage roof inspections in West Texas. Insurance claims, emergency tarping, and full roof replacement after hail storms. Call (806) 622-6041.",
  openGraph: {
    title: "Hail Damage Roof Repair West Texas | 5 Star Roofing",
    description: "Free hail damage roof inspections in West Texas. Insurance claims, emergency tarping, and full roof replacement after hail storms. Call (806) 622-6041.",
    url: "https://5starroofingpros.com/hail-damage-repair/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const cities = [
  { name: "Amarillo", slug: "amarillo" },
  { name: "Andrews", slug: "andrews" },
  { name: "Big Spring", slug: "big-spring" },
  { name: "Borger", slug: "borger" },
  { name: "Canyon", slug: "canyon" },
  { name: "Dumas", slug: "dumas" },
  { name: "Hereford", slug: "hereford" },
  { name: "Levelland", slug: "levelland" },
  { name: "Lubbock", slug: "lubbock" },
  { name: "Midland", slug: "midland" },
  { name: "Monahans", slug: "monahans" },
  { name: "Odessa", slug: "odessa" },
  { name: "Pampa", slug: "pampa" },
  { name: "Perryton", slug: "perryton" },
  { name: "Plainview", slug: "plainview" },
  { name: "Snyder", slug: "snyder" },
];

const faqItems = [
  {
    question: "How do I know if my roof has hail damage?",
    answer:
      "Look for cracked or missing shingles, dented gutters and downspouts, granule buildup in gutters, and soft spots on the roof surface. Hail damage is not always visible from the ground, so we recommend a professional inspection after any significant hail event. Our team provides free hail damage assessments across West Texas.",
  },
  {
    question: "Does homeowner's insurance cover hail damage repairs?",
    answer:
      "Yes, most Texas homeowner's insurance policies cover hail damage roof repair minus your deductible. We work directly with your insurance company to document the damage, meet with adjusters on-site, and file supplements when the initial estimate falls short. Our documentation process has helped homeowners recover full repair costs consistently.",
  },
  {
    question:
      "How long do I have to file a hail damage insurance claim in Texas?",
    answer:
      "Texas law generally allows one year from the date of the hail event to file an insurance claim, though some policies have shorter windows. We recommend filing as soon as possible after a storm because evidence of damage can deteriorate over time. Call us for a free inspection so we can document the damage while it is fresh.",
  },
  {
    question: "What size hail causes roof damage?",
    answer:
      "Hail as small as 1 inch in diameter (about the size of a quarter) can crack asphalt shingles and dent metal flashing. At 1.5 inches and above, damage becomes severe enough to warrant a full roof replacement on most residential roofing systems. West Texas regularly sees hailstones exceeding 2 inches during spring and summer storms.",
  },
  {
    question: "Should I get a roof inspection after every hail storm?",
    answer:
      "Yes. Even minor hail events can cause hidden damage that leads to leaks months later. A professional inspection catches issues like granule loss, hairline cracks, and compromised flashing before they turn into costly interior water damage. 5 Star Roofing offers free post-storm inspections throughout our service area.",
  },
  {
    question: "How much does hail damage roof repair cost in West Texas?",
    answer:
      "Costs vary widely depending on the extent of damage and roofing material. Minor repairs such as replacing a few shingles may cost $300 to $800, while a full roof replacement after severe hail typically runs $8,000 to $15,000 for a standard residential home. Most homeowners pay only their insurance deductible since hail damage is a covered peril.",
  },
  {
    question: "What are Class 4 impact-resistant shingles?",
    answer:
      "Class 4 is the highest impact-resistance rating for roofing materials under UL 2218 testing. These shingles withstand a 2-inch steel ball dropped from 20 feet without cracking. Installing Class 4 shingles can reduce your Texas homeowner's insurance premium by 10% to 35% and significantly extend the time between hail-related replacements.",
  },
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Hail Damage Roof Repair",
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
      parentOrganization: {
        "@id": "https://5starroofingpros.com/#organization",
      },
    },
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: city.name,
      address: { "@type": "PostalAddress", addressRegion: "TX" },
    })),
    description:
      "Professional hail damage roof repair across West Texas. Free storm damage inspections, insurance claim assistance, emergency tarping, and full roof replacement after hail.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hail Damage Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hail Damage Roof Inspection",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Tarping After Hail",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Insurance Claim Assistance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Roof Replacement After Hail",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="container-custom py-12">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Hail Damage Roof Repair Across West Texas
      </h1>

      <img
        src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-16-1280w.webp"
        alt="Hail damage roof repair in West Texas - damaged shingles and professional inspection by 5 Star Roofing"
        className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg mb-6 md:mb-8"
      />

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            How Does West Texas Hail Threaten Your Roof?
          </h2>
          <p className="text-lg mb-4">
            The Texas Panhandle and Permian Basin sit squarely in Hail Alley,
            where severe thunderstorms produce damaging hailstones from April
            through September. Amarillo alone averages 3 to 4 significant hail
            events per year, with stones regularly exceeding golf-ball size. Each
            storm can leave behind thousands of damaged roofs across the region.
          </p>
          <p className="text-lg">
            5 Star Roofing responds to hail events across 16 West Texas cities.
            We provide free inspections, handle the insurance paperwork, and
            complete repairs quickly so your home stays protected. Whether you
            need a few shingles replaced or a full tear-off after a major storm,
            our crews are ready.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What Are the Signs of Hail Damage on Your Roof?
        </h2>
        <p className="mb-4">
          Hail damage is not always obvious from the ground. Knowing what to
          look for can save you from expensive water damage down the road. Here
          are the most common indicators our inspectors check:
        </p>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.webp"
            alt="Hail damage on residential roof shingles in Canyon, Texas showing impact marks and granule loss"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Cracked or Bruised Shingles
            </h3>
            <p className="text-gray-700">
              Hail impacts fracture the fiberglass mat beneath the surface
              granules. These cracks may not be visible from the ground, but they
              compromise the shingle&apos;s ability to shed water. Dark spots or
              soft areas when pressed indicate bruised shingles that will fail
              prematurely.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Granule Loss in Gutters
            </h3>
            <p className="text-gray-700">
              After a hail storm, check your gutters and downspout outlets for
              excessive granule accumulation. Granules protect shingles from UV
              degradation, and their loss accelerates aging by several years.
              Heavy granule deposits after a storm are a strong indicator of
              widespread hail impact.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Dented Gutters and Flashing
            </h3>
            <p className="text-gray-700">
              Aluminum gutters, vents, and metal flashing dent easily under hail
              impact. These dents serve as clear evidence for insurance claims
              and indicate that your shingles likely sustained similar force. We
              document all metal damage during our free inspections.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Soft Spots and Exposed Felt
            </h3>
            <p className="text-gray-700">
              Large hailstones can punch through shingle layers entirely,
              exposing the felt underlayment beneath. Even without full
              penetration, the impact creates soft spots where water will
              eventually pool and leak into your attic. These areas need
              immediate attention.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Does the Hail Damage Repair Process Work?
        </h2>
        <p className="mb-4">
          From the first phone call to final cleanup, our process is designed to
          minimize stress and maximize your insurance recovery. Here is how we
          handle every hail damage project:
        </p>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-borger-12-1280w.webp"
            alt="Professional hail damage roof repair in progress in Borger, Texas Panhandle"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">1</div>
            <h3 className="font-bold mb-2 text-brand-brown">
              Free Inspection
            </h3>
            <p className="text-sm text-gray-600">
              We inspect your roof, siding, gutters, and screens for hail
              impact. Our inspectors climb the roof and document every point of
              damage with photos and measurements.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">2</div>
            <h3 className="font-bold mb-2 text-brand-brown">
              Damage Documentation
            </h3>
            <p className="text-sm text-gray-600">
              We prepare a detailed report with photo evidence, damage maps, and
              material specifications that meet insurance company requirements
              for claim approval.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">3</div>
            <h3 className="font-bold mb-2 text-brand-brown">
              Insurance Coordination
            </h3>
            <p className="text-sm text-gray-600">
              We meet your adjuster on-site, walk the roof together, and ensure
              nothing is missed. If the initial estimate falls short, we file
              supplements with additional documentation.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">4</div>
            <h3 className="font-bold mb-2 text-brand-brown">
              Repair or Replace
            </h3>
            <p className="text-sm text-gray-600">
              Once approved, our crews complete the work efficiently. Minor
              repairs take a day; full replacements typically take 1 to 3 days
              depending on roof size and material.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Can We Help With Your Hail Damage Insurance Claim?
        </h2>
        <p className="mb-4">
          Filing a hail damage insurance claim can feel overwhelming, especially
          after a major storm when thousands of homeowners are calling their
          insurance companies at the same time. 5 Star Roofing handles the
          process for you from start to finish.
        </p>
        <div className="bg-brand-gold-light p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-brown mb-2">
                What We Handle
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  Initial claim filing with detailed damage documentation
                </li>
                <li>On-site adjuster meetings to walk the damage together</li>
                <li>
                  Supplement filings when the first estimate misses damage
                </li>
                <li>Material and labor cost verification against Xactimate</li>
                <li>Coordination between your insurance and our crew schedule</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">
                What You Can Expect
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Most homeowners pay only their deductible</li>
                <li>
                  Claims typically take 2 to 4 weeks from filing to approval
                </li>
                <li>
                  We never ask for upfront payment before insurance approves
                </li>
                <li>
                  All work is warrantied regardless of insurance involvement
                </li>
                <li>
                  We communicate with you at every step of the process
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What Roofing Materials Can Be Repaired After Hail Damage?
        </h2>
        <p className="mb-4">
          Hail damages every type of roofing material differently. Our crews are
          trained and equipped to repair or replace all common residential and
          commercial roofing systems found across West Texas:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Asphalt Shingles
            </h3>
            <p className="text-gray-700">
              The most common residential roofing material in West Texas.
              Standard 3-tab shingles are the most vulnerable to hail, while
              architectural shingles offer better resistance. We install
              GAF, Owens Corning, and CertainTeed products, including
              Class 4 impact-resistant options that qualify for insurance
              discounts.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Metal Roofing
            </h3>
            <p className="text-gray-700">
              Standing seam and corrugated metal roofs resist hail better
              than most materials, but large stones still cause cosmetic
              denting and can compromise panel seams. We repair dented panels,
              replace damaged sections, and reseal seams to restore full
              weather protection.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              TPO and Flat Roofs
            </h3>
            <p className="text-gray-700">
              Commercial TPO, EPDM, and modified bitumen membranes can
              suffer punctures and membrane tears from severe hail. Our
              commercial division handles flat roof hail damage repairs with
              proper hot-air welded patches and full membrane replacements when
              needed.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Tile and Specialty Roofing
            </h3>
            <p className="text-gray-700">
              Clay and concrete tile roofs crack and shatter under hail
              impact. We source matching replacement tiles and repair the
              underlayment beneath. For specialty materials like slate and
              cedar shake, we work with specialty suppliers to maintain the
              roof&apos;s original appearance.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Do You File a Hail Damage Insurance Claim?
        </h2>
        <p className="mb-4">
          Filing an insurance claim after hail damage follows a specific process.
          Knowing the steps upfront helps you avoid delays, missed deadlines, and
          underpaid settlements. Here is the step-by-step process we recommend to
          every homeowner in our service area:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 1</div>
            <h3 className="font-bold text-brand-brown mb-2">Document Damage Immediately</h3>
            <p className="text-sm text-gray-600">
              Take photos of your roof, gutters, siding, and any interior water stains
              within 24 hours of the storm. Record the date, time, and areas affected.
              Save any hailstones in your freezer as size evidence.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 2</div>
            <h3 className="font-bold text-brand-brown mb-2">Contact Your Insurance Company</h3>
            <p className="text-sm text-gray-600">
              Call your carrier within 24 to 48 hours. Provide the storm date, a
              general description of damage, and your policy number. Most Texas
              policies require timely reporting to preserve your claim rights.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 3</div>
            <h3 className="font-bold text-brand-brown mb-2">Get a Professional Roof Inspection</h3>
            <p className="text-sm text-gray-600">
              Schedule a free inspection with 5 Star Roofing before the adjuster
              arrives. Our inspectors climb the roof, document every impact point with
              photos and measurements, and prepare a report that meets insurer
              standards.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 4</div>
            <h3 className="font-bold text-brand-brown mb-2">Meet With the Insurance Adjuster</h3>
            <p className="text-sm text-gray-600">
              We attend the adjuster meeting on your behalf, walk the roof together,
              and point out every area of damage. Having a roofing professional present
              ensures nothing gets overlooked in the adjuster&apos;s scope of work.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 5</div>
            <h3 className="font-bold text-brand-brown mb-2">Review the Scope of Work</h3>
            <p className="text-sm text-gray-600">
              Compare the adjuster&apos;s estimate against our independent assessment.
              If the insurance estimate falls short, we file a supplement with
              additional documentation and line-item pricing from Xactimate.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 6</div>
            <h3 className="font-bold text-brand-brown mb-2">Choose Your Contractor and Schedule</h3>
            <p className="text-sm text-gray-600">
              Once your claim is approved, choose a licensed contractor and schedule
              repairs. 5 Star Roofing never requires upfront payment before insurance
              approval. Most residential repairs are completed in 1 to 3 days.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.6}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Do You Assess Hail Damage Severity?
        </h2>
        <p className="mb-4">
          Not all hail damage warrants an insurance claim. Understanding the three
          levels of severity helps you make informed decisions about repairs and
          whether to involve your insurance carrier:
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Cosmetic Damage</h3>
            <p className="text-gray-700 mb-3">
              Dents in metal components, minor granule displacement on shingles, and
              small dings in gutters. The roof still functions properly and sheds water
              as designed.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Action:</strong> Monitor during next inspection. May not warrant
              a claim depending on your deductible and premium impact.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Functional Damage</h3>
            <p className="text-gray-700 mb-3">
              Cracked shingles, broken sealant strips, exposed underlayment, and
              significant granule loss that accelerates UV degradation. The roof&apos;s
              ability to protect your home is compromised.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Action:</strong> File an insurance claim. Repairs prevent further
              deterioration and interior water damage within months.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Critical Damage</h3>
            <p className="text-gray-700 mb-3">
              Punctures through the decking, active leaks into living spaces, large
              areas of missing shingles, and structural compromise from repeated
              impacts. Immediate repair is necessary.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Action:</strong> Emergency tarping followed by full replacement.
              File a claim immediately and request expedited processing.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.7}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Do You Tell the Difference Between Hail, Wind, and Water Damage?
        </h2>
        <p className="mb-4">
          Insurance adjusters need to verify the cause of damage before approving a
          claim. Knowing how to identify each type helps you communicate accurately
          with your carrier and ensures the right repairs are performed:
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Hail Damage Signs</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Circular dents or dimples on shingles and metal</li>
              <li>Bruised shingles that feel soft when pressed</li>
              <li>Random impact pattern across the roof surface</li>
              <li>Cracked tiles with star or spider-web fractures</li>
              <li>Granule accumulation in gutters after storms</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Wind Damage Signs</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Lifted or curled shingle edges along ridges and edges</li>
              <li>Missing shingle sections, especially on windward slopes</li>
              <li>Debris impact marks from airborne objects</li>
              <li>Damaged or displaced ridge cap shingles</li>
              <li>Directional pattern following prevailing wind</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Water Damage Signs</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Interior ceiling stains or discoloration</li>
              <li>Sagging or bubbling areas on the roof surface</li>
              <li>Mold or mildew growth in attic spaces</li>
              <li>Rotted fascia boards or decking underneath</li>
              <li>Peeling paint on exterior walls near the roofline</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      {/* City Variant Link Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Hail Damage Repair Across West Texas
        </h2>
        <p className="mb-4 text-gray-700">
          We provide hail damage roof repair in 16 cities across the Texas
          Panhandle and Permian Basin. Select your city for local service
          details:
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <a
              key={city.slug}
              href={`/hail-damage-repair-${city.slug}/`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
            >
              <span className="font-semibold text-brand-brown">
                Hail Damage Repair in {city.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <h2 className="text-2xl font-bold mt-12 mb-4">
        Frequently Asked Questions About Hail Damage Repair
      </h2>
      <Accordion type="single" collapsible className="mb-12">
        {faqItems.map((item, index) => (
          <AccordionItem key={`faq-${index + 1}`} value={`faq-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* CTA Section */}
      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Get Your Free Hail Damage Assessment
        </h2>
        <p className="mb-6 text-lg">
          Had a recent hail storm? 5 Star Roofing provides free roof inspections
          and handles the full insurance claim process. Call today or request an
          inspection online.
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
    </div>
  );
}
