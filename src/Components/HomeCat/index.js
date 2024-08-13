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
                                <img src='https://cdn-icons-png.flaticon.com/512/12516/12516451.png' alt="Fashion" />
                                <h6 className='mt-2'>Fashion</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/3659/3659898.png" alt="Electronics" />
                                <h6 className='mt-2'>Electronics</h6>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/2203/2203183.png" alt="grocery" />
                                <h6 className='mt-2'>Grocery</h6>
                            </div>

                        </SwiperSlide><SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/5832/5832416.png" alt="Books" />
                                <h6 className='mt-2'>Books</h6>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/10605/10605926.png" alt="Wellnes" />
                                <h6 className='mt-2'>Wellness</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/1062/1062283.png" alt="Phones and Tabs" />
                                <h6 className='mt-2'>Phones and Tabs</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/3976/3976194.png" alt="Home  & Kitchen" />
                                <h6 className='mt-2'>Home  & Kitchen</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/1940/1940922.png" alt="Beauty & health" />
                                <h6 className='mt-2'>Beauty & health</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/17128/17128447.png" alt="Top Offers" />
                                <h6 className='mt-2'>Top Offers</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="Head Phones" />
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