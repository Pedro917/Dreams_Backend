"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then(function () {
    console.log("📦 Conexão realizada com sucesso!");
});
//# sourceMappingURL=connection.js.map