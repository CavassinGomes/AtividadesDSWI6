/*
Atividade 10. Suponha que o método toUpperCase não existisse em uma string. Implemente uma função
toUpperCase que retorna o mesmo resultado da original.
*/

function toUpperCase(string){
    let newStr = '';
    for(let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i);
        if (code < 97 || code > 122){
            newStr += string[i];
        }else{
            newStr += String.fromCharCode(code - 32);
        }
    }
    return newStr;
}

console.log(toUpperCase('hello')); // HELLO
console.log(toUpperCase('Hello World in Js')); // HELLO WORLD IN JS