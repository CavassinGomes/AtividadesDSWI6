/*
server.js: script principal. Deve importar a classe e as funções de user.js, importar o módulo express e
criar um servidor web simples para realizar um get. O caminho get deve ser acessível para o caminho
localhost:8080/user_data e receber como retorno a mensagem de texto User's name is
Amazing and User's age is 100;
Depois, inicialize o servidor com o comando node server.js e realize um teste utilizando o navegador da
sua preferência.
*/

const express = require('express');
const { User, printAge, printName } = require('./user');
const app = express().use(express.json());
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
}
);

const user1 = new User('Amazing', 100);

app.get('/user_data', (req, res) => {
    res.status(200).send(`${printName(user1)} and ${printAge(user1)}`);
})
