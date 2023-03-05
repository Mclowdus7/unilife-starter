import React from 'react'
import './PropertyDescription.css'

function PropertyDescription({description}) {
  return (
    <div className='description-container'>
      <h2>Description</h2>
      <p>{description?.property_description}</p>
    </div>
  )
}

export default PropertyDescription
