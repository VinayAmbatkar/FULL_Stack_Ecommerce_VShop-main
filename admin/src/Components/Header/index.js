import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
    return (
        <>

            <header className=' d-flex align-items-center'>
                <div className="container-fluid w-100">
                    <div className="row  d-flex align-items-center w-100">
                        {/* Logo Wraper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className='d-flex align-items-center logo'>
                                <img src={logo} />

                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className='rounded-circle'><MdOutlineMenuOpen /></Button>
                            <SearchBox />

                        </div>
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">

                            <Button className='rounded-circle mr-3'><MdOutlineLightMode /></Button>
                            {/* <Button className='rounded-circle mr-3'><GiNightSleep  /></Button> */}
                            <Button className='rounded-circle mr-3'>< FaCartArrowDown /></Button>
                            <Button className='rounded-circle mr-3'>< AiTwotoneMail /></Button>
                            <Button className='rounded-circle mr-3'>< IoMdNotifications /></Button>


                            <div className="myAccWrapper">
                                <div className="myAcc  d-flex align-items-center">
                                    <div className="userImg">
                                        <span className='rounded-circle'>
                                            <img src="https://www.w3schools.com/howto/img_avatar.png" />

                                        </span>
                                    </div>

                                    <div className="userInfo">
                                        <h4>Vinay Ambatkar</h4>
                                        <p className='mb-0'>@vinay05</p>
                                    </div>
                                </div>
                            </div>




                        </div>



                    </div>

                </div>

            </header>



        </>
    )
}

export default Header;
