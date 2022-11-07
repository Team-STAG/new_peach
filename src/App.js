import React from "react"
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";


  const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {


  return (
    <>

      <Header />
    
      <RouterProvider router={router} />

      <Footer />

    </>
  );
}

export default App;
