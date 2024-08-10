import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoCloseOutline } from "react-icons/io5";
import Rating from '@mui/material/Rating';
// import { Moving } from '@mui/icons-material';
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import ProductZoom from '../ProductZoom';
import { FaCartPlus } from "react-icons/fa6";



const ProductModal = (props) => {

    


    return (


        <div>
            <Dialog open={true} className='productModal' onClose={() => props.closeProductModal(false)}>
                <Button className='closeb' onClick={() => props.closeProductModal(false)} ><IoCloseOutline /></Button>
                <h4 className='mb-1 font-wight-bold'>All Natural Italian-Style Chicken Meatballs</h4>
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

                       <ProductZoom />


                    </div>

                    <div className="col-md-7">
                        <div className="d-flex info align-item-center mb-3">
                            <div className="oldPrice lg mr-2">250 rs</div>
                            <div className="netPrice text-danger lg">150 rs</div>


                        </div>

                        <span className='badge bg-success'>In Stock </span>
                        <p className='mt-3'> Experience the rich flavors of India with our succulent chicken meatballs. Infused with authentic spices like cumin, coriander, and garam masala, these meatballs offer a delightful taste in every
                            bite. Perfect as appetizers or in curries.</p>

                        <div className="d-flex align-items-center">

                            <QuantityBox />

                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'><FaCartPlus />&nbsp;Add to Cart</Button>



                        </div>


                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className='btn-round btn-small' variant='outlined'><IoIosHeartEmpty />&nbsp;Add to Wishlist</Button>
                            <Button className='btn-round btn-small ml-3' variant='outlined'><MdCompareArrows />&nbsp;Compare </Button>

                        </div>




                    </div>
                </div>


            </Dialog>
        </div>
    )
}


export default ProductModal;