import {createClient} from "next-sanity"

export const config={
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || "production",
    dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION || "2022-11-15",
    useCdn:process.env.NODE_ENV==='production'
}

export const sanityClient = createClient(config)