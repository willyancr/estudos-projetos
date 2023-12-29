import React from 'react';
import './LoginGlobal.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../Input/Input';
import Button from '../Button/Button';

const schema = yup
  .object({
    usuario: yup.string().required('Usuário obrigatório'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(6, 'No mínimo 6 digitos'),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  function onSubmit(event) {
    navigate('/conta');
    console.log(event);
  }

  return (
    <section className="login">
      <div>
        <img
          src="../image/dog_login.png"
          alt=""
          className="responsiveImageLogin"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={'loginForm efeito'}>
        <h1 className="title">
          <span></span>Login
        </h1>

        <label htmlFor="usuario">Usuário</label>
        <Input register={register} id="usuario" type="text" />
        <p className="messageForm">{errors.usuario?.message}</p>

        <label htmlFor="password">Senha</label>
        <Input register={register} id="password" type="password" />
        <p className="messageForm">{errors.password?.message}</p>

        <Button name="Entrar" type="submit" />

        <Link to="/login/perdeu" className="lostPassaword">
          <p>Perdeu a Senha?</p>
        </Link>

        <h1 className="title">
          <span></span>Cadastre-se
        </h1>
        <p style={{ marginBottom: '1rem' }}>
          Ainda não possui conta? Cadastre-se no site.
        </p>
        <Link to="/login/cadastrar">
          <Button name="Cadastrar" />
        </Link>
      </form>
    </section>
  );
};

export default Login;
