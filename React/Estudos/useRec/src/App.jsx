import React from 'react';
import Produtos from './ListaDinamica/Produtos';

const App = () => {
  const [produtos, setProdutos] = React.useState([
    {
      id: Math.random(),
      marca: 'Samsung',
      modelo: 'S23 Ultra',
      preco: 8500,
    },
  ]);

  function handleAdd() {
    setProdutos([
      ...produtos,
      {
        id: Math.random(),
        marca: 'Apple',
        modelo: 'Iphone 15 Pro Max',
        preco: Math.random() * 10000,
      },
    ]);
  }

  function handleRemove(id) {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }

  return (
    <>
      <h1>Produtos</h1>
      <button onClick={handleAdd} style={{ marginRight: '10px' }}>
        Adicionar
      </button>
      <hr />
      {produtos.map((produto) => (
        <Produtos
          key={produto.id}
          id={produto.id}
          marca={produto.marca}
          modelo={produto.modelo}
          preco={produto.preco}
          onRemove={handleRemove}
        />
      ))}
    </>
  );
};

export default App;