import React from 'react'
import './CityPropertyCard.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function CityPropertyCard({property}) {

    

  return (
    <div className='city-property-card'>
      <p>{property.rent}</p>
      <img src={property.images[0]}/>
    </div>
  )
}

export default CityPropertyCard
