const { Router } = require('express');
const router = Router();

router.post('/addOrder/:id', addOrder);

module.exports = router;