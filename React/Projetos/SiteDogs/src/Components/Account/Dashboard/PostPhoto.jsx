import React from 'react';
import HeaderDashboard from './HeaderDashboard';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import styles from './PostPhoto.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import useFetch from '../../../Hooks/useFetch';
import { PHOTO_POST } from '../../../api';

const schema = yup
  .object({
    nome: yup.string().required('Nome obrigatório'),
    peso: yup.number().required('Peso obrigatório'),
    idade: yup.number().required('Idade obrigatório'),
  })
  .required();

const PostPhoto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [nome, setName] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState({});
  const { error, loading, request, data } = useFetch();

  function handlePost(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImg({ target }) {
    setImg({
      raw: target.files[0],
    });
  }
  return (
    <>
      <HeaderDashboard title="Poste sua foto" />
      <section className={`${styles.main} container dashboardMain efeito`}>
        <form className={styles.mainForm} onSubmit={handleSubmit(handlePost)}>
          {/* Nome */}
          <label htmlFor="nome">Nome</label>
          <Input
            register={register}
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="messageForm">{errors.nome?.message}</p>

          {/* Peso */}
          <label htmlFor="peso">
            Peso <span>(kg)</span>
          </label>
          <Input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <p className="messageForm">{errors.peso?.message}</p>

          {/* Idade */}
          <label htmlFor="idade">Idade</label>
          <Input
            type="number"
            id="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <p className="messageForm">{errors.idade?.message}</p>

          {/* File */}
          <input
            className={styles.inputFile}
            type="file"
            name="img"
            id="img"
            onChange={handleImg}
          />
          <Button name="Enviar" type="submit" />
        </form>
      </section>
      <div></div>
    </>
  );
};

export default PostPhoto;
