import React from 'react';
import Titulo from './Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <div key={produto.nome} style={{ border: '1px solid', margin: '10px' }}>
          <p style={{padding:'0 15px'}}>{produto.nome}</p>
          <ul>
            {produto.propriedades.map((propriedade) => (
              <li>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
