import React from "react"
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import "animate.css/animate.min.css";
import { FaWhatsapp } from "react-icons/fa";

  

function App() {


  return (
    <>

      <div className="body-container">

        <Header />

          <div className="page-container">

            <Outlet />
            

          </div>

        <Footer />

        <a href="https://wa.me/" target="_blank" rel="noreferrer" className="contact-floating-button">

            <span className="icon"><FaWhatsapp /></span>

            <span className="text">Message us on whatsapp</span>

        </a>
        
      </div>


    </>
  );
}

export default App;
