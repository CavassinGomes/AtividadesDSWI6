/*
Crie um programa javascript que receba como argumento no comando “node meuScript.js
meuarquivo.txt”. O programa deve ler o arquivo linha por linha a apresentá-las no console.
Dicas: Pesquisa sobre o módulo “readline”. Você pode integrá-lo com o módulo “fs” para ler linha à linha.
*/

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const archiveName = process.argv[2];

if (!archiveName) {
    console.error('Erro: Você deve fornecer o nome do arquivo como argumento.');
    process.exit(1);
}

const filePath = path.join(__dirname, archiveName);

if (!fs.existsSync(filePath)) {
    console.error(`Erro: O arquivo "${archiveName}" não foi encontrado.`);
    process.exit(1);
}

const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(line    );
});

rl.on('error', (err) => {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
});

