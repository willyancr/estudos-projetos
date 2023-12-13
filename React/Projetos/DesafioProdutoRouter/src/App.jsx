import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import '../public/app.css'
import Header from './Components/Header/Header';
import Produto from './Components/Produtos/Produto';
import Contato from './Components/Contato/Contato';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Produto />}/>
      <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
