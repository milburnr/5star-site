"use client";

import { useState, type FormEvent } from "react";
import { useMarkContactForm } from "./useMarkContactForm";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

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

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  zip?: string;
  message?: string;
}

function validate(fields: {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zip: string;
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
  if (!fields.street || fields.street.trim().length < 3) {
    errors.street = "Street address is required";
  }
  if (!fields.city || fields.city.trim().length < 2) {
    errors.city = "City is required";
  }
  if (!fields.zip || !/^\d{5}(-\d{4})?$/.test(fields.zip.trim())) {
    errors.zip = "Valid ZIP required";
  }
  if (!fields.message || fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  return errors;
}

export function ContactForm({
  title = "Get Your Free Roof Inspection",
  subtitle = "Tell us about your project and we'll be in touch shortly.",
  className = "",
}: ContactFormProps) {
  useMarkContactForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";
  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors";
  const errorClass = "text-xs text-red-600 mt-1";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError("");

    const fieldErrors = validate({ name, email, phone, street, city, zip, message });
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setSubmitting(true);

    try {
      const res = await fetch("/.netlify/functions/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          street,
          city,
          state: "TX",
          zip,
          service,
          message,
        }),
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

  if (submitted) {
    return (
      <div className={`bg-white rounded-xl p-8 ${className}`}>
        <div className="text-center py-8">
          <svg
            className="w-14 h-14 text-green-600 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl font-bold text-brand-brown mb-2">Thank You!</h3>
          <p className="text-gray-700 max-w-md mx-auto">
            We received your request. Expect a call within 2 hours during business hours.
          </p>
          <p className="text-gray-600 mt-4 text-sm">
            Need immediate help? Call{" "}
            <a href="tel:8066226041" className="text-brand-gold font-semibold hover:underline">
              (806) 622-6041
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="text-2xl font-bold text-brand-brown mb-2">{title}</h3>}
          {subtitle && <p className="text-gray-700">{subtitle}</p>}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white rounded-xl p-6 shadow-md space-y-5"
      >
        {/* Honeypot — visually hidden, accessible name for a11y scanners */}
        <input
          name="bot-field"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          aria-label="Leave this field empty"
        />

        {submitError && (
          <div
            className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg"
            role="alert"
          >
            {submitError}
          </div>
        )}

        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="John Smith"
            required
            autoComplete="name"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="you@email.com"
              required
              autoComplete="email"
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
              placeholder="(806) 555-0100"
              autoComplete="tel"
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contact-street" className={labelClass}>
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className={inputClass}
            placeholder="123 Main St"
            required
            autoComplete="street-address"
          />
          {errors.street && <p className={errorClass}>{errors.street}</p>}
        </div>

        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <label htmlFor="contact-city" className={labelClass}>
              City <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={inputClass}
              placeholder="Amarillo"
              required
              autoComplete="address-level2"
            />
            {errors.city && <p className={errorClass}>{errors.city}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="contact-state" className={labelClass}>
              State
            </label>
            <input
              id="contact-state"
              type="text"
              value="TX"
              readOnly
              tabIndex={-1}
              aria-readonly="true"
              className={`${inputClass} cursor-default text-center font-medium opacity-70`}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="contact-zip" className={labelClass}>
              ZIP <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-zip"
              type="text"
              inputMode="numeric"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className={inputClass}
              placeholder="79109"
              required
              autoComplete="postal-code"
              maxLength={10}
            />
            {errors.zip && <p className={errorClass}>{errors.zip}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contact-service" className={labelClass}>
            Service Needed
          </label>
          <select
            id="contact-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${inputClass} bg-white`}
          >
            <option value="">Select a service (optional)</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-y`}
            placeholder="Tell us about your roofing needs..."
            required
            rows={4}
          />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-vibrant text-brand-brown font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {submitting ? "Sending..." : "Request Free Inspection"}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Or call us directly at{" "}
          <a href="tel:8066226041" className="text-brand-gold font-semibold hover:underline">
            (806) 622-6041
          </a>
        </p>
      </form>
    </div>
  );
}
