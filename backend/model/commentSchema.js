const mongoose = require('mongoose');

exports.commentSchema = mongoose.Schema({
    fullName: { type: String, require: true },
    score: { type: Number, require: true },
    text: { type: String, require: true },
    time: { type: Date, default: Date.now }
})