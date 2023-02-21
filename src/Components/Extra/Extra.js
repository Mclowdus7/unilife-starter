import React from 'react'
import Header from '../Header/Header'
import './Extra.css'

function Extra({header, tagline}) {
  return (
    <div className='extra-container'>
        <div className='icon'>

        </div>
        <div className='text'>
            <h3>{header}</h3>
            <p>{tagline}</p>
        </div>
      
    </div>
  )
}

export default Extra
