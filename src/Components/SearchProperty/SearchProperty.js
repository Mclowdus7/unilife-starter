import React from 'react'
import './SearchProperty.css'

function SearchProperty() {
  return (
    <div className='search-properties-container'>
        <div className='select-container'>
            <label for='bedroom'>Min Bedroom</label>
            <select name='bedroom'>
                <option value="" disabled selected>Any Bedroom</option>
            </select>
        </div>
        <div className='select-container'>
            <label for='bathroom'>Min Bathroom</label>
            <select name='bathroom'>
                <option value="" disabled selected>Any Bathroom</option>
            </select>
        </div>
        <div className='select-container'>
            <label for='maxPrice'>Max Price</label>
            <select name='maxPrice'>
                <option value="" disabled selected>Any Price</option>
            </select>
        </div>
        <div className='select-container'>
            <label for='type'>Property Type</label>
            <select name='type'>
                <option value="" disabled selected>Any Type</option>
            </select>
        </div>
    </div>
  )
}

export default SearchProperty
