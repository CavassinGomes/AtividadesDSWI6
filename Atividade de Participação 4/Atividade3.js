/*
Atividade 3. Crie uma função que retorne uma Promise seguindo as seguintes orientações:
Se o argumento da função não for um número, retorne uma promessa rejeitada instantaneamente e
forneça uma mensagem de "erro" aos dados (em uma string);
Se os dados forem um número ímpar, retorne uma promessa resolvida 1 segundo depois e forneça os
dados "ímpares" (em uma string);
Se os dados forem um número par, retorne uma promessa rejeitada 2 segundos depois e forneça os
dados "par" (em uma string).
*/

function retornaPromise(args){
    return new Promise((resolve, reject) => {
        if(typeof args !== 'number'){
            reject('Erro: O argumento deve ser um número');
        }
        else if(args % 2 !== 0){
            setTimeout(() => {
                resolve('Ímpar');
            }, 1000);
        }
        else{
            setTimeout(() => {
                reject('Par');
            }, 2000);
        }
    })
}

retornaPromise(4).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});