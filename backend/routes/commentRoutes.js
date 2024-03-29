const { Router } = require('express');

const { addComment, deleteComment } = require('../controller/commentController');

const router = Router();



router.post("/addComment/:productId/:userId/:orderId", addComment);

// router.put("/updateComment/:productId/:commentId", editComment);

router.delete("/deleteComment/:productId/:commentId", deleteComment)


module.exports = router;