import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import LostPassword from './Components/Login/LostPassword';
import Register from './Components/Login/Register';
import Dashboard from './Components/Account/Dashboard/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/perdeu" element={<LostPassword />} />
        <Route path="/login/cadastrar" element={<Register />} />
        <Route path="/conta" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
