import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import { HAIL_HUB_HERO } from "@/components/heroes/hubHeroSets";
import RelatedArticles from "@/components/RelatedArticles";
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
    "Free hail damage roof inspections in West Texas. Insurance claims, Class 4 impact-resistant shingles, and full roof replacement after hail storms. Call (806) 622-6041.",
  openGraph: {
    title: "Hail Damage Roof Repair West Texas | 5 Star Roofing",
    description:
      "Free hail damage roof inspections in West Texas. Insurance claims, Class 4 impact-resistant shingles, and full roof replacement after hail storms. Call (806) 622-6041.",
    url: "https://5starroofingpros.com/hail-damage-repair/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-hail-damage.jpg",
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
    question: "How long do I have to file a hail damage insurance claim in Texas?",
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
      "Professional hail damage roof repair across West Texas. Free storm damage inspections, insurance claim assistance, Class 4 impact-resistant restoration, and full roof replacement after hail.",
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
            name: "Weatherproof Sheeting After Hail",
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
      <InteriorHeroSection
        heroVariant="service"
        service="Hail Damage Repair"
        h1="Hail Damage Repair in West Texas"
        image="/images/heroes/services/hail-hub-1200.webp"
        imageSrcSet={HAIL_HUB_HERO}
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Hail Damage Roof Repair Across West Texas
      </h2>

      

      {/* TL;DR */}
      <div className="bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6 mb-8">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
        <p className="text-gray-800 font-medium leading-relaxed mb-3">
          5 Star Roofing handles hail damage repair across 16 West Texas cities. Free inspections, insurance claim documentation, and Class 4 impact-resistant replacements. Most repairs covered by homeowner insurance — you pay only your deductible.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="/hail-damage-repair-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Amarillo Hail Repair</a>
          <a href="/hail-damage-repair-lubbock/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Lubbock</a>
          <a href="/hail-damage-repair-midland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Midland</a>
          <a href="/hail-damage-repair-odessa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Odessa</a>
        </div>
      </div>

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            How Does West Texas Hail Threaten Your Roof?
          </h2>
          <p className="text-lg mb-4">
            The Texas Panhandle and Permian Basin sit squarely in Hail Alley, where severe
            thunderstorms produce damaging hailstones from April through September. Amarillo alone
            averages 3 to 4 significant hail events per year, with stones regularly exceeding
            golf-ball size. Each storm can leave behind thousands of damaged roofs across the
            region.
          </p>
          <p className="text-lg">
            5 Star Roofing responds to hail events across 16 West Texas cities. We provide free
            inspections, handle the insurance paperwork, and complete repairs quickly so your home
            stays protected. Whether you need a few shingles replaced or a full tear-off after a
            major storm, our crews are ready.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What Are the Signs of Hail Damage on Your Roof?
        </h2>
        <p className="mb-4">
          Hail damage on Texas Panhandle homes often hides in plain sight. A stone the size of a quarter can crack the fiberglass mat under an architectural asphalt shingle without leaving a mark visible from your driveway. Catching it early protects the decking and prevents attic leaks that show up months later as ceiling stains. Here is what our inspectors check on every Amarillo, Lubbock, and Midland roof we walk:
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
              Hail impacts fracture the fiberglass mat beneath the surface granules on standard architectural and 3-tab asphalt shingles. These cracks rarely show from the ground, but they compromise the shingle&apos;s ability to shed water. Dark spots or soft areas that give under thumb pressure are the classic UL 2218 bruise pattern, and these shingles will fail well before the warranty period ends.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Granule Loss in Gutters</h3>
            <p className="text-gray-700">
              After any hail event in Hail Alley, check your gutters and downspout outlets for excessive granule accumulation. The granules protect asphalt shingles from intense Texas Panhandle UV exposure, and once they are knocked loose the mat ages quickly. Heavy granule deposits at downspout outlets after a storm are a reliable signal of widespread impact across the field of the roof.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Dented Gutters and Flashing
            </h3>
            <p className="text-gray-700">
              Aluminum gutters, vents, and metal flashing dent easily under hail impact. These dents
              serve as clear evidence for insurance claims and indicate that your shingles likely
              sustained similar force. We document all metal damage during our free inspections.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Soft Spots and Exposed Felt
            </h3>
            <p className="text-gray-700">
              The two-inch-plus stones that hit Amarillo and Lubbock during peak hail season can punch clean through shingle layers and expose the felt underlayment. Even without full penetration, the impact crushes the shingle and creates soft spots where water pools and works its way to the attic. These areas need to be repaired before the next rain, not left for a future inspection.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Does the Hail Damage Repair Process Work?
        </h2>
        <p className="mb-4">
          From the first phone call to final cleanup, our process is designed to minimize stress and
          maximize your insurance recovery. Here is how we handle every hail damage project:
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
            <h3 className="font-bold mb-2 text-brand-brown">Free Inspection</h3>
            <p className="text-sm text-gray-600">
              We walk the roof, AC fins, window screens, and aluminum gutters looking for the dent pattern that confirms a covered hail event. Every impact point is logged with photos and a tape measure so the report matches what your State Farm, Allstate, or USAA adjuster expects to see.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">2</div>
            <h3 className="font-bold mb-2 text-brand-brown">Damage Documentation</h3>
            <p className="text-sm text-gray-600">
              We prepare a detailed report with photo evidence, slope-by-slope damage maps, and material specifications (manufacturer, shingle profile, UL 2218 rating) that meet the documentation standard Texas carriers expect for claim approval.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">3</div>
            <h3 className="font-bold mb-2 text-brand-brown">Insurance Coordination</h3>
            <p className="text-sm text-gray-600">
              We meet your adjuster on-site, walk the roof together, and point out the impacts they would otherwise miss from the gutter line. If the initial Xactimate estimate falls short, we file a supplement with the additional photos, measurements, and line items needed to close the gap.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">4</div>
            <h3 className="font-bold mb-2 text-brand-brown">Repair or Replace</h3>
            <p className="text-sm text-gray-600">
              Once approved, our crews complete the work efficiently. Minor repairs take a day; full
              replacements typically take 1 to 3 days depending on roof size and material.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Can We Help With Your Hail Damage Insurance Claim?
        </h2>
        <p className="mb-4">
          Filing a hail damage insurance claim can feel overwhelming, especially after a major storm
          when thousands of homeowners are calling their insurance companies at the same time. 5
          Star Roofing handles the process for you from start to finish.
        </p>
        <div className="bg-brand-gold-light p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-brown mb-2">What We Handle</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Initial claim filing with slope-by-slope photo documentation</li>
                <li>On-site adjuster meetings with State Farm, Allstate, USAA, Farmers, and Texas Farm Bureau</li>
                <li>Supplement filings when the first estimate misses ridge, valley, or flashing damage</li>
                <li>Material and labor cost verification against current Xactimate pricing for the Amarillo and Lubbock markets</li>
                <li>Scheduling between your carrier&apos;s approval timeline and our crew calendar</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">What You Can Expect</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Most homeowners pay only their deductible</li>
                <li>Claims typically take 2 to 4 weeks from filing to approval</li>
                <li>We never ask for upfront payment before insurance approves</li>
                <li>All work is warrantied regardless of insurance involvement</li>
                <li>We communicate with you at every step of the process</li>
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
          Hail damages every type of roofing material differently. Our crews are trained and
          equipped to repair or replace all common residential and commercial roofing systems found
          across West Texas:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Asphalt Shingles</h3>
            <p className="text-gray-700">
              The most common residential roofing material in West Texas. Standard 3-tab shingles
              are the most vulnerable to hail, while architectural shingles offer better resistance.
              We install GAF, Owens Corning, and CertainTeed products, including Class 4
              impact-resistant options that qualify for insurance discounts.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Metal Roofing</h3>
            <p className="text-gray-700">
              Standing seam and R-panel metal roofs hold up to West Texas hail better than asphalt, but two-inch-plus stones still cause cosmetic denting on the pans and can open up seams or fastener gaskets. We repair dented panels, replace damaged sections, and reseal seams so the roof keeps its UL 580 wind-uplift performance and stays watertight through the next storm.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">TPO and Flat Roofs</h3>
            <p className="text-gray-700">
              Commercial TPO, EPDM, and modified bitumen membranes can suffer punctures and membrane
              tears from severe hail. Our commercial division handles flat roof hail damage repairs
              with proper hot-air welded patches and full membrane replacements when needed.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Tile and Specialty Roofing
            </h3>
            <p className="text-gray-700">
              Clay and concrete tile roofs crack and shatter under hail impact, especially on the south- and west-facing slopes that take the brunt of Panhandle storms. We source matching replacement tiles, repair the underlayment beneath, and reset the courses so the roof field stays uniform. For specialty materials like slate and cedar shake, we coordinate with regional suppliers to keep the original look intact.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Do You File a Hail Damage Insurance Claim?
        </h2>
        <p className="mb-4">
          Filing an insurance claim after hail damage follows a specific process. Knowing the steps
          upfront helps you avoid delays, missed deadlines, and underpaid settlements. Here is the
          step-by-step process we recommend to every homeowner in our service area:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 1</div>
            <h3 className="font-bold text-brand-brown mb-2">Document Damage Immediately</h3>
            <p className="text-sm text-gray-600">
              Take photos of your roof, gutters, siding, and any interior water stains within 24
              hours of the storm. Record the date, time, and areas affected. Save any hailstones in
              your freezer as size evidence.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 2</div>
            <h3 className="font-bold text-brand-brown mb-2">Contact Your Insurance Company</h3>
            <p className="text-sm text-gray-600">
              Call your carrier within 24 to 48 hours. Provide the storm date, a general description
              of damage, and your policy number. Most Texas policies require timely reporting to
              preserve your claim rights.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 3</div>
            <h3 className="font-bold text-brand-brown mb-2">Get a Professional Roof Inspection</h3>
            <p className="text-sm text-gray-600">
              Schedule a free inspection with 5 Star Roofing before the adjuster arrives. Our
              inspectors climb the roof, document every impact point with photos and measurements,
              and prepare a report that meets insurer standards.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 4</div>
            <h3 className="font-bold text-brand-brown mb-2">Meet With the Insurance Adjuster</h3>
            <p className="text-sm text-gray-600">
              We meet the State Farm, Allstate, USAA, or Texas Farm Bureau adjuster on-site, walk the roof together, and point out the impacts they would otherwise miss on ridge caps, valleys, and metal flashing. Having a roofer on the roof during the inspection keeps small details from getting left out of the scope of work.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 5</div>
            <h3 className="font-bold text-brand-brown mb-2">Review the Scope of Work</h3>
            <p className="text-sm text-gray-600">
              Compare the adjuster&apos;s estimate against our independent assessment line by line. If the carrier scope falls short on items like drip edge, ice and water shield, or ridge venting, we file a supplement with the photos and current Xactimate pricing the adjuster needs to release additional funds.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-gold">
            <div className="text-2xl font-bold text-brand-gold mb-2">Step 6</div>
            <h3 className="font-bold text-brand-brown mb-2">Choose Your Contractor and Schedule</h3>
            <p className="text-sm text-gray-600">
              Once your claim is approved, choose a licensed contractor and schedule repairs. 5 Star
              Roofing never requires upfront payment before insurance approval. Most residential
              repairs are completed in 1 to 3 days.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.6}>
        <h2 className="text-2xl font-bold mt-8 mb-4">How Do You Assess Hail Damage Severity?</h2>
        <p className="mb-4">
          Not all hail damage warrants an insurance claim. Understanding the three levels of
          severity helps you make informed decisions about repairs and whether to involve your
          insurance carrier:
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Cosmetic Damage</h3>
            <p className="text-gray-700 mb-3">
              Dents in aluminum gutters and vent caps, light granule displacement on architectural shingles, and small dings on metal flashing. The roof is still shedding water and the underlayment is intact, so the shingles continue to perform within their UL 2218 rating.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Action:</strong> Monitor on the next inspection. May not warrant a claim depending on your deductible and the premium impact your Texas carrier (State Farm, Allstate, Texas Farm Bureau) applies after a claim is filed.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Functional Damage</h3>
            <p className="text-gray-700 mb-3">
              Cracked shingles, broken sealant strips along the ridge, exposed felt, and granule loss heavy enough to accelerate UV degradation through Panhandle summers. The shingle field is no longer performing the way it did off the truck, and minor leaks will follow.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Action:</strong> File an insurance claim with your carrier. Repairs prevent further deterioration and interior water damage from showing up at the first hard rain.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Critical Damage</h3>
            <p className="text-gray-700 mb-3">
              Punctures through the OSB or plywood decking, active leaks into living spaces, large sections of missing shingles, and structural compromise from repeated two-inch-plus impacts. The roof cannot keep the next rain out without repair.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Action:</strong> Temporary weather protection is installed followed by full replacement. File a claim with your carrier and ask the adjuster to expedite given the active leak.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.7}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Do You Tell the Difference Between Hail, Wind, and Water Damage?
        </h2>
        <p className="mb-4">
          Texas adjusters need to verify the cause of damage before approving a claim, and hail, wind, and water each leave a distinct signature. Knowing how to identify each type helps you describe the loss accurately when you call State Farm, Allstate, USAA, or Texas Farm Bureau, and it helps make sure the right line items end up in the scope of work:
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Hail Damage Signs</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Circular dents on architectural asphalt shingles and aluminum gutter aprons</li>
              <li>Bruised shingles that feel soft under thumb pressure (classic UL 2218 signature)</li>
              <li>Random impact pattern across the full roof field, not directional</li>
              <li>Cracked clay or concrete tiles with star or spider-web fractures</li>
              <li>Granule accumulation at downspout outlets after a Panhandle storm</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Wind Damage Signs</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Lifted or curled shingle edges along eaves, rakes, and ridges</li>
              <li>Missing shingle tabs on the south- and southwest-facing slopes (the prevailing wind direction across the Texas Panhandle)</li>
              <li>Debris impact marks from airborne tree limbs or yard objects</li>
              <li>Damaged or displaced ridge cap shingles where the seal broke loose</li>
              <li>Directional damage pattern that traces the storm path, not the random pattern hail leaves</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Water Damage Signs</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Interior ceiling stains, especially near valleys and chimney flashing</li>
              <li>Sagging or bubbling on the roof surface where the OSB or plywood deck has absorbed water</li>
              <li>Mold or mildew growth on the underside of attic decking</li>
              <li>Rotted fascia boards or decking where gutters back up</li>
              <li>Peeling paint on exterior walls near the roofline, a sign of trapped attic moisture</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      {/* auto-link:pass-2 */}
      <aside className="container-custom mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Hail Damage Repair by City</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/hail-damage-repair-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair in Amarillo</a></li>
            <li><a href="/hail-damage-repair-lubbock/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair in Lubbock</a></li>
            <li><a href="/hail-damage-repair-midland/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair in Midland</a></li>
            <li><a href="/hail-damage-repair-odessa/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair in Odessa</a></li>
            <li><a href="/hail-damage-repair-canyon/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair in Canyon</a></li>
            <li><a href="/hail-damage-repair-borger/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair in Borger</a></li>
            <li><a href="/hail-damage-repair-pampa/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair in Pampa</a></li>
            <li><a href="/hail-damage-repair-dumas/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair in Dumas</a></li>
          </ul>
        </div>
      </aside>
      {/* /auto-link */}

      {/* City Variant Link Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Hail Damage Repair Across West Texas</h2>
        <p className="mb-4 text-gray-700">
          We provide hail damage roof repair in 16 cities across the Texas Panhandle and Permian
          Basin. Select your city for local service details:
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
        <h2 className="text-2xl font-bold mb-4">Get Your Free Hail Damage Assessment</h2>
        <p className="mb-6 text-lg">
          Had a recent hail storm? 5 Star Roofing provides free roof inspections and handles the
          full insurance claim process. Call today or request an inspection online.
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
      <RelatedArticles pageSlug="hail-damage-repair" />
    </div>
  );
}
