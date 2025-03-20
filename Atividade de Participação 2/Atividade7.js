/*
Atividade 7: Utilize o método reduce em combinação com o método concat para "achatar" (Flattening) um
array de arrays em um único array que contém todos os elementos dos arrays originais.
*/

function flatten(array){
    if (!Array.isArray(array)) return null;
    return array.reduce((a,b) => a.concat(b), []);
}

console.log(flatten([[1, 2, 3], [4, 5], [6]])); // [1, 2, 3, 4, 5, 6]
