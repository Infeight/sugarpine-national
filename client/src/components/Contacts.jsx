import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer/footer'
import { useRef } from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import './contacts.css'
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm('service_t89yqca', 'template_tbk43s6', form.current, {
      publicKey: '0jDVFv-PznKuOziiu',
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
      <Navbar />

      <div className="contactdet" style={{ maxWidth: "90%", background: "linear-gradient(180deg,#232F3E, #ffd86a )", boxShadow: "0vw 1vw 2vw" }}>
        <div className="myimg" style={{ gridRow: "1/4" }}>

          <img src="contactus.png" alt="" />
        </div>
        <div className="contactusinfo" style={{ gridRow: "4/8", wordWrap: "break-word" }}>
          <h3 style={{ textAlign: "center" }}>Contact Us</h3>
          At SugarPine National, we are dedicated to providing you with the best travel experience possible. Whether you have a question, need assistance, or want to share your feedback, we're here to help! <br />
          Stay updated and connect with us on social media:  <br />

          <h2 style={{}}>Connect with us:</h2>

          <a style={{ color: "aliceblue", marginRight: "1vw" }} href=""><FaFacebookSquare /></a>
          <a style={{ color: "aliceblue", marginRight: "1vw" }} href=""><FaInstagram /></a>
          <a style={{ color: "aliceblue", marginRight: "1vw" }} href=""><FaSquareXTwitter /></a>  <br />
          Your adventure starts with us, and we’re just a message away. We look forward to hearing from you!
        </div>
        <div className="contactform" style={{ gridRow: "1/8" }}>

          <form ref={form} style={{}}>
            <label style={{ fontFamily: "monospace", color: "white", fontWeight: "700", textAlign: "right" }}>Name</label>
            <input type="text" name="user_name" />
            <label style={{ fontFamily: "monospace", color: "white", fontWeight: "700", textAlign: "right" }}>Subject</label>
            <input type="text" name="Subject" />
            <label style={{ fontFamily: "monospace", color: "white", fontWeight: "700", textAlign: "right" }}>Message</label>
            <textarea name="message" />
            <input id='contact-submit' type="submit" style={{ borderRadius: "0" }} value="Send" onClick={sendEmail} />
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contacts
