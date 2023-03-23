import React from 'react'
import axios from 'axios'
import PropertyDetailsPhotos from '../../Components/PropertyDetailsPhotos/PropertyDetailsPhotos'
import {useParams} from 'react-router-dom'
import PropertyDescription from '../../Components/PropertyDescription/PropertyDescription'
import KeyFeatures from '../../Components/KeyFeatures/KeyFeatures'
import BigDetailsBox from '../../Components/BigDetailsBox/BigDetailsBox'
import './PropertyDetails.css'
import BedroomPrices from '../../Components/BedroomPrices/BedroomPrices'

function PropertyDetails() {

  const {id} = useParams()

  const [propertyInfo, setPropertyInfo] = React.useState()

  React.useEffect(
    ()=>{
        axios.get(`https://unilife-server.herokuapp.com/properties/${id}`)
        .then(res =>{
            console.log(res.data)
            setPropertyInfo(res.data)  
        })
        .catch(err => console.log(err))
   //eslint-disable-next-line
},[] 

)

  return (
    <div className='property-details-container'>
        <PropertyDetailsPhotos
            property={propertyInfo}
        />
        <BigDetailsBox 
            details={propertyInfo}
            address={propertyInfo?.address}
        />
        <PropertyDescription
            description={propertyInfo}
        />
        <BedroomPrices 
            prices={propertyInfo?.bedroom_prices}
            
        />
        <KeyFeatures 
            features={propertyInfo}
        />
       
    </div>
  )
}

export default PropertyDetails

