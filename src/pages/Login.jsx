import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../components/Context'

const Login = () => {
    const [email,setemail]=useState("")
    const {set,dataemail}=useContext(Context)
    console.log(dataemail.email)

    const handleclick=()=>{
        set(email)
        setemail("")
    }
  return (
    <div style={{width:"40%",margin:"auto",textAlign:"start",marginTop:'30px',border:"1px solid blue"}}>
        
      
      <p>  Email *</p>

        <Input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder=" Inter email"/>
          
        <Link to="/"><Button style={{width:"100%",marginTop:"30px",marginBottom:"20px"}} onClick={handleclick}>Submit</Button>
</Link>
    </div>
  )
}

export default Login