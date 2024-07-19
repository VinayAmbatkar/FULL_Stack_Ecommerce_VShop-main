import { Link } from '@mui/material';
import React from 'react'
import { GiFruitBowl } from "react-icons/gi";
import { IoPricetagOutline } from "react-icons/io5";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      

<div className="container">
   <div className="topInfo row">
    <div className="col">
        <span className='ml-2'><GiFruitBowl /></span>
      <span className='ml-2'>Everyday fresh products</span>                 
    </div>

    <div className="col">
        <span className='ml-2'><IoPricetagOutline /></span>
      <span className='ml-2'>
      Best price on the market</span> 
    </div>

    <div className="col">
        <span className='ml-2'><TbShoppingBagDiscount /></span>
      <span className='ml-2'>Daily Mega Discounts</span> 
    </div>

    <div className="col">
        <span className='ml-2'><TbTruckDelivery /></span>
      <span className='ml-2'>Free delivery for order over 1000 Rs</span> 
    </div>
   </div>



<div className="row mt-5 linksWrap">

    <div className="col">
        <h5>BREAKFAST & DAIRY</h5>
    <ul>
        <li> <Link to="#">Milk & Flavoured Milk</Link></li>
        <li> <Link to="#">Butter and Margarine</Link></li>
        <li> <Link to="#">Cheese</Link></li>
        <li> <Link to="#">Eggs Substitutes</Link></li>
        <li> <Link to="#">Honey</Link></li>
        <li> <Link to="#">Marmalades</Link></li>
        <li> <Link to="#">Sour Cream and Dips</Link></li>
        <li> <Link to="#">Yogurt</Link></li>
    </ul>
    </div>

    <div className="col"> <h5>Fruits and Vegetables</h5>
    <ul>
        <li> <Link to="#">Fresh Vegetables</Link></li>
        <li> <Link to="#">Herbs & Seasonings</Link></li>
        <li> <Link to="#">Fresh Fruits</Link></li>
        <li> <Link to="#">Cuts & Sprouts</Link></li>
        <li> <Link to="#">Exotic Fruits & Veggies</Link></li>
        <li> <Link to="#">Packaged Produce</Link></li>
        <li> <Link to="#">Party Trays</Link></li>
        <li> <Link to="#">Fresh Vegetables</Link></li>
    </ul>
    </div>

    <div className="col">
  <h5>Electronics & Accessories</h5>
  <ul>
    <li><Link to="#">Android Smart Watches</Link></li>
    <li><Link to="#">On Ear Headphones</Link></li>
    <li><Link to="#">Bluetooth Speakers</Link></li>
    <li><Link to="#">Bluetooth Earphones</Link></li>
    <li><Link to="#">Sport Headphones</Link></li>
    <li><Link to="#">CCTV Cameras</Link></li>
    <li><Link to="#">Spy Cameras</Link></li>
    <li><Link to="#">Keyboard</Link></li>
    <li><Link to="#">Laptop Bags</Link></li>
    <li><Link to="#">Mouse</Link></li>
    
  </ul>
</div>

<div className="col">
  <h5>Home & Kitchen</h5>
  <ul>
    <li><Link to="#">Toaster</Link></li>
    <li><Link to="#">Mixer Grinder</Link></li>
    <li><Link to="#">Cookers</Link></li>
    <li><Link to="#">Juicer</Link></li>
    <li><Link to="#">Food Processors</Link></li>
    <li><Link to="#">Roti Maker</Link></li>
    <li><Link to="#">Sandwich Maker</Link></li>
    <li><Link to="#">Kettles</Link></li>
    <li><Link to="#">Hand Blender</Link></li>
    <li><Link to="#">Table Cover</Link></li>
    
   
  </ul>
  
</div>
<div className="col">
  <h5>Fashion</h5>
  <ul>
    <li><Link to="#">Men's Clothing</Link></li>
    <li><Link to="#">Women's Clothing</Link></li>
    <li><Link to="#">Kid's Clothing</Link></li>
    <li><Link to="#">Footwear</Link></li>
    <li><Link to="#">Accessories</Link></li>
    <li><Link to="#">Jewelry</Link></li>
    <li><Link to="#">Watches</Link></li>
    <li><Link to="#">Bags & Wallets</Link></li>
    <li><Link to="#">Sunglasses</Link></li>
  </ul>
</div>
<div className="col">
  <h5>HELP</h5>
  <ul>
    <li><Link to="#">Payments</Link></li>
    <li><Link to="#">Shipping</Link></li>
    <li><Link to="#">Cancellation & Returns</Link></li>
    <li><Link to="#">FAQ</Link></li>
    <li><Link to="#">Report Infringement</Link></li>
  </ul>
</div>

<div className="col">
  <h5>CONSUMER POLICY</h5>
  <ul>
    <li><Link to="#">Cancellation & Returns</Link></li>
    <li><Link to="#">Terms Of Use</Link></li>
    <li><Link to="#">Security</Link></li>
    <li><Link to="#">Privacy</Link></li>
    <li><Link to="#">Sitemap</Link></li>
    <li><Link to="#">Grievance Redressal</Link></li>
    <li><Link to="#">EPR Compliance</Link></li>
  </ul>
</div>
</div>


   
   <div className="copyright mt-3 pt-3 pb-3 d-flex">
<p className='mb-0'> Developed By Vinay Ambatkar 💖 All rights reserved.</p>
<ul className='list list-inline ml-auto mb-0 md-10' >
    <li className='list-inline-item'>
        <Link to="#"> <FaFacebookF /></Link>
    </li>
    <li className='list-inline-item'>
        <Link to="#"> <BsTwitterX /></Link>
    </li>
    <li className='list-inline-item'>
        <Link to="#"> <FaLinkedin /></Link>
    </li>
    <li className='list-inline-item'>
        <Link to="#"> <BsInstagram /></Link>
    </li>
</ul>
   </div>
</div>


    </footer>
  )
}

export default footer
