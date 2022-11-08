import React from 'react'

import "../assets/styles/landingpage.css"


import BannerImageOne from "../assets/images/banner_image_origin.png"
import BannerImageTwo from "../assets/images/banner_image.png"
export default function LandingPage() {
  return (
    <>
    
        <div className='banner-container flex-container space-between align-center'>


            <div className='banner-content flex-container column align-start half-width'>

                <h1 className="banner-content-header first-header">Peach</h1>

                <h1 className="banner-content-header second-header">Skincare Product</h1>

                <p className="banner-content-subtitle">...nature's beauty solution</p>

                <div className='banner-content-action'>
                    <a className='button' href="#products">View products</a>
                </div>

            </div>
            

            <div className="banner-image flex-container column align-start half-width">

                <img src={BannerImageOne} alt="perfume-images" />
                <img src={BannerImageTwo} className="second-image" alt="perfume-images" />
                
            </div>
            

        </div>

        <div className="quality flex-container space-between algn-start wrap">

            <div className='quality-content'>

                <h2 className='title'><span className='colored'>100%</span><span className='default'>natural</span></h2>

                <p className='content-description'>
                    Peach is made up of purely natural and organic products that is skin-safe
                </p>

            </div>

             <div className='quality-content'>

                <h2 className='title'><span className='colored'>100%</span><span className='default'>non-comedogenic</span></h2>

                <p className='content-description'>
                    It's biodermal nature keeps your skin smooth and unclogged for a silky feel
                </p>

            </div>

             <div className='quality-content'>

                <h2 className='title'><span className='colored'>100%</span><span className='default'>effective</span></h2>

                <p className='content-description'>
                    It works perfectly for oily, dry and combination skin.
                </p>

            </div>

        </div>
    
    </>
  )
}
