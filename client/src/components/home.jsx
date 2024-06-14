import React from 'react'
import Head from '../header/head.jsx'
import Footer from '../footer/footer.jsx';
import Dest_cards from '../dest-cards/dest_cards.jsx';
import Suggestor from '../suggestor.jsx';
import Suggestordisplay from '../suggestor-display.jsx';
import './home.css'
const Home = () => {
  return (
    <>
    <Head></Head>

    <div className="about-info">
      <h2 className='our-work-head'>WHY US ?</h2>
      <div className="ourwork-img">
        <img src="../ourwork-img.jpg" alt="" />
        <div className="insta-model">
          <li></li>
          <li></li>
          <li></li>
        </div>

      </div>
      <div className="why-desc">
        Welcome to SugarPine National, your ultimate destination companion for exploring the vibrant tapestry of India's tourist gems. At SugarPine National, we are more than just a travel app - we're your trusted companion, dedicated to curating unforgettable experiences that leave you with cherished memories.

        <div className="options">
          <li style={{ backgroundColor: "#bcaea4", color: "white" }}><h4>Comprehensive Information</h4><p style={{ paddingLeft: "1rem" }}>We provide detailed insights into every destination, ensuring you have all the information you need at your fingertips. From historical landmarks to hidden gems, we've got you covered.</p></li>
          <li  style={{ backgroundColor: "#5e9db2", color: "white" }}><h4>Seamless Search Experience</h4><p style={{ paddingLeft: "1rem" }}>With our user-friendly interface, Searching hotels, Restaurants, and Tourist spots is a breeze. Say goodbye to hassle and hello to convenience.

          </p></li>
          <li style= {{ backgroundColor: "#9ae9a1", color: "white" }} ><h4>Expert Guides at Your Service</h4><p style={{ paddingLeft: "1rem" }}> Our team of well-trained tourist guides is passionate about showcasing the best of India. Whether you're exploring ancient ruins or a local cuisine, our guides ensure you have an enriching experience.</p></li>
          <li style={{ backgroundColor: "#56a1a4", color: "white" }}><h4>Customer Satisfaction Guaranteed</h4><p style={{ paddingLeft: "1rem" }}>Your satisfaction is our top priority. We go above and beyond to ensure every aspect of your journey with us exceeds expectations.we're here for you every step of the way.</p></li>
          <li style={{ backgroundColor: "#d4aa3a", color: "white" }}><h4>Safety and Security</h4><p style={{ paddingLeft: "1rem" }}>Your safety is non-negotiable. Rest assured, we prioritize safety measures to ensure you can explore with peace of mind.</p></li>
          <li style={{ backgroundColor: "#004443", color: "white" }}><h4>Authentic Experiences</h4><p style={{ paddingLeft: "1rem" }}>We believe in authentic, immersive travel experiences that allow you to connect with the heart and soul of each destination. Prepare to be captivated by India's rich culture, heritage, and hospitality.</p></li>
        </div>

      </div>
    </div>

    <Dest_cards/>
    

    <div className="suggestions">
       <h2>SUGGESTIONS FROM FELLOW TRAVELLERS</h2>
       <div className="suggestions-1">
       <div className="suggestions-disp" id=''>
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
