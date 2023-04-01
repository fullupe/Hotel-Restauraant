import '../styles/globals.css'
import type { AppProps } from 'next/app'


import { GlobalContextProvider } from "../contex/globalContext";
import React from 'react';

import {Pacifico, Cairo, Saira} from "@next/font/google";

const mainFont = Pacifico({
  subsets:["latin"],
  variable:"--font-Pacifico",
   weight:"400",
   display:"swap",
})
const mainFonts = Saira({
  subsets:["latin"],
  variable:"--font-Saira",
   weight:"400",
   display:"swap",
})


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <GlobalContextProvider>
      <main className={`${mainFont.variable} ${mainFonts.variable} `}>
     <Component {...pageProps} />
     </main>
     </GlobalContextProvider>
  )
}

export default MyApp



