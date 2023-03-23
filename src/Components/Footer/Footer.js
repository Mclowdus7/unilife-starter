import React from 'react'
import './Footer.css'
import {MdFacebook} from "react-icons/md";
import {AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-contact-container'>
            <div className='footer-email-container'>
                <h1>Keep in touch</h1>
                <p>Curious about new offerings? Sign up for our <br></br>
                weekly newsletter and stay informed.</p>
                <input type='email' placeholder='  Your email'/>       
            </div>
            <div className='footer-media-container'>
                <h1>Let's socialize</h1>
                <p><MdFacebook className='icon'/>Facebook</p>
                <p><AiFillTwitterCircle className='icon'/>Twitter</p>
                <p><AiFillInstagram className='icon'/>Instagram</p>
            </div>
        </div>
        <div className='footer-bottom-bar'>
            <div className='bottom-bar-links'>
                <p>About Us</p>
                <p>Terms & Conditions</p>
                <p>Privacy & Cookie Policies</p>
            </div>
            <div className='bottom-bar-info'>
                <p>2022</p>
                <p>©</p>
                <p>Unilife</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
