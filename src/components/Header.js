import { Button } from 'antd'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import Modal from './Modal'

export default function Header() {

    const [modalOpened, setModalOpened] = useState(false)

    const closeModal = ()=> {
        setModalOpened(prev => !prev)
    }

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

            <div className="mobile-link-btn">

                <Button onClick={()=>{
                    closeModal()
                }}><FaBars /></Button>

            </div>

        </header>

        <Modal isOpened={modalOpened}>

            <MobileMenu isOpened={modalOpened} onClosing={closeModal}/>

        </Modal>

    </>
  )
}
