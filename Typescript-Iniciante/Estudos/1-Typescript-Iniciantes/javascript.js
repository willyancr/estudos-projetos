"use strict";
const input = document.querySelector('input');
const p = document.querySelector('p');
const total = localStorage.getItem('total');
input.value = total ?? '';
calcularGanho(input.value);
function calcularGanho(value) {
    p.innerText = `Total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    const value = +input.value;
    localStorage.setItem('total', value.toString());
    calcularGanho(value);
}
input.addEventListener('keyup', totalMudou);
