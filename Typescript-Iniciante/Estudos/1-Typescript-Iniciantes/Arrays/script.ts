interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string;
  idAulas: number;
  nivel: string;
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  console.log(data);
  mostrarCursos(data);
}

function mostrarCursos(data: Curso) {
  if (data.nivel === 'iniciante') {
    document.body.innerHTML = `
      <h2>Nome: ${data.nome}</h2>
      <p>Gratuito: ${data.gratuito || 'Não'}</p>
      <p>Aulas: ${data.aulas}</p>
      <p>Nivel: ${data.nivel}</p>
      <p>Azul</p>
    `;
  } else {
    document.body.innerHTML = `
      <h2>Nome: ${data.nome}</h2>
      <p>Gratuito: ${data.gratuito || 'Não'}</p>
      <p>Aulas: ${data.aulas}</p>
      <p>Nivel: ${data.nivel}</p>
      <p>Vermelho</p>
    `;
  }
}

fetchCursos();
