const joi = require('joi');


exports.registerValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().required().trim(),
        phone: joi.string().required(),
        email: joi.string().required().trim(),
        password: joi.string().required().trim(),
        profile: joi.string(),
        cart: joi.array().default([]),
        favorite: joi.array().default([])
    })
    return schema.validate(data);
}

exports.loginValidation = (data) => {
    const schema = joi.object({
        email: joi.string().required().trim(),
        password: joi.string().required().trim(),
    })
    return schema.validate(data);
}

exports.favoriteValidation = (data) => {
    const schema = joi.object({
        id: joi.string().required().trim()
    })
    return schema.validate(data);
}

exports.addressValidation = (data) => {
    const schema = joi.object({
        location: joi.string().required(),
        city: joi.string().required(),
        postalCode: joi.string().required(),
        unit: joi.string().required(),
        plaque: joi.string().required(),
        transferee: joi.string().required(),
        transfereePhone: joi.string().required(),
        transfereeEmail: joi.string().required()
    })
    return schema.validate(data);
}




exports.editNameValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().trim().max(40).min(3).required()
    })
    return schema.validate(data);
}

exports.editPhoneValidation = (data) => {
    const schema = joi.object({
        phone: joi.string().trim().max(11).min(11).required()
    })
    return schema.validate(data)
}

exports.editEmailValidation = (data) => {
    const schema = joi.object({
        email: joi.string().trim().required()
    })
    return schema.validate(data);
}

exports.editPasswordValidation = (data) => {
    const schema = joi.object({
        password: joi.string().trim().required()
    })
    return schema.validate(data);
}

exports.editProfileValidation = (data) => {
    const schema = joi.object({
        profile: joi.string()
    })
    return schema.validate(data);
}

exports.editAddressValidation = (data) => {
    const schema = joi.object({
        location: joi.string().required(),
        city: joi.string().required(),
        postalCode: joi.string().required(),
        unit: joi.string().required(),
        plaque: joi.string().required(),
        transferee: joi.string().required(),
        transfereePhone: joi.string().required(),
        transfereeEmail: joi.string().required()
    })
    return schema.validate(data);
}