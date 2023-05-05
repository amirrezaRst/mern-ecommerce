const joi = require('joi');


exports.createValidation = (data) => {
    const schema = joi.object({
        name: joi.string().required().trim(),
        color: joi.array().valid("white", "black", "red", "blue", "green", "yellow", "gray", "purple", "orange", "cyan").required(),
        size: joi.array()
            .valid("S", "M", "L", "X", "XL", "XXL", "XXXL", "38", "40", "42", "45", "110", "115", "120", "125", "130", "135", "140", "145", "150",
                "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "666", "single")
            .required(),
        // watch size => 38, 40, 42, 45
        // dress & jacket size => S, M, L, X, XL, XXL, XXXL
        // sunglass size => 110, 115, 120, 125, 130, 135, 140, 145, 150
        // shoes & sneakers size => 36, 37, 38 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
        price: joi.number().required(),
        description: joi.string().required().trim(),
        brand: joi.string().required(),
        category: joi.string().required(),
        picture: joi.array(),
        available: joi.boolean().default(true),
        Specification: joi.string().default(null)
    })
    return schema.validate(data);
}


exports.editValidation = (data) => {
    const schema = joi.object({
        name: joi.string().required().trim(),
        color: joi.object(),
        size: joi.object().valid("S", "M", "L", "X", "XL", "XXL", "XXXL"),
        price: joi.number().required(),
        description: joi.string().required().trim(),
        brand: joi.string().required(),
        category: joi.string().required(),
        available: joi.boolean().default(true)
    })
    return schema.validate(data);
}