import React, { useEffect } from 'react'
import  './header.css'
import { useState, useRef } from 'react';
import axios from 'axios'
import Navbar from '../navbar.jsx';


const Head = () => {

  const [loginsent, setLoginsent] = useState(false)
  useEffect(()=>{
    loggeduserdata();

  },[loginsent])

let loggeduser1 = localStorage.getItem("loggeduser")

console.log(loggeduser1)

    const [loggeduser,setLoggeduser] = useState([])
 
  let [user,setUser] = useState({
    username:"",
    Email: "",
    phone:"",
  })
  const [loggeddata,setLoggeddata] = useState([]);

  let name; let value;
 const handleChange = (e) =>{
  name = e.target.name;
  value =e.target.value;
  setUser({...user,[name]:value})
  
 }

// 



 const logout = ()=>{
  // if(loginsent == false){  setLoginsent(true)}
  // else{
  //   setLoginsent(false)
  // }
  setLoggeduser([])
//  setLoginsent(false)
  localStorage.setItem("loggeduser","");
  localStorage.setItem("logindet-mail","" )
  let q= fetch('http://localhost:5002/logout' , {method:'post',headers:{"Content-Type": "application/text"} ,body: loggeduser})


}

const loggeduserdata = async ()=>{
  let alllogins = await fetch('http://localhost:5002/logins')
  let getlogins = await alllogins.json()
console.log("jhviuhoi")
  getlogins.logins.forEach((elem)=>{
    if(elem.Email === user.Email){
      setLoggeduser([elem])
      localStorage.setItem("loggeduser", elem.username) 
     
      localStorage.setItem("logindet-mail", elem.Email  )
    }
    
  })


 
 }

const senddata = () =>{
  if(loginsent == false){  setLoginsent(true)}
  else{
    setLoginsent(false)
  }

  console.log("worked")
  let r= fetch('http://localhost:5002/login' , {method:'post',headers:{"Content-Type": "application/json"} ,body:JSON.stringify(user)})
  
}

if(loggeduser.length!=0){
  
  return(
    <>
    <Navbar / >
    <div className="head-back">
       <div className="brand-cont">
       <div className="brand-name" style={{fontSize:"6rem", textAlign:"center"}}>
       Welcome to Sugarpine National {loggeduser1}
       </div>
     


   {/* <div className='welcomediv'></div> */}
   <button id='logout' onClick={()=>{logout()}} >Logout</button>


       </div>
      
     
      
    </div></>
  );

}

else if(loggeduser1!=""){
  
  return(
    <>
    <Navbar / >
    <div className="head-back">
       <div className="brand-cont">
       <div className="brand-name" style={{fontSize:"6rem", textAlign:"center"}}>
       Welcome to Sugarpine National {loggeduser1}
       </div>
     


   {/* <div className='welcomediv'></div> */}
   <button id='logout' onClick={()=>{logout()}} >Logout</button>


       </div>
      
     
      
    </div></>
  );

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
  )}

export default Head
