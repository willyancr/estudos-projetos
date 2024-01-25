import React from 'react';
import styles from './Modal.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const PhotoContent = ({ handleModalClick, dados }) => {
  const { photo, comment } = dados;
  const { data } = React.useContext(UserContext);

  return (
    <div onClick={handleModalClick} className={styles.modalContainer}>
      {/* Imagem */}
      <div className={styles.modalImg}>
        <img src={photo.src} alt="" />
      </div>
      {/* Infos da imagem */}
      <div className={styles.modalForm}>
        <p className={styles.modalViews}>
          {data.username === photo.author ? (
            <button className={styles.delete}>deletar</button>
          ) : (
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          )}
          <span>
            <i className="fa-regular fa-eye"></i> {photo.acessos}
          </span>
        </p>
        <h1>
          <Link to={`/foto/${photo.id}`} className={styles.modalTitle}>
            <span></span>
            {photo.title}
          </Link>
        </h1>
        <ul className={styles.modalDogInfos}>
          <li>| {photo.peso} kg</li>
          <li>
            | {photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
          </li>
        </ul>
      </div>
      <ul className={styles.modalComments}>
        <li>
          <b>{photo.author}:</b>
          <span>Linda essa dogzinha</span>
        </li>
      </ul>
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
