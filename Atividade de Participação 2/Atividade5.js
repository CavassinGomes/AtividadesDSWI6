/*
Atividade 5: Adicione uma função auxiliar prepend, que recebe um elemento e uma lista, e cria uma nova
lista que adiciona o elemento na frente da lista de entrada.
*/

function prepend(element, list){
    return {value: element, rest: list};
}

console.log(prepend(0, { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })); // { value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } }