import React from 'react'
import ProductZoom from '../../../Components/ProductZoom';
import Rating from '@mui/material/Rating';

const ProductDetails = () => {
  return (
    <>
      <section className='productDetails section'>
        <div className="container">
<div className="row">
  <div className="col-md-4">
<ProductZoom />
  </div>

  <div className="col-md-7">
  <h3 className='hd'>All Natural Italian-Style Chicken Meatballs</h3>

<ul className='list list-inline d-flex align-items-center'>
  <li className='list-inline-item'>
    <div className="d-flex align-items-center">
    <span className='text-light mr-2'>Brand:</span>
    <span>Welch's</span>
    </div>
   
  </li>

  <li className='list-inline-item '>
    <div className="d-flex align-items-center">
  <Rating name="read-only" value={4.5} precision={0.5} readOnly size='small' />

  <span className='text-light cursor ml-2'> 1 Review </span>
  
  </div>
  </li>
</ul>

  </div>
</div>
          
        </div>
      </section>
    </>
  )
}

export default ProductDetails ;
