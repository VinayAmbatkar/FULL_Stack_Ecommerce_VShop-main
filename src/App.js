import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { createContext, useMemo, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/Listing/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/Signin";
import {
  AccountPage,
  CheckoutPage,
  MyListPage,
  OrdersPage,
  SearchPage,
} from "./Pages/Storefront";
import { ShopProvider } from "./ShopContext";

const MyContext = createContext(null);

function AppContent() {
  const [isLogin, setIsLogin] = useState(Boolean(localStorage.getItem("user")));
  const values = useMemo(
    () => ({
      IsHeaderFooterShow: true,
      setIsHeaderFooterShow: () => {},
      isLogin,
      setIsLogin,
    }),
    [isLogin]
  );

  return (
    <MyContext.Provider value={values}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Listing />} />
          <Route path="/products/category/:id" element={<Listing />} />
          <Route path="/products/subCat/:id" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-list" element={<MyListPage />} />
          <Route path="/my-account" element={<AccountPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignIn initialMode="signup" />} />
          <Route path="/signin" element={<Navigate to="/signIn" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </MyContext.Provider>
  );
}

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
export { MyContext };
