import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import CountryDropdown from "./CountryDropdown";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import Searchbox from "./SearchBox";
import Navigation from "./Navigation";
import { Button } from "@mui/material";
import { MyContext } from "../../App";
import { useContext } from "react";

const Header = () => {
  // Get the context values using the useContext hook
  const { isLogin } = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              <marquee>Your Local E-Commerce Hub for Wardha and Sawangi</marquee>
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper col-sm-2 d-flex align-items-center">
                <Link to={'/'}><img src={Logo} alt='logo' /></Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                {/* Header Search Starts Here */}
                <Searchbox />
                {/* Header Search Ends Here */}
                <div className="part3 d-flex align-items-center ml-auto">
                  
                  {/* Conditional rendering based on login status */}
                  {isLogin !== true ? (
                    <Link to={'/sigIn'}><Button className="btn-blue btn-lg btn-big btn-round mr-3">
                      Sign In
                    </Button>
                
                    
                    </Link>
                    

                
                  ) : (
                    <Button className="circle mr-3">
                      <FaRegUser />
                    </Button>
                  )}
                  
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$ 1000</span>
                    <div className="position-relative ml-2">
                   <Link to={'/cart'}> <Button className="circle"><BsCart /></Button></Link>  
                      <span className="count d-flex align-items-center justify-content-center">0</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>
        <Navigation />
      </div>
    </>
  )
}

export default Header;
