"use client";

import { useState, type FormEvent } from "react";
import { Phone, ShieldCheck, Wrench, MapPin, Calendar } from "lucide-react";
import { useMarkContactForm } from "./useMarkContactForm";

/**
 * ContactSection — replaces the "wall of beige" contact pattern.
 *
 * Split layout:
 *   - Left 40%: dark surface (var(--color-dark-bg)), gold text, trust column
 *     with phone CTA + four real trust signals (no fabricated stats).
 *   - Right 60%: simplified form (name / phone / email / service / message)
 *     on cream surface posting to the existing netlify contact endpoint.
 *
 * Mobile (≤768px): stacks vertically — dark trust column above, form below.
 *
 * Trust signals MUST stay on the verified-claims allowlist:
 *   - "Free inspections" — operational fact
 *   - "Insurance claim help" — operational fact
 *   - "Locally based in Amarillo" — verified address (claims-allowlist.md)
 *   - "Residential and commercial" — operational scope
 *
 * Forbidden (would fail the precheck gate): founding-year claims
 * (PENDING VERIFICATION — see clients/5star/claims-allowlist.md),
 * any "X% satisfaction" / "X+ roofs completed" / financing rate claims.
 */

const SERVICE_OPTIONS = [
  "Free Roof Inspection",
  "Hail Damage Repair",
  "Storm Damage Repair",
  "Wind Damage Repair",
  "Roof Replacement",
  "Roof Repair",
  "Residential Roofing",
  "Commercial Roofing",
  "Insurance Claim Help",
  "Other",
];

interface ContactSectionProps {
  /** Heading copy in the dark trust column. */
  heading?: string;
  /** Sub-copy under the heading. */
  subheading?: string;
  /** Phone display, e.g. "(806) 622-6041". */
  phoneDisplay?: string;
  /** Phone digits for tel: links, e.g. "8066226041". */
  phoneTel?: string;
  className?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function validate(fields: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (fields.phone && !/^[\d\s\-\(\)\+\.]{7,20}$/.test(fields.phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!fields.message || fields.message.trim().length < 10) {
    errors.message = "Tell us a bit more — at least 10 characters";
  }
  return errors;
}

export function ContactSection({
  heading = "Get Your Free Roof Inspection",
  subheading = "Real people. Real estimates. We'll be in touch within 2 business hours.",
  phoneDisplay = "(806) 622-6041",
  phoneTel = "8066226041",
  className = "",
}: ContactSectionProps) {
  useMarkContactForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError("");

    const fieldErrors = validate({ name, email, phone, message });
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setSubmitting(true);

    try {
      const res = await fetch("/.netlify/functions/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      className={`contact-section ${className}`}
      aria-labelledby="contact-section-heading"
    >
      <style dangerouslySetInnerHTML={{ __html: CONTACT_SECTION_CSS }} />

      <div className="contact-section-inner">
        {/* Left column — dark trust block */}
        <div className="contact-trust">
          <p className="contact-eyebrow eyebrow">Get In Touch</p>
          <h2 id="contact-section-heading" className="contact-heading">
            {heading}
          </h2>
          <p className="contact-sub">{subheading}</p>

          <a className="contact-phone" href={`tel:${phoneTel}`}>
            <Phone className="contact-phone-icon" aria-hidden="true" />
            <span className="contact-phone-number">{phoneDisplay}</span>
          </a>
          <p className="contact-phone-hours">Mon–Sun · 9:00 AM – 5:00 PM</p>

          <ul className="contact-trust-list" aria-label="Why customers call us first">
            <li>
              <ShieldCheck className="contact-trust-icon" aria-hidden="true" />
              <span>Free inspections, no obligation</span>
            </li>
            <li>
              <Wrench className="contact-trust-icon" aria-hidden="true" />
              <span>Insurance claim help from start to finish</span>
            </li>
            <li>
              <MapPin className="contact-trust-icon" aria-hidden="true" />
              <span>Locally based in Amarillo, TX</span>
            </li>
            <li>
              <Calendar className="contact-trust-icon" aria-hidden="true" />
              <span>Residential and commercial roofing</span>
            </li>
          </ul>
        </div>

        {/* Right column — form on cream */}
        <div className="contact-form-col">
          {submitted ? (
            <div className="contact-success" role="status">
              <h3 className="heading-secondary">Thank you.</h3>
              <p className="body-text">
                We received your request. Expect a call within 2 business hours.
              </p>
              <p className="body-text" style={{ marginTop: 16, fontSize: "0.95rem" }}>
                Need immediate help? Call{" "}
                <a href={`tel:${phoneTel}`} style={{ color: "var(--color-burnt-orange)", fontWeight: 700 }}>
                  {phoneDisplay}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="contact-form">
              {/* Honeypot */}
              <input
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                aria-label="Leave this field empty"
                className="contact-honeypot"
              />

              {submitError && (
                <div className="contact-error-banner" role="alert">
                  {submitError}
                </div>
              )}

              <div className="contact-field">
                <label htmlFor="cs-name" className="contact-label">
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="cs-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="contact-input"
                  placeholder="John Smith"
                  autoComplete="name"
                  required
                />
                {errors.name && <p className="contact-field-error">{errors.name}</p>}
              </div>

              <div className="contact-field-row">
                <div className="contact-field">
                  <label htmlFor="cs-phone" className="contact-label">
                    Phone
                  </label>
                  <input
                    id="cs-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="contact-input"
                    placeholder="(806) 555-0100"
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="contact-field-error">{errors.phone}</p>}
                </div>

                <div className="contact-field">
                  <label htmlFor="cs-email" className="contact-label">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cs-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="contact-input"
                    placeholder="you@email.com"
                    autoComplete="email"
                    required
                  />
                  {errors.email && <p className="contact-field-error">{errors.email}</p>}
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="cs-service" className="contact-label">
                  Service Needed
                </label>
                <select
                  id="cs-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="contact-input contact-select"
                >
                  <option value="">Select a service (optional)</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="cs-message" className="contact-label">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="cs-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="contact-input contact-textarea"
                  placeholder="Tell us a bit about your roof — age, damage, what you're hoping for."
                  rows={4}
                  required
                />
                {errors.message && <p className="contact-field-error">{errors.message}</p>}
              </div>

              <button type="submit" disabled={submitting} className="cta-primary contact-submit">
                <span>{submitting ? "Sending..." : "Request Free Inspection"}</span>
                <span className="cta-icon" aria-hidden="true">→</span>
              </button>

              <p className="contact-fineprint">
                We respect your privacy. No spam, ever — your info goes to a real human.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const CONTACT_SECTION_CSS = `
  .contact-section {
    background: var(--color-cream);
    padding-top: var(--section-major-padding);
    padding-bottom: var(--section-major-padding);
    color: var(--color-cta-text-dark);
    font-family: var(--font-system-ui);
  }

  .contact-section-inner {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    align-items: stretch;
    overflow: hidden;
    border-radius: 14px;
    box-shadow:
      0 1px 2px rgba(43, 24, 16, 0.06),
      0 14px 36px -12px rgba(43, 24, 16, 0.14);
  }

  @media (min-width: 880px) {
    .contact-section-inner {
      grid-template-columns: 40% 60%;
    }
  }

  /* Left dark column */
  .contact-trust {
    background: var(--color-dark-bg);
    color: var(--color-text-ivory);
    padding: clamp(36px, 4vw, 56px);
    display: flex;
    flex-direction: column;
    gap: 18px;
    position: relative;
    overflow: hidden;
  }
  .contact-trust::before {
    content: "";
    position: absolute;
    top: -120px;
    right: -120px;
    width: 360px;
    height: 360px;
    background: radial-gradient(
      circle,
      rgba(245, 199, 122, 0.10) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
  .contact-trust > * {
    position: relative;
    z-index: 1;
  }

  .contact-eyebrow {
    margin: 0;
    color: var(--color-accent-gold);
  }

  .contact-heading {
    font-family: var(--font-heading-serif);
    font-weight: 400;
    color: var(--color-accent-gold);
    font-size: clamp(1.6rem, 2.6vw, 2.4rem);
    line-height: 1.1;
    letter-spacing: -0.012em;
    margin: 0;
  }

  .contact-sub {
    font-size: clamp(0.96rem, 1vw, 1.05rem);
    line-height: 1.55;
    color: rgba(242, 234, 219, 0.78);
    margin: 0 0 6px;
  }

  .contact-phone {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 6px;
    color: var(--color-accent-gold);
    text-decoration: none;
    font-family: var(--font-heading-serif);
    font-size: clamp(1.6rem, 2.4vw, 2.2rem);
    font-weight: 500;
    line-height: 1;
    transition: color 200ms ease;
  }
  .contact-phone:hover {
    color: var(--color-gold-warm-bright);
  }
  .contact-phone-icon {
    width: 28px;
    height: 28px;
    color: var(--color-accent-gold);
    flex: 0 0 auto;
  }
  .contact-phone-number {
    letter-spacing: -0.01em;
  }

  .contact-phone-hours {
    margin: 0;
    color: rgba(242, 234, 219, 0.65);
    font-size: 0.84rem;
    letter-spacing: 0.04em;
  }

  .contact-trust-list {
    list-style: none;
    margin: 16px 0 0;
    padding: 18px 0 0;
    border-top: 1px solid rgba(245, 199, 122, 0.22);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .contact-trust-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--color-text-ivory);
    font-size: clamp(0.92rem, 0.95vw, 1rem);
  }
  .contact-trust-icon {
    width: 20px;
    height: 20px;
    color: var(--color-accent-gold);
    flex: 0 0 auto;
  }

  /* Right form column */
  .contact-form-col {
    background: var(--color-cream);
    padding: clamp(32px, 4vw, 56px);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .contact-honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  .contact-error-banner {
    background: #fff1eb;
    border: 1px solid rgba(184, 74, 17, 0.3);
    color: var(--color-burnt-orange);
    padding: 10px 14px;
    border-radius: 6px;
    font-size: 0.92rem;
  }

  .contact-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .contact-field-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
  }
  @media (min-width: 560px) {
    .contact-field-row {
      grid-template-columns: 1fr 1fr;
    }
  }

  .contact-label {
    font-family: var(--font-system-ui);
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-cta-text-dark);
  }

  .contact-input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid rgba(184, 74, 17, 0.35);
    border-radius: 0;
    padding: 10px 2px;
    font-family: var(--font-system-ui);
    font-size: 1rem;
    color: var(--color-cta-text-dark);
    transition: border-color 200ms ease;
    width: 100%;
  }
  .contact-input::placeholder {
    color: rgba(43, 24, 16, 0.4);
  }
  .contact-input:focus {
    outline: none;
    border-bottom-color: var(--color-burnt-orange);
    border-bottom-width: 2px;
  }
  .contact-textarea {
    resize: vertical;
    min-height: 96px;
    border: 1px solid rgba(184, 74, 17, 0.25);
    border-radius: 6px;
    padding: 12px;
  }
  .contact-textarea:focus {
    border-color: var(--color-burnt-orange);
    border-bottom-width: 1px;
  }
  .contact-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23B84A11' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 8px center;
    padding-right: 26px;
  }

  .contact-field-error {
    color: var(--color-burnt-orange);
    font-size: 0.8rem;
    margin: 0;
  }

  .contact-submit {
    margin-top: 6px;
    width: 100%;
  }
  @media (min-width: 560px) {
    .contact-submit {
      width: auto;
      align-self: flex-start;
    }
  }
  .contact-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  .contact-fineprint {
    margin: 0;
    font-size: 0.78rem;
    color: rgba(43, 24, 16, 0.55);
  }

  .contact-success {
    padding: 24px 0;
  }
`;
