import React,{useContext} from 'react'
import { useRouter } from 'next/router'
import {GlobalContext} from "../contex/globalContext"
import { motion } from 'framer-motion'

import Gh from "../utils/helper"

type Props = {}

function successful({}: Props) {
 
  const {total, user, setCart} =useContext(GlobalContext)
  const router = useRouter()

  const handleRedirect=()=>{
    setCart([])
    router.push("/")
  }
 

  return (
    <div className="bg-gray-700 h-screen flex items-center justify-center px-8 shadow-lg bg-[url('/bg.webp')]">
      <div className=" flex items-center justify-center inset-0 absolute bg-black bg-opacity-90 ">
      <motion.div 
      initial={{
        x:-500,
        opacity:1,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      
      }}
      transition={{
        duration:1.5,
      }}
      
      className="    bg-whiteh p-6  md:mx-auto mx-2 border border-yellow-300 rounded-lg justify-center flex flex-col items-center">
        <div className="flex items-center justify-center">
        <p className="text-white font-extrabold text-2xl font-wdc">Transaction complete</p>
        </div>
        
        <svg viewBox="0 0 24 24" className="   text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div className="text-center sm:max-w-[80%] flex flex-col w-full items-center font-wdcs justify-center">
            <h3 className="md:text-2xl text-base text-white font-semibold text-center font-wdcs">Request Done!</h3>
            <p className="text-white my-2 font-wdcs">Thank you <span className="font-bold">{user.name}</span> for the Request, this will take about 10 minutes! and also <span className="font-bold">{Gh(total)}</span> will be added to your Bills.</p>
            <p className="font-wdcs"> Have a great day!  </p>
           
        </div>
        <div className=" py-10 text-center space-y-8 flex flex-col items-center">   
        <a onClick={handleRedirect} className=" font-wdcs rounded-full cursor-pointer  px-12 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3">
            Done
        </a>
        <img className="rounded-full w-44 h-44" src="/bg.webp" alt="" />
</div>
    </motion.div>
    </div>
  </div>
  )
}

export default successful