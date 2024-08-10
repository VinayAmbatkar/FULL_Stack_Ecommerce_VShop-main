import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Listing from './Pages/Listing';
import ProductDetails from "./Pages/Listing/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/Signin";
import React, { createContext, useState } from "react";


const MyContext = createContext();

function App() {
  //  Hiding Header and Footer
  const [IsHeaderFooterShow, setIsHeaderFooterShow] = useState(true);


  const values = {
    IsHeaderFooterShow,
    setIsHeaderFooterShow
  }

  return (
    
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {
            IsHeaderFooterShow === true && <Header />
          }

          <Routes>
            <Route path="/" element={<Home />} />

            {/* what is the difference between BrowserRouter and Router in react-router-dom? */}
            {/* what exact and id used for */}
            <Route path="/cat/:id" exact={true} element={<Listing />} />
            <Route exact={true} path="product/:id" element={<ProductDetails />} />
            <Route exact={true} path="/cart" element={<Cart />} />
            <Route exact={true} path="/sigIn" element={<SignIn />} />


          </Routes>
          {
            IsHeaderFooterShow === true && <Footer />
          }
         
        </MyContext.Provider>
      </BrowserRouter>


    


  );
}

export default App;
export { MyContext };
