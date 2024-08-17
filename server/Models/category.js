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

exports.category = mongoose.model('Category', categorySchema);



