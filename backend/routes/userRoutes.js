const { Router } = require('express');

const { userList, singleUser, register, login, deleteUser } = require('../controller/userController');

const router = Router();


router.get("/userList", userList);
router.get("/singleUser/:id", singleUser);

router.post("/register", register);
router.post("/login", login);

// router.put("/editProfile", editProfile);

router.delete("/deleteUser/:id", deleteUser);


module.exports = router;