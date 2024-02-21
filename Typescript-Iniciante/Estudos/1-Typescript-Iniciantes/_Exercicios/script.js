"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é
//compativel com UserData
// 7 - Ao refresh da pagina, preencha os valores de localStorage (caso seja
//UserData) no formulário e em window. UserData
window.UserData = window.UserData || {}; // Cria o objeto UserData no window, caso não exista um objeto UserData no window criado anteriormente
//type guard
function isUserData(value) {
    if (value &&
        value instanceof Object &&
        ('nome' in value || 'email' in value || 'cpf' in value)) {
        return true;
    }
    else {
        return false;
    }
}
const form = document.querySelector('form');
form.addEventListener('keyup', handleForm);
function handleForm(event) {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    window.UserData[id] = value; // Define o valor do elemento de input no objeto UserData
    // Verifica se o objeto UserData é válido
    if (isUserData(window.UserData)) {
        localStorage.setItem('UserData', JSON.stringify(window.UserData)); // Armazena o objeto UserData no armazenamento local
        console.log(window.UserData);
    }
}
window.addEventListener('load', loadDados);
function valideJSON() {
    try {
        JSON.parse(localStorage.getItem('UserData'));
    }
    catch (e) {
        return false;
    }
    return true;
}
function loadDados() {
    const savedUserData = localStorage.getItem('UserData'); // Obtém os dados salvos do localStorage
    if (savedUserData && valideJSON()) {
        window.UserData = JSON.parse(savedUserData); // Converte os dados salvos em formato JSON para o objeto window.UserData
        if (isUserData(window.UserData)) {
            // Itera sobre as entradas do objeto window.UserData
            Object.entries(window.UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                input.value = value;
                // window.UserData[key] = value;
            });
        }
    }
}
