"use strict";
function retorno(param) {
    return param;
}
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ['banana', 'maca', 'laranja', 'abacaxi', 'abacate'];
function mostrar(param) {
    return param.slice(0, 3);
}
console.log(mostrar(numero));
console.log(mostrar(frutas));
function tipoDado(param) {
    const resultados = {
        dado: param,
        tipo: typeof param,
    };
    return resultados;
}
console.log(tipoDado(true));
function extrairTexto(elemento) {
    return {
        texto: elemento.innerText,
        elemento,
    };
}
const a = document.querySelector('a');
if (a)
    console.log(extrairTexto(a).elemento.href);
async function getFecth(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const curso = await getFecth('https://api.origamid.dev/json/notebook.json');
    console.log(curso);
}
handleData();
