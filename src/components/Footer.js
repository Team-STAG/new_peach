import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    
        <footer>

            <div className="footer-container flex-container align-start space-between wrap">


                <div className="content-one">

                    <div className='logo'>
                        <Link to="/">Peach</Link>
                    </div>

                </div>

                <div className='content-two'>
                    <h3 className="title">Links</h3>

                    <ul className='list-none footer-links'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>

                <div className='content-two'>
                    <h3 className="title">About us</h3>

                    <ul className='list-none footer-links'>
                        <li><a href="#why">Why Hydro</a></li>
                        <li><a href="#why">Benefits</a></li>
                        <li><a href="#best">Best seller</a></li>
                        <li><a href="#skincare">Skin Care Tips</a></li>
                    </ul>
                </div>

                <div className="content-one">

                    <h3 className='title'>Contact Us</h3>

                    <p className='description'>15, Doherty Mall road, Lekkit, phase 1, Lagos</p>
                    <p className='description'>(+234) - 9036634645</p>

                    <ul className="social-container list-none flex-container">
                        <li><a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagramSquare /></a></li>

                        <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a></li>

                        <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitterSquare /></a></li>

                        <li><a href="https://pinterest.com/" target="_blank" rel="noreferrer"><FaPinterestSquare /></a></li>
                    </ul>

                </div>


            </div>

            <div className="footer-container flex-content align-start space-between">

                <div className='footer-content'>
                    <p className='bold'>2022 Peach perfumes. All right reserved</p>
                    <p className='bold'>Designed and developed by <a href="https://www.instagram.com/stagteamofficial" target="_blank" rel="noreferrer">Special Technology A Giants</a></p>
                </div>

            </div>

        </footer>

    </>
  )
}
