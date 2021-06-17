"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
function DreamValidation() {
    return celebrate_1.celebrate({
        body: celebrate_1.Joi.object().keys({
            title: celebrate_1.Joi.string().required(),
            description: celebrate_1.Joi.string(),
            price: celebrate_1.Joi.number().required(),
            url: celebrate_1.Joi.string(),
            userId: celebrate_1.Joi.number().required()
        })
    });
}
exports.DreamValidation = DreamValidation;
//# sourceMappingURL=DreamValidation.js.map