"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var dreamRepository_1 = __importDefault(require("../repositories/dreamRepository"));
var userRepository_1 = __importDefault(require("../repositories/userRepository"));
var DreamControllers = /** @class */ (function () {
    function DreamControllers() {
    }
    DreamControllers.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var dreamRepository, dreams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dreamRepository = typeorm_1.getCustomRepository(dreamRepository_1.default);
                        return [4 /*yield*/, dreamRepository.find()];
                    case 1:
                        dreams = _a.sent();
                        return [2 /*return*/, res.status(200).json(dreams)];
                }
            });
        });
    };
    DreamControllers.prototype.store = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, description, price, url, userId, userRepository, dreamRepository, user, dream;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, title = _a.title, description = _a.description, price = _a.price, url = _a.url, userId = _a.userId;
                        userRepository = typeorm_1.getCustomRepository(userRepository_1.default);
                        dreamRepository = typeorm_1.getCustomRepository(dreamRepository_1.default);
                        return [4 /*yield*/, userRepository.findOne(userId)];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({ message: "Usuário Inexistente" })];
                        }
                        dream = dreamRepository.create({
                            title: title,
                            description: description,
                            price: price,
                            url: url,
                            userId: userId,
                        });
                        return [4 /*yield*/, dreamRepository.save(dream)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.status(201).json(dream)];
                }
            });
        });
    };
    DreamControllers.prototype.edit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, description, price, url, dreamRepository, dreamId, dream, results;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, title = _a.title, description = _a.description, price = _a.price, url = _a.url;
                        dreamRepository = typeorm_1.getCustomRepository(dreamRepository_1.default);
                        dreamId = req.params.dreamId;
                        return [4 /*yield*/, dreamRepository.findOne(dreamId)];
                    case 1:
                        dream = _b.sent();
                        if (!dream) {
                            return [2 /*return*/, res.status(404).json({ message: "Sonho Inexistente" })];
                        }
                        dreamRepository.merge(dream, { title: title, description: description, price: price, url: url });
                        return [4 /*yield*/, dreamRepository.save(dream)];
                    case 2:
                        results = _b.sent();
                        return [2 /*return*/, res.status(200).json(results)];
                }
            });
        });
    };
    DreamControllers.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var dreamRepository, dreamId, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dreamRepository = typeorm_1.getCustomRepository(dreamRepository_1.default);
                        dreamId = req.params.dreamId;
                        return [4 /*yield*/, dreamRepository.findOne(dreamId)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({ message: "Sonho Inexistente" })];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        // 
                        return [4 /*yield*/, dreamRepository.delete(dreamId)];
                    case 3:
                        // 
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Sonho deletado do banco de dados" })];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_1 })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return DreamControllers;
}());
exports.default = new DreamControllers();
//# sourceMappingURL=DreamControllers.js.map