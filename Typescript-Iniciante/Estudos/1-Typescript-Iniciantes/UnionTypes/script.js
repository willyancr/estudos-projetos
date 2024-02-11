"use strict";
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
