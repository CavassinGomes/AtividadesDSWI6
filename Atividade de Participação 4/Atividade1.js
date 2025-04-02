/*
Crie uma função que após 5 segundos dobre o resultado de um número passado como
argumento. Essa função deverá retornar uma Promise. Use o setTimeOut como temporizador.
*/

function dobrarEmSegundos(x){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof x !== 'number') {
                reject('O argumento deve ser um número');
            } else {
                resolve(x * 2);
            }
        }, 5000);
    })
}

dobrarEmSegundos(5)
    .then(resultado => {
        console.log(`Resultado: ${resultado}`);
    })
    .catch(erro => {
        console.error(`Erro: ${erro}`);
    });