/*
Em Javascript, os named imports permitem que você importe funções, classes ou variáveis
específicas de um módulo. Em vez de importar todo o módulo, você seleciona apenas o que precisa, como
em const { func1, func2 } = require('./funcoes.js'); no padrão CommonJS e import { func1,
func2 } from './funcoes.js'; no padrão ES6.
Com base nisso, crie um módulo chamado conversor.js que exporte as seguintes funções:
1. quilogramaParaLibra(quilogramas): Recebe um valor em quilogramas e retorna o equivalente em
libras (1 quilograma = 2,20462 libras).
2. metroParaPe(metros): Recebe um valor em metros e retorna o equivalente em pés (1 metro =
3,28084 pés).
3. celsiusParaFahrenheit(celsius): Recebe uma temperatura em graus Celsius e retorna o
equivalente em graus Fahrenheit (fórmula: °F = (°C × 9/5) + 32).
*/


const quilogramaParaLibra = (quilogramas) => {
    return quilogramas * 2.20462;
} 

const metroParaPe = (metros) =>{
    return metros * 3.28084;
}

const celsiusParaFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

export { quilogramaParaLibra, metroParaPe, celsiusParaFahrenheit };