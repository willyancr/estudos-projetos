
interface Produtos {
  nome: string;
  preco: number;
}

function dadosProdutos(produtos: Produtos){
  console.log(produtos.nome, produtos.preco);
}

console.log(dadosProdutos({nome: 'Notebook', preco: 200}));
