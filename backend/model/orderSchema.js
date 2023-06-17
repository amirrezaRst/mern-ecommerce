const mongoose = require('mongoose');
const { commentSchema } = require('./commentSchema');

const productSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, require: true },
    productId: { type: String, require: true },
    name: { type: String, require: true },
    color: { type: String, require: true },
    price: { type: Number, required: true },
    count: { type: Number, require: true },
    size: { type: String, require: true },
    picture: { type: String, require: true },
    viewPoint: { type: String },
    viewPointScore: { type: Number },
    isViewPoint: { type: Boolean, default: false },
    comment: commentSchema
});

exports.orderSchema = new mongoose.Schema({
    products: [productSchema],
    status: { type: String, default: "processing" },
    refId: { type: String, required: true },
    scores: { type: Number, require: true },
    date: { type: Date, default: Date.now }
});