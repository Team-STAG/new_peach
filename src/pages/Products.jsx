import { Col, Row } from 'antd'
import React from 'react'
import { products } from '../assets/data/data'
import { FaStar, FaStarHalf } from 'react-icons/fa'

import "../assets/styles/products.css"

const Products = () => {
  return (
    
    <>
    
        <Row justify={"center"} className='banner'>

        </Row>

        <Row justify="space-between" className='products-container'>
            {products.map((prod, index) => {

                var {image, name,} = prod;
                return(
                    <Col key={index} span={7} lg={{span: 7}} md={{span: 7}} sm={{span: 11}} xs={{span: 24}} className="best-seller-card">

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

                    </Col>
                )
            })}
        </Row>

    </>
  )
}

export default Products
