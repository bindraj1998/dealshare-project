import React, { useContext } from 'react'
import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input,InputGroup,InputLeftElement,InputRightElement,Radio,RadioGroup,Stack} from "@chakra-ui/react"
import {LockIcon, Search2Icon,TriangleDownIcon} from "@chakra-ui/icons"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Context } from './Context';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const {set,dataemail,data}=useContext(Context)

  return (
    <div style={{border:"1px solid red",backgroundColor:"#55a447",height:"55px",display:'flex',alignItems:"center",justifyContent:"space-around"}}>
        <div style={{width:"20%",display:"flex",justifyContent:'space-between',alignItems:"center"}}>
            {/* <img style={{width:"15%",height:"50%"}} src="https://www.dealshare.in/menu_icon.png"/> */}

       
            <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          {/* <Radio value='top'>Top</Radio> */}
          {/* <Radio value='right'>Right</Radio> */}
          {/* <Radio value='bottom'>Bottom</Radio> */}
          {/* <Radio value='left'>Left</Radio> */}
        </Stack>
      </RadioGroup>
      <button  onClick={onOpen}>
      <img style={{width:"50%",height:"50%"}} src="https://www.dealshare.in/menu_icon.png"/>
      </button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><LocalPhoneIcon/> 1234567890</DrawerHeader>
          <DrawerBody>
            <p><Link to="/checkout">Checkout page</Link></p>
              <div style={{borderBottom:"2px solid grey",marginTop:"20px",marginBottom:'20px'}}></div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
       
       
           {/* <p></p> */}
       
       
    
        <img style={{width:"70%"}} src="https://d3hoz38eq91v8w.cloudfront.net/DSLogo/ds_logo_web.png"/>
 
        </div>
        
        <div style={{width:"30%"}}>
        <Stack spacing={4}>
  <InputGroup>
    <InputRightElement
      pointerEvents='none'
      children={<Search2Icon style={{marginBottom:"10px"}} color='black'/>}
    />
    <Input type='tel'style={{backgroundColor:"white",height:"45%"}} placeholder='Search for Products
' />
  </InputGroup>
  </Stack>

</div>
<div style={{display:"flex",color:"white",alignItems:"center"}}> <div><LocationOnIcon/></div><div><p style={{fontSize:"10px"}}>Delivery to <TriangleDownIcon/></p><p>jaunpur 302017</p></div></div>
<div style={{display:"flex",justifyContent:"space-between",color:"white",width:"13%"}}><div style={{display:"flex"}}><div ><PermIdentityIcon/></div><div><Link to="/login">Login</Link></div>
</div>
<div>
<div style={{display:"flex"}}><Link to="/addtobag"><AddShoppingCartIcon/> {data.length}</Link></div>
</div>

</div>

       

    </div>
  )
}

export default Navbar