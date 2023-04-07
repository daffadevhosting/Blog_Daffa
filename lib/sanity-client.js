import {createClient} from 'next-sanity'

const projectId = process.env.VITE_SANITY_ID
const dataset = process.env.VITE_DATASET
const apiVersion = process.env.VITE_SANITY_API_KEY

export const client = createClient({projectId, dataset, apiVersion})