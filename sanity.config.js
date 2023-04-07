import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import MyNavbar from './src/components/myNavbar'

const projectId = import.meta.env.VITE_SANITY_ID;
const dataset = import.meta.env.VITE_DATASET;

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Admin Panel',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  }
})
