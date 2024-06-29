import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { BiTrip } from "react-icons/bi";
const Navbar = () => {

  const handlecolorchange = ()=>{

    if(document.getElementById('colorbtntrigger').ariaValueText == 'off'){
      localStorage.setItem("tar",document.getElementById('colorbtntrigger').ariaValueText)
document.getElementById('colorbtntrigger').style.transform = 'translateX(2vw)'
document.getElementById('colorbtntrigger').style.background = "white"
   document.getElementById('colorbtntrigger').style.transitionDuration = '0.4s'
   
   document.getElementById('colorbtntrigger').ariaValueText = 'on'
  document.getElementById("colorbtn").style.background = "linear-gradient(to right, #dd528d, #ff8c79, #fbae52)"
  document.getElementById('colorbtn').style.transitionDuration = '0.4s'
  document.body.style.background = "#232F3E"
  document.body.style.color = "#ffd86a"

    }

    else if(document.getElementById('colorbtntrigger').ariaValueText == 'on'){
      localStorage.setItem("tar",document.getElementById('colorbtntrigger').ariaValueText)
      document.getElementById('colorbtntrigger').style.transform = 'translateX(0vw)'
       document.getElementById('colorbtntrigger').style.transitionDuration = '0.4s'
       document.getElementById('colorbtntrigger').ariaValueText = 'off'
       document.getElementById('colorbtntrigger').style.background = "#ffcb74"
       document.getElementById("colorbtn").style.background = "white"
       document.getElementById('colorbtn').style.transitionDuration = '0.4s'
       document.body.style.background = "white"
        document.body.style.color = "#232f3e"

    }
   
  }

  

  return (
    <div className='nav-bar'>
         <button className='navbar-btn' value={"off"}  onClick={(e)=>{
      if(e.target.value == "off"){
        e.target.value ="on"
        document.getElementById("navbar-ul").style.width="100%"
document.getElementById("navbar-ul").style.height="70vh"
document.getElementById("logoname").style.fontSize = "8vw"
e.target.style.boxShadow = "0vw 1vw 2vw inset"
document.getElementById("logoname").style.transitionDuration = "0.6s"
// document.getElementById("colorbtn").style.width = "9vw"
// document.getElementById("colorbtn").style.height = "5vw"
// document.getElementById("colorbtntrigger").style.width = "7vw"
// document.getElementById("colorbtntrigger").style.height = "5vw"
document.getElementById("logo").style.display = "block"
document.querySelectorAll(".navbar-li a").forEach(element => {
  element.style.fontSize = "6vw"
    element.style.transitionDuration = "0.6s"
    
});

      }
      else if(e.target.value == "on"){
        e.target.value = "off"
        e.target.style.boxShadow = "0vw 1vw 2vw "
         document.getElementById("navbar-ul").style.width="0%"
document.getElementById("navbar-ul").style.height="0vh"
document.getElementById("navbar-ul").style.padding="0"
document.getElementById("logoname").style.fontSize = "0vw"
document.getElementById("logoname").style.transitionDuration = "0.4s"
// document.getElementById("colorbtn").style.width = "0vw"
// document.getElementById("colorbtn").style.height = "0vw"
// document.getElementById("colorbtntrigger").style.width = "0vw"
// document.getElementById("colorbtntrigger").style.height = "0vw"
document.getElementById("logo").style.display = "none"


document.querySelectorAll(".navbar-li a").forEach(element => {
  element.style.fontSize = "0vw"
  // console.log(element.querySelector(".navbar-li-a"))
  element.style.transitionDuration = "0.4s"
});

      }




    }}>Navbar</button>
      <ul className='navbar-ul' id='navbar-ul'>
        <li className='navbar-li' id='logoname' style={{fontWeight:"900", position:"relative", cursor:""}}>SUGARPINE NATIONAL</li>
        <li className='navbar-li'><Link className='navbar-li-a' style={{}} to= {'/destinations'}><BiTrip /> Destinations</Link></li>
        <li className='navbar-li'><Link className='navbar-li-a' to='/'><IoHome /> Home</Link></li>
        <li className='navbar-li'><Link className='navbar-li-a' to={'/blog'}><FaPencil />Blog</Link></li>
        <li className='navbar-li'><Link className='navbar-li-a' to={'/about'}><RiTeamFill /> About</Link></li>
        <li className='navbar-li'><Link className='navbar-li-a' to={'/contacts'}><TiContacts /> Contacts</Link></li>
        <li className='logo' id='logo'><img src="icon.png" alt="" /></li>
        {/* <div className="colorbtn" id='colorbtn' onClick={handlecolorchange} >
          <div className="colorbtntrigger" id='colorbtntrigger' aria-valuetext='off'></div>
        </div> */}
       
      </ul>
    </div>
  )
}

export default Navbar
