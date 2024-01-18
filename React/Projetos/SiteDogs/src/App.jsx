import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import LostPassword from './Components/Login/LostPassword';
import Register from './Components/Login/Register';
import Dashboard from './Components/Account/Dashboard/HomeDashboard';
import Statistics from './Components/Account/Dashboard/Statistics';
import PostPhoto from './Components/Account/Dashboard/PostPhoto';
import Modal from './Components/Home/Modal';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Helper/ProtectedRoute';

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
          <Route path="/conta" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/conta/estatisticas" element={<ProtectedRoute><Statistics /></ProtectedRoute>} />
          <Route path="/conta/postar" element={<ProtectedRoute><PostPhoto /></ProtectedRoute>} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
