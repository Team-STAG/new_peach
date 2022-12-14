import React, { useRef } from "react";
import Slider from "react-slick";
import { motion/* , useAnimation  */} from "framer-motion";
// import { useInView } from "react-intersection-observer";

import "../assets/styles/landingpage.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaAngleLeft, FaAngleRight, FaStar, FaStarHalf} from "react-icons/fa"


import BannerImageTwo from "../assets/images/banner_image.png"
import BenefitImageOne from "../assets/images/benefit_image_one.png"
import BenefitImageTwo from "../assets/images/benefit_image_two.png"
import BenefitImageThree from "../assets/images/benefit_image_three.png"
import DiscoverImageOne from "../assets/images/discover_image_one.png"
import DiscoverImageTwo from "../assets/images/discover_image_two.png"
import DiscoverImageThree from "../assets/images/discover_image_three.png"
import DiscoverImageFour from "../assets/images/discover_image_four.png"
import TipsImageOne from "../assets/images/skincare_tips_one.png"
import TipsImageTwo from "../assets/images/skincare_tips_two.png"
import TipsImageThree from "../assets/images/skincare_tip_three.png"
import TipsImageFour from "../assets/images/skincare_tip_four.png"
import BestSellerImageOne from "../assets/images/best_selling_item_one.png"
import { Link } from 'react-router-dom'
import { Button } from "antd";
import { products } from "../assets/data/data";
export default function LandingPage() {

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    var slideRef = useRef("")

    const nextSlide = () => {
        slideRef.slickNext()
    }

    const prevSlide = () => {
        slideRef.slickPrev()
    }

  return (
    <>
    
        <div className='banner-container flex-container space-between align-center wrap'>


            <div className='banner-content flex-container column align-start half-width'>

                <motion.h1 variants={{
                    visible: {},
                    hidden: {}
                }} className="banner-content-header first-header">Peach</motion.h1>

                <h1 className="banner-content-header second-header">Skincare Product</h1>

                <p className="banner-content-subtitle">...nature's beauty solution</p>

                <div className='banner-content-action'>
                    <a className='button' href="#products">View products</a>
                </div>

            </div>
            

            <div className="banner-image flex-container column align-start half-width">

                <img src={BannerImageTwo} alt="perfume-images" />
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

            <div className="benefit-contents flex-container space-between align-start wrap">

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

            <div className="benefit-contents flex-container space-between align-start rearranged wrap">

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

            <div className="benefit-contents flex-container space-between align-start wrap">

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

            <div className="discover-content flex-container space-between align-start wrap">

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

        <div className="best-seller">

            <div className="best-seller-header">

                <h2 className="title">Best Seller</h2>

                <div className="slide-next-prev-action-button">
                    <Button className="slide-btn prevButton" onClick={prevSlide}><FaAngleLeft /></Button>
                    <Button className="slide-btn nextButton" onClick={nextSlide}><FaAngleRight /></Button>
                </div>

            </div>
            <Slider ref={c => (slideRef = c)} className="image-slider" {...settings}>

                {products.slice(0, 6).map((prod, index) => {
                    var {image, name} = prod
                    return(

                        <div className="best-seller-card">

                            <div className="best-seller-card-details">

                                <div className="best-seller-card-image">

                                    <img src={image} alt="" />

                                </div>

                                <div className="best-seller-details">

                                    <h3>{name}</h3>

                                    <p className="price">&#8358;7,000</p>

                                    <div className="rating flex-container align-center">
                                        <div className="rating-stars flex-container align-center">
                                            <span className="icon"><FaStar /></span>
                                            <span className="icon"><FaStar /></span>
                                            <span className="icon"><FaStar /></span>
                                            <span className="icon"><FaStar /></span>
                                            <span className="icon"><FaStarHalf /></span>
                                        </div>
                                        <p>4.7(1243)</p>


                                    </div>

                                    <div className="best-seller-action">
                                        <a href="tel:+2349022920650" className="button">Call to order</a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    )
                })
                
                }

                  <div className="best-seller-card">

                      <div className="best-seller-card-details">

                          <div className="best-seller-card-image">

                              <img src={BestSellerImageOne} alt="" />

                          </div>

                          <div className="best-seller-details">

                              <h3>Hydro foaming cleanser</h3>

                              <p className="price">&#8358;7,000</p>

                              <div className="rating flex-container align-center">
                                  <div className="rating-stars flex-container align-center">
                                      <span className="icon"><FaStar /></span>
                                      <span className="icon"><FaStar /></span>
                                      <span className="icon"><FaStar /></span>
                                      <span className="icon"><FaStar /></span>
                                      <span className="icon"><FaStarHalf /></span>
                                  </div>
                                  <p>4.7(1243)</p>


                              </div>

                              <div className="best-seller-action">
                                  <Link to="" className="button">Order</Link>
                              </div>

                          </div>

                          <Link className="sell-overlay">

                            <p>See More +</p>

                          </Link>

                      </div>

                  </div>
{/* 
                <div className="best-seller-card">

                    <div className="best-seller-card-details">

                        <div className="best-seller-card-image">

                            <img src={BestSellerImageOne} alt="" />

                        </div>

                        <div className="best-seller-details">

                            <h3>Hydro foaming cleanser</h3>

                            <p className="price">&#8358;7,000</p>

                            <div className="rating flex-container align-center">
                                <div className="rating-stars flex-container align-center">
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStarHalf /></span>
                                </div>
                                <p>4.7(1243)</p>


                            </div>

                            <div className="best-seller-action">
                                <Link to="" className="button">Order</Link>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="best-seller-card">

                    <div className="best-seller-card-details">

                        <div className="best-seller-card-image">

                            <img src={BestSellerImageOne} alt="" />

                        </div>

                        <div className="best-seller-details">

                            <h3>Hydro foaming cleanser</h3>

                            <p className="price">&#8358;7,000</p>

                            <div className="rating flex-container align-center">
                                <div className="rating-stars flex-container align-center">
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStarHalf /></span>
                                </div>
                                <p>4.7(1243)</p>


                            </div>

                            <div className="best-seller-action">
                                <Link to="" className="button">Order</Link>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="best-seller-card">

                    <div className="best-seller-card-details">

                        <div className="best-seller-card-image">

                            <img src={BestSellerImageOne} alt="" />

                        </div>

                        <div className="best-seller-details">

                            <h3>Hydro foaming cleanser</h3>

                            <p className="price">&#8358;7,000</p>

                            <div className="rating flex-container align-center">
                                <div className="rating-stars flex-container align-center">
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStarHalf /></span>
                                </div>
                                <p>4.7(1243)</p>


                            </div>

                            <div className="best-seller-action">
                                <Link to="" className="button">Order</Link>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="best-seller-card">

                    <div className="best-seller-card-details">

                        <div className="best-seller-card-image">

                            <img src={BestSellerImageOne} alt="" />

                        </div>

                        <div className="best-seller-details">

                            <h3>Hydro foaming cleanser</h3>

                            <p className="price">&#8358;7,000</p>

                            <div className="rating flex-container align-center">
                                <div className="rating-stars flex-container align-center">
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStarHalf /></span>
                                </div>
                                <p>4.7(1243)</p>


                            </div>

                            <div className="best-seller-action">
                                <Link to="" className="button">Order</Link>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="best-seller-card">

                    <div className="best-seller-card-details">

                        <div className="best-seller-card-image">

                            <img src={BestSellerImageOne} alt="" />

                        </div>

                        <div className="best-seller-details">

                            <h3>Hydro foaming cleanser</h3>

                            <p className="price">&#8358;7,000</p>

                            <div className="rating flex-container align-center">
                                <div className="rating-stars flex-container align-center">
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStarHalf /></span>
                                </div>
                                <p>4.7(1243)</p>


                            </div>

                            <div className="best-seller-action">
                                <Link to="" className="button">Order</Link>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="best-seller-card">

                    <div className="best-seller-card-details">

                        <div className="best-seller-card-image">

                            <img src={BestSellerImageOne} alt="" />

                        </div>

                        <div className="best-seller-details">

                            <h3>Hydro foaming cleanser</h3>

                            <p className="price">&#8358;7,000</p>

                            <div className="rating flex-container align-center">
                                <div className="rating-stars flex-container align-center">
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStarHalf /></span>
                                </div>
                                <p>4.7(1243)</p>


                            </div>

                            <div className="best-seller-action">
                                <Link to="" className="button">Order</Link>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="best-seller-card">

                    <div className="best-seller-card-details">

                        <div className="best-seller-card-image">

                            <img src={BestSellerImageOne} alt="" />

                        </div>

                        <div className="best-seller-details">

                            <h3>Hydro foaming cleanser</h3>

                            <p className="price">&#8358;7,000</p>

                            <div className="rating flex-container align-center">
                                <div className="rating-stars flex-container align-center">
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStarHalf /></span>
                                </div>
                                <p>4.7(1243)</p>


                            </div>

                            <div className="best-seller-action">
                                <Link to="" className="button">Order</Link>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="best-seller-card">

                    <div className="best-seller-card-details">

                        <div className="best-seller-card-image">

                            <img src={BestSellerImageOne} alt="" />

                        </div>

                        <div className="best-seller-details">

                            <h3>Hydro foaming cleanser</h3>

                            <p className="price">&#8358;7,000</p>

                            <div className="rating flex-container align-center">
                                <div className="rating-stars flex-container align-center">
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStar /></span>
                                    <span className="icon"><FaStarHalf /></span>
                                </div>
                                <p>4.7(1243)</p>


                            </div>

                            <div className="best-seller-action">
                                <Link to="" className="button">Order</Link>
                            </div>

                        </div>

                    </div>

                </div> */}
            </Slider>

        </div>

        <div className="tips">

            <h2 className="title">Want to receive best tips on perfumes?</h2>

            <div className="tips-images-container flex-container align-start space-between wrap">

                <div className="tips-images">
                    <img src={TipsImageOne} alt="tips" />
                </div>

                <div className="tips-images">
                    <img src={TipsImageTwo} alt="tips" />
                </div>

                <div className="tips-images">
                    <img src={TipsImageThree} alt="tips" />
                </div>

                <div className="tips-images">
                    <img src={TipsImageFour} alt="tips" />
                </div>


            </div>

            <div className="tips-action flex-container align-center justify-center">

                  {/* <a className="button" href="https://instagram.com/_peachcollections?igshid=YmMyMTA2M2Y= " rel="norefopener">Message us on whatsapp</a> */}
                  <a className="button" href="https://wa.me/+2349022920650" rel="norefopener">Message us on whatsapp</a>

            </div>
            
        </div>
    
    </>
  )
}
