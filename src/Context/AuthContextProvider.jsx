

import {createContext,useState} from "react"
export const Authcontext = createContext();

export default function AuthcontextProvider({children}){

    const[isAuth, setisAuth]= useState(false);

const login=(res)=>{
    setisAuth(true)
  console.log(res);
}

    return <Authcontext.Provider value={{isAuth,login}}> {children}  </Authcontext.Provider>
}