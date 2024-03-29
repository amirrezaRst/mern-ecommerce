const mongoose = require('mongoose');
const { cartSchema } = require('./cartSchema');
const { messageSchema } = require('./messageSchma');
const { orderSchema } = require('./orderSchema');

const userSchema = mongoose.Schema({
    fullName: { type: String, require: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    profile: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    cart: [cartSchema],
    message: [messageSchema],
    address: [Object],
    wallet: { type: Number, default: 0 },
    zayScore: { type: Number, default: 0 },
    favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
    order: [orderSchema]
})

exports.userModel = mongoose.model("users", userSchema);