const joi = require('joi');


exports.addOrderValidation = (data) => {
    const schema = joi.object({
        products: [
            {
                _id: joi.string().required(),
                name: joi.string().required(),
                color: joi.string().required(),
                size: joi.string().required(),
                picture: joi.string().required(),
                viewPoint: joi.string(),
                viewPointScore: joi.string(),
                isViewPoint: joi.boolean().default(false)
            }
        ],
        status: joi.string().valid("processing", "Returned", "Delivered", "canceled").default("processing"),
        refId: joi.string().required()
    })
    return schema.validate(data);
}