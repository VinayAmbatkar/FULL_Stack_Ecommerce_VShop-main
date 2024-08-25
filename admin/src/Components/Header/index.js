import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen, MdOutlineLightMode } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import SearchBox from '../SearchBox';
import { GiNightSleep } from "react-icons/gi";
import { FaCartArrowDown, FaShieldAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElNotification, setAnchorElNotification] = React.useState(null);

    const openAccountMenu = Boolean(anchorEl);
    const openNotificationMenu = Boolean(anchorElNotification);

    const handleAccountMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAccountMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationMenuOpen = (event) => {
        setAnchorElNotification(event.currentTarget);
    };

    const handleNotificationMenuClose = () => {
        setAnchorElNotification(null);
    };

    return (
        <>
            <header className='d-flex align-items-center'>
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className='d-flex align-items-center logo'>
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className='rounded-circle'><MdOutlineMenuOpen /></Button>
                            <SearchBox />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className='rounded-circle mr-3'><MdOutlineLightMode /></Button>
                            <Button className='rounded-circle mr-3'><FaCartArrowDown /></Button>
                            <Button className='rounded-circle mr-3'><AiTwotoneMail /></Button>

                            {/* Notifications */}
                            <Button className='rounded-circle mr-3' onClick={handleNotificationMenuOpen}>
                                <IoMdNotifications />
                            </Button>
                            <Menu
                                id="notification-menu"
                                className='notifications dropdown_list'
                                anchorEl={anchorElNotification}
                                open={openNotificationMenu}
                                onClose={handleNotificationMenuClose}
                                TransitionComponent={Fade}

                            >  <div className="head pl-5 pb-2"><h4>&nbsp; Number of Orders {12}</h4></div>

                                <div className="scroll">

                                    <MenuItem onClick={handleNotificationMenuClose}>

                                        <div className="d-flex ">
                                            <div>

                                                <div className="userImg">
                                                    <span className='rounded-circle'>
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                                    </span>
                                                </div>

                                            </div>



                                            <div className="dropdownInfo">
                                                <h4><span><b>Akansha</b> aaded to his favorite list <b>Pink  Dress</b></span></h4>
                                                <p className='text-sky mb-0'> Few Seconds ago</p>
                                            </div>
                                        </div>


                                    </MenuItem>
                                    <MenuItem onClick={handleNotificationMenuClose}>

                                        <div className="d-flex ">
                                            <div>

                                                <div className="userImg">
                                                    <span className='rounded-circle'>
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                                    </span>
                                                </div>

                                            </div>



                                            <div className="dropdownInfo">
                                                <h4><span><b>Akansha</b> aaded to his favorite list <b>Pink  Dress</b></span></h4>
                                                <p className='text-sky mb-0'> Few Seconds ago</p>
                                            </div>
                                        </div>


                                    </MenuItem>
                                    <MenuItem onClick={handleNotificationMenuClose}>

                                        <div className="d-flex ">
                                            <div>

                                                <div className="userImg">
                                                    <span className='rounded-circle'>
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                                    </span>
                                                </div>

                                            </div>



                                            <div className="dropdownInfo">
                                                <h4><span><b>Akansha</b> aaded to his favorite list <b>Pink  Dress</b></span></h4>
                                                <p className='text-sky mb-0'> Few Seconds ago</p>
                                            </div>
                                        </div>


                                    </MenuItem>
                                    <MenuItem onClick={handleNotificationMenuClose}>

                                        <div className="d-flex ">
                                            <div>

                                                <div className="userImg">
                                                    <span className='rounded-circle'>
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                                    </span>
                                                </div>

                                            </div>



                                            <div className="dropdownInfo">
                                                <h4><span><b>Akansha</b> aaded to his favorite list <b>Pink  Dress</b></span></h4>
                                                <p className='text-sky mb-0'> Few Seconds ago</p>
                                            </div>
                                        </div>


                                    </MenuItem>

                                    <MenuItem onClick={handleNotificationMenuClose}>

                                        <div className="d-flex ">
                                            <div>

                                                <div className="userImg">
                                                    <span className='rounded-circle'>
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                                    </span>
                                                </div>

                                            </div>



                                            <div className="dropdownInfo">
                                                <h4><span><b>Akansha</b> aaded to his favorite list <b>Pink  Dress</b></span></h4>
                                                <p className='text-sky mb-0'> Few Seconds ago</p>
                                            </div>
                                        </div>


                                    </MenuItem>

                                    <MenuItem onClick={handleNotificationMenuClose}>

                                        <div className="d-flex ">
                                            <div>

                                                <div className="userImg">
                                                    <span className='rounded-circle'>
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                                    </span>
                                                </div>

                                            </div>



                                            <div className="dropdownInfo">
                                                <h4><span><b>Akansha</b> aaded to his favorite list <b>Pink  Dress</b></span></h4>
                                                <p className='text-sky mb-0'> Few Seconds ago</p>
                                            </div>
                                        </div>


                                    </MenuItem>

                                    <MenuItem onClick={handleNotificationMenuClose}>

                                        <div className="d-flex ">
                                            <div>

                                                <div className="userImg">
                                                    <span className='rounded-circle'>
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                                    </span>
                                                </div>

                                            </div>



                                            <div className="dropdownInfo">
                                                <h4><span><b>Akansha</b> aaded to his favorite list <b>Pink  Dress</b></span></h4>
                                                <p className='text-sky mb-0'> Few Seconds ago</p>
                                            </div>
                                        </div>


                                    </MenuItem>

                                    <MenuItem onClick={handleNotificationMenuClose}>

                                        <div className="d-flex ">
                                            <div>

                                                <div className="userImg">
                                                    <span className='rounded-circle'>
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                                    </span>
                                                </div>

                                            </div>



                                            <div className="dropdownInfo">
                                                <h4><span><b>Akansha</b> aaded to his favorite list <b>Pink  Dress</b></span></h4>
                                                <p className='text-sky mb-0'> Few Seconds ago</p>
                                            </div>
                                        </div>


                                    </MenuItem>

                                    <MenuItem onClick={handleNotificationMenuClose}>

                                        <div className="d-flex ">
                                            <div>

                                                <div className="userImg">
                                                    <span className='rounded-circle'>
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                                    </span>
                                                </div>

                                            </div>



                                            <div className="dropdownInfo">
                                                <h4><span><b>Akansha</b> aaded to his favorite list <b>Pink  Dress</b></span></h4>
                                                <p className='text-sky mb-0'> Few Seconds ago</p>
                                            </div>
                                        </div>


                                    </MenuItem>

                                </div>

                                <div className='pl-3 pr-3 w-100 pt-1 pb-1'>
                                    <Button className='btn-blue w-100'>View ALL notification</Button>

                                </div>

                            </Menu>


                            {/* User Account */}
                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleAccountMenuOpen}>
                                    <div className="userImg">
                                        <span className='rounded-circle'>
                                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                                        </span>
                                    </div>
                                    <div className="userInfo">
                                        <h4>Vinay Ambatkar</h4>
                                        <p className='mb-0'>@vinay05</p>
                                    </div>
                                </Button>
                                <Menu
                                    id="account-menu"
                                    anchorEl={anchorEl}
                                    open={openAccountMenu}
                                    onClose={handleAccountMenuClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem onClick={handleAccountMenuClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleAccountMenuClose}>My account</MenuItem>
                                    <MenuItem onClick={handleAccountMenuClose}>Reset Password</MenuItem>
                                    <MenuItem onClick={handleAccountMenuClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
