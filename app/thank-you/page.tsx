import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThankYouTracker from "./thank-you-tracker";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your inquiry has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <ThankYouTracker />
      <span className="inline-flex rounded-full bg-green-50 p-4 text-green-600">
        <CheckCircle2 className="h-10 w-10" />
      </span>
      <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
        Thank you — we&apos;ve got it
      </h1>
      <p className="mt-4 max-w-md text-gray-600">
        Your inquiry has been received. A member of our team will be in touch within two business
        days.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="brand" size="lg" className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button asChild size="lg" variant="brandOutline">
          <Link href="/case-studies">Explore Case Studies</Link>
        </Button>
      </div>
    </section>
  );
}
