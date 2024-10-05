const {ProductRams}  = require("../models/productRAMS.js") ;
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) => {

    try {
        const productREAMSList = await ProductRams.find();

        if (!productREAMSList) {
            res.status(500).json({ success: false })
        }

        return res.status(200).json(productREAMSList);

    } catch (error) {
        res.status(500).json({ success: false })
    }


});


router.get('/:id', async (req, res) => {

    const item = await ProductRams.findById(req.params.id);

    if (!item) {
        res.status(500).json({ message: 'The item with the given ID was not found.' })
    }
    return res.status(200).send(item);
})


router.post('/create', async (req, res) => {
    
    let productRAMS = new ProductRams({
        productRam: req.body.productRam
    });



    if (!productRAMS) {
        res.status(500).json({
            error: err,
            success: false
        })
    }


    productRAMS = await productRAMS.save();

    res.status(201).json(productRAMS);

});


router.delete('/:id', async (req, res) => {
    const deletedItem = await ProductRams.findByIdAndDelete(req.params.id);

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

    const item = await ProductRams.findByIdAndUpdate(
        req.params.id,
        {
            productRam: req.body.productRam,
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