import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = () => {


    return (

        <section>

            <div className="homeCat">
                <div className="container mt-2 cursor">
                    <h3 className='mb-3 hd'>Features Categories</h3>
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={5}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="mySwiper"
                    >


<SwiperSlide>
                            <div className="item text-center cursor">
                                <img src='https://res.cloudinary.com/dvyozjjma/image/upload/v1720102490/1720102490127_fashion.png' alt="headphone's" />
                                <h6 className='mt-2'>Fashion</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1720102752/1720102751399_elec.png" alt="headphone's" />
                                <h6 className='mt-2'>Electronics</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1720277764/1720277763188_groceries.png" alt="headphone's" />
                                <h6 className='mt-2'>Glossary</h6>
                            </div>

                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/10605/10605926.png" alt="headphone's" />
                                <h6 className='mt-2'>Wellness</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/1062/1062283.png" alt="headphone's" />
                                <h6 className='mt-2'>Phones and Tabs</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/3976/3976194.png" alt="headphone's" />
                                <h6 className='mt-2'>Home  & Kitchen</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/1940/1940922.png" alt="headphone's" />
                                <h6 className='mt-2'>Beauty & health</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/17128/17128447.png" alt="headphone's" />
                                <h6 className='mt-2'>Top Offers</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6 className='mt-2'>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default HomeCat;