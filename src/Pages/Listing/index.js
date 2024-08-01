import React from 'react';
import Sidebar from '../../Components/Sidebar';
import Button from '@mui/material/Button';
import { CiMenuBurger } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
import { PiDotsSixBold } from "react-icons/pi";
import { HiViewGrid } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductsItem from '../../Components/ProductsItems';


const Listing = () => {

    // open closed menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [productView, setProductView] = React.useState('four');
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    return (
        <>

            <section className="product_Listing_Page">

                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />

                        <div className="content_right">

                            <img src="https://github.com/rinkuv37/fullstack-ecommerce/blob/main/images/slideBanner2.jpg?raw=true" alt="" className='w-100' style={{ borderRadius: '8px' }} />

                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className=" d-flex align-items-center btnWrapper">
                                    <Button onClick={() => setProductView('four')}><PiDotsSixBold /></Button>
                                    <Button onClick={() => setProductView('three')}><CgMenuGridR /></Button>
                                    <Button onClick={() => setProductView('two')}><HiViewGrid /></Button>
                                    <Button onClick={() => setProductView('one')}><CiMenuBurger /></Button>

                                    


                                </div>

                                <div className="ml-auto showByFilter">
                                    <Button onClick={handleClick}> Show 9 <FaAngleDown /></Button>
                                    <Menu
                                        className='w-10 showPerPageDropdown'
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropdown}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>10</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                        <MenuItem onClick={handleClose}>40</MenuItem>
                                        <MenuItem onClick={handleClose}>50</MenuItem>


                                    </Menu>
                                </div>


                            </div>

                            <div className="productListing">
                                <ProductsItem itemView={productView} />   {/* Passing the Props to the component */}
                                <ProductsItem itemView={productView} />
                                <ProductsItem itemView={productView} />
                                <ProductsItem itemView={productView} />
                                <ProductsItem itemView={productView} />
                                <ProductsItem itemView={productView} />
                                <ProductsItem itemView={productView} />
                                <ProductsItem itemView={productView} />
                                <ProductsItem itemView={productView} />
                                <ProductsItem itemView={productView} />

                                <ProductsItem itemView={productView} />

                                <ProductsItem itemView={productView} />


                            </div>
                        </div>

                    </div>



                </div>
            </section>










        </>
    )
}

export default Listing;