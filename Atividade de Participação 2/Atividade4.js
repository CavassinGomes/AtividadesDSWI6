/*
Atividade 4: Também escreva uma função listToArray que produza um array a partir de uma lista.
*/

function listToArray(list){
    let array = [];
    for (let node = list; node; node = node.rest){
        array.push(node.value);
    }

    return array;
}

console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })); // [1, 2, 3]