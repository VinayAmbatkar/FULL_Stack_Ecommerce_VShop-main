import react, { useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoCloseOutline } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { Moving } from '@mui/icons-material';


const ProductModal = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();


    var settings2 = {

        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrow: false,
    };


    var settings = {

        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrow: true,
    }


    // goto function for slide Moving

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }


    return (


        <div>
            <Dialog open={true} className='productModal' onClose={() => props.closeProductModal(false)}>
                <Button className='closeb' onClick={() => props.closeProductModal(false)} ><IoCloseOutline /></Button>
                <h4 className='mb-1 font-wight-bold'>Fresh Brown Coconut</h4>
                <div className="d-flex align-item-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brand:</span>
                        <span className='ml-2'> <b>Welch's</b></span>
                    </div>

                    <Rating className='mt-2 mb-2 ' name="read-only" value={5} readOnly size='small' precision={0.5} />



                </div>
                <hr />
                <div className=" row  mt-2 productDetailsModal">
                    <div className="col-md-5">
                        <div className="productZoom">
                            <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>

                                <div className="item">
                                    <InnerImageZoom
                                        zoomType="hover"
                                        zoomScale={1}
                                        src={'https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'} />




                                </div>
                                <div className="item">
                                    <InnerImageZoom
                                        zoomType="hover"
                                        zoomScale={1}
                                        src={'https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image2-47-768x691.jpg'} />




                                </div>
                                <div className="item">
                                    <InnerImageZoom
                                        zoomType="hover"
                                        zoomScale={1}
                                        src={'https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image3-35-768x691.jpg'} />




                                </div>
                                

                            </Slider>

                        </div>

                        {/* -----------------small image slider---------------- */}
                        <Slider {...settings} className='zoomSlider' ref={zoomSlider}>

                            <div className="item">

                                <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-150x150.jpg" alt="smallI" className='w-100' onClick={()=>goto(0)} />

                            </div>

                            <div className="item">

                                <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image2-47-768x691.jpg" alt="smallI" className='w-100'  onClick={()=>goto(1)} />

                            </div>

                            <div className="item">

                                <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image3-35-768x691.jpg" alt="smallI" className='w-100' onClick={()=>goto(2)} />

                            </div>

                            

                        </Slider>


                    </div>

                    <div className="col-md-5">


                    </div>
                </div>


            </Dialog>
        </div>
    )
}


export default ProductModal;