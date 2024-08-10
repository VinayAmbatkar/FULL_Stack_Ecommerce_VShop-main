import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import QuantityBox from '../../Components/QuantityBox';
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaCartPlus } from "react-icons/fa6";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className='hd mb-2'> Your Cart</h2>
          <p>There are <span className='text-red'>3</span> Products in your Cart</p>
          <div className="row">
            <div className="col-md-9 Pr-5">



              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="35%" >Product</th>
                      <th width="15%" >Unit Price</th>
                      <th width="20%" >Quantity</th>
                      <th width="10%" >Subtotal</th>
                      <th width="10%" >Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" alt='P1' className="w-100" />

                            </div>
                            <div className="info px-3">
                              <h6>All Natural Italian-Style Chicken Meatballs</h6>
                              <Rating name="read-only" value={4.5} readOnly precision={0.5} size='small' />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">80 Rs</td>
                      <td width="20%"><QuantityBox /></td>
                      <td width="10%">80</td>
                      <td width="10%"><span className='remove'>< IoMdClose /></span></td>



                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" alt='P1' className="w-100" />

                            </div>
                            <div className="info px-3">
                              <h6>All Natural Italian-Style Chicken Meatballs</h6>
                              <Rating name="read-only" value={4.5} readOnly precision={0.5} size='small' />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">80 Rs</td>
                      <td width="20%"><QuantityBox /></td>
                      <td width="10%">80</td>
                      <td width="10%"><span className='remove'>< IoMdClose /></span></td>



                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" alt='P1' className="w-100" />

                            </div>
                            <div className="info px-3">
                              <h6>All Natural Italian-Style Chicken Meatballs</h6>
                              <Rating name="read-only" value={4.5} readOnly precision={0.5} size='small' />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">80 Rs</td>
                      <td width="20%"><QuantityBox /></td>
                      <td width="10%">80</td>
                      <td width="10%"><span className='remove'>< IoMdClose /></span></td>



                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" alt='P1' className="w-100" />

                            </div>
                            <div className="info px-3">
                              <h6>All Natural Italian-Style Chicken Meatballs</h6>
                              <Rating name="read-only" value={4.5} readOnly precision={0.5} size='small' />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">80 Rs</td>
                      <td width="20%"><QuantityBox /></td>
                      <td width="10%">80</td>
                      <td width="10%"><span className='remove'>< IoMdClose /></span></td>



                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" alt='P1' className="w-100" />

                            </div>
                            <div className="info px-3">
                              <h6>All Natural Italian-Style Chicken Meatballs</h6>
                              <Rating name="read-only" value={4.5} readOnly precision={0.5} size='small' />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">80 Rs</td>
                      <td width="20%"><QuantityBox /></td>
                      <td width="10%">80</td>
                      <td width="10%"><span className='remove'>< IoMdClose /></span></td>



                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" alt='P1' className="w-100" />

                            </div>
                            <div className="info px-3">
                              <h6>All Natural Italian-Style Chicken Meatballs</h6>
                              <Rating name="read-only" value={4.5} readOnly precision={0.5} size='small' />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">80 Rs</td>
                      <td width="20%"><QuantityBox /></td>
                      <td width="10%">80</td>
                      <td width="10%"><span className='remove'>< IoMdClose /></span></td>



                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            <div className="col-md-3">
              <div className="card border p-3 cartDetails">
                <h4>CART TOTALS</h4>
                <div className="d-flex align-item-center mb-3">
                  <span>SubTotal</span>
                  <span className='ml-auto text-red mb-3 font-weight-bold'> 80 Rs</span>
                </div>
                <div className="d-flex align-item-center mb-3">
                  <span>Shipping</span>
                  <span className='ml-auto'> <b>FREE</b></span>
                </div>
                <div className="d-flex align-item-center mb-3">
                  <span>Estimate for</span>
                  <span className='ml-auto'><b>INDIA</b></span>
                </div>
                <div className="d-flex align-item-center">
                  <span>Total</span>
                  <span className='ml-auto text-red font-weight-bold'> 80 Rs</span>
                </div>
                <br />
                <Button className='btn-blue btn-lg btn-big btn-round'>Add to Cart &nbsp;<FaCartPlus /></Button>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart;
