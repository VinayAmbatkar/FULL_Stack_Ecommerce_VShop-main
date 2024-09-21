import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext, useEffect, useRef, useState } from 'react';
import Rating from '@mui/material/Rating';
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import axios from 'axios';
import { IoCloseSharp } from "react-icons/io5";
import OutlinedInput from '@mui/material/OutlinedInput';


import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaRegImages } from "react-icons/fa";
import { fetchDataFromApi } from '../../utils/api';
import { MyContext } from '../../App';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};





const ProductUpload = () => {

    const [categoryVal, setcategoryVal] = useState('');
    const [subCatVal, setSubCatVal] = useState('');
    const [ratingsValue, setRatingValue] = useState(1);
    const [productRams, setProductRAMS] = useState([]);
    const [catData, setCatData] = useState([]);
    const [isFeaturedValue, setIsFeaturedValue] = useState(false); // Added state for isFeatured
    const [count, setCount] = useState(0);
    const [productImagesArr, setproductImagesArr] = useState([]);

    const [formFields, setFormFields] = useState({
        name: '',
        description: '',
        images: [],
        brand: '',
        price: 0,
        oldPrice: 0,
        category: '',
        countInStock: 0,
        rating: 0,
        isFeatured: false,



    })


    const productImages = useRef();

    const context = useContext(MyContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        context.setProgress(20);

        const arr = [];

        fetchDataFromApi('/api/category').then((res) => {
            console.log("API Response:", res);

            arr.push(res);
            context.setProgress(100);
            setCatData(res);
        })



            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    const imagesArr = [];

    const handleChangeCategory = (event) => {
        setcategoryVal(event.target.value);
        // alert(event.target.value); 


        setFormFields(() => ({
            ...formFields,
            category: event.target.value
        }))



    };

    const handleChangeisFeaturedValue = (event) => {
        const value = event.target.value;
        setIsFeaturedValue(value);
        setFormFields((prevState) => ({
            ...prevState,
            isFeatured: value
        }));
    };


    const handleChangeSubCategory = (event) => {
        setSubCatVal(event.target.value);
        setFormFields(() => ({


        }))

    };



    const handleChangeProductRams = (event) => {
        const {
            target: { value },
        } = event;
        setProductRAMS(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );


    };


    const addProductImages = () => {



        setproductImagesArr(prevArray => [...prevArray, productImages.current.value]);
    productImages.current.value = " ";
}


const addProduct = (e) => {

    e.preventDefault();

    formFields.images = productImagesArr
    console.log(formFields)


}

const inputChage = (e) => {
    setFormFields(() => ({
        ...formFields,
        [e.target.name]: e.target.value
    }))

}


return (
    <>
        <div className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                <h5 className="mb-0">Product Upload</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Dashboard"
                        icon={<HomeIcon fontSize="small" />}
                    />

                    <StyledBreadcrumb
                        component="a"
                        label="Products"
                        href="#"
                        deleteIcon={<ExpandMoreIcon />}
                    />
                    <StyledBreadcrumb
                        label="Product Upload"
                        deleteIcon={<ExpandMoreIcon />}
                    />
                </Breadcrumbs>
            </div>
            <form className='form' onSubmit={addProduct}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card p-4 mt-0'>
                            <h5 className='mb-4'>Basic Information</h5>

                            <div className='form-group'>
                                <h6>PRODUCT NAME</h6>
                                <input type='text' name="name" onChange={inputChage} />
                            </div>

                            <div className='form-group'>
                                <h6>DESCRIPTION</h6>
                                <textarea rows={5} cols={10} name="description" onChange={inputChage} />
                            </div>


                            <div className='row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>CATEGORY</h6>
                                        <Select
                                            value={categoryVal}
                                            onChange={handleChangeCategory}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className='w-100'
                                        >
                                            <MenuItem value="">
                                                <em value={null}>None</em>
                                            </MenuItem>
                                            <MenuItem className="text-capitalize" value="Men"
                                            >Men</MenuItem>
                                            {
                                                catData?.length !== 0 && catData?.categoryList?.map((cat, index) => {
                                                    return (
                                                        <MenuItem className='text-capitalize' value={cat.id}
                                                            key={index}>{cat.name} </MenuItem>
                                                    )
                                                })
                                            }


                                            <MenuItem className="text-capitalize"
                                                value="Women"
                                            >Women</MenuItem>

                                            <MenuItem className="text-capitalize"
                                                value="Kids"
                                            >Kids</MenuItem>

                                        </Select>
                                    </div>
                                </div>



                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>SUB CATEGORY</h6>
                                        <Select
                                            value={subCatVal}
                                            onChange={handleChangeSubCategory}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className='w-100'
                                        >
                                            <MenuItem value="">
                                                <em value={null}>None</em>
                                            </MenuItem>

                                            <MenuItem className="text-capitalize" value="Jeans">Jeans</MenuItem>

                                            <MenuItem className="text-capitalize" value="Shirts">Shirts</MenuItem>

                                        </Select>
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>PRICE</h6>
                                        <input type='text' name="price" onChange={inputChage} />
                                    </div>
                                </div>

                            </div>


                            <div className='row'>

                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>OLD PRICE </h6>
                                        <input type='text' name="oldPrice" onChange={inputChage} />
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className='form-group'>
                                        <h6 className='text-uppercase'>is Featured </h6>
                                        <Select
                                            value={isFeaturedValue}
                                            onChange={handleChangeisFeaturedValue}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className='w-100'
                                        >
                                            <MenuItem value="">
                                                <em value={null}>None</em>
                                            </MenuItem>
                                            <MenuItem value={true}>True</MenuItem>
                                            <MenuItem value={false}>False</MenuItem>
                                        </Select>
                                    </div>
                                </div>


                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>PRODUCT STOCK </h6>
                                        <input type='text' name="countInStock" onChange={inputChage} />
                                    </div>
                                </div>

                            </div>



                            <div className='row'>

                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <h6>BRAND</h6>
                                        <input type='text' name="brand" onChange={inputChage} />
                                    </div>
                                </div>



                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <h6>DISCOUNT</h6>
                                        <input type='text' name="discount" />
                                    </div>
                                </div>


                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <h6>PRODUCT RAMS</h6>
                                        <Select
                                            multiple
                                            value={productRams}
                                            onChange={handleChangeProductRams}
                                            displayEmpty
                                            className='w-100'

                                            MenuProps={MenuProps}
                                        >

                                            <MenuItem value="4GB">4GB</MenuItem>
                                            <MenuItem value="8GB" >8GB</MenuItem>
                                            <MenuItem value="10GB" >10GB</MenuItem>
                                            <MenuItem value="12GB" >12GB</MenuItem>
                                        </Select>
                                    </div>
                                </div>

                            </div>


                            <div className='row'>

                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <h6>RATINGS</h6>
                                        <Rating
                                            name="simple-controlled"
                                            value={ratingsValue}
                                            onChange={(event, newValue) => {
                                                setRatingValue(newValue);
                                                setFormFields(() => ({
                                                    ...formFields,
                                                    rating: newValue
                                                }))
                                            }}

                                        />
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                    <div className="col-sm-3" id='imgGrid'>

                        {
                            productImagesArr?.map((image, index) => {
                                return (
                                    <div className='img' key={index}>
                                        <img src={image} alt="image"
                                            className='w-100' />
                                    </div>

                                )
                            })
                        }


                    </div>
                </div>





                <br />


                {/* <div className='card p-4 mt-0'>
                        <div className="imagesUploadSec">
                            <h5 class="mb-4">Media And Published</h5>

                            <div className='imgUploadBox d-flex align-items-center'>

                                <div className='uploadBox'>
                                    <span className="remove"><IoCloseSharp /></span>
                                    <div className='box'>
                                        <LazyLoadImage
                                            alt={"image"}
                                            effect="blur"
                                            className="w-100"
                                            src={'https://mironcoder-hotash.netlify.app/images/product/single/01.webp'} />
                                    </div>
                                </div>




                                <div className='uploadBox'>
                                    <input type="file" multiple name="images" />
                                    <div className='info'>
                                        <FaRegImages />
                                        <h5>image upload</h5>
                                    </div>

                                </div>


                            </div>

                            <br />

                            <Button type="button" className="btn-blue btn-lg btn-big w-100"
                            ><FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW  </Button>
                        </div>
                    </div> */}

                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <h6 className='text-uppercase'>Product Images</h6>
                            <div className="position-relative inputBtn">
                                <input type="text" ref={productImages} style={{ paddingRight: "100px" }} name="countInStock" onChange={inputChage} />
                                <Button className='btn-blue' onClick={addProductImages}>ADD</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <Button type="submit" className="btn-blue btn-lg btn-big w-100"
                ><FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW  </Button>
            </form>
        </div>
    </>
)
}

export default ProductUpload;