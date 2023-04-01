import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET!;
const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!;
export default defineConfig({
  

  basePath:"/studio",
  name: 'JEG_content_studio',
  title: 'JEG content studio',

  projectId,
 
  dataset: dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
