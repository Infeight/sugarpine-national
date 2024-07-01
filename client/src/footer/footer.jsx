import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"
const Footer = () => {
  return (

    <>
    <div className='foot' >
        <div className="brandname">Sugarpine National</div>

        <div className="followus">Follow us on:
        <li style={{listStyle:"none",marginRight:"2rem"}}>
        
        <a href="https://www.instagram.com/sugarpinenational/"><FaInstagram /></a>
                        </li>
        <li style={{listStyle:"none",marginRight:"2rem"}}><FaFacebookSquare /></li>
        <li style={{listStyle:"none",marginRight:"2rem"}}><FaSquareXTwitter /></li></div>
        <div className="footerdesc">
        Embark on your next adventure with SugarPine National and unlock the beauty of India like never before. Trust us to turn your travel dreams into reality. <br />

Start exploring today!
        </div>
    </div>
    </>
  )
}

export default Footer
