import React from 'react'
import './PropertyDetailsPhotos.css'

function PropertyDetailsPhotos({property}) {



  return (
        <div className='property-image-container'>
                
                <img src={property?.images[0]} id='main-img' />
                <div className='small-img-container'>
                        <img src={property?.images[1]} id='img-small' />
                        <img src={property?.images[2]} id='img-small' />
                        <img src={property?.images[3]} id='img-small' />
                </div>
                
                
        </div>
  )
}

export default PropertyDetailsPhotos
