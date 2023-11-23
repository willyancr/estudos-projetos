import React from 'react'

const Produtos = ({marca, modelo, preco}) => {
  return (
    <div>
      <h2>Smartphone</h2>
      <p>Marca: {marca}</p>
      <p>Modelo: {modelo}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  )
}

export default Produtos