 interface Produtos{
   nome: string;
   preco: number;
   garantia: string;
   seguroAcidente: boolean;
 }
 async function fetchProdutos() {
   const response = await fetch('https://api.origamid.dev/json/notebook.json');
   const data = await response.json();
   console.log(data)
   showProdutos(data);
 }

 function showProdutos(data: Produtos) {
   document.body.innerHTML = `
     <h2>Nome: ${data.nome}</h2>
     <p>R$ ${data.preco}</p>
     <p>Garantia: ${data.garantia} anos</p>
     <p>Seguro de acidente: ${data.seguroAcidente ? 'Sim' : 'Não'}</p>
   `
 }
