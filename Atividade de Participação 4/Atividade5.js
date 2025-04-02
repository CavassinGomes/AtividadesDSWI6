/*
Atividade 5. Considere a função a seguir. Ela é uma função de soma que precisará ter como resultado um
número par. Para isso, você precisará criar os seguintes callbacks:
callbackSucesso() = trará uma mensagem de sucesso, dizendo que a operação foi concluída com
sucesso e que o número somado é par.
callBackError() = trará uma mensagem de erro, dizendo que a operação falhou, trazendo um número
impar (resultado da soma).

Crie uma função que produza uma Promise para representar essa operação de somar.
Dica: Utilize uma promise com callback que recebe como parâmetros os objetos (resolve, reject).
*/

function callbackSucesso(resultado) {
    return `Operação concluída com sucesso! O número ${resultado} é par.`;
}

function callbackError(resultado) {
    return `Operação falhou! O número ${resultado} é ímpar.`;
}

function somar(num1, num2) {
    return new Promise((resolve, reject) => {
        let resultado = num1 + num2;
        if (resultado % 2 === 0) {
            resolve(callbackSucesso(resultado));
        } else {
            reject(callbackError(resultado));
        }
    });
}


somar(4, 6)
    .then(mensagem => console.log(mensagem))    
    .catch(erro => console.log(erro));

somar(3, 4)
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.log(erro));

