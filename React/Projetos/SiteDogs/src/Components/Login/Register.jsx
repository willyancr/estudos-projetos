import React from 'react';

const Register = () => {
  return (
    <section className="login">
      <div>
        <img
          src="../image/dog_login.png"
          alt=""
          className="responsiveImageLogin"
        />
      </div>
      <form className="loginForm efeito">
        <h1>
          <span></span>Cadastre-se
        </h1>
        <label htmlFor="usuario">Usuário</label>
        <input type="text" id="usuario" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />
        <button>Cadastrar</button>
      </form>
    </section>
  );
};

export default Register;
