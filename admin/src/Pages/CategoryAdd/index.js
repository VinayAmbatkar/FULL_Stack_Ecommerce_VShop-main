import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import axios from 'axios';
import { fetchDataFromApi, postData } from '../../utils/api';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

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


const CategoryAdd = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
        color: ''
    });

    // for navigation
   const history = useNavigate();

    // storing the input data from target value
    const changeInput = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        });
    };

    const addImgUrl = (e) => {
        const arr = [];
        arr.push(e.target.value);
        setFormFields({
            ...formFields,
            [e.target.name]: arr // kept e.target.name unchanged
        });
    };

    const addCategory = (e) => {
        e.preventDefault();
        console.log(formFields); // showing it on console

        setIsLoading(true);


        //post Data 
        postData('/api/category/create', formFields).then(res=>{
          setIsLoading(false);  
          history(`/category`)
        })



    };

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                    <h5 className="mb-0">Add Category</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />}
                        />

                        <StyledBreadcrumb
                            component="a"
                            label="Category"
                            href="#"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                        <StyledBreadcrumb
                            label=" Add Category"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                    </Breadcrumbs>
                </div>
                <form className='form' onSubmit={addCategory}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='card p-4 mt-0'>
                                <div className='form-group'>
                                    <h6>Category Name</h6>
                                    <input type='text' name="name" onChange={changeInput} />
                                </div>

                                <div className='form-group'>
                                    <h6>Image Url</h6>
                                    <input type='text' name="images" onChange={addImgUrl} />
                                </div>

                                <div className='form-group'>
                                    <h6>Color</h6>
                                    <input type='text' name="color" onChange={changeInput} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card p-4 mt-0'>
                        <div className="imagesUploadSec">
                            <br />
                            <Button type="submit" className="btn-blue btn-lg btn-big w-100">
                                <FaCloudUploadAlt /> &nbsp;{isLoading ? <CircularProgress color="inherit" className=" ml-4 loader" /> : 'PUBLISH AND VIEW'}
                                
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CategoryAdd;
