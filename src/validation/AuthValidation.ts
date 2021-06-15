import {celebrate, Joi} from 'celebrate';

export function AuthValidation() {
    return celebrate({
        body: Joi.object().keys({
            email: Joi.string().required().email(),
            password: Joi.string().required(),
        })
    })
}