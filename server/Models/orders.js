const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    products: [
        {
            productId:{
                type:String
            },
            productTitle: {
                type: String
            },
            quantity:{
                type:Number
            },
            price:{
                type:Number
            },
            image:{
                type:String
            },
            subTotal:{
                type:Number
            }
        }
    ],
    status:{
        type:String,
        default:"pending"
    },
    date: {
        type: Date,
        default: Date.now
    },

})

ordersSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

ordersSchema.set('toJSON', {
    virtuals: true,
});

exports.Orders = mongoose.model('Orders', ordersSchema);
exports.ordersSchema = ordersSchema;
