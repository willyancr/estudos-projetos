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
    else {
        console.log('Não é uma string');
    }
}
//exemplo
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log(data);
    handleCurso(data);
}
fetchCursos();
function isCurso(value) {
    return (value instanceof Array &&
        value.every((item) => item instanceof Object &&
            'nome' in item &&
            'horas' in item &&
            'tags' in item));
}
function handleCurso(data) {
    if (isCurso(data)) {
        data.forEach((item) => {
            document.body.innerHTML += `
        <h2>Nome: ${item.nome}</h2>
        <p>Horas: ${item.horas}</p>
        <p>Tags: ${item.tags.join(', ')}</p>
      `;
        });
    }
}
