import React from 'react';
import './LoginGlobal.css';

const LostPassword = () => {
  return (
    <section className="login">
      <div>
        <img
          src="../image/dog_login.png"
          alt=""
          className="responsiveImageLogin"
        />
      </div>
      <form className='loginForm efeito'>
        <h1><span></span>Perdeu a senha?</h1>
        <label htmlFor="email">Email / Usuário</label>
        <input type="text" id="email" />
        <button>Enviar Email</button>
      </form>
    </section>
  );
};

export default LostPassword;
