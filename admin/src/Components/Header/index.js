
import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/Images/logo.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";

import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { IoShieldHalfSharp } from "react-icons/io5";
import Divider from '@mui/material/Divider';
import { MyContext } from '../../App';
import UserAvatarImgComponent from '../userAvatarImg/index';


const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationDrop);

    const context = useContext(MyContext)

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpenotificationsDrop = () => {
        setisOpennotificationDrop(true)
    }

    const handleClosenotificationsDrop = () => {
        setisOpennotificationDrop(false)
    }

   
    const changeTheme=()=>{
       if(context.theme==="dark"){
        context.setTheme("light");
       }
       else{
        context.setTheme("dark");
       }
    }

    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wraooer */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} />
                              
                            </Link>
                        </div>


                        {
                            context.windowWidth>992 && 
                            <div className="col-sm-3 d-flex align-items-center part2 res-hide">
                            <Button className="rounded-circle mr-3" onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar === false ? <MdMenuOpen /> : <MdOutlineMenu />
                                }
                            </Button>
                            <SearchBox />
                        </div>
                        }
                       

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3" onClick={changeTheme}>
                                <MdOutlineLightMode />
                            </Button>
                          

                            <div className='dropdownWrapper position-relative'>
                                <Button className="rounded-circle mr-3"
                                    onClick={handleOpenotificationsDrop}><FaRegBell /></Button>

                                    {
                                        context.windowWidth<992 && 
                                        <Button className="rounded-circle mr-3"
                                    onClick={()=>context.openNav()}
                                   ><IoMenu /></Button>
                                    }
                                    

                                <Menu
                                    anchorEl={isOpennotificationDrop}
                                    className='notifications dropdown_list'
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleClosenotificationsDrop}
                                    onClick={handleClosenotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <div className='head pl-3 pb-0'>
                                        <h4>Orders (12)  </h4>
                                    </div>

                                    <Divider className="mb-1" />

                                    <div className='scroll'>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <UserAvatarImgComponent img={'https://cdn-icons-png.flaticon.com/512/17/17004.png'}/>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>


                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>


                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>


                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>


                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>


                                    <div className='pl-3 pr-3 w-100 pt-2 pb-1'>
                                        <Button className='btn-blue w-100'>View all notifications</Button>
                                    </div>

                                </Menu>
                            </div>

                            {
                                context.isLogin !== true ?
                                    <Link to={'/login'}><Button className='btn-blue btn-lg btn-round'>Sign In</Button></Link>
                                    :

                                    <div className="myAccWrapper">
                                        <Button className="myAcc d-flex align-items-center"
                                            onClick={handleOpenMyAccDrop}
                                        >
                                            <div className="userImg">
                                                <span className="rounded-circle">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" />
                                                </span>
                                            </div>

                                            <div className="userInfo res-hide">
                                                <h4>Vinay Sanjay Ambatkar</h4>
                                                <p className="mb-0">Vinay@552002</p>
                                            </div>

                                        </Button>

                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={openMyAcc}
                                            onClose={handleCloseMyAccDrop}
                                            onClick={handleCloseMyAccDrop}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                My Account
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <IoShieldHalfSharp />
                                                </ListItemIcon>
                                                Reset Password
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>


                                    </div>

                            }





                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;