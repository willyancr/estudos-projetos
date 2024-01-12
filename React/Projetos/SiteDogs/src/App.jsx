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
import Statistics from './Components/Account/Dashboard/Statistics';
import PostPhoto from './Components/Account/Dashboard/PostPhoto';
import Modal from './Components/Home/Modal';
import { UserStorage } from './UserContext';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/perdeu" element={<LostPassword />} />
          <Route path="/login/cadastrar" element={<Register />} />
          <Route path="/conta" element={<Dashboard />} />
          <Route path="/conta/estatisticas" element={<Statistics />} />
          <Route path="/conta/postar" element={<PostPhoto />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
