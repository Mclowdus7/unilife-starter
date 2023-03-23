import React from 'react'
import './CityInfo.css'

function CityInfo({city}) {
  return (
    <div className='city-info-container'>
          <div className='city-info-text'>
              <h2>Being a student in {city?.name}</h2>
              <p>{city?.student_life}</p><br></br>
              <p>{city?.universities}</p>
          </div>
          <div className='city-info-image'>
              <img alt='city-pic' src={city?.image_url} />
          </div>
    </div>
  )
}

export default CityInfo
