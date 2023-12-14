import React from 'react';
import './ProdutoDescricao.css';

const ProdutoDescricao = () => {
  return (
    <div className="produtoDescricao">
      <img
        src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div>
        <h2>Notebook</h2>
        <p className="produtoDescricaoPreco">R$ 2300</p>
        <p>notebook em geral</p>
      </div>
    </div>
  );
};

export default ProdutoDescricao;
