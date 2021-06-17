"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
typeorm_1.createConnection({
    type: 'postgres',
    url: 'postgres://rtcdvkwarqfmjr:9b5e565228ae52c7fb48f90797f91dbe11442c6dd7c41a8cb6b0009ade6b31fe@ec2-34-230-115-172.compute-1.amazonaws.com:5432/d103ivsl84covr'
})
    .then(function () {
    console.log("📦 Conexão realizada com sucesso!");
});
//# sourceMappingURL=connection.js.map