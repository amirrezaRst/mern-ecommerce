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
    cart: [{
        name: { type: String, require: true },
        count: { type: Number, require: true },
        color: { type: String, require: true },
        size: { type: String, require: true },
        price: { type: Number, require: true },
        picture: { type: String, require: true },
        clubScore: { type: Number, require: true },
        productId: { type: String },
        discount: { type: Number, default: 0 },
    }
    ],
    paymentCode: String,
    success: {
        type: Boolean,
        default: false
    },
    amount: Number,
    refId: String
});

exports.paymentModel = mongoose.model("payment", paymentSchema);