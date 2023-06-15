const { isValidObjectId } = require("mongoose");

const { productModel } = require('../model/productModel');
const { userModel } = require('../model/userModel');
const { newComment } = require('./validation/commentValidation');

//! Post Request
exports.addComment = async (req, res) => {
    if (!isValidObjectId(req.params.productId)) return res.status(422).json({ text: "id is not valid" });
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ text: "id is not valid" });
    if (!isValidObjectId(req.params.orderId)) return res.status(422).json({ text: "id is not valid" });

    if (newComment(req.body).error) return res.status(422).json({ text: newComment(req.body).error.message });

    const product = await productModel.findById(req.params.productId);
    if (!product) return res.status(422).json({ text: "product not found" });

    const user = await userModel.findById(req.params.userId)
    if (!user) return res.status(422).json({ text: "user not found" });

    var orderIndex;
    var productIndex;
    for (let i = 0; i < user.order.length; i++) {

        for (let y = 0; y < user.order[i].products.length; y++) {
            if (user.order[i].products[y]._id == req.params.orderId) {
                orderIndex = i;
                productIndex = y;
            }
        }
    }

    const targetProduct = user.order[orderIndex].products[productIndex];

    const comment = {
        fullName: req.body.fullName,
        score: req.body.score,
        text: req.body.text,
        positivePoint: req.body.positivePoint,
        negativePoint: req.body.negativePoint,
        proposal: req.body.proposal
    }

    product.scoreCount += 1;
    product.score += req.body.score;

    user.order[orderIndex].products[productIndex].comment = comment;
    user.order[orderIndex].products[productIndex].isViewPoint = true;

    product.comment.push(comment);

    await product.save();
    await user.save();

    res.json({ text: "comment added", comment: comment, user });
}



//! Delete Request
exports.deleteComment = async (req, res) => {
    if (!isValidObjectId(req.params.productId)) return res.status(422).json({ text: "product id is not valid" });
    else if (!isValidObjectId(req.params.commentId)) return res.status(422).json({ text: "comment id is not valid" });

    const product = await productModel.findById(req.params.productId);
    if (!product) return res.status(422).json({ text: "product not found" });

    const comment = product.comment.id(req.params.productId);
    if (!comment) return res.status(422).json({ text: "comment not found" });
    else if (comment) comment.remove();

    await product.save();

    res.json({ text: "comment deleted successfully" });
}