import { useState } from "react";
import { createContext } from "react";


 export const Context=createContext()


 export const Contextprovider=({children})=>{


    const [data,setdata]=useState([])

     const addtocart=(value)=>{
        if(data.length>0){
        
        if(data.includes(value)!==true){
            setdata([...data,value])
        }
    }
     else{
        setdata([...data,value])
     }

        
       
    }

    const handledelete=(id)=>{
        let a=data.filter((el)=>el.id!==id)
        setdata(a)
    }

    
    function a(){
        return data.reduce((acc,c)=>Number(acc)+Number(c.dis.slice(1)),0)
    }
    const totalprice=a()
    function b(){
        return data.reduce((acc,c)=>Number(acc)+Number(c.price.slice(1)),0)
    }
    const actualprice=b()

     const [dataemail,finalemail]=useState({})
    const set=(email)=>{
        finalemail({email})
    }
    return <Context.Provider value={{addtocart,data,handledelete,totalprice,actualprice,set,dataemail}}>{children}</Context.Provider>
 }

