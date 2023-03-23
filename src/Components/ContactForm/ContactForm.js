import React from 'react'
import './ContactForm.css'
import Contact from '../../assets/Contact.png'

function ContactForm({closeContact}) {
  return (
    <div className='contact-form-container'>
    <h1 className='x-button'onClick={() => closeContact(false)}>X</h1>
    <div className='left-side'>
        <h2 className='contact-header'>Contact Us</h2>
        <h4 className='contact-subtext'>Feel free to contact us if you have any questions.<br></br>
Looking forward to hear from you.</h4>
        <form>  
                <div className='name-box'>
                    <label for = 'name'>Name</label>
                    <input type='text' id='name' placeholder='Enter your name'></input>
                </div>
                <div className='phone-box'>
                    <label for = 'phone'>Phone Number</label>
                    <input type='text' id='phone' placeholder='Enter your phone number'></input>
                </div>
                <div className='select-box'>
                    <label for = 'select'>Are you a...</label>
                    <select>
                        <option>Student</option>
                    </select>
                </div>
        </form>
     </div>
     <div className='right-side'>
        <div className='pic-container'>
            <img alt='contact-icon' id='contact-pic' src={Contact}/>
        </div>
        <div className='email-box'>
                    <label for = 'email'>Email</label>
                    <input type='text' id='email' placeholder='Enter your email address'></input>
                </div>
        <div className='message-box'>
            <label for = 'message'>Message</label>
            <input type='text-area' id='message' placeholder='Enter your message'></input>
            <button className='submit'>Submit</button>
        </div>
     </div>
</div>
  )
}

export default ContactForm
