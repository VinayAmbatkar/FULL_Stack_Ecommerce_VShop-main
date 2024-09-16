const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    description: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }],
    brand: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        default: 0,
    },
    oldPrice: {
        type: Number,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
       
    },
    rating: {
        type: Number,
        default: 0,
    },
    // numReviews: {
    //     type: Number,
    //     default: 0,
    // },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    
});

exports.Product = mongoose.model('Product', productSchema);

