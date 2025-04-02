/* 
Atividade 2. Implemente uma função chamada doAction que retona uma Promise. A promise deve ser
resolvida 2 segundos após a sua chamada e deve retornar a mensagem olá mundo.
*/

function doAction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Olá, mundo!');
        }, 2000);
    })
}

doAction().then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});