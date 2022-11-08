import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    
        <header className="flex-container space-between align-center">
            
            <div className='logo flex-container align-items'>
                <Link to="/">Peach</Link>
            </div>

            <div className='links desktop-links flex-container'>

                <ul className='flex-container align-center'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Product</a></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>

            </div>

        </header>

    </>
  )
}
