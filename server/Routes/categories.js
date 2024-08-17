const express = require('express');
const { category } = require('../Models/category');
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;
const router = express.Router();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
});

// Route to get all categories
router.get(`/`, async (req, res) => {
    try {
        const categoryList = await category.find();
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
        const categoryItem = await category.findById(req.params.id);
        if (!categoryItem) {
            return res.status(404).json({
                message: 'The category with the given ID was not found',
                success: false
            });
        }
        res.status(200).send(categoryItem);
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false
        });
    }
});

// Route to create a new category
router.post('/create', async (req, res) => {
    const limit = pLimit(2);

    try {
        // Uploading images to Cloudinary
        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);

        if (!uploadStatus || uploadStatus.length === 0) {
            return res.status(500).json({
                error: 'Error in uploading images',
                status: false
            });
        }

        const imgurl = uploadStatus.map((item) => item.secure_url);

        // Creating a new category
        let newCategory = new category({
            name: req.body.name,
            images: imgurl,
            color: req.body.color
        });

        newCategory = await newCategory.save();

        res.status(200).json(newCategory);
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false
        });
    }
});

// Route to delete category by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await category.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({
                message: 'The category with the given ID was not found',
                success: false
            });
        }
        res.status(200).json({
            message: 'The category was successfully deleted',
            success: true
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false
        });
    }
});

module.exports = router;
