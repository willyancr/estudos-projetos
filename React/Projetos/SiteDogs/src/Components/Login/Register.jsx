import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../Input/Input';
import Button from '../Button/Button';

const schema = yup
  .object({
    usuario: yup.string().required('Usuário obrigatório'),
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(6, 'No mínimo 6 digitos'),
  })
  .required();

const Register = () => {
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

      <form className="loginForm efeito" onSubmit={handleSubmit(onSubmit)}>
        <h1>
          <span></span>Cadastre-se
        </h1>
        <label htmlFor="usuario">Usuário</label>
        <Input register={register} type="text" id="usuario" />
        <p className="messageForm">{errors.usuario?.message}</p>

        <label htmlFor="email">Email</label>
        <Input register={register} type="text" id="email" />
        <p className="messageForm">{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <Input register={register} type="password" id="password" />
        <p className="messageForm">{errors.password?.message}</p>

        <Button name="Cadastrar" type="submit" />
      </form>
    </section>
  );
};

export default Register;
