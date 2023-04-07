import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_ID,
  dataset: import.meta.env.VITE_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_KEY,
  useCdn: true,
});