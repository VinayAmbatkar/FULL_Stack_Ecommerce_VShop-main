import Button from '@mui/material/Button';
import React from 'react';
import { MdDashboardCustomize, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsCartPlusFill, BsBellFill } from "react-icons/bs";
import { BiSolidMessage } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeTab, setActiveTab] = React.useState(null);
    const [submenus, setSubmenus] = React.useState({
        1: false, // Products submenu
        // You can add more submenus if needed
    });

    const toggleSubmenu = (index) => {
        setSubmenus(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleTabClick = (index) => {
        if (activeTab === index) {
            toggleSubmenu(index);
        } else {
            setActiveTab(index);
            setSubmenus(prev => ({
                ...prev,
                [index]: true
            }));
        }
    };

    return (
        <div>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button 
                                className={`w-100 ${activeTab === 0 ? 'active' : ''}`} 
                                onClick={() => handleTabClick(0)}
                            >
                                <span className='icon'><MdDashboardCustomize /></span>
                                Dashboard
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button 
                            className={`w-100 ${activeTab === 1 ? 'active' : ''}`} 
                            onClick={() => handleTabClick(1)}
                        >
                            <span className='icon'><MdOutlineProductionQuantityLimits /></span>
                            Products
                            <span className='arrow'><IoIosArrowForward /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 1 && submenus[1] ? 'collapse' : 'collapsed'}`}>
                            <ul className="submenu">
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product View</Link></li>
                                <li><Link to="#">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <Button 
                                className={`w-100 ${activeTab === 2 ? 'active' : ''}`} 
                                onClick={() => handleTabClick(2)}
                            >
                                <span className='icon'><BsCartPlusFill /></span>
                                Orders
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button 
                                className={`w-100 ${activeTab === 3 ? 'active' : ''}`} 
                                onClick={() => handleTabClick(3)}
                            >
                                <span className='icon'><BiSolidMessage /></span>
                                Messages
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button 
                                className={`w-100 ${activeTab === 4 ? 'active' : ''}`} 
                                onClick={() => handleTabClick(4)}
                            >
                                <span className='icon'><BsBellFill /></span>
                                Notifications
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>

                    <br />

                    <div className="logoutWrapper">
                        <div className="logoutBox">
                            <Button variant='contained'>Log out</Button>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
