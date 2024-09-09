import React, { useContext, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import { editData, fetchDataFromApi, deleteData } from "../../utils/api.js"; // Ensure deleteData is imported

//Backdrop loader
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

//Dialog Box
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

const Category = () => {
    const [catData, setCatData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [editFields, setEditFields] = useState({});
    const [editId, setEditId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch category data from API
        fetchDataFromApi('/api/category').then((res) => {
            console.log("API Response:", res);
            setCatData(res); // Set fetched data to state
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);

    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
        color: ''
    });

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

    const handleClose = () => {
        setOpen(false);
    };

    const editCategory = (id) => {
        setFormFields({
            name: '',
            images: '',
            color: ''
        });

        setOpen(true);
        setEditId(id);

        fetchDataFromApi(`/api/category/${id}`).then((res) => {
            setFormFields({
                name: res.name,
                images: res.images,
                color: res.color
            });
            console.log(res);
        });
    };

    const categoryEdiFun = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Updating values
        editData(`/api/category/${editId}`, formFields)
            .then((res) => {
                // Update the catData state directly without fetching again
                setCatData(prevCatData =>
                    prevCatData.map((item) =>
                        item.id === editId
                            ? { ...item, name: formFields.name, images: formFields.images, color: formFields.color }
                            : item
                    )
                );
                setOpen(false);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error updating category:", error);
                setIsLoading(false);
            });
    };

    // delete the category by id
    const deleteCat = (id) => {
        deleteData(`/api/category/${id}`)
            .then((res) => {
                setCatData(prevCatData => prevCatData.filter(item => item.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting category:", error);
            });
    }

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Category List</h5>
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

                <div className="card shadow border-0 p-3 mt-4">
                    <div className="table-responsive mt-3">
                        <table className="table table-bordered table-striped v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th style={{ width: '100px' }}>IMAGE</th>
                                    <th>CATEGORY</th>
                                    <th>COLOR</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                {catData?.length !== 0 && catData?.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Checkbox {...label} />
                                                <span>#{index + 1}</span>
                                            </div>
                                        </td>
                                        <td>
                                            {/* Category Images */}
                                            <div className="d-flex align-items-center productBox">
                                                <div className="imgWrapper">
                                                    <div className="img card shadow m-0">
                                                        <img src={item.images[0]} className="w-100" alt={item.categoryName} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>
                                            <div className="actions d-flex align-items-center">
                                                <Button className="success" color="success" onClick={() => editCategory(item.id)}>
                                                    <FaPencilAlt />
                                                </Button>
                                                <Button className="error" color="error" onClick={() => deleteCat(item.id)}>
                                                    <MdDelete />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="d-flex tableFooter">
                            <p>showing <b>{catData.length}</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                className="editModal"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Edit Your Category</DialogTitle>

                <form>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Category Name"
                            type="text"
                            fullWidth
                            value={formFields.name}
                            onChange={changeInput}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="images"
                            label="Category Image"
                            type="text"
                            fullWidth
                            value={formFields.images}
                            onChange={addImgUrl}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="color"
                            label="Category color"
                            type="text"
                            fullWidth
                            value={formFields.color}
                            onChange={changeInput}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="outlined">Cancel</Button>
                        <Button type="button" onClick={categoryEdiFun} variant="contained">
                            {isLoading ? <CircularProgress color="inherit" className=" ml-4 loader" /> : 'Submit'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

export default Category;
