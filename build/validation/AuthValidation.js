"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
function AuthValidation() {
    return celebrate_1.celebrate({
        body: celebrate_1.Joi.object().keys({
            email: celebrate_1.Joi.string().required().email(),
            password: celebrate_1.Joi.string().required(),
        })
    });
}
exports.AuthValidation = AuthValidation;
//# sourceMappingURL=AuthValidation.js.map