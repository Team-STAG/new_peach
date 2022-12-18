import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Error404 from "./pages/Error404";
import "./assets/styles/index.css";
import Products from './pages/Products';

import "antd/dist/antd.min.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [

      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "home",
        element: <LandingPage />
    
      },

      {
        path: "products",
        element: <Products />

      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
