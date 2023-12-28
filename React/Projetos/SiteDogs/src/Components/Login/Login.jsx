import React from 'react';
import styles from './Login.module.css';
import './LoginGlobal.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='login'>
      <div>
        <img
          src="../image/dog_login.png"
          alt=""
          className='responsiveImageLogin'
        />
      </div>
      <form className={`${styles.loginForm} loginForm efeito`}>
        <h1>
          <span></span>Login
        </h1>
        <label htmlFor="usuario">Usuário</label>
        <input type="text" id="usuario" />
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" />
        <button>Entrar</button>

        <Link to='/login/perdeu' className={styles.lostPassaword}><p>Perdeu a Senha?</p></Link>

        <h1><span></span>Cadastre-se</h1>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to='/login/cadastrar' className={styles.btnRegister}><button>Cadastro</button></Link>
      </form>
    </section>
  );
};

export default Login;
