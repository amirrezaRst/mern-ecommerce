const ZarinpalCheckout = require('zarinpal-checkout');
const { paymentModel } = require('../model/paymentModel');
const { userModel } = require('../model/userModel');
const joi = require('joi');
const { isValidObjectId } = require('mongoose');

const zarinpal = ZarinpalCheckout.create('00000000-0000-0000-0000-000000000000', true);

exports.checkoutCart = async (req, res) => {
    const schema = joi.object({
        address: joi.object().required(),
        amount: joi.number().required(),
        user: joi.object().required(),
        scores: joi.number().required()
    })
    if (schema.validate(req.body).error) return res.status(422).json({ text: schema.validate(req.body).error.message });

    const user = req.body.user;
    const cart = user.cart;
    const address = req.body.address;
    const amount = req.body.amount;
    const scores = req.body.scores;

    const payment = new paymentModel({
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            address
        },
        cart,
        scores,
        amount
    });

    const response = await zarinpal.PaymentRequest({
        Amount: amount * 55000, // In Tomans
        CallbackURL: `${process.env.FRONT_URI}paymentValidation`,
        Description: `Payment To zay shop`,
        Email: user.email,
    });

    payment.paymentCode = response.authority;
    await payment.save();

    res.json({ response });
}



exports.verifyPayment = async (req, res) => {
    const paymentCode = req.params.authority;
    const status = req.params.status;
    const payment = await paymentModel.findOne({ paymentCode }).populate("cart")

    const user = await userModel.findById(payment.user._id);

    if (status === "OK") {
        const response = await zarinpal.PaymentVerification({
            Amount: payment.amount * 52000,
            Authority: paymentCode
        });

        if (response.status === -21) return res.status(400).json({ text: "empty" })
        else {
            payment.refId = response.RefID;
            payment.success = true;
            user.cart = [];

            const newOrder = {
                products: payment.cart.map(item => item),
                refId: response.RefID,
                scores: payment.scores
            }
            user.order.push(newOrder);
            await user.save();
            await payment.save()
            res.json({ response, payment, user });
        }
    } else return res.status(403).json({ text: "Payment failed" })
}

exports.totalPayment = async (req, res) => {
    const payment = await paymentModel.find();

    res.json({ text: "success", payment })
}



//! order controller
exports.cancelOrder = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ text: "user id is not valid" });
    if (!isValidObjectId(req.params.orderId)) return res.status(422).json({ text: "order id is not valid" });

    const user = await userModel.findById(req.params.userId);
    if (!user) return res.status(422).json({ text: "user not found" });

    const orderIndex = user.order.findIndex(item => {
        return item._id == req.params.orderId
    })
    if (orderIndex == -1) {
        return res.status(422).json({ text: "order not found" });
    }

    user.order[orderIndex].status = "canceled";

    await user.save();

    res.json({ text: "order canceled", user });
}

exports.returnOrder = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ text: "user id is not valid" });
    if (!isValidObjectId(req.params.orderId)) return res.status(422).json({ text: "order id is not valid" });

    const user = await userModel.findById(req.params.userId);
    if (!user) return res.status(422).json({ text: "user not found" });

    const orderIndex = user.order.findIndex(item => {
        return item._id == req.params.orderId
    })
    if (orderIndex == -1) {
        return res.status(422).json({ text: "order not found" });
    }

    user.order[orderIndex].status = "returned";

    await user.save();

    res.json({ text: "order canceled", user });
}

exports.deliverOrder = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ text: "user id is not valid" });
    if (!isValidObjectId(req.params.orderId)) return res.status(422).json({ text: "order id is not valid" });

    const user = await userModel.findById(req.params.userId);
    if (!user) return res.status(422).json({ text: "user not found" });

    const orderIndex = user.order.findIndex(item => {
        return item._id == req.params.orderId
    })
    if (orderIndex == -1) {
        return res.status(422).json({ text: "order not found" });
    }

    user.order[orderIndex].status = "delivered";

    await user.save();

    res.json({ text: "order canceled", user });
}