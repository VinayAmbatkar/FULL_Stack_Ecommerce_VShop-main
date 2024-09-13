import React, { useState, useContext } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../utils/api';
import { MyContext } from '../../App';

// Breadcrumb styling
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

const CategoryAdd = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
        color: ''
    });

    const { setAlertBox } = useContext(MyContext); // Using context correctly
    const navigate = useNavigate(); // Correcting the navigate usage

    // Handle form input changes
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
            [e.target.name]: arr
        });
    };

    const addCategory = async (e) => {
        e.preventDefault();

        if (formFields.name !== "" && formFields.images.length !== 0 && formFields.color !== "") {
            setIsLoading(true);

            try {
                // Post data to server
                await postData('/api/category/create', formFields);
                setIsLoading(false);

                // Display success message
                setAlertBox({
                    open: true,
                    color: 'success',
                    msg: 'Category added successfully!'
                });

                // Navigate to category page
                navigate(`/category`);
            } catch (error) {
                setIsLoading(false);
                // Display error message
                setAlertBox({
                    open: true,
                    color: 'warning',
                    msg: 'Failed to add category!'
                });
            }
        } else {
            // Display warning for missing fields
            setAlertBox({
                open: true,
                color: 'warning',
                msg: 'Please fill all the details'
            });
        }
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
                            label="Add Category"
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
                                    <input
                                        type='text'
                                        name="name"
                                        value={formFields.name}
                                        onChange={changeInput}
                                        required
                                    />
                                </div>

                                <div className='form-group'>
                                    <h6>Image URL</h6>
                                    <input
                                        type='text'
                                        name="images"
                                        value={formFields.images[0] || ''}
                                        onChange={addImgUrl}
                                        required
                                    />
                                </div>

                                <div className='form-group'>
                                    <h6>Color</h6>
                                    <input
                                        type='text'
                                        name="color"
                                        value={formFields.color}
                                        onChange={changeInput}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card p-4 mt-0'>
                        <div className="imagesUploadSec">
                            <Button type="submit" className="btn-blue btn-lg btn-big w-100" disabled={isLoading}>
                                <FaCloudUploadAlt /> &nbsp;
                                {isLoading ? <CircularProgress color="inherit" className="ml-4 loader" /> : 'PUBLISH AND VIEW'}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CategoryAdd;
