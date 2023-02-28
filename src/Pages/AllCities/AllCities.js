import React from 'react'
import './AllCities.css'
import BannerPic from '../../Components/BannerPic/BannerPic'
import axios from 'axios'

function AllCities() {

    const citiesTitle="Student Accomodation"
    const citiesSlogan="UniLife has student accommodation available across the UK. Whatever you're after, we can help you find the right student accommodation for you."

    const [cities, setCities] = React.useState([])

    React.useEffect(
        ()=>{
            axios.get('https://unilife-server.herokuapp.com/cities?limit=20')
            .then(res =>{
                console.log(res.data.response)
                setCities(res.data.response)
            })
            .catch(err => console.log(err))
        },[] //
    )

  return (
    <div className='cities-container'>
      <BannerPic 
            title={citiesTitle}
            slogan={citiesSlogan} />
            <h2>Search by City</h2>
      <div className='cities-button-container'>
        {
            cities.map(item =><button>{item?.name}</button>)
            // cities.map(item => console.log(cities?.name))
        }
      </div>
    </div>
  )
}

export default AllCities
