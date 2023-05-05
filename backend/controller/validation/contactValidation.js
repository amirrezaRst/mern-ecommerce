const joi = require('joi');


exports.createValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().required(),
        email: joi.string().required(),
        subject: joi.string().required(),
        message: joi.string().required()
    })
    return schema.validate(data);
}