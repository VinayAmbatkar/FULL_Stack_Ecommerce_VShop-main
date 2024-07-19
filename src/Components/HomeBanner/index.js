import { Home } from '@mui/icons-material'
import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : true,
        autoplay: true
      };

    return (
        <div className='homeBannerSection'>
<Slider {...settings}>

    <div className="item1">

        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1719805315_ENGLISH_DESKTOP.jpg?im=Resize=(2368,400)" alt="" className='w-100 h-10' />
    </div>
    <div className="item2">

        <img src="https://github.com/rinkuv37/fullstack-ecommerce/blob/main/images/slideBanner2.jpg?raw=true" alt="" className='w-100' />
    </div>
    
</Slider>
        </div>
    )
}

export default HomeBanner;
