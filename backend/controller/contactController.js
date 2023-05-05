const { isValidObjectId } = require("mongoose")

const { contactModel } = require('../model/contactModel');
const { createValidation } = require('./validation/contactValidation');

//! Get Request
exports.contactList = async (req, res) => {
    const contacts = await contactModel.find();

    res.json({ text: "success", contacts })
}


//! Post Request
exports.createContact = async (req, res) => {
    if (createValidation(req.body).error) return res.status(422).json({ text: createValidation(req.body).error.message });

    const newContact = new contactModel({
        fullName: req.body.fullName,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })

    await newContact.save();

    res.json({ text: "contact created", contact: newContact });
}


//! Delete Request
exports.deleteContact = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const contact = await contactModel.findByIdAndRemove(req.params.id)
    if (!contact) return res.status(404).json({ text: "contact not found" });

    res.json({ text: "contact deleted" });
}