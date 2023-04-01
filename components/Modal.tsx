import React, { ReactElement } from 'react'

interface Props {
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void;
    children:ReactElement;
}

function Modal({isOpen,setIsOpen, children}: Props) {

    const handleClose =(e:any)=>{
        if(e.target.id == 'wrapper') setIsOpen(!isOpen)
        
    }

    if(!isOpen) return null;
  return (
      
    <div onClick={(e)=>handleClose(e)} id="wrapper" className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div  className="md:w-[600px] w-[90%] mx-auto flex flex-col px-8">

            <div onClick={()=>setIsOpen(!isOpen)} className="place-self-end  border-2 border-gray-600   rounded-full items-center flex justify-center w-7 h-7">

            <button onClick={()=>setIsOpen(!isOpen)} className="text-gray-600 text-xl place-self-end ">x</button>
            </div>

            <div className="bg-whiteh p-2 rounded-sm">{children}</div>

        </div>

    </div>
  )
}

export default Modal