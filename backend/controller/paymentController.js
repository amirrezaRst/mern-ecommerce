const ZarinpalCheckout = require('zarinpal-checkout');
const { paymentModel } = require('../model/paymentModel');
const { userModel } = require('../model/userModel');

const zarinpal = ZarinpalCheckout.create('00000000-0000-0000-0000-000000000000', true);

exports.checkoutCart = async (req, res) => {
    const user = await userModel.findById(req.user._id);
    const cart = user.cart;
    const address = req.params.address;

    const amount = user.cart.reduce((acc, item) => {
        return acc + (item.price * item.count);
    }, 0)

    const payment = new paymentModel({
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            address
        },
        cart,
        amount
    });

    const response = await zarinpal.PaymentRequest({
        Amount: amount * 52000, // In Tomans
        CallbackURL: 'http://localhost:3001/verifyPayment',
        Description: `Payment To zay shop`,
        Email: user.email,
    });

    payment.paymentCode = response.authority;
    await payment.save();

    res.json({ response })
}



exports.verifyPayment = async (req, res) => {
    const paymentCode = req.params.authority;
    const status = req.params.status;
    const payment = await paymentModel.findOne({ paymentCode })

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
            await user.save();
            await payment.save()
            res.json({ response });
        }
    } else return res.status(400).json({ text: "Payment failed" })
}

exports.userPaymentInfo = async (req, res) => {
    const payment = await paymentModel.findOne({ authority: req.params.authority });
    if (!payment) return res.status(422).json({ text: "payment not found" });

    res.json({ payment });
}


exports.totalPayment = async (req, res) => {
    const payment = await paymentModel.find();

    res.json({ text: "success", payment })
}