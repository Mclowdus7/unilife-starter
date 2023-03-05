import React from 'react'
import './KeyFeatures.css'
import {BsCheckLg} from "react-icons/bs";

function KeyFeatures({features}) {
  return (
    <div className='key-features-container'>

        <h2>Key Features</h2>
           <div className='features-container'>
                {
                    features?.key_features.map(item => 
                    
                            <p><BsCheckLg className='check'/>{item}</p>)
            
        
                    }
            </div>
    </div>
  )
}

export default KeyFeatures
