function retorno<T>(param: T): T {
  return param;
}
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ['banana', 'maca', 'laranja', 'abacaxi', 'abacate'];
function mostrar<T>(param: T[]) {
  return param.slice(0, 3);
}
console.log(mostrar(numero));
console.log(mostrar(frutas));

function tipoDado<T>(param: T) {
  const resultados = {
    dado: param,
    tipo: typeof param,
  };
  return resultados;
}
console.log(tipoDado(true));

function extrairTexto<T extends HTMLElement>(elemento: T) {
  return {
    texto: elemento.innerText,
    elemento,
  };
}
const a = document.querySelector('a');
if (a) console.log(extrairTexto(a).elemento.href);

async function getFecth<T>(url: RequestInfo): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}
interface Notebook {
  nome: string;
  preco: number;
}
async function handleData() {
  const curso = await getFecth<Notebook>(
    'https://api.origamid.dev/json/notebook.json',
  );
  console.log(curso);
}
handleData()