import React from 'react';
import './LoginGlobal.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../Input/Input';
import Button from '../Button/Button';

const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('Digite seu email'),
  })
  .required();

const LostPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(event) {
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
      <form onSubmit={handleSubmit(onSubmit)} className="loginForm efeito">
        <h1 className='title'>
          <span></span>Perdeu a senha?
        </h1>

        <label htmlFor="email">Email </label>
        <Input register={register} id="email" type="text" />
        <p className="messageForm">{errors.email?.message}</p>

        <Button name="Recuperar" type="submit" />
      </form>
    </section>
  );
};

export default LostPassword;
