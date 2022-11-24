import React from 'react'
import { useState } from 'react'
 import {Input,Button} from "@chakra-ui/react"
 import  style from "./addcart.module.css"
import { useContext } from 'react'
import { Context } from '../components/Context'
 const Checkout = () => {

    const {totalprice,actualprice}=useContext(Context)
  const [data,setdata]=useState({})
  console.log(data)
    const handleadd=(e)=>{
       let {value,name}=e.target

     
      setdata({...data,[name]:value})


    }

    const handlesubmit=(e)=>{
     e.preventDefault()

     console.log(data)
     setdata({})
    }
    const handledelever=()=>{
        alert("success")
    }
  return (
    <div style={{display:"flex",justifyContent:'space-between'}}>

     <div style={{border:"1px solid grey",width:"50%",textAlign:"start",marginLeft:"30px",marginTop:"3%"}}><p style={{color:"red"}}>Delevery address</p><p style={{fontSize:"10px"}}>Mandatory Fields *</p>
     
     <form onSubmit={handlesubmit}>

      <p style={{textAlign:"start"}}>Full Name</p>
      <Input  style={{marginTop:"10px"}}  type="text" onChange={handleadd} name="name" placeholder='full name '/>
      <br></br>
      <Input style={{marginTop:"10px"}}  type="text" placeholder='Streat & Area *' onChange={handleadd}  name="Area" />
      <br></br>
      <Button style={{width:"100%",marginTop:"10px"}}>Save Address</Button>
     </form>
     
     
         <div ><Button onClick={handledelever} style={{marginTop:"40px",width:"100%"}}>Conform Order</Button></div>
      
     </div>
     <div style={{marginTop:"3%",width:"35%"}}>
       <div  className={style.checkpage}>
          <div>Order Summery</div>
        <div className={style.flex}><p>MRP</p><p> ₹ {totalprice}</p></div>
        <div className={style.flex}><p>Product Discount</p><p className={style.color}> ₹ {totalprice-actualprice}</p></div>
        <div className={style.flex}><p>My Earnings Discount</p><p className={style.color}>0</p></div>
        <div style={{borderBottom:"1px solid blue",width:"80%",margin:"auto"}}></div>
        <div className={style.flextotal}><p>Total Amount to Pay rupees</p><p>₹ {actualprice}</p>
             
        </div>
       </div>
    </div></div>
  )
}

export default Checkout