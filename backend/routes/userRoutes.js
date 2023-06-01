const { Router } = require('express');
const Auth = require('../middleware/Auth');
const { userList, singleUser, register, login, deleteUser, addFavorite, removeFavorite, editFullName, editPhone, editEmail, editPassword, editProfile, addAddress, deleteAddress, editAddress } = require('../controller/userController');

const router = Router();

//! Get Routes
router.get("/userList", userList);
router.get("/singleUser/:id", singleUser);
router.get("/addFavorite/:userId/:productId", addFavorite)
router.get("/removeFavorite/:userId/:productId", removeFavorite)

//! Post Routes
router.post("/register", register);
router.post("/login", login);
router.post("/addAddress/:id",[Auth], addAddress);

//! Put Routes
router.put("/editFullName/:id", [Auth], editFullName);
router.put("/editPhone/:id", [Auth], editPhone);
router.put("/editEmail/:id", [Auth], editEmail);
router.put("/editPassword/:id", [Auth], editPassword);
router.put("/editProfile/:id", [Auth], editProfile);
router.put("/editAddress/:id/:index", [Auth], editAddress);

//! Delete Routes
router.delete("/deleteUser/:id", deleteUser);
router.delete("/deleteAddress/:id/:index", deleteAddress);


module.exports = router;