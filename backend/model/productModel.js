const { default: mongoose } = require("mongoose");
const shortId = require('shortid');

const { commentSchema } = require("./commentSchema");

const productSchema = mongoose.Schema({
    name: { type: String, require: true },
    color: [String],
    size: [{
        type: String, enum: ["S", "M", "L", "X", "XL", "XXL", "XXXL", "38", "40", "42", "45", "110", "115", "120", "125", "130", "135", "140", "145", "150",
            "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "666", "single"], require: true
    }],
    price: { type: Number, require: true },
    description: { type: String, default: null },
    brand: { type: String, require: true },
    picture: { type: Array },
    category: { type: String, require: true },
    gender: { type: String, required: true },
    available: { type: Boolean, default: true },
    score: { type: Number, default: 0 },
    scoreCount: { type: Number, default: 0 },
    Specification: { type: String, default: null },
    productId: { type: String, default: shortId.generate() },
    comment: [commentSchema]
})

exports.productModel = mongoose.model("products", productSchema);