const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, require: true },
    name: { type: String, require: true },
    color: { type: String, require: true },
    count:{type:Number,require:true},
    size: { type: String, require: true },
    picture: { type: String, require: true },
    viewPoint: { type: String },
    viewPointScore: { type: Number },
    isViewPoint: { type: Boolean, default: false }
})

exports.orderSchema = new mongoose.Schema({
    products: [productSchema],
    status: { type: String, default: "processing" },
})

