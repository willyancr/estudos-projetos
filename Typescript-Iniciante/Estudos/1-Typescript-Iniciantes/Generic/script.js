"use strict";
//exemplo
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ['banana', 'maca', 'laranja', 'abacaxi', 'abacate'];
function mostrar(param) {
    return param.slice(0, 3);
}
console.log(mostrar(numero));
console.log(mostrar(frutas));
//exemplo
function tipoDado(param) {
    const resultados = {
        dado: param,
        tipo: typeof param,
    };
    return resultados;
}
console.log(tipoDado(true));
//exemplo
function extrairTexto(elemento) {
    return {
        texto: elemento.innerText,
        elemento,
    };
}
const a = document.querySelector('a');
if (a)
    console.log(extrairTexto(a).elemento.href);
//exemplo
async function getFecth(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const curso = await getFecth('https://api.origamid.dev/json/notebook.json');
    console.log(curso);
}
handleData();
const aluno = {
    nome: 'Willyan',
    sobrenome: 'Santos',
    idade: 20,
};
console.log(aluno);
