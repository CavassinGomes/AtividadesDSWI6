/*
Atividade 2. O operador == compara objetos pela identidade. Mas às vezes é preferível comparar os valores
de suas propriedades reais. Escreva uma função chamada deepEqual que recebe dois valores e retorna true
apenas se eles forem o mesmo valor ou forem objetos com as mesmas propriedades, onde os valores das
propriedades são iguais quando comparados com uma chamada recursiva a deepEqual.
Para descobrir se os valores devem ser comparados diretamente (use o operador === para isso) ou se suas
propriedades devem ser comparadas, você pode usar o operador typeof.
Se ele produzir "object" para ambos os valores, você deve fazer uma comparação profunda.
Você precisa levar em conta uma exceção boba: por causa de um acidente histórico, typeof null
também produz "object".
A função Object.keys será útil quando você precisar percorrer as propriedades dos objetos para
compará-las.
Os objetos que a função deepEqual são os definidos pela notação {"param1": "valor1",
"param2": "valor"}.
*/

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") return false;

    let keysObj1 = Object.keys(obj1), keysObj2 = Object.keys(obj2);

    if (keysObj1.length != keysObj2.length) return false;

    for (let key of keysObj1) {
        if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}

let obj1 = { param1: "valor1", param2: "valor2" };
let obj2 = { param1: "valor1", param2: "valor2" };
let obj3 = { param1: "valor1", param2: "valor3" };

console.log(deepEqual(obj1, obj2)); 
console.log(deepEqual(obj1, obj3)); 
console.log(deepEqual(obj2, obj3)); 
console.log(deepEqual(obj1, null)); 