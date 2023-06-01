const mongoose = require('mongoose');

exports.messageSchema = mongoose.Schema({
    icon: { type: String, require: true },
    title: { type: String, require: true },
    text: { type: Number, require: true },
    time: { type: Date, default: Date.now }
})