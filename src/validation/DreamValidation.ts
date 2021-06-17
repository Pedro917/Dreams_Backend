import {celebrate, Joi} from 'celebrate';

export function DreamValidation() {
    return celebrate({
        body: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string(),
            price: Joi.number().required(),
            url: Joi.string(),
            userId: Joi.number().required()
        })
    })
}