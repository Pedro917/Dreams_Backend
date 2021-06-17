"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./database/connection");
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        dotenv_1.default.config();
        this.middlewares();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
        this.express.use(routes_1.default);
        this.express.use(celebrate_1.errors());
        this.express.use(morgan_1.default('dev'));
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map