import React from 'react'
import './Header.css'
import {SlHeart, SlEnvolope} from "react-icons/sl";
import logo from '../../assets/Logo.png'
import unilife from '../../assets/UniLife.png'

function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <img className='logo' alt='logo' src={logo} />
            <img className='name' alt='name' src={unilife} />
        </div>
        <div className='links-container'>
            <a href=''><SlHeart className='icon' />Shortlist</a>
            <a href=''><SlEnvolope className='icon' />Contact Us</a>
        </div>
      
    </div>
  )
}

export default Header
