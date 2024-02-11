"use strict";
const input = document.querySelector('input');
const p = document.querySelector('p');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(+input.value);
}
function calcularGanho(value) {
    if (p)
        p.innerText = `Total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    if (input) {
        const value = +input.value;
        localStorage.setItem('total', value.toString());
        calcularGanho(value);
    }
}
if (input)
    input.addEventListener('keyup', totalMudou);
