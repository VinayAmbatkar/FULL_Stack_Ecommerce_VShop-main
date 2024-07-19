import React, { useState } from 'react'
import { Button } from "@mui/material";
import { CgMenuRight } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { FaBlog } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {

  // State to used to open and close sidebar
  const[isOpenSidebarVal, setisOpenSidebarVal] = useState(false);
  return (
    <nav>
    <div className="container">
      <div className="row">
        <div className="col-sm-3 navPart1">
          <div className="catWrapper">
          <Button className='allCatTab align-items-center'onClick={()=>setisOpenSidebarVal(!isOpenSidebarVal)}>
            <span className='icon1 mr-2'><CgMenuRight /></span>
           <span class="text">All Categories</span>
           <span className='icon2 ml-2'><FaChevronDown /></span>
            
          </Button>

          {/* Function to open and close sidebar */}
          <div className={`sidebarNav ${isOpenSidebarVal===true ?`open`:``}`}>
            <ul>

            <li className='list-inline-item'><Link to= '/'><Button>Men <FaAngleRight className='ml-auto' /></Button></Link>
            <div className="submenu">
              <Link to= '/'> <Button> Clotting</Button> </Link>
              <Link to= '/'> <Button> FootWear</Button> </Link>
              <Link to= '/'> <Button> Watches</Button> </Link>
              <Link to= '/'> <Button> Shoes</Button> </Link>
              <Link to= '/'> <Button>Sun Glasses</Button> </Link>
              <Link to= '/'> <Button>Inners</Button> </Link>
            </div>
            </li>
            <li className='list-inline-item'><Link to= '/'>  <Button>Woman<FaAngleRight className='ml-auto' /></Button></Link> <div className="submenu">
              <Link to= '/'> <Button> Clotting</Button> </Link>
              <Link to= '/'> <Button> FootWear</Button> </Link>
              <Link to= '/'> <Button> Watches</Button> </Link>
              <Link to= '/'> <Button> Shoes</Button> </Link>
              <Link to= '/'> <Button>Sun Glasses</Button> </Link>
              <Link to= '/'> <Button>Inners</Button> </Link>
            </div></li>
            <li className='list-inline-item'><Link to= '/'> <Button>Beauty</Button></Link> <div className="submenu">
              <Link to= '/'> <Button> Clotting</Button> </Link>
              <Link to= '/'> <Button> FootWear</Button> </Link>
              <Link to= '/'> <Button> Watches</Button> </Link>
              <Link to= '/'> <Button> Shoes</Button> </Link>
              <Link to= '/'> <Button>Sun Glasses</Button> </Link>
              <Link to= '/'> <Button>Inners</Button> </Link>
            </div></li>
            <li className='list-inline-item'><Link to= '/'> <Button> Watches</Button></Link> <div className="submenu">
              <Link to= '/'> <Button> Clotting</Button> </Link>
              <Link to= '/'> <Button> FootWear</Button> </Link>
              <Link to= '/'> <Button> Watches</Button> </Link>
              <Link to= '/'> <Button> Shoes</Button> </Link>
              <Link to= '/'> <Button>Sun Glasses</Button> </Link>
              <Link to= '/'> <Button>Inners</Button> </Link>
            </div></li>
            <li className='list-inline-item'><Link to= '/'>  <Button>Kid</Button></Link> <div className="submenu">
              <Link to= '/'> <Button> Clotting</Button> </Link>
              <Link to= '/'> <Button> FootWear</Button> </Link>
              <Link to= '/'> <Button> Watches</Button> </Link>
              <Link to= '/'> <Button> Shoes</Button> </Link>
              <Link to= '/'> <Button>Sun Glasses</Button> </Link>
              <Link to= '/'> <Button>Inners</Button> </Link>
            </div></li>
            <li className='list-inline-item'><Link to= '/'><Button>Gift</Button></Link> <div className="submenu">
              <Link to= '/'> <Button> Clotting</Button> </Link>
              <Link to= '/'> <Button> FootWear</Button> </Link>
              <Link to= '/'> <Button> Watches</Button> </Link>
              <Link to= '/'> <Button> Shoes</Button> </Link>
              <Link to= '/'> <Button>Sun Glasses</Button> </Link>
              <Link to= '/'> <Button>Inners</Button> </Link>
            </div></li>
            <li className='list-inline-item'><Link to= '/'><Button>Bekary</Button> </Link> <div className="submenu">
              <Link to= '/'> <Button> Clotting</Button> </Link>
              <Link to= '/'> <Button> FootWear</Button> </Link>
              <Link to= '/'> <Button> Watches</Button> </Link>
              <Link to= '/'> <Button> Shoes</Button> </Link>
              <Link to= '/'> <Button>Sun Glasses</Button> </Link>
              <Link to= '/'> <Button>Inners</Button> </Link>
            </div></li>
            
            </ul>
          </div>
          </div>
        </div>

        <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className='list list-inline ml-auto'>
                <li className='list-inline-item'><Link to= '/'> <IoHomeOutline /> &nbsp; Home</Link>
                <div className="submenu shadow">
                  <Link to= '/'> <CiShop /> &nbsp; New Arrivals</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Best Sellers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Special Offers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Trending</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Featured Products</Link>
                  </div>
                </li>
                <li className='list-inline-item'><Link to= '/'> <CiShop /> &nbsp; Shops</Link>
                <div className="submenu shadow">
                  <Link to= '/'> <CiShop /> &nbsp; New Arrivals</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Best Sellers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Special Offers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Trending</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Featured Products</Link>
                  </div></li>
                <li className='list-inline-item'><Link to= '/'> &nbsp;Electronics</Link>
                <div className="submenu shadow">
                  <Link to= '/'> <CiShop /> &nbsp; New Arrivals</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Best Sellers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Special Offers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Trending</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Featured Products</Link>
                  </div></li>
                <li className='list-inline-item'><Link to= '/'>&nbsp;Grocery</Link><div className="submenu shadow">
                  <Link to= '/'> <CiShop /> &nbsp; New Arrivals</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Best Sellers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Special Offers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Trending</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Featured Products</Link>
                  </div></li>
                <li className='list-inline-item'><Link to= '/'>&nbsp;Bakery</Link><div className="submenu shadow">
                  <Link to= '/'> <CiShop /> &nbsp; New Arrivals</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Best Sellers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Special Offers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Trending</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Featured Products</Link>
                  </div></li>
                <li className='list-inline-item'><Link to= '/'><FaBlog/>&nbsp; Blog</Link></li>
                <li className='list-inline-item'><Link to= '/'><RiContactsLine />&nbsp; Contact Us</Link></li>
                <li className='list-inline-item'><Link to= '/'><RiContactsLine />&nbsp; Contact Us</Link></li>
                
                
            </ul>
        </div>
      </div>

    </div>

  </nav>
  )
}

export default Navigation ;
