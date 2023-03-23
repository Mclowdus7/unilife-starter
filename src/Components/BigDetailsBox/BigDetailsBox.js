import React, {useContext} from 'react'
import './BigDetailsBox.css'
import bluebath from '../../assets/bluebath.png'
import bluebed from '../../assets/bluebed.png'
import {SlHeart} from "react-icons/sl";
import {FavoriteContext} from '../../contexts/FavoriteContext';
import BookingForm from '../BookingForm/BookingForm';



function BigDetailsBox({details}) {

        const {favorites, setFavorites} = useContext(FavoriteContext)
        const [added, setAdded] = React.useState(false)

        const handleFavorites= () => {
                setFavorites([...favorites, {details}])
                setAdded(!false)
                // localStorage.setItem ("added", !added)
               }

        const [openBooking, setOpenBooking] = React.useState(false);


        
        
  return (
    <div className='big-details-container'>
            <div className='address-box'>
                <div className='street-city'>
                        <h3>{details?.address?.street}</h3>
                        <h3>{details?.address?.city}</h3>
                        <h3>{details?.address?.postcode}</h3>
                </div>
                {/* <div className='post-code'>
                        <h3>{details?.address?.postcode}</h3>
                </div> */}
            </div>
            <div className='details-box'>
                    <div className='bedrooms'>
                        <h4>Bedrooms</h4>
                            <div className='bedroom-count'>
                                    <img alt='' id='bedroom-pic' src={bluebed} />
                                    <h3>{details?.bedroom_count}</h3>
                            </div>
                    </div>
                    <div className='bathrooms'>
                        <h4>Bathrooms</h4>
                            <div className='bathroom-count'>
                                    <img alt='' className='bathroom-pic' src={bluebath} />
                                    <h3>{details?.bathroom_count}</h3>
                            </div>
                    </div>
                    <div className='type'>
                        <h4>Property Type</h4>
                        <h3>{details?.property_type}</h3>
                    </div>
                    <div className='price'>
                        <h4>Price</h4>
                        <h3>{details?.rent}</h3>
                    </div>
                    <div className='furniture'>
                        <h4>Furnished Type</h4>
                        <h3>{details?.furnished}</h3>
                    </div>
                    <div className='availability'>
                        <h4>Availble From</h4>
                        <h3>{details?.availability}</h3>
                    </div>
            </div>
            <div className='button-container'>
                    <button style={{
          
          color: added ? 'red' : '',
        }} onClick={handleFavorites} className='shortlist'><SlHeart className='heart' /></button>
                    <button className='book' onClick={() => {setOpenBooking(true)}}>Book Viewing</button>
                    {openBooking && <BookingForm closeBooking={setOpenBooking} />}
            </div>
    </div>
  )
}

export default BigDetailsBox
