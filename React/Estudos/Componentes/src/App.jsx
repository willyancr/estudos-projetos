import React from 'react';
import Header from './Desafio/Header';
import Produtos from './Desafio/Produtos';
import Home from './Desafio/Home';

const App = () => {
  const { pathname } = window.location;
  let Pagina = Home;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  }

  return (
    <div>
      <Header />
      <Pagina />
    </div>
  );
};

export default App;
