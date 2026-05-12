import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "ContactSection Preview",
  description: "Split-layout contact section (dark trust column + cream form).",
};

export default function ContactSectionPreview() {
  return (
    <main style={{ background: "#f5f0e8", minHeight: "100vh" }}>
      <ContactSection />
    </main>
  );
}
