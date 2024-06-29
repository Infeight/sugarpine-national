import React from 'react'
import Head from '../header/head.jsx'
import Footer from '../footer/footer.jsx';
import Dest_cards from '../dest-cards/dest_cards.jsx';
import Suggestor from '../suggestor.jsx';
import Suggestordisplay from '../suggestor-display.jsx';
import { BsListCheck } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import './home.css'
const Home = () => {


  return (
    <>
  
    <Head></Head>

    <div className="about-info">
      <h2 className='our-work-head'>WHY US ?</h2>
      <div style={{display:"flex",justifyContent:"space-around", width:"95%", height:"85%", margin:"auto"}}>
      <div className="ourwork-img" >
        <img src="../ourwork-img.jpg" alt="" />
        <div className="insta-model">
          <li><FcLike /></li>
          <li><FaRegComment /></li>
          <li><FiSend /></li>
          <li style={{fontFamily:"cursive"}}>know YOURSELF !!</li>
        </div>
        </div>
     
      <div className="why-desc" style={{display:"flex", flexDirection:"column"}}>
        Welcome to SugarPine National, your ultimate destination companion for exploring the vibrant tapestry of India's tourist gems. At SugarPine National, we are more than just a travel app - we're your trusted companion, dedicated to curating unforgettable experiences that leave you with cherished memories. (click/hover on topics below.)

        <div className="options">
          <li classname="optionsli" style={ {}}><h4>Comprehensive Information</h4><p style={{ paddingLeft: "1rem" }}>We provide detailed insights into every destination, ensuring you have all the information you need at your fingertips. From historical landmarks to hidden gems, we've got you covered.</p></li>
          <li classname="optionsli"  style={{  }}><h4>Seamless Search Experience</h4><p style={{ paddingLeft: "1rem" }}>With our user-friendly interface, Searching hotels, Restaurants, and Tourist spots is a breeze. Say goodbye to hassle and hello to convenience.

          </p></li>
          <li classname="optionsli" style= {{  }} ><h4>Expert Guides at Your Service</h4><p style={{ paddingLeft: "1rem" }}> Our team of well-trained tourist guides is passionate about showcasing the best of India. Whether you're exploring ancient ruins or a local cuisine, our guides ensure you have an enriching experience.</p></li>
          <li classname="optionsli" style={{  }}><h4>Customer Satisfaction Guaranteed</h4><p style={{ paddingLeft: "1rem" }}>Your satisfaction is our top priority. We go above and beyond to ensure every aspect of your journey with us exceeds expectations.we're here for you every step of the way.</p></li>
          <li classname="optionsli" style={{  }}><h4>Safety and Security</h4><p style={{ paddingLeft: "1rem" }}>Your safety is non-negotiable. Rest assured, we prioritize safety measures to ensure you can explore with peace of mind.</p></li>
          <li classname="optionsli" style={{  }}><h4>Authentic Experiences</h4><p style={{ paddingLeft: "1rem" }}>We believe in authentic, immersive travel experiences that allow you to connect with the heart and soul of each destination. Prepare to be captivated by India's rich culture, heritage, and hospitality.</p></li>
        </div>

      </div> </div>
    </div>

    <Dest_cards/>
    

    <div className="suggestions">
       <h2>SUGGESTIONS FROM FELLOW TRAVELLERS</h2>
       <div className="suggestions-1">
       <div className="suggestions-disp" id='suggestions-disp'>
        <button className='addsuggestion' value={"off"} onClick={(e)=>{
          if(e.target.value == "off"){
              e.target.value = "on"
               document.getElementById('suggestion-desc').style.display = "flex"
               document.getElementById("suggestions-disp").style.width = "50%"
               e.target.innerHTML = "Close"
          }
          else if(e.target.value == "on"){
            e.target.value ="off";
             document.getElementById('suggestion-desc').style.display = "none"

             document.getElementById("suggestions-disp").style.width = "100%"
               e.target.innerHTML = "Add Yours"
          }
         
         

        }}>Add yours</button>
        <Suggestordisplay/>
       </div>
       <Suggestor/>
</div>
    </div>

    <Footer/>
  
  </>
  )
}

export default Home
