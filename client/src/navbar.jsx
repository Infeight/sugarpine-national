import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { BiTrip } from "react-icons/bi";
const Navbar = () => {

  

  return (
    <div className='nav-bar'>
      <ul className='navbar-ul'>
        <li className='navbar-li' id='logoname' style={{fontWeight:"900", position:"relative",fontSize:"5rem", cursor:""}}>SUGARPINE NATIONAL</li>
        <li className='navbar-li'><Link to= {'/destinations'}><BiTrip /> Destinations</Link></li>
        <li className='navbar-li'><Link to='/'><IoHome /> Home</Link></li>
        <li className='navbar-li'><Link to={'/blog'}><FaPencil />Blog</Link></li>
        <li className='navbar-li'><Link to={'/about'}><RiTeamFill /> About</Link></li>
        <li className='navbar-li'><Link to={'/contacts'}><TiContacts /> Contacts</Link></li>
       
      </ul>
    </div>
  )
}

export default Navbar
