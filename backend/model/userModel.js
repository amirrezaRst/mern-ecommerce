const mongoose = require('mongoose');
const { cartSchema } = require('./cartSchema');
const userSchema = mongoose.Schema({
    fullName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    profile: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    cart: [cartSchema],
    favorite: [{ type: mongoose.Types.ObjectId, ref: "products", default: null }]
})

exports.userModel = mongoose.model("users", userSchema);