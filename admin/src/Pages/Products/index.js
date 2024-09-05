import { HiDotsVertical } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import Button from '@mui/material/Button';
import { Chart } from "react-google-charts";

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";

import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";



import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Checkbox from '@mui/material/Checkbox';
import DashboardBox from "../../Pages/Dashboard/components/dashboardBox.js";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});


const Products = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setshowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product List</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />}
                        />

                        <StyledBreadcrumb
                            label="Products"
                            deleteIcon={<ExpandMoreIcon />}

                        />
                    </Breadcrumbs>
                </div>



                <div className="row dashboardBoxWrapperRow dashboardBoxWrapperRowV2">
                    <div className="col-md-12">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} />

                        </div>
                    </div>


                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>


                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={(e) => setshowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBysetCatBy}
                                    onChange={(e) => setCatBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                    </div>


                    <div className="table-responsive mt-3">
                        <table className="table table-bordered table-striped v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th style={{ width: '300px' }}>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Checkbox {...label} />  <span>#1</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans	</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td><Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Checkbox {...label} />  <span>#1</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans	</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td><Rating name="read-only" defaultValue={4.5} precision={4.0} size="small" readOnly /></td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                        <Link to="/product/details">
                                        <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                    </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Checkbox {...label} />  <span>#1</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans	</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td><Rating name="read-only" defaultValue={4.5} precision={5.0} size="small" readOnly /></td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                        <Link to="/product/details">
                                        <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                    </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Checkbox {...label} />  <span>#1</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans	</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td><Rating name="read-only" defaultValue={4.5} precision={5.0} size="small" readOnly /></td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Checkbox {...label} />  <span>#1</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans	</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td><Rating name="read-only" defaultValue={4.5} precision={5.0} size="small" readOnly /></td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Checkbox {...label} />  <span>#1</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans	</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td><Rating name="read-only" defaultValue={4.5} precision={5.0} size="small" readOnly /></td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Checkbox {...label} />  <span>#1</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans	</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td><Rating name="read-only" defaultValue={4.5} precision={5.0} size="small" readOnly /></td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Checkbox {...label} />  <span>#1</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans	</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td><Rating name="read-only" defaultValue={4.5} precision={5.0} size="small" readOnly /></td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Checkbox {...label} />  <span>#1</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans	</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td><Rating name="read-only" defaultValue={4.5} precision={5.0} size="small" readOnly /></td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>


                            </tbody>

                        </table>


                        <div className="d-flex tableFooter">
                            <p>showing <b>12</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" className="pagination"
                                showFirstButton showLastButton />
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Products;