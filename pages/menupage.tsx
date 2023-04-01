//import { type } from 'os'
import React, { useEffect, useContext, useState, Children } from 'react'
import Foodcard from '../components/Foodcard'
//import {foodData} from "../FoodData"

import Modal from "../components/Modal"

import {GlobalContext} from "../contex/globalContext"
import { motion } from 'framer-motion'
import RequestModal from '../components/RequestModal'
import { GetServerSideProps } from 'next'
import { fetchFoodMenu} from '../utils/fetchFoodMenu'
import { Users } from "../typings";
import { fetchUsers } from '../utils/fetchUsers'

import Gh from "../utils/helper"


import { FoodMenu } from "../typings";
import urlFor from '../utils/urlFor'
import Image from 'next/image'




interface Props{
  foodMenus:FoodMenu[],
  Users:Users[]
}


function menupage({foodMenus, Users}:Props) {


 const {cart, total, setTotal, setCart} =useContext(GlobalContext)



  const [sortByCategories, setSortByCategories] = useState('');

  const [isDrinkActive, setIsDrinkActive] = useState(false)
  const [isSnacksActive, setIsSnacksActive] = useState(false)
  const [isSolidFoodActive, setIsSolidFoodActive] = useState(false)
  const [headerinfo, setHeaderinfo] = useState("")

  const [isOpen, setIsOpen] = useState(false)

  
  
  const isActiveStyle =" font-wdcs bg-orange-500 p-2 px-10 shadow-lg rounded-full text-white cursor-pointer hover:bg-orange-800"
  const nonActiveStyle =" font-wdcs bg-yellow-500 p-2 px-10 shadow-lg rounded-full text-white cursor-pointer hover:bg-orange-600"

  const handleDrinkCategory=(e:React.MouseEvent<HTMLParagraphElement, MouseEvent>)=>{
    e.preventDefault()
    setSortByCategories("Drink")
    setHeaderinfo("Drinkables")

    setIsDrinkActive(true)
    setIsSnacksActive(false)
    setIsSolidFoodActive(false)
    
  }
  const handleSnacksCategory=(e:React.MouseEvent<HTMLParagraphElement, MouseEvent>)=>{
    e.preventDefault()
    setSortByCategories("Snacks")
    setHeaderinfo("Pastries Nut's")

    setIsDrinkActive(false)
    setIsSnacksActive(true)
    setIsSolidFoodActive(false)
   
    
  }
  const handleFoodCategory=(e:React.MouseEvent<HTMLParagraphElement, MouseEvent>)=>{
    e.preventDefault()
    setSortByCategories("solidfood")
    setHeaderinfo("Solid Foods / Swalow")

    setIsDrinkActive(false)
    setIsSnacksActive(false)
    setIsSolidFoodActive(true)
    
  }

  const removeItem = (indexToRemove:number)=>{
       if(indexToRemove > -1){
      setCart(cart.filter((item, index: number)=>index != indexToRemove))
       }
  }
   useEffect(()=>{
    setTotal(cart.reduce((total: number, item: { price: number })=>total + Number(item.price),0))
   },[cart])

  
  return (
    <>
    <div className="min-h-screen w-full items-center justify-center flex bg-gray-900">

    <div className="flex flex-col w-full h-screen items-center justify-center md:max-w-[80%] bg-red-200k ">
        <div className="flex flex-col items-center w-full h-[50%] bg-gray-100s">


         <div className="flex-1"></div> 




        <div className=" flex flex-col  bg-red-800d w-full items-center justify-center h-full overflow-hidden ">

          {
            cart.length < 1 ? (
              <div className=" flex h-full w-full bg-[url('/cheef.png')]  bg-cover items-center justify-center   backdrop-blur-sm text-red-900 bg-opacity-40" >
                <div className="flex items-center justify-center inset-0 absolute bg-black bg-opacity-90">
                <p className=" font-wdcs mt-24  animate-pulse">
                  Waiting for your Request
                </p> 
                </div>

                </div>

            ):(


              
              <div

              
              
              
              className="w-full flex flex-col items-center h-full bg-slate-700  overflow-scroll my-4 rounded-lg">
           {cart.map((item:FoodMenu, index: number)=>(
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
             
             key={item._id} className="bg-gray-900d border-b rounded-full  flex md:max-w-[50%] w-[80%]   m-2 pr-1">
               <div className=" flex ">
                <Image alt={"image"} width={100} height={100} className="w-12 h-12 rounded-full" src={urlFor(item.img).url()}/>
               </div>

               <div className="flex-1 ml-2 text-white">
               <p className="font-wdcs">{item.foodtype}</p>
               <p className=" font-wdcs text-xs text-white from-slate-700 italic"> {Gh(item.price)}</p>

               </div>

               <div onClick={()=>removeItem(index)} className="flex items-center ">
               <button  type="button" className=" hover:bg-black font-wdcs italic max-w-md py-3 px-4 rounded-full border border-white text-sm md:text-xl uppercase bg-yellow-500j text-[#fff] cursor-pointer transition transform duration-75 scale-75 ease-in-out">
                    Remove
            </button>
               </div>

             </motion.div>
           ))}
           </div>
           )


         }
          

        </div>
          <div className="flex ring-orange-800 border-dashed border-2 rounded-full bg-white w-full my-2 pl-2 mx-2 items-center">

              <p className="flex-1 font-bold">Total: <span>{Gh(total)}</span></p>

              <button disabled={cart.length < 1} onClick={()=>setIsOpen(true)} type="button" className=" disabled:bg-gray-500 max-w-md py-3 px-8 rounded-full text-xl border-none  md:text-xl uppercase bg-yellow-500 text-[#fff] cursor-pointer transition transform duration-75 scale-75 ease-in-out">
                    Request
            </button>
          </div>


        </div>

        <div className="flex flex-col w-full h-[60%] bg-gray-00 bg-[url('/bg.webp')]l bg-slate-800 ">

            <div className="flex-1 w-full space-y-8">
              <ul className=" flex flex-row  overflow-scroll items-center justify-centers">
              {
                foodMenus
                .filter((value) => {
                  if (sortByCategories == '') {
                    return value
                  } else if (
                    value.categories.title
                      .toLowerCase()
                      .includes(sortByCategories.toLocaleLowerCase())
                  ) {
                    return value
                  }
                })
                
                .map((foodItem)=>(

                  
                  <Foodcard 
                  foodtype={foodItem.foodtype}
                  price={foodItem.price}
                  categories={foodItem.categories}
                  img={foodItem.img}
                  Isproductavailable={foodItem.Isproductavailable}
                  _id={foodItem._id}
                  _createdAt={''} 
                  _updatedAt={''} 
                  _type={''} 
                  _rev={'food'} 

                  />
                ))
              }
              </ul>
              {
                headerinfo ? (

                  <p className="text-center font-bold text-white font-wdcs  text-lg">{headerinfo}</p>
                ):(
                  <p className="text-center font-bold text-white text-sm md:text-lg font-wdcs">Please select Category of Food</p>
                )
              }

            </div>


            <div className="flex space-x-4 justify-center border-t py-2 mb-2">
                <div onClick={handleDrinkCategory} className={ isDrinkActive ? `${isActiveStyle}`:`${nonActiveStyle}`}>Drinks</div>
                <p   onClick={handleSnacksCategory} className={ isSnacksActive ? `${isActiveStyle}`:`${nonActiveStyle}` }>Snacks</p>
                <p   onClick={handleFoodCategory} className={ isSolidFoodActive ?`${isActiveStyle}`: `${nonActiveStyle}`}>Food's</p>

            </div>


        

        </div>

    </div>
</div>
<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
<RequestModal Users={Users}/>
</Modal>
</>
  )
}

export default menupage

export const getServerSideProps:GetServerSideProps = async (contex)=>{
  const foodMenus = await fetchFoodMenu()
  const Users = await fetchUsers();
  return {
    props:{
      foodMenus,
      Users,
    }
  }
}






