import {connection} from "./connection";

(function createTableAdressUsers () {
    const error = (error: any) => { console.log(error.sqlMessage || error.message) }

    connection.raw(
`        CREATE TABLE IF NOT EXISTS users_adress (
            id INT AUTO_INCREMENT NOT NULL,
            cep VARCHAR(255) NOT NULL,
            logradouro VARCHAR(255) NOT NULL,
            numero int NOT NULL,
            complemento VARCHAR(255) NULL,
            bairro VARCHAR(255) NOT NULL,
            cidade VARCHAR(255) NOT NULL,
            estado CHAR(2) NOT NULL,
            PRIMARY KEY(id)
         );`
    )
    .then(()=> 
    {
        console.log("Tabela de endereço de usuários criada com sucesso!")
        connection.destroy();
    })
    .catch(error)
})();