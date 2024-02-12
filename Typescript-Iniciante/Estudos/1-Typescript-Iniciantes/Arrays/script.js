"use strict";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}
function mostrarCursos(data) {
    data.forEach((curso) => {
        const colorStyle = curso.nivel === 'iniciante' ? 'color: blue' : 'color: red';
        document.body.innerHTML += `
      <div>
        <h2 style="${colorStyle}">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Gratuito: ${curso.gratuito === true ? 'Sim' : 'Não'}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>IAulas: ${curso.idAulas.join(', ')}</p>
        <p> Nivel: ${curso.nivel}</p>
      </div>
    `;
    });
}
fetchCursos();
