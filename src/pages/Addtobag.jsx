import React from 'react'
import { useContext } from 'react'
import { Context } from '../components/Context'
import  style from "./addcart.module.css"
import {Link} from "react-router-dom"
 
const Addtobag = () => {

    const {data,handledelete,totalprice,actualprice}=useContext(Context)
    // console.log(totalprice)
  return (
    <div style={{display:"flex",justifyContent:'space-between',width:"90%",margin:"auto"}} >
    <div style={{width:'63%',marginTop:"3%"}}>
      <div className={style.maindata}>
       <div>Item</div>
       <div className={style.main1}><p>Quantity</p><p>Price/pc</p><p>You pay</p></div>

      </div>

       {data.map((el)=>(
          <div className={style.main}>
            <div style={{display:'flex',height:"100px"}}><img className={style.image} src={el.image}/>
            <div><p style={{alignItems:"center"}}>{el.name}</p>
             <button style={{border:'1px solid grey',marginTop:"20px"}} onClick={()=>handledelete(el.id)}>X remove</button></div>
            
            </div>
            <div className={style.main3}><div style={{border:'1px solid grey',width:"40%"}}><p>Buy 1 at</p>{el.price}/pc</div><p>{el.price}</p><p>{el.price}</p></div>

          </div>
       ))}


      

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
       <div className={style.buybutton}><Link to="/checkout"><button>Buy Now</button></Link></div>
       <div className={style.addbutton}><Link to="/"><button>Continue Shopping</button></Link></div>


       </div>
    </div>
  )
}

export default Addtobag