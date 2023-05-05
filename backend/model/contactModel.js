const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    answering: { type: Boolean, default: false },
    date: { type: Date, default: Date.now() }
})

exports.contactModel = mongoose.model("contact", contactSchema);