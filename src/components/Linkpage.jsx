import React from 'react'
import {Link} from "react-router-dom"
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const Linkpage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div style={{justifyContent:'space-between',paddingLeft:"50px",display:"flex",borderBottom:'1px solid gray',alignItems:'center'}}>

         <Link to="/"><div style={{display:"flex",justifyContent:'space-around',width:"50%"}}><p><img style={{width:"60%",borderRadius:'50%'}} src="https://images.dealshare.in/1589196156989ID_Row_6_Grocery@2x.jpg"/></p><p>All</p></div></Link> 
        <Link to="/drink"><div style={{display:"flex",justifyContent:'space-around',width:"50%",alignItems:'center'}}><p><img style={{width:"80%",alignItems:"center"}} src="https://images.dealshare.in/1589196222545ID_Row_2_Snacks&Brandedfoods@2x.jpg"/></p><p>Snacks & Drinks</p></div></Link>
        <Link to="/fruit"><div style={{display:"flex",justifyContent:'space-around',width:"60%",alignItems:'center'}}><p><img style={{width:"60%",borderRadius:'50%'}} src="https://images.dealshare.in/1589196146498ID_Row_1_Fruits&Vegetables@2x.jpg"/></p><p>Fruits & Veggies</p></div></Link>
        <Link to="/personalcare"><div style={{display:"flex",justifyContent:'space-around',width:"60%",alignItems:'center'}}><p><img style={{width:"70%",borderRadius:'50%'}} src="https://images.dealshare.in/1589196223482ID_Row_3_Beauty&Hygiene@2x.jpg"/></p><p>Personal Care</p></div></Link>
        <Link to="/cleaning"><div style={{display:"flex",justifyContent:'space-around',width:"60%",alignItems:'center'}}><p><img style={{width:"70%",borderRadius:'50%'}} src="https://images.dealshare.in/1589196216088ID_Row_4_Cleaning&Household@2x.jpg"/></p><p>Clening</p></div></Link> 
        <Link to="/kitchen"><div style={{display:"flex",justifyContent:'space-around',width:"50%",alignItems:'center'}}><p><img style={{width:"70%",borderRadius:"50%"}} src="https://images.dealshare.in/1589196236149ID_Row_32_Kitchen&HomeAppliances@2x.jpg"/></p><p>Home & Kitchen</p></div></Link> 

       
      
    </div>
  )
}

export default Linkpage