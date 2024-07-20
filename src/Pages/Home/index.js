import React from 'react'
import HomeBanner from '../../Components/HomeBanner';
import slideBanner2 from '../../assets/images/Banners/bottomBanner.gif';
import { Button } from '@mui/material';
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import ProductsItem from '../../Components/ProductsItems';
import { FaRegHeart } from "react-icons/fa6";
import Banner2 from '../../assets/images/Banners/banner2.jpg';
import HomeCat from '../../Components/HomeCat';
import banner3 from '../../assets/images/Banners/Banner3.png'
import Coupan from '../../assets/images/Coupon.png'
import { BsBell } from "react-icons/bs";



const Home = () => {

    var ProductSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <>
            <HomeBanner />

            {/* category section blocks  */}

            <HomeCat />

            {/* category section blocks ENds  */}






            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                            <div className="sticky">
                                <div className="banner">
                                    <img src={slideBanner2} className='cursor w-100' />
                                </div>
                                <div className="banner mt-4">

                                    <img src={Banner2} className='cursor w-100' />

                                </div>
                            </div>


                        </div>

                        <div className="col-md-9 productRow">


                            <div className="d-flex align-items-center">
                                <div className="info">
                                    <h3 className='mb-0 hd'>BEST SELLERS</h3>
                                    <p className='text-light text-sml mb-0'>Do not Miss the current offers until the End of Month</p>

                                </div>

                                <Button className='viewAllBtn ml-auto'>View All<FaArrowRightLong /></Button>


                            </div>


                            <div className="product_row w-100 mt-4 display:flex">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >


                                    <SwiperSlide> <ProductsItem /></SwiperSlide>

                                    <SwiperSlide><ProductsItem /> </SwiperSlide>
                                    <SwiperSlide><ProductsItem /> </SwiperSlide>
                                    <SwiperSlide><ProductsItem /> </SwiperSlide>


                                   

                                </Swiper>



                            </div>



                            {/* Best-seller section */}

                            <div className="d-flex align-items-center mt-5">
                                <div className="info">
                                    <h3 className='mb-0 hd'>NEW PRODUCTS</h3>
                                    <p className='text-light text-sml mb-0'>New Fresh Products in your Local Areas </p>

                                </div>

                                <Button className='viewAllBtn ml-auto'>View All<FaArrowRightLong /></Button>


                            </div>


                            <div className="productRow2 w-100 mt-4 d-flex">


                                <ProductsItem />
                                <ProductsItem />
                                <ProductsItem />



                            </div>

                            <div className="productRow2 w-100 mt-4 d-flex">


                                <ProductsItem />
                                <ProductsItem />
                                <ProductsItem />



                            </div>


                            <div className="d-flex mb-4 mb-5 bannerSection">
                                <div className="banner mt-4">

                                    <img src={banner3} alt="" />
                                </div>

                                <div className="banner mt-4">

                                    <img src={banner3} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </section>


            <section className='newsLatterSection mt-3 mb-3 d-flex align-items-center'>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <p className='text-white mb-0'>20% Discount for Your First Order </p>
                            <h3>Join our E-commerce Platform for Daily Updated In your Area </h3>
                            <p className='text-light'>Join our email subscription now to get updates<br /> on promotions and coupons</p>

                        </div>
                        <div className="col-md-6">
                            <img src={Coupan} alt="" />
                        </div>
                    </div>
                    <form>
                    <BsBell />
                        <input type="text" placeholder='Enter Your Email Address ' />
                        <Button>Subscribe</Button>
                    </form>

                </div>
            </section>

            


        </>
    )
}

export default Home;