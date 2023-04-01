import React,{ ReactNode, useState } from "react";
//const [cart, setcart] = useState<any>(null)

interface IGlobalContextProps {
    cart: [];
    setCart: (cart:any) => void;

    total:number;
    setTotal:(total:any)=>any

    user:any;
    setUser: (user:any) => void;
   
  }


  export const GlobalContext = React.createContext<IGlobalContextProps>({
    cart: [],
    setCart: ({}) => {},

    total:0,
    setTotal:(total:number)=>Number,

    user:{},
    setUser: (user:any) =>{},
    
  });

  type Props = {
    children: ReactNode;
};

  export const GlobalContextProvider = ({children}:Props) => {
    const [currentCart, setCurrentCart] = useState<[]>([]);
    const [total, setTotal] = useState<number>(0)
    const [user, setUser] = useState('')
    
  
    return (
      <GlobalContext.Provider value={{cart:currentCart, total:total, setTotal:setTotal, setCart:setCurrentCart, user:user, setUser:setUser}}
      >
        {children}
      </GlobalContext.Provider>
    );
  };