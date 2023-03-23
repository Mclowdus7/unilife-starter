import React from 'react'
import InfoBox from '../../Components/Info-box/InfoBox'
import './Homepage.css'
import infoPic1 from '../../assets/infoPic1.png'
import infoPic2 from '../../assets/infoPic2.png'
import infoPic3 from '../../assets/infoPic3.png'
import Extra from '../../Components/Extra/Extra'
import man from '../../assets/man.png'
import blueHeart from '../../assets/blueheart.png'
import househHand from '../../assets/househand.png'
import BannerPic from '../../Components/BannerPic/BannerPic'
import Properties from '../../Components/Properties/Properties'
import SearchContainer from '../../Components/SearchContainer/SearchContainer'
import { Link } from 'react-router-dom'


function Homepage() {
  const homepageTitle="Find student homes with bills included"
  const homepageSlogan="A simple and faster way to search for student accommodation"

  const header1= "Search"
  const header2= "Compare"
  const header3= "Bills Included"
  const tagline1="Find your dream home in the perfect area near your university."
  const tagline2="Compare student accommodation to find the right home for you."
  const tagline3="Bills are included in all rent prices. No hidden fees."

  const header4="Best Selection"
  const header5="Your Favorite"
  const tagline4="Best selection of student accommodations. Never been easier to find a home that’s right for you."
  const tagline5="Shortlist your favourite properties and send enquiries in one click."

  return (
    <div className='homepage-container'>
      <BannerPic 
           title={homepageTitle}
           slogan={homepageSlogan} />
      <SearchContainer />
      <Properties />
      <div className='buttons-container'>
            <Link to="/cities">
            <button className='all-cities-button'>See all cities</button>
            </Link>
      </div>
      <h2>Compare all inclusive student homes.</h2>
      <div className='info-box-container'>
          <InfoBox 
                   img={infoPic1}
                   header={header1} 
                   tagline={tagline1}/>
          <InfoBox 
                   img={infoPic2}
                   header={header2} 
                   tagline={tagline2}/>
          <InfoBox 
                   img={infoPic3}
                   header={header3} 
                   tagline={tagline3}/>
      </div>
      <div className='extra-info-container'>
            <div className='extra-icons'>
                <img alt='logo' src={househHand} />
                <img alt='favorite-icon' src={blueHeart} />
            </div>
            <div className='extra-text'>
                <Extra header={header4}
                        tagline={tagline4}/>
                <Extra header={header5}
                        tagline={tagline5}/>
                <button>Search & Compare</button>
            </div> 
            <div className='extra-img'>
              <img alt='man' src={man} />
            </div>
      </div>
    </div>
  )
}

export default Homepage
