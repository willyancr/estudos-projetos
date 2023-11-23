import React from 'react';
import Produtos from './Produtos';

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
        preco: 11200,
      },
    ]);
  }

  function handleRemove() {
    const removeProduto = [...produtos];
    removeProduto.pop();
    setProdutos(removeProduto);
  }

  return (
    <>
      {produtos.map((produto) => (
        <Produtos
          key={produto.id}
          marca={produto.marca}
          modelo={produto.modelo}
          preco={produto.preco}
        />
      ))}
      <button onClick={handleAdd} style={{ marginRight: '10px' }}>
        Adicionar
      </button>
      <button onClick={handleRemove}>Remover</button>
    </>
  );
};

export default App;
