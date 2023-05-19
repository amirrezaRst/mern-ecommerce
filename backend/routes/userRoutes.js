const { Router } = require('express');
const Auth = require('../middleware/Auth');
const { userList, singleUser, register, login, deleteUser, addFavorite, removeFavorite, editFullName, editPhone, editEmail, editPassword, editProfile } = require('../controller/userController');

const router = Router();

//! Get Routes
router.get("/userList", userList);
router.get("/singleUser/:id", singleUser);
router.get("/addFavorite/:userId/:productId", addFavorite)
router.get("/removeFavorite/:userId/:productId", removeFavorite)

//! Post Routes
router.post("/register", register);
router.post("/login", login);

//! Put Routes
router.put("/editFullName/:id", [Auth], editFullName);
router.put("/editPhone/:id", [Auth], editPhone);
router.put("/editEmail/:id", [Auth], editEmail);
router.put("/editPassword/:id", [Auth], editPassword);
router.put("/editProfile/:id", [Auth], editProfile);

//! Delete Routes
router.delete("/deleteUser/:id", deleteUser);


module.exports = router;