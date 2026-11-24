"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  // global-error replaces the root layout, so it must render <html> and <body>.
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif" }}>
        <title>Something went wrong | Maction Consulting</title>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "1.5rem",
            background: "#f8fafc",
          }}
        >
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a" }}>
            Something went wrong
          </h1>
          <p style={{ marginTop: "0.75rem", color: "#475569", maxWidth: "28rem" }}>
            A critical error occurred. Please try again.
          </p>
          <button
            onClick={() => unstable_retry()}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              background: "#2563eb",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </main>
      </body>
    </html>
  );
}
