"use strict";
let x;
x = ['hello', 10]; // OK
// x = [10, "hello"]; // Erro
//exercício
async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const data = await response.json();
    someVendas(data);
    console.log(data);
}
fetchVendas();
function someVendas(data) {
    const totalVendas = data.reduce((total, item) => total + item[1], 0);
    document.body.innerHTML = `Total de vendas: R$: ${totalVendas}`;
}
