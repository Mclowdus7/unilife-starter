import React from 'react'
import './Header.css'
import {SlHeart, SlEnvolope} from "react-icons/sl";
import logo from '../../assets/Logo.png'
import unilife from '../../assets/UniLife.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <Link to = '/'>
            <img className='logo' alt='logo' src={logo} />
            </Link>
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
