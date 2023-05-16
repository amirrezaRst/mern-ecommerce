const { Router } = require('express');

const { userList, singleUser, register, login, deleteUser, addFavorite, removeFavorite } = require('../controller/userController');

const router = Router();


router.get("/userList", userList);
router.get("/singleUser/:id", singleUser);
router.get("/addFavorite/:userId/:productId", addFavorite)
router.get("/removeFavorite/:userId/:productId", removeFavorite)

router.post("/register", register);
router.post("/login", login);
// router.put("/editProfile", editProfile);

router.delete("/deleteUser/:id", deleteUser);


module.exports = router;