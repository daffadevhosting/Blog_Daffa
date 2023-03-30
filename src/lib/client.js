import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_ID,
  dataset: import.meta.env.VITE_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_KEY,
  useCdn: true,
});