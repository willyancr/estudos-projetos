import React from 'react';
import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalImg}> 
          <img src="../image/dog.jpg" alt="" />
        </div>
        <div className={styles.modalForm}>
          <p className={styles.modalViews}>
            <a href="">@cat</a>
            <span>
              <i className="fa-regular fa-eye"></i> 21568
            </span>
          </p>
          <h1>Ellie</h1>
          <ul>
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
        <form>
          <textarea name="comment" id="comment"></textarea>
        </form>
      </div>
    </div>
  );
};

export default Modal;
