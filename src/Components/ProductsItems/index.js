import React from 'react'
import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaRegHeart } from "react-icons/fa6";
import ProductModal from '../ProductModal';


const ProductsItem = (props) => {

const [isOpenProductModal, setIsOpenProductModal] = React.useState(false);
  const viewProductDetails = (id) => {
    setIsOpenProductModal(true);
  }


const closeProductModal=() =>{

  setIsOpenProductModal(false);
}



  return (
   <>
    

<div className={`productItem ${props.itemView}`}>
  <div className="imageWrapper">
    <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" className='w-100' />


    <span className='badge badge-primary'>28%</span>
    <div className="actions">

      <Button onClick={()=>viewProductDetails(1)}><SlSizeFullscreen /></Button>
      <Button><FaRegHeart style={{fontSize:"20px"}} /></Button>
    </div>

  </div>
  <div className="info">

    <h4>Fresh Brown Coconut</h4>
    <span className='text-success d-block'>In Stock</span>
    <Rating className='mt-2 mb-2 ' name="read-only" value={5} readOnly size='small' precision={0.5} />

    <div className="d-flex">
      <span className='oldPrice'>40 Rs</span>
      <span className='netPrice text-danger ml-3'>30Rs</span>
    </div>
  </div>

</div>

{

isOpenProductModal===true && <ProductModal  closeProductModal= {closeProductModal} />                                                   
}


   
   </>
    
    
  )
}

export default ProductsItem;
