const { Router } = require('express');
const router = Router();

const Auth = require('../middleware/Auth');
const AdminAuth = require('../middleware/AdminAuth');
const { checkoutCart, verifyPayment, totalPayment, cancelOrder, returnOrder, deliverOrder } = require('../controller/paymentController');


router.post("/checkoutCart", [Auth], checkoutCart);
router.get("/verifyPayment/:authority/:status", verifyPayment)

router.get("/cancelOrder/:userId/:orderId", cancelOrder);
router.get("/returnOrder/:userId/:orderId", [Auth, AdminAuth], returnOrder);
router.get("/deliverOrder/:userId/:orderId", [Auth, AdminAuth], deliverOrder);

router.get("/totalPayment", [Auth, AdminAuth], totalPayment);

module.exports = router;