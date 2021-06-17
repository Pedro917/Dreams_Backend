"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function autoMiddleware(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ message: "Token não informado" });
    }
    var token = authorization.replace('Bearer', '').trim();
    try {
        var data = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        var id = data.id;
        req.userId = id;
        return next();
    }
    catch (_a) {
        return res.status(401).json({ message: "Token inválido" });
    }
}
exports.default = autoMiddleware;
//# sourceMappingURL=authMiddleware.js.map