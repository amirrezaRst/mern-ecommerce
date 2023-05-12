const { isValidObjectId } = require("mongoose");

const { userModel } = require('../model/userModel');
const { editValidation, addValidation } = require('./validation/cartValidation');



//! Get Request
exports.plus = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ text: "user id is not valid" });
    else if (!isValidObjectId(req.params.productId)) return res.status(422).json({ text: "product id is not valid" });


    const user = await userModel.findById(req.params.userId);
    if (!user) return res.status(422).json({ text: "user not found" });

    const product = user.cart.id(req.params.productId);
    if (!product) return res.status(422).json({ text: "No products were found in the shopping cart" });

    product.count = product.count + 1

    await user.save()
    res.json({ text: "cart changed", user })
}

exports.minus = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ text: "user id is not valid" });
    else if (!isValidObjectId(req.params.productId)) return res.status(422).json({ text: "product id is not valid" });


    const user = await userModel.findById(req.params.userId);
    if (!user) return res.status(422).json({ text: "user not found" });

    const product = user.cart.id(req.params.productId);
    if (!product) return res.status(422).json({ text: "No products were found in the shopping cart" });

    if (product.count == 1) {
        return res.json({ text: "cart changed", user })
    }
    product.count = product.count - 1

    await user.save()
    res.json({ text: "cart changed", user })
}

//! Post Request
exports.addCart = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });
    if (addValidation(req.body).error) return res.status(422).json({ text: addValidation(req.body).error.message });

    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(422).json({ text: "user not found" });

    const productIndex = user.cart.findIndex(item => {
        return item.productId == req.body.productId
    })

    if (productIndex == -1) {
        const newCart = {
            name: req.body.name,
            count: req.body.count,
            color: req.body.color,
            size: req.body.size,
            price: req.body.price,
            picture: req.body.picture,
            productId: req.body.productId
        }
        await user.cart.push(newCart);
    }
    else if (productIndex != -1 && user.cart[productIndex].size != req.body.size) {
        const newCart = {
            name: req.body.name,
            count: req.body.count,
            color: req.body.color,
            size: req.body.size,
            price: req.body.price,
            picture: req.body.picture,
            productId: req.body.productId
        }
        await user.cart.push(newCart);
    }
    else if (productIndex != -1 && user.cart[productIndex].color != req.body.color) {
        const newCart = {
            name: req.body.name,
            count: req.body.count,
            color: req.body.color,
            size: req.body.size,
            price: req.body.price,
            picture: req.body.picture,
            productId: req.body.productId
        }
        await user.cart.push(newCart);
    }
    else {
        user.cart[productIndex].count += req.body.count;
        user.cart[productIndex].price += req.body.price;
        // user.cart[productIndex].discount += req.body.discount;
    }

    await user.save();
    // res.json({ text: "The product has been added to the cart", userCart:user.cart });
    res.json({ text: "The product has been added to the cart", user });
}

//! Delete Request
exports.deleteCart = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ text: "user id is not valid" });
    if (!isValidObjectId(req.params.productId)) return res.status(422).json({ text: "product id is not valid" });

    const user = await userModel.findById(req.params.userId);
    if (!user) return res.status(422).json({ text: "user not found" });

    const indexItem = user.cart.findIndex(item => {
        return item._id == req.params.productId
    })

    if (indexItem > -1) {
        user.cart.splice(indexItem, 1);
    } else {
        return res.status(422).json({ text: "product not found" })
    }
    await user.save();
    res.json({ text: "product deleted", user })
}