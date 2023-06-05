const mongoose = require('mongoose');

const cartSchema = require('./cartSchema');

const paymentSchema = new mongoose.Schema({
    user: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        fullName: String,
        email: String,
        phone: String,
        address: Object
    },
    cart: [cartSchema],
    paymentCode: String,
    success: {
        type: Boolean,
        default: false
    },
    amount: Number,
    refId: String
});

exports.paymentModel = mongoose.model("payment", paymentSchema);