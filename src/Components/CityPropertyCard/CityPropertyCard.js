import React from 'react'
import './CityPropertyCard.css'
import bedroom from '../../assets/bedroom.png'
import bathroom from '../../assets/bathroom.png'
import home from '../../assets/home.png'
import {Link} from 'react-router-dom'

function CityPropertyCard({property}) {

    

  return (
    <div className='city-property-card'>
        <img alt='property-pic' src={property.images[0]}/>
        <div className='blue-bar'>
            <div className='blue-left'>
                <h2>£{property.rent}</h2>
            </div>
            <div className='blue-right'>
                <div className='bedroom-count'>
                    <img alt='bedroom-icon'src={bedroom} />
                    <p>{property?.bedroom_count}</p> 
                </div>
                <div className='bathroom-count'>
                    <img alt='bathroom-icon' src={bathroom} />
                    <p>{property?.bathroom_count}</p> 
                </div>
           </div>
        </div>
        <div className='text-box'>
            <div className='location'>
                <p>{property?.property_type}</p>
                <div className='address'>
                    <p>{property?.address?.street},</p>
                    <p>{property?.address?.city},</p>
                    <p>{property?.address?.postcode}</p>
                </div>
            </div>
            <div className='furnished'>
                <p>{property?.furnished}</p>
            </div>
        </div>
        <div className='view-button'>
                <img alt='home-icon' src={home} />
                <Link to={`/propertydetails/${property?._id}`}><p>View Home</p></Link>
        </div>
    </div>
  )
}

export default CityPropertyCard
