import React, { useEffect } from 'react'
import './header.css'
import { useState, useRef } from 'react';
import axios from 'axios'
import Navbar from '../navbar.jsx';


const Head = () => {

  const [loginsent, setLoginsent] = useState(false)
  const [loggeduser, setLoggeduser] = useState([])
  const [entername, setEntername] = useState("")

  useEffect(() => {
    loggeduserdata();

  }, [loginsent])

  let [user, setUser] = useState({
    username: "",
    Email: "",
    phone: "",
  })

  let loggeduser1 = localStorage.getItem("loggeduser")

  {
    let naemrr; let a = 0;
    const namearr = ["", "Wake up to the stunning Himalayan sunrise and cup of Masala chai!","Explore Rajasthan's majestic forts where each corner whispers History!","Relax on Goa's golden beaches feeling the warmth of sand!",
      "Drift on a houseboat in Kerala's tranquil backwaters!","Savor the rich flavors of Indian cuisine and immerse in Festivals!","Experience the spiritual serenity of Varanasi's Ganga Aarti!"
,"Experience the thrill of trekking in Ladakh's dramatic landscapes!","Unwind in Coorg's lush coffee plantations sipping freshly brewed coffee!","Let India rejuvenate your spirit and leave you with cherished memories."    ]

    useEffect(() => {
      const interval = setInterval(() => {

        if (a > 8) {
          a = 0;
        }
        else {
          a = a + 1;

          setEntername(namearr[a])
        }
      }, 3000)
      return () => clearInterval(interval)
    }, [a])

  }

  let name; let value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })

  }

  const logout = () => {
  
    setLoggeduser([])
    
    localStorage.setItem("loggeduser", "");
    localStorage.setItem("logindet-mail", "")
    localStorage.setItem("login-phone","")
    let q = fetch('http://localhost:5002/logout', { method: 'post', headers: { "Content-Type": "application/text" }, body: loggeduser })
  }

  const loggeduserdata = async () => {
    let alllogins = await fetch('http://localhost:5002/logins')
    let getlogins = await alllogins.json()
    console.log("jhviuhoi")
    getlogins.logins.forEach((elem) => {
      if (elem.Email === user.Email) {
        setLoggeduser([elem])
        localStorage.setItem("loggeduser", elem.username)

        localStorage.setItem("logindet-mail", elem.Email)
        localStorage.setItem("login-phone",elem.phone)
      }

    })}

  const senddata = () => {
    if (loginsent == false) { setLoginsent(true) }
    else {
      setLoginsent(false)
    }

    console.log("worked")
    let r = fetch('http://localhost:5002/login', { method: 'post', headers: { "Content-Type": "application/json" }, body: JSON.stringify(user) })

  }

  if (loggeduser.length != 0) {

    return (
      <>
        <Navbar />
        <div className="head-back">
          <div className="login-form" id='login-form'>
            <div className="signin-cap">Welcome to Sugarpine National <span style={{color:"#ffd86a"}}>{loggeduser1}</span></div>

            <button id='logout' onClick={() => { logout() }} >Logout</button>
          </div>
          <div className="brand-cont">
          <div className="brand-name" style={{ transitionDuration: "1.5s" }}>{entername}
          <img className='coverimage' src="coverimage.jpg" alt="" />
          
          </div>
          </div>
        </div></>
    );

  }

  else if (loggeduser1 != "") {

    return (
      <>

        <Navbar />
        <div className="head-back">
          <div className="login-form" id='login-form'>
            <div className="signin-cap">Welcome to Sugarpine National <span style={{color:"#ffd86a"}}>{loggeduser1}</span></div>

            <button id='logout' onClick={() => { logout() }} >Logout</button>
          </div>
          <div className="brand-cont">
          <div className="brand-name" style={{ transitionDuration: "1.5s" }}>{entername}
          <img className='coverimage' src="coverimage.jpg" alt="" />
          
          </div>
          </div>
 </div>
 </>
    );}


  return (
    <>
      <Navbar />
      <div className="head-back">
        <div className="login-form" id='login-form'>
        <img className='coverimagelogin' src="coverimage.jpg" alt="" />
          <div className="signin-cap">Please sign in or register to use the service.</div>
          <input type="text" name='username' value={user.username} onChange={handleChange} placeholder='Username' />
          <input type="email" name='Email' value={user.Email} onChange={handleChange} placeholder='E-mail' />
          <input type="number" name='phone' value={user.phone} onChange={handleChange} placeholder='Contact number' />
          <button id='submit' onClick={() => senddata()} >Register/ Sign in</button>
        </div>
        <div className="brand-cont">

          <div className="brand-name" style={{ transitionDuration: "1.5s" }}>{entername}
          <img className='coverimage' src="coverimage.jpg" alt="" />
          
          </div>

        </div>
      </div>
    </>
  )
}

export default Head
