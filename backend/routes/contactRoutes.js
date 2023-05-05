const { Router } = require('express');

const Auth = require('../middleware/Auth');
const AdminAuth = require('../middleware/AdminAuth');
const { contactList, createContact, deleteContact } = require('../controller/contactController');

const router = Router();


router.get("/contactList", [Auth, AdminAuth], contactList);
// router.get("/singleContact/:id", [Auth, AdminAuth], singleContact);

router.post("/createContact", createContact);

router.delete("/deleteContact/:id", [Auth, AdminAuth], deleteContact);


module.exports = router;