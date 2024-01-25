import React from 'react';
import styles from './Modal.module.css';
import { Link } from 'react-router-dom';

const PhotoContent = ({ handleModalClick, dados }) => {
  const { photo, comment } = dados;

  return (
    <div onClick={handleModalClick} className={styles.modalContainer}>
      {/* Imagem */}
      <div className={styles.modalImg}>
        <img src={photo.src} alt="" />
      </div>
      {/* Infos da imagem */}
      <div className={styles.modalForm}>
        {/* Visualizacoes e autor */}
        <p className={styles.modalViews}>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <span>
            <i className="fa-regular fa-eye"></i> {photo.acessos}
          </span>
        </p>
        {/* Titulo */}
        <h1>
          <Link to={`/foto/${photo.id}`} className={styles.modalTitle}>
            <span></span>
            {photo.title}
          </Link>
        </h1>
        {/* Peso e Idade */}
        <ul className={styles.modalDogInfos}>
          <li>| {photo.peso} kg</li>
          <li>
            | {photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
          </li>
        </ul>
      </div>
      {/* Comentarios */}
      <ul className={styles.modalComments}>
        <li>
          <b>{photo.author}:</b>
          <span>Linda essa dogzinha</span>
        </li>
      </ul>
      {/* Enviar comentario */}
      <form className={styles.modalSendMsg}>
        <textarea
          name="comment"
          id="comment"
          placeholder="Comente..."
        ></textarea>
        <i className="fa-solid fa-square-arrow-up-right fa-2xl"></i>
      </form>
    </div>
  );
};

export default PhotoContent;
