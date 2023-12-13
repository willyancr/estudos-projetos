import React from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import PordutoCustomizado from './PordutoCustomizado';

const Produto = () => {
  const produto = useParams();
  return (
    <div>
      <h1>Produto: {produto.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<PordutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
