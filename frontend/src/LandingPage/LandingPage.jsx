import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
        <div className="saleBanner d-flex justify-content-center align-items-center flex-column">
            <p className='m-0'>50% off for all new user!</p>
        </div>
        <div> <Navbar/> </div>
        <div className="productsList">
        

        </div>
        <div> <Footer/> </div>
    </div>
  )
}

export default LandingPage