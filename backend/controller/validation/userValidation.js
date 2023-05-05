const joi = require('joi');


exports.registerValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().required().trim(),
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
