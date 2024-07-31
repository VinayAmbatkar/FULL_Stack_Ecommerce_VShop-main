import React from 'react';
import Sidebar from '../../Components/Sidebar';
import Button from '@mui/material/Button';
import { CiMenuBurger } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
import { PiDotsSixBold } from "react-icons/pi";
import { HiViewGrid } from "react-icons/hi";


const Listing = () => {





    return (
        <>

            <section className="product_Listing_Page">

                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />

                        <div className="content_right">

                           <img src="https://github.com/rinkuv37/fullstack-ecommerce/blob/main/images/slideBanner2.jpg?raw=true" alt="" className='w-100' style={{borderRadius:'8px'}}/> 

                           <div className="showBy mt-3 mb-3 d-flex align-items-center">
                            <div className=" d-flex align-items-center btnWrapper">
                                <Button><CiMenuBurger/></Button>
                                <Button><HiViewGrid  /></Button>
                                <Button><CgMenuGridR/></Button>
                                <Button><PiDotsSixBold/></Button>
                             
                            </div>

                                
                           </div>
                        </div>
                        
                    </div>



                </div>
            </section>










        </>
    )
}

export default Listing;