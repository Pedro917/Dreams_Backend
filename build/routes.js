"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authMiddleware_1 = __importDefault(require("./middlewares/authMiddleware"));
var AuthController_1 = __importDefault(require("./controllers/AuthController"));
var UserController_1 = __importDefault(require("./controllers/UserController"));
var DreamControllers_1 = __importDefault(require("./controllers/DreamControllers"));
var AuthValidation_1 = require("./validation/AuthValidation");
var UserValidation_1 = require("./validation/UserValidation");
var DreamValidation_1 = require("./validation/DreamValidation");
var routes = express_1.Router();
routes.get('/', function (req, res) {
    return res.json({
        version: "v1",
        aplication: "Api Node"
    });
});
routes.post('/oauth/token', AuthValidation_1.AuthValidation(), AuthController_1.default.auth);
routes.get('/users', authMiddleware_1.default, UserController_1.default.index);
routes.post('/users', [authMiddleware_1.default, UserValidation_1.UserValidation()], UserController_1.default.store);
routes.put('/users/:userId', authMiddleware_1.default, UserController_1.default.edit);
routes.delete('/users/:userId', authMiddleware_1.default, UserController_1.default.delete);
routes.get('/dreams', authMiddleware_1.default, DreamControllers_1.default.index);
routes.post('/dreams', [authMiddleware_1.default, DreamValidation_1.DreamValidation()], DreamControllers_1.default.store);
routes.put('/dreams/:dreamId', authMiddleware_1.default, DreamControllers_1.default.edit);
routes.delete('/dreams/:dreamId', authMiddleware_1.default, DreamControllers_1.default.delete);
exports.default = routes;
//# sourceMappingURL=routes.js.map