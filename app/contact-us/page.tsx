import type { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Maction Consulting to discuss your research, analytics, or consulting needs.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Maction Consulting",
    description: "Discuss your market research, analytics, or consulting requirements with our team.",
    url: "/contact-us",
  },
};

export default function ContactPage() {
    return <ContactForm />;
}