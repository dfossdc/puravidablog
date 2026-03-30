import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "pura-vida-chiropractic",
  title: "Pura Vida Chiropractic",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "rm3xak17",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      // Brand the studio with Pura Vida green
    },
  },
});
