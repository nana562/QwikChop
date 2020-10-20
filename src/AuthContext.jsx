import React,{useState} from "react";

const AuthContext=React.createContext();
const {Provider}=AuthContext;

const AuthProvider=({children})=>{
    const [isAuthenticted,setIsAuthenticated]=useState(false);
return(<Provider value={{
    isAuthenticted,
    setIsAuthenticated
}}>
    {children}
</Provider>)
}

export {AuthContext,AuthProvider}