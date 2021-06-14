import {celebrate, Joi} from 'celebrate';

export function UserValidation() {
    return celebrate({
        body: Joi.object().keys({
            username: Joi.string().required(),
            email: Joi.string().required().email(),
            password: Joi.string().required(),
            age: Joi.number()
        })
    })
}