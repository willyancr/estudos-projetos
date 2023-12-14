import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import '../public/app.css';
import Header from './Components/Header/Header';
import Produto from './Components/Produtos/Produto';
import Contato from './Components/Contato/Contato';
import ProdutoDescricao from './Components/Produtos/ProdutoDescricao';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produto />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produto/:id" element={<ProdutoDescricao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
