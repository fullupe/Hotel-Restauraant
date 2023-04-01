import React,{useContext, useState} from 'react'
import { useRouter } from 'next/router'
import {GlobalContext} from "../contex/globalContext"

import { Users } from '../typings'

import {CirclesWithBar } from 'react-loader-spinner'
import Gh from "../utils/helper"



type Props={
  Users:Users[]
}

function RequestModal({Users}: Props) {


    const router = useRouter()
    const {total, setUser} =useContext(GlobalContext)

    const [roomNumber, setRoomNumber] = useState<string>('');
    const [tel, setTel] = useState<string>('');

    const [loading, setLoading] = useState(false)
    const [sucessful, setSucessful] = useState(false)
    const [declined, setDeclined] = useState(false)

    
    console.log(Users)
    const handleCornfirm =(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        setLoading(true)


        let findDataOb = Users.find(guest => guest.roomnumber.room ==roomNumber);
        setUser(findDataOb)

       let findData = Users.map((guest)=>guest.roomnumber.room == roomNumber && guest.contact == tel);

     
  

       if(findData.includes(true)){
           setSucessful(true)
           setLoading(false)
           setDeclined(false)
           setRoomNumber(" ")
           setTel(" ")
           router.push("/successful")

       }else{
        setDeclined(true)
        setLoading(false)
        setSucessful(false)
       }
       
    }
  return (
    <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-sm text-yellow-500 italic font-wdcs ">Please confirm your room number &  phone Number </h1>

        <p className="text-sm text-end italic font-bold pr-2 text-yellow-800 font-wdcs"> Total Cost {Gh(total)}</p>

         <div className="mb-4 space-y-2 mt-2">
     
      <input value={roomNumber} onChange={(e)=>setRoomNumber(e.target.value.slice(0, 3))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Room Number"/>
     
      <input value={tel} onChange={(e)=>setTel(e.target.value.slice(0, 10))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Phone Number"/>

     <div className ="w-full flex justify-end">

         <div className="flex flex-1">

         {loading && <p className="text-green-600 text-sm animate-pulse">Loading..</p>}

         {sucessful && <CirclesWithBar color="#FFC325" height={50} width={80}/>}

         {declined && <p className="text-[#f02d34] text-sm italic">please check Room Number or Phone Number</p>}

         </div>
      <button onClick={handleCornfirm} disabled={!roomNumber || !tel} className=" font-wdcs disabled:bg-gray-500 max-w-md py-3 px-8 rounded-full border-none text-sm md:text-xl uppercase bg-yellow-500 text-[#fff] cursor-pointer transition transform duration-75 scale-75 ease-in-out">
          Confirm
      </button>

      
    
        </div>
    </div>

    </div>
  )
}

export default RequestModal