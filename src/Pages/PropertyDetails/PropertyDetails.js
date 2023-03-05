import React from 'react'
import axios from 'axios'
import PropertyDetailsPhotos from '../../Components/PropertyDetailsPhotos/PropertyDetailsPhotos'
import {useParams} from 'react-router-dom'
import PropertyDescription from '../../Components/PropertyDescription/PropertyDescription'
import KeyFeatures from '../../Components/KeyFeatures/KeyFeatures'
import BigDetailsBox from '../../Components/BigDetailsBox/BigDetailsBox'

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
   
},[] 

)

  return (
    <div className='property-details-container'>
        <PropertyDetailsPhotos
            className='photos'
            property={propertyInfo}
        />
        <PropertyDescription
            className='description'
            description={propertyInfo}
        />
        <KeyFeatures 
            features={propertyInfo}
        />
        <BigDetailsBox 
            details={propertyInfo}
            address={propertyInfo?.address}
        />
    </div>
  )
}

export default PropertyDetails

