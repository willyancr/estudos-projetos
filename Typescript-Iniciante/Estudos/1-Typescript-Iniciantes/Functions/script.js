"use strict";
//OVERLOAD
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
}
//exemplo
function toNumber(input) {
    if (typeof input === 'number') {
        return input;
    }
    if (typeof input === 'string') {
        const number = +input;
        if (!isNaN(number))
            return number;
    }
    throw 'O valor fornecido não pode ser convertido para um número';
}
console.log(toNumber('222'));
console.log(toNumber(222));
function arredondar(input) {
    if (typeof input === 'number') {
        return Math.ceil(input);
    }
    return Math.ceil(+input).toString();
}
console.log(arredondar('32.6'));
