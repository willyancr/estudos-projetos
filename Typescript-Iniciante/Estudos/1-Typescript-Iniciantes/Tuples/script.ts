let x: [string, number];
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

type Produto = [string, number];
function someVendas(data: Produto[]) {
  const totalVendas = data.reduce((total, item) => total + item[1], 0);

  document.body.innerHTML = `Total de vendas: R$: ${totalVendas}`;
}
