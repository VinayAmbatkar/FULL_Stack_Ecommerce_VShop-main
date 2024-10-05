const mongoose = require('mongoose');

const subCatSchema = mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subCat:{
        type:String,
        required:true
    }
})

subCatSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

subCatSchema.set('toJSON', {
    virtuals: true,
});

exports.SubCategory = mongoose.model('SubCategory', subCatSchema);
exports.subCatSchema = subCatSchema;
