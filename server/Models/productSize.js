const mongoose = require('mongoose');

const productSizeSchema = mongoose.Schema({
    size:{
        type:String,
        default:null
    }
})

productSizeSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSizeSchema.set('toJSON', {
    virtuals: true,
});

exports.ProductSize = mongoose.model('ProductSize', productSizeSchema);
exports.productSizeSchema = productSizeSchema;
