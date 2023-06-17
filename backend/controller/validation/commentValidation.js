const joi = require('joi');

exports.newComment = (data) => {
    const schema = joi.object({
        fullName: joi.string().required(),
        score: joi.number().required(),
        text: joi.string().required(),
        positivePoint: joi.array(),
        negativePoint: joi.array(),
        proposal: joi.number().valid(-1, 0, 1).required()
    })
    return schema.validate(data);
}

