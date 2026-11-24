import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import GlobalPresence from "@/components/sections/global-presence";
import Services from "@/components/sections/services";
import WhyChoose from "@/components/sections/why-choose";
import Industries from "@/components/sections/industries";
import CaseStudies from "@/components/sections/case-studies";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Market Research, Data Analytics & Consulting",
  description:
    "Maction Consulting helps global organizations make confident decisions through market research, data analytics, and business consulting.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <GlobalPresence />
      <Services />
      <WhyChoose />
      <Industries />
      <CaseStudies />
      <ContactForm />
    </>
  );
}