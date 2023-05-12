const { Router } = require('express');

const { addCart, deleteCart, plus, minus } = require('../controller/cartController');

const router = Router();

router.get("/plus/:userId/:productId", plus);
router.get("/minus/:userId/:productId", minus);

router.post("/addCart/:id", addCart)

// router.put("/updateCart/:userId/:productId", editCart)

router.delete("/deleteCart/:userId/:productId", deleteCart)


module.exports = router