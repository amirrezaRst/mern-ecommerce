const { isValidObjectId } = require("mongoose")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const sharp = require('sharp');
const shortid = require('shortid');

const { userModel } = require("../model/userModel");
const { registerValidation, loginValidation } = require("./validation/userValidation");




//! Get Request
exports.userList = async (req, res) => {
    const allUser = await userModel.find().select("-password");
    res.json({ text: "success", users: allUser });
}

exports.singleUser = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(400).json({ text: "id is not valid" });

    const targetUser = await userModel.findById(req.params.id).populate("favorite");
    if (!targetUser) res.status(404).json({ text: "user not found" });

    res.json({ text: "success", user: targetUser });
}



//! Post Request
exports.register = async (req, res) => {
    // if (registerValidation(req.body).error) return res.status(422).send(registerValidation(req.body).error.message);

    // const newUser = new userModel({
    //     fullName: req.body.fullName,
    //     email: req.body.email,
    //     password: req.body.password,
    // })

    const fileFilter = (req, file, cb) => {
        if (file.mimetype == "image/jpeg") {
            cb(null, true);
        }
        else if (file.mimetype == "image/jpg") {
            cb(null, true);
        }
        else {
            cb("The file extension must be jpg or jpeg", false);
        }
    };

    const upload = multer({
        limits: { fileSize: 5000000 },
        fileFilter: fileFilter,
    }).single("profile");

    upload(req, res, async (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res
                    .status(422)
                    .json({ text: "The size of the photo should not be more than 5 MB" });
            }
            res.status(422).send(err);
        } else {
            const isFullUser = await userModel.findOne({ email: req.body.email });
            if (isFullUser) return res.status(422).json({ text: "user has already registered" })

            if (req.file) {
                const fileName = `${shortid.generate()}_${req.file.originalname}`;
                console.log(req.file);
                await sharp(req.file.buffer)
                    .jpeg({
                        quality: 70,
                    })
                    .resize(255, 255)
                    .toFile(`./public/profile/${fileName}`)
                    // .toFile(path.join(__dirname, "public", "profile/", fileName))
                    .catch((err) => console.log(err));


                if (registerValidation(req.body).error) return res.status(422).send(registerValidation(req.body).error.message);

                const newUser = new userModel({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
                })

                newUser.profile = fileName;
                // newPicture.like.push(req.body.like)

                await newUser.save();

                res.status(201).json({ message: "user created", user: newUser });
            } else {
                if (registerValidation(req.body).error) return res.status(422).send(registerValidation(req.body).error.message);
                const newUser = new userModel({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
                })
                newUser.profile = "anonymous-user.jpg";

                await newUser.save();

                res.status(201).json({ message: "user created", user: newUser });
            }
        }
    });
}


exports.login = async (req, res) => {
    if (loginValidation(req.body).error) return res.status(422).json({ text: loginValidation(req.body).error.message });

    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(422).json({ text: "user not found" });
    const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!verifyPassword) return res.status(422).json({ text: "email or password not correct!" });

    const tokenData = {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET);

    res.header("Access-Control-Expose-headers", "x-auth-token").header("x-auth-token", token).json({ text: "login successfully", user });
}


exports.deleteUser = async (req, res) => {
    if (!isValidObjectId(req.params)) return res.status(422).json({ text: "id is not valid" })

    const user = await userModel.findByIdAndRemove(req.params.id);
    if (!user) return res.status(404).json({ text: "user not found" });

    res.json({ text: "user deleted" });
}