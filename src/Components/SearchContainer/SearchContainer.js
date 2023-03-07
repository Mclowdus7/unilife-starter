import React from 'react'
import './SearchContainer.css'
import axios from 'axios'

function SearchContainer() {

  const [choice, setChoice] = React.useState([])

    React.useEffect(
        ()=>{
            axios.get('https://unilife-server.herokuapp.com/cities?limit=20')
            .then(res =>{
                console.log(res.data.response)
                setChoice(res.data.response)
                
            })
            .catch(err => console.log(err))
        },[] //
    )

  return (
    <div className='search-container'>
        <select>
            <option value="" disabled selected>Search by city</option>
            {
                choice.map(item => (
                  // console.log(choice?.name)
                <option>{item?.name}</option>
              ))
            }
                
        </select>
       
        <select>
            <option value="" disabled selected>Any bedroom</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            
        </select>
        <button>Find Homes</button>
      
    </div>
  )
}

export default SearchContainer
