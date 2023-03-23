import React from 'react'
import './PropertyDetailsPhotos.css'

function PropertyDetailsPhotos({property}) {



  return (
        <div className='property-image-container'>
                
                <img alt='' src={property?.images[0]} id='main-img' />
                <div className='small-img-container'>
                        <img alt='' src={property?.images[1]} id='img-small' />
                        <img alt='' src={property?.images[2]} id='img-small' />
                        <img alt='' src={property?.images[3]} id='img-small' />
                </div>
                
                
        </div>
  )
}

export default PropertyDetailsPhotos
