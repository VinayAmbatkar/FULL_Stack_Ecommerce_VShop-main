import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineReceiptLong } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useShop } from "../../ShopContext";
import Logo from "../../assets/images/logo-build.jpg";
import CountryDropdown from "./CountryDropdown";
import Searchbox from "./SearchBox";
import Navigation from "./Navigation";

function MobileNavigation() {
  return (
    <nav className="mobileBottomNav" aria-label="Mobile navigation">
      <NavLink to="/" end>
        <IoHomeOutline />
        <span>Home</span>
      </NavLink>
      <NavLink to="/search">
        <IoSearchOutline />
        <span>Search</span>
      </NavLink>
      <NavLink to="/my-list">
        <FaRegHeart />
        <span>Wishlist</span>
      </NavLink>
      <NavLink to="/orders">
        <MdOutlineReceiptLong />
        <span>Orders</span>
      </NavLink>
      <NavLink to="/my-account">
        <FaRegUser />
        <span>Account</span>
      </NavLink>
    </nav>
  );
}

export default function Header() {
  const { cartCount, user } = useShop();

  return (
    <>
      <header className="storeHeader">
        <div className="storeAnnouncement">
          <div className="container">
            <span>⭐ If you like the project, give it a star on GitHub ⭐</span>
          </div>
        </div>
        <div className="container storeHeaderMain">
          <Link to="/" className="storeLogo" aria-label="VShop home">
            <img src={Logo} alt="VShop" />
          </Link>
          <CountryDropdown />
          <Searchbox />
          <div className="storeHeaderActions">
            <a
              className="githubLink"
              href="https://github.com/"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            {user ? (
              <Link className="headerAccountLink" to="/my-account">
                <FaRegUser />
                <span>My Account</span>
              </Link>
            ) : (
              <Link className="headerSignIn" to="/signIn">
                <Button className="btn-blue btn-round">Sign In</Button>
              </Link>
            )}
            <Link className="headerCart" to="/cart" aria-label={`Cart, ${cartCount} items`}>
              <BsCart3 />
              <span className="headerCartCount">{cartCount}</span>
            </Link>
          </div>
        </div>
        <Navigation />
      </header>
      <MobileNavigation />
    </>
  );
}
