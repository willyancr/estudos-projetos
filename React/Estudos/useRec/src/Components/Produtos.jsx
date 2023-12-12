import React from 'react';
import Button from './Button';

const Produtos = ({ marca, modelo, preco, onRemove, id }) => {
  return (
    <div>
      <h2>Smartphone</h2>
      <p>Marca: {marca}</p>
      <p>Modelo: {modelo}</p>
      <p>Preço: R$ {preco}</p>
      <Button onClick={() => onRemove(id)} text={'Remover'} />
    </div>
  );
};

export default Produtos;
