"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
function UserValidation() {
    return celebrate_1.celebrate({
        body: celebrate_1.Joi.object().keys({
            username: celebrate_1.Joi.string().required(),
            email: celebrate_1.Joi.string().required().email(),
            password: celebrate_1.Joi.string().required(),
            age: celebrate_1.Joi.number()
        })
    });
}
exports.UserValidation = UserValidation;
//# sourceMappingURL=UserValidation.js.map