import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return <section className={styles.login}>
    <div>
      <img src="../image/dog_login.png" alt="" className={styles.responsiveImage}/>
    </div>
    <form className={styles.loginForm}>
      <h1><span></span>Login</h1>
      <label htmlFor="usuario">Usuário</label>
      <input type="text" id='usuario' />
      <label htmlFor="senha">Senha</label>
      <input type="password" id='senha' />
      <button>Entrar</button>
    </form>

  </section>;
};

export default Login;
