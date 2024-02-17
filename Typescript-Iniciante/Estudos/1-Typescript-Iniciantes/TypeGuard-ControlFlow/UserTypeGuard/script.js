"use strict";
//exemplo
//função para verificar se é string
function isString(value) {
    return true;
}
function handleData(data) {
    if (isString(data)) {
        console.log(data.toLocaleLowerCase());
    }
}
handleData('EU SOU WILLYAN');
