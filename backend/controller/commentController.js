const { isValidObjectId } = require("mongoose");

const { productModel } = require('../model/productModel');


//! Post Request
exports.addComment = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const product = await productModel.findById(req.params.id);
    if (!product) return res.status(422).json({ text: "product not found" });

    const newComment = {
        fullName: req.body.fullName,
        score: req.body.score,
        text: req.boyd.text,
        positivePoint: req.body.positivePoint,
        negativePoint: req.body.negativePoint,
        proposal: req.body.proposal
    }

    product.comment.push(newComment);

    await product.save();

    res.json({ text: "comment added", comment: newComment });
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