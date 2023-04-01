// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {sanityClient} from "../../sanity"
import { FoodMenu } from '../../typings'
import {groq} from  "next-sanity" 

const foodQuery = groq`*[_type=="food"]{
  _id,
    price,
    foodtype,
    Isproductavailable,
    img,
  categories[0]->{
  title
  },
    //...,
   
    
} | order(_createdAt desc)`


type Data = {
  foodMenu: FoodMenu[]
}

export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

const foodMenu:FoodMenu[] = await sanityClient.fetch(foodQuery) 
//console.log(foodMenu)

  res.status(200).json({foodMenu})
}
