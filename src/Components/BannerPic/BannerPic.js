import React from 'react'
import './BannerPic.css'
import Banner from '../../assets/Banner.png'


function BannerPic({title, slogan}) {

    const bannerStyle = {
        height: "60vh",
        width: "100%",
        backgroundImage: `url("${Banner}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", //need in order to use relative on other stuff
    }

  return (
    <div className='banner-container'
        style={bannerStyle}>
        <div className='banner-overlay'></div>
        <div className='banner-pic-text'>
          <h1>{title}</h1>
          <p>{slogan}</p>
        </div>
        
    </div>
  )
}

export default BannerPic
