import React from 'react'
import './Header.css'
import {SlHeart, SlEnvolope} from "react-icons/sl";
import logo from '../../assets/Logo.png'
import unilife from '../../assets/UniLife.png'
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';

function Header() {

  const [openContact, setOpenContact] = React.useState(false);

  return (
    <div className='header-container'>
        <div className='logo-container'>
            <Link to = '/'>
            <img className='logo' alt='logo' src={logo} />
            </Link>
            <img className='name' alt='name' src={unilife} />
        </div>
        <div className='links-container'>
            <Link to={'/favorites'}><p><SlHeart className='icon' />Shortlist</p></Link>
           <p onClick={() => {setOpenContact(true)}}><SlEnvolope className='icon' />Contact Us</p>
           {openContact && <ContactForm closeContact={setOpenContact} />}
        </div>
      
    </div>
  )
}

export default Header
