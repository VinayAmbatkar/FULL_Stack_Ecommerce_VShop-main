import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import slideBanner2 from '../../assets/images/Banners/bottomBanner.gif';

const Sidebar = () => {

    const [value, setValue] = useState([0, 1000]);
    const [value2, setValue2] = useState(0);

    return (
        <>
            <div className="sidebar">
{/* Product Catagories */}
                <div className="filterBox">
                    <h6>PRODUCT CATEGORIES</h6>
                    <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Fashion" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Grocery" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Bakery" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Electronics" />
                            </li>


                        </ul>
                    </div>


                </div>
{/* filter by price */}
                <div className="filterBox">
                    <h6>FILTER BY PRICES</h6>

                    {/* Price Slider */}
                    <RangeSlider value={value} onInput={setValue} min={0} max={10000} step={5} />

                    <div className="d-flex pt-2 pb-2 priceRange">
                        <span>From: <strong className='text-success'>Rs:{value[0]}</strong></span>
                        <span className='ml-auto'>TO : <strong className='text-success'>Rs:{value[1]}</strong></span>
                    </div>
                </div>
{/* Filters for In Stock and On Sale */}
                <div className="filterBox">
                    <h6>FILTER</h6>
                    <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="In Stock" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="On Sale" />
                            </li>
                            


                        </ul>
                    </div>


                </div>
{/* Brands */}
                <div className="filterBox">
                    <h6>BRANDS</h6>
                    <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Adidas" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Boat" />
                            </li>
                            
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Hp" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Remend" />
                            </li>

                        </ul>
                    </div>

                    <Link to="#"><img src={ slideBanner2 } alt='' className='w-100'></img></Link>



                </div>
            </div>





        </>
    )
}

export default Sidebar;
