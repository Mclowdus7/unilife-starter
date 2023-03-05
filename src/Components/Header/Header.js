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
            <p><SlHeart className='icon' />Shortlist</p>
           <Link to={'/contact'}><p><SlEnvolope className='icon' />Contact Us</p></Link>
        </div>
      
    </div>
  )
}

export default Header
