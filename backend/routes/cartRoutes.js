const { Router } = require('express');

const { addCart, editCart, deleteCart } = require('../controller/cartController');

const router = Router();


router.post("/addCart/:id", addCart)

router.put("/updateCart/:userId/:productId", editCart)

router.delete("/deleteCart/:userId/:productId", deleteCart)


module.exports = router