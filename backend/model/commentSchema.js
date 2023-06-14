const mongoose = require('mongoose');

exports.commentSchema = mongoose.Schema({
    fullName: { type: String, require: true },
    score: { type: Number, require: true },
    text: { type: String, require: true },
    positivePoint: [{ type: String }],
    negativePoint: [{ type: String }],
    Proposal: { type: Number, enum: [-1, 0, 1], require: true },
    time: { type: Date, default: Date.now }
})