const { default: mongoose } = require("mongoose");

exports.cartSchema = mongoose.Schema({
    name: { type: String, require: true },
    count: { type: Number, require: true },
    price: { type: Number, require: true },
    pic: { type: String, require: true },
    productId: { type: String },
    discount: { type: Number, default: 0 },
})