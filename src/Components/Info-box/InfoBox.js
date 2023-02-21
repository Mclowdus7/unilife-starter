import React from 'react'
import './InfoBox.css'

function InfoBox({img, header, tagline}) {
  return (
    <div className='info-box'>
      <img src={img}/>
      <h3>{header}</h3>
      <p>{tagline}</p>
    </div>
  )
}

export default InfoBox
