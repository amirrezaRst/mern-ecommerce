const { isValidObjectId } = require("mongoose")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const sharp = require('sharp');
const shortid = require('shortid');
const fs = require('fs');
const path = require('path');

const { userModel } = require("../model/userModel");
const { registerValidation, loginValidation, favoriteValidation, editNameValidation, editPhoneValidation, editEmailValidation, editPasswordValidation, editProfileValidation, addAddress, addressValidation, editAddressValidation } = require("./validation/userValidation");




//! Get Request
exports.userList = async (req, res) => {
    const allUser = await userModel.find().select("-password");
    res.json({ text: "success", users: allUser });
}

exports.singleUser = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(400).json({ text: "id is not valid" });

    const targetUser = await userModel.findById(req.params.id).populate("favorite");
    if (!targetUser) return res.status(404).json({ text: "user not found" });

    res.json({ text: "success", user: targetUser });
}

exports.addFavorite = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ text: "user id is not valid" });

    const user = await userModel.findById(req.params.userId).populate("favorite");

    const itemIndex = user.favorite.findIndex(item => {
        return item._id == req.params.productId
    })

    if (itemIndex > -1) {
        return res.status(203).json({ text: "The product has already been added" });
    }
    else {
        user.favorite.push(req.params.productId);
    }

    await user.save();

    const newUser = await userModel.findById(req.params.userId).populate("favorite");

    res.json({ text: "product added", user: newUser });
}

exports.removeFavorite = async (req, res) => {
    if (!isValidObjectId(req.params.userId)) return res.status(422).json({ text: "user id is not valid" });

    const user = await userModel.findById(req.params.userId).populate("favorite");

    const itemIndex = user.favorite.findIndex(item => {
        return item._id == req.params.productId
    })

    if (itemIndex > -1) {
        await user.favorite.splice(itemIndex, 1);
    }
    else {
        return res.status(422).json({ text: "product not found" });
    }

    await user.save();

    res.json({ text: "product removed", user })
}



//! Post Request
exports.register = async (req, res) => {
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
            if (isFullUser) return res.status(433).json({ text: "user has already registered" })

            if (req.file) {
                const fileName = `${shortid.generate()}_${req.file.originalname}`;
                console.log(req.file);
                await sharp(req.file.buffer)
                    .jpeg({
                        quality: 70,
                    })
                    .resize(255, 255)
                    .toFile(`./public/profile/${fileName}`)
                    .catch((err) => console.log(err));


                if (registerValidation(req.body).error) return res.status(422).send(registerValidation(req.body).error.message);

                const newUser = new userModel({
                    fullName: req.body.fullName,
                    phone: req.body.phone,
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
                    phone: req.body.phone,
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
    if (!user) return res.status(433).json({ text: "user not found" });
    const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!verifyPassword) return res.status(433).json({ text: "email or password not correct!" });

    const tokenData = {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET);

    res.header("Access-Control-Expose-headers", "x-auth-token").header("x-auth-token", token).json({ text: "login successfully", user });
}

exports.addAddress = async (req, res) => {
    if (addressValidation(req.body).error) return res.status(422).json({ text: addressValidation(req.body).error.message });
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const user = await userModel.findById(req.params.id);
    if (!user) return res.status("422").json({ text: "user not found" });

    const address = {
        location: req.body.location,
        city: req.body.city,
        postalCode: req.body.postalCode,
        unit: req.body.unit,
        plaque: req.body.plaque,
        transferee: req.body.transferee,
        transfereePhone: req.body.transfereePhone,
        transfereeEmail: req.body.transfereeEmail
    }

    user.address.push(address);

    await user.save();

    res.status(201).json({ text: "address added", user });
}



//! Put Request
exports.editFullName = async (req, res) => {
    if (editNameValidation(req.body).error) return res.status(422).json({ text: editNameValidation(req.body).error.message });

    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(422).json({ text: "user not found" })

    user.fullName = req.body.fullName;

    await user.save();

    res.json({ text: "user edited", user })
}

exports.editPhone = async (req, res) => {
    if (editPhoneValidation(req.body).error) return res.status(422).json({ text: editPhoneValidation(req.body).error.message });

    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(422).json({ text: "user not found" })

    user.phone = req.body.phone;

    await user.save();

    res.json({ text: "user edited", user })
}

exports.editEmail = async (req, res) => {
    if (editEmailValidation(req.body).error) return res.status(422).json({ text: editEmailValidation(req.body).error.message });

    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(422).json({ text: "user not found" })

    user.email = req.body.email;

    await user.save();

    res.json({ text: "user edited", user })
}

exports.editPassword = async (req, res) => {
    if (editPasswordValidation(req.body).error) return res.status(422).json({ text: editPasswordValidation(req.body).error.message });

    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(422).json({ text: "user not found" })

    user.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    await user.save();

    res.json({ text: "user edited", user })
}
exports.editProfile = async (req, res) => {

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
            if (req.file) {
                const fileName = `${shortid.generate()}_${req.file.originalname}`;
                await sharp(req.file.buffer)
                    .jpeg({
                        quality: 70,
                    })
                    .resize(255, 255)
                    .toFile(`./public/profile/${fileName}`)
                    .catch((err) => console.log(err));

                if (editProfileValidation(req.body).error) return res.status(422).json({ text: editProfileValidation(req.body).error.message });


                const user = await userModel.findById(req.params.id);
                if (!user) return res.status(422).json({ text: "user not found" })

                if (user.profile != "anonymous-user.jpg") {
                    fs.unlink(path.join(__dirname, '..', "public", "profile/") + user.profile, (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                }
                console.log(user.profile);
                user.profile = fileName;
                console.log(user);
                await user.save();

                res.json({ message: "user edited", user });
            } else {
                return res.status(422).json({ message: "Please enter the profile field" });
            }
        }
    });
}

exports.editAddress = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(422).json({ text: "user not founda" });

    if (editAddressValidation(req.body).error) return res.status(422).json({ text: editAddressValidation(req.body).error.message });


    if (!user.address[req.params.index]) {
        return res.status(422).json({ text: "This address does not exist" });
    }

    // const editAddressInfo = async (index) => {
    //     user.address[index].location = await req.body.location;
    //     user.address[index].city = req.body.city;
    //     user.address[index].postalCode = req.body.postalCode;
    //     user.address[index].unit = req.body.unit;
    //     user.address[index].plaque = req.body.plaque;
    //     user.address[index].transferee = req.body.transferee;
    //     user.address[index].transfereePhone = req.body.transfereePhone;
    //     user.address[index].transfereeEmail = req.body.transfereeEmail;
    // }
    // await editAddressInfo(req.params.index);

    await user.save();

    res.json({ text: "address edited", user });
}




//! Delete Request
exports.deleteUser = async (req, res) => {
    if (!isValidObjectId(req.params)) return res.status(422).json({ text: "id is not valid" })

    const user = await userModel.findByIdAndRemove(req.params.id);
    if (!user) return res.status(404).json({ text: "user not found" });

    res.json({ text: "user deleted" });
}

exports.deleteAddress = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(422).json({ text: "id is not valid" });

    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(422).json({ text: "user not found" });

    await user.address.splice(req.params.index, 1);

    await user.save();

    res.json({ text: "address deleted", user })
}