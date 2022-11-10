import React, { useEffect, useState } from 'react'

const Modal = ({children, isOpened, style, ...props}) => {

    const [modalStyle, setModalStyle] = useState({
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, .5)",
        display: "none",
        zIndex: 999,
        transition: "0.5s ease all",
        opacity: 0b
    })

    useEffect(()=>{

      if(!isOpened){
        setTimeout(()=>{

          setModalStyle(prevStyle => {
            return({
              ...prevStyle,
              display: "none",
              opacity: 0
            })
          })

        }, 500)
      }else{

        setModalStyle(prevStyle => {
            return({
              ...prevStyle,
              display: "block",
              opacity: 1
            })
          })

      }

    }, [isOpened])
  return (
    <>

        <div className='modal-container' style={style? {...style, ...modalStyle } : { ...modalStyle}} {...props}>

            {children}

        </div>
    
    </>
  )
}

export default Modal
