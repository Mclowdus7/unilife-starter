import React from 'react'
import './BedroomPrices.css'

function BedroomPrices({prices}) {
 
    
  return (
    <div className='prices-box'>
        {
        prices&&Object.values(prices).map((item, index)=><h3 className='price-for-one'>{`Bedroom ${index + 1}`}-${item}</h3>)
        }
    </div>
  )
}

export default BedroomPrices
