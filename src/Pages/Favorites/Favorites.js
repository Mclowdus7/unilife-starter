import React, {useContext} from 'react'
import './Favorites.css'
import {FavoriteContext} from '../../contexts/FavoriteContext'
import CityPropertyCard from '../../Components/CityPropertyCard/CityPropertyCard'




function Favorites() {

  const {favorites, setFavorites} = useContext(FavoriteContext)

  return (
    <div className='favorites-container'>
      <h1>Favorites</h1>
        <h3>Save your favorite properties and compare!</h3>
          <div className='favorites-card-container'>
          {
                favorites.map(item =><CityPropertyCard
                  property={item.details} />)
              }
          </div>
    </div>
  )
}

export default Favorites
