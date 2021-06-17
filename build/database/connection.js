"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
typeorm_1.createConnection({
    type: 'mysql',
    url: 'mysql://root:!Admin123456@127.0.0.1:3306/dreams'
})
    .then(function () {
    console.log("📦 Conexão realizada com sucesso!");
});
//# sourceMappingURL=connection.js.map