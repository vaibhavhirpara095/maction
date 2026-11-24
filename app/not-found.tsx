import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">404 — Page Not Found</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 max-w-md text-gray-600">
        The page you&apos;re looking for may have been moved, renamed, or no longer exists.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="brand" size="lg" className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button asChild size="lg" variant="brandOutline">
          <Link href="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}
