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
import { editData, fetchDataFromApi, deleteData } from "../../utils/api.js";

//Backdrop loader
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

//Dialog Box
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

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
    const [catData, setCatData] = useState({ categoryList: [], totalPages: 1 });
    const [open, setOpen] = React.useState(false);
    const [editId, setEditId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
        color: ''
    });
    const context = useContext(MyContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        context.setProgress(20);

        fetchDataFromApi('/api/category').then((res) => {
            console.log("API Response:", res);
            setCatData(res || { categoryList: [], totalPages: 1 });
            context.setProgress(100);
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);

    const changeInput = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        });
    };

    const addImgUrl = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: [e.target.value]
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
        });
    };

    const categoryEdiFun = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Updating values
        editData(`/api/category/${editId}`, formFields)
            .then((res) => {
                setCatData(prevCatData => ({
                    ...prevCatData,
                    categoryList: prevCatData.categoryList.map((item) =>
                        item.id === editId
                            ? { ...item, name: formFields.name, images: formFields.images, color: formFields.color }
                            : item
                    )
                }));
                setOpen(false);
                setIsLoading(false);

                // Show success message after the process is completed
                context.setAlertBox({
                    open: true,
                    error: false,
                    msg: "The category was updated successfully"
                });
            })
            .catch((error) => {
                console.error("Error updating category:", error);
                setIsLoading(false);
            });
    };

    // delete the category by id
    const deleteCat = (id) => {
        deleteData(`/api/category/${id}`)
            .then(() => {
                setCatData(prevCatData => ({
                    ...prevCatData,
                    categoryList: prevCatData.categoryList.filter(item => item.id !== id)
                }));
            })
            .catch((error) => {
                console.error("Error deleting category:", error);
            });
    };

    // handle page change
    const handleChange = (event, value) => {
        context.setProgress(40);
        fetchDataFromApi(`/api/category?page=${value}`).then((res) => {
            setCatData(res || { categoryList: [], totalPages: 1 });
            context.setProgress(100);
        });
    };

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Category List</h5>

                    <div className="ml-auto d-flex align-items-center" style={{ marginLeft: 'auto' }}>
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

                        <Link to="/category/add">
                            <Button className="btn-blue ml-4 pl-5 pr-5" style={{ marginLeft: 5 }}> Add Category</Button>
                        </Link>
                    </div>
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
                                {catData?.categoryList?.length > 0 && catData.categoryList.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Checkbox />
                                                <span>#{index + 1}</span>
                                            </div>
                                        </td>
                                        <td>
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
                                                <Button color="success" onClick={() => editCategory(item.id)}>
                                                    <FaPencilAlt />
                                                </Button>
                                                <Button color="error" onClick={() => deleteCat(item.id)}>
                                                    <MdDelete />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="d-flex tableFooter">
                            <Pagination
                                count={catData?.totalPages || 1}
                                color="primary"
                                className="pagination"
                                showFirstButton
                                showLastButton
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Dialog className="editModal" open={open} onClose={handleClose}>
                <DialogTitle>Edit Your Category</DialogTitle>

                <form>
                    <DialogContent>
                        <div className="form-group mb-3">
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
                                id="images"
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
                                id="color"
                                name="color"
                                label="Category Color"
                                type="text"
                                fullWidth
                                value={formFields.color}
                                onChange={changeInput}
                            />
                        </div>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" size="small" onClick={categoryEdiFun} disabled={isLoading}>
                            {isLoading ? (
                                <CircularProgress color="inherit" size={20} />
                            ) : (
                                'Update'
                            )}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

export default Category;
