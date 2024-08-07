import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductsItem from '../../../../Components/ProductsItems';
import { Button } from '@mui/material';
import { FaArrowRightLong } from "react-icons/fa6";

const RelatedProducts = (props) => {
  return (

<>
<div className="d-flex align-items-center mt-3">
                                <div className="info">
                                     <h3 className='mt-0 hd'>{props.title}</h3> {/* title is Related and Recommended */}

                                </div>

                           


                            </div>


                            <div className="product_row w-100 mt-2">
                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={0}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >


                                    <SwiperSlide> <ProductsItem /></SwiperSlide>

                                    <SwiperSlide><ProductsItem /> </SwiperSlide>
                                    <SwiperSlide><ProductsItem /> </SwiperSlide>
                                    <SwiperSlide><ProductsItem /> </SwiperSlide>
                                    <SwiperSlide><ProductsItem /> </SwiperSlide>
                                    <SwiperSlide><ProductsItem /> </SwiperSlide>
                                    <SwiperSlide><ProductsItem /> </SwiperSlide>


                                   

                                </Swiper>



                            </div>

</>
    
 
  )
}

export default RelatedProducts ;
