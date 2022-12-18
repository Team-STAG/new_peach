// import { Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { FaHome,  FaPhoneAlt } from 'react-icons/fa'
import { BsHandbagFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../assets/data/data'
import MobileMenu from './MobileMenu'
import Modal from './Modal'

export default function Header() {


    const location = useLocation();
    const [modalOpened, setModalOpened] = useState(false)
    const headerRef = useRef();

    const closeModal = ()=> {
        setModalOpened(prev => !prev)
    }

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{

            if(window.scrollY > 100){

                headerRef.current.style.background = " #f8efec";
                headerRef.current.style.height = "60px";
            }else{
                headerRef.current.style.background = "transparent";
                headerRef.current.style.height = "120px";

            }


        })
    }, [])

  return (
    <>
    
        <header ref={headerRef} className="flex-container space-between align-center">
            
            <div className='logo flex-container align-items'>
                <Link to="/">
                    <img src={images.logo} alt="peach logo" />
                </Link>
            </div>

            <div className='links desktop-links flex-container'>

                <ul className='flex-container align-center'>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><a href="#products">Product</a></li> */}
                    <li><Link to="/products">Product</Link></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>

            </div>

            <div className="mobile-link-btn align-center">

                  <ul className='flex-container align-center'>
                      <li><Link to="/"><FaHome /></Link></li>
                      {/* <li><a href="#products"><BsHandbagFill /></a></li> */}

                      <li><Link to="/products"><BsHandbagFill /></Link></li>
                      <li><a href="#contact"><FaPhoneAlt /></a></li>
                  </ul>

                {/* <Button onClick={()=>{
                    closeModal()
                }}><FaBars /></Button> */}

            </div>

        </header>

        <Modal isOpened={modalOpened}>

            <MobileMenu isOpened={modalOpened} onClosing={closeModal}/>

        </Modal>

    </>
  )
}
