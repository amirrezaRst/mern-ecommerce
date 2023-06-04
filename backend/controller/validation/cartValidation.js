const joi = require('joi');



exports.addValidation = (data) => {
    const schema = joi.object({
        name: joi.string().required(),
        count: joi.number().required(),
        color:joi.string().required(),
        size:joi.string().required(),
        price: joi.number().required(),
        picture: joi.string().required(),
        clubScore: joi.number().required(),
        productId:joi.string().required(),
        discount: joi.number().default(0),
    })
    return schema.validate(data);
}

exports.editValidation = (data) => {
    const schema = joi.object({
        count: joi.number().required()
    })
    return schema.validate(data);
}