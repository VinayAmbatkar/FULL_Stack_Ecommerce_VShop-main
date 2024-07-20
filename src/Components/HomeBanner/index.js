
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';



const HomeBanner = () => {




    return (

        <div className="container mt-3">
            <div className="homeBannerSection">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={true}
                    loop={true}
                    speed={500}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >


                    <SwiperSlide>
                        <div className="item">

                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1719805315_ENGLISH_DESKTOP.jpg?im=Resize=(2368,400)" alt="" className='w-100 h-10' />
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>  <div className="item">

                        <img src="https://github.com/rinkuv37/fullstack-ecommerce/blob/main/images/slideBanner2.jpg?raw=true" alt="" className='w-100' />
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>  <div className="item">

                        <img src="https://github.com/rinkuv37/fullstack-ecommerce/blob/main/images/slideBanner2.jpg?raw=true" alt="" className='w-100' />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>  <div className="item">

                        <img src="https://github.com/rinkuv37/fullstack-ecommerce/blob/main/images/slideBanner2.jpg?raw=true" alt="" className='w-100' />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>  <div className="item">

                        <img src="https://github.com/rinkuv37/fullstack-ecommerce/blob/main/images/slideBanner2.jpg?raw=true" alt="" className='w-100' />
                    </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}

export default HomeBanner;
