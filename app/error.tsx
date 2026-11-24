"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Surface to the server logs / monitoring (Sentry hook point).
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-red-500">Something went wrong</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
        An unexpected error occurred
      </h1>
      <p className="mt-4 max-w-md text-gray-600">
        We&apos;ve been notified and are looking into it. You can try again or head back home.
      </p>
      {error.digest && (
        <p className="mt-2 text-xs text-slate-400">Reference: {error.digest}</p>
      )}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button variant="brand" size="lg" onClick={() => unstable_retry()}>
          Try Again
        </Button>
        <Button asChild size="lg" variant="brandOutline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
}
