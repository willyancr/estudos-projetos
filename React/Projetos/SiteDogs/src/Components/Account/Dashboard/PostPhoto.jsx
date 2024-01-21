import React from 'react';
import HeaderDashboard from './HeaderDashboard';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import styles from './PostPhoto.module.css';

const PostPhoto = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <HeaderDashboard title="Poste sua foto" />
      <section className={`${styles.main} container dashboardMain efeito`}>
        <form className={styles.mainForm} onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <Input />
          <label htmlFor="peso">
            Peso <span>(kg)</span>
          </label>
          <Input type="number" />
          <label htmlFor="idade">Idade</label>
          <Input />
          <input type="file" name="img" id="img" />
          <Button name="Enviar" type="submit" />
        </form>
      </section>
      <div></div>
    </>
  );
};

export default PostPhoto;
