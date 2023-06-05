const { isValidObjectId } = require("mongoose");
const { userModel } = require("../model/userModel");

const { addOrderValidation } = require('./validation/orderValidation');

exports.addOrder = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });
    if (addOrderValidation(req.body).error) return res.status(422).json({ text: addOrderValidation(req.body).error.message });

    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(422).json({ text: "user not found" });

    console.log(object);
}