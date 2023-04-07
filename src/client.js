import {createClient, groq} from 'next-sanity'
import {cache} from 'react'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"

const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

// Wrap the cache function in a way that reuses the TypeScript definitions
const clientFetch = cache(client.fetch.bind(client))

// Now use it just like before, fully deduped, cached and optimized by react
const data = await clientFetch(groq`*[]`)
// You can use the same generics as before
const total = await clientFetch<number>(groq`count*()`)