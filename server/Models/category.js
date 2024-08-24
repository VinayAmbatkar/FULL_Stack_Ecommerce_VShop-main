const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

name: {
    type: String,
    required: true,
    trim: true,
},

images:[
    {
        type: String,
        required: true
    }
],

color:{
    type: String,
    required: true
},
});

categorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

categorySchema.set('toJSON', {
    virtuals: true,
});



const Category = mongoose.model('Category', categorySchema);

// Correct the export to use `Category`
module.exports = { Category, categorySchema };


