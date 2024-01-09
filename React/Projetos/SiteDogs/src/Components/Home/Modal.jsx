import React from 'react';
import styles from './Modal.module.css';
import Input from '../Input/Input';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalImg}>
          <img src="../image/dog.jpg" alt="" />
        </div>
        <div className={styles.modalForm}>
          <p className={styles.modalViews}>
            <a href="">@belinha</a>
            <span>
              <i className="fa-regular fa-eye"></i> 21568
            </span>
          </p>
          <h1 className={styles.modalTitle}>
            <span></span>Belinha
          </h1>
          <ul className={styles.modalDogInfos}>
            <li>| 5 kg</li>
            <li>| 09 anos</li>
          </ul>
        </div>
        <ul className={styles.modalComments}>
          <li>
            <b>cat:</b>
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
