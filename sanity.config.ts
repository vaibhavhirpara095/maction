import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./lib/sanity/schemas/schema";
import { structure } from "./lib/sanity/structure";
import { previewAction } from "./lib/sanity/preview-action";

export default defineConfig({
  name: "default",
  title: "Maction Consulting CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mock-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
  document: {
    // Append the "Open preview" button to posts and case studies.
    actions: (prev) => [...prev, previewAction],
  },
});
