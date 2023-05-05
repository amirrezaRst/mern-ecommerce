const { Router } = require('express');
const multer = require('multer');
const shortId = require('shortid');

const { createProduct, productList, deleteProduct, singleProduct, editProduct } = require('../controller/productController');

const router = Router();

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "upload/product/")
//     },
//     filename: (req, file, cb) => {
//         let ext = path.extname(file.originalname);
//         cb(null, shortId.generate() + ext)
//     }
// })
// const upload = multer({
//     storage: storage,
//     fileFilter: (req, res, cb) => {
//         if (file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true)
//         } else {
//             console.log("only jpg & jpeg file supported");
//             cb(null, false)
//         }
//     },
//     limits: {
//         fileSize: 1024 * 1024 * 2
//     }
// })
router.get("/productList", productList);
router.get("/singleProduct/:id", singleProduct);

router.post("/createProduct", createProduct);

router.put("/editProduct/:id", editProduct);

router.delete("/deleteProduct", deleteProduct);


module.exports = router;