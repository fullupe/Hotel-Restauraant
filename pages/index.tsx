import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import HomeScreen from "../components/HomeScreen"



const Home: NextPage = () => {

 

  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-900">
      <Head>
        <title>Restaurant Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full h-screen items-center justify-center md:max-w-[80%] text-center bg-gray-900 ">
       
            <HomeScreen/>

          
     
      </main>

      
    </div>
  )
}

export default Home
