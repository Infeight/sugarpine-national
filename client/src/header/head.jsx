import React from 'react'
import  './header.css'
import { useState } from 'react';
import axios from 'axios'
import Navbar from '../navbar.jsx';
import loggeduser from '../../../server/logindata.json';
const Head = () => {
  
  const logout = ()=>{
    let q= fetch('http://localhost:5002/logout' , {method:'post',headers:{"Content-Type": "application/text"} ,body: loggeduser})
    console.log(loggeduser)
  }
  
  if(loggeduser.length!==0){
    console.log(loggeduser);
    return(
      <>
      <Navbar / >
      <div className="head-back">
         <div className="brand-cont">
         <div className="brand-name" style={{fontSize:"6rem", textAlign:"center"}}>
         Welcome to Sugarpine National {loggeduser[0].username}
         </div>
       
  
  
     {/* <div className='welcomediv'></div> */}
     <button id='logout' onClick={()=>{logout()}} >Logout</button>
  
  
         </div>
        {/* <div className="main-head-img">
        
          <img src="../../Goa.png" alt="" />
        </div> */}
       
        
      </div></>
    );
    
  }

else if (loggeduser.length==0){
   
  let[user,setUser] = useState({
    username:"",
    Email: "",
    phone:"",
  })

  let name; let value;
 const handleChange = (e) =>{
  name = e.target.name;
  value =e.target.value;
  setUser({...user,[name]:value})
 }

const senddata = () =>{
  let r= fetch('http://localhost:5002/login' , {method:'post',headers:{"Content-Type": "application/json"} ,body:JSON.stringify(user)})
  console.log(user)
}

  return (
  <>

    <Navbar / >
    <div className="head-back">
       <div className="brand-cont">
       <div className="brand-name">
       Discover India with SugarPine National: <br /> Your Journey, Our Passion.
       </div>
     


<div className="login-form" id='login-form'>
  <input type="text" name='username' value={user.username} onChange={handleChange} placeholder='Username' />
  <input type="email" name='Email' value={user.Email} onChange={handleChange}  placeholder='E-mail' />
  <input type="number" name='phone' value={user.phone} onChange={handleChange}  placeholder='Contact number' />
  <button id='submit' onClick={()=>senddata()} >Register/ Sign in</button>
</div>


       </div>
      
     
      
    </div>
    </>
  )}}

export default Head
