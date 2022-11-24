import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../components/Context'
 import data from "../components/kitchen"
 import style from "./style.module.css"

const Kitchen = () => {
  const {addtocart}=useContext(Context)
  // console.log(data)
  return (
    <div className={style.main}>

      {data.map((el)=>(
        <div className={style.children}>
         <div className={style.img}><img src={el.image}/></div>
         <div className={style.name}>{el.name}</div>
         <div className={style.price}><p className={style.price1}>{el.price}</p><p className={style.price2}>{el.dis}</p></div>
        <div className={style.morgin}>
        <div className={style.buybutton}> <Link to="/addtobag"><button onClick={()=>addtocart(el)}>BUY NOW</button></Link></div>
        <div className={style.addbutton}> <button onClick={()=>addtocart(el)} >ADD TO BAG</button></div>
        </div>
        

        </div>
      ))}

    </div>
  )
}

export default Kitchen