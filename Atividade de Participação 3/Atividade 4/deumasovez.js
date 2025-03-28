/*
Crie dois scripts no Node para ler um mesmo arquivo. Pode ser um arquivo html ou csv, por
exemplo. Em cada script, leia e imprima o arquivo utilizando os modos “de uma só vez” (numa função async)
e “em fluxo (stream)”, respectivamente. Execute cada script separadamente e perceba a diferença de tempo
para a saída dos dados. Como dica, utilize as instruções abaixo para verificar a diferença de tempo. Como a
leitura do stream é assíncrona, use algum evento para calcular o tempo final. Veja em
https://nodejs.org/api/stream.html Obs: Quando ler um arquivo com readFileSync use o método split(“\n”)
para separar em linhas o arquivo. Split retorna um array de Strings.
*/

const fs = require('fs');
const path = require('path');

const local = path.join(__dirname, 'arquivo.txt');

const init = Date.now();
const text = fs.readFileSync(local, 'utf-8');
const end = Date.now();

console.log(text);
console.log(`Tempo de execução: ${end- init}ms`);