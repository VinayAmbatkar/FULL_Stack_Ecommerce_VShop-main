import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./responsive.css";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import React, { createContext, useEffect, useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUP";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import ProductUpload from "./Pages/ProductUpload";
import CategoryAdd from "./Pages/CategoryAdd";
import Category from "./Pages/Category";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoadingBar from 'react-top-loading-bar';

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [progress, setProgress] = useState(0);
  const [alertBox, setAlertBox] = useState({
    open: false,
    color: 'success',
    msg: ''
  });

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openNav = () => {
    setIsOpenNav(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertBox({
      open: false,
      msg: '',
    });
  };

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader,
    theme,
    setTheme,
    windowWidth,
    openNav,
    isOpenNav,
    setIsOpenNav,
    alertBox,
    setAlertBox,
    setProgress,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <LoadingBar
         className='topLoadingBar'
          color='#1866ee'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          
          
        />

        <Snackbar
          open={alertBox.open}
          autoHideDuration={6000}
          onClose={() => setAlertBox({ ...alertBox, open: false })}
        >
          <Alert
            onClose={() => setAlertBox({ ...alertBox, open: false })}
            severity={alertBox.color}
          >
            {alertBox.msg}
          </Alert>
        </Snackbar>

        {isHideSidebarAndHeader !== true && <Header />}

        <div className="main d-flex">
          {isHideSidebarAndHeader !== true && (
            <>
              <div className={`sidebarOverlay d-none ${isOpenNav === true && 'show'}`} onClick={() => setIsOpenNav(false)}></div>
              <div
                className={`sidebarWrapper ${isToggleSidebar === true ? "toggle" : ""
                  } ${isOpenNav === true ? "open" : ""}`}
              >
                <Sidebar />
              </div>
            </>
          )}

          <div
            className={`content ${isHideSidebarAndHeader === true && "full"} ${isToggleSidebar === true ? "toggle" : ""
              }`}
          >
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/signUp" exact element={<SignUp />} />
              <Route path="/products" exact element={<Products />} />
              <Route path="/product/details" exact element={<ProductDetails />} />
              <Route path="/product/upload" exact element={<ProductUpload />} />
              <Route path="/category/add" exact element={<CategoryAdd />} />
              <Route path="/category" exact element={<Category />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
