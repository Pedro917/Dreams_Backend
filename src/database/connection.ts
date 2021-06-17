import {createConnection} from "typeorm";

createConnection({
    type: 'postgres',
    url: 'postgres://rtcdvkwarqfmjr:9b5e565228ae52c7fb48f90797f91dbe11442c6dd7c41a8cb6b0009ade6b31fe@ec2-34-230-115-172.compute-1.amazonaws.com:5432/d103ivsl84covr'
})
    .then(() => {
        console.log("📦 Conexão realizada com sucesso!")
    })