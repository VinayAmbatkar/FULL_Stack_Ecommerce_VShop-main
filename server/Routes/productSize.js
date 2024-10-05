const {ProductSize}  = require("../models/productSize") ;
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) => {

    try {
        const productSizeList = await ProductSize.find();

        if (!productSizeList) {
            res.status(500).json({ success: false })
        }

        return res.status(200).json(productSizeList);

    } catch (error) {
        res.status(500).json({ success: false })
    }


});


router.get('/:id', async (req, res) => {

    const item = await ProductSize.findById(req.params.id);

    if (!item) {
        res.status(500).json({ message: 'The item with the given ID was not found.' })
    }
    return res.status(200).send(item);
})


router.post('/create', async (req, res) => {
    
    let productsize = new ProductSize({
        size: req.body.size
    });



    if (!productsize) {
        res.status(500).json({
            error: err,
            success: false
        })
    }


    productsize = await productsize.save();

    res.status(201).json(productsize);

});


router.delete('/:id', async (req, res) => {
    const deletedItem = await ProductSize.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
        res.status(404).json({
            message: 'Item not found!',
            success: false
        })
    }

    res.status(200).json({
        success: true,
        message: 'Item Deleted!'
    })
});


router.put('/:id', async (req, res) => {

    const item = await ProductSize.findByIdAndUpdate(
        req.params.id,
        {
            size: req.body.size,
        },
        { new: true }
    )

    if (!item) {
        return res.status(500).json({
            message: 'item cannot be updated!',
            success: false
        })
    }


    res.send(item);

})


module.exports = router;