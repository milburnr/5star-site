import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/privacy/" },
  title: "Privacy Policy | 5 Star Roofing",
  description:
    "How 5 Star Roofing collects, uses, and protects your information when you contact us, request a roof inspection, or browse our website.",
  openGraph: {
    title: "Privacy Policy | 5 Star Roofing",
    description: "How 5 Star Roofing collects, uses, and protects your information.",
    url: "https://5starroofingpros.com/privacy/",
    siteName: "5 Star Roofing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy/" },
        ]}
      />

      <section className="bg-white">
        <div className="container-custom py-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <p>
              5 Star Commercial Roofing (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
              respects your privacy. This policy explains what information we collect when you visit{" "}
              <a href="https://5starroofingpros.com" className="text-brand-gold hover:underline">
                5starroofingpros.com
              </a>{" "}
              or contact us about a roofing project, how we use it, and the choices you have.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">
                Information We Collect
              </h2>
              <p>
                When you submit a contact form, request a free roof inspection, or call us, we may
                collect:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Your name, phone number, and email address</li>
                <li>
                  Property address (street, city, ZIP) and a brief description of the work you need
                </li>
                <li>
                  Anything else you choose to share in your message (insurance carrier, claim
                  number, photos, etc.)
                </li>
                <li>
                  Technical data — browser type, device, referring page, and general location —
                  collected automatically through analytics cookies
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">
                How We Use Your Information
              </h2>
              <p>We use the information you give us to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Respond to your inquiry and schedule your inspection</li>
                <li>Coordinate with your insurance carrier when you ask us to help with a claim</li>
                <li>Provide written estimates and project documentation</li>
                <li>
                  Improve our website based on aggregate usage patterns (no individual targeting)
                </li>
              </ul>
              <p className="mt-3">
                We do <strong className="text-brand-brown font-semibold">not</strong> sell, rent, or
                share your personal information with third parties for marketing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">
                Lead Routing &amp; Service Providers
              </h2>
              <p>
                Form submissions are forwarded to our customer-relationship platform (HighLevel /
                LeadConnector) so our office staff can respond quickly. Site hosting is provided by
                Netlify, and analytics is handled by Google Analytics 4. These providers process
                data on our behalf under their own privacy terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">
                Cookies &amp; Analytics
              </h2>
              <p>
                We use Google Analytics (GA4) to understand how visitors use the site. Analytics
                cookies record anonymous usage data such as pages visited and time on site — they do
                not identify you personally.
              </p>
              <p className="mt-3">
                You can opt out of Google Analytics with the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                , or by enabling &ldquo;Do Not Track&rdquo; / cookie blocking in your browser.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">
                SMS &amp; Phone Communications
              </h2>
              <p>
                If you provide a phone number through our contact form, we may call or text you
                about your roofing project. Standard message and data rates may apply. You can opt
                out at any time by replying STOP to any text or asking us to remove your number.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">Data Security</h2>
              <p>
                We take reasonable measures to protect your information from unauthorized access.
                Form submissions are transmitted over HTTPS. No method of internet transmission is
                100% secure, but we follow industry-standard practices and limit access to project
                staff.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">Your Rights</h2>
              <p>
                You can request access to, correction of, or deletion of the personal information we
                hold about you. California residents have rights under the CCPA, and EU/UK residents
                have rights under GDPR. To exercise any of these rights, contact us using the
                details below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">Third-Party Links</h2>
              <p>
                Our website may link to third-party sites (Google reviews, manufacturer warranty
                pages, social profiles). We are not responsible for the privacy practices of those
                external sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">
                Children&rsquo;s Privacy
              </h2>
              <p>
                Our services are intended for property owners 18 and older. We do not knowingly
                collect information from children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this policy from time to time. The &ldquo;last updated&rdquo; date at
                the top of the page reflects the most recent revision.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-brown mt-8 mb-3">Contact Us</h2>
              <p>Questions about this policy or how we handle your information? Reach out:</p>
              <ul className="list-none mt-3 space-y-1">
                <li>
                  <strong className="text-brand-brown">5 Star Commercial Roofing</strong>
                </li>
                <li>2909 S Western St, Amarillo, TX 79109</li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:8066226041"
                    className="text-brand-burnt-orange font-semibold hover:underline"
                  >
                    (806) 622-6041
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:admin@5starroofingpros.com"
                    className="text-brand-burnt-orange font-semibold hover:underline"
                  >
                    admin@5starroofingpros.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
