const { isValidObjectId } = require("mongoose")
const multer = require('multer');
const sharp = require('sharp');
const shortid = require('shortid');
const path = require("path");

const { productModel } = require("../model/productModel");
const { createValidation } = require("./validation/productValidation");


//! Get Request
exports.productList = async (req, res) => {
    const allProduct = await productModel.find();
    res.json({ text: "success", products: allProduct });
}

exports.singleProduct = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(400).json({ text: "id is not valid" });

    const product = await productModel.findById(req.params.id);
    if (!product) return res.status(404).json({ text: "product is not found" });

    res.json({ text: "success", product });
}


//! Post Request
exports.createProduct = async (req, res) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/product/")
        },
        filename: (req, file, cb) => {
            let ext = path.extname(file.originalname);
            cb(null, shortid.generate() + ext)
        }
    })
    const fileFilter = (req, file, cb) => {
        if (file.mimetype == "image/jpeg") {
            cb(null, true);
        }
        else if (file.mimetype == "image/jpg") {
            cb(null, true);
        }
        else if (file.mimetype == "image/png") {
            cb(null, true);
        }
        else {
            cb("The file extension must be jpg or jpeg or png", false);
        }
    };

    const upload = multer({
        // storage,
        limits: { fileSize: 20000000 },
        fileFilter,
    }).array("picture");

    upload(req, res, async (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res
                    .status(422)
                    .json({ text: "The size of the photo should not be more than 20 MB" });
            }
            res.status(422).send(err);
        } else {

            // 335
            if (req.files) {


                // {
                //     fieldname: 'picture',
                //     originalname: 'product_single_01.jpg',
                //     encoding: '7bit',
                //     mimetype: 'image/jpeg',
                //     destination: './public/product/',
                //     filename: 'p3mUOnnXI.jpg',
                //     path: 'public\\product\\p3mUOnnXI.jpg',
                //     size: 74022
                //   }


                if (createValidation(req.body).error) return res.status(422).json({ text: createValidation(req.body).error.message });

                const newProduct = productModel({
                    name: req.body.name,
                    color: req.body.color,
                    size: req.body.size,
                    price: req.body.price,
                    description: req.body.description,
                    brand: req.body.brand,
                    category: req.body.category,
                    available: req.body.available
                })

                const pictures = [];

                req.files.map(async file => {

                    var name = file.originalname.split(".")

                    const fileName = `${shortid.generate()}.${name[name.length - 1]}`;

                    pictures.push(fileName);

                    await sharp(file.buffer)
                        .jpeg({
                            quality: 80,
                        })
                        .resize(600, 600)
                        .toFile(`./public/product/${fileName}`)
                        .catch((err) => console.log(err));
                })

                newProduct.picture = pictures;

                await newProduct.save();

                res.status(201).json({ text: "product created", product: newProduct });
            } else {
                res.status(422).json({ message: "please select picture" });
            }

        }
    });

}








//! Put Request
exports.editProduct = async (req, res) => { }








//! Delete Request
exports.deleteProduct = async (req, res) => {
    if (isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const product = await productModel.findByIdAndRemove(req.params.id);
    if (!product) return res.status(404).json({ text: "user not found" });

    res.json({ text: "product deleted" });
}