import {createConnection} from "typeorm";

createConnection({
    type: 'mysql',
    url: 'mysql://root:!Admin123456@127.0.0.1:3306/dreams'
})
    .then(() => {
        console.log("📦 Conexão realizada com sucesso!")
    })