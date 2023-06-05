const { Router } = require('express');
const router = Router();

const Auth = require('../middleware/Auth');
const AdminAuth = require('../middleware/AdminAuth');
const { checkoutCart, verifyPayment, totalPayment } = require('../controller/paymentController');


router.post("/checkoutCart", [Auth], checkoutCart);
router.get("/verifyPayment/:authority/:status", verifyPayment)

router.get("/totalPayment", [Auth, AdminAuth], totalPayment);

module.exports = router;