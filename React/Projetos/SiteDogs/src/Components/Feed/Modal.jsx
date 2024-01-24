import React from 'react';
import styles from './Modal.module.css';
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';

const Modal = ({ onClose, photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [request, photo]);

  function handleModalClick(e) {
    e.stopPropagation(); // Impedir que o clique se propague para o conteúdo do modal
  }
  return (
    <div onClick={onClose} className={styles.modal}>
      <div onClick={handleModalClick} className={styles.modalContainer}>
        <div className={styles.modalImg}>
          <img src={photo.src} alt="" />
        </div>
        <div className={styles.modalForm}>
          <p className={styles.modalViews}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
              |{' '}
              {photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
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
    </div>
  );
};

export default Modal;
