import React from 'react'

const Produtos = ({marca, modelo, preco, onRemove, id}) => {
  return (
    <div>
      <h2>Smartphone</h2>
      <p>Marca: {marca}</p>
      <p>Modelo: {modelo}</p>
      <p>Preço: R$ {preco}</p>
      <button onClick={() => onRemove(id)}>Remover</button>
    </div>
  )
}

export default Produtos