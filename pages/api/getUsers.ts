// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {sanityClient} from "../../sanity"
import { Users } from '../../typings'
import {groq} from  "next-sanity" 

const userQuery = groq`*[_type=="users"]{
    _id,
      name,
      contact,
     
    roomnumber[0]->{
    room
    },
      //...,
     
      
  } | order(_createdAt desc)`


type Data = {
    user: Users[]
}

export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

const user:Users[] = await sanityClient.fetch(userQuery) 
//console.log(user)

  res.status(200).json({user})
}
