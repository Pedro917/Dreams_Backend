"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = __importDefault(require("../models/User"));
var Profile = /** @class */ (function () {
    function Profile() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Profile.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Profile.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Profile.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Profile.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Profile.prototype, "url", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Profile.prototype, "userId", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            type: "timestamp",
            default: function () { return "CURRENT_TIMESTAMP(6)"; },
        }),
        __metadata("design:type", Date)
    ], Profile.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({
            type: "timestamp",
            default: function () { return "CURRENT_TIMESTAMP(6)"; },
            onUpdate: "CURRENT_TIMESTAMP(6)",
        }),
        __metadata("design:type", Date)
    ], Profile.prototype, "updated_at", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.default; }, function (user) { return user.dreams; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", User_1.default)
    ], Profile.prototype, "user", void 0);
    Profile = __decorate([
        typeorm_1.Entity("dreams")
    ], Profile);
    return Profile;
}());
exports.default = Profile;
//# sourceMappingURL=Dream.js.map