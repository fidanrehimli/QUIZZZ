import React from 'react'
import "./footer.css"
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='footers'>
    <div className='footer'>
      <div className='aboutus'>
        <h1 className='footertext'>About Us</h1>
        <p className='footerparam'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Minus animi mollitia magnam esse quia delectus ut<br /> blanditiis nihil asperiores aliquid.</p>
      </div>

      <div className='restaurant'>
        <h1 className='restext'>The Restaurant</h1>
        <p className='res'>About Us</p>
        <p className='res'>Chefs</p>
        <p className='res'>Events</p>
        <p className='res'>Contact</p>
      </div>

      <div className='links'>
        <h1 className='linktext'>USEFUL LINKS</h1>
        <p className='eats'>Foods</p>
        <p className='eats'>Drinks</p>
        <p className='eats'>Breakfast</p>
        <p className='eats'>Brunch</p>
        <p className='eats'>Dinner</p>
      </div>

      <div className='links'>
        <h1 className='linktext'>USEFUL LINKS</h1>
        <p className='eats'>Foods</p>
        <p className='eats'>Drinks</p>
        <p className='eats'>Breakfast</p>
        <p className='eats'>Brunch</p>
        <p className='eats'>Dinner</p>
       
      </div>
      </div>
      <div className='icons'>
     <FaTwitter className='icon' />
     <FaFacebook className='icon' />
     <FaInstagram className='icon' />
     </div>
     <h3 className='iconparam'>  
© Copyright ©2024 All rights reserved | This template is made with<CiHeart /> by Colorlib</h3>
    </div>
   
  )
}

export default Footer