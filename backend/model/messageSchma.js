const mongoose = require('mongoose');

exports.messageSchema = mongoose.Schema({
    icon: { type: String, require: true },
    title: { type: String, require: true },
    text: { type: String, require: true },
    isRead: { type: Boolean, default: false },
    time: { type: Date, default: Date.now }
})