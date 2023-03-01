import React from 'react'
import './Properties.css'
import axios from 'axios';
import PropertiesCard from '../PropertiesCard/PropertiesCard';
import { Link } from 'react';


function Properties() {
    const [properties, setProperties] = React.useState([])

    React.useEffect(
        ()=>{
            axios.get('https://unilife-server.herokuapp.com/cities?limit=9')
            .then(res =>{
                console.log(res.data.response)
                setProperties(res.data.response)
            })
            .catch(err => console.log(err))
        },[]
    )

  return (
    <div className='properties-container'>
        <h3>Student accommodations in our top cities</h3>
        <div className='properties-wrapper'>
        {
            properties.map(item => 
               
                    <PropertiesCard 
                     key={item.id}    
                     property={item} 
                     />)
     
  
            }
        </div>
    </div>
  )
}

export default Properties
