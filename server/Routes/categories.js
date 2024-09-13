const express = require('express');
const { Category } = require('../Models/category'); // Correcting the import
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;
const router = express.Router();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
});

// Function to upload images to Cloudinary with a concurrency limit
const uploadImages = async (images) => {
    const limit = pLimit(2); // Limiting concurrent uploads to 2
    const imagesToUpload = images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result.secure_url;
        });
    });
    return await Promise.all(imagesToUpload); // Wait for all images to be uploaded
};

// Route to get all categories with pagination
router.get('/', async (req, res) => {
    try {
        // Pagination start
        const page = parseInt(req.query.page) || 1; // Fixing query access
        const perPage = 7;
        const totalPosts = await Category.countDocuments(); // Count total documents
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages) {
            return res.status(404).json({ message: "Page not found" });
        }

        const categoryList = await Category.find()
            .skip((page - 1) * perPage) // Skip records for pagination
            .limit(perPage); // Limit the number of records

        // Return paginated result
        return res.status(200).json({
            "categoryList":categoryList,
            "totalPages":totalPages,
            "currentPage":page
        });
    } catch (err) {
        res.status(500).json({ error: err.message, success: false });
    }
});

// Route to get category by ID
router.get('/:id', async (req, res) => {
    try {
        const categoryItem = await Category.findById(req.params.id); // Using Category model
        if (!categoryItem) {
            return res.status(404).json({
                message: 'The category with the given ID was not found',
                success: false,
            });
        }
        res.status(200).json(categoryItem);
    } catch (err) {
        res.status(500).json({ error: err.message, success: false });
    }
});

// Route to create a new category
router.post('/create', async (req, res) => {
    try {
        const imgurl = await uploadImages(req.body.images);

        if (!imgurl || imgurl.length === 0) {
            return res.status(500).json({
                error: 'Error in uploading images',
                success: false,
            });
        }

        // Creating a new category
        let newCategory = new Category({
            name: req.body.name,
            images: imgurl,
            color: req.body.color,
        });

        newCategory = await newCategory.save();

        res.status(201).json(newCategory); // Respond with created status
    } catch (err) {
        res.status(500).json({ error: err.message, success: false });
    }
});

// Route to delete category by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id); // Using Category model
        if (!deletedCategory) {
            return res.status(404).json({
                message: 'The category with the given ID was not found',
                success: false,
            });
        }
        res.status(200).json({
            message: 'The category was successfully deleted',
            success: true,
        });
    } catch (err) {
        res.status(500).json({ error: err.message, success: false });
    }
});

// Route to update category by ID
router.put('/:id', async (req, res) => {
    try {
        const imgurl = await uploadImages(req.body.images);

        if (!imgurl || imgurl.length === 0) {
            return res.status(500).json({
                error: 'Error in uploading images',
                success: false,
            });
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                images: imgurl,
                color: req.body.color,
            },
            { new: true } // Return the updated document
        );

        if (!updatedCategory) {
            return res.status(404).json({
                message: 'The category cannot be updated',
                success: false,
            });
        }
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(500).json({ error: err.message, success: false });
    }
});

module.exports = router;
