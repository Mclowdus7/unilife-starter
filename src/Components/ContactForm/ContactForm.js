import React from 'react'
import './ContactForm.css'
import Contact from '../../assets/Contact.png'

function ContactForm() {
  return (
    <div className='contact-form-container'>
    <div className='left-side'>
        <h2>Contact Us</h2>
        <p>Feel free to contact us if you have any questions.<br></br>
Looking forward to hear from you.</p>
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
            <img id='contact-pic' src={Contact}/>
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
