const { Category } = require('../Models/category.js');
const { Product } = require('../Models/products.js');
const express = require('express');
const router = express.Router();
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;

// Get all products
router.get(`/`, async (req, res) => {
    try {
        const productList = await Product.find().populate("category");
        res.send(productList);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Create the product
router.post(`/create`, async (req, res) => {
    try {
        const category = await Category.findById(req.body.category);
        if (!category) {
            return res.status(404).send('Invalid Category');
        }

        const limit = pLimit(2);

        // Check if images are provided
        if (!req.body.images || !Array.isArray(req.body.images) || req.body.images.length === 0) {
            return res.status(400).json({
                error: "At least one image is required",
                status: false
            });
        }

        // Upload images to Cloudinary and get their URLs
        const imagesToUpload = req.body.images.map((image) => {
            return limit(() => cloudinary.uploader.upload(image));
        });

        const uploadResults = await Promise.all(imagesToUpload);
        const imgUrls = uploadResults.map(result => result.secure_url);

        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            images: imgUrls,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        });

        product = await product.save();
        res.status(201).send(product);
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false
        });
    }
});

// Get product by ID

router.get(`/:id`, async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).send('The product with the given ID was not found');
    }

    return res.status(200).send(product);
});


router.delete(`/:id`, async (req, res) => {
    const deletProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletProduct){
        return res.status(404).json({status:false, message: 'Product not found'

        });
    }

    res.status(200).send({
        message: 'Product deleted successfully',
        status: true
    })
});


//Put request to update product

router.put(`/:id`, async (req, res) => {
// -------------------------------------------------

const limit = pLimit(2);

       

        // Upload images to Cloudinary and get their URLs
        const imagesToUpload = req.body.images.map((image) => {
            return limit(() => cloudinary.uploader.upload(image));
        });

        const uploadResults = await Promise.all(imagesToUpload);
        const imgUrl = uploadResults.map(result => result.secure_url);

       
    
    const product = await Product.findByIdAndUpdate(
        req.params.id,
      {name: req.body.name,
        description: req.body.description,
        images: imgUrl,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,},
        {new: true}

        
    );

    if (!product){
        return res.status(404).json({status:false, message: 'Product can not be updated'});
    }

    res.status(200).json({
        message: 'Product updated successfully',
        status: true
    });

    
});



module.exports = router;
