/*
Atividade 6: Crie uma funççao chamada nth, que recebe uma lista e um número, e retorna o elemento na
posição fornecida na lista (com zero referindo-se ao primeiro elemento) ou undefined quando não há tal
elemento.
*/

function nth (list, number){
    if (!list) return undefined;
    if (number == 0) return list.value;
    return nth(list.rest, number - 1);
}

console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 0)); // 1
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 1)); // 2
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 2)); // 3