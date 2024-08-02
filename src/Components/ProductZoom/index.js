import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();




    // goto function for slide Moving

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }






  return (
    <div className='productZoom'>
         <div className="productZoom position-relative">
                            <div className="badge badge-primary"> 23%</div>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                navigation={false}
                                slidesPerGroup={1}
                                modules={[Navigation]}
                                className="zoomSliderBig"
                                ref={zoomSliderBig}
                            >
                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={1}
                                            src={'https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'} />




                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={1}
                                            src={'https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'} />




                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={1}
                                            src={'https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'} />




                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={1}
                                            src={'https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'} />




                                    </div>
                                </SwiperSlide>


                            </Swiper>

                        </div>

                        {/* -----------------small image slider---------------- */}
                        <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                navigation={false}
                                slidesPerGroup={1}
                                modules={[Navigation]}
                                className="zoomSlider"
                                ref={zoomSlider}
                            >

                            <SwiperSlide>
                                
                                <div className={`item ${slideIndex===0 && 'item_active'}`}> 

                                    <img src='https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'className='w-100' onClick={() => goto(0)} />
                                </div>
                                  </SwiperSlide>

                                  
                                  <SwiperSlide>
                                
                                <div className={`item ${slideIndex===1 && 'item_active'}`}> 

                                    <img src='https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'className='w-100' onClick={() => goto(1)} />
                                </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                
                                <div className={`item ${slideIndex===2 && 'item_active'}`}> 

                                    <img src='https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'className='w-100' onClick={() => goto(2)} />
                                </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                
                                <div className={`item ${slideIndex===3 && 'item_active'}`}> 

                                    <img src='https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'className='w-100' onClick={() => goto(3)} />
                                </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                
                                <div className={`item ${slideIndex===4 && 'item_active'}`}> 

                                    <img src='https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'className='w-100' onClick={() => goto(4)} />
                                </div>
                                  </SwiperSlide>


                            </Swiper>
      
    </div>
  )
}

export default ProductZoom
