import React from 'react'
import './BookingForm.css'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import BookingPic from '../../assets/BookingPic.png'


function BookingForm({closeBooking}) {

    const {id} = useParams()
    const [address, setAddress] = React.useState()

    React.useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/properties/${id}`)
            .then(res =>{
                console.log(res.data.address)
                setAddress(res.data.address)
            })
            .catch(err => console.log(err))
       
    },[] 
)

  return (
    <div className='booking-form-container'>
        <h1 className='x-button'onClick={() => closeBooking(false)}>X</h1>
        <div className='left-side'>
            <h2>Book a Viewing</h2>
            <p>{address?.street}, {address?.city}, {address?.postcode}</p>
            <form>  
                    <div className='name-box'>
                        <label for = 'name'>Name</label>
                        <input type='text' id='name' placeholder='Enter your name'></input>
                    </div>
                    <div className='email-box'>
                        <label for = 'email'>Email</label>
                        <input type='text' id='email' placeholder='Enter your email address'></input>
                    </div>
                    <div className='phone-box'>
                        <label for = 'phone'>Phone Number</label>
                        <input type='text' id='phone' placeholder='Enter your phone number'></input>
                    </div>
            </form>
         </div>
         <div className='right-side'>
            <div className='pic-container'>
                <img id='booking-pic' src={BookingPic}/>
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

export default BookingForm
