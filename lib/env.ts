import { z } from "zod";

/**
 * Centralised, validated environment access.
 *
 * Public (NEXT_PUBLIC_*) vars are inlined at build time and are safe on the
 * client. Server-only secrets must never be imported into client components.
 *
 * Nothing is marked required so local/preview builds keep working in mock mode,
 * but `isMockMode` and the helpers below make missing config explicit instead
 * of silently falling back.
 */
const publicEnvSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default("production"),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://maction.com"),
});

const serverEnvSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  CONTACT_FROM_EMAIL: z.string().optional(),
  CONTACT_TO_EMAIL: z.string().optional(),
  SANITY_REVALIDATE_SECRET: z.string().optional(),
});

export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

export const serverEnv = serverEnvSchema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  SANITY_REVALIDATE_SECRET: process.env.SANITY_REVALIDATE_SECRET,
});

export const isMockMode =
  !publicEnv.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  publicEnv.NEXT_PUBLIC_SANITY_PROJECT_ID === "mock-project-id";

export const SITE_URL = publicEnv.NEXT_PUBLIC_SITE_URL;
