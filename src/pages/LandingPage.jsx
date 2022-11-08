import React from 'react'

import "../assets/styles/landingpage.css"


import BannerImageOne from "../assets/images/banner_image_origin.png"
import BannerImageTwo from "../assets/images/banner_image.png"
import BenefitImageOne from "../assets/images/benefit_image_one.png"
import BenefitImageTwo from "../assets/images/benefit_image_two.png"
import BenefitImageThree from "../assets/images/benefit_image_three.png"
import DiscoverImageOne from "../assets/images/discover_image_one.png"
import DiscoverImageTwo from "../assets/images/discover_image_two.png"
import DiscoverImageThree from "../assets/images/discover_image_three.png"
import DiscoverImageFour from "../assets/images/discover_image_four.png"
import { Link } from 'react-router-dom'
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

        <div className='why'>
            <h2 className="title">Why Peach</h2>

            <p className='description'>Hydro is a gentle skin care brand that has been recommended ans trusted by doctors and dermatologists for over 70 years and it's used by millions with sensitive skin around the world to improve the resilience of their skin</p>
        </div>

        <div className="benefits">
            <h2 className="title">Benefits of Peach</h2>

            <div className="benefit-contents flex-container space-between align-start">

                <div className="benefit-image half-width">

                    <img src={BenefitImageOne} alt="benefit" />

                </div>

                <div className="benefit-text half-width">

                    <h3 className='benefit-text-title'>Combats dryness</h3>

                    <p className="description">Dry skin arises as a result of weakened skin barrier which makes it hard for the skin to retain moisture</p>

                    <p className="description">Peach product contain the nourishing ingredients which strengthens the barrier to retain moisture without causing irritation</p>

                    <div className='benefit-action'>

                        <Link className="button" to="/">Products for dry skin</Link>

                    </div>


                </div>

            </div>

            <div className="benefit-contents flex-container space-between align-start rearranged">

                <div className="benefit-image half-width">

                    <img src={BenefitImageTwo} alt="benefit" />

                </div>

                <div className="benefit-text half-width">

                    <h3 className='benefit-text-title'>Soothes Irritation</h3>

                    <p className="description">Sensitive skin types are highly prone to irritation from weather or skincare products containing harsh ingredients. The result is either redness, itching, burning or stinging</p>

                    <p className="description">Peach product contain gentle soothing ingredients recommended by dermatologists for the skin</p>

                    <div className='benefit-action'>

                        <Link className="button" to="/">Products for irritated skin</Link>

                    </div>


                </div>

            </div>

            <div className="benefit-contents flex-container space-between align-start">

                <div className="benefit-image half-width">

                    <img src={BenefitImageThree} alt="benefit" />

                </div>

                <div className="benefit-text half-width">

                    <h3 className='benefit-text-title'>Fights roughness</h3>

                    <p className="description">Roughness of the skin may occur due to disruption in the human's body natural skin shedding process. This may appear in the form of rough, uneven or flaky skin</p>

                    <p className="description">Peach products contain gentle exfoliation mechanism that strengthens the natural skin barrier and allowing the outer layer to be renewed, resulting in smooth, supple skin.</p>

                    <div className='benefit-action'>

                        <Link className="button" to="/">Products for rough skin</Link>

                    </div>


                </div>

            </div>

        </div>

        <div className="discover">
            <h2 className='title'>Discover more from peach</h2>

            <p className='subtitle'>Get the best care for your sensitive skin across all our product ranges</p>

            <div className="discover-content flex-container space-between align-start">

                <div className='discover-card'>
                    <img src={DiscoverImageOne} alt="" />
                    <p className='name'>Face</p>
                </div>

                <div className='discover-card'>
                    <img src={DiscoverImageTwo} alt="" />
                    <p className='name'>Body</p>
                </div>

                <div className='discover-card'>
                    <img src={DiscoverImageThree} alt="" />
                    <p className='name'>Hands</p>
                </div>

                <div className='discover-card'>
                    <img src={DiscoverImageFour} alt="" />
                    <p className='name'>Legs</p>
                </div>

            </div>
        </div>
    
    </>
  )
}
