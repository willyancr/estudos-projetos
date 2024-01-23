import styles from './Modal.module.css';

const Modal = ({ onClose, views, photo }) => {
  function handleModalClick(e) {
    e.stopPropagation(); // Impedir que o clique se propague para o conteúdo do modal
  }
  return (
    <div onClick={onClose} className={styles.modal}>
      <div onClick={handleModalClick} className={styles.modalContainer}>
        <div className={styles.modalImg}>
          <img src={photo} alt="" />
        </div>
        <div className={styles.modalForm}>
          <p className={styles.modalViews}>
            <a href="">@belinha</a>
            <span>
              <i className="fa-regular fa-eye"></i> {views}
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
