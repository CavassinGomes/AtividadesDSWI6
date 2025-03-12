//Atividade 1. Verifique o tipo das diferentes variáveis usando typeof:
let variable1 = 10;
let variable2 = "hello";
let variable3 = true;

console.log("Variavel 1 :", typeof variable1);
console.log("Variavel 2 :", typeof variable2);
console.log("Variavel 3 :", typeof variable3);

console.log("-------------------------------------------------");

//Atividade 2. Acesse as propriedades do objeto a seguir:
let person = {
    name: "John",
    age: 30,
    city: "New York"
    };

console.log(person.name);
console.log(person.age);
console.log(person.city);''

console.log("-------------------------------------------------");

//Atividade 3. Verifique o uso de var, let e const e veja as saídas do código em um script. Explique o porque do resultado apresentado
var a = 1;
let b = 2;
const c = 3;
a = 10 // Qual a saída?
console.log(a);
b = 20 // Qual a saída?
console.log(b);
// c = 30 // Qual a saída? 
// console.log(c); // -> comentado para que não gere erro de tentar trocar o valor de uma constante (TypeError: Assignment to constant variable.)

console.log("-------------------------------------------------");

// Atividade 4. Verifique quais dos valores abaixo são Truthy e Falsy. Faça-o utilizando a função Boolean(valor) e imprima o resutado:

const values = [10, true, false, {}, undefined, null, '', 'abba', 0];
values.forEach(value => {
    console.log(value, Boolean(value) ? 'truthy' : 'falsy');
});

console.log("-------------------------------------------------");

// Atividade 5. Verifique as comparações a seguir com os operadores == e ===. Qual será a saída para cada um deles? Teste em um script para ver se acertou

const values2 = [5 == "5", 5 === "5", 5 == 5, 5 === 5];
values2.forEach(value => {
    console.log(value);
})

console.log("-------------------------------------------------");

// Atividade 6. Faça uma atribuição via desestruturação utilizando o objeto abaixo:

let person2 = { name: "Alice", age: 25 };

let { name, age } = person2;

console.log(name); // Alice
console.log(age);  // 25

console.log("-------------------------------------------------");

// Atividade 7. Defina uma função utilizando function e faça o código abaixo funcionar:

function add(num1, num2) {
    return (typeof num1 != "number" || typeof num2 != "number") ? "Não é um número" : num1 + num2;
}
console.log(add(2, 3)); // 5

console.log("-------------------------------------------------");

// Atividade 8. Defina uma função utilizando Arrow Function e faça o código abaixo funcionar:
const multiply = (num1, num2) => {
    return (typeof num1 != "number" || typeof num2 != "number") ? "Não é um número" : num1 * num2;
}
console.log(multiply(2, 3)); // 6

console.log("-------------------------------------------------");

// Atividade 9. Utilize as funções das Atividades 7 e 8 e cria uma nova função que as receba como parâmetro. A função deve mostrar o valor resultante:

function executeFunction(func, num1, num2) {
    return func(num1, num2);
}

console.log(executeFunction(add, 2, 3)); // 5
console.log(executeFunction(multiply, 2, 3)); // 6