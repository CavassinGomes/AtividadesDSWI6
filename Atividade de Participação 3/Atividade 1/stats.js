/*
Considere o programa em javascript abaixo que faz cáculos estatíticos (stats) de média (mean) e
desvio padrão (standard deviation - stddev).

Transforme todo o código do objeto stats em um módulo chamado stats.js e o importe em um script
chamado index.js com as duas últimas linhas do código acima. Execute para verificar se funciona. Use a
notação de módulos CommonJS ou ES6.
*/

const soma = (x, y) => x + y;

const quadrado = x => x * x;

function media(dados) {
    return dados.reduce(soma) / dados.length;
}
function desvioPadrão(dados) {
    let médiaCalculada = media(dados);
    return Math.sqrt(
        dados.map(x => x - médiaCalculada).map(quadrado).reduce(soma) /
            (dados.length - 1)
    );
}

module.exports = { media, desvioPadrão, soma, quadrado };