"use strict";
//TYPE GUARD
function isCar(vehicle) {
    return 'make' in vehicle && 'model' in vehicle;
}
function displayCarInfo(vehicle) {
    if (isCar(vehicle)) {
        console.log(`This is a ${vehicle.make} ${vehicle.model}.`);
    }
    else {
        console.log('This is not a car.');
    }
}
//exemplo
function fetchProdutos() {
    fetch('https://api.origamid.dev/json/notebook.json')
        .then((response) => response.json())
        .then((data) => showProdutos(data));
}
function showProdutos(data) {
    if ('preco' in data) {
        document.body.innerHTML = `
     <h2>Nome: ${data.nome}</h2>
     <p>R$ ${data.preco + 100}</p>
   `;
    }
}
fetchProdutos();
