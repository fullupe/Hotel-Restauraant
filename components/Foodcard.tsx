import Image from 'next/image';
import React,{useContext} from 'react'
import { AiFillLike } from 'react-icons/ai';
import {GlobalContext} from "../contex/globalContext"
import { FoodMenu } from "../typings";
import urlFor from '../utils/urlFor';





function Foodcard({_id,foodtype, price,categories,img, Isproductavailable}:FoodMenu) {

  let Ghcedis = new Intl.NumberFormat('en-US', {
    //style: 'currency',
    //currency: '',
});

  const {cart, setCart} =useContext(GlobalContext);

 

  const addtocart =(_id: string, price: number, categories: string,img: any, Isproductavailable: boolean)=>{

    if(!Isproductavailable) return;

    //console.log(foodtype)
    const data={foodtype,_id,img,price}
    setCart([...cart,data]);

  }

  return (

    <div key={_id} className={`inline-block px-3 mt-4 relative `}>
    <div
   
    onClick={()=>addtocart(_id,price,foodtype,img,Isproductavailable)}
      className="w-[280px] h-[300px] max-w-xs overflow-hidden my-2 rounded-lg shadow-md bg-gray-900 hover:shadow-xl transition-shadow border-2  duration-300 ease-in-out cursor-pointer"
    >
        <Image alt={'image'} width={100} height={100} className="p-2 w-full h-[70%] rounded-2xl flex" src={urlFor(img).url()}/>
        

        <div className="bg-gray-900 h-24 flex flex-row overflow-hidden items-center justify-between px-1 pb-1 ">
          <div >
          
          <p className="ml-1 font-bold  text-white font-wdcs">{foodtype}</p>
        <p className="ml text-orange-400"> ⭐︎⭐︎⭐︎⭐︎</p>
          </div>

        <div className="text-center bg-yellow-00 mt-1 p-2 rounded-full items-center flex justify-center">
        {/* <AiFillLike className="text-center text-xl text-white rotate"/> */}
        {/* <p className="text-white ml-1 text-2xl font-wdcs">{Ghcedis.format(price)}</p> */}
        <div className="text-white ml-1 font-wdcs">Ghc  <span className="text-2xl font-extrabold">{Ghcedis.format(price)}</span></div>

        </div>
        </div>

    <div className={!Isproductavailable  ? `  flex items-center justify-center inset-0 absolute bg-black bg-opacity-60 rounded-lg cursor-not-allowed `:`hidden`}>
      <p className="bg-yellow-500 text-white px-2 py-1 rounded-full text-lg font-wdcs italic ">Not Available</p>
    </div>
    </div>
  </div>

  
  )
}

export default Foodcard

