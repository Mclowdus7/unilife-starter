import React from 'react'
import './CityDetails.css'
import SearchProperty from '../../Components/SearchProperty/SearchProperty'
import BannerPic from '../../Components/BannerPic/BannerPic'
import CityPropertyCard from '../../Components/CityPropertyCard/CityPropertyCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CityInfo from '../../Components/CityInfo/CityInfo'

function CityDetails() {

  const detailsTitle="Search Accomodation"
  const detailsSlogan="Whatever you’re after, we can help you find the right student accommodation for you. "

  const {city_id} = useParams()

    const [properties, setProperties] = React.useState([])
    const [cityInfo, setCityInfo] = React.useState()
    
  React.useEffect(
    ()=>{
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${city_id}`)
        .then(res =>{
            // console.log(res.data)
            setProperties(res.data.response)
            
        })
        .catch(err => console.log(err))
   
},[] 

)


React.useEffect(
      ()=>{
       
        axios.get(`https://unilife-server.herokuapp.com/cities/${city_id}`)
        .then(res =>{
            // console.log(res.data.data[0])
            setCityInfo(res.data.data[0])
            // console.log(cityInfo)

            
            
        })
        .catch(err => console.log(err))
      
      },[]
    )



  return (
    <div className='city-details-container'>
          <BannerPic 
          title={detailsTitle}
          slogan={detailsSlogan} />
          <SearchProperty />
          <h2>{cityInfo?.property_count} properties in {cityInfo?.name}</h2>
          <div className='property-card-container'>
          {
            properties.map(item =><CityPropertyCard
              property={item} />)
          }
          </div>
          <CityInfo 
          city={cityInfo} />
    
    </div>
  )
}

export default CityDetails
