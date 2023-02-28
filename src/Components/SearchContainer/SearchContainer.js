import React from 'react'
import './SearchContainer.css'

function SearchContainer() {
  return (
    <div className='search-container'>
        <select>
            <option value="" disabled selected>Search by city</option>
        </select>
        <select>
            <option value="" disabled selected>Any bedroom</option>
        </select>
        <button>Find Homes</button>
      
    </div>
  )
}

export default SearchContainer
