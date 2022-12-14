import React from "react"
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import "animate.css/animate.min.css";

  

function App() {


  return (
    <>

      <div className="body-container">

        <Header />

          <div className="page-container">

            <Outlet />

          </div>

        <Footer />
        
      </div>


    </>
  );
}

export default App;
