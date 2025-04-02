/*
Atividade 4. Considere o seguinte código
firstPromise(numInt)
.then(data => secondPromise(data))
.then(data =>{
console.log(data)
}).catch(e => {
console.log(e)
})
Implemente as funções acima que retornam Promises seguindo a seguinte lógica:
firstPromise: deve ser resolvido se numInt é maior que 2 e rejeitada caso contrário;
secondPromise: deve ser resolvida se data + 1 é par e rejeitada caso contrário.
*/

function firstPromise(numInt){
    return new Promise((resolve, reject) => {
        if(numInt > 2){
            resolve(numInt);
        }
        else{
            reject('Erro: O número deve ser maior que 2');
        }
    })
}

function secondPromise(data){
    return new Promise((resolve, reject) => {
        if((data + 1) % 2 === 0){
            resolve(data);
        }
        else{
            reject('Erro: O número + 1 deve ser par');
        }
    })
}

let numInt = 21;

firstPromise(numInt)
    .then(data => secondPromise(data))
    .then(data =>{
    console.log(data)
}).catch(e => {
    console.log(e)
})