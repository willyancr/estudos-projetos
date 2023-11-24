import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Produtos = () => {
  const global = useContext(GlobalContext);
  if (global.dados === null) return null;
  return (
    <div>
      <h2>Produtos: </h2>
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default Produtos;
