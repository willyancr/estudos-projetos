import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className={`${styles.login} efeito`}>
      <div>
        <img
          src="../image/dog_login.png"
          alt=""
          className={styles.responsiveImage}
        />
      </div>
      <form className={styles.loginForm}>
        <h1>
          <span></span>Login
        </h1>
        <label htmlFor="usuario">Usuário</label>
        <input type="text" id="usuario" />
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" />
        <button>Entrar</button>

        <Link className={styles.lostPassaword}><p>Perdeu a Senha?</p></Link>

        <h1><span></span>Cadastre-se</h1>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <button>Cadastro</button>
      </form>
    </section>
  );
};

export default Login;
