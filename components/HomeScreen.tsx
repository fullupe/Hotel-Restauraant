import React from 'react'
import { MdFastfood,MdFoodBank } from 'react-icons/md';
import { useRouter } from 'next/router'

function Home() {

  //const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center md:max-w-[80%]">
      <div className=" flex flex-col w-full h-full">
        <div className=" flex flex-col  space-y-4 h-full w-full rounded-full rounded-b items-center justify-center bg-white">
          <p className=" text-4xl text-yellow-500 tracking-[4px] font-wdc">MENU</p>
          <MdFastfood className=" text-6xl text-gray-800" />
          <p className="font-bold font-wdc">Open From 6am - 12am Every Day</p>
          <hr className="w-[100px] h-1 bg-yellow-500 animate-pulse" />
        </div>
      </div>

      <div className=" flex flex-col w-full h-full">
        <div className=" flex flex-col h-full w-full space-y-8 rounded-full bg-slate-900 pt-20 items-center justify-centerl rounded-t">
          <MdFoodBank className=" text-7xl text-white" />
          <p className="font-bold text-yellow-500 font-wdcs">Restaurant and Bar</p>

          <button onClick={()=>router.push("/menupage")} className=" font-wdc w-[40%] mx-12 bg-yellow-500 hover:bg-gray-800 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-blue-500 rounded-full">
            Go to Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
