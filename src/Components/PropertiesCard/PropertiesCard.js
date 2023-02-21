import React from 'react'
import './PropertiesCard.css'

function PropertiesCard({property}) {

    const imageStyle = {
        height: "262px",
        width: "350px",
        backgroundImage: `url("${property.image_url}")`,
        borderRadius: "24px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", //need in order to use relative on other stuff
    }

  return (
    <div className='property-card'>
      <div style={imageStyle}>
        <div className='card-overlay'></div>
            <div className='property-text'>
                <h1>{property.name}</h1>
                <p>{property.property_count} properties</p>
            </div>
        </div>
    </div>
  )
}

export default PropertiesCard
