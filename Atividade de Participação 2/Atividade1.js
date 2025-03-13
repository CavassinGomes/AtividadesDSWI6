/*
Escreva uma classe Vec que represente um vetor no espaço bidimensional (Use qualquer uma
das notações apresentadas em aula). Ela recebe parâmetros x e y (números), que deve salvar como
propriedades com os mesmos nomes.
Forneça ao protótipo/classe de Vec dois métodos, plus e minus, que recebem outro vetor como parâmetro e
retornam um novo vetor que contém a soma ou diferença dos valores x e y dos dois vetores (o vetor atual e o
parâmetro).
Adicione uma propriedade getter length ao protótipo que calcula o comprimento do vetor - isto é, a distância
do ponto (x, y) à origem (0, 0).
Teste sua classe criando dois objetos com new e demonstrando as saídas das operações dos métodos
implementados na classe.
*/

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    toString() {
        return `Vec { x: ${this.x}, y: ${this.y} }`;
    }
}

let vec1 = new Vec(1, 2);
let vec2 = new Vec(5, 3);

console.log(vec1.plus(vec2).toString()); 
console.log(vec1.minus(vec2).toString()); 
console.log(vec1.length); 
console.log(vec2.length); 
