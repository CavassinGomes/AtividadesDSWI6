/*
Atividade 3: Escreva uma função arrayToList que construa uma estrutura de lista como a mostrada quando
fornecido [1, 2, 3] como argumento.
*/

function arrayToList(array) {
    let list = null;
    for (let i = array.length -1 ; i >= 0; i--){
        list = {value: array[i], rest: list};
    }

    return list
}

console.log(arrayToList([1, 2, 3])); // { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }