import React from 'react'
import './PropertyDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//test with properties/propertyid when running
//don't forget how you made your buttons a link in allcities

function PropertyDetails() {

    const {id} = useParams()
    const [property, setProperty] = React.useState()

    console.log(id)

React.useEffect(
    ()=>{
        axios.get(`https://unilife-server.herokuapp.com/properties/${id}`)
        .then(res =>{
            // console.log(res.data)
            setProperty(res.data)
             
        })
        .catch(err => console.log(err))
   
},[] 

)

console.log(property)
  return (
    <div>
      <p>{property?.address?.street}</p>
    </div>
  )
}

export default PropertyDetails

