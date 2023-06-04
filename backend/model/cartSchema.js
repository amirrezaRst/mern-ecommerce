const { default: mongoose } = require("mongoose");

exports.cartSchema = mongoose.Schema({
    name: { type: String, require: true },
    count: { type: Number, require: true },
    color: { type: String, require: true },
    size: { type: String, require: true },
    price: { type: Number, require: true },
    picture: { type: String, require: true },
    clubScore:{type:Number,require:true},
    productId: { type: String },
    discount: { type: Number, default: 0 },
})