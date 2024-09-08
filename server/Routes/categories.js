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

// Function to upload images to cloudinary with a concurrency limit
const uploadImages = async (images) => {
    const limit = pLimit(2);
    const imagesToUpload = images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result.secure_url;
        });
    });
    return await Promise.all(imagesToUpload);
};

// Route to get all categories
router.get('/', async (req, res) => {
    try {
        const categoryList = await Category.find(); // Using Category instead of category
        if (!categoryList || categoryList.length === 0) {
            return res.status(404).json({ success: false, message: 'No categories found' });
        }
        res.status(200).send(categoryList);
    } catch (err) {
        res.status(500).json({ error: err.message, success: false });
    }
});

// Route to get category by ID
router.get('/:id', async (req, res) => {
    try {
        const categoryItem = await Category.findById(req.params.id); // Using Category
        if (!categoryItem) {
            return res.status(404).json({
                message: 'The category with the given ID was not found',
                success: false,
            });
        }
        res.status(200).send(categoryItem);
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false,
        });
    }
});

// Route to create a new category
router.post('/create', async (req, res) => {
    try {
        const imgurl = await uploadImages(req.body.images);

        if (!imgurl || imgurl.length === 0) {
            return res.status(500).json({
                error: 'Error in uploading images',
                status: false,
            });
        }

        // Creating a new category
        let newCategory = new Category({
            name: req.body.name,
            images: imgurl,
            color: req.body.color,
        });

        newCategory = await newCategory.save();

        res.status(200).json(newCategory);
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false,
        });
    }
});

// Route to delete category by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id); // Using Category
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
        res.status(500).json({
            error: err.message,
            success: false,
        });
    }
});

// Route to update category by ID
router.put('/:id', async (req, res) => {
    try {
        const imgurl = await uploadImages(req.body.images);

        if (!imgurl || imgurl.length === 0) {
            return res.status(500).json({
                error: 'Error in uploading images',
                status: false,
            });
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                images: imgurl,
                color: req.body.color,
            },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({
                message: 'The category cannot be updated',
                success: false,
            });
        }
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false,
        });
    }
});

module.exports = router;
