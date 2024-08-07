import React, { useState } from 'react'
import ProductZoom from '../../../Components/ProductZoom';
import Rating from '@mui/material/Rating';
import QuantityBox from '../../../Components/QuantityBox';
import { Button } from '@mui/material';
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from './RelatedProducts';

const ProductDetails = () => {

  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);
  const isActive = (index) => {
    setActiveSize(index);
  }



  return (
    <>
      <section className='productDetails section'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>

            <div className="col-md-7 pl-5 pr-5">
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
              <div className="d-flex info">
                <span className="oldPrice">100 Rs</span>
                <span className="netPrice text-success ml-2">80 Rs</span>

              </div>

              <span className='badge badge-success'>In Stock</span>

              <p className='mt-3'>Experience the rich flavors of India with our succulent
                chicken meatballs. Infused with authentic spices like cumin,
                coriander, and garam masala, these meatballs offer a delightful
                taste in every bite.
                Perfect as appetizers or in curries.</p>

              <div className="productSize d-flex align-items-center">
                <span className='text-light mr-2'>Size /Wight</span>
                <ul className='list list-inline mb-0 pl-4'>
                  <li className='list-inline-item'><a className={`tag ${activeSize === 0 ? 'active ' : ''}`} onClick={() => isActive(0)}>50 g</a></li>
                  <li className='list-inline-item'><a className={`tag ${activeSize === 1 ? 'active ' : ''}`} onClick={() => isActive(1)}>100 g</a></li>
                  <li className='list-inline-item'><a className={`tag ${activeSize === 2 ? 'active ' : ''}`} onClick={() => isActive(2)}>200 g</a></li>
                  <li className='list-inline-item'><a className={`tag ${activeSize === 3 ? 'active ' : ''}`} onClick={() => isActive(3)}>300 g</a></li>
                  <li className='list-inline-item'><a className={`tag ${activeSize === 4 ? 'active ' : ''}`} onClick={() => isActive(4)}>500 g</a></li>
                </ul>
              </div>


              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className='btn-blue btn-lg btn-big btn-round '><FaCartShopping /> &nbsp; Add to cart</Button>
                <Tooltip title="Add to wishlist" placement='bottom'><Button className='btn-blue btn-lg btn-big btn-circle ml-4'><FaRegHeart /></Button></Tooltip>
                <Tooltip title="Add to Compare" placement='bottom'><Button className='btn-blue btn-lg btn-big btn-circle ml-2'><MdOutlineCompareArrows /></Button></Tooltip>

              </div>

            </div>
          </div>


          {/* //comment section and Review section */}
          <br />
          <div className='card mt-5 p-5 detailsPageTabs'>
            <div className='customTabs'>
              <ul className='list list-inline'>
                <li className='list-inline-item'>
                  <Button className={`${activeTabs === 0 && 'active'}`}
                    onClick={() => {
                      setActiveTabs(0)
                    }}
                  >Description</Button>
                </li>
                <li className='list-inline-item'>
                  <Button className={`${activeTabs === 1 && 'active'}`}
                    onClick={() => {
                      setActiveTabs(1)

                    }}
                  >Additional info</Button>
                </li>
                <li className='list-inline-item'>
                  <Button className={`${activeTabs === 2 && 'active'}`}
                    onClick={() => {
                      setActiveTabs(2)

                    }}
                  >Reviews</Button>
                </li>

              </ul>


              <br />

              {
                activeTabs === 0 &&
                <div className='tabContent'>
                  <h3>All Natural Italian-Style Chicken Meatballs</h3>
                  <p>Experience the rich flavors of India with our succulent chicken meatballs. Infused with authentic spices like cumin, coriander, and garam masala, these meatballs offer a delightful taste in every bite. Perfect as appetizers or in curries.</p>
                </div>

              }


              {
                activeTabs === 1 &&

                <div className='tabContent'>
                  <div className='table-responsive'>
                    <table className='table table-bordered'>
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5″L x 18.5″W x 16.5″H</p>
                          </td>
                        </tr>
                        <tr className="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5″L x 24″W x 18.5″H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr className="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24″</p>
                          </td>
                        </tr>
                        <tr className="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45″</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12″ air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr className="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5″</p>
                          </td>
                        </tr>
                        <tr className="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25″</p>
                          </td>
                        </tr>
                        <tr className="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr className="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              }



              {
                activeTabs === 2 &&

                <div className='tabContent'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h3>Customer questions & answers</h3>
                      <br />



                      <div className='reviewBox mb-4 border-bottom'>

                        <div className='info'>
                          <div className='d-flex align-items-center w-100'>
                            <h5>Vinay Ambatkar</h5>

                            <div className='ml-auto'>
                              <Rating name="half-rating-read"
                                value={3} readOnly size="small" />
                            </div>
                          </div>

                          <h6 className='text-light'>01/09/2024</h6>

                          <p>its a review</p>
                        </div>

                      </div>



                      <br className='res-hide' />


                      <form className='reviewForm'>

                        <h4>Add a review</h4>
                        <div className='form-group'>
                          <textarea className='form-control shadow' placeholder='Write a Review'
                            name='review'></textarea>
                        </div>

                        <div className='row'>

                          <div className='col-md-6'>
                            <div className='form-group'>
                              <Rating name="rating" value={5} precision={0.5} />
                            </div>
                          </div>

                        </div>


                        <br />
                        <div className='form-group'>
                          <Button className='btn-blue btn-lg btn-big btn-round'>Submit Review</Button>

                        </div>

                      </form>

                    </div>


                  </div>
                </div>
              }




            </div>
          </div>

          <br />
          {/* Related Products Section */}
          <RelatedProducts title='Related Products' />
          <RelatedProducts title='Recent View Products' />
        </div>
      </section>
    </>
  )
}

export default ProductDetails;
