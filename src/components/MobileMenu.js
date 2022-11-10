import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"

const MobileMenu = ({isOpened, onClosing}) => {

    var [menuStyle, setMenuStyle] = useState({
        right: "-350px"
    })

    useEffect(() => {
        

        setTimeout(()=>{
            setMenuStyle(prevStyle => {
                return({
                    ...prevStyle,
                    right: isOpened? "0px" : "-350px"
                })
            })
            
        }, 300)

    
    }, [isOpened])

  return (
    <>

        <div className='mobile-menu-content' style={menuStyle}>

            <Button onClick={onClosing} className='close-mobile-link-btn'><AiOutlineClose /></Button>

            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Product</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>

        </div>

    </>
  )
}

export default MobileMenu
