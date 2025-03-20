/*
Atividade 8. Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso
*/

function dateToText(date){
    let dateArray = date.split('/');
    let day = dateArray[0];
    let month = dateArray[1];
    let year = dateArray[2];

    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
                  'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${day} de ${months[month - 1]} de ${year}`;                  
}

console.log(dateToText('01/01/2021')); // 01 de Janeiro de 2021
console.log(dateToText('19/03/2025')); // 19 de Março de 2025